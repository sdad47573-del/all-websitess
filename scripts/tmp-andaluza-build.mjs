import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/restaurante-bar-la-andaluza';
const read = (p) => readFileSync(`${app}/${p}`, 'utf8');
const write = (p, s) => writeFileSync(`${app}/${p}`, s);

function sub(path, pairs) {
	let s = read(path);
	for (const [oldS, newS] of pairs) {
		if (!s.includes(oldS)) {
			console.error(`NO MATCH in ${path}: ${JSON.stringify(oldS.slice(0, 80))}`);
			process.exitCode = 1;
			continue;
		}
		s = s.split(oldS).join(newS);
	}
	write(path, s);
}

function resub(path, pairs) {
	let s = read(path);
	for (const [re, newS] of pairs) {
		if (!re.test(s)) {
			console.error(`NO REGEX MATCH in ${path}: ${re.source.slice(0, 80)}`);
			process.exitCode = 1;
			continue;
		}
		s = s.replace(re, newS);
	}
	write(path, s);
}

const T7 = '\t'.repeat(7);
const T8 = '\t'.repeat(8);
const NAME = 'Restaurante Bar La Andaluza';

// --- index.astro: líneas simples (primero las específicas, al final las globales) ---
sub('src/pages/index.astro', [
	['\treservationUrl,\n', ''],
	['\tmapsUrl,\n', '\tmapsUrl,\n\townerDescription,\n'],
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		`const title = '${NAME} · Bar de tapas en Vilafranca';`,
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		`'${NAME}, bar de tapas en la Pza. Syrah, s/n, Vilafranca del Penedès (Barcelona). 4,3 sobre 5 con 233 reseñas en Google Maps. Teléfono 931 35 18 69.'`,
	],
	[
		"'Fotografía publicada en la ficha de Google Maps de La Brasa Cornellà'",
		`'Fotografía publicada en la ficha de Google Maps de ${NAME}'`,
	],
	[
		"'Fotografía de La Brasa Cornellà publicada en su ficha de Google Maps'",
		`'Fotografía de ${NAME} publicada en su ficha de Google Maps'`,
	],
	[
		'La Brasa Cornellà, restaurante Cornellà de Llobregat, reservar mesa Cornellà, Ctra. del Prat',
		'Restaurante Bar La Andaluza, bar de tapas Vilafranca del Penedès, reservar mesa Vilafranca, Pza. Syrah',
	],
	['>LB<', '>AN<'],
	['Llamar a La Brasa <span>', 'Llamar a La Andaluza <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Bar de tapas · Vilafranca del Penedès</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Bar de tapas en la <strong>Pza. Syrah, s/n</strong>, en Vilafranca del Penedès.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'El domingo cierra; de lunes a jueves abre de 6:00 a 23:00, el viernes hasta las 16:00 y el sábado de 9:00 a 16:00.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Menos el domingo · consulta el horario</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'{ownerDescription} Es la descripción que el propio titular publica en su ficha, copiada literalmente. La ficha no',
	],
	[
		'publica descripción del titular, carta ni precios, así que esta web no enumera\n\t\t\t\t\t\t\tplatos ni tarifas.',
		'publica carta ni precios: Google clasifica además el local como bar de tapas y fábrica de cerveza.',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en la <strong>Pza. Syrah, s/n</strong> (al lado del hotel Basic), con código postal 08734,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en Vilafranca del Penedès, Barcelona. La ficha publica el plus code 8MMM+35 Vilafranca del Penedès',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'y las coordenadas 41.332639, 1.6829313.',
	],
	[
		'La ficha muestra además la acción <strong>«Reservar una mesa»</strong>, que enlaza',
		'La ficha no muestra ningún sistema de reservas online: para reservar o preguntar',
	],
	[
		'al sistema de reservas de Google. Aquí se reproduce ese mismo enlace, junto con el',
		'por la disponibilidad, lo más directo es llamar al local. Además muestra el distintivo «Se admiten perros». Esta web solo reúne',
	],
	[
		'teléfono del local. Esta web solo reúne lo que el propio negocio publica en Google',
		'lo que el propio negocio publica en Google',
	],
	['<dt>Lunes</dt>', '<dt>Domingo</dt>'],
	[
		'Son las diez fotografías que La Brasa Cornellà publica en su ficha de Google Maps. El',
		`Son las diez fotografías que ${NAME} publica en su ficha de Google Maps. El`,
	],
	['Ctra. del Prat, 22,', 'Pza. Syrah, s/n,'],
	['<em>08940 Cornellà.</em>', '<em>08734 Vilafranca.</em>'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Bar de tapas\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>y cerveza.</em>',
	],
	['La Brasa Cornellà', NAME],
	['<small>Cornellà de Llobregat</small>', '<small>Vilafranca del Penedès</small>'],
]);

// --- index.astro: bloques multilínea con regex ---
resub('src/pages/index.astro', [
	[
		/<a\s+class="btn btn-solid"\s+href=\{reservationUrl\}\s+target="_blank"\s+rel="noopener noreferrer"\s*>\s*Reservar una mesa <span aria-hidden="true">↗<\/span>\s*<\/a>/,
		'<a class="btn btn-solid" href={phoneHref}>\n' + T8 + 'Llamar al {business.phoneDisplay}\n' + T7 + '</a>',
	],
	[
		/\s*<a class="ficha-reserve" href=\{reservationUrl\} target="_blank" rel="noopener noreferrer">\s*Reservar una mesa en Google ↗\s*<\/a>/,
		'\n' + T7 + '<a class="ficha-reserve" href={phoneHref}>\n' + T8 + '\tLlamar al {business.phoneDisplay}\n' + T7 + '</a>',
	],
	[
		/\s*<a href=\{reservationUrl\} target="_blank" rel="noopener noreferrer">\s*Reservar una mesa ↗\s*<\/a>\n/,
		'\n',
	],
]);

// --- aviso-legal.astro ---
sub('src/pages/aviso-legal.astro', [
	[
		"const titulo = 'Aviso legal y privacidad | LA BRASA CORNELLÀ';",
		"const titulo = 'Aviso legal y privacidad | RESTAURANTE BAR LA ANDALUZA';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de RESTAURANTE BAR LA ANDALUZA, en la Pza. Syrah, s/n de Vilafranca del Penedès.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a RESTAURANTE BAR LA ANDALUZA'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "restaurante-bar-la-andaluza"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://restaurante-bar-la-andaluza.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://restaurante-bar-la-andaluza.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>AN<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* RESTAURANTE BAR LA ANDALUZA · Pza. Syrah, s/n (08734 Vilafranca del Penedès)',
	],
]);

console.log('fase 1 OK');
