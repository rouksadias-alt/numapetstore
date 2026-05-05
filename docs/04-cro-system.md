# CRO System

## Conversion Goal

Primary conversion is a confirmed COD lead with name and Panama phone number. The website should maximize:

- Add-to-cart rate.
- Offer selection rate for 2-pack and 3-pack.
- Checkout form submit rate.
- Phone confirmation rate.
- AOV through cross-sells and one-time upsells.

## Product Page CTA

Every product page must have:

- Offer selector near CTA.
- Preselected 2-pack.
- CTA copy: `Agregar oferta al carrito`.
- On click: add selected offer to cart and open cart drawer.

## Product Card CRO

Each product card should include:

- Product name.
- Emotional heading.
- Short subheading.
- 4.8-4.9 star UI.
- "Pago contra entrega" badge.
- Best-value offer preview.
- CTA: `Elegir oferta`.

## Cart Drawer

Cart drawer must include:

- Order summary.
- Editable quantities.
- Chosen offer label.
- Savings message.
- Cross-sells based on product in cart.
- Trust strip: COD, WhatsApp confirmation, delivery areas.
- CTA: `Confirmar pedido`.

CTA opens checkout popup.

## Checkout Popup

Fields:

- Name.
- Phone.

Validation:

- Market is Panama.
- Accept `+507XXXXXXXX` or `XXXXXXXX`.
- Local number must be 8 digits.
- Normalize to E.164 `+507XXXXXXXX`.
- Do not validate KSA numbers unless market changes.

Checkout content:

- Order summary.
- Delivery note.
- Scarcity note.
- Social proof mini-card.
- CTA: `Confirmar mi pedido contra entrega`.

On valid submit:

1. Create order via backend.
2. Send tracking events with shared `event_id`.
3. Show one-time upsell modal for 10-15 seconds.
4. If no upsell accepted, redirect to thank-you page.

## One-Time Upsell

Rules:

- Show only after checkout lead submit.
- Relevant to cart contents.
- Discount only here.
- One-click add to existing order.
- Countdown 10-15 seconds.
- Buttons:
  - `Agregar a mi pedido`
  - `No gracias, continuar`

Recommended upsell mapping:

- PeloCero -> JuegaSolo or AguaViva.
- AguaViva -> PeloCero.
- JuegaSolo -> AguaViva.

## Thank You Page

Must include:

- Thank-you headline.
- Confirmation that WhatsApp/phone call may happen.
- Order summary.
- Delivery and COD expectations.
- Button to WhatsApp support.

Copy:

> Gracias. Recibimos tu pedido y lo vamos a confirmar por telefono o WhatsApp antes de enviarlo.

## Social Proof Plan

Before real data:

- Use placeholders in design only.
- Do not fake names/photos as real customers.

After UGC starts:

- Replace placeholders with real testimonials.
- Add customer city: Panama, San Miguelito, David, Chitre.
- Add "Compra verificada" only if verified.

## Confirmation Rate

To improve COD confirmation:

- Collect only name and phone first.
- Use simple, direct copy.
- Mention confirmation call/WhatsApp.
- Show COD clearly before form.
- Backend should store order status: `pending_confirmation`.
