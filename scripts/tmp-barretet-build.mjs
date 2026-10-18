import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/restaurant-el-barretet';
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
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		"const title = 'Restaurant El Barretet · Restaurante en Castellet';",
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		"'Restaurant El Barretet, restaurante y restaurante mediterráneo en el Carrer Nou, 17, Castellet (Barcelona). 4,0 sobre 5 con 3130 reseñas en Google Maps. Teléfono 931 02 22 69.'",
	],
	[
		"'Fotografía publicada en la ficha de Google Maps de La Brasa Cornellà'",
		"'Fotografía publicada en la ficha de Google Maps de Restaurant El Barretet'",
	],
	[
		"'Fotografía de La Brasa Cornellà publicada en su ficha de Google Maps'",
		"'Fotografía de Restaurant El Barretet publicada en su ficha de Google Maps'",
	],
	[
		'La Brasa Cornellà, restaurante Cornellà de Llobregat, reservar mesa Cornellà, Ctra. del Prat',
		'Restaurant El Barretet, restaurante Castellet, reservar mesa Castellet, Carrer Nou',
	],
	['>LB<', '>BA<'],
	['Llamar a La Brasa <span>', 'Llamar a El Barretet <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Restaurante · Castellet</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Restaurante en el <strong>Carrer Nou, 17</strong>, en Castellet.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'El lunes cierra; de martes a jueves y el domingo abre de 10:00 a 17:00, y viernes y sábado hasta las 22:00.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Menos el lunes · consulta el horario</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'Google clasifica a Restaurant El Barretet como restaurante y restaurante mediterráneo, y muestra además el distintivo «Brunch». Las reseñas hablan de bocadillos a la brasa, paella y carnes. La ficha no',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en el <strong>Carrer Nou, 17</strong>, con código postal 08729,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en Castellet, Barcelona. La ficha publica el plus code 7J6M+XH Castellet',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'y las coordenadas 41.2624941, 1.6339087.',
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
		'por la disponibilidad, lo más directo es llamar al local. Esta web solo reúne',
	],
	[
		'teléfono del local. Esta web solo reúne lo que el propio negocio publica en Google',
		'lo que el propio negocio publica en Google',
	],
	[
		'Son las diez fotografías que La Brasa Cornellà publica en su ficha de Google Maps. El',
		'Son las diez fotografías que Restaurant El Barretet publica en su ficha de Google Maps. El',
	],
	['Ctra. del Prat, 22,', 'Carrer Nou, 17,'],
	['<em>08940 Cornellà.</em>', '<em>08729 Castellet.</em>'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Restaurante\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>mediterráneo.</em>',
	],
	['La Brasa Cornellà', 'Restaurant El Barretet'],
	['<small>Cornellà de Llobregat</small>', '<small>Castellet</small>'],
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
		"const titulo = 'Aviso legal y privacidad | RESTAURANT EL BARRETET';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de RESTAURANT EL BARRETET, en el Carrer Nou, 17 de Castellet.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a RESTAURANT EL BARRETET'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "restaurant-el-barretet"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://restaurant-el-barretet.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://restaurant-el-barretet.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>BA<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* RESTAURANT EL BARRETET · Carrer Nou, 17 (08729 Castellet)',
	],
]);

console.log('fase 1 OK');
