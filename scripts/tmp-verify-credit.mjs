import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const APPS = 'apps';
const SKIP = new Set(['node_modules', '.astro', '.vercel', 'dist', '.git']);
function walk(dir, out) {
	if (!existsSync(dir)) return out;
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(join(dir, e.name), out); }
		else if (e.name.endsWith('.astro')) out.push(join(dir, e.name));
	}
	return out;
}
const CREDIT = /sur[\s-]?digital/i;
const SHARED = /\bLocalFooter\b/;

const apps = readdirSync(APPS, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort();
const missing = [];
const dupes = [];
let ok = 0;

for (const app of apps) {
	const files = walk(join(APPS, app, 'src'), []);
	if (!files.length) { missing.push(`${app} (sin src)`); continue; }
	const all = files.map(f => [f, readFileSync(f, 'utf8')]);
	if (all.some(([, s]) => CREDIT.test(s) || SHARED.test(s))) ok++;
	else missing.push(app);

	for (const [f, s] of all) {
		const n = (s.match(/Web creada por/g) || []).length;
		if (n > 1) dupes.push(`${f} -> ${n} veces`);
	}
}

console.log(`apps: ${apps.length} | con credito: ${ok} | sin credito: ${missing.length}`);
console.log('\n=== SIN CREDITO ===');
for (const m of missing) console.log(m);
console.log('\n=== DUPLICADOS ===');
console.log(dupes.length ? dupes.join('\n') : 'ninguno');
