/**
 * Historial de versiones de los ficheros que toca el panel.
 *
 * Antes de cada escritura se guarda una copia del contenido anterior, con la
 * fecha en el nombre. El historial vive dentro del propio CMS (`apps/cms/.history`)
 * y no en las webs, para no llenar 638 proyectos de carpetas sin seguimiento.
 * En los tests, con una carpeta `apps` temporal, el historial se guarda dentro
 * de esa misma carpeta para no ensuciar el del repositorio.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";

const MAX_SNAPSHOTS = 20;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const ID_PATTERN = /^[a-z0-9-]+$/;

// Dos guardados en el mismo milisegundo empatan en `mtimeMs`. El contador va en
// el id para que el orden siga siendo el de escritura, no el aleatorio.
let sequence = 0;

export interface Snapshot {
	id: string;
	savedAt: number;
	size: number;
}

export function historyRoot(appsDir = DEFAULT_APPS_DIR): string {
	const apps = resolve(appsDir);
	return apps === resolve(DEFAULT_APPS_DIR)
		? resolve(import.meta.dir, "..", ".history")
		: join(apps, ".cms-history");
}

/** Ruta relativa convertida en nombre de carpeta seguro. */
function folderFor(relativePath: string): string {
	return relativePath
		.replace(/\\/g, "/")
		.replace(/[^a-zA-Z0-9._/-]/g, "_")
		.replace(/\//g, "__");
}

function directoryFor(
	slug: string,
	relativePath: string,
	appsDir: string,
	create = false,
): string {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Web no válida.");
	if (!relativePath || relativePath.includes("..")) throw new Error("Ruta no válida.");
	const dir = join(historyRoot(appsDir), slug, folderFor(relativePath));
	if (create) mkdirSync(dir, { recursive: true });
	return dir;
}

/** Guarda el contenido anterior y rota a las 20 versiones más recientes. */
export function snapshot(
	slug: string,
	relativePath: string,
	content: string,
	appsDir = DEFAULT_APPS_DIR,
): void {
	const dir = directoryFor(slug, relativePath, appsDir, true);
	sequence = (sequence + 1) % 46656;
	const id = `${Date.now().toString(36)}-${sequence.toString(36).padStart(3, "0")}-${Math.random().toString(36).slice(2, 6)}`;
	writeFileSync(join(dir, `${id}.bak`), content, "utf8");

	for (const old of listSnapshots(slug, relativePath, appsDir).slice(MAX_SNAPSHOTS)) {
		rmSync(join(dir, `${old.id}.bak`), { force: true });
	}
}

export function listSnapshots(
	slug: string,
	relativePath: string,
	appsDir = DEFAULT_APPS_DIR,
): Snapshot[] {
	const dir = directoryFor(slug, relativePath, appsDir);
	if (!existsSync(dir)) return [];

	return readdirSync(dir)
		.filter((name) => name.endsWith(".bak"))
		.map((name) => {
			const stat = statSync(join(dir, name));
			return {
				id: name.slice(0, -".bak".length),
				savedAt: stat.mtimeMs,
				size: stat.size,
			};
		})
		.sort((a, b) => b.savedAt - a.savedAt || b.id.localeCompare(a.id));
}

export function readSnapshot(
	slug: string,
	relativePath: string,
	id: string,
	appsDir = DEFAULT_APPS_DIR,
): string {
	if (!ID_PATTERN.test(id)) throw new Error("Versión no válida.");
	const file = join(directoryFor(slug, relativePath, appsDir), `${id}.bak`);
	if (!existsSync(file)) throw new Error("No existe esa versión.");
	return readFileSync(file, "utf8");
}
