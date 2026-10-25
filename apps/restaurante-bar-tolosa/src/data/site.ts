/**
 * Datos de Restaurante Bar Tolosa — Paseo Doctor José Begiristain, 90
 * (20014 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Bar Tolosa,
 *   43.2946317,-1.9667849, feature 0xd51af9400000001:0xbc5a7be853f7f23c
 *   (dirección, categoría, teléfono, horario, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios,
 * correo ni web propia. La carta recoge solo lo que citan sus reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Bar Tolosa',
	shortName: 'Bar Tolosa',
	mark: 'BT',
	street: 'Paseo Doctor José Begiristain, 90',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20014',
	country: 'ES',
	phone: '943 45 93 97',
	phoneHref: 'tel:+34943459397',
	rating: 4.3,
	reviewsCount: 1029,
	siteUrl: 'https://restaurante-bar-tolosa.vercel.app',
	geo: { lat: 43.2946317, lng: -1.9667849 },
	featureId: '0xd51af9400000001:0xbc5a7be853f7f23c',
	placeId: 'ChIJAQAAAJSvUQ0RPPL3U-h7Wrw',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Restaurante y bar de pintxos en Donostia',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Bar+Tolosa/@43.2946317,-1.9667849,17z/data=!3m1!4b1!4m6!3m5!1s0xd51af9400000001:0xbc5a7be853f7f23c!8m2!3d43.2946317!4d-1.9667849!16s%2Fg%2F1hc2dp59l',
	cid: 'https://www.google.com/maps?cid=13572296664805798460',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2946317%2C-1.9667849',
	embed: 'https://maps.google.com/maps?q=43.2946317,-1.9667849&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: abre todo el día y cierra domingos. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–18:30' },
	{ day: 'Martes', value: '9:00–18:30' },
	{ day: 'Miércoles', value: '9:00–18:30' },
	{ day: 'Jueves', value: '9:00–18:30' },
	{ day: 'Viernes', value: '9:00–18:30' },
	{ day: 'Sábado', value: '10:00–18:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 4, text: 'Comida casera muy rica Las camareras atentas y muy simpática' },
	{ rating: 5, text: 'Dispone de Pintxos,raciones,ensaladas,Carta con platos combinados y postres.' },
	{ rating: 5, text: 'Los pinchos y los bocadillos, super sabrosos y el precio asequible.' },
];

/**
 * Señas de identidad que sí constan: categoría, lo que citan sus reseñas y los
 * datos de accesibilidad de la ficha.
 */
export const SERVICIOS = [
	'Restaurante y bar en Donostia',
	'Pintxos',
	'Raciones',
	'Bocadillos',
	'Platos combinados',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{ name: 'Pintxos', note: '«los pinchos... super sabrosos», dice una reseña' },
			{ name: 'Bocadillos', note: '«los bocadillos, super sabrosos y el precio asequible»' },
			{ name: 'Raciones', note: '«pinchos, raciones, ensaladas», enumera otra reseña' },
		],
	},
	{
		title: 'La carta',
		items: [
			{ name: 'Platos combinados', note: '«carta con platos combinados y postres»' },
			{ name: 'Ensaladas', note: 'también entre lo que ofrece la carta' },
			{ name: 'Postres', note: 'la misma reseña los incluye en la carta' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Comida casera', note: '«comida casera muy rica», en palabras de una reseña' },
			{ name: 'Precio asequible', note: '«el precio asequible», añade otra' },
			{ name: 'Servicio atento', note: '«camareras atentas y muy simpática»' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Bar Tolosa?',
		a: 'En Paseo Doctor José Begiristain, 90, del 20014 Donostia / San Sebastián (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 9:00 a 18:30 y el sábado de 10:00 a 18:30. Los domingos cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 45 93 97. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan pintxos, bocadillos, raciones, ensaladas, platos combinados y postres, y hablan de comida casera. La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, asientos adaptados, aseo adaptado y aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 1.029 reseñas en Google.',
	},
];
