/**
 * Datos de Restaurante Vista Al Puerto — Carrer des Caló, 66 (07829 Sant Josep
 * de sa Talaia, Sant Agustí des Vedrà, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Vista Al Puerto»,
 *   38.970702,1.2856146, feature 0x12994b996c50ed3f:0x7b05b674f2baf9b7
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no tiene descripción del negocio ni publica carta ni precios: «La
 * carta» recoge solo lo que se ve en las fotos del perfil y lo que citan las
 * reseñas. No se inventan platos, precios ni servicios.
 */

export const BUSINESS = {
	name: 'Restaurante Vista Al Puerto',
	shortName: 'Vista Al Puerto',
	mark: 'VP',
	street: 'Carrer des Caló, 66',
	city: 'Sant Josep de sa Talaia',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07829',
	country: 'ES',
	phoneDisplay: '871 11 02 79',
	phoneHref: 'tel:+34871110279',
	rating: 4.5,
	reviewsCount: 373,
	siteUrl: 'https://restaurante-vista-al-puerto.vercel.app',
	geo: { lat: 38.970702, lng: 1.2856146 },
	featureId: '0x12994b996c50ed3f:0x7b05b674f2baf9b7',
	placeId: 'ChIJP-1QbJlLmRIRt_m68nS2BXs',
	cid: '8864692054953490871',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Vista+Al+Puerto/@38.970702,1.2856146,17z/data=!3m1!4b1!4m6!3m5!1s0x12994b996c50ed3f:0x7b05b674f2baf9b7!8m2!3d38.970702!4d1.2856146!16s%2Fg%2F11fj3s7x21',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.970702%2C1.2856146',
	embed: 'https://maps.google.com/maps?q=38.970702,1.2856146&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 12:00 a 23:30, salvo el
 * martes, que cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–23:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '12:00–23:30' },
	{ day: 'Jueves', value: '12:00–23:30' },
	{ day: 'Viernes', value: '12:00–23:30' },
	{ day: 'Sábado', value: '12:00–23:30' },
	{ day: 'Domingo', value: '12:00–23:30' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'El camarero super buena gente y la paella increible buena y buen precio',
	'Todo estaba buenísimo (sobre todo los mejillones) buen ambiente y buen servicio.',
	'Muy buen kebab, buen tamaño y salsa de yogurt especiada deliciosa 👌🏼.',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que se ve en las fotos del perfil, lo que citan sus reseñas y lo que
 * marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina española',
	'Terraza bajo la parra',
	'Paellas y arroces',
	'Pescado a la plancha',
	'Carnes a la brasa',
	'Marisco y mejillones',
	'Mesas con mantel blanco',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Ensalada César',
				note: 'en las fotos del perfil, con escarola, picatostes y lascas de queso',
			},
			{ name: 'Mejillones', note: '«sobre todo los mejillones», según una reseña, y en las fotos' },
			{ name: 'Gambas al ajillo', note: 'en las fotos del perfil, servidas en cazuela de barro' },
		],
	},
	{
		title: 'Arroces y mar',
		items: [
			{
				name: 'Paella de marisco',
				note: '«increíble buena», según una reseña, y en las fotos del perfil',
			},
			{
				name: 'Pescado entero a la plancha',
				note: 'en las fotos del perfil, con patatas paja y pimiento',
			},
			{
				name: 'Espaguetis con marisco',
				note: 'en las fotos del perfil, con mejillones y langostinos',
			},
		],
	},
	{
		title: 'Carnes y brasa',
		items: [
			{
				name: 'Entrecot a la brasa',
				note: 'en las fotos del perfil, con patatas y verduras a la plancha',
			},
			{
				name: 'Parrillada de carne para compartir',
				note: 'en las fotos del perfil: entrecot, costilla y patatas',
			},
			{
				name: 'Kebab con salsa de yogur especiada',
				note: '«muy buen kebab», según una reseña',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Vista Al Puerto?',
		a: 'En Carrer des Caló, 66, en Sant Agustí des Vedrà (07829 Sant Josep de sa Talaia, Ibiza), a un paso del puerto. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 12:00 a 23:30, salvo el martes, que cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 871 11 02 79.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina española, según la categoría de su ficha de Google. En las fotos del perfil aparecen paellas, pescado a la plancha, carnes a la brasa, mejillones, gambas al ajillo, pasta con marisco y ensaladas.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza cubierta con pérgola y parra, mesas con mantel blanco y sillas de madera, además de una segunda zona con toldo y sillas de mimbre.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan la paella, los mejillones y el kebab con salsa de yogur especiada. En las fotos del perfil se ven además gambas al ajillo, espaguetis con marisco, pescado entero a la plancha, entrecot, parrillada de carne y ensalada César. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 373 reseñas. Las publicadas destacan la paella, los mejillones, el trato del camarero, el precio y el ambiente.',
	},
];
