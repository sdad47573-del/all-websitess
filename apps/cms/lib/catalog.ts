/**
 * Catálogo de piezas sacado de las páginas que ya existen.
 *
 * El panel no inventa bloques: recorre las webs del repositorio para ver qué
 * piezas se usan de verdad (los componentes `<LocalHero>`, `<LocalAbout>`… de
 * `src/pages/index.astro` y las que viven en `src/data/secciones.json`) y
 * guarda un ejemplo real de cada tipo. Así, al añadir una pieza, se ve qué hay
 * ya en las páginas publicadas y cuántas webs lo usan.
 *
 * Lee cientos de portadas, así que el resultado se cachea un minuto.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";
import { SECTION_TYPES, type SectionType } from "./sections";
import { getSite } from "./sites";

export interface CatalogExample {
	web: string;
	slug: string;
	titulo: string;
}

export interface CatalogEntry {
	tipo: SectionType;
	label: string;
	descripcion: string;
	/** Webs que ya tienen un bloque de este tipo. */
	usos: number;
	ejemplos: CatalogExample[];
}

const META: Record<SectionType, { label: string; descripcion: string }> = {
	hero: { label: "Portada", descripcion: "Foto grande, titular y botones" },
	about: { label: "La casa", descripcion: "Etiqueta, titular y párrafos" },
	destacados: { label: "Destacados", descripcion: "Tarjetas con título y texto" },
	galeria: { label: "Galería", descripcion: "Fotos con texto alternativo y botón" },
	visita: { label: "Visítanos", descripcion: "Horario, mapa y enlaces" },
	faq: { label: "Preguntas", descripcion: "Preguntas y respuestas" },
	texto: { label: "Texto", descripcion: "Titular y párrafos" },
	cta: { label: "Llamada a la acción", descripcion: "Texto y un botón" },
	chips: { label: "Chips", descripcion: "Fila de etiquetas cortas" },
	menu: { label: "Carta", descripcion: "Grupos de platos, notas y precios" },
};

/** Componente compartido que pinta cada tipo en las webs ya publicadas. */
const COMPONENTES: Array<{ tipo: SectionType; componente: string }> = [
	{ tipo: "hero", componente: "LocalHero" },
	{ tipo: "about", componente: "LocalAbout" },
	{ tipo: "galeria", componente: "LocalGallery" },
	{ tipo: "visita", componente: "LocalVisit" },
	{ tipo: "faq", componente: "LocalFaq" },
];

const MAX_EJEMPLOS = 3;
const CACHE_MS = 60_000;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

const plain = (text: string) => text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

/** `title="…"` del componente; vacío cuando el titular se pasa como expresión. */
function literalTitle(source: string, componente: string): string {
	const start = source.indexOf(`<${componente}`);
	if (start < 0) return "";
	return /title="([^"]{2,220})"/.exec(source.slice(start, start + 900))?.[1] ?? "";
}

interface Piece {
	tipo: SectionType;
	titulo: string;
	visible: boolean;
}

/** Piezas de un `secciones.json`, sin validar: un fichero roto no rompe el catálogo. */
function pieces(file: string): Piece[] {
	try {
		const parsed = JSON.parse(readFileSync(file, "utf8")) as { secciones?: unknown };
		if (!Array.isArray(parsed.secciones)) return [];
		const list: Piece[] = [];
		for (const item of parsed.secciones) {
			if (!item || typeof item !== "object") continue;
			const raw = item as { tipo?: unknown; titulo?: unknown; visible?: unknown };
			if (typeof raw.tipo !== "string") continue;
			if (!(SECTION_TYPES as readonly string[]).includes(raw.tipo)) continue;
			list.push({
				tipo: raw.tipo as SectionType,
				titulo: typeof raw.titulo === "string" ? raw.titulo : "",
				visible: raw.visible !== false,
			});
		}
		return list;
	} catch {
		return [];
	}
}

function build(appsDir: string): CatalogEntry[] {
	const entries = new Map<SectionType, CatalogEntry>(
		SECTION_TYPES.map((tipo) => [tipo, { tipo, ...META[tipo], usos: 0, ejemplos: [] }]),
	);
	if (!existsSync(appsDir)) return [...entries.values()];

	// Solo se lee el `site.ts` de las webs que acaban como ejemplo: listar las
	// 600 del repositorio costaba segundos y aquí no hace falta.
	const names = new Map<string, string>();
	const webOf = (slug: string) => {
		const known = names.get(slug);
		if (known) return known;
		const name = getSite(slug, appsDir)?.name ?? slug;
		names.set(slug, name);
		return name;
	};

	for (const entry of readdirSync(appsDir, { withFileTypes: true })) {
		if (!entry.isDirectory() || !SLUG_PATTERN.test(entry.name)) continue;

		const root = join(appsDir, entry.name);
		// Una web cuenta una vez por tipo aunque repita el bloque.
		const vistos = new Set<SectionType>();

		const add = (tipo: SectionType, titulo: string) => {
			const target = entries.get(tipo);
			if (!target) return;
			if (!vistos.has(tipo)) {
				vistos.add(tipo);
				target.usos += 1;
			}
			const clean = plain(titulo);
			if (!clean || target.ejemplos.length >= MAX_EJEMPLOS) return;
			if (target.ejemplos.some((item) => item.titulo === clean)) return;
			target.ejemplos.push({ web: webOf(entry.name), slug: entry.name, titulo: clean });
		};

		const json = join(root, "src", "data", "secciones.json");
		if (existsSync(json)) {
			for (const piece of pieces(json)) {
				if (piece.visible) add(piece.tipo, piece.titulo);
			}
		}

		const page = join(root, "src", "pages", "index.astro");
		if (existsSync(page)) {
			const source = readFileSync(page, "utf8");
			for (const { tipo, componente } of COMPONENTES) {
				if (!source.includes(`<${componente}`)) continue;
				add(tipo, literalTitle(source, componente));
			}
		}
	}

	return [...entries.values()];
}

const cache = new Map<string, { at: number; entries: CatalogEntry[] }>();

const copy = (entries: CatalogEntry[]): CatalogEntry[] =>
	entries.map((entry) => ({
		...entry,
		ejemplos: entry.ejemplos.map((item) => ({ ...item })),
	}));

/** Catálogo de piezas por tipo, con las webs que lo usan y ejemplos reales. */
export function readSectionCatalog(appsDir = DEFAULT_APPS_DIR): CatalogEntry[] {
	const cached = cache.get(appsDir);
	if (cached && Date.now() - cached.at < CACHE_MS) return copy(cached.entries);

	const entries = build(appsDir);
	cache.set(appsDir, { at: Date.now(), entries });
	return copy(entries);
}
