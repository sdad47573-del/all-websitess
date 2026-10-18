import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/restaurante-pizzeria-montevideo-despi';
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
		"const title = 'Restaurante Pizzería Montevideo Despí · Restaurante uruguayo en Sant Joan Despí';",
	],
	[
		"'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.'",
		"'Restaurante Pizzería Montevideo Despí, restaurante uruguayo en el Carrer Major, 75, Sant Joan Despí (Barcelona). 4,3 sobre 5 con 1152 reseñas en Google Maps. Teléfono 932 53 81 57.'",
	],
	[
		"'Fotografía publicada en la ficha de Google Maps de La Brasa Cornellà'",
		"'Fotografía publicada en la ficha de Google Maps de Restaurante Pizzería Montevideo Despí'",
	],
	[
		"'Fotografía de La Brasa Cornellà publicada en su ficha de Google Maps'",
		"'Fotografía de Restaurante Pizzería Montevideo Despí publicada en su ficha de Google Maps'",
	],
	[
		'La Brasa Cornellà, restaurante Cornellà de Llobregat, reservar mesa Cornellà, Ctra. del Prat',
		'Restaurante Pizzería Montevideo Despí, restaurante uruguayo Sant Joan Despí, reservar mesa Sant Joan Despí, Carrer Major',
	],
	['>LB<', '>MO<'],
	['Llamar a La Brasa <span>', 'Llamar a Montevideo <span>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Restaurante uruguayo · Sant Joan Despí</p>',
	],
	[
		'Restaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.',
		'Restaurante uruguayo en el <strong>Carrer Major, 75</strong>, en Sant Joan Despí.',
	],
	[
		'El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'De lunes a viernes abre hasta las 24:00; el sábado también, y el domingo de 8:30 a 17:00.',
	],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Todos los días · consulta el horario</span>',
	],
	[
		'Google clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no',
		'Google clasifica a Restaurante Pizzería Montevideo Despí como restaurante uruguayo y restaurante. Las reseñas destacan las milanesas, la pizza Montevideo y el pollo rebozado. La ficha no',
	],
	[
		'El local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,',
		'El local está en el <strong>Carrer Major, 75</strong>, con código postal 08970,',
	],
	[
		'en Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà',
		'en Sant Joan Despí, Barcelona. La ficha publica el plus code 9392+6Q Sant Joan Despí',
	],
	[
		'de Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'y las coordenadas 41.3681044, 2.0519395.',
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
	[
		'Son las diez fotografías que La Brasa Cornellà publica en su ficha de Google Maps. El',
		'Son las diez fotografías que Restaurante Pizzería Montevideo Despí publica en su ficha de Google Maps. El',
	],
	['Ctra. del Prat, 22,', 'Carrer Major, 75,'],
	['<em>08940 Cornellà.</em>', '<em>08970 Sant Joan Despí.</em>'],
	[
		'Un restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'Restaurante\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>uruguayo.</em>',
	],
	['La Brasa Cornellà', 'Restaurante Pizzería Montevideo Despí'],
	['<small>Cornellà de Llobregat</small>', '<small>Sant Joan Despí</small>'],
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
	[
		/\s*<div>\s*<dt>Lunes<\/dt>\s*<dd>Cerrado<\/dd>\s*<\/div>/,
		'',
	],
]);

// --- aviso-legal.astro ---
sub('src/pages/aviso-legal.astro', [
	[
		"const titulo = 'Aviso legal y privacidad | LA BRASA CORNELLÀ';",
		"const titulo = 'Aviso legal y privacidad | RESTAURANTE PIZZERÍA MONTEVIDEO DESPÍ';",
	],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de RESTAURANTE PIZZERÍA MONTEVIDEO DESPÍ, en el Carrer Major, 75 de Sant Joan Despí.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', '&larr; Volver a RESTAURANTE PIZZERÍA MONTEVIDEO DESPÍ'],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "restaurante-pizzeria-montevideo-despi"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://restaurante-pizzeria-montevideo-despi.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://restaurante-pizzeria-montevideo-despi.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>MO<']]);
sub('src/styles/global.css', [
	[
		'/* LA BRASA CORNELLÀ · Ctra. del Prat, 22 (08940 Cornellà de Llobregat)',
		'/* RESTAURANTE PIZZERÍA MONTEVIDEO DESPÍ · Carrer Major, 75 (08970 Sant Joan Despí)',
	],
]);

console.log('fase 1 OK');
