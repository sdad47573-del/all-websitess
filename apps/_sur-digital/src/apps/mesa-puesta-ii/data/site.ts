/**
 * Datos de Mesa Puesta II — Calle de Isabel Colbrand, 18, Fuencarral-El Pardo,
 * 28050 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesa Puesta II, 40.5106493,-3.6774187,
 *   feature 0xd422bec008475c1:0x1b315ad71c49ebb7.
 * - Nombre, dirección, categorías, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios, así que no se inventan platos ni tarifas.
 */

export const BUSINESS = {
	name: 'Mesa Puesta II',
	fullName: 'Mesa Puesta II · pollo asado y comida para llevar en Madrid',
	shortName: 'Mesa Puesta',
	mark: 'M',
	street: 'Calle de Isabel Colbrand, 18',
	neighbourhood: 'Fuencarral-El Pardo',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28050',
	country: 'ES',
	phone: '913 44 65 78',
	phoneHref: '+34913446578',
	rating: 4.6,
	reviewsCount: 312,
	siteUrl: 'https://www.sur-digital.com/mesa-puesta-ii',
	geo: { lat: 40.5106493, lng: -3.6774187 },
	featureId: '0xd422bec008475c1:0x1b315ad71c49ebb7',
	placeId: 'ChIJwXWEAOwrQg0Rt-tJHNdaMRs',
	cid: '1959447192821951415',
	plusCode: '8CGRG86F+72',
	category: 'Restaurante especializado en pollo',
	tagline: 'Pollo asado, menú del día y comida para llevar en Fuencarral',
	description:
		'Mesa Puesta II, restaurante especializado en pollo y comida para llevar en la calle Isabel Colbrand 18, Fuencarral-El Pardo (28050 Madrid). Menú del día, pollo asado y platos de siempre. Abre todos los días de 9:00 a 17:00. 4,6 sobre 5 en Google con 312 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mesa+Puesta+II/@40.5106493,-3.6774187,17z/data=!3m1!4b1!4m6!3m5!1s0xd422bec008475c1:0x1b315ad71c49ebb7!8m2!3d40.5106493!4d-3.6774187!16s%2Fg%2F11btmrgl1p?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.5106493%2C-3.6774187',
	embed: 'https://maps.google.com/maps?q=40.5106493,-3.6774187&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.5106493,-3.6774187',
};

/** Horario publicado en la ficha de Google: todos los días, 9:00–17:00. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–17:00' },
	{ day: 'Martes', value: '9:00–17:00' },
	{ day: 'Miércoles', value: '9:00–17:00' },
	{ day: 'Jueves', value: '9:00–17:00' },
	{ day: 'Viernes', value: '9:00–17:00' },
	{ day: 'Sábado', value: '9:00–17:00' },
	{ day: 'Domingo', value: '9:00–17:00' },
];

/** Señales de identidad que constan en la ficha. */
export const SERVICIOS = [
	'Pollo asado',
	'Menú del día',
	'Comida para llevar',
	'Platos de siempre',
	'Para grupos',
];

/**
 * Platos que constan en fuentes públicas (ficha y reseñas del local). La
 * ficha no publica carta con precios: el menú del día cambia a diario y se
 * confirma por teléfono, así que aquí no se ponen tarifas.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado', note: 'con patatas · la especialidad de la casa' },
			{ name: 'Patatas fritas', note: 'guarnición para acompañar el pollo' },
			{ name: 'Alioli', note: 'para mojar, de la casa' },
		],
	},
	{
		title: 'Paellas y arroces por encargo',
		items: [
			{ name: 'Paella de marisco', note: 'por encargo · para grupos' },
			{ name: 'Arroz negro', note: 'por encargo · para grupos' },
			{ name: 'Paella de verduras', note: 'por encargo · para grupos' },
		],
	},
	{
		title: 'Entrantes y platos caseros',
		items: [
			{ name: 'Croquetas de jamón', note: 'con un toque picante' },
			{ name: 'Ensaladilla rusa', note: 'de la casa' },
			{ name: 'Tortilla de patata', note: 'jugosa, de las de siempre' },
			{ name: 'Albóndigas en salsa', note: 'guiso de la casa' },
			{ name: 'Boquerones en vinagre', note: 'entrante clásico' },
			{ name: 'Macarrones y pasta', note: 'plato de cuchara' },
			{ name: 'Berenjenas', note: 'de la vitrina' },
			{ name: 'Raviolis', note: 'pasta rellena' },
			{ name: 'Ternera en salsa', note: 'guiso de la casa' },
			{ name: 'Ensalada campera', note: 'ensalada de la casa' },
			{ name: 'Lasaña', note: 'para llevar' },
			{ name: 'Pescado en salsa verde', note: 'según el día' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Torrijas', note: 'de temporada' },
			{ name: 'Postres de la vitrina', note: 'pregunta por lo que hay ese día' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Menú diario',
				note: 'dos primeros y dos segundos a elegir, con pan · cambia cada día y se consulta por teléfono',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesa Puesta II?',
		a: 'En la calle Isabel Colbrand, 18, en Fuencarral-El Pardo, 28050 Madrid. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días de 9:00 a 17:00, según la ficha de Google. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono antes de desplazarse.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un restaurante especializado en pollo asado con menú del día y comida para llevar. Llama al 913 44 65 78 para conocer el menú del día y los platos disponibles.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. La ficha lo clasifica también como restaurante de comida para llevar. El teléfono publicado es el 913 44 65 78.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica un sistema de reservas ni una web propia. El canal que consta es el teléfono 913 44 65 78; llama para mesa o para encargar comida.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha lo describe como restaurante especializado en pollo y la información pública del local menciona menú diario con primeros y segundos a elegir. El menú cambia cada día, así que se confirma llamando.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 312 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del local. Esta página es informativa y no es un canal oficial de reservas ni de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
