#!/usr/bin/env sh
set -e

GEO_DIR="${GEO_DIR:-/data/geoip}"
EDITIONS="${MAXMIND_EDITION_IDS:-GeoLite2-City}"

if [ -n "$MAXMIND_ACCOUNT_ID" ] && [ -n "$MAXMIND_LICENSE_KEY" ]; then
  mkdir -p "$GEO_DIR"
  printf 'AccountID %s\nLicenseKey %s\nEditionIDs %s\nDatabaseDirectory %s\n' \
    "$MAXMIND_ACCOUNT_ID" "$MAXMIND_LICENSE_KEY" "$EDITIONS" "$GEO_DIR" \
    > /etc/GeoIP.conf
  echo "[entrypoint] Updating MaxMind DB(s): $EDITIONS"
  geoipupdate -v || echo "[entrypoint] WARN: geoipupdate failed; continuing without fresh DB"
else
  echo "[entrypoint] MAXMIND_ACCOUNT_ID/LICENSE_KEY not set; skipping geoipupdate"
fi

exec "$@"
