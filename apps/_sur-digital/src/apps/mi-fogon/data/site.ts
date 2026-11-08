/**
 * Datos de Mi Fogón comidas para llevar — Rda. Pte., 7, 30320 Fuente Álamo
 * (Murcia).
 *
 * Fuente pública: la ficha de Google Maps del feature
 * 0xd6363001b4ef7a9:0x3893280c2f3e5c8d (nombre, dirección, categoría, horario,
 * teléfono, nota, reseñas y la descripción que firma el negocio), más sus
 * identificadores y las fotos del perfil del establecimiento.
 *
 * Lo que la ficha NO publica y esta web no inventa: carta con precios y web
 * propia. Los platos que se nombran salen de la descripción del negocio y de las
 * reseñas que Google destaca.
 */

export const BUSINESS = {
	name: 'Mi Fogón comidas para llevar',
	shortName: 'Mi Fogón',
	mark: 'MF',
	street: 'Rda. Pte., 7',
	city: 'Fuente Álamo',
	region: 'Región de Murcia',
	regionName: 'Región de Murcia',
	neighbourhood: 'Fuente Álamo',
	postalCode: '30320',
	country: 'ES',
	phone: '+34 641 23 67 43',
	phoneHref: '+34641236743',
	rating: 3.8,
	reviewsCount: 12,
	siteUrl: 'https://www.sur-digital.com/mi-fogon',
	geo: { lat: 37.7228307, lng: -1.1768293 },
	featureId: '0xd6363001b4ef7a9:0x3893280c2f3e5c8d',
	placeId: 'ChIJqfdOGwBjYw0RjVw-Lwwokzg',
	cid: '4076646120497765517',
	category: 'Comida para llevar',
	categories: ['Restaurante de comida para llevar'],
	tagline: 'Cocina casera en Fuente Álamo',
	description:
		'Mi Fogón, comidas para llevar en Rda. Pte. 7, 30320 Fuente Álamo (Murcia). Cocina casera y platos típicos. De 8:00 a 16:00, lunes y martes cerrado. Pedidos en el 641 23 67 43.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio negocio en su ficha. */
	ownerDescription:
		'Cocina casera, platos típicos con toques personales en algunas recetas',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mi+Fog%C3%B3n+comidas+para+llevar/@37.7228307,-1.1768293,17z/data=!4m6!3m5!1s0xd6363001b4ef7a9:0x3893280c2f3e5c8d!8m2!3d37.7228307!4d-1.1768293!16s%2Fg%2F11y9p0kxnb',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.7228307%2C-1.1768293',
	embed: 'https://maps.google.com/maps?q=37.7228307,-1.1768293&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha: de 8:00 a 16:00 de miércoles a domingo, con
 * lunes y martes cerrados. Solo mediodía.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '8:00–16:00' },
	{ day: 'Jueves', value: '8:00–16:00' },
	{ day: 'Viernes', value: '8:00–16:00' },
	{ day: 'Sábado', value: '8:00–16:00' },
	{ day: 'Domingo', value: '8:00–16:00' },
];

/** Lo que declara la ficha y lo que citan las reseñas destacadas. */
export const SERVICIOS = [
	'Cocina casera',
	'Platos típicos',
	'Comida para llevar',
	'Ensaladilla rusa',
	'Abierto de miércoles a domingo',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'Muy rico todo, cómo hecho en casa. La ensaladilla rusa como se hacía antiguamente.',
		rating: 5,
	},
	{
		quote: 'Ración de patatas y pechuga empanada, todo helado y tieso.',
		rating: 1,
	},
	{
		quote: 'Trato agradable, buenas raciones, comida rica y a buen precio.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mi Fogón?',
		a: 'En Rda. Pte., 7, en Fuente Álamo (Murcia), con código postal 30320. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 8:00 a 16:00 de miércoles a domingo, con lunes y martes cerrado. Es un horario de mañana y mediodía: no hay servicio de cenas.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Cocina casera y platos típicos «con toques personales en algunas recetas», que es como lo describe el propio negocio. Las reseñas que Google destaca hablan de la ensaladilla rusa, de la pechuga empanada y de las raciones de patatas, y otra menciona el buen precio.',
	},
	{
		q: '¿Cómo se pide?',
		a: 'Por teléfono, en el 641 23 67 43, que es el número publicado en la ficha. Es comida para llevar: se encarga y se recoge en el local.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'La ficha la clasifica como restaurante de comida para llevar y no anuncia mesas ni servicio de sala. El propio nombre del negocio lo dice: comidas para llevar.',
	},
	{
		q: '¿Publica precios?',
		a: 'No hay carta ni precios publicados en la ficha. Una de las reseñas destaca que la comida está «a buen precio», pero esta web no fija importes que no puede confirmar: se preguntan al llamar.',
	},
	{
		q: '¿Hace reparto a domicilio?',
		a: 'La ficha no lo marca como comida a domicilio ni enlaza ninguna plataforma de reparto, así que esta web no lo anuncia. El canal publicado es el teléfono.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha no publica datos de accesibilidad, ni de acceso adaptado ni de aparcamiento adaptado, así que no hay nada que afirmar al respecto.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Tres coma ocho sobre cinco con 12 reseñas. Las tres que Google destaca son dos de cinco estrellas y una de una estrella que habla de una ración de patatas y pechuga empanada frías; en la ficha están todas.',
	},
];
