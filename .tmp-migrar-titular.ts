/**
 * Última pasada: toda portada con <h1> recibe una pieza para el titular.
 * No cambia clases, estructura ni CSS.
 *
 * Uso: bun .tmp-migrar-titular.ts [--apply] [--only slug]
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const APPLY = process.argv.includes("--apply");
const ONLY = (() => {
	const i = process.argv.indexOf("--only");
	return i > 0 ? process.argv[i + 1] : null;
})();

const slugs = readFileSync(".tmp-sin-secciones.txt", "utf8").trim().split(/\r?\n/).filter(Boolean);
const IMAGE = /\.(?:jpe?g|png|webp|avif|gif|svg)$/i;

const literalName = (src: string): string | null => {
	const direct = /const\s+name\s*=\s*['"`]([^'"`]+)['"`]/.exec(src)?.[1];
	if (direct) return direct;
	const business = /export\s+const\s+(?:BUSINESS|business|NEGOCIO)\s*=\s*\{([\s\S]*?)\n\};/.exec(src)?.[1];
	if (!business) return null;
	return /\bname\s*:\s*['"`]([^'"`]+)['"`]/.exec(business)?.[1] ?? null;
};

function migrar(slug: string): { ok: boolean; motivo?: string } {
	const pageFile = `apps/${slug}/src/pages/index.astro`;
	if (!existsSync(pageFile)) return { ok: false, motivo: "sin portada" };
	if (existsSync(`apps/${slug}/src/data/secciones.json`)) return { ok: false, motivo: "ya migrada" };

	const src = readFileSync(pageFile, "utf8");
	if (src.includes("LocalSecciones")) return { ok: false, motivo: "ya usa piezas" };
	if (!/<main\b/i.test(src)) return { ok: false, motivo: "sin main" };

	const h1 = /<h1([^>]*)>([\s\S]*?)<\/h1>/i.exec(src);
	if (!h1) return { ok: false, motivo: "sin h1" };

	let titulo = h1[2].trim();
	if (titulo.includes("{")) {
		const expr = /^\{([\w.]+)\}$/.exec(titulo);
		if (!expr) return { ok: false, motivo: "h1 con expresión compuesta" };
		const site = existsSync(`apps/${slug}/src/data/site.ts`)
			? readFileSync(`apps/${slug}/src/data/site.ts`, "utf8")
			: "";
		const name = literalName(src) ?? literalName(site);
		if (!name) return { ok: false, motivo: "no se puede resolver el h1" };
		titulo = name;
	}
	if (!titulo) return { ok: false, motivo: "h1 vacío" };

	const fotosDir = `apps/${slug}/src/assets/fotos`;
	const fotos = existsSync(fotosDir)
		? readdirSync(fotosDir).filter((name) => IMAGE.test(name)).sort()
		: [];

	const descripcion = /<meta\s+name="description"\s+content="([^"]+)"/i.exec(src)?.[1] ?? "";
	const piezas = fotos.length
		? [
				{
					id: "portada",
					tipo: "hero",
					visible: true,
					etiqueta: "",
					titulo,
					imagen: fotos[0],
					imagenAlt: `Fotografía de ${titulo.replace(/<[^>]+>/g, " ").trim()}`,
				},
			]
		: [
				{
					id: "portada",
					tipo: "texto",
					visible: true,
					etiqueta: "",
					titulo,
					parrafos: [descripcion || titulo.replace(/<[^>]+>/g, " ").trim()],
				},
			];

	if (!APPLY) return { ok: true };

	const jsonFile = `apps/${slug}/src/data/secciones.json`;
	mkdirSync(`apps/${slug}/src/data`, { recursive: true });
	writeFileSync(jsonFile, `${JSON.stringify({ version: 1, secciones: piezas }, null, "\t")}\n`, "utf8");

	let next = src.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, "<h1$1 set:html={piezas.portada.titulo} />");

	const extra = `import secciones from '../data/secciones.json';\n\nconst piezas = Object.fromEntries(secciones.secciones.map((seccion) => [seccion.id, seccion])) as Record<string, any>;\n`;
	const openings = [...next.matchAll(/^---\s*$/gm)];
	if (openings.length >= 2) {
		const end = openings[1];
		next = `${next.slice(0, end.index)}${extra}${next.slice(end.index)}`;
	} else if (openings.length === 1) {
		const end = openings[0];
		next = `---\n${extra}${next.slice(0, end.index)}${next.slice(end.index)}`;
	} else {
		return { ok: false, motivo: "sin frontmatter reconocible" };
	}

	if (!next.includes("piezas.portada.titulo")) {
		rmSync(jsonFile, { force: true });
		return { ok: false, motivo: "no se ha podido enlazar el h1" };
	}

	writeFileSync(pageFile, next, "utf8");
	return { ok: true };
}

const razones = new Map<string, string[]>();
let ok = 0;
for (const slug of slugs) {
	if (ONLY && slug !== ONLY) continue;
	let result: { ok: boolean; motivo?: string };
	try {
		result = migrar(slug);
	} catch (error) {
		result = { ok: false, motivo: `error: ${String(error).slice(0, 60)}` };
	}
	if (result.ok) {
		ok += 1;
		console.log("ok", slug);
	} else {
		const list = razones.get(result.motivo ?? "?") ?? [];
		list.push(slug);
		razones.set(result.motivo ?? "?", list);
	}
}
console.log(`\n${APPLY ? "migradas" : "convertibles"}: ${ok}`);
for (const [motivo, list] of [...razones.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 12)) {
	console.log(String(list.length).padStart(4), motivo, "→", list.slice(0, 3).join(", "));
}
