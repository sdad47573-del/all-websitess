/**
 * Datos de Bar Lasarte — Arrandegi Kalea, 8
 * (20003 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar Lasarte, 43.3237451,-1.9838107,
 *   feature 0xd51a56aff91a545:0x987d6a87e9545758 (dirección, categoría,
 *   teléfono, horario, nota, reseñas y accesibilidad).
 * - Descripción que publica el propio bar en su ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios,
 * correo ni web propia. La carta recoge solo lo que citan sus reseñas y la
 * descripción del propio local.
 */

export const BUSINESS = {
	name: 'Bar Lasarte',
	shortName: 'Lasarte',
	mark: 'BL',
	street: 'Arrandegi Kalea, 8',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20003',
	country: 'ES',
	phone: '943 58 50 96',
	phoneHref: 'tel:+34943585096',
	rating: 4.4,
	reviewsCount: 1090,
	siteUrl: 'https://bar-lasarte.vercel.app',
	geo: { lat: 43.3237451, lng: -1.9838107 },
	featureId: '0xd51a56aff91a545:0x987d6a87e9545758',
	placeId: 'ChIJRaWR_2qlUQ0RWFdU6YdqfZg',
	/** Categorías con las que Google clasifica el local. */
	tagline: 'Restaurante y bar en la Parte Vieja de Donostia',
	description:
		'Nacimos en Lasarte, luego llegamos a Riberas de Loiola y ahora tenemos un nuevo local en la Parte Vieja Donostiarra. Ofrecemos desde raciones, ensaladas, platos combinados, bocadillos, hamburguesas y sándwiches, hasta carnes, pescados, menús del día y menús especiales de fin de semana.',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Lasarte/@43.3237451,-1.9838107,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a56aff91a545:0x987d6a87e9545758!8m2!3d43.3237451!4d-1.9838107!16s%2Fg%2F11n5yxdrrx',
	cid: 'https://www.google.com/maps?cid=10988055797821626200',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3237451%2C-1.9838107',
	embed: 'https://maps.google.com/maps?q=43.3237451,-1.9838107&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra los jueves. */
export const HOURS = [
	{ day: 'Domingo', value: '10:00–24:00' },
	{ day: 'Lunes', value: '10:00–24:00' },
	{ day: 'Martes', value: '10:00–24:00' },
	{ day: 'Miércoles', value: '10:00–24:00' },
	{ day: 'Jueves', value: 'Cerrado', closed: true },
	{ day: 'Viernes', value: '10:00–1:00' },
	{ day: 'Sábado', value: '10:00–1:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Buenos y variados pintxos, camareros atentos y rápidos, ¡qué más se puede pedir!' },
	{ rating: 5, text: 'Buen sitio para comer desde pinchos hasta menú del día con comida casera.' },
	{ rating: 5, text: 'Una anfitriona Arantxa, buena comida y un buen ambiente con buena música' },
];

/**
 * Señas de identidad que sí constan: categorías, lo que publica el local y lo
 * que citan sus reseñas.
 */
export const SERVICIOS = [
	'Restaurante y bar en la Parte Vieja',
	'Pintxos',
	'Raciones',
	'Menú del día',
	'Bocadillos y hamburguesas',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google o la descripción del propio bar.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{ name: 'Pintxos', note: '«buenos y variados pintxos», dice una reseña' },
			{ name: 'Bocadillos', note: 'la descripción del local los incluye' },
			{ name: 'Hamburguesas y sándwiches', note: 'también entre lo que ofrece la casa' },
		],
	},
	{
		title: 'La carta',
		items: [
			{ name: 'Raciones', note: 'la descripción del local empieza por las raciones' },
			{ name: 'Ensaladas', note: 'junto a los platos combinados, en su descripción' },
			{ name: 'Platos combinados', note: '«hasta platos combinados», publica el bar' },
			{ name: 'Carnes y pescados', note: 'la carta que describe el propio local' },
			{ name: 'Menú del día', note: '«menú del día con comida casera», dice una reseña' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Comida casera', note: '«menú del día con comida casera», en una reseña' },
			{ name: 'Ambiente y música', note: '«buen ambiente con buena música», añade otra' },
			{ name: 'Servicio atento', note: '«camareros atentos y rápidos»' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Lasarte?',
		a: 'En Arrandegi Kalea, 8, del 20003 Donostia / San Sebastián (Gipuzkoa), en la Parte Vieja. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de domingo a miércoles de 10:00 a 24:00; viernes y sábado de 10:00 a 1:00. Los jueves cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 58 50 96. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Su descripción habla de raciones, ensaladas, platos combinados, bocadillos, hamburguesas, sándwiches, carnes, pescados, menús del día y menús especiales de fin de semana. Sus reseñas destacan los pintxos y el menú del día con comida casera. La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 1.090 reseñas en Google.',
	},
];
