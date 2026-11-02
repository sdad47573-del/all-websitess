/**
 * Datos de Asador de Pollos La Estrella — C. San Jacinto, 34, 41010 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 37.384002,-6.0048165,
 *   feature 0xd126c6b486f1d75:0x8b549611d9a8848d (nombre, dirección, categoría,
 *   horario, teléfono, nota, reseñas y accesibilidad), más su place id y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica y esta web no inventa: web propia, carta con
 * precios, reparto a domicilio y descripción del negocio. Los productos que se
 * nombran salen de la categoría de Google, del nombre del asador y de lo que
 * dicen las reseñas que la ficha destaca.
 */

export const BUSINESS = {
	name: 'Asador de Pollos La Estrella',
	shortName: 'La Estrella',
	mark: 'LE',
	street: 'C. San Jacinto, 34',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Triana',
	postalCode: '41010',
	country: 'ES',
	phone: '+34 954 34 06 66',
	phoneHref: '+34954340666',
	rating: 4.5,
	reviewsCount: 245,
	siteUrl: 'https://asador-de-pollos-la-estrella.vercel.app',
	geo: { lat: 37.384002, lng: -6.0048165 },
	featureId: '0xd126c6b486f1d75:0x8b549611d9a8848d',
	placeId: 'ChIJdR1vSGtsEg0RjYSo2RGWVIs',
	cid: '10039814472725988493',
	/** Categoría con la que Google clasifica el local. */
	category: 'Pollería',
	categories: ['Pollería'],
	tagline: 'Pollo asado de Triana',
	description:
		'Asador de Pollos La Estrella, pollería en la calle San Jacinto 34, Triana, 41010 Sevilla. Pollo asado para comer o llevar, de 12:30 a 16:00; miércoles cerrado.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos+La+Estrella/@37.384002,-6.0048165,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c6b486f1d75:0x8b549611d9a8848d!8m2!3d37.384002!4d-6.0048165!16s%2Fg%2F11c3vqmp_5',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.384002%2C-6.0048165',
	embed: 'https://maps.google.com/maps?q=37.384002,-6.0048165&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: comidas de 12:30 a 16:00 salvo el
 * sábado, que empieza a las 12:00; viernes y sábado abren también de noche.
 * El miércoles figura cerrado y el domingo no hay turno de noche.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–16:00' },
	{ day: 'Martes', value: '12:30–16:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '12:30–16:00' },
	{ day: 'Viernes', value: '12:30–16:00 · 20:00–23:00' },
	{ day: 'Sábado', value: '12:00–16:00 · 20:00–23:00' },
	{ day: 'Domingo', value: '11:00–16:00' },
];

/** Lo que declara la ficha y lo que repiten las reseñas que Google destaca. */
export const SERVICIOS = [
	'Pollo asado',
	'Patatas fritas',
	'Ensaladilla',
	'Raciones para llevar',
	'Triana · San Jacinto',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'Las raciones eran generosas y las patatas fritas, deliciosas.',
		rating: 5,
	},
	{
		quote: 'Pollos sabrosos y muy ricos. Tienen tortillas, aliños, patatas y demás.',
		rating: 4,
	},
	{
		quote: 'Si te encuentras una gamba en la ensaladilla de gambas, compra lotería.',
		rating: 2,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Asador de Pollos La Estrella?',
		a: 'En la calle San Jacinto 34, en Triana (41010 Sevilla), a un paso del puente de Isabel II. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Las comidas van de 12:30 a 16:00, salvo el sábado, que abre a las 12:00 y el domingo, que empieza a las 11:00. Viernes y sábado hay también turno de noche, de 20:00 a 23:00. El miércoles figura cerrado.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'El local está clasificado en Google como pollería y su nombre lo dice: pollo asado. Las reseñas que la ficha destaca hablan además de patatas fritas, tortillas, aliños y ensaladilla, y de raciones generosas.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Es un asador de pollos de barrio: el pollo asado se prepara para comer allí o para recoger. Lo que la ficha no marca es reparto a domicilio, así que si lo necesitas, llama antes al 954 34 06 66 y confírmalo.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios, y esta web no inventa importes. Las reseñas hablan de raciones generosas y de precios de barrio, pero para saberlo con certeza hay que preguntar en el local o por teléfono.',
	},
	{
		q: '¿Hace falta reservar?',
		a: 'La ficha no publica un sistema de reservas. Es un asador de pollos con servicio de comidas y mesa, así que lo habitual es llegar y sentarse; para grupos grandes conviene llamar antes.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. No publica más datos de accesibilidad, así que conviene confirmarlo por teléfono si lo necesitas.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del asador y ofrece al titular la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma cinco sobre cinco, con 245 reseñas. Es una de las medias más altas de la zona y con una muestra amplia; en la ficha están todas las opiniones, también las que no son tan buenas.',
	},
];
