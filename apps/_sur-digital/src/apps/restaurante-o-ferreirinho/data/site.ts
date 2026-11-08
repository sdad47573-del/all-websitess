/**
 * Datos de Restaurante O Ferreirinho — N116 52, 2670-674 Bucelas (Loures, Lisboa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante O Ferreirinho»,
 *   38.9082952,-9.1684023, feature 0xd192b9a07f8c7c3:0xd42cb883c1f39e99
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Página de Facebook «O Ferreirinho | Bucelas» (menú semanal de pratos do dia a
 *   7,50 €, grelhados y el vinho da região).
 * - Fichas públicas de directorio (opciones de servicio: para llevar, comer en el
 *   local, sin reparto; cerveza, café, vino y licores; platos pequeños).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El local no tiene web propia ni carta publicada con precios.
 */

export const BUSINESS = {
	name: 'O Ferreirinho',
	fullName: 'Restaurante O Ferreirinho',
	shortName: 'O Ferreirinho',
	mark: 'OF',
	street: 'N116, 52',
	city: 'Bucelas',
	municipality: 'Loures',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '2670-674',
	country: 'PT',
	phoneDisplay: '934 802 421',
	phoneHref: 'tel:+351934802421',
	rating: 4.3,
	reviewsCount: 141,
	siteUrl: 'https://www.sur-digital.com/restaurante-o-ferreirinho',
	geo: { lat: 38.9082952, lng: -9.1684023 },
	featureId: '0xd192b9a07f8c7c3:0xd42cb883c1f39e99',
	placeId: 'ChIJw8f4B5orGQ0RmZ7zwYO4LNQ',
	cid: '15288797711050186393',
	/** Categoría con la que Google describe el local. */
	googleCats: ['Restaurante'],
	/** Precio del menú semanal que anuncia el propio local en su Facebook. */
	dailyMenuPrice: '7,50 €',
	tagline: 'Comida casera a pie de la EN-116, en Bucelas',
	description:
		'O Ferreirinho, restaurante de comida casera en la N116, 52 (2670-674 Bucelas, Loures): pratos do dia, grelhados, sopa y sobremesas de la casa. 4,3 en Google con 141 reseñas. Tel. 934 802 421.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+O+Ferreirinho/@38.9082952,-9.1684023,17z/data=!3m1!4b1!4m6!3m5!1s0xd192b9a07f8c7c3:0xd42cb883c1f39e99!8m2!3d38.9082952!4d-9.1684023!16s%2Fg%2F11fj6xwg40',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9082952%2C-9.1684023',
	embed: 'https://maps.google.com/maps?q=38.9082952,-9.1684023&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: de lunes a sábado, sin cerrar al mediodía. */
export const HOURS = [
	{ day: 'Lunes', value: '07:30–21:00' },
	{ day: 'Martes', value: '07:30–21:00' },
	{ day: 'Miércoles', value: '07:30–21:00' },
	{ day: 'Jueves', value: '07:30–21:00' },
	{ day: 'Viernes', value: '07:30–21:00' },
	{ day: 'Sábado', value: '07:30–21:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y en directorios públicos. */
export const SERVICIOS = [
	'Pratos do dia',
	'Grelhados',
	'Comida casera',
	'Para llevar',
	'Comer en el local',
	'Cerveza y vino',
	'Café y sobremesas',
	'Menú del día 7,50 €',
	'Aseo adaptado para sillas de ruedas',
];

/**
 * Carta. El local no publica carta con precios: los apartados salen de lo que
 * anuncia en su Facebook y de lo que aparece en las fotos del perfil de Google.
 */
export const MENU = [
	{
		title: 'Pratos do dia',
		items: [
			{
				name: 'Menú del día',
				note: 'el que anuncia en Facebook a 7,50 € «tudo incluído»: plato, bebida y ensalada',
			},
			{
				name: 'Cozido à portuguesa',
				note: 'carne hervida con grelos, col, patata y huevo, como el de la foto',
			},
			{
				name: 'Migas con carnes',
				note: 'migas de pan con trozos de cerdo, chouriço y jamón por encima',
			},
			{
				name: 'Guisado del día',
				note: 'pollo o costilla guisados en tomate, con judía verde y patata',
			},
		],
	},
	{
		title: 'Da grelha e da panela',
		items: [
			{
				name: 'Peixe grelhado',
				note: 'pescado entero a la brasa, con patata asada y grelos',
			},
			{
				name: 'Bife grelhado',
				note: 'entrecot a la parrilla con patatas fritas, ensalada y un vaso de tinto',
			},
			{
				name: 'Arroz de marisco',
				note: 'arroz caldoso con gambas y mejillones, servido en la cazuela',
			},
			{ name: 'Sardinhas assadas', note: 'la ració grande que citan las reseñas' },
			{ name: 'Choco assado', note: 'choco asado, otro de los platos que repiten las reseñas' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Caracóis', note: 'caracoles de la casa, con el cuenco de salsa al lado' },
			{ name: 'Sopa', note: 'sopa del día con chouriço y berza, en cuenco de barro' },
			{ name: 'Ensalada', note: 'grande, aliñada al momento' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Sobremesas de la casa', note: 'los postres que la ficha destaca como excelentes' },
			{ name: 'Café', note: 'el café que las reseñas señalan como uno de los fuertes' },
			{ name: 'Vino de la región', note: 'Arinto de Bucelas, el blanco de la tierra' },
			{ name: 'Licores', note: 'la copa de después, servida en el local' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está O Ferreirinho?',
		a: 'En la N116, 52 (2670-674 Bucelas), en el municipio de Loures, a pie de la Estrada Nacional 116 que sube desde Bucelas hacia Chamboeira. Es un restaurante de carretera, con aparcamiento junto al local, y la parada de autobús de la zona queda a pocos metros. El mapa de esta página lleva directo a la puerta y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 07:30 a 21:00, sin cerrar al mediodía, y descansa los domingos. Es el horario de su ficha de Google; en festivos puede cambiar, así que si vas en una fecha señalada conviene llamar antes al 934 802 421.',
	},
	{
		q: '¿Qué se come?',
		a: 'Comida casera portuguesa. El local anuncia cada semana un menú de pratos do dia a 7,50 € «tudo incluído», y por las fotos de su perfil pasan el cozido à portuguesa, las migas con carnes, los guisados de pollo o costilla, el pescado a la brasa, el bife con patatas fritas, el arroz de marisco, los caracóis y la sopa con chouriço. También hay sardinhas assadas y choco assado, que repiten las reseñas, y los postres y el café salen bien parados en las opiniones.'
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El menú semanal que publica el propio restaurante en Facebook cuesta 7,50 € e incluye plato, bebida y ensalada. Los platos sueltos y los grelhados se cobran aparte y no están publicados, así que lo mejor es preguntar en el local o llamar al 934 802 421.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online y el local no tiene web propia. Se atiende por teléfono, en el 934 802 421; si vais en grupo o en fin de semana, avisar antes evita esperas, porque el comedor es pequeño y se llena a la hora de comer.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, el local ofrece servicio para llevar además de comer en el establecimiento. No hace reparto a domicilio: el pedido se recoge allí y se encarga por teléfono, en el 934 802 421.',
	},
	{
		q: '¿Se puede ir solo a tomar un café?',
		a: 'Sí. Es un restaurante de carretera con servicio de cafetería: sirve café, cerveza, vino y licores, y tiene platos pequeños para picar. Abre a las 07:30, así que también funciona para el café de la mañana.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca el aseo adaptado para sillas de ruedas. Es el único dato de accesibilidad que publica, así que si necesitas entrada o aparcamiento adaptados, llama antes al 934 802 421 y te lo confirman.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,3 sobre 5 con 141 reseñas. Las opiniones destacan la relación calidad-precio, la comida casera, el pescado a la parrilla y el trato familiar.',
	},
];
