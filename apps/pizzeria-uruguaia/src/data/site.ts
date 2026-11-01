/**
 * Datos de Pizzeria Uruguaia — Plaça Major, 4, AD600 Sant Julià de Lòria.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Pizzeria Uruguaia», 42.4629812,1.4911651,
 *   feature 0x12a5f482a6482663:0xc744033f94a224e4.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,5 · 229 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Pizzeria Uruguaia',
	fullName: 'Pizzeria Uruguaia',
	shortName: 'Uruguaia',
	mark: 'PU',
	street: 'Plaça Major, 4',
	district: 'Sant Julià de Lòria',
	city: 'Sant Julià de Lòria',
	region: 'Andorra',
	postalCode: 'AD600',
	country: 'AD',
	siteUrl: 'https://pizzeria-uruguaia.vercel.app',
	geo: { lat: 42.4629812, lng: 1.4911651 },
	featureId: '0x12a5f482a6482663:0xc744033f94a224e4',
	googleCategory: 'Pizzería',
	phone: '+376 842 903',
	phoneHref: 'tel:+376842903',
	website: '',
	tagline: 'Pizzería en Sant Julià de Lòria',
	description:
		'Pizzeria Uruguaia, en la Plaça Major, 4, de Sant Julià de Lòria (AD600). Pizzería con 4,5 sobre 5 y 229 reseñas en Google. Teléfono +376 842 903.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pizzeria+Uruguaia/@42.4629812,1.4911651,17z/data=!4m6!3m5!1s0x12a5f482a6482663:0xc744033f94a224e4!8m2!3d42.4629812!4d1.4911651!16s%2Fg%2F1q5glkr6f?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Pizzeria+Uruguaia/@42.4629812,1.4911651,17z/data=!4m6!3m5!1s0x12a5f482a6482663:0xc744033f94a224e4!8m2!3d42.4629812!4d1.4911651!16s%2Fg%2F1q5glkr6f?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.4629812%2C1.4911651',
	embed: 'https://maps.google.com/maps?q=42.4629812,1.4911651&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.4629812,1.4911651',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 229,
	label: '4,5',
};

/**
 * Horario que publica la ficha: mediodía y noche, martes cerrado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–15:30 y 20:00–23:30' },
	{ dia: 'Martes', horas: 'Cerrado' },
	{ dia: 'Miércoles', horas: '13:00–15:30 y 20:00–23:30' },
	{ dia: 'Jueves', horas: '13:00–15:30 y 20:00–23:30' },
	{ dia: 'Viernes', horas: '13:00–15:30 y 20:00–23:30' },
	{ dia: 'Sábado', horas: '13:00–15:30 y 20:00–23:30' },
	{ dia: 'Domingo', horas: '13:00–15:30 y 20:00–23:30' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Pizzería', 'Mediodía y noche', 'Cerrado los martes', '4,5 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Pizzería',
		text: 'Google lo clasifica como «Pizzería».',
	},
	{
		title: 'Mediodía y noche',
		text: 'Según la ficha, abre de 13:00 a 15:30 y de 20:00 a 23:30, salvo los martes.',
	},
	{
		title: 'En Sant Julià',
		text: 'Está en la Plaça Major, 4, en Sant Julià de Lòria (AD600).',
	},
	{
		title: '229 opiniones',
		text: 'La ficha reúne 229 reseñas con una media de 4,5 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pizzeria Uruguaia?',
		a: 'En la Plaça Major, 4, en Sant Julià de Lòria (AD600). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de 13:00 a 15:30 y de 20:00 a 23:30, salvo los martes, que está cerrado.',
	},
	{
		q: '¿Qué tipo de cocina tiene?',
		a: 'Google la clasifica como «Pizzería». La ficha no publica la carta en su propio texto, así que esta web no incluye platos ni precios.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 842 903. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,5 sobre 5 con 229 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Pizzeria Uruguaia',
	actualizado: 'Noviembre de 2026',
};
