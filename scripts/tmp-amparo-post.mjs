import { readFileSync, writeFileSync } from 'node:fs';

const N = (label, n) => console.log(label, '->', n, 'cambios');

let s = readFileSync('apps/amparo-aluche/src/pages/index.astro', 'utf8');
let n = 0;
const R = (a, b) => {
	const c = s.split(a).length - 1;
	if (!c) {
		console.log('MISS:', JSON.stringify(a.slice(0, 70)));
		process.exit(1);
	}
	n += c;
	s = s.split(a).join(b);
};

R("const title = 'Floristería Flor de Vivi · Flores en Madrid';", "const title = 'Floristería Amparo · Sucursal Aluche · Flores en Madrid';");
R(
	"'Floristería en la Calle de Granada, 42 (Retiro, Madrid). 4,9 sobre 5 con 159 reseñas en Google Maps. Teléfono 608 89 91 27.'",
	"'Floristería en la Av. de los Poblados, 58 (Latina, Madrid). 4,3 sobre 5 con 84 reseñas en Google Maps. Teléfono 631 94 14 00.'",
);
R(
	"'Flor de Vivi, floristería Madrid, flores Madrid, Retiro, Calle de Granada';",
	"'Amparo Aluche, floristería Madrid, flores Madrid, Latina, Aluche';",
);
R(
	"'Fotografía publicada en la ficha de Google Maps de Floristería Flor de Vivi, en Madrid'",
	"'Fotografía publicada en la ficha de Google Maps de Floristería Amparo · Sucursal Aluche, en Madrid'",
);
R(
	"'Fotografía de Floristería Flor de Vivi publicada en su ficha de Google Maps'",
	"'Fotografía de Floristería Amparo · Sucursal Aluche publicada en su ficha de Google Maps'",
);
R(
	`const galeria = [
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
];`,
	`const galeria = [
	'amparo-aluche-vertical-01.jpg',
	'amparo-aluche-apaisada-02.jpg',
	'amparo-aluche-vertical-03.jpg',
	'amparo-aluche-vertical-04.jpg',
	'amparo-aluche-apaisada-05.jpg',
	'amparo-aluche-apaisada-06.jpg',
	'amparo-aluche-apaisada-07.jpg',
	'amparo-aluche-apaisada-08.jpg',
	'amparo-aluche-vertical-09.jpg',
	'amparo-aluche-vertical-10.jpg',
];`,
);
R(
	` * Arriba va la apaisada (01), que es la que mejor resiste el recorte ancho del hueco
 * superior, y abajo dos verticales (03 y 04), con las proporciones por
 * defecto del repositorio (16/9 y 4/5).`,
	` * Arriba va la apaisada (02), que es la que mejor resiste el recorte ancho del hueco
 * superior, y abajo dos verticales (01 y 03), con las proporciones por
 * defecto del repositorio (16/9 y 4/5).`,
);
R(
	"{ name: 'flor-vivi-apaisada-01.jpg', clase: 'collage-item collage-item-a' }",
	"{ name: 'amparo-aluche-apaisada-02.jpg', clase: 'collage-item collage-item-a' }",
);
R(
	"{ name: 'flor-vivi-vertical-03.jpg', clase: 'collage-item collage-item-b' }",
	"{ name: 'amparo-aluche-vertical-01.jpg', clase: 'collage-item collage-item-b' }",
);
R(
	"{ name: 'flor-vivi-vertical-04.jpg', clase: 'collage-item collage-item-c' }",
	"{ name: 'amparo-aluche-vertical-03.jpg', clase: 'collage-item collage-item-c' }",
);
R('<p class="eyebrow">Madrid · Retiro · 28007</p>', '<p class="eyebrow">Madrid · Latina · 28044</p>');
R('Floristería Flor de Vivi,', 'Floristería Amparo,');
R('<em>en Madrid.</em>', '<em>en Aluche.</em>');
R(
	'Floristería Flor de Vivi está en la Calle de Granada, 42, con código postal',
	'Floristería Amparo está en la Av. de los Poblados, 58, con código postal',
);
R('28007, en Madrid.', '28044, en Madrid.');
R(
	'El <strong>lunes</strong> abre de 10:30 a 20:30; de <strong>martes a viernes</strong> abre de 9:30 a 20:30; el <strong>sábado</strong> abre de 10:00 a 14:30 y el <strong>domingo</strong> de 10:30 a 14:30.',
	'De <strong>lunes a sábado</strong> abre de 9:00 a 20:00 y el <strong>domingo</strong> de 9:00 a 15:00.',
);
R('>FV</span>', '>AM</span>');
R(
	`Floristería Flor de Vivi
					<small>Calle de Granada, 42 · Madrid</small>`,
	`Floristería Amparo · Aluche
					<small>Av. de los Poblados, 58 · Madrid</small>`,
);
R(
	`Está en la
							Calle de Granada, 42, con código postal
							28007, en Madrid, y la ficha publica su plus
							code
							C83F+7J Madrid.`,
	`Está en la Av. de los Poblados, 58, con código postal 28044, en Madrid.`,
);
R(
	'Su propia descripción en la ficha dice, literalmente: «Dinámica, Personalizada, Arte y Diseño», y aquí se reproduce tal cual, sin añadir nada. La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto.',
	'La ficha no publica descripción del titular, así que aquí no se reproduce ninguna. La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto.',
);
R(
	`el {site.consultado}: nombre, dirección, teléfono, categoría,
							valoración, la descripción del titular
						y sus propias fotografías. La
							ficha no publica calle, textos de reseñas, accesibilidad, web, catálogo ni precios, así que aquí no se
						reproducen.`,
	`el {site.consultado}: nombre, dirección, teléfono, categoría,
							valoración y sus propias fotografías. La
							ficha no publica descripción del titular, textos de reseñas, accesibilidad, web, catálogo ni precios, así que aquí no se
						reproducen.`,
);
R(
	'Son las diez fotografías que Floristería Flor de Vivi publica en su ficha de',
	'Son las diez fotografías que Floristería Amparo · Sucursal Aluche publica en su ficha de',
);
R('Calle de Granada, 42,', 'Av. de los Poblados, 58,');
R('<em>28007 Madrid.</em>', '<em>28044 Madrid.</em>');
R(
	'La tienda abre el <strong>lunes</strong> de 10:30 a 20:30; de <strong>martes a viernes</strong> de 9:30 a 20:30; el <strong>sábado</strong> abre de 10:00 a 14:30 y el <strong>domingo</strong> de 10:30 a 14:30.',
	'La tienda abre de <strong>lunes a sábado</strong> de 9:00 a 20:00 y el <strong>domingo</strong> de 9:00 a 15:00.',
);
R(
	`© {new Date().getFullYear()} Floristería Flor de Vivi · Calle de Granada, 42
					(28007 Madrid). Web informativa elaborada con los datos, la descripción y las fotografías que`,
	`© {new Date().getFullYear()} Floristería Amparo · Sucursal Aluche · Av. de los Poblados, 58
					(28044 Madrid). Web informativa elaborada con los datos y las fotografías que`,
);
R('Llamar a Flor de Vivi', 'Llamar a Amparo · Aluche');
N('index.astro', n);
writeFileSync('apps/amparo-aluche/src/pages/index.astro', s);
