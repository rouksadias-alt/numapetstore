# Pixels And CAPI

## Goal

Run browser pixels and server-side CAPI together with clean deduplication.

Providers:

- Meta Pixel + Meta Conversions API
- TikTok Pixel + TikTok Events API
- Snapchat Pixel + Snap Conversions API

## Events

Track:

- `PageView`
- `ViewContent`
- `AddToCart`
- `InitiateCheckout`
- `Lead`
- `Purchase` or `OrderSubmitted`
- `UpsellAccepted`

For a COD store, use `Lead` and/or `Purchase` carefully:

- `Lead`: when customer submits valid name and phone.
- `Purchase`: only if business wants COD submissions optimized as purchases.
- Recommended initial optimization: send both, but clearly map `Purchase` to `OrderSubmitted` internally.

## Deduplication

Generate a unique `event_id` for each event. Send the exact same `event_id` to:

- Browser pixel event.
- Backend CAPI event.

Meta official docs identify event deduplication through matching browser and server events using event identifiers. TikTok docs require `event_id` for deduplication across Pixel and Events API. Snap docs use event IDs/client dedup IDs across Pixel and CAPI.

## Script Loading

Use Next.js `next/script`:

- `afterInteractive` for core pixel initialization.
- `lazyOnload` for lower priority scripts where possible.
- Keep tokens server-only.

Do not block rendering with pixels.

## Browser Data Collection

Collect and forward:

- URL.
- Referrer.
- User agent.
- `fbp`.
- `fbc`.
- `_ttp` or TikTok cookie if available.
- `ttclid` from URL.
- Snap click ID from URL if available.
- UTM parameters.

## Server-Side Hashing

No hashing needed in browser for web pixels.

Hashing is required server-side for CAPI customer data.

General rules:

- Trim.
- Lowercase where applicable.
- Normalize phone first.
- SHA-256 hex digest.

## Phone Normalization By Provider

Market default is Panama.

Stored phone:

```txt
+507XXXXXXXX
```

Meta:

- Use normalized E.164 phone before hashing.
- Example raw normalized value before hash: `+50761234567`.

TikTok:

- Use SHA-256 hashed phone.
- Prefer E.164 with `+507` before hashing, because TikTok docs emphasize normalized customer data and phone matching.
- If account-specific TikTok docs require another exact format, update `services/tiktok_events.py`.

Snap:

- Snap docs normalize phone as digits only with country code and no non-numeric characters.
- Example before hash: `50761234567`.
- Do not include `+` for Snap hash.

## Backend Endpoints

Frontend sends events to:

```txt
POST /api/tracking/events
```

Payload:

- `event_name`
- `event_id`
- `order_id` nullable
- `product_slug` nullable
- `value`
- `currency`
- `url`
- `referrer`
- `utm`
- `browser_ids`
- `customer` where available

Backend fans out to Meta/TikTok/Snap.

## Required Backend Env

- `META_PIXEL_ID`
- `META_CAPI_ACCESS_TOKEN`
- `TIKTOK_PIXEL_ID`
- `TIKTOK_ACCESS_TOKEN`
- `SNAP_PIXEL_ID`
- `SNAP_ACCESS_TOKEN`
- `SNAP_AD_ACCOUNT_ID`

## Testing

Before launch:

- Meta Events Manager Test Events.
- TikTok Events Manager diagnostics.
- Snap Events Manager diagnostics.
- Verify browser and server event deduplication.
- Verify no duplicate purchases/leads.
- Verify phone hashing is server-side only.
