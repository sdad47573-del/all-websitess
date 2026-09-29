-- Quotes, reviews and call-back leads.
--
-- There is no `users` table. The app used to scope every row to the signed-in
-- user and gate the moderation routes behind a Convex `admin` role; with auth
-- removed there is a single implicit local operator, so the per-user indexes
-- and the role checks go with it. See `server/README.md` for what that means
-- for exposure.
--
-- `total` is written by the server from `server/quote.ts`, never by the client.
-- It is recomputed on every write so the stored price is always the real one.

CREATE TABLE IF NOT EXISTS quotes (
  id            TEXT    PRIMARY KEY,
  -- The contact is a free-text name, phone or email the visitor left, if any.
  contact       TEXT,
  -- Where the quote goes by email. Collected at send time, because saving a
  -- quote from the public calculator must not require an email address.
  email         TEXT,
  vivienda      TEXT    NOT NULL CHECK (vivienda IN (
                  'estudio', 'piso', 'casa', 'oficina')),
  distancia_km  REAL    NOT NULL CHECK (distancia_km >= 0),
  piso_origen   INTEGER NOT NULL CHECK (piso_origen >= 0),
  piso_destino  INTEGER NOT NULL CHECK (piso_destino >= 0),
  volumen       REAL    NOT NULL CHECK (volumen >= 0),
  -- Which weekends the move crosses. 0, 1 or 2; drives the surcharge.
  fines_de_semana INTEGER NOT NULL CHECK (fines_de_semana BETWEEN 0 AND 2),
  -- JSON array of ExtraKey, so the breakdown survives a round trip.
  extras        TEXT    NOT NULL DEFAULT '[]',
  total         REAL    NOT NULL CHECK (total >= 0),
  status        TEXT    NOT NULL CHECK (status IN (
                  'pendiente', 'confirmado', 'completado', 'cancelado')),
  -- Chosen move date, YYYY-MM-DD, set when the quote is confirmed.
  scheduled_date TEXT   CHECK (scheduled_date IS NULL OR
                  scheduled_date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'),
  -- JSON array of checklist task ids the visitor has ticked off.
  checklist_state TEXT  NOT NULL DEFAULT '[]',
  emailed_at    INTEGER,
  created_at    INTEGER NOT NULL
);

-- The dashboard lists every quote newest first, and filters by status.
CREATE INDEX IF NOT EXISTS quotes_created ON quotes (created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_status ON quotes (status);

CREATE TABLE IF NOT EXISTS reviews (
  id         TEXT    PRIMARY KEY,
  author     TEXT    NOT NULL,
  from_city  TEXT,
  to_city    TEXT,
  rating     INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text       TEXT    NOT NULL,
  status     TEXT    NOT NULL CHECK (status IN (
               'pendiente', 'aprobada', 'rechazada')),
  created_at INTEGER NOT NULL
);

-- The landing shows approved reviews; the moderation queue shows pending ones.
CREATE INDEX IF NOT EXISTS reviews_status ON reviews (status);

CREATE TABLE IF NOT EXISTS callbacks (
  id         TEXT    PRIMARY KEY,
  name       TEXT    NOT NULL,
  phone      TEXT    NOT NULL,
  comment    TEXT,
  status     TEXT    NOT NULL CHECK (status IN (
               'nuevo', 'llamado', 'descartado')),
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS callbacks_status ON callbacks (status);
CREATE INDEX IF NOT EXISTS callbacks_created ON callbacks (created_at DESC);

-- One row per table, holding the last id issued, so ids stay unique and
-- self-describing even when two rows arrive in the same millisecond.
CREATE TABLE IF NOT EXISTS id_sequence (
  name  TEXT PRIMARY KEY,
  value INTEGER NOT NULL
);
