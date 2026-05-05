# AI Coder Prompt

Use this prompt with the AI coder.

```txt
You are a senior full-stack engineer and DTC ecommerce CRO builder.

Build Numapetstore using the docs in this repository. Read every file in /docs before coding:

- docs/README.md
- docs/01-brand-positioning.md
- docs/02-products-offers.md
- docs/03-site-map-copy.md
- docs/04-cro-system.md
- docs/05-design-system.md
- docs/06-frontend-architecture.md
- docs/07-backend-architecture.md
- docs/08-database-and-orders.md
- docs/09-pixels-capi.md
- docs/10-sheets-webhook.md
- docs/11-deployment-docker-easypanel.md

Goal:
Create a premium branded DTC pet store for Panama in Spanish, not a generic dropshipping store. The site must look like Numapetstore owns the products and must maximize COD lead conversion, trust, authority, AOV, and ad traffic conversion from TikTok/Snapchat/Meta.

Important:
The market is Panama. Use Spanish for Panama, USD, and +507 phone validation. Do not use KSA dialect, KSA numbers, or SAR unless the owner explicitly changes the market.

Deliver:

1. frontend/
- Next.js App Router, React, TypeScript, Tailwind CSS.
- Responsive branded storefront.
- Header with N inside a deep teal circle and text logo Numapetstore.
- Homepage, collection page, product pages for:
  - PeloCero Casa Kit
  - AguaViva Flow
  - JuegaSolo Motion Kit
- About page, Contact page, Thank-you page.
- Product offers:
  - 1 piece: $45
  - 2 pieces: $65
  - 3 pieces: $79
- Product CTA adds selected offer to cart and opens cart drawer.
- Cart drawer with cross-sells.
- Checkout popup with only name and phone.
- Panama phone validation and normalization.
- One-time post-submit upsell modal for 10-15 seconds.
- Web pixels for Meta, TikTok and Snapchat using deferred Next.js Script loading.
- Shared event_id for browser pixel and backend CAPI deduplication.
- frontend/.env.example.
- Dockerfile.

2. backend/
- FastAPI, Pydantic Settings, SQLAlchemy async, Alembic, PostgreSQL.
- Database migrations run on backend start.
- Orders API.
- Upsell API.
- Tracking events API.
- Google Sheets webhook sender.
- Meta CAPI, TikTok Events API, Snap CAPI services.
- Server-side SHA-256 hashing for CAPI customer data.
- Provider-specific phone normalization:
  - Meta/TikTok: E.164 +507 before hashing unless provider account docs require otherwise.
  - Snap: digits only, country code included, no plus before hashing.
- backend/.env.example.
- Dockerfile.

3. root
- docker-compose.yml.
- README with local dev and EasyPanel deploy instructions.
- Use database URL env:
  postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable

4. Google Sheets
- Include Apps Script webhook code based on docs/templates/google-apps-script-webhook.js.
- Include sheet columns from docs/templates/*.csv.

Quality bar:
- Mobile-first.
- Premium branded design.
- Fast loading.
- No fake proof presented as real.
- Placeholders for images/UGC clearly marked for replacement.
- Strong CRO sections: authority, social proof, guarantees, FAQ, scarcity, offer ladder, trust strips.
- No secrets committed.
- All builds pass.
```
