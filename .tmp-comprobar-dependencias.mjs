/**
 * Lista los imports de paquetes (no relativos) que usan las landings de `src/apps` y comprueba
 * que Sur Digital los puede resolver: o están declarados en su `package.json`, o son de Astro.
 *
 * Uso: node .tmp-comprobar-dependencias.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const APP = 'apps/_sur-digital';
const ROOT = `${APP}/src/apps`;

const pkg = JSON.parse(fs.readFileSync(`${APP}/package.json`, 'utf8'));
const declared = new Set([
	...Object.keys(pkg.dependencies ?? {}),
	...Object.keys(pkg.devDependencies ?? {}),
]);

const walk = (dir) => {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(file));
		else if (entry.isFile()) out.push(file);
	}
	return out;
};

const used = new Map();

for (const slug of fs.readdirSync(ROOT)) {
	const dir = path.join(ROOT, slug);
	if (!fs.statSync(dir).isDirectory()) continue;

	for (const file of walk(dir)) {
		if (!['.astro', '.ts', '.js', '.mjs'].includes(path.extname(file).toLowerCase())) continue;
		const text = fs.readFileSync(file, 'utf8');
		for (const match of text.matchAll(/(?:from|import)\s+["']([^./][^"']*)["']/g)) {
			const specifier = match[1];
			// Paquetes y también rutas virtuales de Astro (`astro:assets`).
			const name = specifier.startsWith('astro:')
				? specifier
				: specifier.startsWith('@')
					? specifier.split('/').slice(0, 2).join('/')
					: specifier.split('/')[0];
			const entry = used.get(name) ?? { count: 0, apps: new Set() };
			entry.count += 1;
			entry.apps.add(slug);
			used.set(name, entry);
		}
	}
}

for (const [name, entry] of [...used.entries()].sort((a, b) => b[1].count - a[1].count)) {
	const ok = name.startsWith('astro:') || declared.has(name);
	console.log(
		`${ok ? 'ok ' : '✖  '} ${name.padEnd(24)} ${String(entry.count).padStart(5)} usos en ${entry.apps.size} landing(s)` +
			(ok ? '' : ` → p.ej. ${[...entry.apps].slice(0, 3).join(', ')}`),
	);
}
