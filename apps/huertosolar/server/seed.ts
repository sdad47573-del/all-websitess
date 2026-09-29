/**
 * Development seed.
 *
 * Run with `bun run seed`. Inserts a couple of journal entries so a freshly
 * created database is not empty. Safe to re-run: it only adds rows when the
 * table is empty.
 */

import { getDb, nextId } from "./db.js";

const db = getDb();

const existing = db
  .query<{ count: number }, []>("SELECT COUNT(*) AS count FROM journal")
  .get();

if ((existing?.count ?? 0) > 0) {
  console.log(`journal already has ${existing?.count} entries, skipping seed`);
  process.exit(0);
}

const entries = [
  "El romero crece mejor en el bancal 2",
  "Los tomates aguantan mejor con el bancal a media sombra",
];

for (const [index, text] of entries.entries()) {
  db.query("INSERT INTO journal (id, text, created_at) VALUES (?, ?, ?)").run(
    nextId(db, "journal"),
    text,
    Date.now() - (entries.length - index) * 86_400_000,
  );
}

console.log(`seeded ${entries.length} journal entries`);
