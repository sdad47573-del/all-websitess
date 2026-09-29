-- Garden journal entries.
--
-- The only user-authored data in this app. There is no auth table: the app has
-- a single implicit local user, so rows are not scoped to an owner.

CREATE TABLE IF NOT EXISTS journal (
  id            TEXT PRIMARY KEY,
  text          TEXT    NOT NULL,
  created_at    INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS journal_created_at ON journal (created_at DESC);

-- One row per table, holding the id of the last row inserted, so ids stay
-- unique and sortable even when two rows are added in the same millisecond.
CREATE TABLE IF NOT EXISTS id_sequence (
  name  TEXT PRIMARY KEY,
  value INTEGER NOT NULL
);
