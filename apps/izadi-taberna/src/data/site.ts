/**
 * Datos de Izadi Taberna — Hamarretxeta Kalea, 20
 * (20110 Pasai Antxo, Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Izadi Taberna, 43.3163917,-1.9180646,
 *   feature 0xd51a5f9b0ed4b49:0x620b72e260a63a47 (dirección, teléfono, horario,
 *   categorías, nota y reseñas).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del local, carta,
 * precios, servicios ni datos de accesibilidad, y el local no tiene web propia.
 * La carta recoge solo lo que citan sus reseñas y las categorías con las que
 * Google lo clasifica. No hay importes en ningún sitio.
 */

export const BUSINESS = {
	name: 'Izadi Taberna',
	shortName: 'Izadi',
	mark: 'IZ',
	street: 'Hamarretxeta Kalea, 20',
	district: 'Pasai Antxo',
	city: 'Pasaia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 51 07 50',
	phoneHref: 'tel:+34943510750',
	rating: 4.7,
	reviewsCount: 84,
	siteUrl: 'https://izadi-taberna.vercel.app',
	geo: { lat: 43.3163917, lng: -1.9180646 },
	featureId: '0xd51a5f9b0ed4b49:0x620b72e260a63a47',
	placeId: 'ChIJSUvtsPmlUQ0RRzqmYOJyC2I',
	/** Categorías con las que Google clasifica el local. */
	tagline: 'Restaurante y cafetería en Pasai Antxo',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Izadi+Taberna/@43.3163917,-1.9180646,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a5f9b0ed4b49:0x620b72e260a63a47!8m2!3d43.3163917!4d-1.9180646!16s%2Fg%2F11cmf_bbg5',
	cid: 'https://www.google.com/maps?cid=7064866757070436935',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3163917%2C-1.9180646',
	embed: 'https://maps.google.com/maps?q=43.3163917,-1.9180646&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre todos los días, con el fin de
 * semana una hora más tarde por la mañana.
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
	{ rating: 5, text: 'Excelente sitio para tomar un pincho o una exquisita croqueta.' },
	{
		rating: 5,
		text: 'Personal muy majo y agradable, pintxos super ricos,especialmente las croquetas',
	},
	{ rating: 5, text: 'Taberna de pasaia con buen trato y buenas croquetas' },
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google lo
 * clasifica, lo que citan sus reseñas y su horario.
 */
export const SERVICIOS = [
	'Taberna en Pasai Antxo',
	'Restaurante',
	'Cafetería',
	'Pinchos',
	'Croquetas',
	'Abierto todos los días',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo dicen sus reseñas o las categorías con las que Google describe el local.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{
				name: 'Pinchos',
				note: '«excelente sitio para tomar un pincho», dice una de sus reseñas',
			},
			{
				name: 'Croquetas',
				note: '«especialmente las croquetas», coinciden las reseñas de la ficha',
			},
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Café', note: 'la ficha de Google lo clasifica como cafetería' },
			{ name: 'Cocina de restaurante', note: 'también figura como restaurante en Google' },
			{ name: 'Trato', note: '«personal muy majo y agradable», en palabras de una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Izadi Taberna?',
		a: 'En Hamarretxeta Kalea, 20, en Pasai Antxo, dentro del 20110 Pasaia (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. De lunes a jueves, de 8:00 a 23:00; el viernes, de 8:00 a 24:00; el sábado, de 9:00 a 24:00; y el domingo, de 9:00 a 23:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Qué se puede tomar?',
		a: 'Pinchos y croquetas, que es lo que destacan sus reseñas: «excelente sitio para tomar un pincho o una exquisita croqueta» y «pintxos super ricos, especialmente las croquetas». Al estar clasificado como cafetería, también sirve café. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es restaurante o cafetería?',
		a: 'Las dos cosas. Google lo clasifica a la vez como restaurante y como cafetería.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 51 07 50. La ficha de Google no ofrece reserva online y el local tampoco publica una web propia.',
	},
	{
		q: '¿Tiene terraza o acceso adaptado?',
		a: 'La ficha de Google no publica información sobre terraza ni sobre accesibilidad, así que no se puede confirmar desde aquí. Lo mejor es llamar al 943 51 07 50 antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 84 reseñas en Google.',
	},
];
