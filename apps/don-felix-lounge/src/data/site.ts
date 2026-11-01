/**
 * Datos de Don Félix Lounge — Carrer Nou, 1, AD700 Escaldes-Engordany.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Don Félix Lounge», 42.5090892,1.538849,
 *   feature 0x12a58add0c8c61fd:0xd287a91e9c54f37e.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,6 · 2069 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'Don Félix Lounge',
	fullName: 'Don Félix Lounge',
	shortName: 'Don Félix',
	mark: 'DF',
	street: 'Carrer Nou, 1',
	district: 'Escaldes-Engordany',
	city: 'Escaldes-Engordany',
	region: 'Andorra',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://don-felix-lounge.vercel.app',
	geo: { lat: 42.5090892, lng: 1.538849 },
	featureId: '0x12a58add0c8c61fd:0xd287a91e9c54f37e',
	phone: '+376 846 847',
	phoneHref: 'tel:+376846847',
	website: '',
	tagline: 'Restaurante italiano en Escaldes-Engordany',
	description:
		'Don Félix Lounge, en el Carrer Nou, 1, de Escaldes-Engordany (AD700). Restaurante italiano con 4,6 sobre 5 y 2069 reseñas en Google. Teléfono +376 846 847.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Don+F%C3%A9lix+Lounge/@42.5090892,1.538849,17z/data=!4m6!3m5!1s0x12a58add0c8c61fd:0xd287a91e9c54f37e!8m2!3d42.5090892!4d1.538849!16s%2Fg%2F1ptyrwp1k?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Don+F%C3%A9lix+Lounge/@42.5090892,1.538849,17z/data=!4m6!3m5!1s0x12a58add0c8c61fd:0xd287a91e9c54f37e!8m2!3d42.5090892!4d1.538849!16s%2Fg%2F1ptyrwp1k?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5090892%2C1.538849',
	embed: 'https://maps.google.com/maps?q=42.5090892,1.538849&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5090892,1.538849',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.6,
	count: 2069,
	label: '4,6',
};

/**
 * Horario que publica la ficha: dos turnos cada día, de 12:30 a 16:00 o 16:30
 * según el día, y de 19:30 a 23:00. Todos los días abre.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:00 y 19:30–23:00' },
	{ dia: 'Martes', horas: '12:30–16:00 y 19:30–23:00' },
	{ dia: 'Miércoles', horas: '12:30–16:00 y 19:30–23:00' },
	{ dia: 'Jueves', horas: '12:30–16:00 y 19:30–23:00' },
	{ dia: 'Viernes', horas: '12:30–16:00 y 19:30–23:00' },
	{ dia: 'Sábado', horas: '12:30–16:30 y 19:30–23:00' },
	{ dia: 'Domingo', horas: '12:30–16:30 y 19:30–23:00' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Puede variar en festivos. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Restaurante italiano', 'Comida y cena', 'Todos los días', '4,6 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'Todos los días',
		text: 'Según la ficha, abre cada día con dos turnos: de 12:30 a 16:00 (16:30 los fines de semana) y de 19:30 a 23:00.',
	},
	{
		title: 'En Escaldes',
		text: 'Está en el Carrer Nou, 1, en Escaldes-Engordany (AD700).',
	},
	{
		title: '2069 opiniones',
		text: 'La ficha reúne 2069 reseñas con una media de 4,6 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Don Félix Lounge?',
		a: 'En el Carrer Nou, 1, en Escaldes-Engordany (AD700). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: cada día, de 12:30 a 16:00 (16:30 los fines de semana) y de 19:30 a 23:00.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 846 847. Sirve para preguntar por la carta, el horario o una reserva concreta; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,6 sobre 5 con 2069 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del local?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Don Félix Lounge',
	actualizado: 'Noviembre de 2026',
};
