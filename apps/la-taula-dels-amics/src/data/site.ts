/**
 * Datos de Restaurant Pizzeria La Taula dels Amics — Av. Sant Joan de Caselles, 26, AD100 Canillo.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La Taula dels Amics», 42.5658557,1.5981063,
 *   feature 0x12af6337062f7411:0xb07c2fa5c1116719.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,1 · 679 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Restaurant Pizzeria La Taula dels Amics',
	fullName: 'Restaurant Pizzeria La Taula dels Amics',
	shortName: 'La Taula',
	mark: 'TA',
	street: 'Av. Sant Joan de Caselles, 26',
	district: 'Canillo',
	city: 'Canillo',
	region: 'Andorra',
	postalCode: 'AD100',
	country: 'AD',
	siteUrl: 'https://la-taula-dels-amics.vercel.app',
	geo: { lat: 42.5658557, lng: 1.5981063 },
	featureId: '0x12af6337062f7411:0xb07c2fa5c1116719',
	phone: '+376 852 117',
	phoneHref: 'tel:+376852117',
	website: '',
	tagline: 'Pizzería en Canillo',
	description:
		'La Taula dels Amics, en la Av. Sant Joan de Caselles, 26, de Canillo (AD100). Pizzería con 4,1 sobre 5 y 679 reseñas en Google. Teléfono +376 852 117.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Taula+dels+Amics/@42.5658557,1.5981063,17z/data=!4m6!3m5!1s0x12af6337062f7411:0xb07c2fa5c1116719!8m2!3d42.5658557!4d1.5981063!16s%2Fg%2F1ptvx0v2f?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/La+Taula+dels+Amics/@42.5658557,1.5981063,17z/data=!4m6!3m5!1s0x12af6337062f7411:0xb07c2fa5c1116719!8m2!3d42.5658557!4d1.5981063!16s%2Fg%2F1ptvx0v2f?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5658557%2C1.5981063',
	embed: 'https://maps.google.com/maps?q=42.5658557,1.5981063&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5658557,1.5981063',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 679,
	label: '4,1',
};

/**
 * Horario que publica la ficha. Dos turnos de mediodía y noche de martes a
 * sábado (sábado noche a las 19:00), mediodía el domingo y lunes cerrado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '13:00–16:00 y 19:30–22:00' },
	{ dia: 'Miércoles', horas: '13:00–16:00 y 19:30–22:00' },
	{ dia: 'Jueves', horas: '13:00–16:00 y 19:30–22:00' },
	{ dia: 'Viernes', horas: '13:00–16:00 y 19:30–22:00' },
	{ dia: 'Sábado', horas: '13:00–16:00 y 19:00–22:00' },
	{ dia: 'Domingo', horas: '13:00–16:00' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Puede variar en festivos (la ficha avisa de cambios por Todos los Santos). Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Pizzería', 'Mediodía y noche', 'Cerrado lunes', '4,1 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Pizzería en Canillo',
		text: 'Según la ficha, La Taula dels Amics es una pizzería de la Av. Sant Joan de Caselles, en Canillo.',
	},
	{
		title: 'Mediodía y noche',
		text: 'Abre de martes a domingo al mediodía, de 13:00 a 16:00, y por la noche de martes a sábado.',
	},
	{
		title: '679 opiniones',
		text: 'La ficha reúne 679 reseñas con una media de 4,1 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Taula dels Amics?',
		a: 'En la Av. Sant Joan de Caselles, 26, en Canillo (AD100). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de martes a sábado, de 13:00 a 16:00 y de 19:30 a 22:00 (los sábados por la noche, de 19:00 a 22:00). Domingo, de 13:00 a 16:00. Lunes cerrado.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 852 117. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,1 sobre 5 con 679 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del local?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'La Taula dels Amics',
	actualizado: 'Noviembre de 2026',
};
