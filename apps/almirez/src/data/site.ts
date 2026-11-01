/**
 * Datos de ALMIREZ, COMIDA TRADICIONAL PARA LLEVAR — C. Margarita Xirgu, 4,
 * bajo A, Teatinos-Universidad, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Almirez, Comida Tradicional Para Llevar»,
 *   feature 0xd72f71705186dd1:0x8cd6747ab60dbff8.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta, precios, página web propia, redes sociales
 * ni reparto a domicilio. La web no inventa esos datos: lo que cuenta sale de la
 * ficha, de su categoría y de sus reseñas.
 */

export const BUSINESS = {
	name: 'Almirez',
	fullName: 'ALMIREZ, COMIDA TRADICIONAL PARA LLEVAR',
	shortName: 'Almirez',
	mark: 'A',
	street: 'C. Margarita Xirgu, 4, bajo A',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://almirez.vercel.app',
	geo: { lat: 36.7211669, lng: -4.4753877 },
	featureId: '0xd72f71705186dd1:0x8cd6747ab60dbff8',
	placeId: 'ChIJ0W0YBRf3cg0R-L8Ntnp01ow',
	plusCode: '8C8QPGCF+FR',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '644 67 80 99',
	phoneHref: 'tel:+34644678099',
	tagline: 'Comida tradicional para llevar en Teatinos',
	description:
		'Almirez, en C. Margarita Xirgu, 4, bajo A (Teatinos, 29010 Málaga). Comida tradicional para llevar: guisos, bacalao con tomate, espinacas con garbanzos y gazpacho.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Almirez,+Comida+Tradicional+Para+Llevar/@36.7218918,-4.4731396,17z/data=!4m6!3m5!1s0xd72f71705186dd1:0x8cd6747ab60dbff8!8m2!3d36.7218918!4d-4.4731396!16s%2Fg%2F11j68fl0pg?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7211669%2C-4.4753877',
	embed: 'https://maps.google.com/maps?q=36.7211669,-4.4753877&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7211669,-4.4753877',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 87,
	label: '4,6',
};

/** Horario de la ficha: mediodía de lunes a domingo, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que nombran la categoría y las reseñas. */
export const SERVICIOS = [
	'Comida tradicional',
	'Guisos',
	'Bacalao con tomate',
	'Espinacas con garbanzos',
	'Gazpacho',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Los guisos de siempre',
		text: 'La ficha la clasifica como establecimiento de comida preparada. Una reseña lo resume: «Pedí varias raciones y gazpacho y todo buenísimo, saben lo que hacen».',
	},
	{
		title: 'Bacalao con tomate',
		text: '«Hemos probado bacalao con tomate y las espinacas con garbanzos», cuenta otra de las reseñas de cinco estrellas. Es la cocina tradicional que sale del obrador.',
	},
	{
		title: 'Raciones para casa',
		text: 'El local trabaja para llevar: se piden raciones y se comen en casa. «Buen sitio, buen trato y buena comida», resume la tercera reseña.',
	},
	{
		title: 'A mediodía, en Teatinos',
		text: 'Está en el número 4 de Margarita Xirgu, en Teatinos-Universidad. Abre de 10:00 a 15:30 de lunes a domingo y descansa el martes.',
	},
];

/** Solo lo que nombran la categoría y las reseñas; sin precios inventados. */
export const MENU = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Bacalao con tomate',
				note: '«hemos probado bacalao con tomate», según una reseña',
			},
			{
				name: 'Espinacas con garbanzos',
				note: 'la misma reseña las cita junto al bacalao',
			},
			{
				name: 'Gazpacho',
				note: '«pedí varias raciones y gazpacho y todo buenísimo», dice otra reseña',
			},
			{
				name: 'Guisos tradicionales',
				note: 'la ficha la clasifica como establecimiento de comida preparada',
			},
		],
	},
	{
		title: 'Para llevar',
		items: [
			{
				name: 'Raciones',
				note: 'el formato que nombran las reseñas; la ficha no publica la carta ni los precios',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Pedí varias raciones y gazpacho y todo buenísimo, saben lo que hacen.',
		valor: 5,
	},
	{
		texto: 'Buen sitio buen trato y buena comida,lo recomiendo.',
		valor: 5,
	},
	{
		texto: 'Hemos probado bacalao con tomate y las espinacas con garbanzos.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Almirez?',
		a: 'En la calle Margarita Xirgu, 4, bajo A, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas de la ficha (36.7211669, -4.4753877) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 10:00 a 15:30 de lunes a domingo, con el martes cerrado. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida tradicional preparada para llevar: guisos, bacalao con tomate, espinacas con garbanzos, gazpacho y raciones. La ficha no publica la carta completa ni los precios, así que la disponibilidad se consulta por teléfono.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Google la clasifica como establecimiento de comida preparada y el nombre del local indica «para llevar». No consta servicio de mesa ni terraza: la comida se pide para casa.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no lo indica. El canal publicado es el teléfono, el 644 67 80 99; no consta página web ni pedidos online, así que cualquier reparto se confirma llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No consta. La ficha de Google no incluye carta ni precios; hay que preguntar por teléfono o en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no aparcamiento adaptado. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,6 sobre 5 con 87 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones que muestra son de cinco estrellas y elogian los guisos, el trato y el bacalao con tomate.',
	},
];
