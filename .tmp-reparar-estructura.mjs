/**
 * Cierra las páginas de landing que se quedaron truncadas (sin `</body></html>` o sin cerrar su
 * `<Layout>`), que es lo que rompe el build de Astro.
 *
 * No reescribe la página: añade al final, y solo si falta, el cierre de las etiquetas que la
 * estructuran, en el orden correcto. Es la reparación mínima para que compile y muestre lo que
 * tiene; el contenido que se perdió al truncarse no se inventa.
 *
 * Uso:
 *   node .tmp-reparar-estructura.mjs            # solo informa
 *   node .tmp-reparar-estructura.mjs --apply     # repara
 */

import fs from 'node:fs';
import path from 'node:path';

const APPLY = process.argv.includes('--apply');
const ROOT = 'apps/_sur-digital/src/apps';

/**
 * De fuera hacia dentro: se añaden al revés, de dentro hacia fuera. Solo etiquetas estructurales:
 * contar `<script>`/`<style>` da falsos positivos porque su propio texto puede contener la
 * etiqueta, y añadir un cierre de más rompería una página que estaba bien.
 */
const TAGS = ['html', 'body', 'Layout', 'main'];

const count = (text, pattern) => (text.match(pattern) ?? []).length;

const missing = (text) => {
	const pending = [];
	for (const tag of TAGS) {
		const opens = count(text, new RegExp(`<${tag}[\\s>]`, 'g'));
		const closes = count(text, new RegExp(`</${tag}\\s*>`, 'g'));
		for (let i = 0; i < opens - closes; i += 1) pending.push(tag);
	}
	return pending.reverse();
};

const slugs = fs
	.readdirSync(ROOT, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

let fixed = 0;

for (const slug of slugs) {
	const pagesDir = path.join(ROOT, slug, 'pages');
	if (!fs.existsSync(pagesDir)) continue;

	for (const name of fs.readdirSync(pagesDir)) {
		if (!name.endsWith('.astro')) continue;
		const file = path.join(pagesDir, name);
		const text = fs.readFileSync(file, 'utf8');
		const pending = missing(text);
		if (pending.length === 0) continue;

		const closers = pending.map((tag) => `</${tag}>`).join('\n');
		if (!APPLY) {
			console.log(`· ${slug}/pages/${name} → añadir ${pending.map((tag) => `</${tag}>`).join(' ')}`);
			console.log(`    termina en: ${JSON.stringify(text.slice(-70))}`);
			continue;
		}

		const separator = text.endsWith('\n') ? '' : '\n';
		fs.writeFileSync(file, `${text}${separator}${closers}\n`, 'utf8');
		fixed += 1;
		console.log(`✓ ${slug}/pages/${name} → ${pending.map((tag) => `</${tag}>`).join(' ')}`);
	}
}

console.log(`\n${APPLY ? 'reparadas' : 'por reparar'}: ${APPLY ? fixed : ''}`);
