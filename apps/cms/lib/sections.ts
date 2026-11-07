/**
 * Piezas de la portada de una web.
 *
 * El CMS guarda `src/data/secciones.json`: una lista ordenada de secciones
 * (portada, casa, destacados, galería, visita, preguntas…) que la página pinta
 * con `<Secciones>`. Así el panel edita textos con inputs en vez de tocar
 * Astro, y se pueden añadir piezas nuevas sin reescribir la plantilla.
 *
 * El JSON es nuestro: se valida entero, se escribe de forma atómica y la
 * versión anterior queda en el historial antes de pisarla.
 */
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { listMedia, mediaFile, saveMedia } from "./files";
import { snapshot } from "./history";
import { DEFAULT_APPS_DIR } from "./paths";

export const SECTION_TYPES = [
	"hero",
	"about",
	"destacados",
	"galeria",
	"visita",
	"faq",
	"texto",
	"cta",
	"chips",
	"menu",
] as const;
export type SectionType = (typeof SECTION_TYPES)[number];

export interface SectionLink {
	texto: string;
	href: string;
	externo?: boolean;
	primario?: boolean;
}

export interface SectionFact {
	etiqueta: string;
	html: string;
}

export interface SectionItem {
	titulo: string;
	texto: string;
}

export interface SectionPhoto {
	imagen: string;
	alt: string;
}

export interface SectionQuestion {
	pregunta: string;
	respuesta: string;
}

export interface SectionMenuDish {
	nombre: string;
	nota: string;
	precio?: string;
}

export interface SectionMenuGroup {
	titulo: string;
	items: SectionMenuDish[];
}

export interface Seccion {
	id: string;
	tipo: SectionType;
	visible: boolean;
	etiqueta?: string;
	titulo: string;
	texto?: string;
	nota?: string;
	notaHorario?: string;
	pieFoto?: string;
	distintivo?: string;
	imagen?: string;
	imagenAlt?: string;
	boton?: SectionLink;
	botonSecundario?: SectionLink;
	enlaceGaleria?: SectionLink;
	datos?: SectionFact[];
	parrafos?: string[];
	enlaces?: SectionLink[];
	items?: SectionItem[];
	fotos?: SectionPhoto[];
	preguntas?: SectionQuestion[];
	chips?: string[];
	grupos?: SectionMenuGroup[];
}

export interface Secciones {
	version: 1;
	secciones: Seccion[];
}

const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,39}$/;
const HREF_PATTERN = /^(?:https:\/\/|mailto:|tel:|\/|#|maps:[A-Za-z]+$)/;
const MAX_SECTIONS = 20;

const TEXT_LIMITS: Record<string, number> = {
	etiqueta: 90,
	titulo: 220,
	texto: 1200,
	nota: 800,
	notaHorario: 800,
	pieFoto: 120,
	distintivo: 80,
	mapaEtiqueta: 140,
	imagen: 160,
	imagenAlt: 220,
};

const LINK_FIELDS = new Set(["boton", "botonSecundario", "enlaceGaleria"]);

/** Campos que acepta cada tipo de pieza; el resto se rechaza. */
const ALLOWED: Record<SectionType, string[]> = {
	hero: [
		"etiqueta",
		"titulo",
		"texto",
		"imagen",
		"imagenAlt",
		"boton",
		"botonSecundario",
		"datos",
		"pieFoto",
		"enlaceGaleria",
		"distintivo",
	],
	about: ["etiqueta", "titulo", "parrafos", "nota", "enlaces"],
	destacados: ["etiqueta", "titulo", "items"],
	galeria: ["etiqueta", "titulo", "texto", "fotos", "nota", "boton"],
	visita: ["etiqueta", "titulo", "notaHorario", "nota", "mapaEtiqueta", "enlaces"],
	faq: ["etiqueta", "titulo", "preguntas"],
	texto: ["etiqueta", "titulo", "parrafos", "enlaces"],
	cta: ["etiqueta", "titulo", "texto", "boton"],
	chips: ["etiqueta", "titulo", "chips"],
	menu: ["etiqueta", "titulo", "texto", "boton", "grupos", "nota"],
};

function text(value: unknown, label: string, max: number, required = false): string {
	if (value === undefined || value === null) {
		if (required) throw new Error(`${label} no puede estar vacío.`);
		return "";
	}
	if (typeof value !== "string") throw new Error(`${label} debe ser texto.`);
	const trimmed = value.trim();
	if (required && !trimmed) throw new Error(`${label} no puede estar vacío.`);
	if (trimmed.length > max) throw new Error(`${label} no puede pasar de ${max} caracteres.`);
	if (/<script|\son[a-z]+\s*=/i.test(trimmed)) {
		throw new Error(`${label} no admite scripts ni manejadores de eventos.`);
	}
	return trimmed;
}

function link(value: unknown, label: string): SectionLink {
	if (!value || typeof value !== "object") throw new Error(`${label} debe ser un enlace.`);
	const raw = value as Record<string, unknown>;
	const href = text(raw.href, `${label}: la URL`, 500, true);
	if (!HREF_PATTERN.test(href)) {
		throw new Error(
			`${label}: la URL debe empezar por https://, /, #, tel:, mailto: o maps:clave.`,
		);
	}
	return {
		texto: text(raw.texto, `${label}: el texto`, 90, true),
		href,
		externo: raw.externo === true || undefined,
		primario: raw.primario === true || undefined,
	};
}

function record(value: unknown, label: string): Record<string, unknown> {
	if (!value || typeof value !== "object") throw new Error(`${label} no es válido.`);
	return value as Record<string, unknown>;
}

function listOf<T>(
	value: unknown,
	label: string,
	max: number,
	build: (item: Record<string, unknown>, position: number) => T,
): T[] {
	if (!Array.isArray(value)) throw new Error(`${label} debe ser una lista.`);
	if (value.length > max) throw new Error(`${label} no puede pasar de ${max} elementos.`);
	return value.map((item, index) => build(record(item, `${label} ${index + 1}`), index + 1));
}

function strings(value: unknown, label: string, max: number): string[] {
	if (!Array.isArray(value)) throw new Error(`${label} debe ser una lista.`);
	if (value.length > max) throw new Error(`${label} no puede pasar de ${max} elementos.`);
	return value.map((item, index) => text(item, `${label} ${index + 1}`, 1200, true));
}

function links(value: unknown, label: string): SectionLink[] {
	return listOf(value, label, 6, (item, position) => link(item, `${label} ${position}`));
}

function facts(value: unknown, label: string): SectionFact[] {
	return listOf(value, label, 4, (item, position) => ({
		etiqueta: text(item.etiqueta, `${label} ${position}: la etiqueta`, 60, true),
		html: text(item.html, `${label} ${position}: el texto`, 220, true),
	}));
}

function items(value: unknown, label: string): SectionItem[] {
	return listOf(value, label, 8, (item, position) => ({
		titulo: text(item.titulo, `${label} ${position}: el título`, 90, true),
		texto: text(item.texto, `${label} ${position}: el texto`, 600, true),
	}));
}

function photos(value: unknown, label: string, media: Set<string>): SectionPhoto[] {
	return listOf(value, label, 12, (item, position) => {
		const imagen = text(item.imagen, `${label} ${position}: la imagen`, 160, true);
		if (media.size > 0 && !media.has(imagen)) {
			throw new Error(`${label} ${position}: la imagen «${imagen}» no está en src/assets/fotos.`);
		}
		return {
			imagen,
			alt: text(item.alt, `${label} ${position}: el texto alternativo`, 220, true),
		};
	});
}

function menuGroups(value: unknown, label: string): SectionMenuGroup[] {
	return listOf(value, label, 12, (group, position) => {
		const platos = group.items;
		if (!Array.isArray(platos)) throw new Error(`${label} ${position}: faltan los platos.`);
		return {
			titulo: text(group.titulo, `${label} ${position}: el título`, 90, true),
			items: listOf(platos, `${label} ${position}`, 40, (dish, dishPosition) => ({
				nombre: text(dish.nombre, `${label} ${position}.${dishPosition}: el nombre`, 120, true),
				nota: text(dish.nota, `${label} ${position}.${dishPosition}: la nota`, 300, true),
				precio:
					text(dish.precio, `${label} ${position}.${dishPosition}: el precio`, 40) || undefined,
			})),
		};
	});
}

function questions(value: unknown, label: string): SectionQuestion[] {
	return listOf(value, label, 20, (item, position) => ({
		pregunta: text(item.pregunta, `${label} ${position}: la pregunta`, 220, true),
		respuesta: text(item.respuesta, `${label} ${position}: la respuesta`, 1200, true),
	}));
}

function validateSection(
	value: unknown,
	position: number,
	ids: Set<string>,
	media: Set<string>,
): Seccion {
	const raw = record(value, `La pieza ${position}`);
	const id = text(raw.id, `El id de la pieza ${position}`, 40, true);
	if (!ID_PATTERN.test(id)) {
		throw new Error(`El id «${id}» solo admite minúsculas, números y guiones.`);
	}
	if (ids.has(id)) throw new Error(`Hay dos piezas con el id «${id}».`);
	ids.add(id);

	const tipo = raw.tipo;
	if (typeof tipo !== "string" || !(SECTION_TYPES as readonly string[]).includes(tipo)) {
		throw new Error(`La pieza ${position} tiene un tipo desconocido: «${String(tipo)}».`);
	}

	const allowed = ALLOWED[tipo as SectionType];
	for (const key of Object.keys(raw)) {
		if (key === "id" || key === "tipo" || key === "visible") continue;
		if (!allowed.includes(key)) {
			throw new Error(`La pieza «${id}» no admite el campo «${key}» para el tipo ${tipo}.`);
		}
	}

	const section: Seccion = {
		id,
		tipo: tipo as SectionType,
		visible: raw.visible !== false,
		titulo: text(raw.titulo, `La pieza «${id}»: el título`, TEXT_LIMITS.titulo, true),
	};

	for (const field of allowed) {
		const rawValue = raw[field];
		if (rawValue === undefined) continue;
		if (field in TEXT_LIMITS) {
			const parsed = text(rawValue, `La pieza «${id}»: ${field}`, TEXT_LIMITS[field]);
			if (parsed) (section as Record<string, unknown>)[field] = parsed;
			continue;
		}
		if (LINK_FIELDS.has(field)) {
			(section as Record<string, unknown>)[field] = link(rawValue, `La pieza «${id}»: ${field}`);
			continue;
		}
		switch (field) {
			case "parrafos":
				(section as Record<string, unknown>)[field] = strings(
					rawValue,
					`La pieza «${id}»: los párrafos`,
					12,
				);
				break;
			case "enlaces":
				(section as Record<string, unknown>)[field] = links(
					rawValue,
					`La pieza «${id}»: los enlaces`,
				);
				break;
			case "datos":
				(section as Record<string, unknown>)[field] = facts(
					rawValue,
					`La pieza «${id}»: los datos`,
				);
				break;
			case "items":
				(section as Record<string, unknown>)[field] = items(
					rawValue,
					`La pieza «${id}»: los destacados`,
				);
				break;
			case "fotos":
				(section as Record<string, unknown>)[field] = photos(
					rawValue,
					`La pieza «${id}»: las fotos`,
					media,
				);
				break;
			case "chips":
				(section as Record<string, unknown>)[field] = strings(
					rawValue,
					`La pieza «${id}»: los chips`,
					24,
				);
				break;
			case "grupos":
				(section as Record<string, unknown>)[field] = menuGroups(
					rawValue,
					`La pieza «${id}»: la carta`,
				);
				break;
			case "preguntas":
				(section as Record<string, unknown>)[field] = questions(
					rawValue,
					`La pieza «${id}»: las preguntas`,
				);
				break;
		}
	}

	// Cada tipo declara lo mínimo para que la pieza se vea bien en la página.
	if (section.tipo === "hero" && (!section.imagen || !section.imagenAlt)) {
		throw new Error("La portada necesita imagen y texto alternativo.");
	}
	if (section.imagen && media.size > 0 && !media.has(section.imagen)) {
		throw new Error(`La imagen de portada «${section.imagen}» no está en src/assets/fotos.`);
	}
	if (section.tipo === "galeria" && !section.fotos?.length) {
		throw new Error("La galería necesita al menos una foto.");
	}
	if (section.tipo === "about" && !section.parrafos?.length) {
		throw new Error("La pieza «La casa» necesita al menos un párrafo.");
	}
	if (section.tipo === "destacados" && !section.items?.length) {
		throw new Error("La pieza de destacados necesita al menos un elemento.");
	}
	if (section.tipo === "faq" && !section.preguntas?.length) {
		throw new Error("La pieza de preguntas necesita al menos una pregunta.");
	}
	if (section.tipo === "texto" && !section.parrafos?.length) {
		throw new Error("La pieza de texto necesita al menos un párrafo.");
	}
	if (section.tipo === "cta" && !section.boton) {
		throw new Error("La pieza de llamada a la acción necesita un botón.");
	}

	if (section.tipo === "chips" && !section.chips?.length) {
		throw new Error("La pieza de chips necesita al menos un texto.");
	}
	if (section.tipo === "menu" && !section.grupos?.length) {
		throw new Error("La pieza de carta necesita al menos un grupo.");
	}

	return section;
}

function validateSecciones(input: unknown, media: Set<string>): Secciones {
	const raw = record(input, "El fichero de secciones");
	const list = raw.secciones;
	if (!Array.isArray(list)) throw new Error("Falta la lista de secciones.");
	if (list.length === 0) throw new Error("La página necesita al menos una pieza.");
	if (list.length > MAX_SECTIONS) {
		throw new Error(`La página no puede pasar de ${MAX_SECTIONS} piezas.`);
	}

	const ids = new Set<string>();
	const secciones = list.map((item, index) => validateSection(item, index + 1, ids, media));

	return { version: 1, secciones };
}

function appDirectory(slug: string, appsDir: string): string {
	if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) throw new Error("Web no válida.");
	return join(appsDir, slug);
}

function jsonPath(slug: string, appsDir: string): string {
	return join(appDirectory(slug, appsDir), "src", "data", "secciones.json");
}

function writeAtomic(file: string, content: string): void {
	mkdirSync(dirname(file), { recursive: true });
	const temporary = `${file}.cms-${process.pid}.tmp`;
	try {
		writeFileSync(temporary, content, "utf8");
		renameSync(temporary, file);
	} catch (error) {
		try {
			rmSync(temporary, { force: true });
		} catch {}
		throw new Error(`No se ha podido escribir: ${String(error)}`);
	}
}

export interface ImportedSection {
	secciones: Secciones;
	/** Id de la copia dentro de la web de destino. */
	id: string;
}

export function readSections(slug: string, appsDir = DEFAULT_APPS_DIR): Secciones | null {
	const file = jsonPath(slug, appsDir);
	if (!existsSync(file)) return null;

	let parsed: unknown;
	try {
		parsed = JSON.parse(readFileSync(file, "utf8"));
	} catch {
		throw new Error("src/data/secciones.json no es JSON válido.");
	}
	if (!parsed || typeof parsed !== "object" || !Array.isArray((parsed as Secciones).secciones)) {
		throw new Error("src/data/secciones.json no contiene una lista de secciones.");
	}
	return parsed as Secciones;
}

export function saveSections(
	slug: string,
	input: unknown,
	appsDir = DEFAULT_APPS_DIR,
): Secciones {
	const media = new Set(listMedia(slug, appsDir).map((item) => item.name));
	const data = validateSecciones(input, media);
	const file = jsonPath(slug, appsDir);

	if (existsSync(file)) {
		snapshot(slug, "data/secciones.json", readFileSync(file, "utf8"), appsDir);
	}

	writeAtomic(file, `${JSON.stringify(data, null, "\t")}\n`);
	return data;
}

/**
 * Copia una pieza de otra web dentro de esta, con sus imágenes.
 *
 * La pieza se valida al guardar la página entera, igual que cualquier edición
 * del panel. Las fotos que falten se copian de `src/assets/fotos` de la web de
 * origen; si el destino ya tiene una con el mismo nombre, se reutiliza.
 */
export function copySection(
	targetSlug: string,
	sourceSlug: string,
	original: Seccion,
	appsDir = DEFAULT_APPS_DIR,
): ImportedSection {
	if (!/^[a-z0-9][a-z0-9-]*$/.test(sourceSlug)) throw new Error("Web de origen no válida.");
	if (!original || typeof original !== "object") throw new Error("Pieza de origen no válida.");
	if (original.visible === false) throw new Error("Esa pieza está oculta en la web de origen.");

	const copy = JSON.parse(JSON.stringify(original)) as Seccion;
	const targetMedia = new Set(listMedia(targetSlug, appsDir).map((item) => item.name));

	const copyImage = (name: string): string => {
		if (targetMedia.has(name)) return name;
		const saved = saveMedia(
			targetSlug,
			name,
			readFileSync(mediaFile(sourceSlug, name, appsDir)),
			appsDir,
		);
		targetMedia.add(saved.name);
		return saved.name;
	};

	if (copy.imagen) copy.imagen = copyImage(copy.imagen);
	if (copy.fotos?.length) {
		copy.fotos = copy.fotos.map((photo) => ({ ...photo, imagen: copyImage(photo.imagen) }));
	}

	const current = readSections(targetSlug, appsDir)?.secciones ?? [];
	const ids = new Set(current.map((section) => section.id));
	const seed = ID_PATTERN.test(copy.id) ? copy.id : "pieza";
	const base = `${seed.slice(0, 30).replace(/-+$/, "")}-copia`;
	let id = base;
	let suffix = 2;
	while (ids.has(id)) id = `${base}-${suffix++}`;

	copy.id = id;
	copy.visible = true;

	const secciones = saveSections(
		targetSlug,
		{ version: 1, secciones: [...current, copy] },
		appsDir,
	);
	return { secciones, id };
}

export function importSection(
	targetSlug: string,
	sourceSlug: string,
	sectionId: string,
	appsDir = DEFAULT_APPS_DIR,
): ImportedSection {
	if (!/^[a-z0-9][a-z0-9-]*$/.test(sourceSlug)) throw new Error("Web de origen no válida.");
	if (!ID_PATTERN.test(sectionId)) throw new Error("Pieza de origen no válida.");

	const source = readSections(sourceSlug, appsDir);
	if (!source) throw new Error("La web de origen no tiene piezas.");
	const original = source.secciones.find((section) => section.id === sectionId);
	if (!original) throw new Error("No existe esa pieza en la web de origen.");

	return copySection(targetSlug, sourceSlug, original, appsDir);
}
