/**
 * Separa los avisos de rutas sin prefijo entre las landings migradas en esta tanda y las que ya
 * estaban migradas antes, para saber si el fallo es de la migración nueva o ruido anterior.
 *
 * Uso: node .tmp-analizar-avisos.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const SUR = 'apps/_sur-digital';
const APPS = `${SUR}/src/apps`;
const pending = new Set(
	fs.readFileSync('.tmp-pending-slugs.txt', 'utf8').trim().split(/\r?\n/).filter(Boolean),
);

const walk = (dir) => {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(file));
		else if (entry.isFile()) out.push(file);
	}
	return out;
};

const slugs = fs
	.readdirSync(APPS, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

const stats = { nuevas: new Map(), viejas: new Map() };

for (const slug of slugs) {
	const dir = path.join(APPS, slug);
	const publicDir = path.join(SUR, 'public', slug);
	const publicRoots = fs.existsSync(publicDir) ? new Set(fs.readdirSync(publicDir)) : new Set();
	const pagesDir = path.join(dir, 'pages');
	const pageRoots = new Set(
		fs
			.readdirSync(pagesDir)
			.map((name) => name.replace(/\.astro$/, ''))
			.filter((name) => name !== 'index'),
	);

	for (const file of walk(dir)) {
		const extension = path.extname(file).toLowerCase();
		if (!['.astro', '.ts', '.css', '.js', '.mjs', '.json'].includes(extension)) continue;
		const text = fs.readFileSync(file, 'utf8');

		// Solo atributos de enlace/recurso y url(): los props (`path="/x"`) y los literales de
		// datos no son navegación hasta que se renderizan, así que no cuentan como ruta rota.
		for (const match of text.matchAll(
			/(?:\s(?:href|src|action|poster|data-src)=|url\()["']?\/(?!\/)([^"')\s]*)/g,
		)) {
			const clean = `/${match[1]}`.split('#')[0].split('?')[0];
			if (clean === '/') continue;
			const first = clean.split('/').filter(Boolean)[0];
			if (!first || first === slug) continue;
			if (!publicRoots.has(first) && !pageRoots.has(first)) continue;

			const bucket = pending.has(slug) ? stats.nuevas : stats.viejas;
			const key = `/${match[1]}`;
			const list = bucket.get(slug) ?? [];
			list.push(`${key} en ${path.relative(APPS, file)}`);
			bucket.set(slug, list);
			break;
		}
	}
}

for (const [name, map] of Object.entries(stats)) {
	console.log(`\n${name}: ${map.size} landing(s)`);
	for (const [slug, list] of [...map.entries()].slice(0, 10)) {
		console.log(`  ${slug}: ${list.slice(0, 3).join(' · ')}`);
	}
}
