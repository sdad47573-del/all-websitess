/**
 * Construye el proyecto único de Vercel, que ahora es Sur Digital.
 *
 * Las landings de los clientes ya no son proyectos de `apps/`: su código vive en
 * `apps/_sur-digital/src/apps/<slug>` y su `public` en `apps/_sur-digital/public/<slug>`, así que
 * entran directamente en el `astro build` del sitio, servidas en `/<slug>/`. No hay que compilar
 * cientos de apps ni reescribir rutas después: el build ya genera cada web en su ruta.
 *
 * Por eso este script solo hace tres cosas:
 *
 * 1. Compila `sur-digital` con turbo (y, con él, los paquetes compartidos).
 * 2. Copia su `dist/` a `dist-single/`, que es el `outputDirectory` del `vercel.json` de la raíz.
 * 3. Informa de cuántas landings entran en el build.
 *
 * Variables de entorno:
 *
 * - `OUT_DIR`: carpeta de salida. Por defecto `dist-single`.
 *
 * Uso local:
 *   node scripts/vercel-single-project/build.mjs
 *   OUT_DIR=dist-local node scripts/vercel-single-project/build.mjs
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const APP = 'apps/_sur-digital';
const APP_DIST = path.join(REPO, APP, 'dist');
/** El adaptador de Vercel deja el sitio estático en `dist/client`; en un build sin adaptador sería `dist`. */
const STATIC_DIST = fs.existsSync(path.join(APP_DIST, 'client/index.html'))
	? path.join(APP_DIST, 'client')
	: APP_DIST;
const OUT = path.resolve(REPO, process.env.OUT_DIR || 'dist-single');

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

const build = () => {
	const bin = turbo();
	const args = ['run', 'build', '--filter=sur-digital', '--output-logs=errors-only'];
	console.log('▶ turbo build sur-digital');
	execFileSync(bin ?? 'bunx', bin ? args : ['turbo', ...args], {
		cwd: REPO,
		stdio: 'inherit',
		shell: bin ? false : process.platform === 'win32',
	});
};

const landings = () => {
	const dir = path.join(REPO, APP, 'src/apps');
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, 'pages/index.astro')))
		.length;
};

const main = () => {
	build();

	if (!fs.existsSync(path.join(STATIC_DIST, 'index.html'))) {
		throw new Error(`${APP}/dist no existe o no tiene index.html tras el build`);
	}

	fs.rmSync(OUT, { recursive: true, force: true });
	fs.cpSync(STATIC_DIST, OUT, { recursive: true });

	console.log(`✔ ${landings()} landings en ${path.relative(REPO, OUT)}`);
	console.log(`  la home y el resto del sitio, en la raíz de esa misma carpeta`);
};

try {
	main();
} catch (error) {
	console.error(`✖ ${error instanceof Error ? error.message : String(error)}`);
	process.exit(1);
}
