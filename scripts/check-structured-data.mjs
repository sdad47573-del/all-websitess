/**
 * Comprueba en el HTML construido (`apps/<app>/dist/index.html`) que los datos estructurados
 * son válidos y que están los campos que la propia web justifica con sus datos.
 *
 * Para cada app con `dist/`:
 *
 *  1. todos sus bloques `application/ld+json` parsean como JSON;
 *  2. si la web publica horario, el schema lleva `openingHoursSpecification` con esos mismos
 *     tramos (día, apertura y cierre, sin «Cerrado»);
 *  3. si enlaza perfiles sociales y declara un negocio de comida con reserva por teléfono,
 *     el schema lleva `sameAs` y `acceptsReservations`.
 *
 * Las apps sin `dist/` se listan como pendientes de construir, no como fallo: el catálogo
 * entero no se compila en cada pasada.
 *
 *   node scripts/check-structured-data.mjs
 *   node scripts/check-structured-data.mjs <app> [<app> …]
 */

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { DAYS, analyzeApp, neededFields, services, webApps } from './lib/structured-data.mjs';

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const apps = wanted.length ? wanted : webApps();

let checked = 0;
const pending = [];
const problems = [];

for (const app of apps) {
	const file = join('apps', app, 'dist/index.html');
	if (!existsSync(file)) {
		pending.push(app);
		continue;
	}

	const html = readFileSync(file, 'utf8');
	const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
	if (!blocks.length) {
		problems.push(`${app}: sin bloques JSON-LD en el HTML`);
		continue;
	}

	const parsed = [];
	let invalid = false;
	for (const block of blocks) {
		try {
			parsed.push(JSON.parse(block[1]));
		} catch (error) {
			problems.push(`${app}: JSON-LD inválido (${error.message})`);
			invalid = true;
		}
	}
	if (invalid) continue;

	const main = parsed.find(
		(p) => p['@type'] === 'Restaurant' || p['@type'] === 'BarOrPub' || p['@type'] === 'FoodEstablishment',
	);
	const row = analyzeApp(app);
	const expected = neededFields(row);

	if (!main) {
		// Las webs sin entidad de negocio (la agencia, una cooperativa sin restaurante) solo
		// tienen que llevar JSON-LD válido, que es lo que ya se ha comprobado.
		checked++;
		continue;
	}

	for (const add of expected) {
		if (add.field === 'openingHoursSpecification') {
			const esperados = new Set();
			for (const [day, value] of add.value) {
				const name = DAYS[day];
				if (!name || /^cerrado$/i.test(value.trim())) continue;
				for (const [opens, closes] of services(value)) esperados.add(`${name}|${opens}||${closes}`);
			}
			const got = new Set();
			for (const spec of main.openingHoursSpecification ?? []) {
				const days = Array.isArray(spec.dayOfWeek) ? spec.dayOfWeek : [spec.dayOfWeek];
				for (const day of days) got.add(`${day}|${spec.opens}||${spec.closes}`);
			}
			for (const key of esperados) if (!got.has(key)) problems.push(`${app}: falta el horario ${key}`);
		}
		if (add.field === 'acceptsReservations' && main.acceptsReservations !== true) {
			problems.push(`${app}: el negocio reserva por teléfono y el schema no lo dice (acceptsReservations)`);
		}
		if (add.field === 'sameAs' && !main.sameAs) {
			problems.push(`${app}: la web enlaza perfiles sociales y el schema no los lleva (sameAs)`);
		}
	}
	checked++;
}

console.log(`apps comprobadas en su HTML construido: ${checked}`);
if (pending.length) console.log(`pendientes de construir (${pending.length}): ${pending.join(', ')}`);
if (problems.length) {
	console.log(`\nPROBLEMAS (${problems.length}):`);
	for (const problem of problems) console.log('  ' + problem);
	process.exit(1);
}
console.log('OK: el JSON-LD parsea y los campos que la web justifica están en el schema.');
