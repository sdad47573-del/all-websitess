/**
 * Datos de Almirez, Comida Tradicional Para Llevar — C. Margarita Xirgu, 4, bajo A, Málaga.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Almirez, Comida Tradicional Para Llevar»,
 *   36.7211669,-4.4753877, feature 0xd72f71705186dd1:0x8cd6747ab60dbff8.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,6 · 87 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Almirez, Comida Tradicional Para Llevar',
	fullName: 'Almirez, Comida Tradicional Para Llevar',
	shortName: 'Almirez',
	mark: 'AL',
	street: 'C. Margarita Xirgu, 4, bajo A',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Málaga',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://almirez-comida-para-llevar.vercel.app',
	geo: { lat: 36.7211669, lng: -4.4753877 },
	featureId: '0xd72f71705186dd1:0x8cd6747ab60dbff8',
	phone: '644 67 80 99',
	phoneHref: 'tel:+34644678099',
	website: '',
	tagline: 'Comida tradicional para llevar en Málaga',
	description:
		'Almirez, Comida Tradicional Para Llevar, en la C. Margarita Xirgu, 4, bajo A, de Málaga (29010). Comida tradicional para llevar con 4,6 sobre 5 y 87 reseñas en Google. Teléfono 644 67 80 99.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Almirez,+Comida+Tradicional+Para+Llevar/@36.7211669,-4.4753877,17z/data=!4m6!3m5!1s0xd72f71705186dd1:0x8cd6747ab60dbff8!8m2!3d36.7211669!4d-4.4753877!16s%2Fg%2F11j68fl0pg?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Almirez,+Comida+Tradicional+Para+Llevar/@36.7211669,-4.4753877,17z/data=!4m6!3m5!1s0xd72f71705186dd1:0x8cd6747ab60dbff8!8m2!3d36.7211669!4d-4.4753877!16s%2Fg%2F11j68fl0pg?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7211669%2C-4.4753877',
	embed: 'https://maps.google.com/maps?q=36.7211669,-4.4753877&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7211669,-4.4753877',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.6,
	count: 87,
	label: '4,6',
};

/**
 * Horario que publica la ficha: lunes y de miércoles a domingo de 10:00 a 15:30.
 * Martes cerrado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Puede variar en festivos (la ficha avisa de cambios por Todos los Santos). Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Comida para llevar', 'Cocina tradicional', 'Cerrado martes', '4,6 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Comida tradicional',
		text: 'Según la ficha, Almirez es un local de comida tradicional para llevar en la C. Margarita Xirgu, en Málaga.',
	},
	{
		title: 'Mañanas y mediodía',
		text: 'Abre de miércoles a domingo y los lunes de 10:00 a 15:30. Los martes permanece cerrado.',
	},
	{
		title: '87 opiniones',
		text: 'La ficha reúne 87 reseñas con una media de 4,6 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Almirez?',
		a: 'En la C. Margarita Xirgu, 4, bajo A, en Teatinos-Universidad (29010 Málaga). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de 10:00 a 15:30 de lunes y de miércoles a domingo. Los martes cerrado.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el 644 67 80 99. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,6 sobre 5 con 87 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del local?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Almirez, Comida Tradicional Para Llevar',
	actualizado: 'Noviembre de 2026',
};
