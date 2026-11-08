/**
 * Datos de Chef Karim - Comida A Domicilio y Para llevar — C. Beatriz de
 * Suabia, 77, 41005 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Chef Karim - Comida A Domicilio y Para
 *   llevar», 37.3829337,-5.9669259, feature 0xd126f9a765fd6e3:0xcfd350f312d94526
 *   (nombre, dirección, categorías, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta con precios, descripción
 * ni web propia. Solo hay dos reseñas, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'Chef Karim',
	fullName: 'Chef Karim - Comida A Domicilio y Para llevar',
	googleName: 'Chef Karim - Comida A Domicilio y Para llevar',
	shortName: 'Chef Karim',
	mark: 'K',
	street: 'C. Beatriz de Suabia, 77',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Beatriz de Suabia',
	postalCode: '41005',
	country: 'ES',
	phone: '+34 664 65 93 96',
	phoneHref: '+34664659396',
	rating: 5,
	reviewsCount: 2,
	siteUrl: 'https://www.sur-digital.com/chef-karim',
	geo: { lat: 37.3829337, lng: -5.9669259 },
	featureId: '0xd126f9a765fd6e3:0xcfd350f312d94526',
	placeId: 'ChIJ49ZfdppvEg0RJkXZEvNQ088',
	cid: '14447328699777877286',
	category: 'Comida a domicilio y para llevar',
	categories: [
		'Comida a domicilio',
		'Restaurante de comida rápida',
		'Restaurante de comida para llevar',
		'Restaurante',
		'Restaurante de cocina española',
	],
	tagline: 'Comida a domicilio y para llevar en Sevilla',
	description:
		'Comida a domicilio y para llevar en C. Beatriz de Suabia 77, Sevilla. Cocina española y platos caseros, con reparto y recogida. 5 sobre 5 en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Chef+Karim+-+Comida+A+Domicilio+y+Para+llevar/@37.3829337,-5.9669259,17z/data=!4m6!3m5!1s0xd126f9a765fd6e3:0xcfd350f312d94526!8m2!3d37.3829337!4d-5.9669259!16s%2Fg%2F11n07ny4lk',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3829337%2C-5.9669259',
	embed: 'https://maps.google.com/maps?q=37.3829337,-5.9669259&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: de lunes a sábado con dos turnos,
 * mediodía y noche, y domingo continuo de 10:00 a 22:30. La ficha avisa de que
 * en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Martes', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Miércoles', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Jueves', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Viernes', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Sábado', value: '9:30–15:30 · 16:30–22:30' },
	{ day: 'Domingo', value: '10:00–22:30' },
];

/**
 * Señales de identidad que sí constan: las categorías de la ficha, el reparto y
 * la recogida, el horario, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Comida a domicilio',
	'Comida para llevar',
	'Cocina española',
	'C. Beatriz de Suabia · Sevilla',
	'5,0 · 2 reseñas en Google',
	'+34 664 65 93 96',
];

/**
 * Carta orientativa. La ficha no publica carta ni precios y solo tiene dos
 * reseñas, así que se listan las categorías y el formato, no platos concretos.
 */
export const MENU = [
	{
		title: 'La cocina',
		items: [
			{
				name: 'Cocina española',
				note: 'una de las categorías con las que figura en Google',
			},
			{
				name: 'Platos del día',
				note: '«qué platos más ricos», dice una de las dos reseñas',
			},
			{
				name: 'Comida rápida',
				note: 'la ficha también lo clasifica como restaurante de comida rápida',
			},
			{ name: 'Raciones para llevar', note: 'para recoger en el local o pedir a domicilio' },
			{
				name: 'Postres caseros',
				note: 'en la foto del perfil aparece un rollo de pasta frita con azúcar glas',
			},
		],
	},
	{
		title: 'Reparto y recogida',
		items: [
			{ name: 'Comida a domicilio', note: 'el reparto es lo primero que anuncia el nombre' },
			{ name: 'Pedidos para llevar', note: 'se piden y se recogen en el local' },
			{ name: 'Pedidos por teléfono', note: `el canal que consta es el ${'+34 664 65 93 96'}` },
			{ name: 'Encargos para una hora', note: 'llama y confirma la hora de entrega o recogida' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Chef Karim?',
		a: 'En la calle Beatriz de Suabia 77, en el 41005 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a sábado abre de 9:30 a 15:30 y de 16:30 a 22:30; el domingo, de 10:00 a 22:30, según la ficha de Google. En festivos puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante de cocina española, comida rápida, comida para llevar y comida a domicilio. No publica carta ni descripción de los platos, así que lo mejor es llamar y preguntar qué hay ese día.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: `Sí, la comida a domicilio es la primera categoría de la ficha y forma parte del nombre del negocio. Llama al ${BUSINESS.phone} para confirmar la zona, el pedido y el tiempo de entrega.`,
	},
	{
		q: '¿Se puede recoger en el local?',
		a: 'Sí. La ficha también lo clasifica como restaurante de comida para llevar, así que se puede encargar por teléfono y recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para saber lo que cuesta un plato o el reparto, hay que preguntar por teléfono o en el local.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha solo indica que no hay aseo ni asientos adaptados para sillas de ruedas. No publica datos del acceso, así que si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '5 sobre 5 en Google, aunque con solo 2 reseñas: una destaca los platos y otra al chef. Es una muestra muy pequeña, así que tómala como una referencia inicial.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
