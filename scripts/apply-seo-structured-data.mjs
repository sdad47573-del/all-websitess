/**
 * Cierra los huecos de datos estructurados que quedan en las apps usando solo datos que la
 * propia web ya publica. No inventa nada: si una app no declara horario, no se toca.
 *
 * Campos que añade al objeto del schema (después de su `'@type'`):
 *
 *  - `openingHoursSpecification`: a partir del horario estructurado que la app ya usa para
 *    pintar su tabla (export `openingHours` o `HOURS` con pares día/valor). Los días con
 *    «Cerrado» no se emiten y los horarios partidos se separan en dos tramos.
 *  - `sameAs`: las URL de Instagram y Facebook que la app ya enlaza en su pie o en su ficha.
 *  - `acceptsReservations`: solo en negocios de comida cuya web invita a reservar por teléfono.
 *
 * El plan lo genera `scripts/audit-structured-data.mjs`, que es quien mira qué dato tiene cada
 * web. Es idempotente: si el campo ya está en la app, la salta. No toca las apps cuyo plan
 * solo pide `faltaJSONLD` o campos sin dato: esos se resuelven a mano.
 *
 * Uso:
 *   node scripts/audit-structured-data.mjs            regenera el plan
 *   node scripts/apply-seo-structured-data.mjs --dry  enseña lo que escribiría
 *   node scripts/apply-seo-structured-data.mjs        lo aplica
 *   node scripts/check-structured-data.mjs            comprueba el HTML construido
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dry = process.argv.includes('--dry');
const plan = JSON.parse(readFileSync('scripts/seo-structured-data-plan.json', 'utf8'));

const DAYS = {
	Lunes: 'Monday',
	Martes: 'Tuesday',
	Miércoles: 'Wednesday',
	Jueves: 'Thursday',
	Viernes: 'Friday',
	Sábado: 'Saturday',
	Domingo: 'Sunday',
};

const FIELD_KEY = {
	openingHoursSpecification: 'openingHoursSpecification',
	sameAs: 'sameAs',
	acceptsReservations: 'acceptsReservations',
	servesCuisine: 'servesCuisine',
};

const walk = (dir) => {
	let out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) out = out.concat(walk(p));
		else if (/\.(astro|ts|tsx|js|jsx)$/.test(entry.name)) out.push(p);
	}
	return out;
};

/** «12:00–16:30 · 20:30–23:00» → [['12:00','16:30'], ['20:30','23:00']] */
const services = (value) =>
	value
		.split('·')
		.map((chunk) => chunk.trim())
		.map((chunk) => chunk.split(/[–-]/).map((t) => t.trim()))
		.filter((pair) => pair.length === 2 && /^\d{1,2}:\d{2}$/.test(pair[0]) && /^\d{1,2}:\d{2}$/.test(pair[1]))
		.map(([opens, closes]) => [opens.padStart(5, '0'), closes.padStart(5, '0')]);

/** Agrupa los días que comparten exactamente el mismo tramo. */
function hoursSpec(rows) {
	const buckets = new Map();
	for (const [day, value] of rows) {
		const name = DAYS[day];
		if (!name || /^cerrado$/i.test(value.trim())) continue;
		for (const [index, tramo] of services(value).entries()) {
			const key = `${index}|${tramo.join('|')}`;
			if (!buckets.has(key)) buckets.set(key, { index, opens: tramo[0], closes: tramo[1], days: [] });
			buckets.get(key).days.push(name);
		}
	}
	return [...buckets.values()].sort((a, b) => a.index - b.index || a.days.length - b.days.length);
}

const quote = (value) => `'${String(value).replace(/'/g, "\\'")}'`;
const list = (values) => `[${values.map((v) => quote(v)).join(', ')}]`;

const results = [];
for (const entry of plan) {
	const fields = entry.add.filter((a) => FIELD_KEY[a.field]);
	if (!fields.length) continue;

	const srcDir = join('apps', entry.app, 'src');
	const files = walk(srcDir);
	const target = files.find((file) => {
		const text = readFileSync(file, 'utf8');
		return /'@type':\s*'Restaurant'/.test(text);
	});
	if (!target) {
		results.push({ app: entry.app, status: 'sin objeto Restaurant' });
		continue;
	}

	const raw = readFileSync(target, 'utf8');
	const eol = raw.includes('\r\n') ? '\r\n' : '\n';
	const lines = raw.split(/\r?\n/);
	const at = lines.findIndex((line) => /'@type':\s*'Restaurant'/.test(line));
	if (at === -1) {
		results.push({ app: entry.app, status: 'no se localiza @type' });
		continue;
	}

	const anchor = lines[at];
	const inner = anchor.match(/^\s*/)[0];

	const missing = fields.filter((a) => !new RegExp(`\\b${FIELD_KEY[a.field]}\\b`).test(raw));
	if (!missing.length) {
		results.push({ app: entry.app, status: 'ya estaba' });
		continue;
	}

	const out = [];
	for (const add of missing) {
		if (add.field === 'openingHoursSpecification') {
			const spec = hoursSpec(add.value);
			if (!spec.length) continue;
			out.push(`${inner}openingHoursSpecification: [`);
			for (const s of spec) {
				out.push(
					`${inner}\t{ '@type': 'OpeningHoursSpecification', dayOfWeek: ${list(s.days)}, opens: ${quote(s.opens)}, closes: ${quote(s.closes)} },`,
				);
			}
			out.push(`${inner}],`);
		}
		if (add.field === 'sameAs') {
			out.push(`${inner}sameAs: ${list(add.value)},`);
		}
		if (add.field === 'acceptsReservations') {
			out.push(`${inner}acceptsReservations: true,`);
		}
		if (add.field === 'servesCuisine') {
			out.push(`${inner}servesCuisine: ${list(add.value)},`);
		}
	}
	if (!out.length) {
		results.push({ app: entry.app, status: 'sin valores utilizables' });
		continue;
	}

	lines.splice(at + 1, 0, ...out);
	const next = lines.join(eol);
	if (!dry) writeFileSync(target, next);
	results.push({
		app: entry.app,
		status: dry ? 'a escribir' : 'escrito',
		file: target.split('\\').join('/'),
		added: missing.map((m) => m.field),
		lines: out,
	});
}

for (const r of results) {
	console.log(`${r.app.padEnd(42)} ${r.status}${r.added ? ` · ${r.added.join(', ')}` : ''}`);
	if (dry && r.lines) for (const line of r.lines) console.log(`    ${line.trim()}`);
}
console.log(
	`\n${results.filter((r) => ['escrito', 'a escribir'].includes(r.status)).length} apps tocadas · ${results.length - results.filter((r) => ['escrito', 'a escribir'].includes(r.status)).length} sin cambios`,
);
