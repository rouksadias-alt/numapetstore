# Backend Architecture

## Stack

Use:

- Python 3.12+
- FastAPI
- Pydantic Settings
- SQLAlchemy 2.x async
- Alembic migrations
- asyncpg
- httpx
- PostgreSQL
- Uvicorn/FastAPI CLI

## Folder Structure

Target backend folder:

```txt
backend/
  app/
    main.py
    core/
      config.py
      security.py
      logging.py
    db/
      session.py
      base.py
      migrations/
    models/
      order.py
      order_item.py
      tracking_event.py
    schemas/
      order.py
      tracking.py
    api/
      routes/
        health.py
        orders.py
        tracking.py
    services/
      sheets.py
      meta_capi.py
      tiktok_events.py
      snap_capi.py
      hashing.py
      phone.py
  alembic.ini
  requirements.txt
  Dockerfile
```

## FastAPI App

Use FastAPI lifespan for startup tasks. Context7 FastAPI docs recommend the `lifespan` async context manager instead of old startup/shutdown handlers for application resource management.

On startup:

- Run database migrations before serving traffic.
- Validate required env variables.
- Initialize DB connection.

Endpoints:

- `GET /api/health`
- `POST /api/orders`
- `POST /api/orders/{order_id}/upsell`
- `POST /api/tracking/events`

## CORS

Allow:

- `https://numapet.store`
- local dev URL

Do not allow `*` in production.

## Order Creation

`POST /api/orders` receives:

- Customer name.
- Phone.
- Normalized phone.
- Cart items.
- Offers.
- Totals.
- UTM parameters.
- Pixel browser IDs.
- Event IDs.
- Landing page URL.
- User agent.
- IP address from request.

Backend:

1. Validates Panama phone.
2. Creates order in Postgres.
3. Sends server-side CAPI events.
4. Sends row to Google Sheets webhook.
5. Returns order ID and thank-you URL.

## Phone Rules

Panama default:

- Accept `+507XXXXXXXX`.
- Accept `XXXXXXXX`.
- Remove spaces, dashes and parentheses.
- Normalize to `+507XXXXXXXX`.
- Store both raw and normalized.

Do not validate KSA unless market changes.

## Hashing

Hash only server-side for CAPI:

- Lowercase and trim text values.
- Normalize phone first.
- SHA-256 hex digest.

Provider differences:

- Meta: send hashed phone in `ph`; include `+507` normalized before hashing.
- TikTok: send SHA-256 hashed phone. Prefer E.164 format with `+507` before hashing unless official account docs say otherwise.
- Snap: normalize phone as digits only with country code, no `+`, then SHA-256. Example format: `507XXXXXXXX`.

## Security

- Never expose CAPI access tokens to frontend.
- Add request size limits.
- Use server-side validation.
- Log errors without leaking tokens.
- Store webhook failures for retry if possible.

## Database URL

Use env:

```txt
DATABASE_URL=postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable
```

App code may need to convert `postgres://` to `postgresql+asyncpg://` for SQLAlchemy async.
