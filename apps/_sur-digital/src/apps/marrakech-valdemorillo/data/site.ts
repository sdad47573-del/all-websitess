/**
 * Datos de Marrakech — Cafetería, Elaboración y Venta de Comida Casera Para
 * Llevar — C. la Fuente, 12, 28210 Valdemorillo, Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Cafetería, Elaboración y Venta de Comida
 *   Casera Para Llevar Marrakech», 40.500738,-4.0678087,
 *   feature 0xd419f8d7fb8bd51:0x2e9dcc3f1cff1699.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, reseñas y
 *   descripción: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta con precios, página web, redes sociales,
 * reparto a domicilio, pedidos online ni datos de accesibilidad.
 */

export const BUSINESS = {
	name: 'Marrakech',
	fullName: 'Cafetería, Elaboración y Venta de Comida Casera Para Llevar Marrakech',
	shortName: 'Marrakech',
	mark: 'M',
	street: 'C. la Fuente, 12',
	city: 'Valdemorillo',
	region: 'Comunidad de Madrid',
	postalCode: '28210',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/marrakech-valdemorillo',
	geo: { lat: 40.500738, lng: -4.0678087 },
	featureId: '0xd419f8d7fb8bd51:0x2e9dcc3f1cff1699',
	placeId: 'ChIJUb24f42fQQ0RmRb_HD_MnS4',
	plusCode: '8CGQGW2J+7V',
	googleCategory: 'Restaurante marroquí y cafetería',
	phone: '611 53 32 40',
	phoneHref: 'tel:+34611533240',
	tagline: 'Comida casera marroquí en Valdemorillo',
	description:
		'Marrakech, cafetería y elaboración de comida casera marroquí en C. la Fuente, 12 (Valdemorillo, 28210 Madrid). Para comer allí o para llevar, con raciones abundantes y dulces caseros.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cafeter%C3%ADa,+Elaboraci%C3%B3n+y+Venta+de+Comida+Casera+Para+Llevar+Marrakech/@40.500738,-4.0678087,17z/data=!4m6!3m5!1s0xd419f8d7fb8bd51:0x2e9dcc3f1cff1699!8m2!3d40.500738!4d-4.0678087!16s%2Fg%2F11t9nt2cz1?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJUb24f42fQQ0RmRb_HD_MnS4&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.500738%2C-4.0678087',
	embed: 'https://maps.google.com/maps?q=40.500738,-4.0678087&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.500738,-4.0678087',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 46,
	label: '4,7',
};

/**
 * Horario de la ficha: dos turnos, con el miércoles algo distinto (abre a las
 * 10:00 y el segundo turno empieza a las 18:00).
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:30–17:00 · 19:00–24:00' },
	{ dia: 'Martes', horas: '9:30–17:00 · 19:00–24:00' },
	{ dia: 'Miércoles', horas: '10:00–17:00 · 18:00–24:00' },
	{ dia: 'Jueves', horas: '9:30–17:00 · 19:00–24:00' },
	{ dia: 'Viernes', horas: '9:30–17:00 · 19:00–24:00' },
	{ dia: 'Sábado', horas: '10:00–17:00 · 19:00–24:00' },
	{ dia: 'Domingo', horas: '10:00–17:00 · 19:00–24:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = [
	'Comida casera',
	'Cocina marroquí',
	'Cafetería',
	'Para comer allí',
	'Para llevar',
	'Dulces caseros',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina marroquí y casera',
		text: 'La ficha lo clasifica como restaurante marroquí y cafetería, y se describe como «elaboración de comida casera para comer ahí y para llevar».',
	},
	{
		title: 'Raciones abundantes',
		text: '«Comida variada y exquisita, abundante en las raciones», dice una de las reseñas de cinco estrellas. Otra habla de «buena cantidad y buen precio».',
	},
	{
		title: 'Pedidos puntuales',
		text: '«Puntuales en el pedido y los dulces riquísimos», cuenta otra reseña. La ficha no publica encargos ni pedidos online: se concretan por teléfono.',
	},
	{
		title: 'Para comer allí o llevar',
		text: 'La descripción de la ficha lo deja claro: la comida se puede comer en el local o llevarse. Los dos turnos del día cubren mediodía y noche.',
	},
];

/**
 * Carta impresa del local, fotografiada en la ficha («Marrakech Kebab», con
 * la dirección y el teléfono). Los precios son los de esa carta y pueden
 * cambiar; no hay carta publicada en la ficha.
 */
export const MENU = [
	{
		title: 'Kebab y dürum',
		items: [
			{ name: 'Döner kebab', price: '3,50 €', note: 'solo, sin menú' },
			{ name: 'Döner doble', price: '4,50 €', note: 'doble ración de carne' },
			{ name: 'Döner solo carne', price: '3,50 €', note: 'sin verduras' },
			{ name: 'Döner vegetal', price: '3,00 €', note: 'versión sin carne' },
			{ name: 'Menú kebab', price: '6,00 €', note: 'con patatas y bebida' },
			{ name: 'Dürum', price: '5,00 €', note: 'tortilla de trigo con kebab y verduras' },
			{ name: 'Menú dürum', price: '7,50 €', note: 'con patatas y bebida' },
		],
	},
	{
		title: 'Tacos y bocadillos',
		items: [
			{ name: 'Tacos de pollo', price: '5,00 €', note: 'tortilla de maíz' },
			{ name: 'Tacos de ternera', price: '5,00 €', note: 'tortilla de maíz' },
			{ name: 'Tacos mixtos', price: '5,00 €', note: 'pollo y ternera' },
			{ name: 'Tacos doble', price: '6,50 €', note: 'doble ración' },
			{ name: 'Menú tacos', price: '7,50 €', note: 'con patatas y bebida' },
			{ name: 'Bocadillo de pollo', price: '4,00 €', note: 'en la carta del local' },
			{ name: 'Bocadillo de carne picada', price: '5,00 €', note: 'en la carta del local' },
			{ name: 'Bocadillo de atún', price: '3,00 €', note: 'en la carta del local' },
		],
	},
	{
		title: 'Hamburguesas y platos',
		items: [
			{ name: 'Menú hamburguesa', price: '7,00 €', note: 'con patatas y bebida' },
			{ name: 'Hamburguesa de ternera + patatas', price: '5,00 €', note: 'sin menú' },
			{ name: 'Hamburguesa de pollo + patatas', price: '5,00 €', note: 'sin menú' },
			{ name: 'Plato kebab', price: '7,50 €', note: 'con patatas y ensalada' },
			{
				name: 'Plato kebab con picotitos de pollo',
				price: '7,50 €',
				note: 'la otra combinación de plato',
			},
			{ name: 'Alitas 5U + patatas + bebida', price: '6,50 €', note: 'combo' },
			{ name: 'Nuggets de pollo + patatas + bebida', price: '6,50 €', note: 'combo' },
		],
	},
	{
		title: 'Cocina marroquí y dulces',
		items: [
			{
				name: 'Cuscús con pollo y verduras',
				note: 'en las fotos del local; sin precio en la carta impresa',
			},
			{
				name: 'Garbanzos con verduras y carne',
				note: 'en las fotos del local, servido en fuente de barro',
			},
			{ name: 'Dulces caseros', note: '«los dulces riquísimos», dice una reseña' },
			{ name: 'Té con hierbabuena', note: 'en las fotos del local, en teteras de plata' },
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Comida variada y exquisita, abundante en las raciones.',
		valor: 5,
	},
	{
		texto: 'Son majos, la comida esta buenísima, buena cantidad y buen precio!',
		valor: 5,
	},
	{
		texto: 'Puntuales en el pedido y los dulces riquísimos.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Marrakech?',
		a: 'En la calle la Fuente, 12, Valdemorillo, 28210 Madrid. El mapa de esta página abre las coordenadas exactas (40.500738, -4.0678087) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos: de 9:30 a 17:00 y de 19:00 a 24:00 de lunes, martes, jueves y viernes; el miércoles de 10:00 a 17:00 y de 18:00 a 24:00; y el fin de semana de 10:00 a 17:00 y de 19:00 a 24:00. El domingo 1 de noviembre avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera marroquí, para comer allí o para llevar, y dulces caseros. La ficha no publica la carta ni los precios, así que los platos concretos se consultan por teléfono o en el local.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí. La descripción de la ficha dice «comida casera para comer ahí y para llevar», y la ficha está clasificada como restaurante marroquí y cafetería.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'Una reseña habla de ser «puntuales en el pedido», pero la ficha no publica un sistema de encargos ni mínimos. Se consulta por teléfono, en el 611 53 32 40.',
	},
	{
		q: '¿Hay reparto a domicilio o pedidos online?',
		a: 'La ficha no publica reparto a domicilio, página web ni pedidos online. El único canal que aparece es el teléfono, el 611 53 32 40, así que la recogida y cualquier reparto se confirman llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La carta impresa del local marca el kebab a 3,50 €, el menú kebab a 6,00 €, los tacos a 5,00 €, el menú de tacos a 7,50 €, el dürum a 5,00 €, el bocadillo de pollo a 4,00 € y la hamburguesa con patatas a 5,00 €. Son los precios de la carta fotografiada en la ficha y pueden cambiar; se confirman por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,7 sobre 5 con 46 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones que muestra son de cinco estrellas y elogian la variedad, las raciones, el precio, la puntualidad y los dulces.',
	},
];
