/**
 * Datos de FREIDURÍA LUISA Y ALEXANDRA — Av. de Emilio Lemos, 19, Local 5C1,
 * 41020 Sevilla (Pino Montano).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Freiduria Luisa y Alexandra»,
 *   37.4027135,-5.9226665, feature 0xd126fdfe5ab394f:0x463c5182df9a0232.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta, precios, página web propia, redes sociales
 * ni reparto a domicilio. La web no inventa esos datos: lo que cuenta sale de la
 * ficha, de su categoría y de sus reseñas.
 */

export const BUSINESS = {
	name: 'Freiduría Luisa y Alexandra',
	fullName: 'FREIDURÍA LUISA Y ALEXANDRA',
	shortName: 'Luisa y Alexandra',
	mark: 'LA',
	street: 'Av. de Emilio Lemos, 19, Local 5C1',
	district: 'Pino Montano',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41020',
	country: 'ES',
	siteUrl: 'https://freiduria-luisa-y-alexandra.vercel.app',
	geo: { lat: 37.4027135, lng: -5.9226665 },
	featureId: '0xd126fdfe5ab394f:0x463c5182df9a0232',
	placeId: 'ChIJTzmr5d9vEg0RMgKa34JRPEY',
	plusCode: '8C9PC33G+3W',
	googleCategory: 'Tienda de pescado y papas fritas para llevar',
	phone: '642 98 38 13',
	phoneHref: 'tel:+34642983813',
	tagline: 'Pescado frito para llevar en Pino Montano',
	description:
		'Freiduría Luisa y Alexandra, en Av. de Emilio Lemos, 19, Local 5C1 (Pino Montano, 41020 Sevilla). Pescado frito variado, chocos y papas para llevar, todos los días hasta la 1:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Freiduria+Luisa+y+Alexandra/@37.4027135,-5.9226665,17z/data=!4m6!3m5!1s0xd126fdfe5ab394f:0x463c5182df9a0232!8m2!3d37.4027135!4d-5.9226665!16s%2Fg%2F11st6b8x_b?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4027135%2C-5.9226665',
	embed: 'https://maps.google.com/maps?q=37.4027135,-5.9226665&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.4027135,-5.9226665',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.8,
	count: 50,
	label: '3,8',
};

/** Horario de la ficha: dos turnos diarios, mediodía y noche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Martes', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Miércoles', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Jueves', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Viernes', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Sábado', horas: '13:00–17:00 · 20:00–01:00' },
	{ dia: 'Domingo', horas: '13:00–17:00 · 20:00–01:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que nombran la categoría y las reseñas. */
export const SERVICIOS = [
	'Pescado frito',
	'Chocos',
	'Papas fritas',
	'Frito para dos',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'El pescado variado',
		text: 'La ficha la clasifica como tienda de pescado y papas fritas para llevar. «El pescado variado buenísimo», resume una de las reseñas de cinco estrellas.',
	},
	{
		title: 'El frito para dos',
		text: '«Pedimos frito para dos personas y fue abundante y muy rico», cuenta otra reseña. Es la ración que se pide para compartir en casa.',
	},
	{
		title: 'Los chocos',
		text: '«Hemos probado los chocos y deliciosos», dice la tercera de las reseñas que muestra la ficha. La carta completa no está publicada.',
	},
	{
		title: 'Hasta la una',
		text: 'Abre todos los días en dos turnos, de 13:00 a 17:00 y de 20:00 a 1:00, y todo es para llevar: no hay servicio de mesa.',
	},
];

/** Solo lo que nombran la categoría y las reseñas; sin precios inventados. */
export const MENU = [
	{
		title: 'De la freiduría',
		items: [
			{
				name: 'Pescado frito variado',
				note: '«buenísimo», según una reseña de la ficha',
			},
			{
				name: 'Chocos',
				note: '«deliciosos», según otra de las reseñas',
			},
			{
				name: 'Papas fritas',
				note: 'la categoría de la ficha es tienda de pescado y papas fritas para llevar',
			},
		],
	},
	{
		title: 'Para llevar',
		items: [
			{
				name: 'Frito para dos',
				note: '«abundante y muy rico», según una reseña; la ficha no publica la carta ni los precios',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Limpieza exquisita, el pescado variado buenísimo y la amabilidad inmejorable.',
		valor: 5,
	},
	{
		texto: 'Todo muy bueno, pedimos frito para dos personas y fue abundante y muy rico.',
		valor: 5,
	},
	{
		texto: 'Hemos probado los chocos y deliciosos.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Freiduría Luisa y Alexandra?',
		a: 'En la avenida de Emilio Lemos, 19, Local 5C1, 41020 Sevilla, en Pino Montano. El mapa de esta página abre las coordenadas exactas (37.4027135, -5.9226665) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos todos los días de la semana, también domingo: de 13:00 a 17:00 y de 20:00 a 1:00. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pescado frito variado, chocos y papas fritas, además del frito para dos que nombran las reseñas. La ficha no publica la carta completa ni los precios, así que la disponibilidad se consulta por teléfono.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Google la clasifica como tienda de pescado y papas fritas para llevar. No consta servicio de mesa ni terraza; el local trabaja el frito para llevar.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no lo indica: solo figura como tienda para llevar. El canal publicado es el teléfono, el 642 98 38 13; no consta página web ni pedidos online. Cualquier reparto se confirma llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No consta. La ficha de Google no incluye carta ni precios; hay que preguntar por teléfono o en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no asientos adaptados. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 3,8 sobre 5 con 50 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones que muestra son de cinco estrellas y elogian la limpieza, el pescado, la amabilidad y los chocos.',
	},
];
