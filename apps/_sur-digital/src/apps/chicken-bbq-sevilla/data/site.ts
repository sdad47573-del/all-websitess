/**
 * Datos de Chicken BBQ Sevilla (Los Bermejales) — Av. de Alemania, 19,
 * 41012 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 37.3452325,-5.9815071,
 *   feature 0xd126f2fcdb4dbff:0x778bae87468348e0 (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas, accesibilidad y la descripción que publica
 *   el negocio), más su place id y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica y esta web no inventa: carta con precios, web
 * propia y plataforma de reparto. Los productos que se nombran salen de la
 * descripción del negocio, de las categorías de Google y de las reseñas.
 */

export const BUSINESS = {
	name: 'Chicken BBQ Sevilla',
	fullName: 'Chicken BBQ Sevilla: Los Bermejales, Pollo asado a la Brasa (carbón)',
	shortName: 'Chicken BBQ',
	mark: 'BBQ',
	street: 'Av. de Alemania, 19',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Los Bermejales',
	postalCode: '41012',
	country: 'ES',
	phone: '+34 955 38 61 30',
	phoneHref: '+34955386130',
	rating: 3.8,
	reviewsCount: 135,
	siteUrl: 'https://www.sur-digital.com/chicken-bbq-sevilla',
	geo: { lat: 37.3452325, lng: -5.9815071 },
	featureId: '0xd126f2fcdb4dbff:0x778bae87468348e0',
	placeId: 'ChIJ_9u0zS9vEg0R4EiDRoeui3c',
	cid: '8614170608303032544',
	/** Categorías con las que Google clasifica el local. */
	category: 'Pollo asado a la brasa',
	categories: [
		'Restaurante especializado en pollo',
		'Parrilla',
		'Restaurante especializado en barbacoa',
		'Zona de barbacoa',
		'Pollería',
		'Restaurante especializado en costillas al estilo coreano',
		'Comida a domicilio',
	],
	tagline: 'Pollo asado a la leña de encinas',
	description:
		'Chicken BBQ Sevilla, pollo asado a la brasa en Los Bermejales, avenida de Alemania 19, 41012 Sevilla. Leña de encinas, todos los días de 11:00 a 16:00.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio negocio en su ficha. */
	ownerDescription: 'Pollo a la Brasa. Productos frescos hechos a la leña de encinas.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Chicken+BBQ+Sevilla:+Los+Bermejales,Pollo+asado+a+la+Brasa+(carbon)/@37.3452325,-5.9815071,17z/data=!4m6!3m5!1s0xd126f2fcdb4dbff:0x778bae87468348e0!8m2!3d37.3452325!4d-5.9815071!16s%2Fg%2F11gng95_hc',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3452325%2C-5.9815071',
	embed: 'https://maps.google.com/maps?q=37.3452325,-5.9815071&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: solo comidas, de 11:00 a 16:00 de
 * martes a domingo y desde las 10:00 los lunes. No hay servicio de cenas.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–16:00' },
	{ day: 'Martes', value: '11:00–16:00' },
	{ day: 'Miércoles', value: '11:00–16:00' },
	{ day: 'Jueves', value: '11:00–16:00' },
	{ day: 'Viernes', value: '11:00–16:00' },
	{ day: 'Sábado', value: '11:00–16:00' },
	{ day: 'Domingo', value: '11:00–16:00' },
];

/** Lo que declara la ficha y lo que repiten las reseñas que Google destaca. */
export const SERVICIOS = [
	'Pollo a la brasa',
	'Leña de encinas',
	'Parrilla y barbacoa',
	'Patatas y arroz',
	'Comida a domicilio',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'El pollo, las patatas y el arroz están buenísimos.',
		rating: 5,
	},
	{
		quote: 'El pollo muy rico y la salsa picante buenísima.',
		rating: 4,
	},
	{
		quote: 'Pollo asado de calidad y formalidad al recoger los pedidos telefónicos.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Chicken BBQ Sevilla?',
		a: 'En la avenida de Alemania 19, en Los Bermejales (41012 Sevilla). El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre solo para comer: de 11:00 a 16:00 de martes a domingo, y desde las 10:00 los lunes. No hay servicio de cenas ni cierre a mediodía entre semana.',
	},
	{
		q: '¿Cómo se asa el pollo?',
		a: 'A la brasa, con leña de encinas. Lo dice el propio negocio en su ficha: «Pollo a la Brasa. Productos frescos hechos a la leña de encinas». No es un horno eléctrico ni una freidora.',
	},
	{
		q: '¿Qué más se puede pedir?',
		a: 'La ficha lo clasifica también como parrilla, restaurante de barbacoa, zona de barbacoa y especialista en costillas al estilo coreano, así que hay más que pollo. Las reseñas que Google destaca nombran las patatas, el arroz y la salsa picante como acompañamientos.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'Google lo clasifica como comida a domicilio y una de las reseñas habla de recoger pedidos telefónicos. El canal directo es el teléfono 955 38 61 30, donde confirman reparto, horario y disponibilidad.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Para saberlo, lo más rápido es llamar al 955 38 61 30 o pasarse por la avenida de Alemania 19.',
	},
	{
		q: '¿Hace falta reservar?',
		a: 'La ficha no publica un sistema de reservas. El teléfono es el canal directo para preguntar por mesa o por un encargo, sobre todo si vais varios.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no aparcamiento adaptado ni asientos adaptados. Si necesitas condiciones concretas, conviene llamar antes.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del local y ofrece al titular la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Tres coma ocho sobre cinco con 135 reseñas. Las que Google destaca hablan bien del pollo, las patatas, el arroz y la salsa picante; en la ficha están todas, también las críticas.',
	},
];
