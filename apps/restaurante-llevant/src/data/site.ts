/**
 * Datos de Restaurante Llevant — C. de Carles Roman Ferrer, 5 (07800 Eivissa,
 * Figueretes, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Llevant»,
 *   38.9015728,1.4199175, feature 0x129947977fd061b5:0x97c1c1a44001f79c
 *   (dirección, categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha NO publica teléfono ni horario, y tampoco descripción ni carta. Por
 * eso la web no inventa ninguno de los cuatro: remite a Google Maps para el
 * horario y el contacto, y «La carta» se limita a lo que se ve en las fotos y a
 * lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Llevant',
	shortName: 'Llevant',
	mark: 'L',
	street: 'C. de Carles Roman Ferrer, 5',
	city: 'Eivissa',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07800',
	country: 'ES',
	rating: 4.5,
	reviewsCount: 121,
	siteUrl: 'https://restaurante-llevant.vercel.app',
	geo: { lat: 38.9015728, lng: 1.4199175 },
	featureId: '0x129947977fd061b5:0x97c1c1a44001f79c',
	placeId: 'ChIJtWHQf5dHmRIRnPcBQKTBwZc',
	cid: '10935234281424943004',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Llevant/@38.9015728,1.4199175,17z/data=!3m1!4b1!4m6!3m5!1s0x129947977fd061b5:0x97c1c1a44001f79c!8m2!3d38.9015728!4d1.4199175!16s%2Fg%2F11fl8y9tz2',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9015728%2C1.4199175',
	embed: 'https://maps.google.com/maps?q=38.9015728,1.4199175&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario. Se dice claramente en cada fila en vez
 * de rellenarlo con una estimación.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Consultar en Google Maps' },
	{ day: 'Martes', value: 'Consultar en Google Maps' },
	{ day: 'Miércoles', value: 'Consultar en Google Maps' },
	{ day: 'Jueves', value: 'Consultar en Google Maps' },
	{ day: 'Viernes', value: 'Consultar en Google Maps' },
	{ day: 'Sábado', value: 'Consultar en Google Maps' },
	{ day: 'Domingo', value: 'Consultar en Google Maps' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Un lugar tranquilo, con buen ambiente, el servicio rápido y perfecto.',
	'Buen sitio para picar o beber algo viendo la puesta de sol',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que se ve en las fotos del perfil, lo que citan sus reseñas y lo que
 * marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina catalana',
	'Terraza frente al mar',
	'Vistas a Ibiza y Dalt Vila',
	'Para picar y beber',
	'Atardeceres',
	'Mesas bajo la lona',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{
				name: 'Nachos con guacamole y nata agria',
				note: 'en las fotos del perfil, con jalapeños y guacamole',
			},
			{ name: 'Calamares a la romana', note: 'en las fotos del perfil' },
			{
				name: 'Croquetas y ensaladilla',
				note: 'en las fotos del perfil, servidas con pan',
			},
		],
	},
	{
		title: 'Barra y terraza',
		items: [
			{ name: 'Cerveza de barril', note: 'en las fotos del perfil, servida en copa' },
			{ name: 'Vino blanco', note: 'en las fotos del perfil' },
			{ name: 'Gin tonic', note: 'citado en las reseñas de la ficha' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Llevant?',
		a: 'En C. de Carles Roman Ferrer, 5, en Figueretes (07800 Eivissa, Ibiza), frente al mar. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Su ficha de Google no publica horario, así que no lo inventamos: consulta el horario actualizado en Google Maps antes de ir. En esta página el horario aparece como «consultar en Google Maps» en todos los días.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online y tampoco publica un teléfono de contacto. Las reservas y consultas se gestionan a través de la ficha del restaurante en Google Maps.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Google lo clasifica como restaurante de cocina catalana. En las fotos del perfil aparecen nachos con guacamole, calamares a la romana, croquetas, ensaladilla, cerveza de barril y vino blanco, y sus reseñas hablan de picar y beber en la terraza.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza sobre el agua en Figueretes, con lona blanca, mesas y sillas verdes, bombillas colgadas y una barandilla de cuerda, con vistas a Ibiza, Dalt Vila y el islote del faro.',
	},
	{
		q: '¿Se puede ir a ver la puesta de sol?',
		a: 'Sí. Una de sus reseñas lo describe como «buen sitio para picar o beber algo viendo la puesta de sol», y las fotos del perfil incluyen el atardecer y la vista nocturna de Ibiza desde la terraza.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 121 reseñas. Las publicadas destacan el ambiente tranquilo, el servicio rápido y las vistas al atardecer.',
	},
];
