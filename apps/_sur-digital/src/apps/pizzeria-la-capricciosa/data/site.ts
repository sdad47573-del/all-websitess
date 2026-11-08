/**
 * Datos de Pizzeria La Capricciosa — Av. de Sant Antoni, 38, AD400 La Massana.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Pizzeria La Capricciosa», 42.5424344,1.517273,
 *   feature 0x12af5fff15f77ff7:0x112b4af62ba807cc.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,5 · 355 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 * - La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario
 *   podría ser distinto.
 */

export const BUSINESS = {
	name: 'Pizzeria La Capricciosa',
	fullName: 'Pizzeria La Capricciosa',
	shortName: 'La Capricciosa',
	mark: 'LC',
	street: 'Av. de Sant Antoni, 38',
	district: 'La Massana',
	city: 'La Massana',
	region: 'Andorra',
	postalCode: 'AD400',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/pizzeria-la-capricciosa',
	geo: { lat: 42.5424344, lng: 1.517273 },
	featureId: '0x12af5fff15f77ff7:0x112b4af62ba807cc',
	googleCategory: 'Pizzería',
	phone: '+376 838 386',
	phoneHref: 'tel:+376838386',
	website: '',
	tagline: 'Pizzería en La Massana',
	description:
		'Pizzeria La Capricciosa, en la Av. de Sant Antoni, 38, de La Massana (AD400). Pizzería con 4,5 sobre 5 y 355 reseñas en Google. Teléfono +376 838 386.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pizzeria+La+Capricciosa/@42.5424344,1.517273,17z/data=!4m6!3m5!1s0x12af5fff15f77ff7:0x112b4af62ba807cc!8m2!3d42.5424344!4d1.517273!16s%2Fg%2F1pt_4lb9p?authuser=0&hl=es&entry=ttu',
	reviews: 'https://www.google.com/maps/place/Pizzeria+La+Capricciosa/@42.5424344,1.517273,17z/data=!4m6!3m5!1s0x12af5fff15f77ff7:0x112b4af62ba807cc!8m2!3d42.5424344!4d1.517273!16s%2Fg%2F1pt_4lb9p?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5424344%2C1.517273',
	embed: 'https://maps.google.com/maps?q=42.5424344,1.517273&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5424344,1.517273',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 355,
	label: '4,5',
};

/**
 * Horario que publica la ficha. Martes cerrado. El resto de días, de 19:00 a 22:30.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '19:00–22:30' },
	{ dia: 'Martes', horas: 'Cerrado' },
	{ dia: 'Miércoles', horas: '19:00–22:30' },
	{ dia: 'Jueves', horas: '19:00–22:30' },
	{ dia: 'Viernes', horas: '19:00–22:30' },
	{ dia: 'Sábado', horas: '19:00–22:30' },
	{ dia: 'Domingo', horas: '19:00–22:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Pizzería', 'Cena', 'Cerrado los martes', '4,5 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Pizzería',
		text: 'Google lo clasifica como «Pizzería».',
	},
	{
		title: 'Por la noche',
		text: 'Según la ficha, abre de 19:00 a 22:30 de lunes a domingo, salvo los martes.',
	},
	{
		title: 'En La Massana',
		text: 'Está en la Av. de Sant Antoni, 38, en La Massana (AD400).',
	},
	{
		title: '355 opiniones',
		text: 'La ficha reúne 355 reseñas con una media de 4,5 sobre 5 (noviembre de 2026).',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pizzeria La Capricciosa?',
		a: 'En la Av. de Sant Antoni, 38, en La Massana (AD400). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de 19:00 a 22:30 de lunes a domingo, salvo los martes, que está cerrado. La ficha avisa de que en festivos, como el Día de Todos los Santos, el horario podría ser distinto.',
	},
	{
		q: '¿Qué tipo de cocina tiene?',
		a: 'Google la clasifica como «Pizzería». La ficha no publica la carta en su propio texto, así que esta web no incluye platos ni precios.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 838 386. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,5 sobre 5 con 355 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Pizzeria La Capricciosa',
	actualizado: 'Noviembre de 2026',
};
