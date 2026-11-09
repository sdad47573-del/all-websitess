/**
 * Busca portadas de landing con marcado sin cerrar, que rompen el build de Astro en cuanto llega
 * su turno. Comprueba las etiquetas que estructuran el documento de cada página.
 *
 * Uso: node .tmp-escanear-estructura.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'apps/_sur-digital/src/apps';
const TAGS = ['html', 'body', 'Layout', 'main'];

const slugs = fs
	.readdirSync(ROOT, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

const problems = [];

for (const slug of slugs) {
	const pagesDir = path.join(ROOT, slug, 'pages');
	if (!fs.existsSync(pagesDir)) continue;

	for (const name of fs.readdirSync(pagesDir)) {
		if (!name.endsWith('.astro')) continue;
		const file = path.join(pagesDir, name);
		const text = fs.readFileSync(file, 'utf8');

		for (const tag of TAGS) {
			const opens = (text.match(new RegExp(`<${tag}[\\s>]`, 'g')) ?? []).length;
			const closes = (text.match(new RegExp(`</${tag}\\s*>`, 'g')) ?? []).length;
			if (opens !== closes) {
				problems.push(`${slug}/pages/${name}: <${tag}> ${opens} abiertas, ${closes} cerradas`);
			}
		}

		// Un documento que abre <!doctype html> debe tener su </html> en algún sitio. Que quede
		// un <style> detrás es habitual en estas webs y Astro lo admite, así que no se exige
		// que sea la última etiqueta del fichero.
		if (/<!doctype html>/i.test(text) && !/<\/html>/i.test(text)) {
			problems.push(`${slug}/pages/${name}: abre <!doctype html> pero no cierra </html>`);
		}
	}
}

console.log(`portadas revisadas: ${slugs.length}`);
for (const problem of problems) console.log(`  ✖ ${problem}`);
console.log(`problemas: ${problems.length}`);
