import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const APPS = [
	'autospa-astro',
	'brillanteza',
	'carniceria-san-marcos',
	'huertosolar',
	'patitas-peluqueria-canina',
	'vigia-proyecto',
];

function replaceManualChunks(src) {
	const idx = src.indexOf('manualChunks');
	if (idx === -1) return src;
	const braceStart = src.indexOf('{', idx);
	let depth = 0;
	let end = -1;
	for (let i = braceStart; i < src.length; i += 1) {
		if (src[i] === '{') depth += 1;
		else if (src[i] === '}') {
			depth -= 1;
			if (depth === 0) {
				end = i;
				break;
			}
		}
	}
	if (end === -1) return src;
	const body = src.slice(braceStart + 1, end);
	const re = /(['"]?)([A-Za-z0-9_@/.-]+)\1\s*:\s*\[([\s\S]*?)\]/g;
	const entries = [];
	let m;
	while ((m = re.exec(body))) {
		const name = m[2];
		const mods = m[3]
			.split(',')
			.map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
			.filter(Boolean);
		if (mods.length) entries.push([name, mods]);
	}
	if (!entries.length) return src;
	const lines = entries
		.map(([name, mods]) => {
			const cond = mods.map((x) => `id.includes('node_modules/${x}/')`).join(' || ');
			return `      if (${cond}) return '${name}';`;
		})
		.join('\n');
	const fn = `manualChunks(id) {\n      if (!id.includes('node_modules')) return undefined;\n${lines}\n      return undefined;\n    }`;
	return src.slice(0, idx) + fn + src.slice(end + 1);
}

let n = 0;
for (const app of APPS) {
	const p = join('apps', app, 'vite.config.ts');
	const src = readFileSync(p, 'utf8');
	const out = replaceManualChunks(src);
	if (out !== src) {
		writeFileSync(p, out);
		n += 1;
	}
}
console.log('vite configs rewritten:', n);
