/**
 * Datos de Antxeta jatetxea — Zubiaurrenea Kalea, 6 (20170 Usurbil, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Antxeta jatetxea | Recomendado»,
 *   43.2709732,-2.0489051, feature 0xd51b1209c093411:0x8407478c2bd8a536
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan sus reseñas y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Antxeta jatetxea',
	shortName: 'Antxeta',
	mark: 'AN',
	street: 'Zubiaurrenea Kalea, 6',
	city: 'Usurbil',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phoneDisplay: '943 54 43 12',
	phoneHref: 'tel:+34943544312',
	rating: 4.3,
	reviewsCount: 232,
	siteUrl: 'https://www.sur-digital.com/antxeta-jatetxea',
	geo: { lat: 43.2709732, lng: -2.0489051 },
	featureId: '0xd51b1209c093411:0x8407478c2bd8a536',
	placeId: 'ChIJETQJnCCxUQ0RNqXYK4xHB4Q',
	cid: '9513651405200074038',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Antxeta+jatetxea+%7C+Recomendado/@43.2709732,-2.0489051,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b1209c093411:0x8407478c2bd8a536!8m2!3d43.2709732!4d-2.0489051!16s%2Fg%2F1td0v6d1',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2709732%2C-2.0489051',
	embed: 'https://maps.google.com/maps?q=43.2709732,-2.0489051&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de lunes a jueves de 8:00 a 23:00, viernes y
 * sábado hasta las 24:00 y domingo de 9:00 a 23:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–23:00' },
	{ day: 'Martes', value: '8:00–23:00' },
	{ day: 'Miércoles', value: '8:00–23:00' },
	{ day: 'Jueves', value: '8:00–23:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '9:00–24:00' },
	{ day: 'Domingo', value: '9:00–23:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Una gran variedad de comida,menú, raciones, bocatas, platos combinados...',
	},
	{ rating: 5, text: 'Salimos satisfechos,volveremos' },
	{ rating: 5, text: 'Si quieres comida casera super rica no dudes en venir!' },
];

/**
 * Servicios y señas de identidad que sí constan: las categorías con las que
 * Google clasifica el local, lo que citan sus reseñas y su accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante y bar',
	'Comida casera',
	'Menú del día',
	'Raciones y bocatas',
	'Platos combinados',
	'Terraza',
	'Aparcamiento adaptado',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas
 * y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Menú y barra',
		items: [
			{ name: 'Menú del día', note: 'citado en una de las reseñas publicadas' },
			{ name: 'Raciones', note: '«menú, raciones, bocatas…», dice una reseña' },
			{ name: 'Bocatas', note: 'en la variedad que destaca la misma reseña' },
			{ name: 'Platos combinados', note: 'en la carta que citan sus reseñas' },
		],
	},
	{
		title: 'Platos de la casa',
		items: [
			{ name: 'Carne en salsa con patatas', note: 'en las fotos del perfil' },
			{ name: 'Calamares a la plancha con balsámico', note: 'en las fotos del perfil' },
			{ name: 'Pimientos del piquillo rellenos', note: 'en las fotos del perfil' },
			{ name: 'Croquetas', note: 'en las fotos del perfil' },
			{ name: 'Tortilla', note: 'en las fotos del perfil' },
			{ name: 'Chuletón con patatas y piquillos', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso con frutos rojos', note: 'en las fotos del perfil' },
			{ name: 'Postre casero con helado', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Antxeta jatetxea?',
		a: 'En Zubiaurrenea Kalea, 6, del 20170 Usurbil (Gipuzkoa). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:00 a 23:00, el viernes de 8:00 a 24:00, el sábado de 9:00 a 24:00 y el domingo de 9:00 a 23:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 54 43 12. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Menú del día, raciones, bocatas y platos combinados, según sus reseñas. También se le describe como comida casera. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Abre a las 8:00 de lunes a viernes y a las 9:00 los fines de semana, y es restaurante y bar, así que sirve cafés y bocatas además de comidas y cenas.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos de su perfil de Google aparecen las mesas de la terraza delante de la fachada amarilla de Antxeta Taberna, en la misma plaza.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,3 sobre 5 con 232 reseñas en Google. Las publicadas destacan la variedad de la carta y la comida casera.',
	},
	{
		q: '¿Hay acceso adaptado y aparcamiento?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, asientos adaptados y aparcamiento adaptado.',
	},
];
