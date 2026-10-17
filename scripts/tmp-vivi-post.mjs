import { readFileSync, writeFileSync } from 'node:fs';

const P = 'apps/flor-vivi/src/pages/index.astro';
let s = readFileSync(P, 'utf8').replaceAll('\r\n', '\n');

const R = (oldS, newS) => {
	if (!s.includes(oldS)) {
		console.log('MISS:', JSON.stringify(oldS.slice(0, 80)));
		return;
	}
	s = s.replaceAll(oldS, newS);
};

R("const title = 'Floristería Baraka · Flores en Madrid';", "const title = 'Floristería Flor de Vivi · Flores en Madrid';");
R(
	"'Floristería en el distrito de Latina, 28011 Madrid (Puerta del Ángel). 4,9 sobre 5 con 125 reseñas en Google Maps. Teléfono 657 80 86 14.';",
	"'Floristería en la Calle de Granada, 42 (Retiro, Madrid). 4,9 sobre 5 con 159 reseñas en Google Maps. Teléfono 608 89 91 27.';",
);
R(
	"'Baraka, floristería Madrid, flores Madrid, flores a domicilio, Puerta del Ángel, Latina';",
	"'Flor de Vivi, floristería Madrid, flores Madrid, Retiro, Calle de Granada';",
);
R(
	"const altFoto = 'Fotografía publicada en la ficha de Google Maps de Floristería Baraka, en Madrid';",
	"const altFoto = 'Fotografía publicada en la ficha de Google Maps de Floristería Flor de Vivi, en Madrid';",
);
R(
	"const altOg = 'Fotografía de Floristería Baraka publicada en su ficha de Google Maps';",
	"const altOg = 'Fotografía de Floristería Flor de Vivi publicada en su ficha de Google Maps';",
);
const gal = [
	'flor-vivi-apaisada-01.jpg',
	'flor-vivi-vertical-02.jpg',
	'flor-vivi-vertical-03.jpg',
	'flor-vivi-vertical-04.jpg',
	'flor-vivi-vista-5-05.jpg',
	'flor-vivi-vertical-06.jpg',
	'flor-vivi-vertical-07.jpg',
	'flor-vivi-vertical-08.jpg',
	'flor-vivi-vista-9-09.jpg',
	'flor-vivi-vista-10-10.jpg',
];
const oldGal = [
	'baraka-vertical-01.jpg',
	'baraka-vertical-02.jpg',
	'baraka-apaisada-03.jpg',
	'baraka-vertical-04.jpg',
	'baraka-vertical-05.jpg',
	'baraka-vertical-06.jpg',
	'baraka-vertical-07.jpg',
	'baraka-vertical-08.jpg',
	'baraka-apaisada-09.jpg',
	'baraka-apaisada-10.jpg',
];
for (let n = 0; n < 10; n++) R(`'${oldGal[n]}'`, `'${gal[n]}'`);
R(
	` * Arriba va la apaisada (03), que es la que mejor resiste el recorte ancho del hueco
 * superior, y abajo dos verticales (01 y 02), con las proporciones por
 * defecto del repositorio (16/9 y 4/5).`,
	` * Arriba va la apaisada (01), que es la que mejor resiste el recorte ancho del hueco
 * superior, y abajo dos verticales (03 y 04), con las proporciones por
 * defecto del repositorio (16/9 y 4/5).`,
);
R('>BA<', '>FV<');
R('Floristería Baraka', 'Floristería Flor de Vivi');
R('Baraka', 'Flor de Vivi');
R('Flor de ViviFlor de Vivi', 'Flor de Vivi');
R('Distrito de Latina · Madrid', 'Calle de Granada, 42 · Madrid');
R('Madrid · Latina · 28011', 'Madrid · Retiro · 28007');
R(
	`{textoResenas}. El <strong>lunes</strong> cierra; de <strong>martes a domingo</strong> abre todos los días (el sábado hasta las 24:00). Conviene confirmar por teléfono antes de ir.`,
	`{textoResenas}. El <strong>lunes</strong> abre de 10:30 a 20:30; de <strong>martes a viernes</strong> abre de 9:30 a 20:30; el <strong>sábado</strong> abre de 10:00 a 14:30 y el <strong>domingo</strong> de 10:30 a 14:30. Conviene confirmar por teléfono antes de ir.`,
);
R('Distrito de Latina, con código postal', 'Calle de Granada, 42, con código postal');
R('28011, en Madrid, y la ficha publica su plus', '28007, en Madrid, y la ficha publica su plus');
R('C75C+VM Madrid.', 'C83F+7J Madrid.');
R('Son las diez fotografías que Floristería Baraka publica en su ficha de', 'Son las diez fotografías que Floristería Flor de Vivi publica en su ficha de');
R('Distrito de Latina,', 'Calle de Granada, 42,');
R('<em>28011 Madrid.</em>', '<em>28007 Madrid.</em>');
R(
	'La tienda cierra el <strong>lunes</strong>. El <strong>martes</strong> abre de 10:00 a 19:30; el <strong>miércoles</strong> de 11:00 a 13:00 y de 17:30 a 22:00; el <strong>jueves</strong> de 15:00 a 21:00; el <strong>viernes</strong> de 10:30 a 21:00; el <strong>sábado</strong> de 10:30 a 24:00; y el <strong>domingo</strong> de 0:00 a 10:00 y de 10:30 a 13:00. Conviene confirmar',
	'La tienda abre el <strong>lunes</strong> de 10:30 a 20:30; de <strong>martes a viernes</strong> de 9:30 a 20:30; el <strong>sábado</strong> abre de 10:00 a 14:30 y el <strong>domingo</strong> de 10:30 a 14:30. Conviene confirmar',
);
R('Llamar a Floristería Baraka', 'Llamar a Flor de Vivi');

writeFileSync(P, s.replaceAll('\n', '\r\n'));
console.log('OK bytes:', s.length);
