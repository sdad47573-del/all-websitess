/**
 * Datos de El León de Oro — C. Fernández del Campo, 8, Abando,
 * 48010 Bilbao (Bizkaia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «El León de Oro», 43.2585269,-2.9333686,
 *   feature 0xd4e4fd6a415766d:0x439629ea40cf0216.
 * - Nombre, dirección, teléfono, categoría, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 *
 * La ficha no publica carta con precios, web propia ni datos de accesibilidad:
 * lo que aparece en la web es lo que dice la ficha y lo que se reconoce en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'El León de Oro',
	fullName: 'El León de Oro',
	shortName: 'León de Oro',
	mark: 'LO',
	street: 'C. Fernández del Campo, 8',
	district: 'Abando',
	city: 'Bilbao',
	region: 'País Vasco',
	postalCode: '48010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-leon-de-oro',
	geo: { lat: 43.2585269, lng: -2.9333686 },
	featureId: '0xd4e4fd6a415766d:0x439629ea40cf0216',
	placeId: 'ChIJbXYVpNZPTg0RFgLPQOoplkM',
	plusCode: '8CMV7358+CM',
	googleCategory: 'Restaurante chino',
	phone: '944 43 56 46',
	phoneHref: 'tel:+34944435646',
	tagline: 'Restaurante chino en Abando, Bilbao',
	description:
		'El León de Oro, en la calle Fernández del Campo, 8 (48010 Bilbao, Abando). Restaurante chino con cocina a la vista: pato laqueado, empanadillas a la plancha, berenjenas, verdura al wok y fideos. De 12:00 a 16:30 y de 20:00 a 23:30 todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Le%C3%B3n+de+Oro/@43.2585269,-2.9333686,16z/data=!4m6!3m5!1s0xd4e4fd6a415766d:0x439629ea40cf0216!8m2!3d43.2585269!4d-2.9333686!16s%2Fg%2F1tngrlwx?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2585269%2C-2.9333686',
	embed: 'https://maps.google.com/maps?q=43.2585269,-2.9333686&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2585269,-2.9333686',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 622,
	label: '4,1',
};

/** Horario que publica la ficha: mediodía y noche, todos los días. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–16:30 · 20:00–23:30' },
	{ dia: 'Martes', horas: '12:00–16:30 · 20:00–23:30' },
	{ dia: 'Miércoles', horas: '12:00–16:30 · 20:00–23:30' },
	{ dia: 'Jueves', horas: '11:30–16:30 · 20:00–23:30' },
	{ dia: 'Viernes', horas: '12:00–16:30 · 20:00–23:30' },
	{ dia: 'Sábado', horas: '12:00–16:30 · 20:00–23:30' },
	{ dia: 'Domingo', horas: '12:00–16:30 · 20:00–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advertía de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de ir.';

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Restaurante chino',
	'Pato laqueado',
	'Empanadillas a la plancha',
	'Verdura al wok',
	'Fideos y sopas',
	'Comedor con mesas',
	'Cocina a la vista',
	'Para compartir',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina china en Abando',
		text: 'La ficha lo clasifica como restaurante chino. Está en la calle Fernández del Campo, en Abando, y en la sala se ve la cocina al fondo, con la campana y los fogones, además de una barra con la caja y las bebidas.',
	},
	{
		title: 'Pato laqueado y empanadillas',
		text: 'En las fotos del perfil aparecen el pato laqueado cortado en láminas sobre lechuga con su salsa, las empanadillas a la plancha con el cuenco de soja, la berenjena estofada y las judías verdes picantes: los entrantes de siempre.',
	},
	{
		title: 'Wok y mesa grande',
		text: 'Las mesas son de madera, con el disco giratorio y mantel de papel, y el local tiene un gran relieve de paisaje chino en la pared. Los platos llegan al centro, en fuentes grandes, para compartir entre varios.',
	},
	{
		title: '4,1 sobre 5 con 622 reseñas',
		text: 'La ficha de Google le da 4,1 sobre 5 con 622 opiniones (noviembre de 2026). Las reseñas que se ven hablan de un servicio rápido y de pedir un entrante y un plato principal por persona.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Nos atendieron rápido, pedimos un entrante y un plato principal para cada uno.',
	},
];

/**
 * Lo que se reconoce en las fotos del perfil y lo que se puede leer en el
 * restaurante. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Entrantes',
		items: [
			{ name: 'Empanadillas a la plancha', note: 'gyozas doradas por abajo, con su cuenco de salsa de soja' },
			{ name: 'Berenjenas estofadas', note: 'en su salsa, con la piel morada y la carne tierna' },
			{ name: 'Judías verdes picantes', note: 'salteadas con ajo y guindilla' },
			{ name: 'Ensalada de la casa', note: 'para empezar, con lechuga y maíz' },
		],
	},
	{
		title: 'Del wok',
		items: [
			{ name: 'Coliflor y verdura al wok', note: 'salteada con ternera y pimiento, servida en el wok sobre el hornillo' },
			{ name: 'Pato laqueado', note: 'cortado en láminas sobre lechuga, con salsa aparte' },
			{ name: 'Cabeza de león con bollos al vapor', note: 'la gran albóndiga estofada en su salsa, rodeada de mantou' },
			{ name: 'Gambas con verdura', note: 'salteadas, con cebolla y zanahoria' },
		],
	},
	{
		title: 'Arroces, fideos y sopas',
		items: [
			{ name: 'Tallarines de arroz ancho', note: 'salteados con verdura y salsa de soja' },
			{ name: 'Fideos con ternera', note: 'en plato grande, con la verdura al dente' },
			{ name: 'Sopa de fideos con pollo', note: 'caldo claro con fideos, pollo y espinaca' },
			{ name: 'Arroz tres delicias', note: 'el clásico para acompañar los platos al centro' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Postres de la casa', note: 'la ficha no publica carta de postres' },
			{ name: 'Café y copa', note: 'la ficha no publica carta de bebidas' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El León de Oro?',
		a: 'En la calle Fernández del Campo, 8, barrio de Abando, 48010 Bilbao (Bizkaia). La ficha de Google sitúa el restaurante en las coordenadas 43.2585269, -2.9333686, en pleno Abando. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 12:00 a 16:30 y de 20:00 a 23:30, con el jueves empezando un poco antes, a las 11:30. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 944 43 56 46. El restaurante no tiene web propia ni reservas online, así que el teléfono es la vía para reservar mesa o preguntar por los platos del día.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reservas online, así que la mesa se pide por teléfono, en el 944 43 56 46. Si vais un grupo grande, conviene llamar con tiempo: las mesas son grandes y el comedor se llena a la hora de comer.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina china: empanadillas a la plancha, berenjenas estofadas, judías verdes picantes, verdura y coliflor al wok, pato laqueado, gambas con verdura, tallarines de arroz, fideos con ternera y sopa de fideos con pollo. En las fotos del perfil también aparece una gran albóndiga estofada con bollos al vapor.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha de Google no marca datos de accesibilidad para este local, así que no se puede confirmar desde aquí. Lo práctico es llamar al 944 43 56 46 y preguntar por el acceso y por si hay mesas adaptadas.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no lo indica y el restaurante no tiene web propia ni perfil de reparto enlazado, así que no se puede confirmar. Si te interesa pedir para casa, pregunta por teléfono en el 944 43 56 46.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios ni menú del día. El precio de cada plato se confirma al llamar o en el propio restaurante; las reseñas hablan de pedir un entrante y un plato principal por persona.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'La ficha no la menciona y las fotos del perfil son del comedor: mesas de madera, el relieve chino en la pared y la cocina al fondo. No hay mesas en la calle a la vista.',
	},
];

export const LEGAL = {
	razonSocial: 'El León de Oro',
	actualizado: 'Noviembre de 2026',
};
