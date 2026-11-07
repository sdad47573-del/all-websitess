/**
 * Extrae piezas de las portadas que todavía están escritas a mano en Astro.
 *
 * La biblioteca principal lee `secciones.json`, pero cientos de webs guardan
 * sus textos directamente en `index.astro`. Este extractor es deliberadamente
 * conservador: solo crea piezas con texto estático (nada de expresiones
 * `{...}`), sin imágenes, y solo de secciones que se pueden reutilizar como
 * «La casa», «Visítanos», preguntas o texto libre. Nunca modifica la web de
 * origen; sirve para que el CMS tenga más modelos que copiar.
 */
import type { Seccion, SectionQuestion, SectionType } from "./sections";

const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,39}$/;
const SECTION_RE = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
const MAX_PARAGRAPHS = 12;
const MAX_QUESTIONS = 20;
const MAX_ITEMS = 24;
const MAX_TEXT = 1200;

/** Texto visible de un fragmento HTML; descarta expresiones que no se pueden resolver. */
function clean(value: string): string {
	const text = value
		.replace(/<br\s*\/?>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/\{[^{}]*\}/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/\s+/g, " ")
		.trim();
	return /[{}]/.test(text) ? "" : text;
}

function slug(value: string): string {
	return value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 32);
}

function heading(inner: string): string {
	const match = /<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/i.exec(inner);
	return match ? clean(match[1]) : "";
}

function attr(tag: string, name: string): string {
	const key = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const match = new RegExp(
		`\\b${key}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{\`([^\`]*)\`\\}|\\{'([^']*)'\\}|\\{"([^"]*)"\\})`,
		"i",
	).exec(tag);
	return clean(match?.[1] ?? match?.[2] ?? match?.[3] ?? match?.[4] ?? match?.[5] ?? "");
}

/** Devuelve el contenido equilibrado de `[` … `]` respetando cadenas. */
function brackets(source: string, start: number): string | null {
	let depth = 0;
	let quote = "";
	for (let index = start; index < source.length; index++) {
		const char = source[index];
		if (quote) {
			if (char === "\\") {
				index++;
				continue;
			}
			if (char === quote) quote = "";
			continue;
		}
		if (char === '"' || char === "'" || char === "`") {
			quote = char;
			continue;
		}
		if (char === "[") depth++;
		if (char === "]") {
			depth--;
			if (depth === 0) return source.slice(start, index + 1);
		}
	}
	return null;
}

function arrayProp(tag: string, name: string): string[] {
	const key = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const match = new RegExp(`\\b${key}\\s*=\\s*\\{`).exec(tag);
	if (!match) return [];
	const start = tag.indexOf("[", match.index + match[0].length);
	if (start < 0) return [];
	const body = brackets(tag, start);
	if (!body) return [];

	return [...body.matchAll(/(['"`])([\s\S]*?)\1/g)]
		.map((item) => clean(item[2]))
		.filter(Boolean);
}

function objectProp(tag: string, name: string): Record<string, string>[] {
	const key = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const match = new RegExp(`\\b${key}\\s*=\\s*\\{`).exec(tag);
	if (!match) return [];
	const start = tag.indexOf("[", match.index + match[0].length);
	if (start < 0) return [];
	const body = brackets(tag, start);
	if (!body) return [];

	return [...body.matchAll(/\{([^{}]*)\}/g)].map((object) => {
		const values: Record<string, string> = {};
		for (const field of ["q", "question", "pregunta", "a", "answer", "respuesta"]) {
			const value = new RegExp(
				`\\b${field}\\s*:\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`,
			).exec(object[1]);
			if (value) values[field] = clean(value[1] ?? value[2] ?? value[3] ?? "");
		}
		return values;
	});
}

function componentTags(source: string, name: string): string[] {
	const tags: string[] = [];
	const opening = new RegExp(`<${name}\\b`, "g");
	let match: RegExpExecArray | null;

	while ((match = opening.exec(source))) {
		let quote = "";
		let braces = 0;
		for (let index = match.index; index < source.length; index++) {
			const char = source[index];
			if (quote) {
				if (char === "\\") index++;
				else if (char === quote) quote = "";
				continue;
			}
			if (char === '"' || char === "'" || char === "`") {
				quote = char;
				continue;
			}
			if (char === "{") braces++;
			else if (char === "}") braces = Math.max(0, braces - 1);
			else if (char === ">" && braces === 0) {
				tags.push(source.slice(match.index, index + 1));
				break;
			}
		}
	}

	return tags;
}

function questionsFrom(inner: string): SectionQuestion[] {
	const questions: SectionQuestion[] = [];
	for (const match of inner.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)) {
		const summary = /<summary\b[^>]*>([\s\S]*?)<\/summary>/i.exec(match[1]);
		const answer = /<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(match[1]);
		const pregunta = summary ? clean(summary[1]) : "";
		const respuesta = answer ? clean(answer[1]) : "";
		if (pregunta && respuesta) questions.push({ pregunta, respuesta });
		if (questions.length >= MAX_QUESTIONS) break;
	}
	return questions;
}

function paragraphsFrom(inner: string): string[] {
	const paragraphs: string[] = [];
	const seen = new Set<string>();
	for (const match of inner.matchAll(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi)) {
		const className = attr(match[1], "class");
		if (/(eyebrow|kicker|section-label|head__label|pretitle)/i.test(className)) continue;
		const text = clean(match[2]).slice(0, MAX_TEXT);
		if (text.length < 20 || seen.has(text)) continue;
		seen.add(text);
		paragraphs.push(text);
		if (paragraphs.length >= MAX_PARAGRAPHS) break;
	}
	return paragraphs;
}

function labelFrom(inner: string): string {
	for (const match of inner.matchAll(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi)) {
		const className = attr(match[1], "class");
		if (!/(eyebrow|kicker|section-label|head__label|pretitle)/i.test(className)) continue;
		const text = clean(match[2]).slice(0, 90);
		if (text) return text;
	}
	return "";
}

function listItemsFrom(inner: string): string[] {
	const items: string[] = [];
	const seen = new Set<string>();
	for (const match of inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) {
		const text = clean(match[1]);
		if (text.length < 2 || text.length > 80 || seen.has(text)) continue;
		seen.add(text);
		items.push(text);
		if (items.length >= MAX_ITEMS) break;
	}
	return items;
}

function classify(haystack: string, items: string[]): SectionType | null {
	const text = haystack.toLowerCase();
	if (/(inicio|portada|hero|bienvenida)/.test(text)) return null;
	if (/(galeria|gallery|fotos?|album)/.test(text)) return null;
	if (/(carta|menu|platos|productos)/.test(text)) return null;
	if (/(pregunta|faq|duda|frecuente)/.test(text)) return "faq";
	if (/(resena|reseña|opinion|opiniones|palabras|dicen|valoracion)/.test(text)) return "texto";
	if (
		/(servicio|ofrece|especialidad|incluye|caracteristica|amenidad)/.test(text) &&
		items.length >= 2
	) {
		return "chips";
	}
	if (
		/(horario|visita|ubicacion|contacto|donde|direccion|local|terraza|mesa|reserva)/.test(
			text,
		)
	) {
		return "visita";
	}
	if (
		/(casa|nosotros|historia|sobre|restaurante|bar|negocio|brasa|cocina|alojamiento|taller)/.test(
			text,
		)
	) {
		return "about";
	}
	return "texto";
}

function humanId(value: string): string {
	return value.replace(/-/g, " ").replace(/^\w/, (letter) => letter.toUpperCase());
}

function uniqueId(seed: string, fallback: string, used: Set<string>): string {
	let base = slug(seed);
	if (!ID_PATTERN.test(base)) base = fallback;
	let id = base;
	let suffix = 2;
	while (used.has(id)) id = `${base}-${suffix++}`.slice(0, 40);
	used.add(id);
	return id;
}

function build(section: Omit<Seccion, "id">, seed: string, fallback: string, used: Set<string>): Seccion {
	return { ...section, id: uniqueId(seed, fallback, used) };
}

function sectionFrom(attrs: string, inner: string, index: number, used: Set<string>): Seccion | null {
	const idAttr = attr(attrs, "id");
	const className = attr(attrs, "class");
	const title = heading(inner) || (idAttr ? humanId(idAttr) : "");
	if (!title) return null;

	const etiqueta = labelFrom(inner);
	const paragraphs = paragraphsFrom(inner);
	const questions = questionsFrom(inner);
	const items = listItemsFrom(inner);
	const tipo = classify(`${idAttr} ${className} ${title}`, items);
	if (!tipo) return null;

	if (tipo === "faq" && questions.length === 0) return null;
	if ((tipo === "about" || tipo === "texto") && paragraphs.length === 0) return null;
	if (tipo === "chips" && items.length < 2) return null;
	if (tipo === "visita" && paragraphs.length === 0 && !etiqueta) return null;

	const base: Omit<Seccion, "id"> = {
		tipo,
		visible: true,
		titulo: title.slice(0, 220),
	};
	if (etiqueta) base.etiqueta = etiqueta;
	if (tipo === "about" || tipo === "texto") base.parrafos = paragraphs;
	if (tipo === "visita") base.nota = paragraphs.join("\n\n").slice(0, 800);
	if (tipo === "faq") base.preguntas = questions;
	if (tipo === "chips") base.chips = items.slice(0, 10);

	return build(base, idAttr, `${tipo}-${index + 1}`, used);
}

function componentPieces(source: string, used: Set<string>): Seccion[] {
	const pieces: Seccion[] = [];
	let index = 0;

	for (const tag of componentTags(source, "LocalAbout")) {
		const title = attr(tag, "title");
		const paragraphs = arrayProp(tag, "paragraphs");
		if (!title || paragraphs.length === 0) continue;
		const section: Omit<Seccion, "id"> = {
			tipo: "about",
			visible: true,
			titulo: title.slice(0, 220),
			parrafos: paragraphs.slice(0, MAX_PARAGRAPHS),
		};
		const label = attr(tag, "label") || attr(tag, "eyebrow");
		if (label) section.etiqueta = label.slice(0, 90);
		const note = attr(tag, "note");
		if (note) section.nota = note.slice(0, 800);
		pieces.push(build(section, `about-${index}`, `about-${index + 1}`, used));
		index++;
	}

	for (const tag of componentTags(source, "LocalFaq")) {
		const title = attr(tag, "title") || attr(tag, "eyebrow");
		const questions = objectProp(tag, "items")
			.map((item) => ({
				pregunta: item.q ?? item.question ?? item.pregunta ?? "",
				respuesta: item.a ?? item.answer ?? item.respuesta ?? "",
			}))
			.filter((item) => item.pregunta && item.respuesta);
		if (!title || questions.length === 0) continue;
		const section: Omit<Seccion, "id"> = {
			tipo: "faq",
			visible: true,
			titulo: title.slice(0, 220),
			preguntas: questions.slice(0, MAX_QUESTIONS),
		};
		const label = attr(tag, "eyebrow");
		if (label) section.etiqueta = label.slice(0, 90);
		pieces.push(build(section, `faq-${index}`, `faq-${index + 1}`, used));
		index++;
	}

	for (const tag of componentTags(source, "LocalVisit")) {
		const title = attr(tag, "title") || attr(tag, "eyebrow");
		const notes = [attr(tag, "hoursNote"), attr(tag, "note"), attr(tag, "reserveNote")].filter(
			Boolean,
		);
		if (!title || notes.length === 0) continue;
		const section: Omit<Seccion, "id"> = {
			tipo: "visita",
			visible: true,
			titulo: title.slice(0, 220),
			nota: notes.join("\n\n").slice(0, 800),
		};
		const label = attr(tag, "eyebrow");
		if (label) section.etiqueta = label.slice(0, 90);
		pieces.push(build(section, `visita-${index}`, `visita-${index + 1}`, used));
		index++;
	}

	for (const tag of componentTags(source, "LocalChips")) {
		const title = attr(tag, "label") || attr(tag, "title");
		const items = arrayProp(tag, "items");
		if (!title || items.length < 2) continue;
		const section: Omit<Seccion, "id"> = {
			tipo: "chips",
			visible: true,
			titulo: title.slice(0, 220),
			chips: items.slice(0, 10),
		};
		pieces.push(build(section, `chips-${index}`, `chips-${index + 1}`, used));
		index++;
	}

	return pieces;
}

/** Devuelve piezas listas para la biblioteca, sin repetir ids. */
export function extractPieces(source: string): Seccion[] {
	const used = new Set<string>();
	const pieces: Seccion[] = [];
	let index = 0;

	for (const match of source.matchAll(SECTION_RE)) {
		const section = sectionFrom(match[1], match[2], index, used);
		index++;
		if (section) pieces.push(section);
	}

	pieces.push(...componentPieces(source, used));
	return pieces;
}
