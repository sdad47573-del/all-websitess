/**
 * Datos de El Nou Pica Pica — Av. del Fener, 24, Edf. Prat de les Oques, AD700 Escaldes-Engordany.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «EL NOU PICA PICA», 42.508069,1.5356962,
 *   feature 0x12a58adc46835565:0x2552867ad948adf5.
 * - Nombre, dirección, teléfono, valoración y horario: respuesta pública de la
 *   ficha de Google consultada el 1 de noviembre de 2026 (4,2 · 30 reseñas).
 *
 * Avisos:
 * - La ficha no publica una web propia en la respuesta consultada, así que esta
 *   web no enlaza ninguna carta online.
 */

export const BUSINESS = {
	name: 'El Nou Pica Pica',
	fullName: 'El Nou Pica Pica',
	shortName: 'Pica Pica',
	mark: 'PP',
	street: 'Av. del Fener, 24, Edf. Prat de les Oques',
	district: 'Escaldes-Engordany',
	city: 'Escaldes-Engordany',
	region: 'Andorra',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/el-nou-pica-pica',
	geo: { lat: 42.508069, lng: 1.5356962 },
	featureId: '0x12a58adc46835565:0x2552867ad948adf5',
	phone: '+376 860 777',
	phoneHref: 'tel:+376860777',
	website: '',
	tagline: 'Cafetería en Escaldes-Engordany',
	description:
		'El Nou Pica Pica, en la Av. del Fener, 24, de Escaldes-Engordany (AD700). Cafetería con 4,2 sobre 5 y 30 reseñas en Google. Teléfono +376 860 777.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/EL+NOU+PICA+PICA/@42.508069,1.5356962,17z/data=!4m6!3m5!1s0x12a58adc46835565:0x2552867ad948adf5!8m2!3d42.508069!4d1.5356962!16s%2Fg%2F11b6_dl_f1?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/EL+NOU+PICA+PICA/@42.508069,1.5356962,17z/data=!4m6!3m5!1s0x12a58adc46835565:0x2552867ad948adf5!8m2!3d42.508069!4d1.5356962!16s%2Fg%2F11b6_dl_f1?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.508069%2C1.5356962',
	embed: 'https://maps.google.com/maps?q=42.508069,1.5356962&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.508069,1.5356962',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 30,
	label: '4,2',
};

/**
 * Horario que publica la ficha: lunes a viernes de 7:00 a 16:00, sábado y domingo cerrado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '7:00–16:00' },
	{ dia: 'Martes', horas: '7:00–16:00' },
	{ dia: 'Miércoles', horas: '7:00–16:00' },
	{ dia: 'Jueves', horas: '7:00–16:00' },
	{ dia: 'Viernes', horas: '7:00–16:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'Horario publicado en la ficha de Google. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = ['Cafetería', 'Lunes a viernes', 'De 7:00 a 16:00', '4,2 en Google'];

export const HIGHLIGHTS = [
	{
		title: 'De 7:00 a 16:00',
		text: 'Según la ficha, abre de lunes a viernes de 7:00 a 16:00. Sábado y domingo aparecen cerrados.',
	},
	{
		title: 'En Escaldes',
		text: 'Está en la Av. del Fener, 24, en Escaldes-Engordany (AD700).',
	},
	{
		title: '30 opiniones',
		text: 'La ficha reúne 30 reseñas con una media de 4,2 sobre 5.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Nou Pica Pica?',
		a: 'En la Av. del Fener, 24, Edf. Prat de les Oques, en Escaldes-Engordany (AD700). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de lunes a viernes, de 7:00 a 16:00. Sábado y domingo aparecen cerrados.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 860 777. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,2 sobre 5 con 30 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del local?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'El Nou Pica Pica',
	actualizado: 'Noviembre de 2026',
};
