-- Personal expenses and monthly budgets.
--
-- The category vocabulary is duplicated here as a CHECK constraint on purpose:
-- the picker in `src/lib/finance.ts` has to offer exactly these values, and a
-- constraint makes that a database-level rule rather than a convention. Adding
-- a category means editing this file, the list in `server/index.ts` and
-- `src/lib/finance.ts` together.
--
-- There is no `users` table. The app used to scope every row to the signed-in
-- user; with auth removed there is a single implicit local user, so the
-- per-user indexes disappear with it.

CREATE TABLE IF NOT EXISTS expenses (
  id            TEXT    PRIMARY KEY,
  amount        REAL    NOT NULL CHECK (amount > 0),
  category      TEXT    NOT NULL CHECK (category IN (
                  'comida', 'transporte', 'hogar', 'entretenimiento', 'salud',
                  'compras', 'servicios', 'educacion', 'viajes', 'mascotas',
                  'regalos', 'otros')),
  description   TEXT    NOT NULL,
  -- ISO date, YYYY-MM-DD, the day the expense happened.
  date          TEXT    NOT NULL CHECK (date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'),
  payment_method TEXT,
  notes         TEXT,
  created_at    INTEGER NOT NULL
);

-- The dashboard filters by month and orders newest first, so that is the
-- index that matters.
CREATE INDEX IF NOT EXISTS expenses_date ON expenses (date DESC);
CREATE INDEX IF NOT EXISTS expenses_category ON expenses (category);

-- One budget per month.
CREATE TABLE IF NOT EXISTS budgets (
  month      TEXT    PRIMARY KEY CHECK (month GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]'),
  amount     REAL    NOT NULL CHECK (amount >= 0),
  created_at INTEGER NOT NULL
);

-- One row per table, holding the last id issued, so ids stay unique and
-- self-describing even when two rows arrive in the same millisecond.
CREATE TABLE IF NOT EXISTS id_sequence (
  name  TEXT PRIMARY KEY,
  value INTEGER NOT NULL
);
