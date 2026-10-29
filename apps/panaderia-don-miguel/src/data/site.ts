/**
 * Datos de Panadería Don Miguel — C. Corregidor Ruiz de Pereda, 1
 * (Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia Don miguel,
 *   36.7113873,-4.4479378, feature 0xd72f7feb556c65b:0x6cfca4e5002ed393.
 * - Dirección, categoría, valoración, horario y accesibilidad: ficha pública
 *   de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, redes sociales
 * ni precios, así que la página no los afirma.
 */

export const BUSINESS = {
	name: 'Panadería Don Miguel',
	shortName: 'Don Miguel',
	mark: 'D',
	street: 'C. Corregidor Ruiz de Pereda, 1',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	rating: 5,
	reviewsCount: 6,
	siteUrl: 'https://panaderia-don-miguel.vercel.app',
	geo: { lat: 36.7113873, lng: -4.4479378 },
	featureId: '0xd72f7feb556c65b:0x6cfca4e5002ed393',
	placeId: 'ChIJW8ZWtf73cg0Rk9MuAOWk_Gw',
	plusCode: '8C8QPH62+HR',
	googleCategory: 'Panadería',
	tagline: 'Pan recién hecho cada mañana en Cruz de Humilladero',
	description:
		'Panadería Don Miguel en C. Corregidor Ruiz de Pereda, 1 (Cruz de Humilladero, 29006 Málaga). Pan hecho cada mañana, bollos, dulces y tartas por encargo, además de víveres, bebidas y snacks. 5,0 sobre 5 con 6 reseñas.',
	hoursSummary: 'L–J 8:15–14:30 y 17:15–20:30 · V hasta las 21:30 · S–D horario partido',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+Don+miguel/@36.7113873,-4.4479378,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7feb556c65b:0x6cfca4e5002ed393!8m2!3d36.7113873!4d-4.4479378!16s%2Fg%2F11z3yllk98?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=7922138650800672537',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7113873%2C-4.4479378',
	embed: 'https://maps.google.com/maps?q=36.7113873,-4.4479378&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7113873,-4.4479378',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '8:15–14:30 · 17:15–20:30' },
	{ day: 'Viernes', value: '8:15–14:30 · 17:15–21:30' },
	{ day: 'Sábado', value: '8:30–14:35 · 17:30–20:30' },
	{ day: 'Domingo', value: '9:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultado el 29 de octubre de 2026. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente; conviene confirmarlo antes de ir.';

/** Lo que la ficha y la casa anuncian del surtido. */
export const SERVICIOS = [
	'Pan del día',
	'Bollos',
	'Dulces',
	'Tartas por encargo',
	'Víveres',
	'Bebidas frías',
	'Snacks y cosas de picar',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan cada mañana',
		text: 'La casa anuncia en su ficha que hace el pan todos los días para que salga recién hecho del horno, y que en el mostrador hay bollos y dulces.',
	},
	{
		title: 'Tartas por encargo',
		text: 'La ficha indica que se pueden pedir tartas a gusto para cualquier ocasión. No publica catálogo ni precios, así que el encargo se habla en la tienda.',
	},
	{
		title: 'La compra de cada día',
		text: 'Además del obrador, el local publica víveres, bebidas frías y un surtido de patatas y snacks de picar, para llevar lo que falte en casa.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Don Miguel?',
		a: 'En la calle Corregidor Ruiz de Pereda, número 1, en el barrio de Cruz de Humilladero (29006 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:15 a 14:30 y de 17:15 a 20:30. El viernes cierra la tarde a las 21:30, el sábado abre de 8:30 a 14:35 y de 17:30 a 20:30, y el domingo solo por la mañana, de 9:00 a 14:30.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha publica pan hecho cada mañana, bollos, dulces y tartas por encargo, además de víveres, bebidas frías y un surtido de patatas y snacks de picar.',
	},
	{
		q: '¿Se pueden encargar tartas?',
		a: 'Sí. La casa indica en su ficha que se pueden pedir tartas a gusto para cualquier ocasión. No publica catálogo ni precios, así que conviene pasar por la tienda.',
	},
	{
		q: '¿Hay que reservar o pedir por adelantado?',
		a: 'La ficha no publica sistema de reservas ni encargos online. Para una tarta, lo más seguro es pasar a preguntar en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre aseo ni asientos, así que esta página no la afirma.',
	},
	{
		q: '¿Tiene teléfono o página web?',
		a: 'No. La ficha de Google de Panadería Don Miguel no publica número de teléfono, página web ni redes sociales del negocio, así que esta página no los enlaza.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5,0 sobre 5 con 6 reseñas en Google, que la clasifica como panadería.',
	},
];
