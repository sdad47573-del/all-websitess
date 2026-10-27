/**
 * Datos de Restaurant Los Arcos — Avinguda de Borriol, 7, 12130 Sant Joan de
 * Moró (Castellón), en la Plana Alta, a la salida del pueblo hacia Borriol.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurant Los Arcos», 40,0611111 /
 *   -0,1366667, feature 0xd5ffca718ae4639:0x6c616c21e477e9c (dirección,
 *   teléfono, categoría, nota, reseñas, accesibilidad y fotos del perfil).
 * - Reseñas publicadas en la ficha de Google y en TripAdvisor.
 *
 * La ficha no publica horario ni web: Google muestra «Añadir horario» y
 * «Añadir sitio web».
 */

export const BUSINESS = {
	name: 'Restaurant Los Arcos',
	shortName: 'Los Arcos',
	mark: 'LA',
	street: 'Avinguda de Borriol, 7',
	city: 'Sant Joan de Moró',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12130',
	country: 'ES',
	phoneDisplay: '964 32 80 40',
	phoneHref: 'tel:+34964328040',
	rating: 4.3,
	reviewsCount: 180,
	siteUrl: 'https://restaurant-los-arcos.vercel.app',
	geo: { lat: 40.0611111, lng: -0.1366667 },
	featureId: '0xd5ffca718ae4639:0x6c616c21e477e9c',
	placeId: 'ChIJOUauGKf8Xw0RnH5HHsIWxgY',
	cid: '488102632603745948',
	/** Categoría con la que Google describe el local. */
	categories: ['Bar de tapas'],
	tagline: 'Tapas, brasa y comida casera en Sant Joan de Moró',
	description:
		'Restaurant Los Arcos, bar de tapas y carnes a la brasa en Sant Joan de Moró (Castellón): menú del día, comida casera y postres de la casa. Tel. 964 32 80 40.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+Los+Arcos/@40.0611111,-0.1366667,17z/data=!3m1!4b1!4m6!3m5!1s0xd5ffca718ae4639:0x6c616c21e477e9c!8m2!3d40.0611111!4d-0.1366667!16s%2Fg%2F1tf08_gz',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0611111%2C-0.1366667',
	embed: 'https://maps.google.com/maps?q=40.0611111,-0.1366667&z=17&hl=es&output=embed',
} as const;

/**
 * La ficha de Google no publica horario. Los servicios que sí constan en las
 * reseñas son los almuerzos y el menú del día; el resto se confirma al llamar.
 */
export const HOURS = [
	{ day: 'Almuerzos', value: 'Sí, a media mañana' },
	{ day: 'Menú del día', value: 'Sí, a mediodía' },
	{ day: 'Horario', value: 'No publicado en Google' },
];

/** Señas de identidad que constan en la ficha de Google y en las fotos. */
export const SERVICIOS = [
	'Bar de tapas',
	'Carnes a la brasa',
	'Menú del día',
	'Almuerzos',
	'Postres caseros',
	'Bocadillos',
	'Chimenea',
	'Asientos adaptados',
];

/**
 * Platos que aparecen en las fotos del perfil y en las reseñas. La ficha no
 * publica carta con precios, así que no se inventan platos ni tarifas.
 */
export const MENU = [
	{
		title: 'De la brasa',
		items: [
			{
				name: 'Carne a la brasa',
				note: 'el chuletón de la foto, con patatas y verdura',
			},
			{
				name: 'Parrilla de la casa',
				note: 'la especialidad que más repiten las reseñas',
			},
		],
	},
	{
		title: 'De la sartén',
		items: [
			{
				name: 'Huevos con patatas',
				note: 'con las patatas fritas de la casa',
			},
			{
				name: 'Patatas caseras',
				note: 'en rodajas, doradas y con sal gruesa',
			},
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{
				name: 'Bocadillo de lomo',
				note: 'en pan de pueblo, para el almuerzo',
			},
			{
				name: 'Bocadillo de tortilla',
				note: 'el otro clásico de la barra',
			},
		],
	},
	{
		title: 'Postres y café',
		items: [
			{
				name: 'Postres caseros',
				note: 'de la casa, «de 10» según una reseña',
			},
			{
				name: 'Café en vaso de barro',
				note: 'para cerrar el almuerzo, como en la foto',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Los Arcos?',
		a: 'En la Avinguda de Borriol, 7, a la salida de Sant Joan de Moró hacia Borriol (12130 Castellón), en la comarca de la Plana Alta. El mapa de esta página abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario, así que conviene llamar al 964 32 80 40 antes de ir. Las reseñas hablan de almuerzos y de menú del día, y el local ha atendido a gente que llegaba tarde a comer.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Sí, por teléfono en el 964 32 80 40. Para grupos y celebraciones es recomendable avisar con antelación, porque el comedor es limitado.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina casera con la brasa como protagonista: carnes a la parrilla con patatas y verdura, huevos con patatas, bocadillos para el almuerzo y menú del día. De postre, repostería de la casa. Google no publica la carta con precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca asientos adaptados para sillas de ruedas.',
	},
];

/** Reseñas publicadas en la ficha de Google. */
export const REVIEWS = [
	'Comida casera bueníma, carne a la brasa, postres caseros de 10!',
	'Buena comida, el menú buena relación calidad precio y carnes a la brasa',
	'Muy buenos almuerzos, y muy buen servicio, precios buenos, lo recomiendo',
];
