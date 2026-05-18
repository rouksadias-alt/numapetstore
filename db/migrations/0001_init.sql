-- Initial schema for Panama Tropical Store.
-- Numeric ids (smallint range is plenty for the catalog) so existing seed data keeps id 1..6.
-- Prices are stored as integers (whole USD) because the current UI uses whole-dollar amounts.

CREATE TABLE IF NOT EXISTS products (
    id          INTEGER       PRIMARY KEY,
    name        TEXT          NOT NULL,
    category    TEXT          NOT NULL,
    price       INTEGER       NOT NULL CHECK (price >= 0),
    old_price   INTEGER                CHECK (old_price IS NULL OR old_price >= 0),
    description TEXT          NOT NULL,
    badge       TEXT          NOT NULL,
    color       TEXT          NOT NULL,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ   NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS products_set_updated_at ON products;

CREATE TRIGGER products_set_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
