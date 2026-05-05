# Database And Orders

## Database

Database name: `Numapetstore`

Internal URL:

```txt
postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable
```

Use Alembic migrations. Backend must run migrations on start before serving traffic.

## Tables

### orders

Columns:

- `id` UUID primary key
- `order_number` text unique
- `status` text
- `customer_name` text
- `phone_raw` text
- `phone_e164` text
- `country` text default `PA`
- `currency` text default `USD`
- `subtotal` numeric
- `discount_total` numeric
- `shipping_total` numeric
- `total` numeric
- `payment_method` text default `COD`
- `source` text
- `landing_page` text
- `referrer` text
- `utm_source` text
- `utm_medium` text
- `utm_campaign` text
- `utm_content` text
- `utm_term` text
- `fbp` text
- `fbc` text
- `ttp` text
- `ttclid` text
- `scid` text
- `snap_click_id` text
- `user_agent` text
- `ip_address` text
- `event_id` text
- `created_at` timestamp
- `updated_at` timestamp

Statuses:

- `pending_confirmation`
- `confirmed`
- `delivered`
- `cancelled`
- `duplicate`
- `test`

### order_items

Columns:

- `id` UUID primary key
- `order_id` UUID foreign key
- `product_slug` text
- `product_name` text
- `offer_label` text
- `quantity` integer
- `unit_price` numeric
- `line_total` numeric
- `is_upsell` boolean default false
- `created_at` timestamp

### tracking_events

Columns:

- `id` UUID primary key
- `order_id` UUID nullable
- `event_name` text
- `event_id` text
- `provider` text
- `payload` jsonb
- `response` jsonb nullable
- `success` boolean default false
- `created_at` timestamp

### webhook_logs

Columns:

- `id` UUID primary key
- `order_id` UUID nullable
- `target` text
- `payload` jsonb
- `response_text` text nullable
- `status_code` integer nullable
- `success` boolean default false
- `created_at` timestamp

## Order Number

Format:

```txt
NMP-YYYYMMDD-000001
```

## Duplicate Logic

Prevent accidental duplicate COD orders:

- Same normalized phone.
- Same total.
- Same product set.
- Within 30 minutes.

If duplicate, return existing order or mark new one `duplicate`.

## Migration Requirement

Use Alembic:

- `alembic revision --autogenerate`
- `alembic upgrade head`

Docker start command should run migration first, then app.
