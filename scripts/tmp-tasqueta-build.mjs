import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/la-tasqueta-de-cal-miguelin';
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
const NAME = 'La Tasqueta de Cal Miguelin';

// --- index.astro: líneas simples (primero las específicas, al final las globales) ---
sub('src/pages/index.astro', [
	['\treservationUrl,\n', ''],
	['\tmapsUrl,\n', '\tmapsUrl,\n\townerDescription,\n'],
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		`const title = '${NAME} · Restaurante en El Pla del Penedès';`,
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		`'${NAME}, restaurante en el Carrer Sants Abdón i Senen, 17, El Pla del Penedès (Barcelona). 4,3 sobre 5 con 1101 reseñas en Google Maps. Teléfono 938 98 84 42.'`,
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
		'La Tasqueta de Cal Miguelin, restaurante El Pla del Penedès, reservar mesa El Pla del Penedès, Carrer Sants Abdón i Senen',
	],
	['>LB<', '>TM<'],
	['Llamar a La Brasa <span>', 'Llamar a La Tasqueta <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Restaurante · El Pla del Penedès</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Restaurante en el <strong>Carrer Sants Abdón i Senen, 17</strong>, en El Pla del Penedès.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'El domingo cierra; de lunes a sábado abre de 7:00 a 17:00.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Lunes a sábado · domingo cerrado</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'{ownerDescription} Es la descripción que el propio titular publica en su ficha, copiada literalmente. La ficha no',
	],
	[
		'publica descripción del titular, carta ni precios, así que esta web no enumera\n\t\t\t\t\t\t\tplatos ni tarifas.',
		'publica carta ni precios: Google clasifica además el local únicamente como restaurante.',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en el <strong>Carrer Sants Abdón i Senen, 17</strong>, con código postal 08733,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en El Pla del Penedès, Barcelona. La ficha publica el plus code CP95+2V El Pla del Penedès',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'y las coordenadas 41.4175773, 1.7096256.',
	],
	[
		'En accesibilidad publica tres entradas, todas disponibles: acceso para sillas de',
		'En accesibilidad publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas',
	],
	[
		'ruedas, aseo adaptado y asientos adaptados. No publica ningún dato sobre\n\t\t\t\t\t\t\taparcamiento adaptado.',
		'de ruedas.',
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
	['Ctra. del Prat, 22,', 'Carrer Sants Abdón i Senen, 17,'],
	['<em>08940 Cornellà.</em>', '<em>08733 El Pla del Penedès.</em>'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Campeones de bocatas,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>y cocina casera.</em>',
	],
	['La Brasa Cornellà', NAME],
	['<small>Cornellà de Llobregat</small>', '<small>El Pla del Penedès</small>'],
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
		"const titulo = 'Aviso legal y privacidad | LA TASQUETA DE CAL MIGUELIN';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de LA TASQUETA DE CAL MIGUELIN, en el Carrer Sants Abdón i Senen, 17 de El Pla del Penedès.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a LA TASQUETA DE CAL MIGUELIN'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "la-tasqueta-de-cal-miguelin"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://la-tasqueta-de-cal-miguelin.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://la-tasqueta-de-cal-miguelin.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>TM<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* LA TASQUETA DE CAL MIGUELIN · Carrer Sants Abdón i Senen, 17 (08733 El Pla del Penedès)',
	],
]);

console.log('fase 1 OK');
