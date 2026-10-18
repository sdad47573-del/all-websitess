import { readFileSync, writeFileSync } from 'node:fs';

const app = 'apps/la-taverna-den-sile';
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
		s = s.replaceAll(oldS, newS);
	}
	write(path, s);
}

// --- index.astro ---
sub('src/pages/index.astro', [
	['\treservationUrl,\n', ''],
	[
		"const title = 'La Brasa Cornellà · Restaurante en Cornellà';",
		'const title = "La taverna d\'en Silè · Restaurante en Sant Pere de Riudebitlles";',
	],
	[
		"\t'La Brasa Cornellà, restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). 4,7 sobre 5 con 102 reseñas en Google Maps. Teléfono 933 77 52 71.';",
		'\t"La taverna d\'en Silè, restaurante y restaurante mediterráneo en el Carrer de l\'Hospital, 10, Sant Pere de Riudebitlles (Barcelona). 4,7 sobre 5 con 529 reseñas en Google Maps. Teléfono 653 30 90 00.";',
	],
	[
		"const altFoto = 'Fotografía publicada en la ficha de Google Maps de La Brasa Cornellà';",
		'const altFoto = "Fotografía publicada en la ficha de Google Maps de La taverna d\'en Silè";',
	],
	[
		"const altOg = 'Fotografía de La Brasa Cornellà publicada en su ficha de Google Maps';",
		'const altOg = "Fotografía de La taverna d\'en Silè publicada en su ficha de Google Maps";',
	],
	[
		'content="La Brasa Cornellà, restaurante Cornellà de Llobregat, reservar mesa Cornellà, Ctra. del Prat"',
		'content="La taverna d\'en Silè, restaurante Sant Pere de Riudebitlles, reservar mesa Sant Pere de Riudebitlles, Carrer de l\'Hospital"',
	],
	['>LB<', '>TS<'],
	['\t\t\t\t\tLa Brasa Cornellà\n', "\t\t\t\t\tLa taverna d'en Silè\n"],
	['<small>Cornellà de Llobregat</small>', '<small>Sant Pere de Riudebitlles</small>'],
	[
		'<p class="eyebrow">Restaurante · Cornellà de Llobregat</p>',
		'<p class="eyebrow">Restaurante · Sant Pere de Riudebitlles</p>',
	],
	['\t\t\t\t\t\t\tLa Brasa Cornellà,\n', "\t\t\t\t\t\t\tLa taverna d'en Silè,\n"],
	[
		'\t\t\t\t\t\t\tRestaurante en la <strong>Ctra. del Prat, 22</strong>, en Cornellà de Llobregat.\n\t\t\t\t\t\t\tGoogle le da <strong>{nota} sobre 5</strong> con {textoResenas}. El lunes cierra; de\n\t\t\t\t\t\t\tmartes a domingo abre con horario distinto cada día.',
		'\t\t\t\t\t\t\tRestaurante en el <strong>Carrer de l\'Hospital, 10</strong>, en Sant Pere de\n\t\t\t\t\t\t\tRiudebitlles. Google le da <strong>{nota} sobre 5</strong> con {textoResenas}.\n\t\t\t\t\t\t\tDomingo y lunes cierra; de martes a sábado abre con horario distinto cada día.',
	],
	[
		'\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\tclass="btn btn-solid"\n\t\t\t\t\t\t\t\t\thref={reservationUrl}\n\t\t\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\t\t\trel="noopener noreferrer"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tReservar una mesa <span aria-hidden="true">↗</span>\n\t\t\t\t\t\t\t\t</a>',
		'\t\t\t\t\t\t\t<a class="btn btn-solid" href={phoneHref}>\n\t\t\t\t\t\t\t\t\tLlamar al {business.phoneDisplay}\n\t\t\t\t\t\t\t\t</a>',
	],
	['aria-label="Datos rápidos de La Brasa Cornellà"', 'aria-label="Datos rápidos de La taverna d\'en Silè"'],
	[
		'<span>Martes a domingo · lunes cerrado</span>',
		'<span>Martes a sábado · domingo y lunes cerrado</span>',
	],
	[
		'\t\t\t\t\t\t\tUn restaurante,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>sin más etiquetas.</em>',
		'\t\t\t\t\t\t\tRestaurante\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>mediterráneo.</em>',
	],
	[
		'\t\t\t\t\t\t\tGoogle clasifica a La Brasa Cornellà con una sola etiqueta: restaurante. La ficha no\n\t\t\t\t\t\t\tpublica descripción del titular, carta ni precios, así que esta web no enumera\n\t\t\t\t\t\t\tplatos ni tarifas.',
		'\t\t\t\t\t\t\tGoogle clasifica a La taverna d\'en Silè como restaurante y restaurante\n\t\t\t\t\t\t\tmediterráneo. Las reseñas destacan el menú diario, la hamburguesa y el trato\n\t\t\t\t\t\t\tatento. La ficha no publica carta ni precios.',
	],
	[
		'\t\t\t\t\t\t\tEl local está en la <strong>Ctra. del Prat, 22</strong>, con código postal 08940,\n\t\t\t\t\t\t\ten Cornellà de Llobregat, Barcelona. La ficha publica el plus code 932G+JP Cornellà\n\t\t\t\t\t\t\tde Llobregat y las coordenadas 41.3515689, 2.0768554.',
		'\t\t\t\t\t\t\tEl local está en el <strong>Carrer de l\'Hospital, 10</strong>, con código postal\n\t\t\t\t\t\t\t08776, en Sant Pere de Riudebitlles, Barcelona. La ficha publica el plus code\n\t\t\t\t\t\t\tFP32+GR Sant Pere de Riudebitlles y las coordenadas 41.4538192, 1.7020927.',
	],
	[
		'\t\t\t\t\t\t\tLa ficha muestra además la acción <strong>«Reservar una mesa»</strong>, que enlaza\n\t\t\t\t\t\t\tal sistema de reservas de Google. Aquí se reproduce ese mismo enlace, junto con el\n\t\t\t\t\t\t\tteléfono del local. Esta web solo reúne lo que el propio negocio publica en Google\n\t\t\t\t\t\t\tMaps, consultada el {site.consultado}.',
		'\t\t\t\t\t\t\tLa ficha no muestra ningún sistema de reservas online: para reservar o preguntar\n\t\t\t\t\t\t\tpor la disponibilidad, lo más directo es llamar al local. Esta web solo reúne\n\t\t\t\t\t\t\tlo que el propio negocio publica en Google Maps, consultada el {site.consultado}.',
	],
	[
		'\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<dt>Lunes</dt>\n\t\t\t\t\t\t\t\t<dd>Cerrado</dd>\n\t\t\t\t\t\t\t</div>',
		'\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<dt>Lunes</dt>\n\t\t\t\t\t\t\t\t<dd>Cerrado</dd>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<dt>Domingo</dt>\n\t\t\t\t\t\t\t\t<dd>Cerrado</dd>\n\t\t\t\t\t\t\t</div>',
	],
	[
		'\t\t\t\t\t\t<a class="ficha-reserve" href={reservationUrl} target="_blank" rel="noopener noreferrer">\n\t\t\t\t\t\t\tReservar una mesa en Google ↗\n\t\t\t\t\t\t</a>',
		'\t\t\t\t\t\t<a class="ficha-reserve" href={phoneHref}>\n\t\t\t\t\t\t\t\tLlamar al {business.phoneDisplay}\n\t\t\t\t\t\t\t</a>',
	],
	[
		'\t\t\t\t\t\tSon las diez fotografías que La Brasa Cornellà publica en su ficha de Google Maps. El',
		'\t\t\t\t\t\tSon las diez fotografías que La taverna d\'en Silè publica en su ficha de Google Maps. El',
	],
	[
		'\t\t\t\t\t\t\tCtra. del Prat, 22,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>08940 Cornellà.</em>',
		'\t\t\t\t\t\t\tCarrer de l\'Hospital, 10,\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<em>08776 Sant Pere de Riudebitlles.</em>',
	],
	[
		'\t\t\t\t\t\t<a href={reservationUrl} target="_blank" rel="noopener noreferrer">\n\t\t\t\t\t\t\tReservar una mesa ↗\n\t\t\t\t\t\t</a>\n',
		'',
	],
	[
		'© {new Date().getFullYear()} La Brasa Cornellà · {business.streetAddress} ({business.postalCode}',
		'© {new Date().getFullYear()} La taverna d\'en Silè · {business.streetAddress} ({business.postalCode}',
	],
	['\t\t\t\t\t\tLa Brasa Cornellà\n', "\t\t\t\t\t\tLa taverna d'en Silè\n"],
	['Llamar a La Brasa <span>', 'Llamar a Silè <span>'],
]);

// --- aviso-legal.astro ---
sub('src/pages/aviso-legal.astro', [
	["const titulo = 'Aviso legal y privacidad | LA BRASA CORNELLÀ';", "const titulo = 'Aviso legal y privacidad | LA TAVERNA D\\'EN SILÈ';"],
	[
		"'Aviso legal, política de privacidad y política de cookies de LA BRASA CORNELLÀ, en la Ctra. del Prat, 22 de Cornellà de Llobregat.';",
		"'Aviso legal, política de privacidad y política de cookies de LA TAVERNA D\\'EN SILÈ, en el Carrer de l\\'Hospital, 10 de Sant Pere de Riudebitlles.';",
	],
	['&larr; Volver a LA BRASA CORNELLÀ', "&larr; Volver a LA TAVERNA D'EN SILÈ"],
]);

// --- archivos pequeños ---
sub('package.json', [['"name": "la-brasa-cornella"', '"name": "la-taverna-den-sile"']]);
sub('astro.config.mjs', [
	["site: 'https://la-brasa-cornella.vercel.app'", "site: 'https://la-taverna-den-sile.vercel.app'"],
]);
sub('public/robots.txt', [
	[
		'Sitemap: https://la-brasa-cornella.vercel.app/sitemap-index.xml',
		'Sitemap: https://la-taverna-den-sile.vercel.app/sitemap-index.xml',
	],
]);
sub('public/favicon.svg', [['>BRASA<', '>SILÈ<']]);

console.log('fase 1 OK');
