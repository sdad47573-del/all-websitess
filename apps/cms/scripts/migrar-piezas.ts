/**
 * Codemod de portadas a piezas.
 *
 * Para cada `apps/<slug>/src/pages/index.astro`:
 *  1. convierte el `<main>` en un módulo temporal evaluable (las props se
 *     evalúan con Bun, así valen literales, plantillas y constantes de data),
 *  2. escribe `src/data/secciones.json` con los datos de las piezas,
 *  3. cambia el `<main>` por `<LocalSecciones … />` y añade los imports.
 *
 * Uso: bun apps/cms/scripts/migrar-piezas.ts [--apply] [--only a,b] [--limit 5]
 */
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = "apps";
const APPLY = process.argv.includes("--apply");
const ONLY = (() => {
	const index = process.argv.indexOf("--only");
	return index > 0 ? new Set(process.argv[index + 1].split(",")) : null;
})();
const LIMIT = (() => {
	const index = process.argv.indexOf("--limit");
	return index > 0 ? Number(process.argv[index + 1]) : Infinity;
})();

const TIPOS: Record<string, string> = {
	LocalHero: "hero",
	LocalAbout: "about",
	LocalChips: "chips",
	LocalMenu: "menu",
	LocalGallery: "galeria",
	LocalVisit: "visita",
	LocalFaq: "faq",
};

type Attr = { name: string; value: string };
type Pieza = Record<string, unknown>;
type Entorno = {
	negocio: Record<string, any>;
	horario: Record<string, any>;
	mapas: Record<string, any>;
};

const IMAGE = /\.(?:jpe?g|png|webp|avif|svg)$/i;

/** Corta la lista de atributos de una etiqueta, con llaves y comillas anidadas. */
function attrsOf(body: string): Attr[] {
	const attrs: Attr[] = [];
	let i = 0;
	while (i < body.length) {
		while (i < body.length && /\s/.test(body[i])) i++;
		if (i >= body.length) break;
		const start = i;
		while (i < body.length && /[A-Za-z0-9_:-]/.test(body[i])) i++;
		const name = body.slice(start, i);
		if (!name) {
			i++;
			continue;
		}
		while (i < body.length && /\s/.test(body[i])) i++;
		if (body[i] !== "=") {
			attrs.push({ name, value: "true" });
			continue;
		}
		i++;
		while (i < body.length && /\s/.test(body[i])) i++;
		const quote = body[i];
		if (quote === '"' || quote === "'") {
			i++;
			const valueStart = i;
			while (i < body.length && body[i] !== quote) i++;
			attrs.push({ name, value: JSON.stringify(body.slice(valueStart, i)) });
			i++;
			continue;
		}
		if (body[i] === "{") {
			const valueStart = i + 1;
			let depth = 1;
			let quote2 = "";
			i++;
			while (i < body.length && depth > 0) {
				const char = body[i];
				if (quote2) {
					if (char === "\\") i++;
					else if (char === quote2) quote2 = "";
				} else if (char === '"' || char === "'" || char === "`") quote2 = char;
				else if (char === "{") depth++;
				else if (char === "}") depth--;
				i++;
			}
			attrs.push({ name, value: body.slice(valueStart, depth === 0 ? i - 1 : i) });
			continue;
		}
		i++;
	}
	return attrs;
}

/** Etiquetas de componente dentro del `<main>`, en orden. */
function piezasDelMain(main: string): Array<{ tag: string; attrs: Attr[] }> {
	const found: Array<{ tag: string; attrs: Attr[] }> = [];
	let i = 0;
	while ((i = main.indexOf("<", i)) >= 0) {
		const match = /^<([A-Z][A-Za-z0-9]*)/.exec(main.slice(i));
		if (!match) {
			i++;
			continue;
		}
		const tag = match[1];
		let cursor = i + match[0].length;
		let quote = "";
		let end = -1;
		while (cursor < main.length - 1) {
			const char = main[cursor];
			if (quote) {
				if (char === "\\") cursor++;
				else if (char === quote) quote = "";
			} else if (char === '"' || char === "'" || char === "`") quote = char;
			else if (char === "/" && main[cursor + 1] === ">") {
				end = cursor;
				break;
			}
			cursor++;
		}
		if (end < 0) break;
		found.push({ tag, attrs: attrsOf(main.slice(i + match[0].length, end)) });
		i = end + 2;
	}
	return found;
}

const toLink = (value: any) =>
	value && typeof value === "object"
		? {
				texto: String(value.label ?? value.texto ?? ""),
				href: String(value.href ?? ""),
				externo: value.external === true || value.externo === true || undefined,
			}
		: undefined;

const toText = (value: unknown) => (typeof value === "string" ? value : undefined);

function seccionDe(tipo: string, p: Record<string, any>, foto: string | undefined): Pieza | null {
	const base: Pieza = { tipo, visible: true, titulo: toText(p.title) ?? toText(p.titulo) ?? "" };
	switch (tipo) {
		case "hero":
			return {
				...base,
				id: "portada",
				etiqueta: toText(p.eyebrow),
				titulo: toText(p.title) ?? "",
				texto: toText(p.lede),
				imagen: foto,
				imagenAlt: toText(p.imageAlt),
				boton: toLink(p.primaryCta),
				botonSecundario: toLink(p.secondaryCta),
				datos: Array.isArray(p.facts)
					? p.facts.map((fact: any) => ({ etiqueta: String(fact.label ?? ""), html: String(fact.html ?? "") }))
					: undefined,
				enlaceGaleria: p.galleryLinkLabel
					? { texto: String(p.galleryLinkLabel), href: String(p.galleryHref ?? ""), externo: true }
					: undefined,
				pieFoto: toText(p.photoCredit),
				distintivo: toText(p.tag),
			};
		case "about":
			return {
				...base,
				id: "casa",
				etiqueta: toText(p.label),
				titulo: toText(p.title) ?? "",
				parrafos: Array.isArray(p.paragraphs) ? p.paragraphs.map(String) : [],
				nota: toText(p.note),
				enlaces: Array.isArray(p.links) ? p.links.map(toLink).filter(Boolean) : undefined,
			};
		case "chips":
			return {
				...base,
				id: "senas",
				etiqueta: toText(p.label),
				titulo: toText(p.label) ?? "Señas",
				chips: Array.isArray(p.items) ? p.items.map(String).slice(0, 24) : [],
			};
		case "menu":
			return {
				...base,
				id: "carta",
				etiqueta: toText(p.eyebrow),
				titulo: toText(p.title) ?? "",
				texto: toText(p.description),
				boton: toLink(p.cta),
				nota: toText(p.note),
				grupos: Array.isArray(p.groups)
					? p.groups.map((group: any) => ({
							titulo: String(group.title ?? ""),
							items: (group.items ?? []).map((dish: any) => ({
								nombre: String(dish.name ?? ""),
								nota: String(dish.note ?? ""),
								precio: dish.price ? String(dish.price) : undefined,
							})),
						}))
					: [],
			};
		case "galeria":
			return {
				...base,
				id: "galeria",
				etiqueta: toText(p.eyebrow),
				titulo: toText(p.title) ?? "",
				texto: toText(p.description),
				fotos: Array.isArray(p.images)
					? p.images.map((image: any) => ({ imagen: String(image.src ?? ""), alt: String(image.alt ?? "") }))
					: [],
				boton: toLink(p.cta),
				nota: toText(p.note),
			};
		case "visita":
			return {
				...base,
				id: "visitanos",
				etiqueta: toText(p.eyebrow),
				titulo: toText(p.title) ?? "",
				notaHorario: toText(p.hoursNote),
				nota: toText(p.reserveNote),
				mapaEtiqueta: toText(p.mapLabel),
				enlaces: Array.isArray(p.links)
					? p.links.map(toLink).filter(Boolean)
					: undefined,
			};
		case "faq":
			return {
				...base,
				id: "preguntas",
				etiqueta: toText(p.eyebrow),
				titulo: toText(p.title) ?? "Preguntas frecuentes",
				preguntas: Array.isArray(p.items)
					? p.items.map((item: any) => ({ pregunta: String(item.q ?? ""), respuesta: String(item.a ?? "") }))
					: [],
			};
		default:
			return null;
	}
}

async function migrar(slug: string): Promise<{ ok: boolean; motivo?: string; piezas?: number }> {
	const dir = join(ROOT, slug);
	const file = join(dir, "src/pages/index.astro");
	const source = readFileSync(file, "utf8");
	const mainStart = source.indexOf("<main");
	const mainEnd = source.indexOf("</main>");
	if (mainStart < 0 || mainEnd < 0) return { ok: false, motivo: "sin <main>" };

	const main = source.slice(source.indexOf(">", mainStart) + 1, mainEnd);
	const tags = piezasDelMain(main);
	if (!tags.length) return { ok: false, motivo: "sin componentes" };
	for (const item of tags) {
		if (!TIPOS[item.tag]) return { ok: false, motivo: `usa <${item.tag}>` };
	}

	const front = source.slice(source.indexOf("---") + 3, source.indexOf("---", 3));
	const images = new Map<string, string>();
	const limpio = front
		.replace(/^import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:jpe?g|png|webp|avif|svg))['"];?/gm, (_m, name, path) => {
			const photo = basename(path);
			images.set(name, photo);
			return `const ${name} = ${JSON.stringify(photo)};`;
		})
		.replace(/^import\s+(?:type\s+)?[^;]*from\s+['"][^'"]*\.(?:css|astro)['"];?/gm, "")
		.replace(/^import\s+['"][^'"]*\.css['"];?/gm, "")
		.replace(/^import\s+(?:type\s+)?[^;]*from\s+['"]astro:[^'"]*['"];?/gm, "")
		.replace(/^import\s+(?:type\s+)?[^;]*from\s+['"]@astro-components['"];?/gm, "");

	const entries = tags.map((item) => {
		const tipo = TIPOS[item.tag];
		const props = item.attrs
			.map((attr) => `${JSON.stringify(attr.name)}: (${attr.value})`)
			.join(", ");
		return `${JSON.stringify(tipo)}: { ${props} }`;
	});

	const temp = join(dir, "src/pages/.migrar-piezas.tmp.ts");
	const sondeo = `
const __definido = (values: Record<string, unknown>) =>
	Object.fromEntries(Object.entries(values).filter(([, valor]) => valor !== undefined));
export const entorno = {
	negocio: __definido({
		BUSINESS: typeof BUSINESS !== "undefined" ? BUSINESS : undefined,
		business: typeof business !== "undefined" ? business : undefined,
		NEGOCIO: typeof NEGOCIO !== "undefined" ? NEGOCIO : undefined,
	}),
	horario: __definido({
		HOURS: typeof HOURS !== "undefined" ? HOURS : undefined,
		HORARIO: typeof HORARIO !== "undefined" ? HORARIO : undefined,
		hours: typeof hours !== "undefined" ? hours : undefined,
		horario: typeof horario !== "undefined" ? horario : undefined,
	}),
	mapas: __definido({
		MAPS: typeof MAPS !== "undefined" ? MAPS : undefined,
		maps: typeof maps !== "undefined" ? maps : undefined,
		mapas: typeof mapas !== "undefined" ? mapas : undefined,
	}),
};
`;
	writeFileSync(
		temp,
		`${limpio}\nexport const piezas = { ${entries.join(",\n")} };\n${sondeo}`,
		"utf8",
	);
	let evaluated: Record<string, any>;
	let entorno: Entorno;
	try {
		const mod = (await import(`${pathToFileURL(temp).href}?v=${Date.now()}`)) as {
			piezas: Record<string, any>;
			entorno: Entorno;
		};
		evaluated = mod.piezas;
		entorno = mod.entorno;
	} catch (error) {
		rmSync(temp, { force: true });
		return {
			ok: false,
			motivo: `props no evaluables (${String((error as Error)?.stack ?? error).slice(0, 400)})`,
		};
	}
	rmSync(temp, { force: true });

	const usadas = new Set<string>();
	const fotosDe: Record<string, string> = {};
	const secciones: Pieza[] = [];
	for (const item of tags) {
		const tipo = TIPOS[item.tag];
		const props = evaluated[tipo] ?? {};
		let foto: string | undefined;
		if (tipo === "hero") {
			foto = typeof props.image === "string" ? props.image : undefined;
			if (foto) {
				usadas.add(foto);
				for (const [name, photo] of images) if (photo === foto) fotosDe[photo] = name;
			}
		}
		const seccion = seccionDe(tipo, props, foto);
		if (!seccion) return { ok: false, motivo: `tipo ${tipo} no soportado` };
		secciones.push(seccion);
	}
	for (const seccion of secciones) {
		for (const foto of (seccion.fotos as any[] | undefined) ?? []) {
			const name = String(foto.imagen ?? "");
			usadas.add(name);
			for (const [variable, photo] of images) if (photo === name) fotosDe[photo] = variable;
		}
	}
	const faltan = [...usadas].filter((name) => !fotosDe[name]);
	if (faltan.length) return { ok: false, motivo: `foto sin import: ${faltan[0]}` };

	// La página puede tener ya sus propios `fotos` o `piezas`: se evita pisarlos.
	const ocupado = (name: string) =>
		new RegExp(`\\b(?:const|let|var|function|class)\\s+${name}\\b|\\b${name}\\s*=`).test(source);
	const libre = (base: string) => {
		let name = base;
		while (ocupado(name)) name = `${name}Pieza`;
		return name;
	};

	const esObjeto = (value: unknown): value is Record<string, any> =>
		!!value && typeof value === "object";
	const negocio = Object.entries(entorno.negocio).find(
		([, value]) => esObjeto(value) && "name" in value && "street" in value && "city" in value,
	);
	if (!negocio) return { ok: false, motivo: "sin datos de negocio" };
	const horario = Object.entries(entorno.horario).find(
		([, value]) => Array.isArray(value) && value.length > 0,
	);
	const mapas = Object.entries(entorno.mapas).find(([, value]) => esObjeto(value));

	// Las webs sin módulo de datos traen horario y mapa en las props de la visita.
	const visita = tags.find((item) => item.tag === "LocalVisit");
	const prop = (name: string) => visita?.attrs.find((attr) => attr.name === name)?.value;
	let horarioRef = horario?.[0];
	let mapasRef = mapas?.[0];
	let extra = "";
	if (!horarioRef && prop("hours")) {
		horarioRef = libre("horas");
		extra += `\nconst ${horarioRef} = ${prop("hours")};`;
	}
	if (!mapasRef && prop("mapHref")) {
		const href = prop("mapHref")!;
		mapasRef = libre("mapasPagina");
		extra += `\nconst ${mapasRef} = {\n\tplace: ${href},\n\tdirections: ${href},\n\tstreetView: ${href},\n\tembed: ${prop("mapEmbedUrl") ?? "''"},\n};`;
	}
	if (!horarioRef || !mapasRef) {
		return { ok: false, motivo: `sin ${!horarioRef ? "horario" : "mapa"}` };
	}

	if (!APPLY) return { ok: true, piezas: secciones.length };

	// 1) JSON validado por el CMS.
	const { saveSections } = await import("../lib/sections.ts");
	const media = new Set([...images.values()]);
	void media;
	saveSections(slug, { version: 1, secciones }, ROOT);

	// 2) Página con LocalSecciones.
	const fotos = Object.entries(fotosDe)
		.map(([photo, variable]) => `\t${JSON.stringify(photo)}: ${variable},`)
		.join("\n");
	const piezasVar = libre("piezas");
	const fotosVar = libre("fotos");
	const consts = `\nimport secciones from '../data/secciones.json';\n\nconst ${piezasVar} = secciones.secciones;\nconst ${fotosVar} = {\n${fotos}\n};\n${extra}`;
	let next = source.replace(
		/import \{\n?\t?([^}]*)\} from ['"]@astro-components['"];/,
		(_m, names: string) => {
			const list = names
				.split(",")
				.map((name) => name.trim())
				.filter(Boolean);
			if (!list.includes("LocalSecciones")) list.push("LocalSecciones");
			return `import {\n${list.map((name) => `\t${name},`).join("\n")}\n} from '@astro-components';`;
		},
	);
	if (!next.includes("LocalSecciones")) {
		rmSync(join(dir, "src/data/secciones.json"), { force: true });
		return { ok: false, motivo: "import de @astro-components no reconocido" };
	}

	const frontEnd = next.indexOf("---", 3);
	next = `${next.slice(0, frontEnd)}${consts}${next.slice(frontEnd)}`;

	next = next.replace(
		/(<main[^>]*>)[\s\S]*?(<\/main>)/,
		`$1\n\t\t\t<LocalSecciones\n\t\t\t\tsecciones={${piezasVar}}\n\t\t\t\tfotos={${fotosVar}}\n\t\t\t\tnegocio={{\n\t\t\t\t\tname: ${negocio![0]}.name,\n\t\t\t\t\tstreet: ${negocio![0]}.street,\n\t\t\t\t\tdistrict: ${negocio![0]}.district ?? '',\n\t\t\t\t\tpostalCode: ${negocio![0]}.postalCode,\n\t\t\t\t\tcity: ${negocio![0]}.city,\n\t\t\t\t}}\n\t\t\t\t				horario={${horarioRef}}\n\t\t\t\t				mapas={${mapasRef}}\n\t\t\t/>\n\t\t$2`,
	);
	writeFileSync(file, next, "utf8");
	return { ok: true, piezas: secciones.length };
}

const apps = readdirSync(ROOT).filter((name) => name !== "cms" && (!ONLY || ONLY.has(name)));
const razones = new Map<string, number>();
let ok = 0;
let done = 0;
for (const slug of apps) {
	let result: { ok: boolean; motivo?: string };
	try {
		result = await migrar(slug);
	} catch (error) {
		result = { ok: false, motivo: `error: ${String(error).slice(0, 70)}` };
	}
	if (result.ok) {
		ok++;
		if (result.motivo) console.log("aviso", slug, result.motivo);
		done++;
	} else if (result.motivo !== "props no evaluables" || true) {
		razones.set(result.motivo ?? "?", (razones.get(result.motivo ?? "?") ?? 0) + 1);
	}
	if (done >= LIMIT) break;
}

console.log(`\n${APPLY ? "migradas" : "convertibles"}: ${ok}`);
for (const [motivo, count] of [...razones.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)) {
	console.log(String(count).padStart(4), motivo);
}
