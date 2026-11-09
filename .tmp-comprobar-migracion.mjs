/**
 * Comprueba que la migración de landings a `apps/_sur-digital` ha quedado completa:
 *
 * - cada carpeta de `src/apps` tiene portada,
 * - ninguna portada conserva el origen antiguo de la web (`https://<slug>.vercel.app`),
 * - ninguna referencia absoluta a una ruta de la propia web se ha quedado sin el prefijo del slug.
 *
 * Uso: node .tmp-comprobar-migracion.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const SUR = 'apps/_sur-digital';
const ROOT = `${SUR}/src/apps`;

const walk = (dir) => {
	const files = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...walk(file));
		else if (entry.isFile()) files.push(file);
	}
	return files;
};

const slugs = fs
	.readdirSync(ROOT, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

const problems = [];
let pages = 0;

for (const slug of slugs) {
	const dir = path.join(ROOT, slug);
	if (!fs.existsSync(path.join(dir, 'pages/index.astro'))) {
		problems.push(`${slug}: sin pages/index.astro`);
		continue;
	}
	pages += 1;

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

		// El origen antiguo de la web no puede sobrevivir en ninguna parte.
		const oldOrigin = new RegExp(`https?://${slug}\\.(?:vercel|netlify)\\.app`);
		if (oldOrigin.test(text)) problems.push(`${slug}: origen antiguo en ${path.relative(SUR, file)}`);

		// Rutas absolutas de la propia web sin el prefijo del slug.
		for (const match of text.matchAll(
			/(?:\s(?:href|src|action|poster|data-src)=|url\(|(["']))\/(?!\/)([^"')\s]*)/g,
		)) {
			const route = `/${match[2]}`;
			const clean = route.split('#')[0].split('?')[0];
			if (clean === '/' || clean === '') continue;
			const first = clean.split('/').filter(Boolean)[0];
			if (!first || first === slug) continue;
			if (!publicRoots.has(first) && !pageRoots.has(first)) continue;
			problems.push(`${slug}: ruta sin prefijo ${route} en ${path.relative(SUR, file)}`);
		}
	}
}

console.log(`landings en src/apps: ${slugs.length} · con portada: ${pages}`);

const unique = [...new Set(problems)];
const grouped = new Map();
for (const problem of unique) {
	const [slug, ...rest] = problem.split(': ');
	const list = grouped.get(rest.join(': ')) ?? [];
	list.push(slug);
	grouped.set(rest.join(': '), list);
}
for (const [reason, list] of [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)) {
	console.log(`${String(list.length).padStart(4)} ${reason} → ${list.slice(0, 5).join(', ')}`);
}
console.log(`total de avisos: ${unique.length}`);
