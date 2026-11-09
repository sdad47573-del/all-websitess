/**
 * Datos de Bar Restaurante Hegaluze — Donibane Kalea, 132
 * (20110 Pasai Donibane, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar Restaurante Hegaluze,
 *   43.3275084,-1.9202218, feature 0xd51a5c8400baebb:0x3aedd9e435200d29
 *   (dirección, categoría, teléfono, nota y reseñas).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica horario, carta,
 * precios, correo ni web propia. Por eso no hay horario inventado ni platos que
 * no citen las reseñas: el teléfono y la ficha de Google son los canales
 * publicados.
 */

export const BUSINESS = {
	name: 'Bar Restaurante Hegaluze',
	shortName: 'Hegaluze',
	mark: 'HE',
	street: 'Donibane Kalea, 132',
	city: 'Pasai Donibane',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phone: '943 34 05 74',
	phoneHref: 'tel:+34943340574',
	rating: 4.7,
	reviewsCount: 46,
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-hegaluze',
	geo: { lat: 43.3275084, lng: -1.9202218 },
	featureId: '0xd51a5c8400baebb:0x3aedd9e435200d29',
	placeId: 'ChIJu64LQMilUQ0RKQ0gNeTZ7To',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Bar restaurante en Pasai Donibane',
	/** La ficha de Google sí publica teléfono. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+Hegaluze/@43.3275084,-1.9202218,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a5c8400baebb:0x3aedd9e435200d29!8m2!3d43.3275084!4d-1.9202218!16s%2Fg%2F11fnx7hyt8',
	cid: 'https://www.google.com/maps?cid=4246289597847309609',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3275084%2C-1.9202218',
	embed: 'https://maps.google.com/maps?q=43.3275084,-1.9202218&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario. Se indica así en lugar de inventar
 * unas horas: el teléfono del local es el canal para confirmarlo.
 */
export const HOURS = [{ day: 'Lunes a domingo', value: 'No publicado · llama al 943 34 05 74' }];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Muy buenos los bocatas que nos comimos, sin duda volveremos' },
	{ rating: 5, text: 'Impresionante lugar y familia y camareros geniales.' },
	{ rating: 5, text: 'La camarera muy atenta y amable.' },
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google lo
 * clasifica, lo que citan sus reseñas y su teléfono.
 */
export const SERVICIOS = [
	'Bar restaurante en Pasai Donibane',
	'Bocatas',
	'Trato familiar',
	'Teléfono directo',
	'Ficha en Google Maps',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google.
 */
export const MENU = [
	{
		title: 'Lo que piden',
		items: [
			{ name: 'Bocatas', note: '«muy buenos los bocatas», empieza una de sus reseñas' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Trato familiar', note: '«familia y camareros geniales», dice otra reseña' },
			{ name: 'Servicio atento', note: '«la camarera muy atenta y amable»' },
			{ name: 'Bar restaurante', note: 'la categoría con la que lo clasifica Google' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante Hegaluze?',
		a: 'En Donibane Kalea, 132, del 20110 Pasai Donibane (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cómo se contacta o se reserva?',
		a: 'Por teléfono, en el 943 34 05 74. La ficha de Google publica ese número, pero no un correo electrónico, una web propia ni un sistema de reserva online.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario, así que esta web no inventa unas horas. Lo más fiable es llamar al 943 34 05 74 antes de acercarse.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan los bocatas y los describen como «muy buenos». La ficha no publica carta completa ni precios, así que no hay más platos confirmados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 46 reseñas en Google.',
	},
	{
		q: '¿Tiene terraza o acceso adaptado?',
		a: 'La ficha de Google no publica esos datos, así que no se pueden confirmar desde aquí. Conviene preguntar al llamar.',
	},
];
