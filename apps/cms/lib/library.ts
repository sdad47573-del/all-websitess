/**
 * Biblioteca de piezas reales sacadas de las webs.
 *
 * Recorre los `src/data/secciones.json` de las apps y, en las webs que aún
 * tienen la portada escrita a mano, extrae también sus secciones estáticas del
 * HTML. Devuelve un resumen de cada pieza con contenido suficiente para
 * reutilizarse. El CMS la usa para copiar una pieza completa (textos, listas,
 * fotos…) en otra web sin inventarse el contenido.
 *
 * Se deduplica por tipo y contenido, así que las familias de webs que repiten
 * la misma sección no llenan la biblioteca de copias. El resultado se cachea
 * un minuto porque recorrer cientos de ficheros no es gratis.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { extractPieces } from "./extract";
import { DEFAULT_APPS_DIR } from "./paths";
import {
	copySection,
	SECTION_TYPES,
	type ImportedSection,
	type Seccion,
	type SectionType,
} from "./sections";

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
	/** Primera foto de la pieza, si la tiene. */
	imagen?: string;
	imagenAlt?: string;
}

export interface LibraryEntry extends LibraryPiece {
	seccion: Seccion;
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

function build(appsDir: string, onlySlug: string | null): LibraryEntry[] {
	const pieces: LibraryEntry[] = [];
	if (!existsSync(appsDir)) return pieces;

	const seen = new Set<string>();
	const apps = readdirSync(appsDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && SLUG_PATTERN.test(entry.name))
		.sort((a, b) => a.name.localeCompare(b.name, "es"));

	for (const app of apps) {
		if (onlySlug && app.name !== onlySlug) continue;
		const web = webName(app.name, appsDir);
		const file = join(appsDir, app.name, "src", "data", "secciones.json");
		let sections: Seccion[] = [];

		if (existsSync(file)) {
			let parsed: { secciones?: unknown };
			try {
				parsed = JSON.parse(readFileSync(file, "utf8")) as { secciones?: unknown };
			} catch {
				parsed = {};
			}
			if (Array.isArray(parsed.secciones)) {
				sections = parsed.secciones.filter(
					(raw): raw is Seccion => Boolean(raw) && typeof raw === "object",
				);
			}
		}

		const add = (section: Seccion) => {
			if (typeof section.tipo !== "string") return;
			if (!(SECTION_TYPES as readonly string[]).includes(section.tipo)) return;
			if (section.visible === false) return;
			if (typeof section.id !== "string" || !ID_PATTERN.test(section.id)) return;
			if (typeof section.titulo !== "string" || !section.titulo.trim()) return;
			if (!useful(section)) return;

			const key = `${section.tipo}|${signature(section)}`;
			if (seen.has(key)) return;
			seen.add(key);

			const imagen = section.imagen ?? section.fotos?.[0]?.imagen;
			const imagenAlt = section.imagenAlt ?? section.fotos?.[0]?.alt;
			pieces.push({
				clave: `${app.name}:${section.id}`,
				tipo: section.tipo,
				titulo: section.titulo,
				web,
				slug: app.name,
				id: section.id,
				resumen: summary(section),
				...(imagen ? { imagen } : {}),
				...(imagenAlt ? { imagenAlt } : {}),
				seccion: section,
			});
		};

		for (const section of sections) add(section);

		// Las portadas a mano no tienen varias piezas en el JSON. Extraer sus
		// secciones estáticas amplía la biblioteca sin tocar el diseño original.
		if (sections.length <= 1) {
			const page = join(appsDir, app.name, "src", "pages", "index.astro");
			if (existsSync(page)) {
				let source = "";
				try {
					source = readFileSync(page, "utf8");
				} catch {
					source = "";
				}
				if (source) {
					try {
						const usedIds = new Set(sections.map((section) => section.id));
						for (const extracted of extractPieces(source)) {
							const base = `html-${extracted.id}`.slice(0, 40);
							let id = base;
							let suffix = 2;
							while (usedIds.has(id)) id = `${base}-${suffix++}`.slice(0, 40);
							usedIds.add(id);
							add({ ...extracted, id });
						}
					} catch {
						// Una portada con una forma rara no puede tumbar toda la biblioteca.
					}
				}
			}
		}
	}

	return pieces.sort(
		(a, b) =>
			SECTION_TYPES.indexOf(a.tipo) - SECTION_TYPES.indexOf(b.tipo) ||
			a.titulo.localeCompare(b.titulo, "es"),
	);
}

const cache = new Map<string, { at: number; entries: LibraryEntry[] }>();

function entriesFor(appsDir: string, onlySlug: string | null): LibraryEntry[] {
	const key = `${appsDir}\u0000${onlySlug ?? "*"}`;
	const cached = cache.get(key);
	if (cached && Date.now() - cached.at < CACHE_MS) return cached.entries;

	const entries = build(appsDir, onlySlug);
	cache.set(key, { at: Date.now(), entries });
	return entries;
}

/** Resumen de todas las piezas reutilizables, ordenado por tipo y título. */
export function readSectionLibrary(
	appsDir = DEFAULT_APPS_DIR,
	onlySlug: string | null = null,
): LibraryPiece[] {
	return entriesFor(appsDir, onlySlug).map(({ seccion: _seccion, ...piece }) => ({ ...piece }));
}

/**
 * Busca una pieza con su contenido completo. La importación usa esto para que
 * también funcionen las piezas extraídas del HTML, que no están en el JSON de
 * origen.
 */
export function readLibraryEntries(appsDir = DEFAULT_APPS_DIR): LibraryEntry[] {
	return entriesFor(appsDir, null).map(
		(entry) => JSON.parse(JSON.stringify(entry)) as LibraryEntry,
	);
}

export function findLibraryEntry(
	clave: string,
	appsDir = DEFAULT_APPS_DIR,
): LibraryEntry | null {
	const entry = entriesFor(appsDir, null).find((item) => item.clave === clave);
	return entry ? (JSON.parse(JSON.stringify(entry)) as LibraryEntry) : null;
}

/** Copia una pieza de la biblioteca (JSON o HTML) dentro de una web. */
export function importLibrarySection(
	targetSlug: string,
	clave: string,
	appsDir = DEFAULT_APPS_DIR,
): ImportedSection {
	const entry = findLibraryEntry(clave, appsDir);
	if (!entry) throw new Error("No existe esa pieza en la biblioteca.");
	return copySection(targetSlug, entry.slug, entry.seccion, appsDir);
}
