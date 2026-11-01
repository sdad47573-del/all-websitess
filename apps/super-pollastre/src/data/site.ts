/**
 * Datos de Super Pollastre — Av. de Santa Coloma, 8, AD500 Andorra la Vella
 * (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Super Pollastre», 42.5047195,1.5147543,
 *   feature 0x12a5f529733cb43d:0xe7cf0d7dd9a873b2.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs), incluido el cartel del mostrador con medio
 *   pollastre y alas.
 *
 * La ficha es pequeña y no publica carta, precios, reseñas completas ni web
 * propia. Lo que aparece en la web es lo que dice la ficha y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Super Pollastre',
	fullName: 'Super Pollastre',
	shortName: 'Super Pollastre',
	mark: 'SP',
	street: 'Av. de Santa Coloma, 8',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://super-pollastre.vercel.app',
	geo: { lat: 42.5047195, lng: 1.5147543 },
	featureId: '0x12a5f529733cb43d:0xe7cf0d7dd9a873b2',
	placeId: 'ChIJPbQ8cyn1pRIRsnOo2X0Nz-c',
	plusCode: '8FJ3GG37+VW',
	googleCategory: 'Restaurante',
	phone: '+376 868 068',
	phoneHref: 'tel:+376868068',
	tagline: 'Pollo asado y bollería en Andorra la Vella',
	description:
		'Super Pollastre, en la Avenida de Santa Coloma, 8 (AD500 Andorra la Vella). Pollo asado para llevar, patatas con salsa y bollería de mostrador. Abre de martes a domingo de 9:00 a 16:00 y de 18:30 a 23:00; lunes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Super+Pollastre/@42.5047195,1.5147543,17z/data=!4m6!3m5!1s0x12a5f529733cb43d:0xe7cf0d7dd9a873b2!8m2!3d42.5047195!4d1.5147543!16s%2Fg%2F1pp2tvb_n?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5047195%2C1.5147543',
	embed: 'https://maps.google.com/maps?q=42.5047195,1.5147543&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5047195,1.5147543',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 3.8,
	count: 17,
	label: '3,8',
};

/** Horario que publica la ficha: mediodía y noche, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '9:00–16:00 · 18:30–23:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00 · 18:30–23:00' },
	{ dia: 'Jueves', horas: '9:00–16:00 · 18:30–23:00' },
	{ dia: 'Viernes', horas: '9:00–16:00 · 18:30–24:00' },
	{ dia: 'Sábado', horas: '9:00–16:00 · 18:30–24:00' },
	{ dia: 'Domingo', horas: '9:00–16:00 · 18:30–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de ir.';

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Para llevar',
	'Patatas con salsa',
	'Bollería',
	'Mostrador',
	'Comer en el local',
	'Pedidos por teléfono',
	'Abierto por la noche',
];

export const HIGHLIGHTS = [
	{
		title: 'Medio pollastre y alas',
		text: 'El cartel del mostrador, que se ve en una de las fotos del perfil, anuncia medio pollastre y alas junto a los refrescos. Es la carta de un asador de barrio: pollo al horno para llevar, por piezas.',
	},
	{
		title: 'También bollería',
		text: 'En el perfil hay dos bandejas de bollería recién horneada: napolitanas y bollos con chocolate, espolvoreados de azúcar. Se venden en el mismo mostrador que el pollo, para desayuno o merienda.',
	},
	{
		title: 'Patatas con salsa',
		text: 'El plato de patatas en dados con salsa rosa que aparece en las fotos se sirve en el local sobre papel de «Bon Appétit». Es la guarnición clásica del pollo asado, para comer allí o llevarse.',
	},
	{
		title: 'En la Avenida de Santa Coloma',
		text: 'El local está en el número 8 de la Avenida de Santa Coloma, la vía que baja hacia el centro de Andorra la Vella y conecta con Santa Coloma. Abre a las 9:00 y vuelve por la noche de 18:30 en adelante.',
	},
];

/**
 * Lo que se ve en el mostrador y en las fotos del perfil. La ficha no publica
 * carta ni precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Medio pollastre', note: 'el cartel del mostrador lo anuncia como ración' },
			{ name: 'Alas de pollo', note: '«aletes», por piezas, para picar o completar la mesa' },
			{ name: 'Pollo entero', note: 'para llevar a casa, recién salido del horno' },
			{ name: 'Pollo con patatas', note: 'la combinación de la casa, para compartir' },
		],
	},
	{
		title: 'Guarniciones',
		items: [
			{ name: 'Patatas con salsa', note: 'en dados, con la salsa rosa por encima' },
			{ name: 'Patatas fritas', note: 'la guarnición de siempre' },
			{ name: 'Ensalada', note: 'para acompañar el pollo' },
		],
	},
	{
		title: 'Bollería',
		items: [
			{ name: 'Napolitanas de chocolate', note: 'de la bandeja recién horneada del mostrador' },
			{ name: 'Bollos con chocolate', note: 'espolvoreados de azúcar, para desayunar' },
			{ name: 'Bollería surtida', note: 'lo que haya ese día en la bandeja' },
		],
	},
	{
		title: 'Bebidas y postres',
		items: [
			{ name: 'Refrescos', note: 'el cartel del mostrador los pone junto al pollo' },
			{ name: 'Café', note: 'para el mostrador' },
			{ name: 'Tartas por encargo', note: 'en el perfil aparece una tarta de celebración; se pregunta en el local' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Super Pollastre?',
		a: 'En la Avenida de Santa Coloma, 8, AD500 Andorra la Vella (Principado de Andorra). La ficha de Google sitúa el local en las coordenadas 42.5047195, 1.5147543. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de martes a jueves y el domingo de 9:00 a 16:00 y de 18:30 a 23:00; los viernes y sábados, la noche se alarga hasta las 24:00. El lunes está cerrado todo el día. La ficha también advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 868 068. El local no tiene web propia ni pedidos online, así que el teléfono es la vía para encargar el pollo o preguntar qué hay en el mostrador.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, es lo habitual en un asador de pollo: medio pollastre, alas o el pollo entero para llevar a casa. El cartel del mostrador anuncia el medio pollastre y las alas junto a los refrescos, y no hay servicio de reparto anunciado en la ficha.',
	},
	{
		q: '¿Qué más se puede comprar?',
		a: 'Además del pollo asado, en el perfil aparecen bandejas de bollería (napolitanas y bollos con chocolate) y un plato de patatas en dados con salsa. Es un mostrador doble: asador y bollería, con bebidas y café.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. El cartel del mostrador que aparece en las fotos los lleva impresos, tanto el medio pollastre como las alas, pero pueden cambiar: el importe se confirma al llamar o en el mostrador.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha lo clasifica como restaurante y en las fotos se ve el plato de patatas servido sobre papel de «Bon Appétit», así que hay servicio para comer allí. Es un local pequeño de mostrador, no un restaurante de mantel.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha de Google no marca datos de accesibilidad para este local, así que no se puede confirmar desde aquí. Lo práctico es llamar al +376 868 068 y preguntar por el acceso.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Super Pollastre',
	actualizado: 'Noviembre de 2026',
};
