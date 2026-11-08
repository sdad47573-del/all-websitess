/**
 * Datos de La Receta Sabrosona — C. P.º 1º de Mayo, 32
 * (41806 Umbrete, Sevilla). Ficha pública de Google Maps consultada
 * en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La oferta que se describe son los
 * platos de la descripción del negocio, sus fotografías y sus reseñas.
 */

export const BUSINESS = {
	name: 'La Receta Sabrosona',
	shortName: 'La Receta',
	mark: 'RS',
	street: 'C. P.º 1º de Mayo, 32',
	district: 'Sevilla',
	city: 'Umbrete',
	region: 'Andalucía',
	postalCode: '41806',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-receta-sabrosona',
	geo: { lat: 37.3721074, lng: -6.1555338 },
	featureId: '0xd1211608054307f:0xc09f16fa51edb071',
	placeId: 'ChIJfzBUgGAREg0RcbDtUfoWn8A',
	googleCategory: 'Comida a domicilio y establecimiento de comida preparada',
	phone: '954 49 59 67',
	phoneHref: 'tel:+34954495967',
	tagline: 'Pollos asados, tortillas y comida casera en Umbrete',
	description:
		'La Receta Sabrosona, comida para llevar en C. P.º 1º de Mayo, 32 (41806 Umbrete, Sevilla). Pollos asados, tortillas de patatas, arroces, fritos y comida casera, con el sabor de siempre. Encargos por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Receta+Sabrosona/@37.3721074,-6.1555338,17z/data=!3m1!4b1!4m6!3m5!1s0xd1211608054307f:0xc09f16fa51edb071!8m2!3d37.3721074!4d-6.1555338!16s%2Fg%2F11fy_1q320',
	cid: 'https://www.google.com/maps?cid=13882919398837579943',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3721074%2C-6.1555338',
	embed: 'https://maps.google.com/maps?q=37.3721074,-6.1555338&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3721074,-6.1555338',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.4, count: 152, label: '4,4' };

/** Horario publicado: mediodía todos los días y noches de jueves a sábado. */
export const HORARIO = [
	{ day: 'Lunes', value: '11:30 – 16:00' },
	{ day: 'Martes', value: '11:30 – 16:00' },
	{ day: 'Miércoles', value: '11:30 – 16:00' },
	{ day: 'Jueves', value: '11:30 – 16:00 · 19:30 – 22:30' },
	{ day: 'Viernes', value: '11:30 – 16:00 · 19:30 – 22:30' },
	{ day: 'Sábado', value: '11:30 – 16:00 · 19:30 – 22:30' },
	{ day: 'Domingo', value: '11:30 – 16:00' },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de mediodía todos los días, de 11:30 a 16:00, y añade un segundo turno de 19:30 a 22:30 los jueves, viernes y sábados. En festivos el horario puede variar, así que conviene confirmarlo por teléfono.';

export const SERVICIOS = [
	'Pollos asados',
	'Tortillas de patata',
	'Arroces y paellas',
	'Fritos',
	'Comida casera',
	'Repostería',
];

export const HIGHLIGHTS = [
	{
		title: 'El sabor de siempre',
		text: 'El negocio lo resume en su cartel y en su ficha: pollos asados, tortillas de patatas, arroces, fritos y comida casera «con el sabor de siempre». Cocina para llevar en el centro de Umbrete.',
	},
	{
		title: 'Tortilla y pollo asado',
		text: 'La tortilla de patatas entera y el pollo asado son los dos pilares de la casa. Una clienta cuenta su pedido habitual: «tortilla, pollo y filetitos roquefort».',
	},
	{
		title: 'Fritos recién hechos',
		text: 'Las reseñas hablan de «pescaíto recién frito y recogida a su hora, sin esperas». La ficha suma 152 opiniones con una nota media de 4,4 sobre 5.',
	},
];

/**
 * La ficha no publica carta ni precios. Selección basada en la descripción del
 * negocio, sus fotografías y las reseñas.
 */
export const MENU = [
	{
		title: 'Pollos y carnes',
		items: [
			{ name: 'Pollo asado', note: 'para recoger, entero' },
			{ name: 'Filetitos roquefort', note: 'con salsa de queso azul' },
		],
	},
	{
		title: 'Tortillas y arroces',
		items: [
			{ name: 'Tortilla de patatas', note: 'entera, dorada a la plancha' },
			{ name: 'Paella', note: 'arroz con gambas y verduras' },
			{ name: 'Arroces de la casa', note: 'según el día' },
		],
	},
	{
		title: 'Fritos y casero',
		items: [
			{ name: 'Pescaito frito', note: 'recién frito, para recoger' },
			{ name: 'Fritos del día', note: 'se consulta por teléfono' },
			{ name: 'Comida casera', note: 'platos de cuchara de la casa' },
		],
	},
	{
		title: 'Repostería',
		items: [
			{ name: 'Tarta de coco', note: 'de la casa' },
			{ name: 'Tarta de chocolate', note: 'con virutas y estrellas de chocolate blanco' },
			{ name: 'Roscón de Reyes', note: 'por temporada, por encargo' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«Pescaito recién frito y recogida a su hora, sin esperas.»', valor: 5 },
	{
		texto: '«Pedimos un pedido de tortilla, pollo y filetitos roquefort.»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Receta Sabrosona?',
		a: 'En el Paseo 1º de Mayo, 32, 41806 Umbrete (Sevilla). Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 954 49 59 67. Llama para encargar el pollo asado, la tortilla o los fritos y para confirmar la hora de recogida.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días a mediodía, de 11:30 a 16:00. Los jueves, viernes y sábados vuelve por la noche, de 19:30 a 22:30. En festivos el horario puede cambiar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollos asados, tortillas de patatas, arroces y paellas, fritos y comida casera, además de repostería. La oferta cambia según el día, así que conviene preguntar al llamar.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como comida a domicilio y establecimiento de comida preparada. Lo habitual es encargar y recoger en el local; pregunta por teléfono por la zona y las condiciones de reparto.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica una carta con precios, y esta web no los inventa. Los platos que aparecen son los de la descripción, las fotografías y las reseñas del negocio; consulta precios y disponibilidad al llamar.',
	},
	{
		q: '¿Hacen tartas y roscón por encargo?',
		a: 'En las fotos aparecen tartas de coco y de chocolate y un roscón de Reyes. Para encargar repostería conviene llamar con antelación al 954 49 59 67 y confirmar disponibilidad.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan los fritos, la recogida sin esperas y la comida casera.`,
	},
];
