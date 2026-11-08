/**
 * Datos de Can Narcís — Av. Príncep Benlloch, 71, AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Can Narcís», 42.5057232,1.516709,
 *   feature 0x12a5f5ab878490f1:0xc0f8a014656d5845.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,3 · 33 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Can Narcís',
	fullName: 'Can Narcís',
	shortName: 'Can Narcís',
	mark: 'CN',
	street: 'Av. Príncep Benlloch, 71',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/can-narcis',
	geo: { lat: 42.5057232, lng: 1.516709 },
	featureId: '0x12a5f5ab878490f1:0xc0f8a014656d5845',
	phone: '+376 829 109',
	phoneHref: 'tel:+376829109',
	website: '',
	tagline: 'Comida casera para llevar en Andorra la Vella',
	description:
		'Can Narcís, en la Av. Príncep Benlloch, 71, de Andorra la Vella (AD500). Cocina casolana para llevar con 4,3 sobre 5 y 33 reseñas en Google. Teléfono +376 829 109.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Can+Narc%C3%ADs/@42.5057232,1.516709,17z/data=!4m6!3m5!1s0x12a5f5ab878490f1:0xc0f8a014656d5845!8m2!3d42.5057232!4d1.516709!16s%2Fg%2F11jgtbf15y?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Can+Narc%C3%ADs/@42.5057232,1.516709,17z/data=!4m6!3m5!1s0x12a5f5ab878490f1:0xc0f8a014656d5845!8m2!3d42.5057232!4d1.516709!16s%2Fg%2F11jgtbf15y?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5057232%2C1.516709',
	embed: 'https://maps.google.com/maps?q=42.5057232,1.516709&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5057232,1.516709',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.3,
	count: 33,
	label: '4,3',
};

/**
 * Horario que publica la ficha: de miércoles a domingo de 12:00 a 18:30.
 * Lunes y martes cerrado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:00–18:30' },
	{ dia: 'Jueves', horas: '12:00–18:30' },
	{ dia: 'Viernes', horas: '12:00–18:30' },
	{ dia: 'Sábado', horas: '12:00–18:30' },
	{ dia: 'Domingo', horas: '12:00–18:30' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Puede variar en festivos. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Comida casera', 'Para llevar', 'Miércoles a domingo', '4,3 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Para llevar',
		text: 'Según la ficha, Can Narcís es un concepto de comida para emportar: cocina casolana con ingredientes de temporada.',
	},
	{
		title: 'De 12:00 a 18:30',
		text: 'Abre de miércoles a domingo, de 12:00 a 18:30. Lunes y martes aparecen cerrados.',
	},
	{
		title: '33 opiniones',
		text: 'La ficha reúne 33 reseñas con una media de 4,3 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Can Narcís?',
		a: 'En la Av. Príncep Benlloch, 71, en Andorra la Vella (AD500). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de miércoles a domingo, de 12:00 a 18:30. Lunes y martes cerrado.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 829 109. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,3 sobre 5 con 33 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del local?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Can Narcís',
	actualizado: 'Noviembre de 2026',
};
