-- Datos del CMS. El contenido vive aquí, no en los ficheros de git.
CREATE TABLE IF NOT EXISTS sites (
	slug TEXT PRIMARY KEY,
	payload TEXT NOT NULL,
	updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sections (
	site_slug TEXT PRIMARY KEY,
	payload TEXT NOT NULL,
	uses_pieces INTEGER NOT NULL DEFAULT 0,
	updated_at INTEGER NOT NULL,
	FOREIGN KEY (site_slug) REFERENCES sites(slug) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS library (
	clave TEXT PRIMARY KEY,
	payload TEXT NOT NULL,
	updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS catalog (
	id INTEGER PRIMARY KEY CHECK (id = 1),
	payload TEXT NOT NULL,
	updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS meta (
	key TEXT PRIMARY KEY,
	value TEXT NOT NULL
);
