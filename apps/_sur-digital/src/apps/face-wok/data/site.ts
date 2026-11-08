/**
 * Datos de FACE WOK — Autonomia Kalea, 2, Abando, 48012 Bilbao (Bizkaia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «FACE WOK», 43.2574699,-2.9350086,
 *   feature 0xd4e4fd5d2c8c4c1:0xf27e72cddf2d354a.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs), incluida la carta de la ventana, de donde
 *   salen las salsas y los tamaños pequeño/grande.
 *
 * La ficha no publica web propia ni precios: lo que aparece en la web es lo que
 * dice la ficha, lo que se lee en la carta del local y lo que se ve en las fotos.
 */

export const BUSINESS = {
	name: 'FACE WOK',
	fullName: 'FACE WOK',
	shortName: 'Face Wok',
	mark: 'FW',
	street: 'Autonomia Kalea, 2',
	district: 'Abando',
	city: 'Bilbao',
	region: 'País Vasco',
	postalCode: '48012',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/face-wok',
	geo: { lat: 43.2574699, lng: -2.9350086 },
	featureId: '0xd4e4fd5d2c8c4c1:0xf27e72cddf2d354a',
	placeId: 'ChIJwcTI0tVPTg0RSjUt381yfvI',
	plusCode: '8CMV7347+XX',
	googleCategory: 'Restaurante asiático, chino y de comida rápida',
	phone: '946 00 40 57',
	phoneHref: 'tel:+34946004057',
	tagline: 'Wok, arroz y tallarines en Bilbao',
	description:
		'FACE WOK, en Autonomia Kalea, 2 (48012 Bilbao, Abando). Wok asiático para llevar y para comer en el local: tallarines, arroces, entrantes y sushi, con salsa gratis a elegir en cada pedido. Todos los días de 11:30 a 16:30 y desde las 19:15.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FACE+WOK/@43.2574699,-2.9350086,17z/data=!4m6!3m5!1s0xd4e4fd5d2c8c4c1:0xf27e72cddf2d354a!8m2!3d43.2574699!4d-2.9350086!16s%2Fg%2F11c58ktqfh?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2574699%2C-2.9350086',
	embed: 'https://maps.google.com/maps?q=43.2574699,-2.9350086&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2574699,-2.9350086',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 484,
	label: '4,1',
};

/**
 * Horario que publica la ficha: mediodía y noche todos los días, con el cierre
 * de la noche más tarde el miércoles, el viernes y el sábado.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:30–16:30 · 19:15–23:45' },
	{ dia: 'Martes', horas: '11:30–16:30 · 19:15–23:45' },
	{ dia: 'Miércoles', horas: '11:30–16:30 · 19:15–24:00' },
	{ dia: 'Jueves', horas: 'Hasta 16:30 · 19:15–23:45' },
	{ dia: 'Viernes', horas: '11:30–16:30 · 19:15–24:00' },
	{ dia: 'Sábado', horas: '11:30–16:30 · 19:15–24:00' },
	{ dia: 'Domingo', horas: '11:30–16:30 · 19:15–23:45' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto, y en el mediodía del jueves muestra el tramo desde las 0:00, lo que parece un error: llama antes de ir.';

/** Lo que la ficha, la carta y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Restaurante asiático',
	'Tallarines al wok',
	'Arroces',
	'Entrantes',
	'Sushi',
	'Para llevar',
	'Comer en el local',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Wok para llevar o en el local',
		text: 'La ficha lo clasifica como restaurante asiático, chino y de comida rápida. Los pedidos salen en las cajas de cartón blancas de Face Wok, con asa, y también hay mesas de madera con sillas amarillas para comer allí.',
	},
	{
		title: 'Salsa gratis en cada pedido',
		text: 'La carta de la ventana lo dice: «con el pedido escoja una salsa gratis». Las hay de curry, agripicante, cebolla, tres delicias, soya y cacahuete, para echar por encima del arroz o de los tallarines.',
	},
	{
		title: 'Arroz, tallarines y sushi',
		text: 'En las fotos del perfil se ven las cajas con arroz tres delicias, tallarines con pollo o pato, empanadillas a la plancha y bandejas de sushi variado. La carta se organiza en tallarines, arroz, entrantes y sushi, con tamaño pequeño y grande.',
	},
	{
		title: '4,1 sobre 5 con 484 reseñas',
		text: 'La ficha de Google le da 4,1 sobre 5 con 484 opiniones (noviembre de 2026). Las reseñas que se ven cuentan pedidos de arroz tres delicias, pincho moruno de pollo, ensalada china y pan chino.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Comimos arroz tres delicias, pintxo moruno de pollo, ensalada china y pan chino.',
	},
];

/**
 * Lo que se reconoce en las fotos del perfil y lo que se lee en la carta de la
 * ventana. La ficha no publica precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Tallarines',
		items: [
			{ name: 'Tallarines con huevo y verduras', note: 'el básico de la carta, en tamaño pequeño o grande' },
			{ name: 'Tallarines con pollo', note: 'con pechuga de pollo salteada al wok' },
			{ name: 'Tallarines con pato asado', note: 'el pato laqueado de la casa, cortado en trozos' },
			{ name: 'Tallarines con marisco', note: 'con gambas y verduras, en la carta de tallarines' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Arroz tres delicias', note: 'con huevo, jamón y guisante, el de las cajas de las fotos' },
			{ name: 'Arroz diez delicias', note: 'la versión cargada, con pollo asado' },
			{ name: 'Arroz con curry', note: 'con salsa de curry, en la carta de arroces' },
			{ name: 'Arroz con gambas', note: 'con langostinos y verdura' },
		],
	},
	{
		title: 'Entrantes y sushi',
		items: [
			{ name: 'Empanadillas a la plancha', note: 'con su salsa de soja, como en la bandeja de las fotos' },
			{ name: 'Rollitos de primavera', note: 'de verdura, en el apartado de entrantes' },
			{ name: 'Sushi variado', note: 'bandejas de nigiri y rollitos, en la carta de sushi' },
			{ name: 'California roll', note: 'con coliflor frita, en la carta de sushi' },
		],
	},
	{
		title: 'Salsas y extras',
		items: [
			{ name: 'Salsa de curry', note: 'una gratis con cada pedido, a elegir' },
			{ name: 'Salsa agripicante', note: 'picante y ácida, de la lista de salsas' },
			{ name: 'Salsa de cacahuete', note: 'para los tallarines y el pollo' },
			{ name: 'Pan chino y patatas fritas', note: 'en el apartado de entrantes de la carta' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está FACE WOK?',
		a: 'En Autonomia Kalea, 2, barrio de Abando, 48012 Bilbao (Bizkaia). La ficha de Google sitúa el local en las coordenadas 43.2574699, -2.9350086. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 11:30 a 16:30 y vuelve por la noche desde las 19:15: hasta las 23:45 de domingo a jueves y hasta las 24:00 el miércoles, el viernes y el sábado. En el mediodía del jueves la ficha muestra el tramo desde las 0:00, lo que parece un error, así que conviene llamar antes de ir.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 946 00 40 57. El local no tiene web propia ni pedidos online, así que el teléfono es la vía para encargar o preguntar por el menú.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. La ficha lo clasifica como restaurante de comida rápida y las fotos del perfil muestran los pedidos en las cajas de cartón de Face Wok, con su salsa y sus palillos. Los pedidos se hacen por teléfono, en el 946 00 40 57.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Hay mesas de madera con sillas amarillas, pared de madera y lámparas colgantes, así que se puede comer allí. En el perfil de Google aparecen tanto fotos del comedor como de pedidos para llevar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La carta se organiza en tallarines, arroces, entrantes y sushi. Hay tallarines con huevo y verduras, con pollo, con pato asado y con marisco; arroz tres delicias, diez delicias, con curry y con gambas; empanadillas, rollitos y pan chino; y bandejas de sushi variado. Con cada pedido se elige una salsa gratis.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. La carta que el local tiene en la ventana los lleva impresos, en tamaño pequeño y grande, pero pueden cambiar: el precio se confirma al llamar. La salsa va incluida en el pedido.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas. No marca aseo adaptado ni aparcamiento adaptado, así que si necesitas algo concreto conviene preguntarlo al llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fotos del perfil muestran la fachada de noche, con la puerta abierta y el rótulo luminoso, y el comedor de dentro. No hay mesas en la acera a la vista, así que no se puede confirmar una terraza.',
	},
];

export const LEGAL = {
	razonSocial: 'FACE WOK',
	actualizado: 'Noviembre de 2026',
};
