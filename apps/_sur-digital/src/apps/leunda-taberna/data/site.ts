/**
 * Datos de Leunda Taberna — Oarso Kalea, 8 (20110 Pasai Antxo, Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Leunda Taberna», 43.3165026,-1.918126,
 *   feature 0xd51a5f9ba894ae9:0xa8107bc03f98583e (dirección, teléfono, horario,
 *   categoría, nota y reseñas).
 * - Reseñas publicadas en esa ficha: pintxos caseros, tortilla de bacalao y
 *   cerveza Estrella Galicia.
 * - Guía local Branka (Pasaia) y el registro de actividad de Oarsoaldea: menús
 *   diarios, menú del día y cenas de fin de semana.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios y no marca
 * servicios de accesibilidad, así que no se afirma ninguna de las dos cosas.
 */

export const BUSINESS = {
	name: 'Leunda Taberna',
	shortName: 'Leunda',
	mark: 'LE',
	street: 'Oarso Kalea, 8',
	city: 'Pasai Antxo',
	municipality: 'Pasaia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 51 54 14',
	phoneHref: 'tel:+34943515414',
	rating: 4.2,
	reviewsCount: 118,
	siteUrl: 'https://www.sur-digital.com/leunda-taberna',
	geo: { lat: 43.3165026, lng: -1.918126 },
	featureId: '0xd51a5f9ba894ae9:0xa8107bc03f98583e',
	placeId: 'ChIJ6UqJuvmlUQ0RPliYP8B7EKg',
	cid: '12110315463630149694',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Leunda+Taberna/@43.3165026,-1.918126,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a5f9ba894ae9:0xa8107bc03f98583e!8m2!3d43.3165026!4d-1.918126!16s%2Fg%2F1hc3k4slh',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3165026%2C-1.918126',
	embed: 'https://maps.google.com/maps?q=43.3165026,-1.918126&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: abre a las 8:00 de lunes a sábado; de lunes a
 * jueves cierra a las 22:00 y viernes y sábado a medianoche. El domingo no abre.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–22:00' },
	{ day: 'Martes', value: '8:00–22:00' },
	{ day: 'Miércoles', value: '8:00–22:00' },
	{ day: 'Jueves', value: '8:00–22:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: 'Cerrado' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Pintxos caseros, cerveza Estrella Galicia y tortilla de bacalao buenísima.',
	},
	{ rating: 3, text: 'Buen lugar, trato amable y buena comida.' },
] as const;

/**
 * Categoría y señas que constan: Google la clasifica como restaurante; el
 * registro de actividad de Oarsoaldea la da de alta como bar y restaurante con
 * menú del día, y las reseñas hablan de pintxos, tortilla de bacalao y cerveza.
 */
export const SERVICIOS = [
	'Bar y restaurante',
	'Menú del día',
	'Pintxos caseros',
	'Tortilla de bacalao',
	'Bocadillos',
	'Cenas de fin de semana',
	'Cerveza Estrella Galicia',
] as const;

/**
 * Carta: la ficha no publica carta ni precios. Cada entrada lleva la nota de
 * dónde consta.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{ name: 'Pintxos caseros', note: '«pintxos caseros», dice una reseña' },
			{ name: 'Tortilla de bacalao', note: '«buenísima», según la misma reseña' },
			{ name: 'Cerveza Estrella Galicia', note: 'la que cita esa reseña' },
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{ name: 'Bocadillo de tortilla', note: 'en el cartel de la ventana' },
			{ name: 'Bocadillo de lomo', note: 'en el mismo cartel' },
			{ name: 'Bocadillo de pechuga bechamel', note: 'en el mismo cartel' },
		],
	},
	{
		title: 'El menú',
		items: [
			{ name: 'Menú del día', note: 'el local lo anuncia en las guías locales de Pasaia' },
			{ name: 'Cenas de fin de semana', note: 'anunciadas como «asteburuetako afariak»' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está Leunda Taberna?',
		a: 'En Oarso Kalea, 8, en el 20110 Pasai Antxo (Pasaia, Gipuzkoa). El mapa de esta página lleva directo a la taberna y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado a las 8:00. De lunes a jueves cierra a las 22:00; los viernes y sábados, a medianoche. El domingo no abre. Es el horario de su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer o picar?',
		a: 'Lo que citan sus reseñas: pintxos caseros y tortilla de bacalao, además de cerveza Estrella Galicia. En las guías locales de Pasaia anuncia menú del día y cenas de fin de semana. La ficha de Google no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		q: '¿Se puede comer de menú?',
		a: 'Sí. El registro de actividad de Oarsoaldea la da de alta como bar y restaurante con menú del día, y la guía Branka anuncia «eguneroko menuak» (menús diarios). El precio y los platos se consultan llamando al 943 51 54 14.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 51 54 14. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No: la ficha de Google marca el domingo como cerrado. El resto de días abre a las 8:00, así que sirve desayunos y comidas.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google no marca ningún servicio de accesibilidad, así que esta web no afirma que lo tenga. Lo mejor es preguntar al llamar.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,2 sobre 5 con 118 reseñas en Google. Las publicadas destacan los pintxos caseros, la tortilla de bacalao y el trato amable.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
