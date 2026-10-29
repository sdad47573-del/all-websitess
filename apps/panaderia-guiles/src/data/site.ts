/**
 * Datos de Panadería Guiles — C. Virgen de la Fuensanta, 26
 * (Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Guiles,
 *   36.7144126,-4.4453283, feature 0xd72f771699667af:0x9c049d63eec873fd.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas, horario,
 *   accesibilidad y galería: ficha pública de Google (octubre de 2026).
 *
 * Lo que la ficha NO publica: página web, redes sociales, descripción del
 * negocio, carta ni precios. La web no inventa ninguno de esos datos.
 */

export const BUSINESS = {
	name: 'Panadería Guiles',
	shortName: 'Guiles',
	mark: 'G',
	street: 'C. Virgen de la Fuensanta, 26',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	siteUrl: 'https://panaderia-guiles.vercel.app',
	phone: '609 23 96 52',
	phoneHref: 'tel:+34609239652',
	geo: { lat: 36.7144126, lng: -4.4453283 },
	featureId: '0xd72f771699667af:0x9c049d63eec873fd',
	placeId: 'ChIJr2eWaXH3cg0R_XPI7mOdBJw',
	plusCode: '8C8QPH73+QV',
	googleCategory: 'Panadería',
	description:
		'Panadería Guiles en la calle Virgen de la Fuensanta, 26 (Cruz de Humilladero, 29007 Málaga). Panadería de barrio con horario partido y apertura también los domingos por la mañana.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Guiles/@36.7144126,-4.4453283,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f771699667af:0x9c049d63eec873fd!8m2!3d36.7144126!4d-4.4453283!16s%2Fg%2F11g8kt0tjy?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=11244061263073181693',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7144126%2C-4.4453283',
	embed: 'https://maps.google.com/maps?q=36.7144126,-4.4453283&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7144126,-4.4453283',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 15,
	label: '4,6',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', tramos: '8:00–20:30' },
	{ dia: 'Martes', tramos: '8:00–14:00 · 17:00–20:30' },
	{ dia: 'Miércoles', tramos: '8:00–14:00 · 17:00–20:30' },
	{ dia: 'Jueves', tramos: '8:00–14:00 · 17:00–20:30' },
	{ dia: 'Viernes', tramos: '8:00–14:00 · 17:00–20:30' },
	{ dia: 'Sábado', tramos: '8:00–14:00 · 17:00–20:30' },
	{ dia: 'Domingo', tramos: '8:00–14:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'Día de Todos los Santos: el horario podría ser diferente. El horario publicado puede cambiar; confírmalo en la ficha de Google o llamando antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Panadería',
	'Abierta los domingos por la mañana',
	'Horario partido',
	'Acceso para sillas de ruedas',
	'Cruz de Humilladero',
];

export const HIGHLIGHTS = [
	{
		title: 'Mañana y tarde',
		text: 'De martes a sábado la ficha publica dos franjas, de 8:00 a 14:00 y de 17:00 a 20:30. El lunes, en cambio, figura abierta de 8:00 a 20:30 sin cerrar a mediodía.',
	},
	{
		title: 'También el domingo',
		text: 'El domingo abre solo por la mañana, de 8:00 a 14:00. Es el único día con una sola franja junto al lunes, y no hay ningún día de cierre.',
	},
	{
		title: 'Pan y dulces',
		text: 'La ficha la clasifica como panadería y no publica descripción ni carta. Lo único que dice del género son sus fotos y una reseña que habla de empanadas y dulces.',
	},
];

/**
 * Resumen con palabras propias de las dos reseñas que destaca Google: una de
 * cinco estrellas y otra de una. La web no oculta la negativa.
 */
export const RESENAS = [
	{
		rating: 5,
		tema: 'Empanadas y dulces',
		resumen:
			'Una de las reseñas elogia las empanadas y dice que los dulces son de los que apetece repetir.',
	},
	{
		rating: 1,
		tema: 'Una visita en falso',
		resumen:
			'La otra es de una estrella: cuenta que encontró el local cerrado cuando creía que ya estaba abierto. El horario de esta página es el que publica Google, pero conviene llamar si se va con prisa.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Guiles?',
		a: 'En la calle Virgen de la Fuensanta, 26, en el barrio de Cruz de Humilladero (29007 Málaga). El mapa de esta página abre las coordenadas exactas y «Cómo llegar» lanza la ruta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'El lunes figura abierta de 8:00 a 20:30 sin cerrar a mediodía. De martes a sábado, de 8:00 a 14:00 y de 17:00 a 20:30. El domingo solo por la mañana, de 8:00 a 14:00. En festivos como el Día de Todos los Santos la ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí, según la ficha: el domingo abre de 8:00 a 14:00.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'Sí. La ficha publica el 609 23 96 52, el mismo número que aparece en esta página. Es la vía más rápida para confirmar horario o preguntar por el género del día.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no añade ninguno.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y no publica carta ni precios. Sus fotos y una de las reseñas hablan de pan, empanadas y dulces, pero esta página no detalla surtido ni importes porque Google no los publica.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. No publica información sobre el interior, los aseos ni el aparcamiento, así que esta página no la añade.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 15 reseñas en el momento de consultarla (octubre de 2026). Las opiniones no son unánimes: hay reseñas muy buenas y alguna negativa sobre el horario. Se pueden leer completas en Google Maps.',
	},
];
