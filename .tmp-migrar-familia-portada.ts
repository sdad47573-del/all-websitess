/**
 * Migra a piezas la familia de portadas con hero + local + fotos + horario + preguntas,
 * conservando el marcado y el CSS de cada web.
 *
 * Uso: bun .tmp-migrar-familia-portada.ts [--apply] [--only slug]
 */
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const APPLY = process.argv.includes("--apply");
const ONLY = (() => {
	const i = process.argv.indexOf("--only");
	return i > 0 ? process.argv[i + 1] : null;
})();

const slugs = readFileSync(".tmp-sin-secciones.txt", "utf8").trim().split(/\r?\n/).filter(Boolean);

type Pieza = Record<string, unknown>;

const between = (src: string, start: RegExp, end: RegExp): string | null => {
	const a = start.exec(src);
	if (!a) return null;
	const rest = src.slice(a.index + a[0].length);
	const b = end.exec(rest);
	if (!b) return null;
	return rest.slice(0, b.index).trim();
};

const strip = (html: string) =>
	html
		.replace(/<br\s*\/?>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, " ")
		.trim();

const literal = (html: string) => !/[{}]/.test(html);

function galeriaDe(src: string): string[] {
	const block = /const\s+galeria\s*=\s*\[([\s\S]*?)\];/.exec(src)?.[1] ?? "";
	return [...block.matchAll(/['"]([^'"]+\.(?:jpe?g|png|webp|avif))['"]/gi)].map((m) => m[1]);
}

/** Las FAQ de esta familia viven en site.ts, no en el HTML de la portada. */
function faqsDe(slug: string): { pregunta: string; respuesta: string }[] {
	const file = `apps/${slug}/src/data/site.ts`;
	if (!existsSync(file)) return [];
	const src = readFileSync(file, "utf8");
	const block = /export const (?:faqs|FAQ|preguntas)\s*=\s*\[([\s\S]*?)\]\s*(?:as const)?;/.exec(src)?.[1];
	if (!block) return [];
	return [...block.matchAll(/(?:question|pregunta|q)\s*:\s*(['"`])([\s\S]*?)\1\s*,\s*(?:answer|respuesta|a)\s*:\s*(['"`])([\s\S]*?)\3/g)]
		.map((m) => ({ pregunta: strip(m[2]), respuesta: strip(m[4]) }))
		.filter((item) => item.pregunta && item.respuesta);
}

function fraseo(html: string): string {
	return html.replace(/\s+/g, " ").trim();
}

function migrar(slug: string): { ok: boolean; motivo?: string; piezas?: number } {
	const file = `apps/${slug}/src/pages/index.astro`;
	let src = readFileSync(file, "utf8");

	if (src.includes("LocalSecciones") || existsSync(`apps/${slug}/src/data/secciones.json`)) {
		return { ok: false, motivo: "ya usa piezas" };
	}
	if (!/<h1[^>]*id="hero-title"/.test(src)) return { ok: false, motivo: "sin hero-title" };
	if (!/id="local"/.test(src)) return { ok: false, motivo: "sin local" };
	if (!/id="fotos"/.test(src)) return { ok: false, motivo: "sin fotos" };
	if (!/id="preguntas"/.test(src)) return { ok: false, motivo: "sin preguntas" };

	const heroTitulo = between(src, /<h1[^>]*id="hero-title"[^>]*>/, /<\/h1>/);
	const heroTexto = between(src, /<p class="hero-lede">/, /<\/p>/);
	const fotosTitulo = between(src, /<h2 class="title" id="fotos-title">/, /<\/h2>/);
	const fotosTexto = between(src, /<p class="lead">/, /<\/p>/);
	const visitaTitulo = between(src, /<h2 class="title" id="horario-title">/, /<\/h2>/);
	const visitaNota = between(src, /<p class="hours-note">/, /<\/p>/);
	const faqTitulo = between(src, /<h2 class="title" id="faq-title">/, /<\/h2>/);

	if (!heroTitulo || !fotosTitulo || !visitaTitulo || !faqTitulo) {
		return { ok: false, motivo: "no se han podido leer los títulos" };
	}

	const fotos = galeriaDe(src);
	if (fotos.length === 0) return { ok: false, motivo: "sin galería" };

	const preguntas = faqsDe(slug);

	const secciones: Pieza[] = [
		{
			id: "portada",
			tipo: "hero",
			visible: true,
			etiqueta: strip(between(src, /<p class="eyebrow">/, /<\/p>/) ?? ""),
			titulo: fraseo(heroTitulo),
			texto: heroTexto && literal(heroTexto) ? strip(heroTexto) : undefined,
			imagen: fotos[0],
			imagenAlt: "Fotografía publicada en la ficha de Google Maps del negocio",
			boton: { texto: "Cómo llegar", href: "maps:directions" },
			botonSecundario: { texto: "Ver la ficha en Google Maps", href: "maps:place", externo: true },
		},
		{
			id: "fotos",
			tipo: "galeria",
			visible: true,
			etiqueta: "Las fotos",
			titulo: fraseo(fotosTitulo),
			texto: fotosTexto && literal(fotosTexto) ? strip(fotosTexto) : undefined,
			fotos: fotos.slice(0, 12).map((nombre) => ({
				imagen: nombre,
				alt: "Fotografía publicada en la ficha de Google Maps del negocio",
			})),
		},
		{
			id: "horario",
			tipo: "visita",
			visible: true,
			etiqueta: "Horario y ubicación",
			titulo: fraseo(visitaTitulo),
			nota: visitaNota && literal(visitaNota) ? strip(visitaNota) : undefined,
		},
		...(preguntas.length
			? [
					{
						id: "preguntas",
						tipo: "faq",
						visible: true,
						etiqueta: "Preguntas frecuentes",
						titulo: fraseo(faqTitulo),
						preguntas,
					},
				]
			: []),
	];

	if (!APPLY) return { ok: true, piezas: secciones.length };

	// 1) JSON.
	const jsonFile = `apps/${slug}/src/data/secciones.json`;
	writeFileSync(jsonFile, `${JSON.stringify({ version: 1, secciones }, null, "\t")}\n`, "utf8");

	// 2) Enlazar el marcado existente con las piezas, sin cambiar clases ni estructura.
	src = src.replace(/<h1([^>]*id="hero-title"[^>]*)>[\s\S]*?<\/h1>/, "<h1$1 set:html={piezas.portada.titulo} />");
	if (heroTexto && literal(heroTexto)) {
		src = src.replace(/<p class="hero-lede">[\s\S]*?<\/p>/, '<p class="hero-lede">{piezas.portada.texto}</p>');
	}
	src = src.replace(
		/<h2([^>]*id="fotos-title"[^>]*)>[\s\S]*?<\/h2>/,
		"<h2$1 set:html={piezas.fotos.titulo} />",
	);
	if (fotosTexto && literal(fotosTexto)) {
		src = src.replace(/<p class="lead">[\s\S]*?<\/p>/, '<p class="lead">{piezas.fotos.texto}</p>');
	}
	src = src.replace(
		/<h2([^>]*id="horario-title"[^>]*)>[\s\S]*?<\/h2>/,
		"<h2$1 set:html={piezas.horario.titulo} />",
	);
	if (visitaNota && literal(visitaNota)) {
		src = src.replace(
			/<p class="hours-note">[\s\S]*?<\/p>/,
			'<p class="hours-note">{piezas.horario.nota}</p>',
		);
	}
	if (preguntas.length > 0) {
		src = src.replace(
			/<h2([^>]*id="faq-title"[^>]*)>[\s\S]*?<\/h2>/,
			"<h2$1 set:html={piezas.preguntas.titulo} />",
		);
	}

	// Galería: mismo bucle y mismo marcado, con los datos de la pieza.
	const fotosSection = /(<section[^>]*id="fotos"[\s\S]*?<\/section>)/.exec(src)?.[1];
	if (fotosSection) {
		const next = fotosSection
			.replace(/\{galeria\.map\(\(name\) => \(/, "{piezas.fotos.fotos.map((item) => (")
			.replace(/src=\{foto\(name\)\}/, "src={foto(item.imagen)}")
			.replace(/alt=\{altFoto\}/, "alt={item.alt}");
		src = src.replace(fotosSection, next);
	}

	// Preguntas: mismo <details>, datos de la pieza.
	const faqSection = /(<section[^>]*id="preguntas"[\s\S]*?<\/section>)/.exec(src)?.[1];
	if (faqSection && preguntas.length > 0) {
		const next = faqSection
			.replace(/\{faqs\.map\(\(faq\) => \(/, "{piezas.preguntas.preguntas.map((item) => (")
			.replace(/\{faq\.question\}/, "{item.pregunta}")
			.replace(/\{faq\.answer\}/, "{item.respuesta}");
		src = src.replace(faqSection, next);
	}

	// 3) Import y objeto de piezas al final del frontmatter.
	const extra = `\nimport secciones from '../data/secciones.json';\n\nconst piezas = Object.fromEntries(secciones.secciones.map((seccion) => [seccion.id, seccion])) as Record<string, any>;`;
	if (!src.includes("import secciones")) {
		src = src.replace(/\r?\n---\r?\n\r?\n<!doctype/, `${extra}\n---\n\n<!doctype`);
	}

	// Si el import no ha entrado o queda una pieza sin definir, no se guarda nada.
	if (!src.includes("import secciones")) {
		rmSync(jsonFile, { force: true });
		return { ok: false, motivo: "no se ha podido insertar el import" };
	}
	const ids = new Set(secciones.map((seccion) => seccion.id));
	for (const match of src.matchAll(/piezas\.([a-zA-Z0-9_]+)/g)) {
		if (!ids.has(match[1])) {
			rmSync(jsonFile, { force: true });
			return { ok: false, motivo: `pieza sin definir: ${match[1]}` };
		}
	}

	writeFileSync(file, src, "utf8");
	return { ok: true, piezas: secciones.length };
}

const razones = new Map<string, string[]>();
let ok = 0;
for (const slug of slugs) {
	if (ONLY && slug !== ONLY) continue;
	let result: { ok: boolean; motivo?: string };
	try {
		result = migrar(slug);
	} catch (error) {
		result = { ok: false, motivo: `error: ${String(error).slice(0, 80)}` };
	}
	if (result.ok) {
		ok += 1;
		console.log("ok", slug, result.piezas);
	} else {
		const list = razones.get(result.motivo ?? "?") ?? [];
		list.push(slug);
		razones.set(result.motivo ?? "?", list);
	}
}

console.log(`\n${APPLY ? "migradas" : "convertibles"}: ${ok}`);
for (const [motivo, list] of [...razones.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 10)) {
	console.log(String(list.length).padStart(4), motivo, "→", list.slice(0, 3).join(", "));
}
