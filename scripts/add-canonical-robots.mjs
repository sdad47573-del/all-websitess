#!/usr/bin/env node
/**
 * Completa dos etiquetas que faltan en la cabecera de algunas webs:
 *
 *  1. `<link rel="canonical">`, para que Google sepa qué URL indexar cuando la misma página
 *     se sirve con y sin barra final o con parámetros.
 *  2. `<meta name="robots" content="index, follow">`, la directiva que hoy se da por supuesta
 *     pero que estas webs no declaran.
 *
 * La URL se toma del propio fichero (`og:url` o el `url` del JSON-LD); si no la declara, se
 * deriva del slug de la web dentro de `_sur-digital`. No se inventa ningún dato del negocio.
 *
 * Las webs que usan `<LocalSeo>` ya emiten ambas etiquetas y se dejan como están, igual que
 * las que ya las tienen: el script es idempotente.
 *
 *   node scripts/add-canonical-robots.mjs            # informa de lo que falta
 *   node scripts/add-canonical-robots.mjs --apply    # escribe los cambios
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const APPLY = process.argv.includes('--apply');
const ROOT = 'apps';
const SITE = 'https://www.sur-digital.com';

function* walk(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
			yield* walk(path);
		} else if (entry.name.endsWith('.astro')) {
			yield path;
		}
	}
}

/** URL que el propio fichero declara para la página. */
function declaredUrl(source) {
	for (const tag of source.matchAll(/<meta\b[^>]*>/gi)) {
		if (!/property="og:url"/.test(tag[0])) continue;
		const content = /content="([^"]+)"/.exec(tag[0])?.[1];
		if (content && /^https?:\/\//.test(content)) return content;
	}
	const jsonLd = /"url"\s*:\s*"(https?:\/\/[^"]+)"/.exec(source)?.[1];
	return jsonLd ?? null;
}

/** Slug de la web: `src/apps/<slug>/…` dentro del catálogo, o el nombre de la app. */
function slugOf(file) {
	const parts = relative(ROOT, file).split(/[\\/]/);
	const index = parts.indexOf('apps');
	if (index > 0) return parts[index + 1];
	return parts[0];
}

function pageUrl(file, source) {
	const base = declaredUrl(source) ?? `${SITE}/${slugOf(file)}/`;
	const name = file.split(/[\\/]/).pop();
	if (name === 'index.astro') return base.endsWith('/') ? base : `${base}/`;
	const dir = base.endsWith('/') ? base : `${base}/`;
	return `${dir}${name.replace(/\.astro$/, '')}/`;
}

/** Línea después de la cual encaja la cabecera: descripción, si no título, si no viewport. */
function anchor(lines) {
	for (const needle of ['name="description"', '<title', 'name="viewport"']) {
		const index = lines.findIndex((line) => line.includes(needle));
		if (index !== -1) return index;
	}
	return -1;
}

const changes = [];
for (const app of readdirSync(ROOT, { withFileTypes: true })) {
	if (!app.isDirectory()) continue;
	for (const file of walk(join(ROOT, app.name))) {
		const source = readFileSync(file, 'utf8');
		if (!/<head[\s>]/.test(source)) continue;
		if (/<LocalSeo[\s/>]/.test(source)) continue;

		const hasCanonical = /<link[^>]+rel="canonical"/.test(source);
		const hasRobots = /<meta\b[^>]*name="robots"/i.test(source);
		if (hasCanonical && hasRobots) continue;

		const eol = source.includes('\r\n') ? '\r\n' : '\n';
		const lines = source.split(eol);
		const at = anchor(lines);
		if (at === -1) {
			changes.push({ file, added: ['sin punto de inserción'], skipped: true });
			continue;
		}
		const indent = /^\s*/.exec(lines[at])[0];
		const tags = [];
		if (!hasCanonical) tags.push(`<link rel="canonical" href="${pageUrl(file, source)}" />`);
		if (!hasRobots) tags.push('<meta name="robots" content="index, follow" />');

		changes.push({ file, added: tags });
		if (!APPLY) continue;
		lines.splice(at + 1, 0, ...tags.map((tag) => `${indent}${tag}`));
		writeFileSync(file, lines.join(eol));
	}
}

const skipped = changes.filter((c) => c.skipped);
for (const change of changes) {
	if (change.skipped) console.log(`  ? ${change.file}: ${change.added[0]}`);
}
console.log(
	`${APPLY ? 'Aplicado' : 'Modo: dry-run'} | ficheros: ${changes.length - skipped.length} | canónicos: ${changes.filter((c) => c.added.some?.((t) => t.startsWith('<link'))).length} | robots: ${changes.filter((c) => c.added.some?.((t) => t.startsWith('<meta'))).length}`,
);
if (!APPLY) console.log('Ejecuta con --apply para escribir los cambios.');
