-- Bookings, wash passes, gift vouchers, reviews and contact messages.
--
-- There is no `users` table. Every one of these used to carry a `userId` and
-- the moderation and admin routes sat behind a Convex `role === "admin"` check.
-- With auth removed the schema keeps only what the app actually needs to work:
--
--   * A booking carries the customer's name and phone. That used to come from
--     the account, and a booking with no way to reach the customer is not
--     actionable at the counter. Reviews inherit the author's first name from
--     here, which is what the landing page already showed.
--   * Passes and gift vouchers have no owner. See `server/README.md` for what
--     that costs: "you cannot redeem your own voucher" can no longer be
--     checked, because there is nobody to check it against.
--
-- The price columns are written by the server from `server/catalog.ts`. A
-- client never sends them.

CREATE TABLE IF NOT EXISTS bookings (
  id            TEXT    PRIMARY KEY,
  customer_name TEXT    NOT NULL CHECK (length(customer_name) >= 2),
  customer_phone TEXT   NOT NULL,
  service_id    TEXT    NOT NULL CHECK (service_id IN ('express', 'complete', 'premium', 'ceramic')),
  vehicle_type  TEXT    NOT NULL CHECK (vehicle_type IN ('small', 'sedan', 'suv', 'van')),
  vehicle_plate TEXT,
  -- ISO date, YYYY-MM-DD.
  date          TEXT    NOT NULL CHECK (date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'),
  time_slot     TEXT    NOT NULL CHECK (time_slot IN ('09:00', '11:00', '13:00', '16:00', '18:00')),
  price         REAL    NOT NULL CHECK (price >= 0),
  status        TEXT    NOT NULL CHECK (status IN ('pending', 'confirmed', 'done', 'cancelled')),
  notes         TEXT,
  -- JSON array of ExtraId.
  extras        TEXT    NOT NULL DEFAULT '[]',
  -- Percentage actually applied: 100 when a pass or voucher covered it, 10 for
  -- the promo, 0 for none.
  discount      INTEGER NOT NULL DEFAULT 0,
  -- The pass this booking consumed, so cancelling can hand the wash back.
  used_pass_id  TEXT    REFERENCES passes (id),
  pickup        INTEGER NOT NULL DEFAULT 0,
  gift_code     TEXT,
  created_at    INTEGER NOT NULL
);

-- Availability is asked for one day at a time; the admin panel sorts by date.
CREATE INDEX IF NOT EXISTS bookings_date ON bookings (date);
CREATE INDEX IF NOT EXISTS bookings_status ON bookings (status);
CREATE INDEX IF NOT EXISTS bookings_created ON bookings (created_at DESC);

CREATE TABLE IF NOT EXISTS passes (
  id           TEXT    PRIMARY KEY,
  service_id   TEXT    NOT NULL CHECK (service_id IN ('express', 'complete', 'premium', 'ceramic')),
  washes_total INTEGER NOT NULL CHECK (washes_total > 0),
  washes_used  INTEGER NOT NULL DEFAULT 0 CHECK (washes_used >= 0),
  price_paid   REAL    NOT NULL CHECK (price_paid > 0),
  purchased_at INTEGER NOT NULL,
  -- A booking consumes a wash, and must never take it past the total.
  CHECK (washes_used <= washes_total)
);

CREATE INDEX IF NOT EXISTS passes_purchased ON passes (purchased_at DESC);

CREATE TABLE IF NOT EXISTS gifts (
  id            TEXT    PRIMARY KEY,
  code          TEXT    NOT NULL UNIQUE,
  amount        REAL    NOT NULL CHECK (amount IN (25, 50, 100)),
  status        TEXT    NOT NULL CHECK (status IN ('active', 'redeemed')),
  created_at    INTEGER NOT NULL,
  -- Set when the voucher is spent, so the workshop can see who used it.
  redeemed_by   TEXT,
  redeemed_at   INTEGER
);

CREATE INDEX IF NOT EXISTS gifts_code ON gifts (code);
CREATE INDEX IF NOT EXISTS gifts_created ON gifts (created_at DESC);

CREATE TABLE IF NOT EXISTS reviews (
  id         TEXT    PRIMARY KEY,
  booking_id TEXT    NOT NULL UNIQUE REFERENCES bookings (id),
  -- The author's first name, copied from the booking. The landing page has
  -- always shown only the first word, for privacy.
  author     TEXT    NOT NULL,
  rating     INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment    TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS reviews_created ON reviews (created_at DESC);

CREATE TABLE IF NOT EXISTS messages (
  id         TEXT    PRIMARY KEY,
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL,
  phone      TEXT,
  body       TEXT    NOT NULL,
  status     TEXT    NOT NULL CHECK (status IN ('new', 'read')),
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS messages_status ON messages (status);
CREATE INDEX IF NOT EXISTS messages_created ON messages (created_at DESC);

-- One row per table, holding the last id issued, so ids stay unique and
-- self-describing even when two rows arrive in the same millisecond.
CREATE TABLE IF NOT EXISTS id_sequence (
  name  TEXT PRIMARY KEY,
  value INTEGER NOT NULL
);
