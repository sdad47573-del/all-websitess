import { existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { snapshot } from "./history";
import { DEFAULT_APPS_DIR } from "./paths";

export { DEFAULT_APPS_DIR };

/** Campos que el CMS se atreve a tocar. */
export const EDITABLE_FIELDS = [
	"name",
	"tagline",
	"phone",
	"street",
	"postalCode",
	"city",
	"siteUrl",
	"lat",
	"lng",
] as const;
export type EditableField = (typeof EDITABLE_FIELDS)[number];

/**
 * Sinónimos que se han visto en las plantillas. El primero que exista es el que
 * se lee y el que se edita: así el panel no inventa campos que la web no usa.
 */
const FIELD_KEYS: Record<EditableField, string[]> = {
	name: ["name", "fullName"],
	tagline: ["tagline", "claim"],
	phone: ["phoneDisplay", "phone"],
	street: ["street", "address"],
	postalCode: ["postalCode"],
	city: ["city"],
	siteUrl: ["siteUrl"],
	lat: ["lat"],
	lng: ["lng"],
};

const SUMMARY_KEYS = ["summary", "description", "tagline", "claim"];

export interface Site {
	slug: string;
	name: string;
	tagline: string;
	city: string;
	street: string;
	postalCode: string;
	phone: string;
	siteUrl: string;
	lat: string;
	lng: string;
	category: string;
	summary: string;
	legalPending: boolean;
	photoCount: number;
	hasLegalPage: boolean;
	updatedAt: number;
	editable: Record<EditableField, boolean>;
}

interface Literal {
	key: string;
	/** Índice de la comilla de apertura. */
	start: number;
	/** Índice de la comilla de cierre. */
	end: number;
	value: string;
	quote: string;
}

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif|svg)$/i;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

/** Posición del bloque `export const BUSINESS = { … }` (llaves incluidas). */
function businessBlock(source: string): { start: number; end: number } | null {
	const match = /export\s+const\s+BUSINESS\s*=\s*\{/.exec(source);
	if (!match) return null;

	let depth = 0;
	for (let index = match.index + match[0].length - 1; index < source.length; index += 1) {
		if (source[index] === "{") depth += 1;
		else if (source[index] === "}") {
			depth -= 1;
			if (depth === 0) return { start: match.index + match[0].length - 1, end: index };
		}
	}
	return null;
}

/**
 * Primer literal de cadena de una clave dentro de un rango. Solo acepta
 * literales que cierran en la misma línea: los textos multilínea se muestran
 * en la ficha, pero no se editan desde aquí.
 */
function findLiteral(source: string, key: string, from: number, to: number): Literal | null {
	if (from >= to) return null;
	const pattern = new RegExp(`(?:^|[\\s,{])${key}\\s*:\\s*`, "g");
	const slice = source.slice(from, to);
	let match: RegExpExecArray | null;

	while ((match = pattern.exec(slice))) {
		const quoteIndex = from + match.index + match[0].length;
		const quote = source[quoteIndex];
		if (quote !== "'" && quote !== '"' && quote !== "`") continue;

		let index = quoteIndex + 1;
		let value = "";
		while (index < to) {
			const char = source[index];
			if (char === "\\") {
				value += source.slice(index, index + 2);
				index += 2;
				continue;
			}
			if (char === "\n" || char === "\r") break;
			if (char === quote) {
				return { key, start: quoteIndex, end: index, value, quote };
			}
			value += char;
			index += 1;
		}
	}
	return null;
}

/** Primer valor de una asignación (`export const SITE_URL = '…'`). */
function findAssignment(source: string, key: string): Literal | null {
	const pattern = new RegExp(`\\b${key}\\s*=\\s*(['"\`])`, "g");
	let match: RegExpExecArray | null;

	while ((match = pattern.exec(source))) {
		const quoteIndex = match.index + match[0].length - 1;
		const quote = source[quoteIndex];
		const close = source.indexOf(quote, quoteIndex + 1);
		if (close === -1) return null;
		const lineEnd = source.indexOf("\n", quoteIndex);
		if (lineEnd !== -1 && close > lineEnd) return null;
		return {
			key,
			start: quoteIndex,
			end: close,
			value: source.slice(quoteIndex + 1, close),
			quote,
		};
	}
	return null;
}

function readFirst(source: string, keys: string[], from: number, to: number): Literal | null {
	for (const key of keys) {
		const literal = findLiteral(source, key, from, to);
		if (literal) return literal;
	}
	return null;
}

/** Bloque `geo: { lat: …, lng: … }` dentro de BUSINESS. */
function geoRange(
	source: string,
	business: { start: number; end: number } | null,
): { start: number; end: number } | null {
	if (!business) return null;
	const match = /\bgeo\s*:\s*\{/.exec(source.slice(business.start, business.end));
	if (!match) return null;

	const start = business.start + match.index + match[0].length - 1;
	let depth = 0;
	for (let index = start; index <= business.end; index += 1) {
		if (source[index] === "{") depth += 1;
		else if (source[index] === "}") {
			depth -= 1;
			if (depth === 0) return { start, end: index };
		}
	}
	return null;
}

interface NumberLiteral {
	start: number;
	end: number;
	value: string;
}

/** Literal numérico de una clave (`lat: 36.7236`) dentro de un rango. */
function findNumber(source: string, key: string, from: number, to: number): NumberLiteral | null {
	const pattern = new RegExp(`(?:^|[\\s,{])${key}\\s*:\\s*(-?\\d+(?:\\.\\d+)?)`, "g");
	const slice = source.slice(from, to);
	const match = pattern.exec(slice);
	if (!match) return null;

	const value = match[1];
	const start = from + match.index + match[0].length - value.length;
	return { start, end: start + value.length, value };
}

function categoryOf(source: string): string {
	const google = /\bgoogleCategory:\s*'([^']+)'/.exec(source)?.[1];
	if (google) return google;
	const first = /\bcategories:\s*\[\s*'([^']+)'/.exec(source)?.[1];
	return first ?? "";
}

function countPhotos(appDir: string): number {
	const dir = join(appDir, "src", "assets", "fotos");
	if (!existsSync(dir)) return 0;
	return readdirSync(dir).filter((name) => IMAGE_EXTENSIONS.test(name)).length;
}

function parse(slug: string, source: string, appDir: string, updatedAt: number): Site {
	const block = businessBlock(source);
	const from = block ? block.start + 1 : 0;
	const to = block ? block.end : 0;

	const values = {} as Record<EditableField, Literal | null>;
	for (const field of EDITABLE_FIELDS) {
		values[field] = block ? readFirst(source, FIELD_KEYS[field], from, to) : null;
	}

	const siteUrl =
		values.siteUrl?.value ??
		findAssignment(source, "SITE_URL")?.value ??
		findAssignment(source, "siteUrl")?.value ??
		"";
	const summary = readFirst(source, SUMMARY_KEYS, from, to)?.value ?? values.tagline?.value ?? "";

	const geo = geoRange(source, block);
	const lat = geo ? findNumber(source, "lat", geo.start, geo.end) : null;
	const lng = geo ? findNumber(source, "lng", geo.start, geo.end) : null;

	const editable = {} as Record<EditableField, boolean>;
	for (const field of EDITABLE_FIELDS) editable[field] = Boolean(values[field]);
	editable.lat = Boolean(lat);
	editable.lng = Boolean(lng);

	return {
		slug,
		name: values.name?.value ?? slug,
		tagline: values.tagline?.value ?? "",
		city: values.city?.value ?? "",
		street: values.street?.value ?? "",
		postalCode: values.postalCode?.value ?? "",
		phone: values.phone?.value ?? "",
		siteUrl,
		lat: lat?.value ?? "",
		lng: lng?.value ?? "",
		category: categoryOf(source),
		summary,
		legalPending: /\[pendiente de completar\]/.test(source),
		photoCount: countPhotos(appDir),
		hasLegalPage: existsSync(join(appDir, "src", "pages", "aviso-legal.astro")),
		updatedAt,
		editable,
	};
}

/** Parseo sin tocar el disco: lo usan los tests. */
export function parseSiteSource(
	slug: string,
	source: string,
	options: { photos?: number } = {},
): Site {
	const site = parse(slug, source, join(DEFAULT_APPS_DIR, slug), 0);
	return { ...site, photoCount: options.photos ?? site.photoCount };
}

export function getSite(slug: string, appsDir = DEFAULT_APPS_DIR): Site | null {
	if (!SLUG_PATTERN.test(slug)) return null;
	const appDir = join(appsDir, slug);
	const file = join(appDir, "src", "data", "site.ts");
	if (!existsSync(file)) return null;

	const source = readFileSync(file, "utf8");
	return parse(slug, source, appDir, statSync(file).mtimeMs);
}

/**
 * Caché por fichero y fecha de modificación: el listado se pide en cada
 * búsqueda y página, y releer 638 `site.ts` cada vez costaba ~900 ms.
 */
const cache = new Map<string, { mtimeMs: number; site: Site }>();

/** Todas las webs con `src/data/site.ts`, por nombre. */
export function listSites(appsDir = DEFAULT_APPS_DIR): Site[] {
	if (!existsSync(appsDir)) return [];

	const sites: Site[] = [];
	for (const entry of readdirSync(appsDir, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		if (!SLUG_PATTERN.test(entry.name)) continue;

		const appDir = join(appsDir, entry.name);
		const file = join(appDir, "src", "data", "site.ts");
		if (!existsSync(file)) continue;

		const mtimeMs = statSync(file).mtimeMs;
		const cached = cache.get(file);
		if (cached && cached.mtimeMs === mtimeMs) {
			sites.push(cached.site);
			continue;
		}

		try {
			const site = parse(entry.name, readFileSync(file, "utf8"), appDir, mtimeMs);
			cache.set(file, { mtimeMs, site });
			sites.push(site);
		} catch {
			// Una web con el fichero roto no debe tumbar el panel entero.
		}
	}

	return sites.sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export function validateValue(field: EditableField, raw: string): string | null {
	const value = raw.trim();
	if (!value) return "El valor no puede estar vacío.";
	if (/[\r\n]/.test(raw)) return "El valor debe caber en una línea.";
	if (raw.includes("\\")) return "El valor no puede contener barras invertidas.";
	if (value.length > 200) return "Máximo 200 caracteres.";

	switch (field) {
		case "name":
			return value.length < 2 ? "El nombre es demasiado corto." : null;
		case "tagline":
			return value.length > 120 ? "El lema no debería pasar de 120 caracteres." : null;
		case "phone": {
			if (!/^[0-9+().\s-]+$/.test(value))
				return "El teléfono solo admite números, espacios y + ( ) - .";
			return (value.match(/\d/g) ?? []).length < 6
				? "El teléfono necesita al menos 6 dígitos."
				: null;
		}
		case "street":
			return value.length < 3 ? "La dirección es demasiado corta." : null;
		case "postalCode":
			return /^\d{4,5}$/.test(value) ? null : "El código postal debe tener 4 o 5 dígitos.";
		case "city":
			return value.length < 2 ? "La ciudad es demasiado corta." : null;
		case "siteUrl":
			return /^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/\S*)?$/i.test(value)
				? null
				: "La URL debe empezar por https:// y ser un dominio válido.";
		case "lat": {
			const number = Number(value.replace(",", "."));
			return Number.isFinite(number) && Math.abs(number) <= 90
				? null
				: "La latitud debe ser un número entre -90 y 90.";
		}
		case "lng": {
			const number = Number(value.replace(",", "."));
			return Number.isFinite(number) && Math.abs(number) <= 180
				? null
				: "La longitud debe ser un número entre -180 y 180.";
		}
	}
}

/** Comilla que no obligue a escapar nada dentro del literal. */
function pickQuote(preferred: string, value: string): string | null {
	for (const quote of [preferred, "'", '"', "`"]) {
		if (value.includes(quote)) continue;
		if (quote === "`" && value.includes("${")) continue;
		return quote;
	}
	return null;
}

export interface UpdateResult {
	ok: boolean;
	error?: string;
	previous?: string;
}

/** Reescribe la latitud o la longitud del bloque `geo` sin tocar nada más. */
function updateGeoField(
	file: string,
	source: string,
	business: { start: number; end: number },
	field: "lat" | "lng",
	value: string,
	slug: string,
	appsDir: string,
): UpdateResult {
	const geo = geoRange(source, business);
	if (!geo) return { ok: false, error: "Esta plantilla no declara BUSINESS.geo." };

	const literal = findNumber(source, field, geo.start, geo.end);
	if (!literal) return { ok: false, error: `No se encuentra «${field}» dentro de geo.` };
	if (literal.value === value) return { ok: true, previous: literal.value };

	const updated = source.slice(0, literal.start) + value + source.slice(literal.end);
	snapshot(slug, "data/site.ts", source, appsDir);
	try {
		writeFileSync(file, updated, "utf8");
	} catch (error) {
		return { ok: false, error: `No se ha podido escribir: ${String(error)}` };
	}

	const check = findNumber(updated, field, geo.start, geo.end);
	if (!check || check.value !== value) {
		writeFileSync(file, source, "utf8");
		cache.delete(file);
		return { ok: false, error: "La verificación ha fallado; se ha restaurado el fichero." };
	}

	cache.delete(file);
	return { ok: true, previous: literal.value };
}

/**
 * Sustituye un literal de `BUSINESS` por otro valor. Devuelve el valor anterior
 * y deja el fichero intacto ante cualquier duda.
 */
export function updateSiteField(
	slug: string,
	field: EditableField,
	rawValue: string,
	appsDir = DEFAULT_APPS_DIR,
): UpdateResult {
	if (!EDITABLE_FIELDS.includes(field)) return { ok: false, error: "Campo no editable." };
	if (!SLUG_PATTERN.test(slug)) return { ok: false, error: "Web no válida." };

	const invalid = validateValue(field, rawValue);
	if (invalid) return { ok: false, error: invalid };

	const value = rawValue.trim();
	const appDir = join(appsDir, slug);
	const file = join(appDir, "src", "data", "site.ts");
	if (!existsSync(file)) return { ok: false, error: "No existe src/data/site.ts." };

	const source = readFileSync(file, "utf8");
	const block = businessBlock(source);
	if (!block) return { ok: false, error: "No se encuentra el bloque BUSINESS." };

	if (field === "lat" || field === "lng") {
		return updateGeoField(file, source, block, field, value, slug, appsDir);
	}

	const literal = readFirst(source, FIELD_KEYS[field], block.start + 1, block.end);
	if (!literal) return { ok: false, error: "Este campo no es un literal editable en esta plantilla." };
	if (literal.value === value) return { ok: true, previous: literal.value };

	const quote = pickQuote(literal.quote, value);
	if (!quote) return { ok: false, error: "El valor contiene todas las comillas posibles." };

	const updated =
		source.slice(0, literal.start) + quote + value + quote + source.slice(literal.end + 1);

	snapshot(slug, "data/site.ts", source, appsDir);

	const temporary = `${file}.cms-${process.pid}.tmp`;
	try {
		writeFileSync(temporary, updated, "utf8");
		renameSync(temporary, file);
	} catch (error) {
		try {
			unlinkSync(temporary);
		} catch {}
		return { ok: false, error: `No se ha podido escribir: ${String(error)}` };
	}

	// Verificación: si el parseo no devuelve el valor nuevo, se restaura el original.
	const updatedBlock = businessBlock(updated);
	const after = readFirst(updated, FIELD_KEYS[field], updatedBlock?.start ?? 0, updated.length);
	if (!after || after.value !== value) {
		writeFileSync(file, source, "utf8");
		cache.delete(file);
		return { ok: false, error: "La verificación ha fallado; se ha restaurado el fichero." };
	}

	cache.delete(file);
	return { ok: true, previous: literal.value };
}
