#requires -Version 5.1
<#
.SYNOPSIS
  Opens an SSH tunnel from localhost:5432 to the Easypanel project's Postgres
  via a socat proxy container running on the Easypanel host.

.DESCRIPTION
  Daily use:
    .\dev\easypanel-tunnel.ps1 -SshHost <ip-or-domain>

  First time on a new machine (installs pubkey, writes ~/.ssh/config entry,
  launches the socat proxy container on the host with --restart unless-stopped):
    .\dev\easypanel-tunnel.ps1 -SshHost <ip-or-domain> -InitialSetup

  Once initial setup is done, the tunnel is just:
    ssh -N easypanel-pg          # alias added to ~/.ssh/config

  ...but this script also wraps that for convenience.

.PARAMETER SshHost
  Public IP or domain of the Easypanel host. Required on first run; after
  initial setup it's read from ~/.ssh/config.

.PARAMETER SshUser
  Defaults to "root" (Easypanel's default).

.PARAMETER SshPort
  Defaults to 22.

.PARAMETER Project
  Easypanel project name. Defaults to "numapetstore".

.PARAMETER PgService
  Docker hostname of the Postgres service inside the project's network.
  Defaults to "numapetstore_database" (from your connection string).

.PARAMETER LocalPort
  Local port to bind the tunnel to. Defaults to 5432.

.PARAMETER InitialSetup
  Run one-time setup: install pubkey, write SSH config alias, launch socat
  proxy on host. Will prompt for the SSH password ONCE.

.PARAMETER TeardownProxy
  Stop and remove the socat proxy container on the host. Use when you're done
  for the long term or rotating creds.
#>

[CmdletBinding()]
param(
    [string]$SshHost,
    [string]$SshUser = "root",
    [int]$SshPort = 22,
    [string]$Project = "numapetstore",
    [string]$PgService = "numapetstore_database",
    [int]$LocalPort = 5432,
    [switch]$InitialSetup,
    [switch]$TeardownProxy
)

$ErrorActionPreference = "Stop"

$KeyPath = "$env:USERPROFILE\.ssh\easypanel_ed25519"
$PubKeyPath = "$KeyPath.pub"
$SshConfigPath = "$env:USERPROFILE\.ssh\config"
$SshAlias = "easypanel-pg"
$ProxyContainer = "easypanel-pg-proxy-$Project"

function Assert-KeyExists {
    if (-not (Test-Path $KeyPath) -or -not (Test-Path $PubKeyPath)) {
        throw "Key not found at $KeyPath. Generate with: ssh-keygen -t ed25519 -f $KeyPath -N '`"`"'"
    }
}

function Ensure-SshConfigEntry {
    param([string]$ResolvedHost)

    $entry = @"

Host $SshAlias
    HostName $ResolvedHost
    User $SshUser
    Port $SshPort
    IdentityFile $KeyPath
    IdentitiesOnly yes
    ServerAliveInterval 60
    ServerAliveCountMax 3
"@

    if (-not (Test-Path $SshConfigPath)) {
        New-Item -ItemType File -Path $SshConfigPath -Force | Out-Null
    }

    $existing = Get-Content $SshConfigPath -Raw -ErrorAction SilentlyContinue
    if ($existing -match "(?m)^Host\s+$([regex]::Escape($SshAlias))\s*$") {
        Write-Host "SSH config already has Host $SshAlias entry, leaving as-is." -ForegroundColor DarkGray
        return
    }

    Add-Content -Path $SshConfigPath -Value $entry
    Write-Host "Added Host $SshAlias to $SshConfigPath" -ForegroundColor Green
}

function Install-PublicKey {
    param([string]$ResolvedHost)

    Write-Host "Installing public key on $ResolvedHost (you'll be prompted for the password ONCE)..." -ForegroundColor Cyan
    $pub = (Get-Content $PubKeyPath -Raw).Trim()
    $remoteCmd = @"
mkdir -p ~/.ssh && chmod 700 ~/.ssh && touch ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys && grep -qxF '$pub' ~/.ssh/authorized_keys || echo '$pub' >> ~/.ssh/authorized_keys
"@
    & ssh -p $SshPort -o PubkeyAuthentication=no -o PreferredAuthentications=password "$SshUser@$ResolvedHost" $remoteCmd
    if ($LASTEXITCODE -ne 0) { throw "Failed to install public key on host." }
    Write-Host "Public key installed." -ForegroundColor Green
}

function Find-DockerNetwork {
    Write-Host "Discovering Docker network for project '$Project'..." -ForegroundColor Cyan
    $nets = & ssh $SshAlias "docker network ls --format '{{.Name}}' | grep -E '^$Project(_|-).*' || true"
    if ($LASTEXITCODE -ne 0) { throw "Could not list Docker networks on host." }
    $candidates = $nets -split "`n" | Where-Object { $_ -ne "" }
    if (-not $candidates -or $candidates.Count -eq 0) {
        throw "No Docker network matching '$Project' found on the host. Run ``ssh $SshAlias 'docker network ls'`` to inspect."
    }
    if ($candidates.Count -gt 1) {
        Write-Warning "Multiple candidate networks: $($candidates -join ', '). Picking the first."
    }
    $net = $candidates[0].Trim()
    Write-Host "Network: $net" -ForegroundColor Green
    return $net
}

function Launch-SocatProxy {
    param([string]$Network)

    $existing = & ssh $SshAlias "docker ps -a --filter name=^$ProxyContainer`$ --format '{{.Names}}' || true"
    if ($existing -match $ProxyContainer) {
        Write-Host "Restarting existing proxy container $ProxyContainer..." -ForegroundColor DarkGray
        & ssh $SshAlias "docker rm -f $ProxyContainer >/dev/null 2>&1 || true"
    }

    Write-Host "Launching socat proxy container ($ProxyContainer) on network $Network..." -ForegroundColor Cyan
    $cmd = "docker run -d --name $ProxyContainer --restart unless-stopped --network $Network -p 127.0.0.1:5432:5432 alpine/socat tcp-listen:5432,fork,reuseaddr tcp:${PgService}:5432"
    & ssh $SshAlias $cmd
    if ($LASTEXITCODE -ne 0) { throw "Failed to launch proxy container." }
    Write-Host "Proxy is up and bound to host's 127.0.0.1:5432." -ForegroundColor Green
}

function Test-Tunnel {
    Write-Host "Smoke-testing tunnel by opening a TCP connection..." -ForegroundColor Cyan
    Start-Sleep -Seconds 2
    try {
        $client = [System.Net.Sockets.TcpClient]::new()
        $task = $client.ConnectAsync("127.0.0.1", $LocalPort)
        if (-not $task.Wait(3000)) { throw "Connection timed out." }
        $client.Close()
        Write-Host "127.0.0.1:$LocalPort is reachable." -ForegroundColor Green
    } catch {
        Write-Warning "Could not connect to 127.0.0.1:$LocalPort -- the tunnel is probably still negotiating, or the proxy container isn't healthy yet."
    }
}

# --- Main flow ---

Assert-KeyExists

if ($TeardownProxy) {
    if (-not $SshHost -and -not (Select-String -Path $SshConfigPath -Pattern "^Host $SshAlias\s*$" -Quiet -ErrorAction SilentlyContinue)) {
        throw "Need -SshHost or an existing $SshAlias entry in $SshConfigPath."
    }
    Write-Host "Tearing down proxy container $ProxyContainer..." -ForegroundColor Cyan
    & ssh $SshAlias "docker rm -f $ProxyContainer >/dev/null 2>&1 || true"
    Write-Host "Done." -ForegroundColor Green
    return
}

if ($InitialSetup) {
    if (-not $SshHost) { throw "-SshHost is required for -InitialSetup." }
    Install-PublicKey -ResolvedHost $SshHost
    Ensure-SshConfigEntry -ResolvedHost $SshHost
    $net = Find-DockerNetwork
    Launch-SocatProxy -Network $net
    Write-Host ""
    Write-Host "Setup complete. Opening tunnel now (Ctrl+C to stop)." -ForegroundColor Green
    Write-Host ""
}

# Open the tunnel (foreground, blocks until Ctrl+C).
Write-Host "Opening tunnel: localhost:$LocalPort -> $SshAlias:127.0.0.1:5432" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to close." -ForegroundColor DarkGray

# Background the smoke test so it runs after the tunnel comes up.
Start-Job -ScriptBlock {
    param($p)
    Start-Sleep -Seconds 2
    try {
        $c = [System.Net.Sockets.TcpClient]::new()
        $t = $c.ConnectAsync("127.0.0.1", $p)
        if ($t.Wait(3000)) { Write-Host "[tunnel-check] 127.0.0.1:$p reachable." -ForegroundColor Green }
        else { Write-Host "[tunnel-check] 127.0.0.1:$p not yet reachable." -ForegroundColor Yellow }
        $c.Close()
    } catch {
        Write-Host "[tunnel-check] connect failed: $_" -ForegroundColor Yellow
    }
} -ArgumentList $LocalPort | Out-Null

& ssh -N -L "${LocalPort}:127.0.0.1:5432" $SshAlias
