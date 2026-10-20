import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const APPS = 'apps';
const DRY = process.argv.includes('--dry');
const SKIP_DIRS = new Set(['node_modules', '.astro', '.vercel', 'dist', '.git']);

function walk(dir, out) {
	if (!existsSync(dir)) return out;
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) {
			if (!SKIP_DIRS.has(e.name)) walk(join(dir, e.name), out);
		} else if (e.name.endsWith('.astro')) out.push(join(dir, e.name));
	}
	return out;
}

const CREDIT_RE = /sur[\s-]?digital/i;
const SHARED_RE = /\bLocalFooter\b/;
const URL = 'https://sur-digital.vercel.app/';

function indentUnit(src) {
	if (/\n\t/.test(src)) return '\t';
	// espacios: detecta el paso mas comun entre lineas indentadas
	const counts = new Map();
	for (const line of src.split('\n')) {
		const m = line.match(/^( +)\S/);
		if (m) counts.set(m[1].length, (counts.get(m[1].length) || 0) + 1);
	}
	const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
	return ' '.repeat(sorted.length ? Math.min(...sorted.map((s) => s[0]).filter((n) => n <= 4)) || 2 : 2);
}

function lineIndentBefore(src, index) {
	const start = src.lastIndexOf('\n', index - 1) + 1;
	const m = src.slice(start).match(/^[ \t]*/);
	return m ? m[0] : '';
}

/**
 * Devuelve el indice de insercion del credito, o null si el archivo no tiene
 * un footer de sitio claro.
 */
function findInsertPoint(src) {
	const closeIdx = src.lastIndexOf('</footer>');
	if (closeIdx === -1) return null;
	const openIdx = src.lastIndexOf('<footer', closeIdx);
	if (openIdx === -1) return null;

	// El footer de resenas vive dentro de un <blockquote>: no es el del sitio.
	const ctx = src.slice(Math.max(0, openIdx - 200), openIdx);
	if (/<blockquote[\s\S]*$/.test(ctx)) return null;

	const openTag = src.slice(openIdx, src.indexOf('>', openIdx) + 1);
	if (!/class=/.test(openTag)) return null;

	return { closeIdx, openIdx };
}

const creditLine = (indent) =>
	`<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;"><small>Web creada por <a href="${URL}" rel="noopener">Sur Digital</a></small></p>`;

const apps = readdirSync(APPS, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.sort();

const changed = [];
const alreadyOk = [];
const noTarget = [];

for (const app of apps) {
	const files = walk(join(APPS, app, 'src'), []);
	if (!files.length) {
		noTarget.push({ app, reason: 'sin src' });
		continue;
	}
	const sources = new Map(files.map((f) => [f, readFileSync(f, 'utf8')]));

	if ([...sources.values()].some((s) => CREDIT_RE.test(s) || SHARED_RE.test(s))) {
		alreadyOk.push(app);
		continue;
	}

	let done = false;
	for (const [file, src] of sources) {
		const point = findInsertPoint(src);
		if (!point) continue;

		const nl = src.includes('\r\n') ? '\r\n' : '\n';
		const unit = indentUnit(src);
		const closeIndent = lineIndentBefore(src, point.closeIdx);
		const inner = closeIndent + unit;

		const lineStart = src.lastIndexOf('\n', point.closeIdx - 1) + 1;
		const ownLine = src.slice(lineStart, point.closeIdx).trim() === '';

		let out;
		let at;
		if (ownLine) {
			// `</footer>` ocupa su propia linea: inserta antes de su sangrado.
			at = lineStart;
			out = src.slice(0, at) + `${inner}${creditLine()}${nl}` + src.slice(at);
		} else {
			// Footer en una sola linea: parte la linea antes de cerrar.
			at = point.closeIdx;
			out =
				src.slice(0, at) +
				`${nl}${inner}${creditLine()}${nl}${closeIndent}` +
				src.slice(at);
		}

		const ratio = point.closeIdx / src.length;
		changed.push({ app, file, before: src, after: out, ratio });
		done = true;
	}

	if (!done) noTarget.push({ app, reason: 'sin footer de sitio' });
}

console.log(`apps: ${apps.length}`);
console.log(`ya tienen credito: ${alreadyOk.length}`);
console.log(`archivos a modificar: ${changed.length}`);
console.log(`apps sin destino: ${noTarget.length}`);

if (!DRY) {
	for (const c of changed) writeFileSync(c.file, c.after, 'utf8');
	console.log(`\nESCRITOS: ${changed.length} archivos`);
}

console.log('\n=== APPS SIN DESTINO ===');
for (const n of noTarget) console.log(`${n.app} -> ${n.reason}`);

console.log('\n=== SOSPECHOSOS (footer antes del 70% del archivo) ===');
for (const c of changed.filter((x) => x.ratio < 0.7)) console.log(`${c.file} (${(c.ratio * 100).toFixed(0)}%)`);

if (DRY) {
	console.log('\n=== MUESTRA DE DIFFS ===');
	for (const c of changed.slice(0, 3)) {
		const i = c.after.indexOf('Web creada por');
		console.log(`\n##### ${c.file}`);
		console.log(c.after.slice(Math.max(0, i - 300), i + 160));
	}
}
