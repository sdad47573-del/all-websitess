/**
 * Añade el JSON-LD del negocio a las apps que no emiten ninguno.
 *
 * El resto del catálogo ya lo lleva: o lo pinta el componente compartido `LocalSeo`, o lo
 * declara la propia web. Las 71 que faltan son las landings más simples, donde todo el dato vive
 * en `src/pages/index.astro` (`name`, `mapsUrl`, canonical, `tel:`…).
 *
 * Solo se escribe lo que la web ya publica:
 *
 *  - `name`, `url` y `description` de la propia plantilla;
 *  - `geo` y `hasMap` a partir de la URL de Google Maps que la web enlaza;
 *  - `telephone` si hay un enlace `tel:`;
 *  - `address` solo cuando la web declara calle y localidad (si no, se omite);
 *  - `image` si existe `public/og.jpg` (o png/webp), que es la que ya anuncia Open Graph;
 *  - `openingHoursSpecification`, `aggregateRating` y `servesCuisine` cuando la web publica el
 *    dato, con las mismas reglas que `scripts/lib/structured-data.mjs`.
 *
 * No inventa dirección, teléfono ni horario: una ficha sin calle se queda sin `address`, que es
 * peor para un resultado enriquecido pero nunca es un dato falso.
 *
 * Es idempotente: si la app ya emite `application/ld+json` o usa `LocalSeo`, no se toca.
 *
 * Uso:
 *   node scripts/apply-jsonld-business.mjs --dry            enseña lo que escribiría
 *   node scripts/apply-jsonld-business.mjs                  lo aplica
 *   node scripts/apply-jsonld-business.mjs --dry wok-house  solo esa app
 *   node scripts/check-structured-data.mjs                  comprueba el HTML construido
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { analyzeApp, DAYS, services } from './lib/structured-data.mjs';

const dry = process.argv.includes('--dry');
const only = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));
const PLAN = 'scripts/seo-structured-data-plan.json';
const APPS_DIR = 'apps';

/** Negocios de comida: ahí Google espera `Restaurant` para los resultados enriquecidos. */
const FOOD =
	/restaurante|restaurant|pizzer|pizza|bar\b|\bbar\b|cafeter|caf[eé]\b|asador|pollo|wok|kebab|sushi|ramen|tapas|panader|pasteler|churrer|helader|burger|burguer|comida|food|gastro|bodega|taberna|marisqu|d[oö]ner|arepa|taco|bocater|almuerzo|desayuno|croqueta|cervecer|vinos?\b/i;

const walk = (dir) => {
	let out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const file = join(dir, entry.name);
		if (entry.isDirectory()) out = out.concat(walk(file));
		else if (/\.(astro|ts|tsx|js|jsx)$/.test(entry.name)) out.push(file);
	}
	return out;
};

const text = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');

/** Primer valor de una `const`/propiedad string en el código de la web. */
const field = (source, keys) => {
	for (const key of keys) {
		const match = source.match(new RegExp(`\\b${key}\\s*[:=]\\s*['"\`]([^'"\`]+)['"\`]`));
		if (match) return match[1].trim();
	}
	return null;
};

const unescape = (value) => value.replace(/\\'/g, "'").replace(/\\"/g, '"');

/** Coordenadas que la web ya enlaza en su URL de Google Maps. */
const coordinates = (mapsUrl) => {
	const at = mapsUrl?.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
	if (at) return { latitude: Number(at[1]), longitude: Number(at[2]) };
	const pins = mapsUrl?.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
	if (pins) return { latitude: Number(pins[1]), longitude: Number(pins[2]) };
	return null;
};

/** `tel:+34747416322` → `+34747416322`; un teléfono escrito con espacios, tal cual. */
const telephone = (source) => {
	const tel = source.match(/tel:(\+?[\d\s.-]{9,})/);
	if (tel) return tel[1].replace(/[\s.-]/g, '');
	const phone = field(source, ['phone', 'telephone']);
	return phone ? phone.replace(/[\s.-]/g, '') : null;
};

const escapeHtmlJson = (value) => JSON.stringify(value, null, '\t').replace(/</g, '\\u003c');

/** Nombre de reserva cuando la web no declara el negocio en sus datos: el de la carpeta. */
const titleCase = (app) => {
	const text = app.replace(/^_/, '').replace(/-/g, ' ');
	return text.charAt(0).toUpperCase() + text.slice(1);
};

/** Indentación de la línea donde se va a insertar el bloque. */
const indentOf = (line) => line.match(/^[\t ]*/)[0];

const apps = readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((app) => only.length === 0 || only.includes(app))
	.filter((app) => existsSync(join(APPS_DIR, app, 'src/pages/index.astro'))); /**
 * Apps que no emiten JSON-LD: es la lista que se va a revisar.
 *
 * Se toma del plan porque es el que ya sabe qué webs no tienen schema, pero si el plan está
 * recién regenerado (ya no lista esas apps) o no existe, se detecta aquí. Sin esta salida, el
 * script se quedaría en «0 apps» después de un `audit-structured-data.mjs` y parecería que no
 * hay nada que hacer.
 */
const plan = existsSync(PLAN) ? JSON.parse(readFileSync(PLAN, 'utf8')) : [];
let target = new Set(
	plan
		.filter((entry) => entry.add.some((add) => add.field === 'faltaJSONLD'))
		.map((entry) => entry.app),
);
if (target.size === 0 && only.length === 0) {
	target = new Set(
		apps.filter((app) => {
			if (!existsSync(join(APPS_DIR, app, 'src/pages/index.astro'))) return false;
			return !analyzeApp(app).hasJsonLd;
		}),
	);
}

const results = [];

for (const app of apps) {
	const srcDir = join(APPS_DIR, app, 'src');
	const files = walk(srcDir);
	const all = files.map((file) => text(file)).join('\n');

	if (/application\/ld\+json/.test(all) || /\bLocalSeo\b/.test(all)) {
		if (target.has(app)) results.push({ app, status: 'ya emitía JSON-LD (plan desactualizado)' });
		continue;
	}
	if (!target.has(app) && only.length === 0) continue;

	// La home primero: el `</head>` de `aviso-legal.astro` también vale, pero el schema del
	// negocio tiene que ir en la página que compite en Google, no en la legal.
	const home = join(srcDir, 'pages/index.astro');
	const headFile = /<\/head>/.test(text(home))
		? home
		: files.find((file) => /<\/head>/.test(text(file)));
	if (!headFile) {
		results.push({ app, status: 'sin </head> donde insertar' });
		continue;
	}

	const source = text(headFile);
	// Los datos del negocio se leen solo del frontmatter y de los ficheros de datos, nunca del
	// marcado: en el HTML `name="viewport"` encaja con un patrón de «name: valor» y acababa
	// escribiendo el negocio como «viewport» en el schema.
	const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
	const dataText = [
		frontmatter,
		...files.filter((file) => /\.(ts|js)$/.test(file)).map((file) => text(file)),
	].join('\n');

	const META_NAMES =
		/^(viewport|description|keywords|robots|author|theme-color|generator|og:.*|twitter:.*)$/i;
	const extractedName = unescape(field(dataText, ['name', 'fullName']) ?? '');
	const name = extractedName && !META_NAMES.test(extractedName) ? extractedName : titleCase(app);
	const description = unescape(field(dataText, ['description', 'descripcion']) ?? '');
	const canonical =
		source.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] ??
		source.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1] ??
		field(source, ['siteUrl']) ??
		`https://${app}.vercel.app/`;
	const url = canonical.endsWith('/') ? canonical : `${canonical}/`;
	const mapsUrl = all.match(/https:\/\/www\.google\.com\/maps\/[^'"\s)\\]+/)?.[0] ?? null;
	const geo = coordinates(mapsUrl);
	const phone = telephone(all);
	const street = field(source, ['street', 'streetAddress']);
	const city = field(source, ['city', 'addressLocality']);
	const region = field(source, ['region', 'addressRegion']);
	const postalCode = field(source, ['postalCode']);
	const country = field(source, ['country']) ?? 'ES';

	const row = analyzeApp(app);
	const isFood = FOOD.test(`${name} ${description} ${app}`);

	const schema = {
		'@context': 'https://schema.org',
		'@type': isFood ? 'Restaurant' : 'LocalBusiness',
		'@id': `${url}#negocio`,
		name,
		url,
	};
	if (description) schema.description = description;

	const ogAsset = ['og.jpg', 'og.jpeg', 'og.png', 'og.webp'].find((file) =>
		existsSync(join(APPS_DIR, app, 'public', file)),
	);
	if (ogAsset) schema.image = `${url}${ogAsset}`;

	if (phone) schema.telephone = phone;

	if (street) {
		schema.address = {
			'@type': 'PostalAddress',
			streetAddress: street,
			...(city ? { addressLocality: city } : {}),
			...(region ? { addressRegion: region } : {}),
			...(postalCode ? { postalCode } : {}),
			addressCountry: country,
		};
	}

	if (geo) schema.geo = { '@type': 'GeoCoordinates', ...geo };
	if (mapsUrl) schema.hasMap = mapsUrl;

	const social = row.social ?? [];
	if (social.length) schema.sameAs = social;

	if (isFood && row.cuisines?.length) schema.servesCuisine = row.cuisines;

	if (isFood && row.reservationPhrase) schema.acceptsReservations = true;

	if (row.hoursData?.length) {
		const buckets = new Map();
		for (const [day, value] of row.hoursData) {
			const dayName = DAYS[day];
			if (!dayName || /^cerrado$/i.test(value.trim())) continue;
			for (const [index, tramo] of services(value).entries()) {
				const key = `${index}|${tramo.join('|')}`;
				if (!buckets.has(key)) buckets.set(key, { opens: tramo[0], closes: tramo[1], days: [] });
				buckets.get(key).days.push(dayName);
			}
		}
		if (buckets.size) {
			schema.openingHoursSpecification = [...buckets.values()].map((slot) => ({
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: slot.days,
				opens: slot.opens,
				closes: slot.closes,
			}));
		}
	}

	if (row.ratingData) {
		schema.aggregateRating = {
			'@type': 'AggregateRating',
			ratingValue: row.ratingData.value,
			reviewCount: row.ratingData.count,
		};
	}

	const block = `<script type="application/ld+json">\n${escapeHtmlJson(schema)}\n</script>`;
	const head = source.slice(0, source.lastIndexOf('</head>'));
	const tail = source.slice(source.lastIndexOf('</head>'));
	const lineIndent = indentOf(tail);
	const indented = block
		.split('\n')
		.map((line) => `${lineIndent}${line}`)
		.join('\n');
	const next = `${head}${indented}\n${tail}`;

	if (!dry) writeFileSync(headFile, next);
	results.push({
		app,
		status: dry ? 'a escribir' : 'escrito',
		file: headFile.split('\\').join('/'),
		type: schema['@type'],
		fields: Object.keys(schema).filter(
			(key) => !key.startsWith('@') && key !== 'name' && key !== 'url',
		),
	});
}

for (const result of results) {
	console.log(
		`${result.app.padEnd(42)} ${result.status}` +
			(result.type ? ` · ${result.type}` : '') +
			(result.fields ? ` · ${result.fields.join(', ')}` : ''),
	);
}
const written = results.filter(
	(result) => result.status === 'escrito' || result.status === 'a escribir',
).length;
console.log(
	`\n${dry ? '[dry] ' : ''}${written} app(s) ${dry ? 'por escribir' : 'escritas'} de ${results.length} revisadas`,
);
