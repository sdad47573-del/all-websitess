/**
 * Ficheros de cada web: plantillas (para el editor de layout) e imágenes.
 *
 * Todo pasa por aquí y todo está acotado a `apps/<slug>/src`: rutas resueltas
 * dentro de la carpeta de la web, extensiones permitidas y tamaños máximos. Las
 * imágenes se borran solo si ninguna plantilla las referencia, porque quitarlas
 * rompería el build.
 */
import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	renameSync,
	statSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";
import { snapshot } from "./history";
import { DEFAULT_APPS_DIR } from "./paths";

const TEXT_EXTENSIONS = new Set([".astro", ".ts", ".tsx", ".css", ".md", ".json", ".txt"]);
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg", ".gif"]);
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const MAX_TEXT_BYTES = 256 * 1024;
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

export interface SourceFile {
	path: string;
	size: number;
}

export interface MediaItem {
	name: string;
	size: number;
	referencedIn: string[];
}

export interface SavedMedia {
	name: string;
	replaced: boolean;
}

function appDirectory(slug: string, appsDir: string): string {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Web no válida.");
	const dir = join(appsDir, slug);
	if (!existsSync(join(dir, "src"))) throw new Error("La web no tiene carpeta src.");
	return dir;
}

/** Resuelve una ruta relativa sin permitir salir de la carpeta indicada. */
function safeResolve(base: string, relativePath: string): string {
	const root = resolve(base);
	const full = resolve(root, relativePath);
	if (full !== root && !full.startsWith(root + sep)) throw new Error("Ruta fuera de la web.");
	return full;
}

function walk(dir: string, out: string[] = []): string[] {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
}

function textFiles(appDir: string): string[] {
	return walk(join(appDir, "src")).filter((file) =>
		TEXT_EXTENSIONS.has(extname(file).toLowerCase()),
	);
}

/** Plantillas, datos y estilos de la web, con rutas relativas a `src`. */
export function listSourceFiles(slug: string, appsDir = DEFAULT_APPS_DIR): SourceFile[] {
	const appDir = appDirectory(slug, appsDir);
	const src = join(appDir, "src");
	return textFiles(appDir)
		.map((file) => ({
			path: relative(src, file).split(sep).join("/"),
			size: statSync(file).size,
		}))
		.sort((a, b) => a.path.localeCompare(b.path));
}

export function readSourceFile(
	slug: string,
	relativePath: string,
	appsDir = DEFAULT_APPS_DIR,
): { path: string; content: string } {
	const appDir = appDirectory(slug, appsDir);
	const file = safeResolve(join(appDir, "src"), relativePath);
	if (!TEXT_EXTENSIONS.has(extname(file).toLowerCase())) {
		throw new Error("Extensión no editable desde el panel.");
	}
	if (!existsSync(file)) throw new Error("No existe ese fichero.");
	if (statSync(file).size > MAX_TEXT_BYTES) throw new Error("El fichero es demasiado grande.");

	return { path: relativePath, content: readFileSync(file, "utf8") };
}

export function writeSourceFile(
	slug: string,
	relativePath: string,
	content: string,
	appsDir = DEFAULT_APPS_DIR,
): { path: string; bytes: number } {
	const appDir = appDirectory(slug, appsDir);
	const file = safeResolve(join(appDir, "src"), relativePath);
	if (!TEXT_EXTENSIONS.has(extname(file).toLowerCase())) {
		throw new Error("Extensión no editable desde el panel.");
	}
	if (Buffer.byteLength(content, "utf8") > MAX_TEXT_BYTES) {
		throw new Error("El contenido es demasiado grande.");
	}

	if (existsSync(file)) {
		snapshot(slug, relativePath, readFileSync(file, "utf8"), appsDir);
	}

	const temporary = `${file}.cms-${process.pid}.tmp`;
	try {
		writeFileSync(temporary, content, "utf8");
		renameSync(temporary, file);
	} catch (error) {
		try {
			unlinkSync(temporary);
		} catch {}
		throw new Error(`No se ha podido escribir: ${String(error)}`);
	}

	return { path: relativePath, bytes: Buffer.byteLength(content, "utf8") };
}

/** Ficheros de `src/assets/fotos` y en qué plantillas se usa cada nombre. */
export function listMedia(slug: string, appsDir = DEFAULT_APPS_DIR): MediaItem[] {
	const appDir = appDirectory(slug, appsDir);
	const dir = join(appDir, "src", "assets", "fotos");
	if (!existsSync(dir)) return [];

	const sources = textFiles(appDir).map((file) => ({
		path: relative(join(appDir, "src"), file).split(sep).join("/"),
		content: readFileSync(file, "utf8"),
	}));

	return readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase()))
		.map((entry) => ({
			name: entry.name,
			size: statSync(join(dir, entry.name)).size,
			referencedIn: sources
				.filter((source) => source.content.includes(entry.name))
				.map((source) => source.path),
		}))
		.sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export function mediaFile(slug: string, name: string, appsDir = DEFAULT_APPS_DIR): string {
	const appDir = appDirectory(slug, appsDir);
	if (name.includes("/") || name.includes("\\")) throw new Error("Nombre de imagen no válido.");
	const file = safeResolve(join(appDir, "src", "assets", "fotos"), name);
	if (!IMAGE_EXTENSIONS.has(extname(file).toLowerCase())) {
		throw new Error("No es una imagen.");
	}
	if (!existsSync(file)) throw new Error("No existe esa imagen.");
	return file;
}

/** Normaliza el nombre: minúsculas, guiones y la extensión original. */
export function normalizeMediaName(rawName: string): string {
	const trimmed = rawName.trim().replace(/\\/g, "/");
	const name = trimmed.split("/").pop() ?? "";
	const extension = extname(name).toLowerCase();
	if (!IMAGE_EXTENSIONS.has(extension)) throw new Error("Formato de imagen no admitido.");

	const base = name
		.slice(0, -extension.length)
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 80);

	if (!base) throw new Error("El nombre de la imagen no es válido.");
	return `${base}${extension}`;
}

export function saveMedia(
	slug: string,
	rawName: string,
	bytes: Uint8Array,
	appsDir = DEFAULT_APPS_DIR,
): SavedMedia {
	const appDir = appDirectory(slug, appsDir);
	const name = normalizeMediaName(rawName);
	if (bytes.byteLength === 0) throw new Error("La imagen está vacía.");
	if (bytes.byteLength > MAX_IMAGE_BYTES) throw new Error("La imagen supera los 15 MB.");

	const dir = join(appDir, "src", "assets", "fotos");
	mkdirSync(dir, { recursive: true });
	const file = safeResolve(dir, name);
	const replaced = existsSync(file);

	const temporary = `${file}.cms-${process.pid}.tmp`;
	try {
		writeFileSync(temporary, bytes);
		renameSync(temporary, file);
	} catch (error) {
		try {
			unlinkSync(temporary);
		} catch {}
		throw new Error(`No se ha podido guardar la imagen: ${String(error)}`);
	}

	return { name, replaced };
}

/** Borra una imagen solo si ninguna plantilla la referencia. */
export function deleteMedia(slug: string, name: string, appsDir = DEFAULT_APPS_DIR): void {
	const media = listMedia(slug, appsDir).find((item) => item.name === name);
	if (!media) throw new Error("No existe esa imagen.");
	if (media.referencedIn.length > 0) {
		throw new Error(
			`La imagen se usa en ${media.referencedIn.join(", ")}: quita la referencia antes de borrarla.`,
		);
	}
	unlinkSync(mediaFile(slug, name, appsDir));
}
