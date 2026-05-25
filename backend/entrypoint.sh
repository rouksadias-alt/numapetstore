#!/usr/bin/env sh
set -e

echo "[entrypoint] Starting backend..."

GEO_DIR="${GEO_DIR:-/data/geoip}"
EDITIONS="${MAXMIND_EDITION_IDS:-GeoLite2-City}"

if [ -n "$MAXMIND_ACCOUNT_ID" ] && [ -n "$MAXMIND_LICENSE_KEY" ]; then
  if command -v geoipupdate >/dev/null 2>&1; then
    mkdir -p "$GEO_DIR"
    printf 'AccountID %s\nLicenseKey %s\nEditionIDs %s\nDatabaseDirectory %s\n' \
      "$MAXMIND_ACCOUNT_ID" "$MAXMIND_LICENSE_KEY" "$EDITIONS" "$GEO_DIR" \
      > /etc/GeoIP.conf
    echo "[entrypoint] Updating MaxMind DB(s): $EDITIONS"
    timeout 60 geoipupdate -v || echo "[entrypoint] WARN: geoipupdate failed; continuing without fresh DB"
  else
    echo "[entrypoint] geoipupdate not found; skipping"
  fi
else
  echo "[entrypoint] MAXMIND credentials not set; skipping geoipupdate"
fi

echo "[entrypoint] Launching app..."
exec "$@"
