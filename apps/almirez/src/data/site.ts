/**
 * Datos de Almirez, Comida Tradicional Para Llevar — C. Margarita Xirgu, 4, bajo
 * A, Teatinos-Universidad, 29010 Málaga.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 36.7211669,-4.4753877 (la ficha da estas
 *   coordenadas, algo distintas de las del enlace), feature
 *   0xd72f71705186dd1:0x8cd6747ab60dbff8 (nombre, dirección, categoría, horario,
 *   teléfono, nota, reseñas, accesibilidad y descripción del negocio), más su
 *   place id «ChIJ0W0YBRf3cg0R-L8Ntnp01ow» y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica y esta web no inventa: carta con precios, web
 * propia ni reparto a domicilio. Los platos que se nombran salen de la
 * descripción que firma el negocio y de las reseñas que la ficha destaca.
 */

export const BUSINESS = {
	name: 'Almirez, Comida Tradicional Para Llevar',
	shortName: 'Almirez',
	mark: 'AL',
	street: 'C. Margarita Xirgu, 4, bajo A',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Teatinos-Universidad',
	postalCode: '29010',
	country: 'ES',
	phone: '+34 644 67 80 99',
	phoneHref: '+34644678099',
	rating: 4.6,
	reviewsCount: 87,
	siteUrl: 'https://almirez.vercel.app',
	geo: { lat: 36.7211669, lng: -4.4753877 },
	featureId: '0xd72f71705186dd1:0x8cd6747ab60dbff8',
	placeId: 'ChIJ0W0YBRf3cg0R-L8Ntnp01ow',
	cid: '10148426880715177976',
	/** Categoría con la que Google clasifica el local. */
	category: 'Comida tradicional para llevar',
	categories: ['Establecimiento de comida preparada'],
	tagline: 'Plato de cuchara, todos los días',
	description:
		'Almirez, comida tradicional para llevar en C. Margarita Xirgu 4, bajo A, Teatinos-Universidad, 29010 Málaga. Plato de cuchara a diario, paellas, guisos y postres caseros. Teléfono 644 67 80 99.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio negocio en su ficha. */
	ownerDescription:
		'Comida tradicional para llevar. Plato de cuchara a diario. Menús por encargo. Postres caseros. Fruta y bebida. Paellas, guisos, tortillas, Migas, etc....',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Almirez,+Comida+Tradicional+Para+Llevar/@36.7218918,-4.4731396,17z/data=!4m6!3m5!1s0xd72f71705186dd1:0x8cd6747ab60dbff8!8m2!3d36.7218918!4d-4.4731396!16s%2Fg%2F11j68fl0pg',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7211669%2C-4.4753877',
	embed: 'https://maps.google.com/maps?q=36.7211669,-4.4753877&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: de 10:00 a 15:30 de lunes a domingo
 * salvo el martes, que cierra. Solo hay servicio de mediodía.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–15:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '10:00–15:30' },
	{ day: 'Jueves', value: '10:00–15:30' },
	{ day: 'Viernes', value: '10:00–15:30' },
	{ day: 'Sábado', value: '10:00–15:30' },
	{ day: 'Domingo', value: '10:00–15:30' },
];

/** Lo que firma el negocio en su ficha. */
export const SERVICIOS = [
	'Plato de cuchara a diario',
	'Menús por encargo',
	'Paellas y guisos',
	'Postres caseros',
	'Comida para llevar',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'Pedí varias raciones y gazpacho y todo buenísimo, saben lo que hacen.',
		rating: 5,
	},
	{
		quote: 'Buen sitio buen trato y buena comida, lo recomiendo.',
		rating: 5,
	},
	{
		quote: 'Hemos probado bacalao con tomate y las espinacas con garbanzos.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Almirez?',
		a: 'En la calle Margarita Xirgu 4, bajo A, en Teatinos-Universidad, 29010 Málaga. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 10:00 a 15:30 de lunes a domingo, con el martes cerrado. Solo hay servicio de mediodía: es comida para llevar, no hay cenas.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Plato de cuchara a diario, paellas, guisos, tortillas y migas, además de postres caseros, fruta y bebida. Es lo que el propio negocio escribe en su ficha, y las reseñas que Google destaca hablan del gazpacho, del bacalao con tomate y de las espinacas con garbanzos.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'No. Es comida para llevar: el nombre del negocio y la categoría de Google lo dicen, y en su ficha solo se anuncia «comida tradicional para llevar». Se pide y se recoge.',
	},
	{
		q: '¿Hacen menús por encargo?',
		a: 'Sí. La ficha del negocio lo anuncia: «Menús por encargo». Para encargar uno, lo mejor es llamar al 644 67 80 99 y concretar cantidad y día.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Los precios del día se confirman en el local o llamando al 644 67 80 99.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha no lo marca como comida a domicilio ni enlaza ninguna plataforma de reparto, así que esta web no lo anuncia. El teléfono publicado sirve para preguntar si llevan pedidos a tu zona.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas y no marca aparcamiento adaptado. No publica más datos de accesibilidad, así que conviene confirmarlo por teléfono si lo necesitas.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del negocio y ofrece al titular la opción de añadir una. Esta página es informativa y no es un canal oficial de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma seis sobre cinco con 87 reseñas. Las tres que Google destaca son de cinco estrellas y hablan del trato, del gazpacho y de los guisos; en la ficha están todas, también las críticas.',
	},
];
