/**
 * Datos de Boutique De La Panaderia — Cam. San Alberto, 19
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Boutique De La Panaderia,
 *   36.7311269,-4.449935, feature 0xd72f7100908cf9d:0xc324c8cb939dc497.
 * - Dirección, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Reseñas publicadas en la misma ficha.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, carta, precios
 * ni fotografías. El endpoint de fotos de Google no devuelve ninguna imagen
 * del perfil, y la referencia de Street View asociada a la ficha no ofrece
 * miniatura. Esta página se apoya en la dirección, el horario, la valoración
 * y las reseñas, sin catálogo ni importes.
 */

export const BUSINESS = {
	name: 'Boutique De La Panaderia',
	shortName: 'Boutique',
	mark: 'B',
	street: 'Cam. San Alberto, 19',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	rating: 3.9,
	reviewsCount: 15,
	siteUrl: 'https://boutique-de-la-panaderia.vercel.app',
	geo: { lat: 36.7311269, lng: -4.449935 },
	featureId: '0xd72f7100908cf9d:0xc324c8cb939dc497',
	placeId: 'ChIJnc8ICRD3cg0Rl8Sdk8vIJMM',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en Bailén-Miraflores, Málaga',
	description:
		'Boutique De La Panaderia, en Cam. San Alberto, 19 (Bailén-Miraflores, 29010 Málaga). Panadería que la ficha de Google marca como abierta 24 horas, con 3,9 sobre 5 y 15 reseñas.',
	hoursSummary: 'Abierto 24 horas, según la ficha de Google',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Boutique+De+La+Panaderia/@36.7311269,-4.449935,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7100908cf9d:0xc324c8cb939dc497!8m2!3d36.7311269!4d-4.449935!16s%2Fg%2F11bzz4jl43?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=14061584713238037655',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7311269%2C-4.449935',
	embed: 'https://maps.google.com/maps?q=36.7311269,-4.449935&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [{ day: 'Todos los días', value: 'Abierto 24 horas' }];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buena atención y buenos productos.',
	},
	{
		rating: 5,
		text: 'El pan rústica está buenísimo.',
	},
];

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Panadería',
	'Pan rústico',
	'Abierto 24 h según Google',
	'Bailén-Miraflores',
];

export const FAQ = [
	{
		q: '¿Dónde está Boutique De La Panaderia?',
		a: 'En el Camino San Alberto, 19, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google la marca como abierta 24 horas todos los días. Es el dato que publica Google y esta página lo reproduce tal cual; conviene confirmarlo antes de ir, sobre todo de madrugada o en festivos.',
	},
	{
		q: '¿Tiene teléfono o página web?',
		a: 'La ficha no publica teléfono ni web, y esta página no inventa ninguno. La forma de contacto es acudir al establecimiento o consultar la ficha pública de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Google la clasifica como panadería. Una de las reseñas de la ficha habla del «pan rústica». La ficha no publica carta ni precios, así que esta página no cita más productos ni importes.',
	},
	{
		q: '¿Por qué la web no tiene fotos?',
		a: 'La ficha pública de Google no incluye fotografías del perfil y la referencia de Street View asociada no ofrece imagen. Para no usar fotos de otro establecimiento, la página se apoya en la tipografía y el color, y enlaza el mapa y la ficha para ver el entorno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas. No publica información sobre el acceso, los asientos o el baño.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 3,9 sobre 5 con 15 reseñas en Google. Las reseñas visibles elogian la atención, los productos y el pan rústico.',
	},
];
