#!/usr/bin/env node
/**
 * Añade nombre accesible a los enlaces y botones cuyo único contenido es un icono.
 *
 * Un `<a><i class="ri-facebook-line"></i></a>` se ve perfectamente en la pantalla, pero un
 * lector de pantalla no tiene nada que anunciar: el enlace queda vacío al tabular por la
 * página. La etiqueta sale del propio icono, que ya dice qué enlace es.
 *
 * Es idempotente: si el enlace ya tiene `aria-label`, `title` o texto, no se toca.
 *
 * Uso:
 *   node scripts/add-icon-link-labels.mjs              # todas las webs
 *   node scripts/add-icon-link-labels.mjs vapers       # solo una
 */

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const APPS_DIR = join(ROOT, 'apps');

/** Icono de remixicon → nombre accesible del enlace o botón que lo envuelve. */
const LABELS = {
	facebook: 'Facebook',
	instagram: 'Instagram',
	whatsapp: 'WhatsApp',
	twitter: 'X (Twitter)',
	'twitter-x': 'X (Twitter)',
	youtube: 'YouTube',
	linkedin: 'LinkedIn',
	tiktok: 'TikTok',
	google: 'Google',
	'map-pin': 'Google Maps',
	'star-smile': 'Reseñas de Google',
	menu: 'Abrir menú',
	close: 'Cerrar menú',
	'arrow-left': 'Anterior',
	'arrow-right': 'Siguiente',
	phone: 'Llamar por teléfono',
};

/** Iconos de lucide (SVG en línea), que aparecen en algunas webs en lugar de remixicon. */
const LUCIDE_LABELS = {
	facebook: 'Facebook',
	instagram: 'Instagram',
	twitter: 'X (Twitter)',
	youtube: 'YouTube',
	linkedin: 'LinkedIn',
	menu: 'Abrir menú',
	'shopping-cart': 'Ir al carrito de la compra',
	user: 'Mi cuenta',
	star: 'Reseñas',
};

const SKIP_DIRECTORIES = new Set(['node_modules', 'dist', '.astro', '.turbo', '.git']);

function walk(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir)) {
		if (SKIP_DIRECTORIES.has(entry)) continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else if (entry.endsWith('.astro')) out.push(full);
	}
	return out;
}

/** Nombre accesible a partir del nombre del icono (`ri-facebook-circle-line` → Facebook). */
function labelFor(iconClass) {
	const name = iconClass.replace(/^ri-/, '').replace(/-(fill|line)$/, '');
	for (const [needle, label] of Object.entries(LABELS)) {
		if (name === needle || name.endsWith(`-${needle}`)) return label;
	}
	return null;
}

/**
 * Una etiqueta con sus atributos. Los valores van entre comillas porque una clase de Tailwind
 * puede llevar un `>` dentro, como en `[&>svg]:h-4`, y cortaría la etiqueta antes de tiempo.
 */
const ATTRS = `((?:"[^"]*"|'[^']*'|[^>"'])*)`;

function patch(source) {
	let patched = 0;
	const pattern = new RegExp(`<(a|button)\\b${ATTRS}>`, 'gi');
	const pieces = [];
	let cursor = 0;
	for (const match of source.matchAll(pattern)) {
		const tag = match[1];
		const attrs = match[2];
		const start = match.index + match[0].length;
		const close = new RegExp(`</${tag}\\s*>`, 'i').exec(source.slice(start));
		if (!close) continue;
		const inner = source.slice(start, start + close.index);

		if (/\b(?:aria-label|aria-labelledby|title)\s*=/.test(attrs)) continue;

		// Lo único que hay dentro es un icono: de remixicon (`<i>`) o de lucide (`<svg>`),
		// a veces envuelto en un `<div>` para centrarlo.
		const icons = [
			...inner.matchAll(/class="[^"]*?\b(ri-[a-z0-9-]+|lucide-[a-z0-9-]+)\b[^"]*"/g),
		].map((found) => found[1]);
		if (icons.length !== 1) continue;
		const icon = icons[0];
		const remix = icon.startsWith('ri-') ? icon : null;
		const isIcon = remix ? 'i' : 'svg';
		const onlyTheIcon = new RegExp(
			`^\\s*(?:<div\\b[^>]*>)?\\s*<${isIcon}\\b[\\s\\S]*<\\/${isIcon}\\s*>?\\s*(?:<\\/div\\s*>)?\\s*$`,
		);
		if (!onlyTheIcon.test(inner)) continue;

		const label = remix
			? labelFor(remix)
			: LUCIDE_LABELS[icon.replace(/^lucide-/, '').replace(/-icon$/, '')];
		if (!label) continue;

		patched += 1;
		// Solo los `<button>` llevan `type`: en un `<a>` no existe ese atributo.
		const newAttrs =
			tag === 'button' && !/\btype\s*=/.test(attrs) ? `${attrs} type="button"` : attrs;
		const hidden = `${isIcon}${/aria-hidden/.test(inner) ? '' : ' aria-hidden="true"'}`;
		const rebuilt = `<${tag}${newAttrs} aria-label="${label}">${inner.replace(
			new RegExp(`<${isIcon}\\b`, 'g'),
			`<${hidden}`,
		)}</${tag}>`;

		pieces.push(source.slice(cursor, match.index), rebuilt);
		cursor = start + close.index + close[0].length;
	}
	if (patched === 0) return { next: source, patched };
	pieces.push(source.slice(cursor));
	return { next: pieces.join(''), patched };
}

const requested = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
const apps = (
	requested.length
		? requested.map((name) => join(APPS_DIR, name))
		: readdirSync(APPS_DIR).map((name) => join(APPS_DIR, name))
)
	.filter((dir) => statSync(dir).isDirectory() && existsSync(join(dir, 'src')))
	.sort();

let total = 0;
for (const dir of apps) {
	let appTotal = 0;
	for (const file of walk(join(dir, 'src'))) {
		const source = readFileSync(file, 'utf8');
		const { next, patched } = patch(source);
		if (patched > 0) {
			writeFileSync(file, next);
			appTotal += patched;
		}
	}
	if (appTotal > 0) {
		console.log(`${relative(ROOT, dir).replaceAll('\\', '/')}: ${appTotal}`);
		total += appTotal;
	}
}
console.log(`\n${total} enlace(s) o botón(es) con icono y sin nombre accesible`);
