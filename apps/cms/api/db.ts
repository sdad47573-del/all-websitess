/**
 * Base de datos de la API.
 *
 * La API lee y escribe aquí; no recorre `apps/` en tiempo de ejecución. El
 * contenido inicial se importa una vez con `bun run api:seed`.
 */
import { migrate, openDatabase } from "@app-server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const schema = readFileSync(new URL("./schema.sql", import.meta.url), "utf8");
export const defaultDatabasePath = join(import.meta.dir, "..", "data", "cms.sqlite");

export function openCmsDatabase(path = process.env.CMS_DB_PATH ?? defaultDatabasePath) {
	const db = openDatabase(path);
	migrate(db, schema);
	return db;
}
