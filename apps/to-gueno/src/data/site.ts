/**
 * Datos de To Güeno — C. Urbión, 41005 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «To Güeno», 37.3751872,-5.970737,
 *   feature 0xd126e90c328162d:0x67770d1e88f03894 (nombre, dirección, categoría,
 *   teléfono, nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica horario, carta con precios ni
 * web propia. Los platos que se listan son los que aparecen en las fotos y en
 * las reseñas del perfil, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'To Güeno',
	fullName: 'To Güeno',
	googleName: 'To Güeno',
	shortName: 'To Güeno',
	mark: 'G',
	street: 'C. Urbión',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'C. Urbión',
	postalCode: '41005',
	country: 'ES',
	phone: '+34 671 62 51 17',
	phoneHref: '+34671625117',
	rating: 4.5,
	reviewsCount: 24,
	siteUrl: 'https://to-gueno.vercel.app',
	geo: { lat: 37.3751872, lng: -5.970737 },
	featureId: '0xd126e90c328162d:0x67770d1e88f03894',
	placeId: 'ChIJLRYow5BuEg0RlDjwiB4Nd2c',
	cid: '7459887583827105028',
	category: 'Comida casera para llevar',
	categories: ['Restaurante de comida para llevar'],
	tagline: 'Comida casera para llevar en Sevilla',
	description:
		'To Güeno, comida casera para llevar en la calle Urbión, 41005 Sevilla. Cocina de casa y trato cercano, con 4,5 sobre 5 en Google y 24 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/To+G%C3%BCeno/@37.3751872,-5.970737,17z/data=!3m1!4b1!4m6!3m5!1s0xd126e90c328162d:0x67770d1e88f03894!8m2!3d37.3751872!4d-5.970737!16s%2Fg%2F11bzz303vz',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3751872%2C-5.970737',
	embed: 'https://maps.google.com/maps?q=37.3751872,-5.970737&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario. En vez de inventar uno, la tabla lo
 * dice y remite al teléfono, que es el canal que sí consta.
 */
export const HOURS = [{ day: 'Horario', value: 'No consta en la ficha de Google' }];

/**
 * Señales de identidad que sí constan: la categoría de la ficha, el formato de
 * comida para llevar, la nota, el número de reseñas y el teléfono.
 */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'C. Urbión · 41005 Sevilla',
	'4,5 · 24 reseñas en Google',
	'+34 671 62 51 17',
];

export const MENU = [
	{
		title: 'Lo que consta',
		items: [
			{
				name: 'Comida casera del día',
				note: '«cocina casera, exquisita», dice una reseña; cambia a diario',
			},
			{ name: 'Raciones para llevar', note: 'el formato de la casa: se pide y se recoge' },
			{ name: 'Platos para compartir', note: 'para una comida en casa' },
			{ name: 'Encargos por teléfono', note: `el canal que consta es el ${'+34 671 62 51 17'}` },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está To Güeno?',
		a: 'En la calle Urbión, en el 41005 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: `La ficha de Google no publica horario. El canal que sí consta es el teléfono ${BUSINESS.phone}: llama antes de ir para confirmar que está abierto y qué hay ese día.`,
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera para llevar. La ficha lo clasifica como restaurante de comida para llevar y las reseñas hablan de cocina casera, buena calidad y precio razonable. La carta cambia según el día.',
	},
	{
		q: '¿Se puede comer en el local o solo para llevar?',
		a: 'La ficha lo clasifica como restaurante de comida para llevar y no publica servicio de mesa. Lo habitual es encargar y recoger la comida.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Una reseña de Google habla de «precio razonable», pero para saber el precio del día hay que preguntar por teléfono o en el local.',
	},
	{
		q: '¿Se puede encargar por teléfono?',
		a: `Sí, el canal que consta es el teléfono ${BUSINESS.phone}. Llama para preguntar qué hay, encargar raciones o reservar la comida de una hora concreta.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google no publica datos de accesibilidad de este establecimiento. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,5 sobre 5 con 24 reseñas en Google, según la ficha consultada. Las reseñas destacan la cocina casera, el trato y el precio.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
