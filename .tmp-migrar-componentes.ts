/**
 * Cierra las portadas de componentes enlazando su titular a una pieza.
 * No toca clases, estructura ni CSS.
 *
 * Uso: bun .tmp-migrar-componentes.ts [--apply]
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const APPLY = process.argv.includes("--apply");
const ROOT = process.cwd();

const apps = readdirSync("apps", { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((slug) => existsSync(`apps/${slug}/src/pages/index.astro`))
	.filter((slug) => !existsSync(`apps/${slug}/src/data/secciones.json`));

const literalName = (src: string): string | null => {
	const direct = /const\s+name\s*=\s*['"`]([^'"`]+)['"`]/.exec(src)?.[1];
	if (direct) return direct;
	const objectStart = src.search(/(?:export\s+)?const\s+(?:BUSINESS|business|NEGOCIO)\s*=\s*\{/);
	if (objectStart >= 0) {
		const name = /\bname\s*:\s*['"`]([^'"`]+)['"`]/.exec(src.slice(objectStart, objectStart + 3000))?.[1];
		if (name) return name;
	}
	return null;
};

const plain = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const titleFromInner = (inner: string, src: string, siteSrc: string): string | null => {
	const value = inner.trim();
	if (!value) return null;
	if (!value.includes("{")) return value;
	const expression = /^\{([\w.]+)\}$/.exec(value);
	if (!expression) return null;
	if (expression[1].split(".").pop() !== "name") return null;
	return literalName(src) ?? literalName(siteSrc);
};

const addPieces = (src: string): string => {
	const extra = `import secciones from '../data/secciones.json';\n\nconst piezas = Object.fromEntries(secciones.secciones.map((seccion) => [seccion.id, seccion])) as Record<string, any>;\n`;
	const delimiters = [...src.matchAll(/^---\s*$/gm)];
	if (delimiters.length >= 2) {
		const end = delimiters[1];
		return `${src.slice(0, end.index)}${extra}${src.slice(end.index)}`;
	}
	if (delimiters.length === 1) {
		return `---\n${extra}${src.slice(delimiters[0].index)}`;
	}
	return null as unknown as string;
};

type Result = { ok: boolean; motivo: string; slug?: string };

for (const slug of apps) {
	const pageFile = `apps/${slug}/src/pages/index.astro`;
	let page = readFileSync(pageFile, "utf8");
	if (page.includes("piezas.portada")) continue;

	const siteFile = `apps/${slug}/src/data/site.ts`;
	const site = existsSync(siteFile) ? readFileSync(siteFile, "utf8") : "";
	let targetFile = pageFile;
	let target = page;
	let titulo: string | null = null;
	let kind = "";

	// 1) LocalHero con title estático.
	const heroTag = /<LocalHero\b[\s\S]*?\n[ \t]*\/>/.exec(page)?.[0];
	if (heroTag) {
		const match = /\btitle=(?:"([^"]*)"|\{`([^`]*)`\}|\{'([^']*)'\})/.exec(heroTag);
		const value = match?.[1] ?? match?.[2] ?? match?.[3];
		if (value && !value.includes("${")) {
			titulo = value;
			target = page.replace(heroTag, heroTag.replace(match![0], "title={piezas.portada.titulo}"));
			kind = "local-hero";
		}
	}

	// 2) h1 directo en la portada.
	if (!titulo) {
		const h1 = /<h1([^>]*)>([\s\S]*?)<\/h1>/i.exec(page);
		if (h1) {
			const value = titleFromInner(h1[2], page, site);
			if (value) {
				titulo = value;
				target = page.replace(h1[0], `<h1${h1[1]} set:html={piezas.portada.titulo} />`);
				kind = "h1";
			}
		}
	}

	// 3) h1 dentro de un componente local (Hero, Header, Landing…).
	if (!titulo) {
		const imports = [...page.matchAll(/import\s+(\w+)\s+from\s+['"](\.[^'"]+\.astro)['"]/g)];
		const priority = (name: string) => (/Hero|Header|Landing|Topbar/i.test(name) ? 0 : 1);
		imports.sort((a, b) => priority(a[1]) - priority(b[1]));
		for (const item of imports) {
			const file = resolve(ROOT, dirname(pageFile), item[2]);
			if (!existsSync(file)) continue;
			const component = readFileSync(file, "utf8");
			const h1 = /<h1([^>]*)>([\s\S]*?)<\/h1>/i.exec(component);
			if (!h1) continue;
			const value = titleFromInner(h1[2], component, site);
			if (!value) continue;
			titulo = value;
			targetFile = file;
			target = component.replace(h1[0], `<h1${h1[1]} set:html={piezas.portada.titulo} />`);
			kind = "componente";
			break;
		}
	}

	// 4) Landing con titleLines: reconstruye el titular desde content.ts.
	if (!titulo) {
		const landing = resolve(ROOT, "apps", slug, "src/components/Landing.astro");
		if (existsSync(landing)) {
			const component = readFileSync(landing, "utf8");
			const h1 = /<h1([^>]*)>([\s\S]*?)<\/h1>/i.exec(component);
			const contentFile = resolve(ROOT, "apps", slug, "src/lib/content.ts");
			if (h1 && h1[2].includes("titleLines") && existsSync(contentFile)) {
				const content = readFileSync(contentFile, "utf8");
				const block = /titleLines\s*:\s*\[([\s\S]*?)\]/.exec(content)?.[1];
				const lines = block ? [...block.matchAll(/['"`]([^'"`]+)['"`]/g)].map((m) => m[1]) : [];
				if (lines.length >= 3) {
					titulo = `${lines[0]}<br /><em>${lines[1]}</em><br />${lines[2]}`;
					targetFile = landing;
					target = component.replace(h1[0], `<h1${h1[1]} set:html={piezas.portada.titulo} />`);
					kind = "landing";
				}
			}
		}
	}

	if (!titulo) {
		console.log("skip", slug, "sin titular enlazable");
		continue;
	}

	if (!APPLY) {
		console.log("ok", slug, kind, "→", plain(titulo).slice(0, 60));
		continue;
	}

	const withImport = addPieces(target);
	if (!withImport || !withImport.includes("piezas.portada.titulo")) {
		console.log("skip", slug, "no se pudo insertar el import");
		continue;
	}

	mkdirSync(`apps/${slug}/src/data`, { recursive: true });
	writeFileSync(
		`apps/${slug}/src/data/secciones.json`,
		`${JSON.stringify({ version: 1, secciones: [{ id: "portada", tipo: "texto", visible: true, etiqueta: "", titulo, parrafos: [plain(titulo)] }] }, null, "\t")}\n`,
		"utf8",
	);
	writeFileSync(targetFile, withImport, "utf8");
	console.log("ok", slug, kind);
}
