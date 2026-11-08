/**
 * Datos de Restaurante La Solera — Plaça sa Tertúlia, 8 (07800 Eivissa, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante La Solera»,
 *   38.9099707,1.4369998, feature 0x129946b1244d64c1:0x36afee87da27c259
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En ellas se ven la terraza bajo el toldo «La Solera ·
 *   PAELLA», el comedor y los platos.
 *
 * La ficha no tiene descripción del negocio ni publica carta ni precios: «La
 * carta» recoge solo lo que se ve en las fotos del perfil y lo que citan las
 * reseñas. No se inventan platos ni precios.
 */

export const BUSINESS = {
	name: 'Restaurante La Solera',
	shortName: 'La Solera',
	mark: 'LS',
	street: 'Plaça sa Tertúlia, 8',
	city: 'Eivissa',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07800',
	country: 'ES',
	phoneDisplay: '971 31 62 50',
	phoneHref: 'tel:+34971316250',
	rating: 4.2,
	reviewsCount: 909,
	siteUrl: 'https://www.sur-digital.com/restaurante-la-solera',
	geo: { lat: 38.9099707, lng: 1.4369998 },
	featureId: '0x129946b1244d64c1:0x36afee87da27c259',
	placeId: 'ChIJwWRNJLFGmRIRWcIn2ofurzY',
	cid: '3940630466220507737',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+La+Solera/@38.9099707,1.4369998,17z/data=!3m1!4b1!4m6!3m5!1s0x129946b1244d64c1:0x36afee87da27c259!8m2!3d38.9099707!4d1.4369998!16s%2Fg%2F11b6dp6ct4',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9099707%2C1.4369998',
	embed: 'https://maps.google.com/maps?q=38.9099707,1.4369998&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 12:00 a 24:00. */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–24:00' },
	{ day: 'Martes', value: '12:00–24:00' },
	{ day: 'Miércoles', value: '12:00–24:00' },
	{ day: 'Jueves', value: '12:00–24:00' },
	{ day: 'Viernes', value: '12:00–24:00' },
	{ day: 'Sábado', value: '12:00–24:00' },
	{ day: 'Domingo', value: '12:00–24:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Muy buen sitio para venir a comer una buena paella, la de bogavante riquísima',
	'Cerveza bien tirada y los pimientos del padrón buenísimos',
	'Volveremos sin duda y esperamos que nos atienda otra vez',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que se ve en las fotos del perfil, lo que citan sus reseñas y lo
 * que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina mediterránea',
	'Marisquería',
	'Cocina española',
	'Paellas y arroces',
	'Pescado y marisco',
	'Terraza en sa Tertúlia',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Paellas y arroces',
		items: [
			{
				name: 'Paella de bogavante',
				note: '«la de bogavante riquísima», según una reseña',
			},
			{
				name: 'Paella de marisco',
				note: 'en las fotos del perfil, con mejillones, langostinos y limón',
			},
			{
				name: 'Paella de langostinos',
				note: 'en las fotos del perfil, servida en la paellera',
			},
		],
	},
	{
		title: 'Del mar',
		items: [
			{
				name: 'Pulpo a la gallega',
				note: 'en las fotos del perfil, con patata y pimentón',
			},
			{
				name: 'Sardinas a la plancha',
				note: 'en las fotos del perfil, con patatas y limón',
			},
			{
				name: 'Calamares fritos',
				note: 'en las fotos del perfil, con limón',
			},
			{
				name: 'Fritura de pescado y marisco',
				note: 'en las fotos del perfil: boquerones, calamares y langostinos',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Tortilla con ensalada',
				note: 'en las fotos del perfil, servida en plato con guarnición',
			},
			{
				name: 'Pimientos de Padrón',
				note: '«buenísimos», según una reseña',
			},
			{
				name: 'Hamburguesa con patatas',
				note: 'en las fotos del perfil, con bacon y queso',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante La Solera?',
		a: 'En Plaça sa Tertúlia, 8, en el centro de Eivissa (07800, Ibiza), junto al puerto. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 12:00 a 24:00, sin día de cierre. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 31 62 50.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina mediterránea y española de marisquería, según las categorías de su ficha de Google. Las fotos del perfil muestran paellas, pulpo a la gallega, sardinas a la plancha, calamares, fritura de pescado, tortilla y hamburguesa.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran la terraza bajo un toldo blanco con el rótulo «La Solera · PAELLA», mesas de madera y lámparas de mimbre, además de un comedor interior acristalado.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan la paella de bogavante y los pimientos de Padrón. En las fotos del perfil aparecen la paella de marisco y la de langostinos, el pulpo a la gallega, las sardinas a la plancha, los calamares fritos, una fritura de pescado con boquerones y langostinos, la tortilla y la hamburguesa con patatas. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,2 sobre 5 con 909 reseñas. Las publicadas destacan la paella de bogavante, los pimientos de Padrón, la cerveza y el servicio.',
	},
];
