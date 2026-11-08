-- Patitas · Peluquería Canina — esquema SQLite (sustituye a Convex).
-- Las columnas siguen la nomenclatura de Convex donde el cliente ya la
-- conoce: los ids son TEXT y se exponen como `_id` en la API para que el
-- código del cliente (`row._id`) no cambie.

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
  created_at              INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);

-- Sesiones propias (JWT). El token se firma con AUTH_SECRET; aquí solo
-- guardamos lo necesario para poder revocar un token antes de que expire.
CREATE TABLE IF NOT EXISTS sessions (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user_idx ON sessions (user_id);

-- Códigos de un solo uso para el login por email (OTP de 6 dígitos).
CREATE TABLE IF NOT EXISTS verification_codes (
  id          TEXT PRIMARY KEY,
  identifier  TEXT NOT NULL,         -- email en minúsculas
  salt        TEXT NOT NULL,         -- sal aleatoria por código
  code_hash   TEXT NOT NULL,         -- sha256(salt:identifier:code)
  attempts    INTEGER NOT NULL DEFAULT 0,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS verification_codes_identifier_idx
  ON verification_codes (identifier);

-- Perros registrados por cada cliente.
CREATE TABLE IF NOT EXISTS pets (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  breed           TEXT,
  breed_key       TEXT,
  size            TEXT NOT NULL CHECK (size IN ('S', 'M', 'L', 'XL')),
  birth_year      INTEGER,
  weight_kg       REAL,
  last_vaccine_at TEXT,
  notes           TEXT,
  archived        INTEGER NOT NULL DEFAULT 0,
  created_at      INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS pets_by_user_idx ON pets (user_id);
-- Índice único parcial: no se puede repetir nombre entre mascotas activas del
-- mismo dueño, pero unarchivado sí puede reutilizar un nombre histórico.
CREATE UNIQUE INDEX IF NOT EXISTS pets_by_user_active_name_idx
  ON pets (user_id, name) WHERE archived = 0;

-- Bonos prepagados (p. ej. 4 baños con 15% de descuento).
CREATE TABLE IF NOT EXISTS bonos (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  pet_id          TEXT NOT NULL REFERENCES pets (id) ON DELETE CASCADE,
  service_key     TEXT NOT NULL,
  total_uses      INTEGER NOT NULL,
  uses_used       INTEGER NOT NULL DEFAULT 0,
  service_base_eur REAL NOT NULL,
  price_eur       REAL NOT NULL,
  active          INTEGER NOT NULL DEFAULT 1,
  created_at      INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS bonos_by_user_idx ON bonos (user_id);
CREATE INDEX IF NOT EXISTS bonos_by_pet_idx ON bonos (pet_id);

-- Citas de peluquería.
CREATE TABLE IF NOT EXISTS appointments (
  id            TEXT PRIMARY KEY,
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  pet_id        TEXT NOT NULL REFERENCES pets (id) ON DELETE CASCADE,
  pet_name      TEXT NOT NULL,          -- copia para la agenda
  pet_size      TEXT NOT NULL,
  service_key   TEXT NOT NULL,
  service_name  TEXT NOT NULL,
  extra_keys    TEXT NOT NULL DEFAULT '[]',  -- JSON array
  date          TEXT NOT NULL,          -- ISO yyyy-mm-dd
  start         TEXT NOT NULL,          -- HH:mm
  end           TEXT NOT NULL,          -- HH:mm
  duration_min  INTEGER NOT NULL,
  price         REAL NOT NULL,
  pickup        INTEGER,
  bono_id       TEXT REFERENCES bonos (id) ON DELETE SET NULL,
  notes         TEXT,
  status        TEXT NOT NULL
                CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  promo_key     TEXT,
  review_id     TEXT,
  reminded_at   INTEGER,
  created_at    INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS appointments_by_user_idx ON appointments (user_id);
CREATE INDEX IF NOT EXISTS appointments_by_date_idx ON appointments (date);
CREATE INDEX IF NOT EXISTS appointments_by_date_status_idx
  ON appointments (date, status);
CREATE INDEX IF NOT EXISTS appointments_by_user_date_idx
  ON appointments (user_id, date);
CREATE INDEX IF NOT EXISTS appointments_by_status_idx ON appointments (status);

-- Lista de espera cuando un día está completo.
CREATE TABLE IF NOT EXISTS waitlist (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  pet_id       TEXT NOT NULL REFERENCES pets (id) ON DELETE CASCADE,
  pet_name     TEXT NOT NULL,
  date         TEXT NOT NULL,
  service_key  TEXT NOT NULL,
  service_name TEXT NOT NULL,
  notified     INTEGER NOT NULL DEFAULT 0,
  created_at   INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS waitlist_by_date_idx ON waitlist (date);
CREATE INDEX IF NOT EXISTS waitlist_by_user_idx ON waitlist (user_id);

-- Notificaciones in-app (recordatorios, confirmaciones, huecos liberados…).
CREATE TABLE IF NOT EXISTS notifications (
  id             TEXT PRIMARY KEY,
  user_id        TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  appointment_id TEXT REFERENCES appointments (id) ON DELETE CASCADE,
  type           TEXT NOT NULL,
  title          TEXT NOT NULL,
  body           TEXT NOT NULL,
  created_at     INTEGER NOT NULL,
  read_at        INTEGER
);
CREATE INDEX IF NOT EXISTS notifications_by_user_idx ON notifications (user_id);
CREATE INDEX IF NOT EXISTS notifications_by_appointment_idx
  ON notifications (appointment_id);
CREATE INDEX IF NOT EXISTS notifications_unread_idx
  ON notifications (user_id, read_at);

-- Reseñas verificadas de clientes.
CREATE TABLE IF NOT EXISTS reviews (
  id             TEXT PRIMARY KEY,
  user_id        TEXT REFERENCES users (id) ON DELETE SET NULL,
  author_name    TEXT NOT NULL,
  pet_name       TEXT,
  appointment_id TEXT REFERENCES appointments (id) ON DELETE SET NULL,
  rating         REAL NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text           TEXT NOT NULL,
  service_key    TEXT,
  published      INTEGER NOT NULL DEFAULT 1,
  created_at     INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS reviews_by_published_idx ON reviews (published);

-- Una reseña por cita como máximo, garantiza a nivel de base de datos lo que
-- el backend de Convex comprobaba a mano antes de insertar.
CREATE UNIQUE INDEX IF NOT EXISTS reviews_by_appointment_idx
  ON reviews (appointment_id) WHERE appointment_id IS NOT NULL;
