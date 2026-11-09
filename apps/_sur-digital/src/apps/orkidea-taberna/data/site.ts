/**
 * Datos de Orkidea Taberna — Aizkorri Kalea, 4
 * (20100 Lezo, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Orkidea Taberna, 43.3224469,-1.8975459,
 *   feature 0xd51a61a6401ac35:0x2b65b277800c5a08 (dirección, horario, categoría,
 *   nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, correo, descripción
 * del local, carta, precios ni web propia. La carta recoge solo lo que citan sus
 * reseñas. No hay importes ni datos de contacto en ningún sitio: los botones de
 * la web llevan a la ficha de Google Maps, que es el único canal publicado.
 */

export const BUSINESS = {
	name: 'Orkidea Taberna',
	shortName: 'Orkidea',
	mark: 'OR',
	street: 'Aizkorri Kalea, 4',
	city: 'Lezo',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20100',
	country: 'ES',
	rating: 4.6,
	reviewsCount: 42,
	siteUrl: 'https://www.sur-digital.com/orkidea-taberna',
	geo: { lat: 43.3224469, lng: -1.8975459 },
	featureId: '0xd51a61a6401ac35:0x2b65b277800c5a08',
	placeId: 'ChIJNawBZBqmUQ0RCFoMgHeyZSs',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Taberna y restaurante en Lezo',
	/** La ficha de Google no publica teléfono ni correo. */
	hasPublicPhone: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Orkidea+Taberna/@43.3224469,-1.8975459,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a61a6401ac35:0x2b65b277800c5a08!8m2!3d43.3224469!4d-1.8975459!16s%2Fg%2F11hbgsc19d',
	cid: 'https://www.google.com/maps?cid=3127101742597822984',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3224469%2C-1.8975459',
	embed: 'https://maps.google.com/maps?q=43.3224469,-1.8975459&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre todos los días, con la mañana
 * del fin de semana más relajada y la noche del sábado más larga.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–21:00' },
	{ day: 'Martes', value: '10:00–21:00' },
	{ day: 'Miércoles', value: '8:30–22:00' },
	{ day: 'Jueves', value: '8:30–22:00' },
	{ day: 'Viernes', value: '8:30–22:00' },
	{ day: 'Sábado', value: '9:00–23:00' },
	{ day: 'Domingo', value: '10:00–21:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Buenos pintxos....carne guisada espectacular.....y muy buen ambiente' },
	{ rating: 5, text: 'Todo muy bien, ambiente total camareros 100 % lo recomiendo.' },
	{ rating: 5, text: 'Muy agradable y un buen trato, para volver.' },
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google lo
 * clasifica, lo que citan sus reseñas y su accesibilidad.
 */
export const SERVICIOS = [
	'Taberna en Lezo',
	'Restaurante',
	'Pintxos',
	'Carne guisada',
	'Acceso para sillas de ruedas',
	'Todos los días abierto',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google.
 */
export const MENU = [
	{
		title: 'Lo que piden',
		items: [
			{ name: 'Pintxos', note: '«buenos pintxos», empieza una de sus reseñas' },
			{ name: 'Carne guisada', note: '«carne guisada espectacular», añade la misma' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Ambiente', note: '«muy buen ambiente», dicen dos de las reseñas' },
			{ name: 'Trato', note: '«muy agradable y un buen trato, para volver»' },
			{ name: 'Equipo', note: '«camareros 100 %», en palabras de otra reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Orkidea Taberna?',
		a: 'En Aizkorri Kalea, 4, del 20100 Lezo (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. Lunes y martes, de 10:00 a 21:00; de miércoles a viernes, de 8:30 a 22:00; el sábado, de 9:00 a 23:00; y el domingo, de 10:00 a 21:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta con la taberna?',
		a: 'La ficha de Google no publica teléfono, correo electrónico ni reserva online, y el local no tiene web propia. Por eso esta web no inventa un número de contacto: el botón «Cómo llegar» y el enlace a la ficha de Google Maps son los únicos canales publicados.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan pintxos y una carne guisada que describen como «espectacular». La ficha no publica carta completa ni precios, así que no hay más platos confirmados.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica datos sobre asientos, aseo o aparcamiento adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 42 reseñas en Google.',
	},
	{
		q: '¿Se puede ir con niños o en grupo?',
		a: 'La ficha no publica información sobre mesas de grupo ni menús infantiles, así que no se puede confirmar desde aquí. Lo mejor es acercarse al local y preguntar.',
	},
];
