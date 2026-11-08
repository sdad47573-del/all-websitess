/**
 * Migración puntual: mueve el código de una web de `apps/` dentro de
 * sur-digital y borra el proyecto que la alojaba.
 *
 * - `apps/<slug>/src/**` pasa a `src/apps/<slug>/**` (misma estructura, así que
 *   las importaciones relativas de cada página siguen funcionando).
 * - `apps/<slug>/public/**` pasa a `public/<slug>/**`, que es la URL pública
 *   que usan sus enlaces (`/<slug>/favicon.svg`, `/<slug>/og.jpg`).
 * - Los enlaces y assets que apuntaban a la raíz de la app se prefijan con su
 *   slug, y el dominio de la app pasa a ser `https://www.sur-digital.com/<slug>`
 *   (canonical, `og:url` y JSON-LD salen de ahí).
 * - Se borran `package.json`, `astro.config.*`, `tsconfig.json`, `vercel.json`,
 *   `node_modules`, `dist` y la propia carpeta: la web ya no es un proyecto.
 *
 * Uso (desde apps/_sur-digital):
 *   node tools/migrate-apps.mjs asador-3-delicias el-cielo
 *   node tools/migrate-apps.mjs --todas
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://www.sur-digital.com";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(HERE, "..");
const APPS_DIR = path.resolve(APP_DIR, "..");
const DEST = path.join(APP_DIR, "src/apps");
const PUBLIC = path.join(APP_DIR, "public");

const SCAFFOLDING = [
	"package.json",
	"astro.config.mjs",
	"astro.config.ts",
	"astro.config.js",
	"tsconfig.json",
	"vercel.json",
	".gitignore",
	"bun.lock",
	"bun.lockb",
	"README.md",
];

/** Ficheros de texto del árbol de una app, para reescribir sus rutas. */
const textFiles = (dir) =>
	fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) return textFiles(file);
		return /\.(astro|ts|js|mjs|json|css|md|txt|xml)$/.test(entry.name) ? [file] : [];
	});

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Prefija con el slug los enlaces y assets que apuntaban a la raíz del dominio
 * de la app. Deja intactos los `//dominio` (protocolo relativo) y el enlace al
 * sitemap, que pasa a ser el del sitio.
 */
const rewrite = (text, slug, origin) => {
	const base = `${SITE}/${slug}`;
	let out = text;

	if (origin) out = out.split(origin).join(base);
	out = out.replace(new RegExp(`https?://${escape(slug)}\\.(?:vercel|netlify)\\.app`, "g"), base);
	out = out.replace(/(\b(?:href|src|action|poster)=["'])\/(?!\/)/g, `$1/${slug}/`);
	out = out.split(`/${slug}/sitemap-index.xml`).join("/sitemap-index.xml");

	return out;
};

const migrate = (slug) => {
	const project = path.join(APPS_DIR, slug);
	const source = path.join(project, "src");

	if (fs.existsSync(path.join(DEST, slug))) return "ya migrada";
	if (!fs.existsSync(path.join(source, "pages/index.astro"))) return "sin portada";

	const config = ["astro.config.mjs", "astro.config.ts", "astro.config.js"]
		.map((name) => path.join(project, name))
		.find((file) => fs.existsSync(file));
	const origin = config
		? (fs.readFileSync(config, "utf8").match(/site:\s*['"]([^'"]+)['"]/)?.[1] ?? "").replace(/\/+$/, "")
		: "";

	fs.mkdirSync(DEST, { recursive: true });
	fs.renameSync(source, path.join(DEST, slug));

	const publicSource = path.join(project, "public");
	if (fs.existsSync(publicSource)) {
		const publicTarget = path.join(PUBLIC, slug);
		fs.mkdirSync(publicTarget, { recursive: true });
		for (const entry of fs.readdirSync(publicSource)) {
			fs.renameSync(path.join(publicSource, entry), path.join(publicTarget, entry));
		}
		fs.rmSync(publicSource, { recursive: true, force: true });
	}

	let touched = 0;
	for (const file of textFiles(path.join(DEST, slug))) {
		const before = fs.readFileSync(file, "utf8");
		const after = rewrite(before, slug, origin);
		if (after === before) continue;
		fs.writeFileSync(file, after);
		touched += 1;
	}

	for (const name of ["node_modules", "dist", ".vercel", ".astro"]) {
		fs.rmSync(path.join(project, name), { recursive: true, force: true });
	}
	for (const name of SCAFFOLDING) fs.rmSync(path.join(project, name), { force: true });
	fs.rmSync(project, { recursive: true, force: true });

	return `ok (${touched} ficheros reescritos)`;
};

const args = process.argv.slice(2);
const slugs = args.includes("--todas")
	? fs.readdirSync(APPS_DIR).filter((name) => !name.startsWith("_"))
	: args;

if (slugs.length === 0) {
	console.error("Uso: node tools/migrate-apps.mjs <slug...> | --todas");
	process.exit(1);
}

const summary = {};
for (const slug of slugs) {
	if (!fs.existsSync(path.join(APPS_DIR, slug))) continue;
	const result = migrate(slug);
	summary[result] = (summary[result] ?? 0) + 1;
	if (result !== "ok" && !result.startsWith("ok ")) console.log(`· ${slug}: ${result}`);
}

console.log("\nResumen:");
for (const [result, count] of Object.entries(summary)) console.log(`  ${count} — ${result}`);
