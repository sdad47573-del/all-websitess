-- Brilliantza · Limpieza profesional — esquema SQLite (sustituye a Convex).

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id                      TEXT PRIMARY KEY,
  name                    TEXT,
  image                   TEXT,
  email                   TEXT UNIQUE,
  email_verification_time INTEGER,
  is_anonymous            INTEGER NOT NULL DEFAULT 0,
  role                    TEXT,
  freebuff_subject        TEXT UNIQUE,
  referral_code           TEXT UNIQUE,
  loyalty_count           INTEGER NOT NULL DEFAULT 0,
  loyalty_reward_ready    INTEGER NOT NULL DEFAULT 0,
  created_at              INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);

CREATE TABLE IF NOT EXISTS sessions (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user_idx ON sessions (user_id);

CREATE TABLE IF NOT EXISTS verification_codes (
  id          TEXT PRIMARY KEY,
  identifier  TEXT NOT NULL,
  salt        TEXT NOT NULL,
  code_hash   TEXT NOT NULL,
  attempts    INTEGER NOT NULL DEFAULT 0,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS verification_codes_identifier_idx
  ON verification_codes (identifier);

-- Reservas de servicios de limpieza.
CREATE TABLE IF NOT EXISTS bookings (
  id                TEXT PRIMARY KEY,
  user_id           TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  service_type      TEXT NOT NULL,
  frequency         TEXT NOT NULL,
  bedrooms          INTEGER NOT NULL,
  bathrooms         INTEGER NOT NULL,
  extras            TEXT NOT NULL DEFAULT '[]',  -- JSON array
  address           TEXT NOT NULL,
  city              TEXT NOT NULL,
  postal_code       TEXT,
  preferred_date    TEXT NOT NULL,   -- YYYY-MM-DD
  preferred_slot    TEXT NOT NULL,   -- "morning" | "afternoon" | "evening"
  price             REAL NOT NULL,   -- euros
  duration_hours    REAL NOT NULL,
  status            TEXT NOT NULL
                    CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  payment_status    TEXT CHECK (payment_status IN ('unpaid', 'paid', 'refunded')),
  stripe_session_id TEXT,
  notes             TEXT,
  rating            REAL CHECK (rating IS NULL OR (rating >= 1 AND rating <= 5)),
  comment           TEXT,
  email_sent_at     INTEGER,   -- cuándo se mandó el recordatorio 24 h antes
  created_at        INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS bookings_by_user_idx ON bookings (user_id);
CREATE INDEX IF NOT EXISTS bookings_by_date_status_idx
  ON bookings (preferred_date, status);

-- Programa de referidos: recompensa por invitar amigos.
CREATE TABLE IF NOT EXISTS referrals (
  id               TEXT PRIMARY KEY,
  referrer_id      TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  referred_email   TEXT NOT NULL,
  referred_user_id TEXT REFERENCES users (id) ON DELETE SET NULL,
  reward_status    TEXT NOT NULL CHECK (reward_status IN ('pending', 'rewarded')),
  reward_amount    REAL NOT NULL,
  created_at       INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS referrals_by_referrer_idx ON referrals (referrer_id);
-- Una relación por email invitado: es lo que hace idempotente el registro.
CREATE UNIQUE INDEX IF NOT EXISTS referrals_by_email_idx ON referrals (referred_email);

-- Solicitudes de presupuesto personalizado (B2B / casos especiales).
CREATE TABLE IF NOT EXISTS custom_quotes (
  id           TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT,
  company      TEXT,
  request_type TEXT NOT NULL,
  city         TEXT NOT NULL,
  details      TEXT NOT NULL,
  status       TEXT NOT NULL CHECK (status IN ('new', 'contacted', 'closed')),
  created_at   INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS custom_quotes_by_status_idx ON custom_quotes (status);
CREATE INDEX IF NOT EXISTS custom_quotes_by_email_idx ON custom_quotes (email, created_at);

-- Direcciones guardadas por usuario (multipropiedad / anfitriones).
CREATE TABLE IF NOT EXISTS addresses (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  label       TEXT NOT NULL,
  address     TEXT NOT NULL,
  city        TEXT NOT NULL,
  postal_code TEXT,
  created_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS addresses_by_user_idx ON addresses (user_id);

-- Bolsa de empleo: candidaturas de profesionales de la limpieza.
CREATE TABLE IF NOT EXISTS job_applications (
  id               TEXT PRIMARY KEY,
  name             TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT,
  city             TEXT NOT NULL,
  experience_years INTEGER NOT NULL,
  message          TEXT,
  status           TEXT NOT NULL CHECK (status IN ('new', 'reviewing', 'accepted', 'rejected')),
  created_at       INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS job_applications_by_status_idx ON job_applications (status);
-- El rate limit (2 candidaturas por email cada 30 días) se apoya en este índice.
CREATE INDEX IF NOT EXISTS job_applications_by_email_idx
  ON job_applications (email, created_at);

-- Tarjetas regalo con saldo (código BRIL-XXXX-XXXX).
CREATE TABLE IF NOT EXISTS gift_cards (
  id                 TEXT PRIMARY KEY,
  code               TEXT NOT NULL,
  amount_cents       INTEGER NOT NULL,
  remaining_cents    INTEGER NOT NULL,
  buyer_id           TEXT REFERENCES users (id) ON DELETE SET NULL,
  buyer_email        TEXT,
  recipient_message  TEXT,
  redeemed_by_user_id TEXT REFERENCES users (id) ON DELETE SET NULL,
  status             TEXT NOT NULL CHECK (status IN ('active', 'exhausted')),
  created_at         INTEGER NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS gift_cards_by_code_idx ON gift_cards (code);
CREATE INDEX IF NOT EXISTS gift_cards_by_buyer_idx ON gift_cards (buyer_id);
