/**
 * Datos de CREPERIA PIZZERIA SEGLE XXI — Encamp (Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «CREPERIA PIZZERIA SEGLE XXI»,
 *   42.532906,1.576869, feature 0x12a58a73018861e3:0x5157a19105ae9e80.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, Plus Code y
 *   fotos: respuesta pública de la ficha de Google consultada el 1 de noviembre
 *   de 2026 (4,4 · 189 reseñas).
 *
 * Avisos importantes:
 * - Google clasifica el negocio solo como «Crepería», aunque el nombre comercial
 *   añade «Pizzería». La web lo explica sin deducir una carta completa.
 * - La ficha no publica carta, precios, servicios (reparto, terraza) ni reservas
 *   online: la web no los inventa y remite al teléfono.
 */

export const BUSINESS = {
	name: 'CREPERIA PIZZERIA SEGLE XXI',
	displayName: 'Segle XXI',
	fullName: 'CREPERIA PIZZERIA SEGLE XXI',
	shortName: 'Segle XXI',
	mark: 'SXXI',
	street: 'Av. de Joan Martí, 74',
	district: 'Encamp',
	city: 'Encamp',
	region: 'Andorra',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://creperia-pizzeria-segle-xxi.vercel.app',
	geo: { lat: 42.532906, lng: 1.576869 },
	featureId: '0x12a58a73018861e3:0x5157a19105ae9e80',
	placeId: 'ChIJ42GIAXOKpRIRgJ6uBZGhV1E',
	plusCode: 'GHMG+5P Encamp',
	googleCategory: 'Crepería',
	phone: '+376 832 690',
	phoneHref: 'tel:+376832690',
	tagline: 'Crepería y pizzería en Encamp',
	description:
		'CREPERIA PIZZERIA SEGLE XXI, en la Av. de Joan Martí, 74, de Encamp (AD200, Andorra). Crepería y pizzería con 4,4 sobre 5 y 189 reseñas en Google. Abre de 7:00 a 22:30 entre semana y de 13:00 a 22:30 el fin de semana.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/CREPERIA+PIZZERIA+SEGLE+XXI/@42.532906,1.576869,17z/data=!3m1!4b1!4m6!3m5!1s0x12a58a73018861e3:0x5157a19105ae9e80!8m2!3d42.532906!4d1.576869!16s%2Fg%2F1pzswmpn1?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.532906%2C1.576869',
	embed: 'https://maps.google.com/maps?q=42.532906,1.576869&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.532906,1.576869',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 189,
	label: '4,4',
};

/**
 * Horario que publica la ficha. No cierra ningún día: entre semana abre a las
 * 7:00 (desayunos) y el sábado y el domingo a las 13:00.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '7:00–22:30' },
	{ dia: 'Martes', horas: '7:00–22:30' },
	{ dia: 'Miércoles', horas: '7:00–22:30' },
	{ dia: 'Jueves', horas: '7:00–22:30' },
	{ dia: 'Viernes', horas: '7:00–22:30' },
	{ dia: 'Sábado', horas: '13:00–22:30' },
	{ dia: 'Domingo', horas: '13:00–22:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. No publica ningún día de cierre semanal.';

export const SERVICIOS = [
	'Crepería',
	'Pizzería',
	'Encamp',
	'Av. de Joan Martí, 74',
	'Abierto de 7:00 entre semana',
	'Hasta las 22:30',
	'4,4 en Google',
	'189 reseñas',
];

export const HIGHLIGHTS = [
	{
		title: 'Crepes y pizza',
		text: 'El nombre comercial lo dice: crepería y pizzería. Google la clasifica solo como «Crepería», así que la carta de pizzas se sobreentiende por el rótulo, no por el perfil público.',
	},
	{
		title: 'Abre a las 7:00',
		text: 'De lunes a viernes abre a las 7:00 y cierra a las 22:30, un horario que cubre desayuno, comida, merienda y cena. El sábado y el domingo empieza a las 13:00.',
	},
	{
		title: 'En la avenida de Encamp',
		text: 'Está en la Av. de Joan Martí, 74, en Encamp (AD200), la parroquia del norte de Andorra que queda por debajo de Canillo. Plus Code GHMG+5P.',
	},
	{
		title: '189 opiniones',
		text: 'La ficha reúne 189 reseñas con una media de 4,4 sobre 5 (noviembre de 2026). Es una muestra suficiente para una media estable, sin ser un local masificado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está CREPERIA PIZZERIA SEGLE XXI?',
		a: 'En la Av. de Joan Martí, 74, de Encamp (AD200, Andorra), en las coordenadas 42.532906, 1.576869 y Plus Code GHMG+5P. La avenida es la vía principal de la parroquia, así que se llega caminando desde el centro. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de lunes a viernes abre de 7:00 a 22:30, y el sábado y el domingo de 13:00 a 22:30. No publica ningún día de cierre semanal, y advierte de que en festivos —por ejemplo el Día de Todos los Santos— el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 832 690. Es la vía para preguntar por la carta, reservar mesa o confirmar el horario; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'El nombre del negocio es «Creperia Pizzeria Segle XXI» y Google lo clasifica como «Crepería». Es decir, crepes y pizza, en un local de Encamp. La ficha no publica carta ni platos concretos, así que la oferta exacta, los precios y las opciones sin gluten o vegetarianas se consultan por teléfono.',
	},
	{
		q: '¿Sirve desayunos?',
		a: 'El horario lo sugiere —abre a las 7:00 de lunes a viernes—, pero la ficha no publica carta de desayunos ni precios. Conviene llamar al +376 832 690 y preguntar qué hay a primera hora.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica reservas online ni un sistema de reservas. Para asegurar mesa, sobre todo en fin de semana, lo práctico es llamar al +376 832 690.',
	},
	{
		q: '¿Tiene terraza o reparto a domicilio?',
		a: 'La ficha pública no lo indica: no publica servicios de terraza, reparto ni comida para llevar. Si necesitas saberlo, pregúntalo en el teléfono del local antes de contar con ello.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,4 sobre 5 con 189 reseñas (consultado el 1 de noviembre de 2026). Es una media con bastantes opiniones, así que refleja la experiencia habitual del local: buena, pero no perfecta.',
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos y los precios se preguntan por teléfono, en el +376 832 690.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'CREPERIA PIZZERIA SEGLE XXI',
	actualizado: 'Noviembre de 2026',
};
