import { Database } from 'bun:sqlite';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * SQLite connection for this app's API.
 *
 * The database is a plain file so there is nothing extra to run locally. The
 * path defaults to `server/data/<app>.db` and is overridden with `DATABASE_PATH`,
 * which is what tests use to point at a temporary file or `:memory:`.
 */

const here = dirname(fileURLToPath(import.meta.url));

/** Directory holding the numbered `.sql` migration files. */
const migrationsDir = join(here, 'migrations');

/** Resolves the database file path. */
export function databasePath(): string {
	return process.env.DATABASE_PATH ?? join(here, 'data', `${process.env.APP_NAME ?? 'app'}.db`);
}

/** Opens the database and applies any migrations that have not run yet. */
export function openDatabase(path = databasePath()): Database {
	if (path !== ':memory:') {
		mkdirSync(dirname(path), { recursive: true });
	}

	const db = new Database(path, { create: true });

	// WAL keeps a read from blocking the write a mutation just made, which
	// matters because the same process serves both.
	if (path !== ':memory:') db.exec('PRAGMA journal_mode = WAL;');
	db.exec('PRAGMA foreign_keys = ON;');

	migrate(db);
	return db;
}

let instance: Database | null = null;

/**
 * The shared connection used by the API.
 *
 * Opening the file and re-checking migrations on every request would be wasted
 * work, so the connection is created once and reused.
 */
export function getDb(): Database {
	if (!instance) instance = openDatabase();
	return instance;
}

/** One migration, as read off disk. */
interface Migration {
	name: string;
	sql: string;
}

/** Reads the migration files, ordered by filename. */
function readMigrations(): Migration[] {
	if (!existsSync(migrationsDir)) return [];
	return readdirSync(migrationsDir)
		.filter((file) => file.endsWith('.sql'))
		.sort()
		.map((file) => ({
			name: file,
			sql: readFileSync(join(migrationsDir, file), 'utf8'),
		}));
}

/**
 * Applies migrations that have not run yet.
 *
 * Applied files are recorded in `schema_migrations`, so restarting the server
 * does not re-run them. Each file runs inside a transaction, so a migration
 * that fails part way leaves the schema untouched.
 */
function migrate(db: Database): void {
	db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name       TEXT PRIMARY KEY,
      applied_at INTEGER NOT NULL
    );
  `);

	const applied = new Set(
		db
			.query<{ name: string }, []>('SELECT name FROM schema_migrations')
			.all()
			.map((row) => row.name),
	);

	const apply = db.transaction((name: string, sql: string) => {
		db.exec(sql);
		db.query('INSERT INTO schema_migrations (name, applied_at) VALUES (?, ?)').run(
			name,
			Date.now(),
		);
	});

	for (const { name, sql } of readMigrations()) {
		if (applied.has(name)) continue;
		apply(name, sql);
	}
}

/**
 * Returns the next id for a table, shaped `<table>_<n>`.
 *
 * Ids are text rather than autoincrement so they stay self-describing, and the
 * counter guarantees uniqueness even when two rows land in the same tick.
 */
export function nextId(db: Database, table: string): string {
	db.query(
		`INSERT INTO id_sequence (name, value) VALUES (?, 0)
     ON CONFLICT(name) DO NOTHING`,
	).run(table);

	db.query('UPDATE id_sequence SET value = value + 1 WHERE name = ?').run(table);
	const row = db
		.query<{ value: number }, [string]>('SELECT value FROM id_sequence WHERE name = ?')
		.get(table);

	return `${table}_${row?.value ?? 1}`;
}
