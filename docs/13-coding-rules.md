# Coding Rules

## General

- Keep implementation simple and production-ready.
- Prefer typed config over magic strings.
- Do not hardcode secrets.
- Do not fake certifications, reviews or medical claims.
- Use Panama defaults unless owner explicitly changes market.
- Every page must be responsive.

## Frontend

- Use TypeScript everywhere.
- Use Server Components by default.
- Use Client Components only for cart, checkout, modals, tracking and interactive UI.
- Use Tailwind utility classes with reusable components.
- Put product data in `frontend/config/products.ts` for MVP.
- Put copy constants in config files when reused.
- Generate `event_id` once per tracked event.
- Never put CAPI tokens in frontend.
- Use `next/script` for third-party pixels.
- Use `next/image` for images.
- Keep image placeholders clearly labeled.

## Backend

- Use Pydantic schemas for request/response validation.
- Use Pydantic Settings for env.
- Use SQLAlchemy models and Alembic migrations.
- Run migrations on app start in Docker.
- Validate and normalize phone server-side too.
- Hash CAPI customer data server-side only.
- Log provider responses in `tracking_events`.
- Retry Google Sheets webhook if possible.
- Do not allow wildcard CORS in production.

## Testing

Frontend:

- Lint.
- Build.
- Test phone validation.
- Test cart drawer and offer selection.
- Test checkout flow.

Backend:

- Test health endpoint.
- Test order creation.
- Test duplicate prevention.
- Test phone normalization.
- Test hashing format.
- Test webhook payload shape.

## Definition Of Done

- User can open homepage.
- User can select offers on every product page.
- Product CTA opens cart drawer.
- Cart cross-sells work.
- Checkout accepts only valid Panama phone.
- Order reaches backend and PostgreSQL.
- Order reaches Google Sheets.
- Pixels fire in browser.
- CAPI events fire server-side with shared event IDs.
- Thank-you page shows order summary.
- Docker deploy instructions work.
