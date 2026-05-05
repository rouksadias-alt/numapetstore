# Frontend Architecture

## Stack

Use:

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Zustand for cart state.
- React Hook Form + Zod for checkout validation.
- TanStack Query only if needed for server state.
- Framer Motion only for small modal/drawer transitions.
- `next/script` for web pixels.

Avoid:

- Heavy UI frameworks.
- Client-side everything.
- Fake reviews hardcoded as real.
- Complex state managers beyond cart/order UI.

## Folder Structure

Target frontend folder:

```txt
frontend/
  app/
    layout.tsx
    page.tsx
    collection/page.tsx
    products/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    thank-you/page.tsx
  components/
    layout/
    product/
    cart/
    checkout/
    tracking/
    ui/
  config/
    brand.ts
    products.ts
    offers.ts
    routes.ts
  lib/
    api.ts
    phone.ts
    tracking.ts
    event-id.ts
  stores/
    cart-store.ts
  types/
```

## Rendering

- Marketing pages can be static/server components where possible.
- Cart, offer selection, checkout popup and tracking are client components.
- Keep product data in `config/products.ts` for MVP.
- Later move product data to backend/admin if needed.

## Environment Variables

Frontend env variables must use `NEXT_PUBLIC_` only for public IDs.

Required:

- `NEXT_PUBLIC_SITE_URL=https://numapet.store`
- `NEXT_PUBLIC_API_URL=https://api.numapet.store`
- `NEXT_PUBLIC_META_PIXEL_ID=`
- `NEXT_PUBLIC_TIKTOK_PIXEL_ID=`
- `NEXT_PUBLIC_SNAP_PIXEL_ID=`

Never expose CAPI tokens in frontend.

## Tracking Scripts

Use Next.js `Script`:

- Global pixel bootstrap in root layout or tracking provider.
- Strategy: `afterInteractive` for core pixel init.
- Use `lazyOnload` for non-critical scripts if acceptable.
- Defer optional scripts for speed.

Official Next.js docs confirm `afterInteractive` loads after first-party code and `lazyOnload` loads during browser idle time.

## Event ID

Generate one shared `event_id` per event:

- `PageView`
- `ViewContent`
- `AddToCart`
- `InitiateCheckout`
- `Lead`
- `Purchase` or `OrderSubmitted`
- `UpsellAccepted`

Frontend sends the same `event_id` to:

- Web pixel.
- Backend CAPI endpoint.
- Order creation payload.

This enables deduplication.

## API Calls

Frontend calls backend:

- `POST /api/orders`
- `POST /api/orders/{id}/upsell`
- `POST /api/tracking/events`
- `GET /api/health`

All calls should include:

- `event_id`
- `fbp`, `fbc` when available.
- TikTok click ID when available.
- Snap click ID when available.
- User agent.
- URL.
- Referrer.

## Performance

- Optimize images with `next/image`.
- Use static product config.
- Keep cart drawer lightweight.
- Avoid blocking third-party scripts.
- Use route-level metadata for SEO.
- Lighthouse goal: mobile performance 85+ before ads.
