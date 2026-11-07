/**
 * Biblioteca de piezas reales sacadas de las webs.
 *
 * Recorre los `src/data/secciones.json` de las apps y devuelve un resumen de
 * cada sección visible que tenga contenido suficiente para reutilizarse. El
 * CMS la usa para copiar una pieza completa (textos, listas, fotos…) en otra
 * web sin inventarse el contenido.
 *
 * Se deduplica por tipo y contenido, así que las familias de webs que repiten
 * la misma sección no llenan la biblioteca de copias. El resultado se cachea
 * un minuto porque recorrer cientos de ficheros no es gratis.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";
import { SECTION_TYPES, type Seccion, type SectionType } from "./sections";

export interface LibraryPiece {
	/** `slug:id` de la pieza original; estable mientras no cambie el JSON. */
	clave: string;
	tipo: SectionType;
	titulo: string;
	/** Nombre comercial de la web de origen. */
	web: string;
	/** Slug de la web de origen. */
	slug: string;
	/** Id de la sección original, para pedir la importación. */
	id: string;
	/** Primer texto útil, sin HTML, para enseñar la pieza en el catálogo. */
	resumen: string;
}

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,39}$/;
const CACHE_MS = 60_000;
const MAX_RESUMEN = 180;

const plain = (value: string) =>
	value
		.replace(/<br\s*\/?>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, " ")
		.replace(/\s+/g, " ")
		.trim();

function summary(section: Seccion): string {
	const parts: string[] = [];
	const push = (value?: string) => {
		const text = plain(value ?? "");
		if (text) parts.push(text);
	};

	push(section.texto);
	push(section.nota);
	push(section.notaHorario);
	for (const paragraph of section.parrafos ?? []) push(paragraph);
	for (const item of section.items ?? []) {
		push(item.titulo);
		push(item.texto);
	}
	for (const question of section.preguntas ?? []) {
		push(question.pregunta);
		push(question.respuesta);
	}
	for (const group of section.grupos ?? []) {
		push(group.titulo);
		for (const dish of group.items) push(`${dish.nombre} ${dish.nota}`);
	}
	push((section.chips ?? []).join(" · "));

	const text = parts.join(" ");
	return text.length > MAX_RESUMEN ? `${text.slice(0, MAX_RESUMEN - 1).trimEnd()}…` : text;
}

/** Solo entran piezas con la información mínima que el tipo necesita. */
function useful(section: Seccion): boolean {
	switch (section.tipo) {
		case "about":
		case "texto":
			return (section.parrafos?.length ?? 0) > 0;
		case "galeria":
			return (section.fotos?.length ?? 0) > 0;
		case "faq":
			return (section.preguntas?.length ?? 0) > 0;
		case "menu":
			return (section.grupos?.length ?? 0) > 0;
		case "destacados":
			return (section.items?.length ?? 0) > 0;
		case "chips":
			return (section.chips?.length ?? 0) > 0;
		case "hero":
			return Boolean((section.imagen && section.imagenAlt) || section.texto);
		case "cta":
			return Boolean(section.boton);
		case "visita":
			return Boolean(section.titulo || section.nota || section.notaHorario);
		default:
			return true;
	}
}

/** Firma sin id ni visibilidad: dos copias exactas cuentan una sola vez. */
function signature(section: Seccion): string {
	const copy = { ...section } as Record<string, unknown>;
	delete copy.id;
	delete copy.visible;
	return JSON.stringify(copy);
}

// Para enseñar la web de origen basta con el nombre del `site.ts`; parsearlo
// entero para 638 webs costaba más de diez segundos.
function webName(slug: string, appsDir: string): string {
	const file = join(appsDir, slug, "src", "data", "site.ts");
	if (!existsSync(file)) return slug;

	let source: string;
	try {
		source = readFileSync(file, "utf8");
	} catch {
		return slug;
	}

	const direct = /\bSITE_NAME\s*=\s*['"`]([^'"`]+)['"`]/.exec(source)?.[1];
	if (direct) return direct;

	const block = /(?:export\s+)?const\s+(?:BUSINESS|business|NEGOCIO)\s*=\s*\{([\s\S]*?)\n\};/.exec(
		source,
	)?.[1];
	if (block) {
		const name = /\b(?:name|fullName)\s*:\s*['"`]([^'"`]+)['"`]/.exec(block)?.[1];
		if (name) return name;
	}

	return slug;
}

function build(appsDir: string): LibraryPiece[] {
	const pieces: LibraryPiece[] = [];
	if (!existsSync(appsDir)) return pieces;

	const seen = new Set<string>();
	const apps = readdirSync(appsDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && SLUG_PATTERN.test(entry.name))
		.sort((a, b) => a.name.localeCompare(b.name, "es"));

	for (const app of apps) {
		const file = join(appsDir, app.name, "src", "data", "secciones.json");
		if (!existsSync(file)) continue;

		let parsed: { secciones?: unknown };
		try {
			parsed = JSON.parse(readFileSync(file, "utf8")) as { secciones?: unknown };
		} catch {
			continue;
		}
		if (!Array.isArray(parsed.secciones)) continue;

		for (const raw of parsed.secciones) {
			if (!raw || typeof raw !== "object") continue;
			const section = raw as Seccion;
			if (typeof section.tipo !== "string") continue;
			if (!(SECTION_TYPES as readonly string[]).includes(section.tipo)) continue;
			if (section.visible === false) continue;
			if (typeof section.id !== "string" || !ID_PATTERN.test(section.id)) continue;
			if (typeof section.titulo !== "string" || !section.titulo.trim()) continue;
			if (!useful(section)) continue;

			const key = `${section.tipo}|${signature(section)}`;
			if (seen.has(key)) continue;
			seen.add(key);

			pieces.push({
				clave: `${app.name}:${section.id}`,
				tipo: section.tipo,
				titulo: section.titulo,
				web: webName(app.name, appsDir),
				slug: app.name,
				id: section.id,
				resumen: summary(section),
			});
		}
	}

	return pieces.sort(
		(a, b) =>
			SECTION_TYPES.indexOf(a.tipo) - SECTION_TYPES.indexOf(b.tipo) ||
			a.titulo.localeCompare(b.titulo, "es"),
	);
}

const cache = new Map<string, { at: number; pieces: LibraryPiece[] }>();

/** Resumen de todas las piezas reutilizables, ordenado por tipo y título. */
export function readSectionLibrary(appsDir = DEFAULT_APPS_DIR): LibraryPiece[] {
	const cached = cache.get(appsDir);
	if (cached && Date.now() - cached.at < CACHE_MS) return cached.pieces.map((piece) => ({ ...piece }));

	const pieces = build(appsDir);
	cache.set(appsDir, { at: Date.now(), pieces });
	return pieces.map((piece) => ({ ...piece }));
}
