/**
 * Datos de Tolaita — Rafael Pikabea Hiribidea, 11
 * (20180 Elizalde, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Tolaita, 43.2990684,-1.8626133,
 *   feature 0xd51a8666c52f021:0x1d33d7781dd694cf (dirección, categoría,
 *   teléfono, horario, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios,
 * correo ni web propia. La carta recoge solo lo que citan sus reseñas y el
 * horario es el que publica la propia ficha.
 */

export const BUSINESS = {
	name: 'Tolaita',
	shortName: 'Tolaita',
	mark: 'TO',
	street: 'Rafael Pikabea Hiribidea, 11',
	city: 'Elizalde',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20180',
	country: 'ES',
	phone: '943 01 47 02',
	phoneHref: 'tel:+34943014702',
	rating: 4.6,
	reviewsCount: 221,
	siteUrl: 'https://tolaita.vercel.app',
	geo: { lat: 43.2990684, lng: -1.8626133 },
	featureId: '0xd51a8666c52f021:0x1d33d7781dd694cf',
	placeId: 'ChIJIfBSbGaoUQ0Rz5TWHXjXMx0',
	/** Categoría con la que Google clasifica el local, y su descripción. */
	tagline: 'Bar restaurante en Elizalde',
	description: 'Bar-Jatetxe',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tolaita/@43.2990684,-1.8626133,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a8666c52f021:0x1d33d7781dd694cf!8m2!3d43.2990684!4d-1.8626133!16s%2Fg%2F11dfslmmp7',
	cid: 'https://www.google.com/maps?cid=2104262361808803023',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2990684%2C-1.8626133',
	embed: 'https://maps.google.com/maps?q=43.2990684,-1.8626133&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra los martes. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–21:00' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '9:00–22:00' },
	{ day: 'Jueves', value: '9:00–22:00' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '9:00–23:30' },
	{ day: 'Domingo', value: '9:00–21:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Pedimos platos combinados y rissotto y buenísimo.' },
	{ rating: 5, text: 'Magnífica atención, los camareros son súper agradables y rápidos.' },
];

/**
 * Señas de identidad que sí constan: categoría, lo que citan sus reseñas, su
 * teléfono y los datos de accesibilidad de la ficha.
 */
export const SERVICIOS = [
	'Bar restaurante en Elizalde',
	'Platos combinados',
	'Risotto',
	'Acceso para sillas de ruedas',
	'Teléfono directo',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google o la descripción del propio local.
 */
export const MENU = [
	{
		title: 'Lo que piden',
		items: [
			{ name: 'Platos combinados', note: '«pedimos platos combinados», dice una reseña' },
			{ name: 'Risotto', note: '«y rissotto y buenísimo», añade la misma' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Bar-Jatetxe', note: 'la descripción que publica el propio local en Google' },
			{ name: 'Servicio atento', note: '«magnífica atención», en palabras de otra reseña' },
			{ name: 'Equipo rápido', note: '«súper agradables y rápidos», añade la misma' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tolaita?',
		a: 'En Rafael Pikabea Hiribidea, 11, del 20180 Elizalde (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días menos los martes: lunes y domingo de 9:00 a 21:00; miércoles y jueves de 9:00 a 22:00; y viernes y sábado de 9:00 a 23:30. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta con el bar?',
		a: 'Por teléfono, en el 943 01 47 02. La ficha de Google publica ese número, pero no un correo electrónico, una web propia ni un sistema de reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan platos combinados y risotto, y los describen como «buenísimo». La ficha no publica carta completa ni precios, así que no hay más platos confirmados.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 221 reseñas en Google.',
	},
];
