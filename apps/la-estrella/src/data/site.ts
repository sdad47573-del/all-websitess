/**
 * Datos de ASADOR DE POLLOS LA ESTRELLA — C. San Jacinto, 34, 41010 Sevilla
 * (Triana).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador de Pollos La Estrella»,
 *   37.384002,-6.0048165, feature 0xd126c6b486f1d75:0x8b549611d9a8848d.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción propia, carta, precios, página web,
 * redes sociales ni reparto a domicilio. La web no inventa esos datos: lo que
 * cuenta sale de la ficha, de sus reseñas y de sus fotos.
 */

export const BUSINESS = {
	name: 'Asador de Pollos La Estrella',
	fullName: 'ASADOR DE POLLOS LA ESTRELLA',
	shortName: 'La Estrella',
	mark: 'LE',
	street: 'C. San Jacinto, 34',
	district: 'Triana',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41010',
	country: 'ES',
	siteUrl: 'https://la-estrella.vercel.app',
	geo: { lat: 37.384002, lng: -6.0048165 },
	featureId: '0xd126c6b486f1d75:0x8b549611d9a8848d',
	placeId: 'ChIJdR1vSGtsEg0RjYSo2RGWVIs',
	plusCode: '8C9M9XMW+J3',
	googleCategory: 'Pollería',
	phone: '954 34 06 66',
	phoneHref: 'tel:+34954340666',
	tagline: 'Pollo asado en pleno Triana',
	description:
		'Asador de Pollos La Estrella, en C. San Jacinto, 34 (Triana, 41010 Sevilla). Pollo asado, tortillas, aliños, patatas y ensaladilla, con 4,5 sobre 5 en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos+La+Estrella/@37.384002,-6.0048165,17z/data=!4m6!3m5!1s0xd126c6b486f1d75:0x8b549611d9a8848d!8m2!3d37.384002!4d-6.0048165!16s%2Fg%2F11c3vqmp_5?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.384002%2C-6.0048165',
	embed: 'https://maps.google.com/maps?q=37.384002,-6.0048165&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.384002,-6.0048165',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 244,
	label: '4,5',
};

/** Horario de la ficha: mediodía casi toda la semana y cenas viernes y sábado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:00' },
	{ dia: 'Martes', horas: '12:30–16:00' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '12:30–16:00' },
	{ dia: 'Viernes', horas: '12:30–16:00 · 20:00–23:00' },
	{ dia: 'Sábado', horas: '12:00–16:00 · 20:00–23:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que nombran las reseñas y la categoría de la ficha. */
export const SERVICIOS = [
	'Pollo asado',
	'Tortillas',
	'Aliños',
	'Patatas fritas',
	'Ensaladilla',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'La ficha lo clasifica como pollería y las reseñas lo confirman: «Pollos sabrosos y muy ricos». Es el centro de la mesa y lo que da nombre al asador.',
	},
	{
		title: 'Las raciones',
		text: '«Las raciones eran generosas y las patatas fritas, deliciosas», cuenta una de las reseñas de cinco estrellas. En Triana, ración grande es lo que se espera.',
	},
	{
		title: 'Tortillas, aliños y patatas',
		text: 'Otra reseña enumera lo que acompaña al pollo: «Tienen tortillas, aliños, patatas y demás». Son los acompañamientos que salen de esta casa.',
	},
	{
		title: 'En pleno Triana',
		text: 'Está en el número 34 de la calle San Jacinto, el eje del barrio. Abre al mediodía de lunes a domingo (el miércoles descansa) y añade cenas viernes y sábado.',
	},
];

/** Solo lo que aparece en la ficha y en sus reseñas; sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la categoría de la ficha y lo primero que nombran las reseñas',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{
				name: 'Tortillas',
				note: '«Tienen tortillas», según una reseña',
			},
			{
				name: 'Aliños',
				note: 'los cita la misma reseña junto a las patatas',
			},
			{
				name: 'Patatas fritas',
				note: '«deliciosas», según otra de las reseñas de la ficha',
			},
			{
				name: 'Ensaladilla de gambas',
				note: 'aparece en una reseña; la ficha no publica la carta',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual, también la mala. */
export const RESENAS = [
	{
		texto: 'Las raciones eran generosas y las patatas fritas, deliciosas.',
		valor: 5,
	},
	{
		texto: 'Pollos sabrosos y muy ricos Tienen tortillas , aliños, patatas y de mas..',
		valor: 4,
	},
	{
		texto: 'Si te encuentras una gamba en la ensaladilla de gambas, compra lotería.',
		valor: 2,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador de Pollos La Estrella?',
		a: 'En la calle San Jacinto, 34, 41010 Sevilla, en pleno barrio de Triana. El mapa de esta página abre las coordenadas exactas (37.384002, -6.0048165) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el mediodía: de 12:30 a 16:00 de lunes a jueves (el miércoles cierra), de 12:30 a 16:00 y de 20:00 a 23:00 el viernes, de 12:00 a 16:00 y de 20:00 a 23:00 el sábado, y de 11:00 a 16:00 el domingo. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como pollería y las reseñas nombran el pollo asado, las tortillas, los aliños, las patatas fritas y la ensaladilla de gambas. La ficha no publica la carta completa ni los precios.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No consta. La ficha de Google no incluye precios ni importes, así que hay que preguntar en el local o por teléfono.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no lo indica: solo aparece la categoría «Pollería». El canal publicado es el teléfono, el 954 34 06 66; no consta página web ni pedidos online. Cualquier reparto se confirma llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. Conviene llamar antes si necesitas acceso concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,5 sobre 5 con 244 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones que muestra elogian las raciones, las patatas y el pollo, y también hay una crítica con humor sobre la ensaladilla.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
