/**
 * improve-markup.mjs — mejoras de marcado seguras para las webs de `apps/`.
 *
 * Dos arreglos mecánicos que afectan a rendimiento y seguridad:
 *
 *  1. Enlaces externos (`target="_blank"`) sin `rel` o sin `noopener`/`noreferrer`.
 *     Sin ellos, la página destino puede manipular `window.opener` (reverse tabnabbing)
 *     y el navegador envía el referrer. Se añaden.
 *  2. Imágenes `<img>` crudas sin `decoding`/`loading`. Se añade `decoding="async"` y,
 *     salvo en la imagen principal (la que declara `fetchpriority`), `loading="lazy"`,
 *     para que las fotos que no se ven al cargar no bloqueen el render (CLS/LCP).
 *
 * El componente compartido `<Image>` de Astro ya emite estos atributos: aquí solo se
 * revisan las etiquetas `<img>` escritas a mano.
 *
 * Es idempotente: una segunda pasada no encuentra nada que cambiar.
 * Por defecto solo informa; usa `--apply` para escribir.
 *
 *   node scripts/improve-markup.mjs                        # dry-run (informe)
 *   node scripts/improve-markup.mjs --apply                # escribe los cambios
 *   node scripts/improve-markup.mjs --apply bar-sazon-teatinos taberna-lang
 */

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const APPS_DIR = 'apps';
const APPLY = process.argv.includes('--apply');
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));

/** Igual que en `check-site-content.mjs`: comillas emparejadas para no cortar la etiqueta. */
const ATTRS = '((?:"[^"]*"|\'[^\']*\'|[^>"\'])*)';
const LINK = new RegExp(`<a\\b${ATTRS}>`, 'gi');
const IMG = new RegExp(`<img\\b${ATTRS}>`, 'gi');

/**
 * Inserta atributos antes del cierre `>` o `/>` conservando el formato: si la etiqueta es
 * multilínea, el atributo va en su propia línea con la misma sangría, para no reflowear el
 * resto del archivo (y que el diff solo muestre lo que cambia).
 */
function withAttrs(tag, attrs) {
	const match = tag.match(/(\s*)(\/?>)$/);
	if (!match) return tag;
	const [, whitespace, close] = match;
	const before = tag.slice(0, tag.length - match[0].length).replace(/\s+$/, '');
	if (whitespace.includes('\n')) {
		// Etiqueta multilínea: el atributo va al final de la línea anterior, de modo que el
		// cierre `/>` conserva su sangría y el diff no toca nada más.
		return `${before} ${attrs}${whitespace}${close}`;
	}
	return `${before} ${attrs}${close === '/>' ? ' />' : '>'}`;
}

function walk(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else if (/\.(astro|tsx)$/.test(entry.name)) out.push(full);
	}
	return out;
}

const changes = [];

/** Devuelve el fuente con los enlaces externos seguros. */
function secureLinks(source) {
	let touched = 0;
	const next = source.replace(LINK, (tag) => {
		if (!/target\s*=\s*"_blank"/.test(tag)) return tag;
		const rel = tag.match(/rel\s*=\s*"([^"]*)"/);
		if (!rel) {
			touched += 1;
			return withAttrs(tag, 'rel="noopener noreferrer"');
		}
		if (/noopener/.test(rel[1]) || /noreferrer/.test(rel[1])) return tag;
		touched += 1;
		return tag.replace(rel[0], `rel="${rel[1].trim()} noopener noreferrer"`);
	});
	return { source: next, touched };
}

/** Devuelve el fuente con `decoding`/`loading` en las imágenes crudas que no los tengan. */
function optimizeImages(source) {
	let touched = 0;
	const next = source.replace(IMG, (tag) => {
		// El lightbox rellena el `src` por JavaScript: no se toca.
		if (/data-lightbox/.test(tag)) return tag;
		let out = tag;
		if (!/\bdecoding\s*=/.test(out)) out = withAttrs(out, 'decoding="async"');
		// La imagen principal (`fetchpriority`) debe seguir cargando cuanto antes.
		const isLcp = /fetchpriority\s*=/.test(out);
		const emptySrc = /src\s*=\s*"\s*"/.test(out);
		if (!/\bloading\s*=/.test(out) && !isLcp && !emptySrc) out = withAttrs(out, 'loading="lazy"');
		if (out !== tag) touched += 1;
		return out;
	});
	return { source: next, touched };
}

const apps = readdirSync(APPS_DIR).filter(
	(name) =>
		(ONLY.length === 0 || ONLY.includes(name)) &&
		(() => {
			try {
				return statSync(join(APPS_DIR, name, 'src')).isDirectory();
			} catch {
				return false;
			}
		})(),
);

for (const app of apps) {
	for (const file of walk(join(APPS_DIR, app, 'src'))) {
		const original = readFileSync(file, 'utf8');
		const links = secureLinks(original);
		const images = optimizeImages(links.source);
		if (images.source === original) continue;
		if (APPLY) writeFileSync(file, images.source, 'utf8');
		if (links.touched) changes.push(`${app}: ${links.touched} enlace(s) externo(s) sin rel en ${file.split('\\').join('/')}`);
		if (images.touched) changes.push(`${app}: ${images.touched} imagen(es) sin decoding/loading en ${file.split('\\').join('/')}`);
	}
}

console.log(`Modo: ${APPLY ? 'APLICANDO' : 'dry-run'} | apps analizadas: ${apps.length} | archivos afectados: ${changes.length}`);
for (const change of changes) console.log('  ·', change);
if (!APPLY && changes.length) console.log('Ejecuta con --apply para escribir los cambios.');
