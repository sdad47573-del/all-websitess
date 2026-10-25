/**
 * Datos de Restaurante Parasoles — Ses Begonies, 1-2 (07817 Platja d'en Bossa,
 * Sant Josep de sa Talaia, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Parasoles»,
 *   38.8892902,1.4087799, feature 0x1299442c15d1ae2f:0x2256de3461efce57
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Descripción del propio negocio en la ficha: «Restaurante familiar con buena
 *   comida y buen ambiente. Ideal para comidas familiares y bonitas vistas al
 *   mar».
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/: las mesas en la arena, el comedor, las paellas y arroces,
 *   la mariscada, el pescado a la plancha, la fritura, las gambas al ajillo, los
 *   nachos, la sangría y la tarta de zanahoria.
 *
 * La ficha no publica carta ni precios: «La carta» recoge solo lo que se ve en
 * las fotos del perfil y lo que citan las reseñas. No se inventan platos ni
 * precios.
 */

export const BUSINESS = {
	name: 'Restaurante Parasoles',
	shortName: 'Parasoles',
	mark: 'PS',
	street: 'Ses Begonies, 1-2',
	city: 'Platja d’en Bossa',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07817',
	country: 'ES',
	phoneDisplay: '971 30 52 31',
	phoneHref: 'tel:+34971305231',
	rating: 4.4,
	reviewsCount: 1155,
	reviewsLabel: '1.155',
	siteUrl: 'https://restaurante-parasoles.vercel.app',
	geo: { lat: 38.8892902, lng: 1.4087799 },
	featureId: '0x1299442c15d1ae2f:0x2256de3461efce57',
	placeId: 'ChIJL67RFSxEmRIRV87vYTTeViI',
	cid: '2474409361849437783',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Parasoles/@38.8892902,1.4087799,17z/data=!3m1!4b1!4m6!3m5!1s0x1299442c15d1ae2f:0x2256de3461efce57!8m2!3d38.8892902!4d1.4087799!16s%2Fg%2F11c2nhl0j3',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.8892902%2C1.4087799',
	embed: 'https://maps.google.com/maps?q=38.8892902,1.4087799&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 11:30 a 18:00. */
export const HOURS = [
	{ day: 'Lunes', value: '11:30–18:00' },
	{ day: 'Martes', value: '11:30–18:00' },
	{ day: 'Miércoles', value: '11:30–18:00' },
	{ day: 'Jueves', value: '11:30–18:00' },
	{ day: 'Viernes', value: '11:30–18:00' },
	{ day: 'Sábado', value: '11:30–18:00' },
	{ day: 'Domingo', value: '11:30–18:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'A destacar el gazpacho, mejillones marinera, mariscada y el surtido de tartas',
	'Buenísima paella y camareros muy buenos',
	'Ensaladas correctas (sencillas, grandes y frescas)',
];

/**
 * Lo que consta: las categorías con las que Google clasifica el local, la
 * descripción del propio negocio, la ubicación en primera línea y lo que marca
 * su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina mediterránea',
	'Marisquería',
	'Arroces y pescado',
	'Primera línea de playa',
	'Vistas al mar',
	'Comidas familiares',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{
				name: 'Paella de marisco',
				note: 'en las fotos del perfil, con langostinos y mejillones',
			},
			{
				name: 'Arroz negro',
				note: 'en las fotos del perfil, servido en la paellera junto al mar',
			},
			{
				name: 'Fideuá de marisco',
				note: 'en las fotos del perfil, con langostinos, mejillones y limón',
			},
		],
	},
	{
		title: 'Del mar',
		items: [
			{
				name: 'Mariscada',
				note: 'en las fotos del perfil: mejillones, almejas, langostinos y calamares',
			},
			{
				name: 'Pescado a la plancha',
				note: 'en las fotos del perfil, entero y con limón',
			},
			{
				name: 'Fritura de pescado',
				note: 'en las fotos del perfil: boquerones y calamares',
			},
			{
				name: 'Gambas al ajillo',
				note: 'en las fotos del perfil, en cazuela de barro',
			},
			{
				name: 'Mejillones a la marinera',
				note: '«a destacar», según una reseña',
			},
		],
	},
	{
		title: 'Para picar y ensaladas',
		items: [
			{
				name: 'Gazpacho',
				note: '«a destacar», según una reseña',
			},
			{
				name: 'Ensaladas',
				note: '«sencillas, grandes y frescas», según una reseña',
			},
			{
				name: 'Nachos con guacamole y pico de gallo',
				note: 'en las fotos del perfil, con jalapeños',
			},
			{
				name: 'Patatas bravas',
				note: 'en las fotos del perfil, con alioli aparte',
			},
		],
	},
	{
		title: 'Postre y bebida',
		items: [
			{
				name: 'Tarta de zanahoria',
				note: 'en las fotos del perfil, con nata y caramelo',
			},
			{
				name: 'Surtido de tartas',
				note: '«a destacar», según una reseña',
			},
			{
				name: 'Sangría',
				note: 'en las fotos del perfil, sobre la mesa al atardecer',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Parasoles?',
		a: 'En Ses Begonies, 1-2, en primera línea de Platja d’en Bossa (07817 Sant Josep de sa Talaia, Ibiza). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 11:30 a 18:00, sin día de cierre: es un restaurante de mediodía y merienda, no de cena. Es el horario publicado, así que conviene confirmarlo llamando antes, sobre todo fuera de temporada.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 30 52 31.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina mediterránea de marisquería, según las categorías de su ficha de Google. El propio restaurante se describe como «restaurante familiar con buena comida y buen ambiente, ideal para comidas familiares y bonitas vistas al mar».',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen la paella de marisco, el arroz negro, la fideuá, la mariscada, el pescado a la plancha, la fritura de pescado, las gambas al ajillo, los nachos con guacamole, las patatas bravas y la tarta de zanahoria. Las reseñas destacan el gazpacho, los mejillones a la marinera, la mariscada, el surtido de tartas y la paella. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Tiene vistas al mar?',
		a: 'Sí. Está en primera línea de Platja d’en Bossa y las fotos del perfil muestran mesas en la arena con el mar detrás, además del comedor con ventanales y la terraza cubierta.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 1.155 reseñas. Las publicadas destacan la paella, el gazpacho, los mejillones a la marinera, la mariscada, las tartas y el servicio.',
	},
];
