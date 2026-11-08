/**
 * Datos de Restaurant Hong Kong Escaldes — Passeig de l'Arnaldeta de Caboet, AD700 Escaldes-Engordany.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurant Hong Kong Escaldes», 42.5089595,1.5366211,
 *   feature 0x12a58adcf4555557:0x52408b96b9199dd0.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (3,8 · 384 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Restaurant Hong Kong Escaldes',
	fullName: 'Restaurant Hong Kong Escaldes',
	shortName: 'Hong Kong',
	mark: 'HK',
	street: "Passeig de l'Arnaldeta de Caboet",
	district: 'Escaldes-Engordany',
	city: 'Escaldes-Engordany',
	region: 'Andorra',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/restaurant-hong-kong-escaldes',
	geo: { lat: 42.5089595, lng: 1.5366211 },
	featureId: '0x12a58adcf4555557:0x52408b96b9199dd0',
	phone: '+376 829 029',
	phoneHref: 'tel:+376829029',
	website: '',
	tagline: 'Restaurante en Escaldes-Engordany',
	description:
		"Restaurant Hong Kong Escaldes, en el Passeig de l'Arnaldeta de Caboet, de Escaldes-Engordany (AD700). Restaurante con 3,8 sobre 5 y 384 reseñas en Google. Teléfono +376 829 029.",
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+Hong+Kong+Escaldes/@42.5089595,1.5366211,17z/data=!4m6!3m5!1s0x12a58adcf4555557:0x52408b96b9199dd0!8m2!3d42.5089595!4d1.5366211!16s%2Fg%2F11g6bjcgvt?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Restaurant+Hong+Kong+Escaldes/@42.5089595,1.5366211,17z/data=!4m6!3m5!1s0x12a58adcf4555557:0x52408b96b9199dd0!8m2!3d42.5089595!4d1.5366211!16s%2Fg%2F11g6bjcgvt?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5089595%2C1.5366211',
	embed: 'https://maps.google.com/maps?q=42.5089595,1.5366211&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5089595,1.5366211',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 3.8,
	count: 384,
	label: '3,8',
};

/**
 * Horario que publica la ficha: lunes cerrado, martes a sábado a mediodía y noche.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '13:00–15:30 y 20:00–23:00' },
	{ dia: 'Miércoles', horas: '13:00–15:30 y 20:00–23:00' },
	{ dia: 'Jueves', horas: '13:00–15:30 y 20:00–23:00' },
	{ dia: 'Viernes', horas: '13:00–15:30 y 20:00–23:00' },
	{ dia: 'Sábado', horas: '13:00–15:30 y 20:00–23:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Restaurante', 'Mediodía y noche', 'Cerrado lunes y domingos', '3,8 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Mediodía y noche',
		text: 'Según la ficha, abre de 13:00 a 15:30 y de 20:00 a 23:00, de martes a sábado.',
	},
	{
		title: 'En Escaldes',
		text: "Está en el Passeig de l'Arnaldeta de Caboet, en Escaldes-Engordany (AD700).",
	},
	{
		title: '384 opiniones',
		text: 'La ficha reúne 384 reseñas con una media de 3,8 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurant Hong Kong Escaldes?',
		a: "En el Passeig de l'Arnaldeta de Caboet, en Escaldes-Engordany (AD700). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de martes a sábado, de 13:00 a 15:30 y de 20:00 a 23:00. Lunes y domingos aparecen cerrados.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 829 029. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,8 sobre 5 con 384 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurant Hong Kong Escaldes',
	actualizado: 'Noviembre de 2026',
};
