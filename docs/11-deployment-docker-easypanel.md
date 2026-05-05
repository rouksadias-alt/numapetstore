# Deployment, Docker, EasyPanel

## Target Structure

The AI coder must deliver:

```txt
frontend/
backend/
docs/
docker-compose.yml
README.md
```

## Domains

- Frontend: `https://numapet.store`
- Backend: `https://api.numapet.store`

## Frontend Dockerfile

Requirements:

- Multi-stage Node build.
- Run `npm ci`.
- Run `npm run build`.
- Start Next.js server.
- Expose `3000`.

## Backend Dockerfile

Requirements:

- Python 3.12 slim.
- Install requirements.
- Run Alembic migrations before starting.
- Start FastAPI on `0.0.0.0:8000`.
- Expose `8000`.

Start command pattern:

```sh
alembic upgrade head && fastapi run app/main.py --host 0.0.0.0 --port 8000
```

## EasyPanel Notes

Use the existing PostgreSQL service. Backend env:

```txt
DATABASE_URL=postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable
```

Frontend env:

```txt
NEXT_PUBLIC_API_URL=https://api.numapet.store
NEXT_PUBLIC_SITE_URL=https://numapet.store
```

Backend CORS must allow:

```txt
https://numapet.store
```

## Health Checks

Backend:

```txt
GET /api/health
```

Returns:

```json
{"status":"ok"}
```

Frontend:

- Home route must return 200.

## GitHub

Before push:

- `frontend`: lint and build.
- `backend`: type check if configured, run tests, import check.
- No secrets committed.
- Env examples included.

## Production Checklist

- Domains connected.
- CORS correct.
- Pixel IDs added.
- CAPI tokens added.
- Google Sheets webhook added.
- Test order works.
- Test CAPI diagnostics.
- COD confirmation workflow tested.
