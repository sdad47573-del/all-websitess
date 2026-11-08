/**
 * Datos de Pollería & Churrería Sabor de la Casa — C. Escultor Echegoyan, 27,
 * Loc 4, 41807 Espartinas (Sevilla).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Pollería & Churrería Sabor de la Casa»,
 *   37.3809311,-6.1215344, feature 0xd12132ddd0b3a63:0xeab861b4b0b14c57
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas,
 *   descripción y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La carta se apoya en la descripción que publica el propio negocio en Google.
 * Lo que el sitio NO inventa: no hay web propia ni precios publicados.
 */

export const BUSINESS = {
	name: 'Sabor de la Casa',
	fullName: 'Pollería & Churrería Sabor de la Casa',
	googleName: 'Pollería & Churrería Sabor de la Casa',
	shortName: 'Sabor de la Casa',
	mark: 'S',
	street: 'C. Escultor Echegoyan, 27, Loc 4',
	city: 'Espartinas',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Espartinas',
	postalCode: '41807',
	country: 'ES',
	phone: '+34 622 00 65 29',
	phoneHref: '+34622006529',
	rating: 4.7,
	reviewsCount: 258,
	siteUrl: 'https://www.sur-digital.com/polleria-y-churreria-sabor-de-la-casa',
	geo: { lat: 37.3809311, lng: -6.1215344 },
	featureId: '0xd12132ddd0b3a63:0xeab861b4b0b14c57',
	placeId: 'ChIJYzoL3S0TEg0RV0yxsLRhuOo',
	cid: '16908869260990839895',
	category: 'Pollería, churrería y comida casera para llevar',
	categories: ['Pollería'],
	tagline: 'Pollos asados, churros y comida casera en Espartinas',
	description:
		'Pollería y churrería en Espartinas: pollos asados, croquetas, solomillos, ensaladillas y churros con chocolate artesanales. 4,7 sobre 5 con 258 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Poller%C3%ADa+%26+Churrer%C3%ADa+Sabor+de+la+Casa/@37.3809311,-6.1215344,17z/data=!3m1!4b1!4m6!3m5!1s0xd12132ddd0b3a63:0xeab861b4b0b14c57!8m2!3d37.3809311!4d-6.1215344!16s%2Fg%2F11l8lss5gw',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3809311%2C-6.1215344',
	embed: 'https://maps.google.com/maps?q=37.3809311,-6.1215344&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre todos los días, con dos turnos
 * de miércoles a sábado y horario continuo el resto. La ficha avisa de que en
 * festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–16:30' },
	{ day: 'Martes', value: '10:00–16:00' },
	{ day: 'Miércoles', value: '10:00–16:00 · 19:00–23:00' },
	{ day: 'Jueves', value: '10:00–16:00 · 19:00–23:00' },
	{ day: 'Viernes', value: '10:00–16:30 · 19:00–23:00' },
	{ day: 'Sábado', value: '8:00–16:30 · 19:00–23:00' },
	{ day: 'Domingo', value: '8:00–17:00' },
];

/**
 * Señales de identidad que constan: las tres patas de la casa (asador,
 * freiduría y churrería), el formato de comida para llevar, la nota y el
 * teléfono.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Churros artesanales',
	'Comida casera para llevar',
	'Espartinas · Sevilla',
	'4,7 · 258 reseñas en Google',
	'+34 622 00 65 29',
];

/**
 * Carta construida con la descripción que publica el propio negocio y con las
 * reseñas. No hay precios publicados, así que no se muestran.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'el producto de la casa, del asador a la bandeja' },
			{ name: 'Pollos por encargo', note: 'llama y reserva los que necesites para una hora' },
			{
				name: 'Patatas fritas con queso y bacon',
				note: '«las mejores que he comido», dice una reseña',
			},
			{ name: 'Croquetas caseras', note: 'de la freiduría, hechas en la casa' },
		],
	},
	{
		title: 'Guisos y carnes',
		items: [
			{ name: 'Carrillada', note: 'guisada, de las comidas caseras para llevar' },
			{ name: 'Solomillo al whisky', note: 'uno de los clásicos de la carta' },
			{ name: 'Solomillo al roquefort', note: 'con su salsa de queso' },
			{ name: 'Bacalao dorado', note: 'al estilo de la casa' },
		],
	},
	{
		title: 'Ensaladillas y fríos',
		items: [
			{ name: 'Ensaladilla rusa', note: 'casera, de nevera' },
			{ name: 'Ensaladilla de pulpo', note: 'la versión marina de la casa' },
			{ name: 'Ensaladilla brasileña', note: '«nuestra exquisita ensaladilla brasileña», dice la ficha' },
			{ name: 'Salmorejo', note: 'para llevar en tarrina' },
			{ name: 'Gazpacho', note: 'de temporada, bien frío' },
		],
	},
	{
		title: 'Churrería',
		items: [
			{ name: 'Churros de rueda', note: 'artesanales, recién hechos' },
			{ name: 'Chocolate artesanal', note: 'para mojar los churros' },
			{ name: 'Churros con chocolate', note: 'el clásico de la casa, también para llevar' },
			{ name: 'Desayunos de churrería', note: 'el fin de semana abre a las 8:00' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabor de la Casa?',
		a: 'En la calle Escultor Echegoyan 27, local 4, en Espartinas (41807 Sevilla). El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días. De miércoles a sábado tiene dos turnos: mediodía hacia las 10:00–16:00 y noche de 19:00 a 23:00. El lunes va de 10:00 a 16:30, el martes de 10:00 a 16:00, y el fin de semana abre antes: el sábado a las 8:00 y el domingo también a las 8:00, hasta las 17:00. En festivos puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado de asador, croquetas caseras, carrillada, solomillo al whisky y al roquefort, bacalao dorado, ensaladilla rusa, de pulpo y brasileña, salmorejo, gazpacho y churros de rueda con chocolate artesanal.',
	},
	{
		q: '¿A qué hora hay churros?',
		a: 'La churrería es parte de la casa y los churros son artesanales. El sábado y el domingo abre a las 8:00, así que es la franja más temprana para desayunar. Para confirmar que la churrera está en marcha entre semana, llama antes.',
	},
	{
		q: '¿Es para llevar o tiene mesas?',
		a: 'La casa se define como asador, freiduría y comidas caseras para llevar. La ficha no publica servicio de mesa y el único dato de accesibilidad es que no hay asientos adaptados, así que cuenta con recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta con precios. El propio negocio resume su propuesta en «trato exquisito y precios asequibles»; para saber el precio del día, llama o pregúntalo en el local.',
	},
	{
		q: '¿Se puede encargar por teléfono?',
		a: `Sí, el canal que consta es el teléfono ${BUSINESS.phone}. Llama para encargar pollos, una bandeja de comida casera o churros, y confirma la hora de recogida. Las reseñas avisan de que en hora punta la espera puede alargarse.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha solo publica un dato: no hay asientos adaptados para sillas de ruedas. No indica el acceso, así que si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 258 reseñas en Google, según la ficha consultada. Las reseñas destacan los pollos asados, los churros, las croquetas y el solomillo al whisky.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
