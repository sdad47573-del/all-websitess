/**
 * Construye todas las apps Astro estáticas y las deja en un único directorio de salida, con cada
 * una bajo `/<app>/`, para desplegarlas en un solo proyecto de Vercel.
 *
 * ## Qué hace
 *
 * 1. Elige las apps: toda carpeta de `apps/` que sea Astro, tenga script `build` y no use el
 *    adaptador de Vercel (esas son SSR y no caben en una salida estática). `cms` y
 *    `vigia-proyecto` no son Astro y se quedan fuera; se listan por pantalla, no se esconden.
 * 2. Las compila con turbo, en tandas, respetando el `dependsOn: ["^build"]` de `turbo.json`
 *    (los paquetes compartidos se construyen antes).
 * 3. Copia cada `apps/<app>/dist` a `dist-single/<app>/` y reescribe sus rutas absolutas, para
 *    que la web funcione igual servida desde `/<app>/` que desde la raíz de su propio dominio.
 * 4. Genera un índice en la raíz del proyecto con un enlace a cada web.
 *
 * ## Por qué no un proyecto de Vercel por app
 *
 * Porque un commit obliga a desplegar 782 proyectos que comparten repositorio. Aquí hay un
 * despliegue, un dominio y un `dist-single/`; el filtro `vercel-ignore-build.mjs` de las apps
 * sigue existiendo para quien mantenga proyectos individuales, pero deja de hacer falta.
 *
 * ## Variables de entorno
 *
 * - `APPS`: lista separada por comas para construir solo esas apps (`APPS=a,b`). Sin ella se
 *   construyen todas. Sirve para desplegar un subconjunto cuando el build completo no cabe en el
 *   límite de 45 minutos de Vercel o para probar un cambio concreto.
 * - `PUBLIC_HOST`: dominio público del proyecto único (`https://mi-proyecto.vercel.app`). Es lo
 *   que se escribe en canonical, `og:url`, sitemap y JSON-LD. Por defecto se toma
 *   `VERCEL_PROJECT_PRODUCTION_URL` (el dominio de producción estable, también en previews) y,
 *   si no existe, `VERCEL_URL`; en local, `http://localhost:4321`.
 * - `BUILD_CONCURRENCY`: builds de turbo en paralelo. Por defecto 4: con 200 (el valor de
 *   `turbo.json`) las máquinas de Vercel se quedan sin memoria al compilar cientos de webs.
 * - `OUT_DIR`: carpeta de salida. Por defecto `dist-single`.
 *
 * Uso local:
 *   node scripts/vercel-single-project/build.mjs
 *   APPS=28-soul-food,restaurante-meson-don-paco PUBLIC_HOST=http://localhost:4321 \
 *     node scripts/vercel-single-project/build.mjs
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rewriteFile } from './rewrite.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const APPS_DIR = path.join(REPO, 'apps');
const OUT = path.resolve(REPO, process.env.OUT_DIR || 'dist-single');

/** Tantas apps por invocación de turbo: una línea de 782 filtros se pasa de largo en Windows. */
const BATCH_SIZE = 40;

const concurrency = process.env.BUILD_CONCURRENCY || '4';

const readJson = (file) => {
	try {
		return JSON.parse(fs.readFileSync(file, 'utf8'));
	} catch {
		return null;
	}
};

/**
 * Apps que se pueden empaquetar en una salida estática única, con el origen que declaran en su
 * `astro.config.mjs` (lo que alimenta canonical, sitemap y JSON-LD).
 */
const collectApps = () => {
	const apps = [];
	const skipped = [];

	for (const entry of fs.readdirSync(APPS_DIR, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		const dir = path.join(APPS_DIR, entry.name);
		const manifest = path.join(dir, 'package.json');
		if (!fs.existsSync(manifest)) continue;

		const pkg = readJson(manifest);
		if (!pkg) {
			skipped.push([entry.name, 'package.json ilegible']);
			continue;
		}
		const deps = { ...pkg.dependencies, ...pkg.devDependencies };
		if (!deps.astro) {
			skipped.push([entry.name, 'no es Astro']);
			continue;
		}
		if (!pkg.scripts?.build) {
			skipped.push([entry.name, 'sin script build']);
			continue;
		}

		const config = ['astro.config.mjs', 'astro.config.ts', 'astro.config.js']
			.map((file) => path.join(dir, file))
			.find((file) => fs.existsSync(file));
		if (!config) {
			skipped.push([entry.name, 'sin astro.config']);
			continue;
		}

		const text = fs.readFileSync(config, 'utf8');
		if (text.includes('@astrojs/vercel')) {
			skipped.push([entry.name, 'usa el adaptador de Vercel (SSR, no es estática)']);
			continue;
		}

		const site = text.match(/site:\s*['"]([^'"]+)['"]/)?.[1];
		apps.push({ name: entry.name, dir, site: site ?? `https://${entry.name}.vercel.app` });
	}

	return { apps, skipped };
};

/** Filtra por `APPS`, fallando si un nombre pedido no existe: un typo no debe desplegar de menos. */
const selectApps = (apps) => {
	const requested = (process.env.APPS ?? '')
		.split(',')
		.map((name) => name.trim())
		.filter(Boolean);
	if (requested.length === 0) return apps;

	const disponible = new Set(apps.map((app) => app.name));
	const desconocidas = requested.filter((name) => !disponible.has(name));
	if (desconocidas.length > 0) {
		throw new Error(
			`APPS pide apps que no se pueden empaquetar: ${desconocidas.join(', ')}. ` +
				'Revisa que existan en apps/ y que sean Astro estáticas.',
		);
	}
	return apps.filter((app) => requested.includes(app.name));
};

/**
 * Binario de turbo instalado por el workspace; si no está, se pide a bun. En Windows se busca el
 * `.exe` antes que el `.cmd`: ejecutar el `.cmd` obliga a `shell: true`, que concatena argumentos
 * sin escaparlos.
 */
const turbo = () => {
	const binDir = path.join(REPO, 'node_modules/.bin');
	const candidates = process.platform === 'win32' ? ['turbo.exe', 'turbo.bunx'] : ['turbo'];
	return (
		candidates.map((name) => path.join(binDir, name)).find((file) => fs.existsSync(file)) ?? null
	);
};

const build = (names) => {
	const bin = turbo();
	for (let i = 0; i < names.length; i += BATCH_SIZE) {
		const batch = names.slice(i, i + BATCH_SIZE);
		const args = [
			'run',
			'build',
			...batch.map((name) => `--filter=./apps/${name}`),
			`--concurrency=${concurrency}`,
			'--output-logs=errors-only',
		];
		console.log(`▶ turbo build ${i + 1}-${i + batch.length} de ${names.length}`);
		execFileSync(bin ?? 'bunx', bin ? args : ['turbo', ...args], {
			cwd: REPO,
			stdio: 'inherit',
			// Solo hace falta shell para el lanzador de bun, no para el binario instalado.
			shell: bin ? false : process.platform === 'win32',
		});
	}
};

/** Copia el `dist/` de una app a la salida y reescribe sus rutas absolutas. */
const assemble = (app, { publicHost }) => {
	const source = path.join(app.dir, 'dist');
	if (!fs.existsSync(path.join(source, 'index.html'))) {
		throw new Error(`apps/${app.name}/dist no existe o no tiene index.html tras el build`);
	}

	const target = path.join(OUT, app.name);
	fs.cpSync(source, target, { recursive: true });

	const base = `${publicHost}/${app.name}`;
	const context = { origin: app.site, base, slug: app.name };
	let rewritten = 0;

	const walk = (dir) => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const file = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(file);
				continue;
			}
			const contents = fs.readFileSync(file, 'utf8');
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

const title = (name) => {
	const words = name.replace(/^_/, '').split('-');
	const text = words.join(' ');
	return text.charAt(0).toUpperCase() + text.slice(1);
};

const escapeHtml = (text) =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Índice del proyecto único: la raíz de `dist-single/` no la sirve ninguna app. */
const writeIndex = (apps) => {
	const items = apps
		.map((app) => `\t\t\t<li><a href="/${app.name}/">${escapeHtml(title(app.name))}</a></li>`)
		.join('\n');

	const html = `<!doctype html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Webs · proyecto único</title>
		<style>
			:root { color-scheme: light dark; }
			body { font: 16px/1.6 system-ui, sans-serif; max-width: 60rem; margin: 0 auto; padding: 3rem 1.25rem; }
			h1 { font-size: 1.6rem; }
			p { opacity: .75; }
			ul { list-style: none; padding: 0; display: grid; gap: .35rem 1.5rem; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); }
			a { text-decoration: none; }
			a:hover { text-decoration: underline; }
		</style>
	</head>
	<body>
		<h1>Webs</h1>
		<p>${apps.length} webs en un solo proyecto. Cada una vive en <code>/&lt;app&gt;/</code>.</p>
		<ul>
${items}
		</ul>
	</body>
</html>
`;

	fs.writeFileSync(path.join(OUT, 'index.html'), html);
};

const main = () => {
	const { apps: todas, skipped } = collectApps();
	const apps = selectApps(todas);

	const publicHost = (
		process.env.PUBLIC_HOST ||
		(process.env.VERCEL_PROJECT_PRODUCTION_URL
			? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
			: process.env.VERCEL_URL
				? `https://${process.env.VERCEL_URL}`
				: 'http://localhost:4321')
	).replace(/\/+$/, '');

	console.log(`Apps empaquetables: ${todas.length} (${apps.length} seleccionadas)`);
	for (const [name, reason] of skipped) console.log(`  · fuera ${name}: ${reason}`);
	console.log(`Dominio público: ${publicHost}`);
	console.log(`Salida: ${path.relative(REPO, OUT)}`);

	fs.rmSync(OUT, { recursive: true, force: true });
	fs.mkdirSync(OUT, { recursive: true });

	build(apps.map((app) => app.name));

	let files = 0;
	for (const app of apps) {
		files += assemble(app, { publicHost });
		console.log(`  ✓ ${app.name}`);
	}

	writeIndex(apps);
	console.log(
		`\n✔ ${apps.length} webs en ${path.relative(REPO, OUT)} (${files} ficheros reescritos)`,
	);
};

try {
	main();
} catch (error) {
	console.error(`✖ ${error instanceof Error ? error.message : String(error)}`);
	process.exit(1);
}
