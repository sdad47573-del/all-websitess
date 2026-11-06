/**
 * Copias de la miniatura OG anterior.
 *
 * Antes de regenerar `public/og.jpg` se copia la imagen que había (jpg, png,
 * webp o svg) a `apps/cms/.og-history/<slug>/`, con la fecha en el nombre y un
 * máximo de 10 copias por web. Igual que el historial de código, vive dentro
 * del CMS para no llenar las webs de ficheros sin seguimiento. En los tests,
 * con una carpeta `apps` temporal, se guarda dentro de esa misma carpeta.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";

const MAX_BACKUPS = 10;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const BACKUP_PATTERN = /^\d+-[a-z0-9]+-og\.(jpe?g|png|webp|svg)$/i;
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

export interface OgBackup {
	name: string;
	size: number;
	savedAt: number;
}

export function backupRoot(appsDir = DEFAULT_APPS_DIR): string {
	const apps = resolve(appsDir);
	return apps === resolve(DEFAULT_APPS_DIR)
		? resolve(import.meta.dir, "..", ".og-history")
		: join(apps, ".cms-og-history");
}

/** Copia la imagen actual y devuelve la versión guardada (null si no había). */
export function backupOg(
	slug: string,
	sourceFile: string,
	appsDir = DEFAULT_APPS_DIR,
): OgBackup | null {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Web no válida.");
	if (!existsSync(sourceFile)) return null;

	const extension = extname(sourceFile).toLowerCase();
	if (!ALLOWED.has(extension)) return null;

	const dir = join(backupRoot(appsDir), slug);
	mkdirSync(dir, { recursive: true });

	const name = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}-og${extension}`;
	const target = join(dir, name);
	copyFileSync(sourceFile, target);

	// La copia recién creada nunca entra en la purga: con mtimes iguales podría
	// quedar en el extremo antiguo y borrarse a sí misma.
	const older = listOgBackups(slug, appsDir).filter((item) => item.name !== name);
	for (const old of older.slice(MAX_BACKUPS - 1)) {
		rmSync(join(dir, old.name), { force: true });
	}

	const stat = statSync(target);
	return { name, size: stat.size, savedAt: stat.mtimeMs };
}

export function listOgBackups(slug: string, appsDir = DEFAULT_APPS_DIR): OgBackup[] {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Web no válida.");

	const dir = join(backupRoot(appsDir), slug);
	if (!existsSync(dir)) return [];

	return readdirSync(dir)
		.filter((name) => BACKUP_PATTERN.test(name))
		.map((name) => {
			const stat = statSync(join(dir, name));
			return { name, size: stat.size, savedAt: stat.mtimeMs };
		})
		.sort((a, b) => b.savedAt - a.savedAt || b.name.localeCompare(a.name));
}
