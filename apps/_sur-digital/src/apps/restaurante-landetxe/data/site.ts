/**
 * Datos de Restaurante Landetxe Jatetxea — Mendiburu Kalea
 * (20180 Elizalde, Oiartzun, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Landetxe Jatetxea | Oiartzun,
 *   43.2997679,-1.861426, feature 0xd51a99df0d9677f:0x27fa09e5fedf5119
 *   (dirección, categorías, teléfono, horario, nota, reseñas y accesibilidad).
 * - Descripción que publica el propio local: «Landetxeko taberna».
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios,
 * correo ni web propia. La carta recoge solo lo que citan sus reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Landetxe Jatetxea',
	shortName: 'Landetxe',
	mark: 'LJ',
	street: 'Mendiburu Kalea',
	city: 'Elizalde',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20180',
	country: 'ES',
	phone: '666 69 34 66',
	phoneHref: 'tel:+34666693466',
	rating: 4.5,
	reviewsCount: 244,
	siteUrl: 'https://www.sur-digital.com/restaurante-landetxe',
	geo: { lat: 43.2997679, lng: -1.861426 },
	featureId: '0xd51a99df0d9677f:0x27fa09e5fedf5119',
	placeId: 'ChIJf2fZ8J2pUQ0RGVHf_uUJ-ic',
	/** Categorías con las que Google clasifica el local. */
	tagline: 'Restaurante, bar y taberna en Elizalde (Oiartzun)',
	description: 'Landetxeko taberna',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Landetxe+Jatetxea+%7C+Oiartzun/@43.2997679,-1.861426,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a99df0d9677f:0x27fa09e5fedf5119!8m2!3d43.2997679!4d-1.861426!16s%2Fg%2F11khd09qbc',
	cid: 'https://www.google.com/maps?cid=2880625795085062425',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2997679%2C-1.861426',
	embed: 'https://maps.google.com/maps?q=43.2997679,-1.861426&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: abre todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–22:00' },
	{ day: 'Martes', value: '9:00–22:00' },
	{ day: 'Miércoles', value: '9:00–22:00' },
	{ day: 'Jueves', value: '9:00–22:00' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '9:00–23:30' },
	{ day: 'Domingo', value: '9:30–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Pollo en salsa de cerveza como segundo plato.' },
	{ rating: 5, text: 'Buen servicio, atentos y rápidos Calidad de productos y raciones generosas.' },
];

/**
 * Señas de identidad que sí constan: categorías, descripción del local, lo que
 * citan sus reseñas y los datos de accesibilidad de la ficha.
 */
export const SERVICIOS = [
	'Restaurante, bar y taberna',
	'Pintxos',
	'Raciones generosas',
	'Música en directo',
	'Bar deportivo',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google o la descripción del propio local.
 */
export const MENU = [
	{
		title: 'La taberna',
		items: [
			{ name: 'Pintxos', note: 'la ficha lo clasifica también como bar de tapas' },
			{ name: 'Pollo en salsa de cerveza', note: '«como segundo plato», dice una reseña' },
			{ name: 'Raciones', note: '«raciones generosas», añade otra reseña' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Cocina de taberna', note: '«Landetxeko taberna», publica el propio local' },
			{ name: 'Calidad de producto', note: '«calidad de productos», en palabras de una reseña' },
			{ name: 'Servicio atento', note: '«buen servicio, atentos y rápidos»' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Landetxe Jatetxea?',
		a: 'En Mendiburu Kalea, del 20180 Elizalde, en Oiartzun (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días: de lunes a jueves de 9:00 a 22:00; viernes y sábado de 9:00 a 23:30; y domingo de 9:30 a 22:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 666 69 34 66. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante, bar, cafetería, bar de tapas y bar con música en directo. Sus reseñas citan los pintxos, el pollo en salsa de cerveza y unas raciones generosas. No publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, asientos adaptados, aseo adaptado y aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 244 reseñas en Google.',
	},
];
