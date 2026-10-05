/**
 * Inventario de apps que podrían llevar botón de WhatsApp.
 *
 * Solo informa: no modifica nada. Extrae el teléfono **solo** de contextos de contacto reales
 * (`phone:`, `tel:`, `PHONE`, `whatsapp`), nunca de cualquier cifra que aparezca en el código:
 * un barrido ingenuo encuentra números dentro de SVG, de CSS y de coordenadas, que no son
 * teléfonos de nadie.
 *
 * Salida en tres bloques:
 *   1. apps con un móvil inequívoco → candidatas directas;
 *   2. apps con varios móviles → hay que decidir cuál es el del negocio;
 *   3. apps sin móvil claro → no se tocan.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const APPS = join(process.cwd(), 'apps');

/**
 * Solo cuenta un número cuando está en un contexto de contacto. El prefijo `34` es opcional
 * porque muchas apps guardan el móvil en formato local (`600 24 13 83`).
 */
const CONTACT_CONTEXT =
	/((?:phone|tel|whatsapp|wa_phone|mobile|tlf|telefono)["'\s:=]{1,12}(\+?34)?[\s.-]?[67]\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2})/gi;

const walk = (dir, out = []) => {
	for (const entry of readdirSync(dir)) {
		if (entry === 'node_modules' || entry === 'dist' || entry === '.astro') continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
};

const clean = (raw) => {
	const digits = raw.replace(/\D/g, '');
	const full = digits.startsWith('34') ? digits : `34${digits}`;
	return full.length === 11 ? full : null;
};

const singles = [];
const multiples = [];
const sinMovil = [];

for (const name of readdirSync(APPS)) {
	const dir = join(APPS, name);
	if (!statSync(dir).isDirectory() || !readdirSync(dir).includes('src')) continue;
	const files = walk(join(dir, 'src'));
	const pkg = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'));
	const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };
	const astro = 'astro' in deps;

	const joined = files.map((file) => readFileSync(file, 'utf8')).join('\n');
	if (joined.includes('wa.me')) continue;

	const moviles = new Map();
	for (const file of files) {
		const text = readFileSync(file, 'utf8');
		for (const match of text.matchAll(CONTACT_CONTEXT)) {
			const valor = clean(match[1]);
			if (!valor) continue;
			if (!moviles.has(valor)) moviles.set(valor, relative(dir, file).replaceAll('\\', '/'));
		}
	}
	const lista = [...moviles.entries()];
	const row = {
		app: name,
		marco: astro ? 'astro' : 'react',
		iconos: '@astro-icons' in deps,
		paginas: files.filter((f) => f.includes('pages') && f.endsWith('.astro')).length,
	};
	if (lista.length === 0) sinMovil.push(row);
	else if (lista.length === 1) singles.push({ ...row, numero: lista[0][0], donde: lista[0][1] });
	else multiples.push({ ...row, numeros: lista.map(([n, f]) => `${n} (${f})`) });
}

const fmt = (r) =>
	[
		r.app.padEnd(38),
		r.marco.padEnd(6),
		(r.iconos ? 'icon' : '----').padEnd(5),
		`p${r.paginas}`.padEnd(4),
		r.numero ?? '',
		r.donde ?? '',
	].join(' ');

console.log(`\n1) CANDIDATAS DIRECTAS (un solo móvil inequívoco): ${singles.length}`);
singles.sort((a, b) => a.app.localeCompare(b.app)).forEach((r) => console.log('  ' + fmt(r)));

console.log(`\n2) VARIOS MÓVILES EN LA MISMA WEB (hay que decidir): ${multiples.length}`);
multiples.sort((a, b) => a.app.localeCompare(b.app)).forEach((r) => {
	console.log(`  ${r.app} (${r.marco}, p${r.paginas})`);
	r.numeros.forEach((n) => console.log(`      ${n}`));
});

console.log(`\n3) SIN MÓVIL CLARO O YA TIENEN WHATSAPP: ${sinMovil.length}`);
sinMovil.sort((a, b) => a.app.localeCompare(b.app)).forEach((r) => console.log(`  ${r.app} (${r.marco})`));

console.log(`\nResumen: ${singles.length} directas · ${multiples.length} dudosas · ${sinMovil.length} sin móvil`);