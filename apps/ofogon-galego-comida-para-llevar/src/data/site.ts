/**
 * Datos de Ofogón Galego Comida para llevar — Avenida Anita Martínez, 12,
 * 28918 Leganés (Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Ofogón Galego Comida para llevar»,
 *   40.3447721,-3.7729959, feature 0xd41893cabaab87f:0xd0b5658401a35aab.
 * - Nombre, dirección, categoría, teléfono, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 31 de octubre de 2026.
 * - Carta y precios: fotografías de la carta del propio local publicadas en
 *   su perfil (paellas, ofertas, croquetas, pizzas, empanadas y platos
 *   variados). La ficha no enlaza una web propia ni una carta oficial.
 *
 * La dirección del local aparece en su carta como «Avd. Anita Martínez, 12»;
 * Google la registra como «C. Anita Martínez, 12». Se usa la forma de la carta
 * y se menciona la de Google para que la ficha y la web coincidan.
 */

export const BUSINESS = {
	name: 'Ofogón Galego',
	fullName: 'Ofogón Galego Comida para llevar',
	shortName: 'Ofogón',
	mark: 'OG',
	street: 'Avenida Anita Martínez, 12',
	district: 'Leganés',
	city: 'Leganés',
	region: 'Comunidad de Madrid',
	postalCode: '28918',
	country: 'ES',
	siteUrl: 'https://ofogon-galego-comida-para-llevar.vercel.app',
	geo: { lat: 40.3447721, lng: -3.7729959 },
	featureId: '0xd41893cabaab87f:0xd0b5658401a35aab',
	placeId: 'ChIJf7iqqzyJQQ0Rq1qjAYRltdA',
	plusCode: '8CGR86VG+WR',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '652 83 81 43',
	phoneHref: 'tel:+34652838143',
	tagline: 'Comida gallega artesana para llevar en Leganés',
	description:
		'Ofogón Galego, en Avenida Anita Martínez, 12 (28918 Leganés, Madrid). Comida gallega artesana para llevar: arroz a banda, paellas, empanada gallega, croquetas caseras, pollo asado y pizzas por encargo. De miércoles a domingo, de 11:30 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ofog%C3%B3n+Galego+Comida+para+llevar/@40.3447721,-3.7729959,17z/data=!3m1!4b1!4m6!3m5!1s0xd41893cabaab87f:0xd0b5658401a35aab!8m2!3d40.3447721!4d-3.7729959!16s%2Fg%2F11mv636d5l?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3447721%2C-3.7729959',
	embed: 'https://maps.google.com/maps?q=40.3447721,-3.7729959&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3447721,-3.7729959',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 83,
	label: '4,7',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '11:30–16:00' },
	{ dia: 'Jueves', horas: '11:30–16:00' },
	{ dia: 'Viernes', horas: '11:30–16:00' },
	{ dia: 'Sábado', horas: '11:30–16:00' },
	{ dia: 'Domingo', horas: '11:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y la carta del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Comida artesana',
	'Paellas y arroces',
	'Pollo asado',
	'Croquetas caseras',
	'Empanada gallega',
	'Pizzas por encargo',
];

export const HIGHLIGHTS = [
	{
		title: 'Arroz a banda y paellas',
		text: 'La carta del local abre con diez arroces: arroz a banda (8,90 €), paella mixta (9,90 €), paella de marisco (10,95 €), arroz caldoso de pollo (9,95 €) o arroz negro (8,90 €), entre otros.',
	},
	{
		title: 'Croquetas caseras por encargo',
		text: 'Ración de diez unidades por 12,90 €. Hay de jamón ibérico, pollo, bacalao, champiñones, espinacas y queso de cabra, morcilla, berenjena, atún, chocolate, pera y Oreo con chocolate blanco.',
	},
	{
		title: 'Empanada gallega',
		text: 'Se hace por encargo en dos tamaños. Rellenos de atún, pollo barbacoa, zorza, ternera, bacón y dátiles, bacalao con pasas, pulpo, vegetal, chipirones con acelgas o manzana.',
	},
	{
		title: 'Pollo asado y ofertas',
		text: 'El pollo asado entero (1,2 kg aprox.) cuesta 10,90 € y el medio 5,90 €. Cuatro ofertas lo combinan con patatas, pimientos, croquetas, tortilla o empanadillas, entre 19,90 € y 23,90 €.',
	},
];

/**
 * Carta fotografiada en el perfil del local. Los precios son los de la
 * fotografía más reciente de cada bloque (octubre de 2026). Los platos
 * marcados «por encargo» conviene encargarlos con antelación.
 */
export const MENU = [
	{
		title: 'Paellas y arroces',
		items: [
			{ name: 'Paella de verduras', note: 'pimiento rojo, verde, brócoli, judías y zanahorias', price: '7,90 €' },
			{ name: 'Paella de verduras y pollo', note: 'verduras y contramuslos de pollo', price: '8,90 €' },
			{ name: 'Arroz a banda', note: 'gamba pelada y sepia', price: '8,90 €' },
			{ name: 'Paella mixta', note: 'sepia, pollo, langostinos, mejillones y almejas', price: '9,90 €' },
			{ name: 'Paella de marisco', note: 'sepia, langostinos, cigalas, mejillones y almejas', price: '10,95 €' },
			{ name: 'Arroz caldoso de pollo', note: 'pollo, mejillones, gamba pelada y sepia', price: '9,95 €' },
			{ name: 'Arroz con bogavante', note: 'bogavante (250 g por persona) y sepia; precio según mercado', price: 'S/M' },
			{ name: 'Arroz negro', note: 'gamba pelada, sepia y tinta de calamar', price: '8,90 €' },
			{ name: 'Fideuá mixta', note: 'sepia, pollo, mejillones y langostinos', price: '8,90 €' },
			{ name: 'Salsa ali-oli casera', note: 'para acompañar el arroz', price: '1,50 €' },
		],
	},
	{
		title: 'Ofertas y pollo asado',
		items: [
			{ name: 'Oferta n.º 1', note: 'pollo asado, patatas fritas y 4 croquetas caseras', price: '19,90 €' },
			{ name: 'Oferta n.º 2', note: 'pollo asado, ración de pimientos y patatas fritas', price: '20,90 €' },
			{ name: 'Oferta n.º 3', note: 'pollo asado, tortilla y pimientos', price: '21,90 €' },
			{ name: 'Oferta n.º 4', note: 'pollo asado, 4 empanadillas y patatas fritas', price: '23,90 €' },
			{ name: 'Pollo asado entero', note: '1,2 kg aproximados', price: '10,90 €' },
			{ name: 'Medio pollo asado', note: 'media pieza', price: '5,90 €' },
		],
	},
	{
		title: 'Croquetas caseras · por encargo',
		items: [
			{ name: 'Ración de 10 unidades', note: 'elige uno o varios sabores', price: '12,90 €' },
			{ name: 'Jamón ibérico', note: 'uno de los sabores de la casa' },
			{ name: 'Pollo', note: 'uno de los sabores de la casa' },
			{ name: 'Espinacas y queso de cabra', note: 'uno de los sabores de la casa' },
			{ name: 'Bacalao', note: 'uno de los sabores de la casa' },
			{ name: 'Jamón y queso', note: 'uno de los sabores de la casa' },
			{ name: 'Champiñones', note: ' mencionado en las reseñas de Google' },
			{ name: 'Morcilla y cebolla caramelizada', note: 'uno de los sabores de la casa' },
			{ name: 'Berenjena', note: 'uno de los sabores de la casa' },
			{ name: 'Atún', note: 'uno de los sabores de la casa' },
			{ name: 'Oreo y chocolate blanco', note: 'dulce, para terminar' },
			{ name: 'Chocolate', note: 'dulce, para terminar' },
			{ name: 'Pera', note: 'dulce, para terminar' },
		],
	},
	{
		title: 'Empanada gallega · por encargo',
		items: [
			{ name: 'Atún', note: 'pequeña 9,90 € · grande 13,50 €' },
			{ name: 'Pollo barbacoa', note: 'pequeña 9,90 € · grande 13,90 €' },
			{ name: 'Zorza (picadillo)', note: 'pequeña 11,90 € · grande 14,90 €' },
			{ name: 'Ternera', note: 'pequeña 12,50 € · grande 15,90 €' },
			{ name: 'Bacón y dátiles', note: 'pequeña 12,50 € · grande 15,90 €' },
			{ name: 'Bacalao con pasas', note: 'pequeña 14,90 € · grande 17,90 €' },
			{ name: 'Pulpo', note: 'pequeña 15,90 € · grande 19,90 €' },
			{ name: 'Vegetal', note: 'pequeña 10,90 € · grande 13,90 €' },
			{ name: 'Chipirones y acelgas', note: 'pequeña 14,90 € · grande 17,90 €' },
			{ name: 'Manzana', note: 'pequeña 10,90 € · grande 13,90 €' },
		],
	},
	{
		title: 'Pizzas · por encargo',
		items: [
			{ name: 'De pera', note: 'queso, tomate, pera, bacón y salchichas', price: '13,90 €' },
			{ name: 'Especial', note: 'queso, jamón, bacón, champiñón y cebolla', price: '14,90 €' },
			{ name: 'Jamón', note: 'queso, tomate, jamón, huevo y cebolla', price: '13,90 €' },
			{ name: 'Caprichosa', note: 'queso, tomate, jamón, bacón, champiñón y aceitunas', price: '13,90 €' },
			{ name: 'Vegetal', note: 'queso, tomate, pimiento rojo y verde, champiñón y cebolla', price: '13,50 €' },
			{ name: 'De pulpo a feira', note: 'queso, tomate, pulpo, patatas y pimentón picante', price: '18,90 €' },
			{ name: 'De calabaza', note: 'queso, tomate, queso azul y calabaza', price: '13,90 €' },
			{ name: 'De morcilla', note: 'queso, tomate, morcilla y cebolla caramelizada', price: '14,50 €' },
		],
	},
	{
		title: 'Platos variados y patatas',
		items: [
			{ name: 'Albóndigas con tomate', note: 'plato variado', price: '6,50 €' },
			{ name: 'Boquerones en vinagre', note: 'plato variado', price: '6,90 €' },
			{ name: 'Macarrones boloñesa', note: 'plato variado', price: '5,90 €' },
			{ name: 'Callos con garbanzos', note: 'plato variado', price: '6,50 €' },
			{ name: 'Oreja en salsa', note: 'plato variado', price: '6,50 €' },
			{ name: 'Codillo con repollo', note: 'plato variado', price: '10,90 €' },
			{ name: 'Ensaladilla rusa', note: 'plato variado', price: '5,90 €' },
			{ name: 'Patatas fritas', note: 'patatas y derivados', price: '4,90 €' },
			{ name: 'Patatas asadas', note: 'patatas y derivados', price: '5,90 €' },
			{ name: 'Patatas gajo', note: 'patatas y derivados', price: '4,90 €' },
			{ name: 'Patatas ali-oli', note: 'patatas y derivados', price: '4,50 €' },
			{ name: 'Patatas bravas', note: 'patatas y derivados', price: '6,90 €' },
			{ name: 'Tortilla con cebolla', note: 'tortilla jugosa con cebolla', price: '7,50 €' },
			{ name: 'Tortilla sin cebolla', note: 'tortilla de patata clásica', price: '7,50 €' },
		],
	},
];

/** Reseñas publicadas en la ficha y en su perfil público. */
export const RESENAS = [
	{
		texto: 'Muy ricas las croquetas, las tortillas son la leche, en general todo muy rico.',
		valor: 4,
	},
	{
		texto: 'Muy buena atención y la comida riquísima: empanada, tortilla, paella, excelente.',
		valor: 5,
	},
	{
		texto: 'También pedimos croquetas caseras de jamón y champiñones y las dos riquísimas.',
		valor: 5,
	},
	{
		texto: 'Comida espectacular. Hemos elegido para llevar el arroz abanda y las croquetas y ha sido todo un acierto. Sabroso y casero. Además, el personal muy amable.',
		valor: 5,
	},
	{
		texto: 'Para nosotros ha sido todo un descubrimiento en Leganés: comida casera para llevar, que además de estar deliciosa, el trato y el precio son geniales.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ofogón Galego?',
		a: 'En la Avenida Anita Martínez, 12, 28918 Leganés (Madrid). Google registra la dirección como «C. Anita Martínez, 12», pero la carta del propio local usa «Avd. Anita Martínez, 12». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a domingo, de 11:30 a 16:00, con el lunes y el martes cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida gallega artesana para llevar. La carta fotografiada en el local incluye paellas y arroces (arroz a banda, paella mixta, paella de marisco, arroz caldoso, arroz negro o fideuá), pollo asado, platos variados, patatas, croquetas caseras, empanada gallega y pizzas por encargo.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Los arroces van de 7,90 € a 10,95 € (el arroz con bogavante se cobra según mercado). El pollo asado entero cuesta 10,90 € y el medio 5,90 €; las ofertas que lo combinan van de 19,90 € a 23,90 €. Las croquetas (10 unidades) cuestan 12,90 €. Son los precios de la carta fotografiada; confírmalos al pedir.',
	},
	{
		q: '¿Hay que encargar las croquetas, la empanada o la pizza?',
		a: 'La carta las marca «por encargo», así que lo razonable es llamar con antelación y confirmar el sabor, el tamaño y la hora de recogida. En el caso de la empanada hay dos tamaños, pequeña y grande, con precios distintos según el relleno.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el nombre de la ficha es «Comida para llevar». La ficha no publica servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 652 83 81 43. No consta página web propia, red social, aplicación ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas acceso para silla de ruedas o ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 83 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian las croquetas, la tortilla, la empanada, el arroz a banda, el trato y la relación calidad-precio.',
	},
];
