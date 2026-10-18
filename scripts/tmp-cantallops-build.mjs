import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/restaurant-cantallops';
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

// --- index.astro: líneas simples (primero las específicas, al final las globales) ---
sub('src/pages/index.astro', [
	['\treservationUrl,\n', ''],
	['\tmapsUrl,\n', '\tmapsUrl,\n\townerDescription,\n'],
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		"const title = 'Restaurant Cantallops · Cocina catalana en Cantallops';",
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		"'Restaurant Cantallops, restaurante de cocina catalana en el Carrer Sta. Margarida, 34, Cantallops (Barcelona). 4,3 sobre 5 con 488 reseñas en Google Maps. Teléfono 938 97 01 85.'",
	],
	[
		"'Fotografía publicada en la ficha de Google Maps de La Brasa Cornellà'",
		"'Fotografía publicada en la ficha de Google Maps de Restaurant Cantallops'",
	],
	[
		"'Fotografía de La Brasa Cornellà publicada en su ficha de Google Maps'",
		"'Fotografía de Restaurant Cantallops publicada en su ficha de Google Maps'",
	],
	[
		'La Brasa Cornellà, restaurante Cornellà de Llobregat, reservar mesa Cornellà, Ctra. del Prat',
		'Restaurant Cantallops, cocina catalana Cantallops, reservar mesa Cantallops, Carrer Sta. Margarida',
	],
	['>LB<', '>CA<'],
	['Llamar a La Brasa <span>', 'Llamar a Cantallops <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Restaurante de cocina catalana · Cantallops</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Restaurante de cocina catalana en el <strong>Carrer Sta. Margarida, 34</strong>, en Cantallops.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'El lunes cierra; de martes a domingo abre de 9:00 a 20:00.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Menos el lunes · consulta el horario</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'{ownerDescription} Es la descripción que el propio titular publica en su ficha, copiada literalmente. La ficha no',
	],
	[
		'publica descripción del titular, carta ni precios, así que esta web no enumera\n\t\t\t\t\t\t\tplatos ni tarifas.',
		'publica carta ni precios: Google clasifica además el local únicamente como restaurante de cocina catalana.',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en el <strong>Carrer Sta. Margarida, 34</strong>, con código postal 08793,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en Cantallops, Barcelona. La ficha publica el plus code 9Q9X+6F Cantallops',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'y las coordenadas 41.3680512, 1.7987402.',
	],
	[
		'La ficha muestra además la acción <strong>«Reservar una mesa»</strong>, que enlaza',
		'La ficha no muestra ningún sistema de reservas online: para reservar o preguntar',
	],
	[
		'al sistema de reservas de Google. Aquí se reproduce ese mismo enlace, junto con el',
		'por la disponibilidad, lo más directo es llamar al local. Además muestra el distintivo «Brunch». Esta web solo reúne',
	],
	[
		'teléfono del local. Esta web solo reúne lo que el propio negocio publica en Google',
		'lo que el propio negocio publica en Google',
	],
	[
		'Son las diez fotografías que La Brasa Cornellà publica en su ficha de Google Maps. El',
		'Son las diez fotografías que Restaurant Cantallops publica en su ficha de Google Maps. El',
	],
	['Ctra. del Prat, 22,', 'Carrer Sta. Margarida, 34,'],
	['<em>08940 Cornellà.</em>', '<em>08793 Cantallops.</em>'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Cocina catalana,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>entre viñedos.</em>',
	],
	['La Brasa Cornellà', 'Restaurant Cantallops'],
	['<small>Cornellà de Llobregat</small>', '<small>Cantallops</small>'],
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
		"const titulo = 'Aviso legal y privacidad | RESTAURANT CANTALLOPS';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de RESTAURANT CANTALLOPS, en el Carrer Sta. Margarida, 34 de Cantallops.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a RESTAURANT CANTALLOPS'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "restaurant-cantallops"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://restaurant-cantallops.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://restaurant-cantallops.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>CA<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* RESTAURANT CANTALLOPS · Carrer Sta. Margarida, 34 (08793 Cantallops)',
	],
]);

console.log('fase 1 OK');
