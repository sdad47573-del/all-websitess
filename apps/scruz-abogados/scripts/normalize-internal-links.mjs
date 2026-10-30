// Normaliza los enlaces internos del HTML generado.
//
// El sitio se sirve con `trailingSlash: true`: `/blog/x` responde 308 hacia
// `/blog/x/`. Los componentes que reciben enlaces desde los datos (ciudades,
// servicios relacionados, guías) los pintan a veces sin la barra, y desde el
// HTML no se puede saber qué consumidor los añade. Este paso, al final del
// build, garantiza el invariante en todas las páginas: ningún href interno de
// directorio sale sin barra, así que Google no descubre URLs que redirigen.
//
// Solo toca `href="/..."`; no modifica canonicals, JSON-LD ni ficheros con
// extensión (`/site.webmanifest`, imágenes, fuentes…).

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const htmlFiles = [];
const walk = (dir) => {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === '.prerender') continue;
			walk(path);
		} else if (entry.name.endsWith('.html')) {
			htmlFiles.push(path);
		}
	}
};

walk(DIST);

let files = 0;
let links = 0;
for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	const next = html.replace(/href="(\/[^"#?]*)((?:[#?][^"]*)?)"/g, (all, path, suffix) => {
		if (
			path === '/' ||
			path.startsWith('//') ||
			path.endsWith('/') ||
			/\.[a-z0-9]+$/i.test(path)
		) {
			return all;
		}
		links++;
		return `href="${path}/${suffix}"`;
	});
	if (next !== html) {
		writeFileSync(file, next);
		files++;
	}
}

console.log(`Enlaces internos normalizados: ${links} en ${files} páginas.`);
