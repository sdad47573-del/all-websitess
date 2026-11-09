/**
 * Datos de Jhol Mo Mo Restaurant & Bar — R. Maria Andrade 60C, 1170-210 Lisboa.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Jhol Mo Mo Restaurant & Bar»,
 *   38.7236016,-9.1343949, feature 0xd19338ff8454263:0x3ed631482196c30a
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y la
 *   descripción del propio restaurante).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Jhol Mo Mo Restaurant & Bar',
	shortName: 'Jhol Mo Mo',
	mark: 'JM',
	street: 'R. Maria Andrade, 60C',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1170-210',
	country: 'PT',
	phoneDisplay: '920 141 222',
	phoneHref: 'tel:+351920141222',
	rating: 4.4,
	reviewsCount: 448,
	siteUrl: 'https://www.sur-digital.com/jhol-mo-mo',
	geo: { lat: 38.7236016, lng: -9.1343949 },
	featureId: '0xd19338ff8454263:0x3ed631482196c30a',
	placeId: 'ChIJY0JF-I8zGQ0RCsOWIUgx1j4',
	cid: '4527860661238547210',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Jhol+Mo+Mo+Restaurant+%26+Bar/@38.7236016,-9.1343949,17z/data=!3m1!4b1!4m6!3m5!1s0xd19338ff8454263:0x3ed631482196c30a!8m2!3d38.7236016!4d-9.1343949!16s%2Fg%2F11clwn7myv',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7236016%2C-9.1343949',
	embed: 'https://maps.google.com/maps?q=38.7236016,-9.1343949&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días, de 9:00 a 23:30. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–23:30' },
	{ day: 'Martes', value: '9:00–23:30' },
	{ day: 'Miércoles', value: '9:00–23:30' },
	{ day: 'Jueves', value: '9:00–23:30' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '9:00–23:30' },
	{ day: 'Domingo', value: '9:00–23:30' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'A comida é cozinhada na hora, com ingredientes frescos, e a um preço imbatível.',
	'Restaurante delicioso com uma equipa muito atenciosa e simpática.',
	'Muito boa comida e staff muito atencioso.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, la descripción del propio restaurante y su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante nepalí',
	'Restaurante',
	'Mo mo',
	'Jhol mo mo',
	'Cocina nepalí',
	'Entrantes especiados',
	'Bebidas frías y calientes',
	'Asientos accesibles para sillas de ruedas',
];

/**
 * La ficha no publica carta, pero sí aparece fotografiada en el perfil: de ahí
 * salen los sets, los curries y los precios. Los mo mo vienen además de la
 * descripción del propio restaurante.
 */
export const MENU = [
	{
		title: 'Sets nepalíes',
		items: [
			{
				name: 'Nepali Khana Set',
				note: 'vegetariano 9,00 € · pollo 10,00 € · cerdo 11,00 € · cordero 12,00 €',
			},
			{
				name: 'Newari Khaja Set',
				note: 'vegetariano 9,50 € · pollo 11,00 € · cerdo 11,99 € · cordero 12,99 €',
			},
			{
				name: 'Dhido Set',
				note: 'vegetariano 9,00 € · pollo 10,00 € · cerdo 11,00 € · cordero 12,00 €',
			},
		],
	},
	{
		title: 'Mo mo',
		items: [
			{
				name: 'Jhol mo mo',
				note: 'empanadillas nepalíes con sopa, «our speciality dish», según la descripción del restaurante',
			},
			{ name: 'Mo mo al vapor', note: 'con chutney al lado, en las fotos del perfil' },
		],
	},
	{
		title: 'Curries',
		items: [
			{
				name: 'De pollo',
				note: 'chicken madras, bhuna, jalfrezi, korma y curry, en la carta fotografiada',
			},
			{
				name: 'De cerdo',
				note: 'pork madras, bhuna, jalfrezi, korma y curry, en la carta fotografiada',
			},
			{
				name: 'Vegetarianos',
				note: 'daal, mutter paneer, palak paneer, chana masala, saag aalu, aalu govi',
			},
		],
	},
	{
		title: 'Continental',
		items: [
			{ name: 'Bitoque', note: '10,00 €' },
			{ name: 'Bacalhau à Brás', note: '12,00 €' },
			{ name: 'Carbonara', note: '12,00 €' },
			{ name: 'Fish Grill', note: '12,00 €' },
			{ name: 'Tosta Mista', note: '4,00 €' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Ensalada de fruta', note: '6,00 €' },
			{ name: 'Ensalada mixta de verduras', note: '5,00 €' },
			{ name: 'Bebidas frías y calientes', note: 'en la descripción del negocio' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Jhol Mo Mo?',
		a: 'En la Rua Maria Andrade, 60C, del 1170-210 Lisboa, en la zona de Arroios, junto al Intendente. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días, de 9:00 a 23:30, incluido el domingo. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes, sobre todo en festivos.',
	},
	{
		q: '¿Qué es un mo mo?',
		a: 'El mo mo es la empanadilla nepalí, hecha al vapor con un relleno especiado. El restaurante lo explica así en su ficha: «dumpling with soup is our speciality dish». La versión con sopa —jhol significa caldo o salsa en nepalí— es la especialidad de la casa.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina nepalí. La descripción del restaurante resume la oferta: «Nepali taste» con entrantes especiados y ácidos, momos con sopa, arroz o roti (pan) con gravy y bebidas frías y calientes.',
	},
	{
		q: '¿Hay platos picantes?',
		a: 'La ficha habla de «some spicy and tangy starters», es decir, entrantes especiados y con acidez. No publica el grado de picante de cada plato: al pedir o al llamar al 920 141 222 se puede ajustar.',
	},
	{
		q: '¿Se puede pedir online?',
		a: 'Sí. La ficha de Google incluye «Pedir online» para tramitar el pedido. Para dudas sobre el reparto o el menú del día, el teléfono es el 920 141 222.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para reservar mesa hay que llamar al 920 141 222.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca asientos accesibles para personas en sillas de ruedas. No confirma entrada ni aseo adaptados, así que para eso lo mejor es llamar antes al 920 141 222.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 448 reseñas. Las publicadas destacan la cocina al momento con ingredientes frescos, el precio y el trato del equipo.',
	},
];
