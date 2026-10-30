/**
 * Datos de La Tradizionale — C. Feria, 96, Casco Antiguo, 41003 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «La Tradizionale», 37.3990209,-5.9915949,
 *   feature 0xd126c065da79ac5:0x171047bc4f617f6c (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta con precios ni enlaza
 * web propia. Los platos que se listan son los que aparecen en las fotos y en
 * las reseñas del perfil, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'La Tradizionale',
	fullName: 'La Tradizionale',
	googleName: 'La Tradizionale',
	shortName: 'La Tradizionale',
	mark: 'LT',
	street: 'C. Feria, 96',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Casco Antiguo',
	postalCode: '41003',
	country: 'ES',
	phone: '+34 955 28 13 74',
	phoneHref: '+34955281374',
	rating: 4.6,
	reviewsCount: 3125,
	siteUrl: 'https://la-tradizionale.vercel.app',
	geo: { lat: 37.3990209, lng: -5.9915949 },
	featureId: '0xd126c065da79ac5:0x171047bc4f617f6c',
	placeId: 'ChIJxZqnXQZsEg0RbH9hT7xHEBc',
	cid: '1661828507086915436',
	category: 'Pizzería italiana',
	categories: ['Pizzería', 'Restaurante italiano', 'Pizza para llevar'],
	tagline: 'Pizza al corte y pizzas italianas en la calle Feria',
	description:
		'Pizzería italiana en C. Feria 96, Sevilla. Pizza al corte, porciones de 2 €, pizzas de dos tamaños y pasteles helados. 4,6 sobre 5 con 3.125 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Tradizionale/@37.3990209,-5.9915949,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c065da79ac5:0x171047bc4f617f6c!8m2!3d37.3990209!4d-5.9915949!16s%2Fg%2F11btvgcy4k',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3990209%2C-5.9915949',
	embed: 'https://maps.google.com/maps?q=37.3990209,-5.9915949&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: todos los días de 13:00 a 02:00,
 * es decir, abre a la hora de comer y cierra de madrugada. La ficha avisa de
 * que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–2:00' },
	{ day: 'Martes', value: '13:00–2:00' },
	{ day: 'Miércoles', value: '13:00–2:00' },
	{ day: 'Jueves', value: '13:00–2:00' },
	{ day: 'Viernes', value: '13:00–2:00' },
	{ day: 'Sábado', value: '13:00–2:00' },
	{ day: 'Domingo', value: '13:00–2:00' },
];

/**
 * Señales de identidad que sí constan: las tres categorías de la ficha, la
 * pizza al corte, el horario largo, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Pizza al corte',
	'Pizzería italiana',
	'Pizza para llevar',
	'C. Feria · Casco Antiguo',
	'4,6 · 3.125 reseñas en Google',
	'+34 955 28 13 74',
];

/**
 * Carta construida con las categorías de la ficha y lo que destacan las
 * reseñas y las fotos. La ficha no publica carta con precios.
 */
export const MENU = [
	{
		title: 'Al corte',
		items: [
			{
				name: 'Porción de pizza',
				note: '«enormes y muy ricas», dice una reseña, que las recuerda a 2 €',
			},
			{ name: 'Pizza al corte', note: 'para comer al momento o llevar en la mano' },
			{ name: 'Rollos de pizza', note: 'los que aparecen junto a la porción en las fotos del perfil' },
			{ name: 'Porciones para llevar', note: 'se piden y se recogen en el local' },
			{ name: 'Pizza para llevar', note: 'una de las categorías con las que figura en Google' },
		],
	},
	{
		title: 'Pizzas',
		items: [
			{ name: 'Pizza de dos tamaños', note: '«exquisitas y de dos tamaños», resume una reseña' },
			{ name: 'Masa artesana', note: '«masa buenísima», la destacan en Google' },
			{ name: 'Pizzas por encargo', note: 'llama y confirma cuántas y a qué hora recogerlas' },
			{ name: 'Pizzas para compartir', note: 'para una cena en casa o una mesa de amigos' },
		],
	},
	{
		title: 'Dolci y café',
		items: [
			{ name: 'Pasteles helados', note: '«buena variedad de pasteles helados», dice una reseña' },
			{ name: 'Café', note: '«buen café a un precio razonable», añade la misma reseña' },
			{ name: 'Postres italianos', note: 'según lo que haya en el mostrador' },
			{ name: 'Bebidas', note: 'para completar la pizza o el café' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tradizionale?',
		a: 'En la calle Feria 96, en el Casco Antiguo de Sevilla (41003). El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días de 13:00 a 2:00, según la ficha de Google: se puede comer desde el mediodía y cerrar de madrugada. En festivos puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pizza al corte por porciones y pizzas italianas de dos tamaños, con masa artesana. También hay pasteles helados y café, según las reseñas del perfil.',
	},
	{
		q: '¿Cuánto cuesta la porción de pizza?',
		a: 'La ficha no publica precios. Una reseña de Google recuerda porciones «enormes y muy ricas» a 2 € cada una, pero el precio puede haber cambiado: confírmalo en el local.',
	},
	{
		q: '¿Se puede pedir pizza para llevar?',
		a: 'Sí. La ficha lo clasifica como «pizza para llevar» además de pizzería y restaurante italiano, así que se puede encargar y recoger en el local.',
	},
	{
		q: '¿Hay que reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que consta es el teléfono ${BUSINESS.phone}: llama si vas con un grupo o quieres encargar varias pizzas.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica acceso para sillas de ruedas, pero no aparcamiento ni asientos adaptados. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 3.125 reseñas en Google, según la ficha consultada. Es una de las pizzerías con más valoraciones de la ciudad; las reseñas destacan las porciones, la masa y los pasteles helados.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
