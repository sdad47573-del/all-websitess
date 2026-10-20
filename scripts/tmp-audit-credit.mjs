import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const APPS = 'apps';
const SKIP = new Set(['node_modules', '.astro', '.vercel', 'dist', '.git']);
function walk(dir, out) {
	if (!existsSync(dir)) return out;
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(join(dir, e.name), out); }
		else if (/\.(astro|tsx|ts)$/.test(e.name)) out.push(join(dir, e.name));
	}
	return out;
}
const SHARED = /\bLocalFooter\b|<Footer\b/;
const NEEDLE_RE = /sur[\s-]?digital/i;

const apps = readdirSync(APPS, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort();
let shown = 0;
for (const app of apps) {
	const files = walk(join(APPS, app, 'src'), []);
	if (files.some(f => SHARED.test(readFileSync(f, 'utf8')))) continue;
	for (const f of files) {
		if (!/pages[\\/]/.test(f)) continue;
		const src = readFileSync(f, 'utf8');
		if (!NEEDLE_RE.test(src)) continue;
		const lines = src.split(/\r?\n/);
		const idx = lines.findIndex(l => NEEDLE_RE.test(l));
		console.log(`##### ${app} :: ${f.split(/[\\/]/).slice(-3).join('/')} (linea ${idx + 1})`);
		console.log(lines.slice(Math.max(0, idx - 2), idx + 3).join('\n'));
		console.log('---');
		if (++shown >= 25) process.exit(0);
	}
}
