# Numapetstore Docs

This folder is the execution brief for the AI coder who will build `Numapetstore`, a branded DTC pet store for Panama.

## Core Decision

- Brand: `Numapetstore`
- Domain: `numapet.store`
- Backend domain: `api.numapet.store`
- Market: Panama
- Language: Spanish for Panama, clear and premium, not generic Spanish
- Currency: USD
- Sales model: COD first, with high-AOV bundles and cart cross-sells
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Python FastAPI, PostgreSQL, server-side tracking, order webhook
- Database name: `Numapetstore`
- Existing internal database URL:

```txt
postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable
```

## Important Conflict To Resolve

The original request mentions Panama/Spanish/USD, but also mentions KSA dialect, KSA phone validation, and `99 SAR`. Unless the owner explicitly changes the market, the coder must use:

- Panama phone validation: `+507` plus 8 local digits
- Currency: USD
- Copy: Spanish for Panama
- Upsell price: use USD, not SAR

Recommended one-time upsell price: `$19` for accessory add-ons or `$29` for premium cross-sell. Do not display SAR.

## Files

- `01-brand-positioning.md`: brand, ICP, trust angles, claims boundaries.
- `02-products-offers.md`: product positioning, offers, bundles, AOV strategy.
- `03-site-map-copy.md`: pages, sections, Spanish copy direction.
- `04-cro-system.md`: conversion architecture, cart drawer, checkout popup, upsells.
- `05-design-system.md`: visual identity, logo/header, UI rules.
- `06-frontend-architecture.md`: Next.js frontend implementation plan.
- `07-backend-architecture.md`: FastAPI backend implementation plan.
- `08-database-and-orders.md`: schema, migrations, order lifecycle.
- `09-pixels-capi.md`: Meta/TikTok/Snap pixels and server-side CAPI rules.
- `10-sheets-webhook.md`: Google Sheets webhook and columns.
- `11-deployment-docker-easypanel.md`: Docker, env, EasyPanel deployment.
- `12-ai-coder-prompt.md`: final prompt to give to the AI coder.

Templates:

- `templates/orders-sheet-columns.csv`
- `templates/order-events-sheet-columns.csv`
- `templates/google-apps-script-webhook.js`
- `templates/frontend.env.example`
- `templates/backend.env.example`
