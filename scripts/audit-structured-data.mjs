/**
 * Audit de datos estructurados (JSON-LD) de las webs de negocios (`apps/*`).
 *
 * Mide, app por app, qué campos del schema faltan y —lo importante— si la web tiene el dato
 * para rellenarlos sin inventar nada: horario en su tabla de horas, nota y reseñas en sus
 * datos, perfiles sociales enlazados, frase de reserva por teléfono. Las reglas de detección
 * están en `scripts/lib/structured-data.mjs`, compartidas con el comprobador.
 *
 * Escribe el plan en `scripts/seo-structured-data-plan.json`, que consume
 * `scripts/apply-seo-structured-data.mjs`. Solo informa: no toca ninguna app.
 *
 * Ojo con las cifras: una app que usa el componente compartido `LocalSeo` no lleva el
 * `application/ld+json` en su código, pero sí lo emite en el HTML (el componente lo pinta a
 * partir de la prop `schemas`). Por eso aquí no se cuenta el código, sino el dato disponible.
 *
 *   node scripts/audit-structured-data.mjs
 *   node scripts/apply-seo-structured-data.mjs    aplica lo que se pueda aplicar solo
 *   node scripts/check-structured-data.mjs        comprueba el HTML construido
 */

import { writeFileSync } from 'node:fs';
import { analyzeApp, neededFields, webApps } from './lib/structured-data.mjs';

const PLAN_PATH = 'scripts/seo-structured-data-plan.json';

const rows = webApps().map((app) => analyzeApp(app));
const count = (fn) => rows.filter(fn).length;

console.log(`apps con web: ${rows.length}`);
console.log(`sin JSON-LD: ${count((r) => !r.hasJsonLd)}`);
console.log(`sin openingHoursSpecification y con horas publicadas: ${count((r) => !r.hours && r.hoursData)}`);
console.log(`sin aggregateRating y con nota+reseñas:              ${count((r) => !r.rating && r.ratingData)}`);
console.log(`sin servesCuisine y con cocina identificada:         ${count((r) => !r.cuisine && r.cuisines.length && r.isFood)}`);
console.log(`sin acceptsReservations y con reserva por teléfono:  ${count((r) => !r.reservations && r.reservationPhrase && r.isFood)}`);
console.log(`sin sameAs y con perfiles sociales enlazados:        ${count((r) => !r.sameAs && r.social.length)}`);
console.log(`sin image en el schema:                              ${count((r) => !r.image && r.ogPng)}`);

const plan = [];
for (const row of rows) {
	const add = neededFields(row);
	if (add.length) plan.push({ app: row.app, types: row.types, add });
}

writeFileSync(PLAN_PATH, `${JSON.stringify(plan, null, 2)}\n`);
console.log(
	`\nplan escrito en ${PLAN_PATH}: ${plan.length} apps, ${plan.reduce((total, p) => total + p.add.length, 0)} campos`,
);
if (plan.length) {
	console.log('  ' + plan.map((p) => `${p.app}(${p.add.map((a) => a.field).join(',')})`).join('\n  '));
}
