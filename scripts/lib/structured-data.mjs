/**
 * Detección de los datos estructurados (JSON-LD) de las webs de negocios (`apps/*`).
 *
 * Lo usan `scripts/audit-structured-data.mjs` (para decir qué falta y qué se puede rellenar)
 * y `scripts/check-structured-data.mjs` (para comprobarlo en el HTML construido). Vive aquí
 * para que las dos partes apliquen exactamente las mismas reglas.
 *
 * Criterio: solo se da por «rellenable» un campo cuando la propia web publica el dato. No se
 * deduce nada de la ficha de Google ni de terceros.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/** Días en español a los nombres que espera schema.org. */
export const DAYS = {
	Lunes: 'Monday',
	Martes: 'Tuesday',
	Miércoles: 'Wednesday',
	Jueves: 'Thursday',
	Viernes: 'Friday',
	Sábado: 'Saturday',
	Domingo: 'Sunday',
};

/** Tipos de negocio de comida, donde existen los campos de horario y reserva. */
const FOOD = [
	'Restaurant',
	'BarOrPub',
	'CafeOrCoffeeShop',
	'Bakery',
	'FastFoodRestaurant',
	'FoodEstablishment',
	'IceCreamShop',
	'PizzaRestaurant',
	'Pub',
];

/** Tipos que son piezas anidadas del schema, no la entidad del negocio. */
const NESTED = [
	'PostalAddress',
	'GeoCoordinates',
	'OpeningHoursSpecification',
	'AggregateRating',
	'PropertyValue',
	'Question',
	'Answer',
	'FAQPage',
	'City',
	'AdministrativeArea',
	'LocationFeatureSpecification',
	'Country',
	'Language',
];

/** Adjetivos de cocina admitidos y cómo los publica cada web. */
const CUISINES = [
	['Española', /cocina\s+espa[ñn]ola|\btapas\b|cocina\s+casera/i],
	['Mediterránea', /cocina\s+mediterr[áa]nea/i],
	['Valenciana', /cocina\s+valenciana|arroz(es)?\s+(valenciano|seco|meloso)|\bpaella\b/i],
	['Andaluza', /cocina\s+andaluza/i],
	['Italiana', /\bcocina\s+italiana\b|\bpizzer[íi]a\b|\bpizza artesana\b|\bpasta fresca\b/i],
	['Japonesa', /\bsushi\b|cocina\s+japonesa/i],
	['China', /cocina\s+china|restaurante\s+chino/i],
	['India', /cocina\s+india|\btandoori\b|\bcurry\b/i],
	['Marroquí', /cocina\s+marroqu[íi]|\btajine\b|\bcusc[úu]s\b/i],
	['Mexicana', /cocina\s+mexicana|\btacos\b|\bburritos\b/i],
	['Argentina', /cocina\s+argentina|parrilla\s+argentina|\bempanadas\b/i],
	['Gallega', /cocina\s+gallega|pulpo\s+a\s+la\s+gallega/i],
	['Asiática', /cocina\s+asi[áa]tica/i],
	['De mercado', /cocina\s+de\s+mercado/i],
];

/** «12:00–16:30 · 20:30–23:00» → [['12:00','16:30'], ['20:30','23:00']] */
export const services = (value) =>
	value
		.split('·')
		.map((chunk) => chunk.trim())
		.map((chunk) => chunk.split(/[–-]/).map((t) => t.trim()))
		.filter((pair) => pair.length === 2 && /^\d{1,2}:\d{2}$/.test(pair[0]) && /^\d{1,2}:\d{2}$/.test(pair[1]))
		.map(([opens, closes]) => [opens.padStart(5, '0'), closes.padStart(5, '0')]);

const walk = (dir) => {
	let out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) out = out.concat(walk(p));
		else if (/\.(astro|ts|tsx|js|jsx)$/.test(entry.name)) out.push(p);
	}
	return out;
};

/** Todas las apps con web publicada. */
export const webApps = (appsDir = 'apps') =>
	readdirSync(appsDir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.filter((app) => existsSync(join(appsDir, app, 'src/pages/index.astro')));

/** Ficha de una app: qué campos tiene ya y qué dato publica para los que faltan. */
export function analyzeApp(app, appsDir = 'apps') {
	const files = walk(join(appsDir, app, 'src'));
	const all = files.map((p) => readFileSync(p, 'utf8')).join('\n');
	const hasJsonLd = /LocalSeo/.test(all) || /application\/ld\+json/.test(all);

	const types = [...new Set([...all.matchAll(/'@type':\s*'([A-Za-z]+)'/g)].map((m) => m[1]))].filter(
		(t) => !NESTED.includes(t),
	);
	const isFood = types.some((t) => FOOD.includes(t));

	const dayHours = [...all.matchAll(/\{\s*day:\s*'([^']+)',\s*hours:\s*'([^']+)'/g)].map((m) => [m[1], m[2]]);
	const dayValue = [...all.matchAll(/\{\s*day:\s*'([^']+)',\s*value:\s*'([^']+)'/g)].map((m) => [m[1], m[2]]);
	const hoursRows = dayHours.length ? dayHours : dayValue;

	const ratingValue = (all.match(/\brating:\s*([\d.]+)/) || all.match(/ratingValue:\s*([\d.]+)/) || [])[1] ?? null;
	const reviews = (all.match(/\breviewsCount:\s*(\d+)/) || all.match(/\breviewCount:\s*(\d+)/) || [])[1] ?? null;
	const social = [...new Set([...all.matchAll(/(?:instagramUrl|facebookUrl)\s*=\s*'([^']+)'/g)].map((m) => m[1]))];
	const cuisines = CUISINES.filter(([, re]) => re.test(all)).map(([name]) => name);

	return {
		app,
		types,
		isFood,
		hasJsonLd,
		hours: /openingHoursSpecification/.test(all),
		hoursData: hoursRows.some(([, v]) => /\d{1,2}:\d{2}/.test(v)) ? hoursRows : null,
		rating: /aggregateRating/.test(all),
		// `rating: 0` es el marcador de «no hay nota publicada»: no es dato.
		ratingData:
			ratingValue && reviews && Number(ratingValue) > 0 && Number(reviews) > 0
				? { value: Number(ratingValue), count: Number(reviews) }
				: null,
		cuisine: /servesCuisine/.test(all),
		cuisines,
		reservations: /acceptsReservations/.test(all),
		reservationPhrase:
			/(llamar? para reservar|reserva(?:r)? por tel[ée]fono|ll[aá]ma(?:nos)? para reservar|para reservar,? llama)/i.test(
				all,
			),
		sameAs: /sameAs/.test(all),
		social,
		image: /(\bimage:|'image')/.test(all),
		ogPng: existsSync(join(appsDir, app, 'public/og.png')),
	};
}

/** Campos que faltan y se pueden rellenar con lo que la web ya publica. */
export function neededFields(row) {
	const add = [];
	if (!row.hasJsonLd) add.push({ field: 'faltaJSONLD', value: true });
	if (!row.hours && row.hoursData) add.push({ field: 'openingHoursSpecification', value: row.hoursData });
	if (!row.rating && row.ratingData) add.push({ field: 'aggregateRating', value: row.ratingData });
	if (!row.sameAs && row.social.length) add.push({ field: 'sameAs', value: row.social });
	if (!row.reservations && row.reservationPhrase && row.isFood) {
		add.push({ field: 'acceptsReservations', value: true });
	}
	if (!row.cuisine && row.cuisines.length && row.isFood) add.push({ field: 'servesCuisine', value: row.cuisines });
	return add;
}
