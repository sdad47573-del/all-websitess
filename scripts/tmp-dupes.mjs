import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SKIP = new Set(['node_modules', '.astro', '.vercel', 'dist', '.git']);
function walk(dir, out) {
	if (!existsSync(dir)) return out;
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(join(dir, e.name), out); }
		else if (/\.(astro|tsx|jsx)$/.test(e.name)) out.push(join(dir, e.name));
	}
	return out;
}

for (const app of readdirSync('apps', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort()) {
	const files = walk(join('apps', app, 'src'), []);
	const hits = files.filter(f => /Web creada por/i.test(readFileSync(f, 'utf8')));
	if (hits.length > 1) console.log(`${app} -> ${hits.map(h => h.split(/[\\/]/).slice(-3).join('/')).join(' | ')}`);
}
