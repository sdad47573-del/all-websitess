/**
 * Sirve en local la salida de `scripts/vercel-single-project/build.mjs` tal como la sirve Vercel
 * en el proyecto único: `/<app>/…` apunta al `index.html` de esa carpeta y los assets salen de
 * ahí mismo.
 *
 * Existe para comprobar el resultado sin desplegar, que es donde se ven los fallos de la
 * reescritura de rutas (assets 404, enlaces a la raíz de otra web). No es un servidor de
 * producción: sin caché, sin rangos y sin compresión.
 *
 * Uso:
 *   node scripts/vercel-single-project/serve.mjs
 *   PORT=3000 OUT_DIR=dist-single node scripts/vercel-single-project/serve.mjs
 */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const ROOT = path.resolve(REPO, process.env.OUT_DIR || 'dist-single');
const PORT = Number(process.env.PORT || 4321);

const TYPES = new Map([
	['.html', 'text/html; charset=utf-8'],
	['.css', 'text/css; charset=utf-8'],
	['.js', 'text/javascript; charset=utf-8'],
	['.mjs', 'text/javascript; charset=utf-8'],
	['.json', 'application/json; charset=utf-8'],
	['.xml', 'application/xml; charset=utf-8'],
	['.txt', 'text/plain; charset=utf-8'],
	['.svg', 'image/svg+xml'],
	['.webp', 'image/webp'],
	['.jpg', 'image/jpeg'],
	['.jpeg', 'image/jpeg'],
	['.png', 'image/png'],
	['.avif', 'image/avif'],
	['.ico', 'image/x-icon'],
	['.woff', 'font/woff'],
	['.woff2', 'font/woff2'],
	['.mp4', 'video/mp4'],
	['.webm', 'video/webm'],
]);

/** Fichero real que corresponde a una ruta: la ruta tal cual, o su `index.html` si es carpeta. */
const resolve = (pathname) => {
	const relative = path.normalize(decodeURIComponent(pathname)).replace(/^([/\\])+/, '');
	const file = path.join(ROOT, relative);
	// Sin salir de la salida: `..` en la URL no puede leer ficheros de fuera.
	if (file !== ROOT && !file.startsWith(ROOT + path.sep)) return null;
	if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
		const index = path.join(file, 'index.html');
		return fs.existsSync(index) ? index : null;
	}
	return fs.existsSync(file) ? file : null;
};

const server = http.createServer((request, response) => {
	const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
	const file = resolve(url.pathname);

	if (!file) {
		const body = `404 · ${url.pathname}`;
		response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
		response.end(request.method === 'HEAD' ? undefined : body);
		return;
	}

	const stats = fs.statSync(file);
	response.writeHead(200, {
		'content-type': TYPES.get(path.extname(file).toLowerCase()) ?? 'application/octet-stream',
		'content-length': stats.size,
	});
	if (request.method === 'HEAD') {
		response.end();
		return;
	}
	fs.createReadStream(file).pipe(response);
});

if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
	console.error(`✖ no existe ${path.relative(REPO, ROOT)}/index.html: ejecuta antes el build.`);
	process.exit(1);
}

server.listen(PORT, () => {
	console.log(`▶ ${path.relative(REPO, ROOT)} en http://localhost:${PORT}`);
});
