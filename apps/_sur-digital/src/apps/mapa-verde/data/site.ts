/**
 * Datos de Mapa Verde — Trueba Kalea, 4
 * (20001 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mapa Verde, 43.3223871,-1.9741699,
 *   feature 0xd51a541991e47b9:0xb0f4b76896ab9213 (dirección, categoría,
 *   teléfono, horario, nota, reseñas y accesibilidad).
 * - Descripción que publica el propio restaurante en su ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios,
 * correo ni web propia. La carta recoge solo lo que citan sus reseñas.
 */

export const BUSINESS = {
	name: 'Mapa Verde',
	shortName: 'Mapa Verde',
	mark: 'MV',
	street: 'Trueba Kalea, 4',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20001',
	country: 'ES',
	phone: '943 84 18 62',
	phoneHref: 'tel:+34943841862',
	rating: 4.7,
	reviewsCount: 893,
	siteUrl: 'https://www.sur-digital.com/mapa-verde',
	geo: { lat: 43.3223871, lng: -1.9741699 },
	featureId: '0xd51a541991e47b9:0xb0f4b76896ab9213',
	placeId: 'ChIJuUcemUGlUQ0RE5Krlmi39LA',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Restaurante vegano en Gros, Donostia',
	description:
		'Pequeño restaurante vegano en el centro de Gros, en San Sebastián. Comida sana y equilibrada 100% libre de crueldad animal. Cocina consciente, comida real.',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mapa+Verde/@43.3223871,-1.9741699,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a541991e47b9:0xb0f4b76896ab9213!8m2!3d43.3223871!4d-1.9741699!16s%2Fg%2F11c6rhltc6',
	cid: 'https://www.google.com/maps?cid=12751018104825025043',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3223871%2C-1.9741699',
	embed: 'https://maps.google.com/maps?q=43.3223871,-1.9741699&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: solo mediodía, y cierra domingos. */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–15:30' },
	{ day: 'Martes', value: '12:30–15:30' },
	{ day: 'Miércoles', value: '12:30–15:30' },
	{ day: 'Jueves', value: '12:30–15:30' },
	{ day: 'Viernes', value: '12:30–15:30' },
	{ day: 'Sábado', value: '12:30–15:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'La burrata, guacamole, patatas, sopa thai y el tiramisú TODO INCREÍBLE' },
	{ rating: 5, text: 'Raciones generosas y gran calidad de los ingredientes.' },
	{ rating: 5, text: 'Los postres estaban deliciosos, no he probado mejor tarta de queso vegana.' },
];

/**
 * Señas de identidad que sí constan: categoría, descripción del local, lo que
 * citan sus reseñas y su teléfono.
 */
export const SERVICIOS = [
	'Restaurante vegano',
	'100% vegetal',
	'Comida sana y equilibrada',
	'Cocina consciente',
	'En el barrio de Gros',
	'Teléfono directo',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google o la descripción del propio restaurante.
 */
export const MENU = [
	{
		title: 'Lo que piden',
		items: [
			{ name: 'Burrata', note: '«la burrata... TODO INCREÍBLE», dice una reseña' },
			{ name: 'Guacamole', note: 'también entre lo que destaca la misma reseña' },
			{ name: 'Patatas', note: '«guacamole, patatas, sopa thai», continúa' },
			{ name: 'Sopa thai', note: 'una de las que la reseña califica de increíbles' },
		],
	},
	{
		title: 'Dulces',
		items: [
			{ name: 'Tiramisú', note: '«el tiramisú TODO INCREÍBLE»' },
			{ name: 'Tarta de queso vegana', note: '«no he probado mejor tarta de queso vegana»' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Cocina 100% vegetal', note: '«100% libre de crueldad animal», publica el local' },
			{ name: 'Raciones generosas', note: '«raciones generosas y gran calidad», dice otra reseña' },
			{ name: 'Comida real', note: '«cocina consciente, comida real», en su descripción' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mapa Verde?',
		a: 'En Trueba Kalea, 4, en el barrio de Gros de Donostia / San Sebastián (20001 Gipuzkoa). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre al mediodía de lunes a sábado, de 12:30 a 15:30, y cierra los domingos. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 84 18 62. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un restaurante vegano y su descripción habla de comida sana y equilibrada, 100% libre de crueldad animal. Sus reseñas citan la burrata, el guacamole, las patatas, la sopa thai, el tiramisú y la tarta de queso vegana. La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca aparcamiento adaptado para sillas de ruedas. No publica más datos sobre accesibilidad del local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 893 reseñas en Google.',
	},
];
