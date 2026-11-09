/**
 * Busca imports relativos a ficheros que no existen en las landings de `src/apps`, que es lo que
 * rompe el build de Astro antes de compilar la página.
 *
 * Uso: node .tmp-comprobar-assets.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'apps/_sur-digital/src/apps';

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
	.readdirSync(ROOT, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

/** Igual que Astro/Vite: un import puede omitir la extensión y apuntar a un index. */
const exists = (target) =>
	[target, `${target}.ts`, `${target}.astro`, `${target}.js`, `${target}.mjs`, `${target}.json`].some(
		(file) => fs.existsSync(file) && fs.statSync(file).isFile(),
	) || fs.existsSync(path.join(target, 'index.ts'));

const missing = new Map();

for (const slug of slugs) {
	const dir = path.join(ROOT, slug);
	for (const file of walk(dir)) {
		const extension = path.extname(file).toLowerCase();
		if (!['.astro', '.ts', '.js', '.mjs'].includes(extension)) continue;
		const text = fs.readFileSync(file, 'utf8');

		for (const match of text.matchAll(/from\s+["'](\.[^"']+)["']/g)) {
			const target = path.resolve(path.dirname(file), match[1]);
			if (exists(target)) continue;
			const key = slug;
			const list = missing.get(key) ?? [];
			list.push(`${path.relative(dir, file).replaceAll('\\', '/')} → ${match[1]}`);
			missing.set(key, list);
		}
	}
}

console.log(`landings con imports rotos: ${missing.size}`);
for (const [slug, list] of missing) {
	console.log(`\n${slug}`);
	for (const item of list) console.log(`  ${item}`);
}
