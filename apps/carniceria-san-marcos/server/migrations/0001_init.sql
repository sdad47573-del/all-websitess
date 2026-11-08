-- Customer orders.
--
-- The shop sells by weight, so totals are computed on the client from the cart
-- and confirmed here. `subtotal + shipping` must equal `total`; the API checks
-- that, so a tampered cart cannot be charged a different amount than quoted.

CREATE TABLE IF NOT EXISTS orders (
  id            TEXT    PRIMARY KEY,
  created_at    INTEGER NOT NULL,
  status        TEXT    NOT NULL CHECK (status IN ('pending', 'paid', 'cancelled')),
  method        TEXT    NOT NULL CHECK (method IN ('card', 'whatsapp')),
  items         TEXT    NOT NULL,           -- JSON array of { label, amount }
  subtotal      REAL    NOT NULL,
  shipping      REAL    NOT NULL,
  total         REAL    NOT NULL,
  name          TEXT,
  phone         TEXT,
  delivery      TEXT    NOT NULL CHECK (delivery IN ('recogida', 'domicilio')),
  time          TEXT,
  notes         TEXT,
  stripe_session_id TEXT
);

CREATE INDEX IF NOT EXISTS orders_created_at ON orders (created_at DESC);
CREATE INDEX IF NOT EXISTS orders_status      ON orders (status);

-- One row per table, holding the last id issued, so ids stay unique and
-- self-describing even when two orders arrive in the same millisecond.
CREATE TABLE IF NOT EXISTS id_sequence (
  name  TEXT PRIMARY KEY,
  value INTEGER NOT NULL
);
