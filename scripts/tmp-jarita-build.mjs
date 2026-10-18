import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/restaurante-by-jarita';
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
const NAME = 'Restaurante By Jarita | Cornellà de Llobregat';

// --- index.astro: líneas simples (primero las específicas, al final las globales) ---
sub('src/pages/index.astro', [
	['\treservationUrl,\n', ''],
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		"const title = 'Restaurante By Jarita · Bar restaurante en Cornellà';",
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		"'Restaurante By Jarita | Cornellà de Llobregat, bar restaurante en el Carrer de la Miranda, 72, Cornellà de Llobregat (Barcelona). 4,4 sobre 5 con 1001 reseñas en Google Maps. Teléfono 629 13 75 92.'",
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
		'Restaurante By Jarita, bar restaurante Cornellà de Llobregat, reservar mesa Cornellà, Carrer de la Miranda',
	],
	['>LB<', '>BJ<'],
	['Llamar a La Brasa <span>', 'Llamar a By Jarita <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Bar restaurante · Cornellà de Llobregat</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Bar restaurante en el <strong>Carrer de la Miranda, 72</strong>, en Cornellà de Llobregat.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'El lunes cierra; de martes a jueves y el domingo abre de 13:00 a 16:00, y viernes y sábado abre también por la noche.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Menos el lunes · consulta el horario</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'Google clasifica a Restaurante By Jarita como bar restaurante, restaurante mediterráneo y restaurante de tapas. Las reseñas destacan las croquetas, el queso y las bravas. La ficha no',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en el <strong>Carrer de la Miranda, 72</strong>, con código postal 08940,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 935H+QW Cornellà',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'de Llobregat y las coordenadas 41.3594246, 2.0798435.',
	],
	[
		'En accesibilidad publica tres entradas, todas disponibles: acceso para sillas de',
		'En accesibilidad publica cuatro entradas, todas disponibles: acceso, aseo, asientos y aparcamiento adaptados para sillas',
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
		`Son las diez fotografías que ${NAME} publica en su ficha de Google Maps. El`,
	],
	['Ctra. del Prat, 22,', 'Carrer de la Miranda, 72,'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Bar restaurante\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>y tapas.</em>',
	],
	['La Brasa Cornellà', NAME],
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
		"const titulo = 'Aviso legal y privacidad | RESTAURANTE BY JARITA';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de RESTAURANTE BY JARITA, en el Carrer de la Miranda, 72 de Cornellà de Llobregat.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a RESTAURANTE BY JARITA'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "restaurante-by-jarita"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://restaurante-by-jarita.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://restaurante-by-jarita.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>BJ<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* RESTAURANTE BY JARITA · Carrer de la Miranda, 72 (08940 Cornellà de Llobregat)',
	],
]);

console.log('fase 1 OK');
