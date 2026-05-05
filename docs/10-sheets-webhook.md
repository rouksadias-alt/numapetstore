# Google Sheets Webhook

## Purpose

Every order should be stored in PostgreSQL and also sent to Google Sheets for easy operations, confirmation calls, delivery tracking, and media buyer review.

## Flow

1. Frontend submits checkout.
2. Backend creates order.
3. Backend sends order payload to Google Apps Script webhook.
4. Apps Script appends row to Google Sheet.
5. Backend logs webhook result.

## Sheet Tabs

Create 2 tabs:

- `Orders`
- `Events`

Templates are in:

- `templates/orders-sheet-columns.csv`
- `templates/order-events-sheet-columns.csv`

## Apps Script

Use:

- `templates/google-apps-script-webhook.js`

Deploy as:

- Google Apps Script web app.
- Execute as owner.
- Access: anyone with the link.

Then add the deployment URL to backend env:

```txt
GOOGLE_SHEETS_WEBHOOK_URL=
GOOGLE_SHEETS_WEBHOOK_SECRET=
```

## Webhook Payload

Backend should send:

- `secret`
- `type`: `order` or `event`
- `order`
- `items`
- `tracking`
- `created_at`

Apps Script validates the secret before writing.

## Sheet Security

- Do not expose webhook URL in frontend.
- Backend only.
- Rotate secret if leaked.

## Operational Columns

Orders sheet must support manual operations:

- status
- confirmation_notes
- delivery_city
- delivery_address
- courier
- delivery_attempts
- cancellation_reason

Even if the frontend only collects name and phone, operators can fill address after WhatsApp/phone confirmation.
