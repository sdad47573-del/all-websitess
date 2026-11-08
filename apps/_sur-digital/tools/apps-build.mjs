/**
 * Construye las webs de `apps/` y las deja dentro de sur-digital, cada una en
 * `/<slug>/`, para servirlas desde el propio sitio (por ejemplo
 * `/asador-3-delicias/`).
 *
 * ## Qué hace
 *
 * 1. Toma las apps empaquetables de `tools/apps-list.mjs` (la misma lista que
 *    anuncia el sitemap) y las compila con turbo, en tandas, respetando el
 *    `dependsOn: ["^build"]` de `turbo.json` para que los paquetes compartidos
 *    se construyan antes. Una app que falle no tumba al resto: se avisa y se
 *    copia lo que exista.
 * 2. Copia cada `apps/<app>/dist` al directorio de salida del sitio y reescribe
 *    sus rutas absolutas con la misma lógica que el proxy y el proyecto único
 *    (`scripts/vercel-single-project/rewrite.mjs`): canonical, `og:url`, JSON-LD,
 *    enlaces internos y assets pasan a la URL pública de la app.
 *
 * ## Variables de entorno
 *
 * - `APPS`: lista separada por comas para construir solo esas apps
 *   (`APPS=asador-3-delicias,el-cielo`). Sin ella se construyen todas.
 * - `BUILD_CONCURRENCY`: builds de turbo en paralelo. Por defecto 4.
 *
 * Uso:
 *   bun run build                     # astro build + este script
 *   APPS=asador-3-delicias bun run apps:build
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rewriteFile } from "../../../scripts/vercel-single-project/rewrite.mjs";
import { collectApps, selectApps } from "./apps-list.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(HERE, "..");
const REPO = path.resolve(APP_DIR, "../..");
const BATCH_SIZE = 40;
const concurrency = process.env.BUILD_CONCURRENCY || "4";

/** Dominio con el que se publican las webs: el mismo `SITE` del astro.config. */
const SITE = (() => {
	const config = fs.readFileSync(path.join(APP_DIR, "astro.config.mjs"), "utf8");
	return config.match(/const SITE = ['"]([^'"]+)['"]/)?.[1] ?? "https://www.sur-digital.com";
})();

/**
 * Binario de turbo instalado por el workspace; si no está, se pide a bun. En
 * Windows se busca el `.exe` antes que el `.cmd`: ejecutar el `.cmd` obliga a
 * `shell: true`, que concatena argumentos sin escaparlos.
 */
const turbo = () => {
	const binDir = path.join(REPO, "node_modules/.bin");
	const candidates = process.platform === "win32" ? ["turbo.exe", "turbo.bunx"] : ["turbo"];
	return candidates.map((name) => path.join(binDir, name)).find((file) => fs.existsSync(file)) ?? null;
};

/** Compila las apps en tandas; un fallo se avisa y no impide servir el resto. */
const build = (names) => {
	const bin = turbo();

	for (let i = 0; i < names.length; i += BATCH_SIZE) {
		const batch = names.slice(i, i + BATCH_SIZE);
		const args = [
			"run",
			"build",
			...batch.map((name) => `--filter=./apps/${name}`),
			`--concurrency=${concurrency}`,
			"--output-logs=errors-only",
		];
		console.log(`▶ turbo build ${i + 1}-${i + batch.length} de ${names.length}`);

		try {
			execFileSync(bin ?? "bunx", bin ? args : ["turbo", ...args], {
				cwd: REPO,
				stdio: "inherit",
				shell: bin ? false : process.platform === "win32",
			});
		} catch {
			console.warn(`⚠ alguna app de la tanda ${i + 1}-${i + batch.length} no ha construido`);
		}
	}
};

/**
 * Dónde ha dejado Astro las páginas: en Vercel, su carpeta estática; en local,
 * `dist/client` (el adaptador mueve ahí la salida del cliente y deja `dist/`
 * solo como contenedor).
 */
const outputDirs = () => {
	const vercel = path.join(APP_DIR, ".vercel/output/static");
	if (process.env.VERCEL && fs.existsSync(vercel)) return [vercel];

	// La home vive en /i18n/<lang>/ y la resuelve Vercel, así que en la raíz de
	// la salida no hay `index.html`: basta con que exista la carpeta.
	for (const candidate of ["dist/client", "dist"]) {
		const dir = path.join(APP_DIR, candidate);
		if (fs.existsSync(path.join(dir, "_astro"))) return [dir];
	}
	return [];
};

/** Copia el `dist/` de una app a `<salida>/<app>/` y reescribe sus rutas. */
const assemble = (app, outDir) => {
	const source = path.join(app.dir, "dist");
	if (!fs.existsSync(path.join(source, "index.html"))) return 0;

	const target = path.join(outDir, app.name);
	fs.rmSync(target, { recursive: true, force: true });
	fs.cpSync(source, target, { recursive: true });

	const context = { origin: app.site, base: `${SITE}/${app.name}`, slug: app.name };
	let rewritten = 0;

	const walk = (dir) => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const file = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(file);
				continue;
			}
			const contents = fs.readFileSync(file, "utf8");
			const next = rewriteFile(file, contents, context);
			if (next !== null && next !== contents) {
				fs.writeFileSync(file, next);
				rewritten += 1;
			}
		}
	};
	walk(target);

	return rewritten;
};

const main = () => {
	const all = collectApps();
	const apps = selectApps(all);
	const outDirs = outputDirs();

	if (outDirs.length === 0) {
		throw new Error("no existe la salida del sitio: ejecuta antes `bun run build` (astro build)");
	}

	console.log(`Apps empaquetables: ${all.length} (${apps.length} seleccionadas)`);
	console.log(`Salida: ${outDirs.map((dir) => path.relative(REPO, dir)).join(", ")}`);

	build(apps.map((app) => app.name));

	let served = 0;
	let files = 0;
	const missing = [];

	for (const app of apps) {
		let rewritten = 0;
		for (const outDir of outDirs) rewritten += assemble(app, outDir);
		if (rewritten === 0 && !fs.existsSync(path.join(app.dir, "dist/index.html"))) {
			missing.push(app.name);
			continue;
		}
		served += 1;
		files += rewritten;
	}

	if (missing.length > 0) console.warn(`⚠ sin dist (no se sirven): ${missing.join(", ")}`);
	console.log(`\n✔ ${served} webs de cliente en /<slug>/ (${files} ficheros reescritos)`);
};

try {
	main();
} catch (error) {
	console.error(`✖ ${error instanceof Error ? error.message : String(error)}`);
	process.exit(1);
}
