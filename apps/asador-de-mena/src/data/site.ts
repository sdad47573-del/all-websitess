/**
 * Datos de Asador de Mena — C. Huerta del Obispo, 25, Distrito Centro,
 * 29007 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: Asador de Mena, 36.7202184,-4.4285694,
 *   feature 0xd72f7981e383481:0x83218879e9aeedf4 (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas, accesibilidad y descripción del local).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 * - Carta de reparto de la casa en Just Eat, usada solo para nombrar los menús y
 *   el pollo asado; los precios que se muestran son los de esa plataforma.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia y solo publica
 * servicio de comidas. No se prometen cenas ni servicios que no consten.
 */

export const BUSINESS = {
	name: 'Asador de Mena',
	shortName: 'Mena',
	mark: '火',
	street: 'C. Huerta del Obispo, 25',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Distrito Centro',
	postalCode: '29007',
	country: 'ES',
	phone: '+34 952 30 29 56',
	phoneHref: '+34952302956',
	rating: 4.6,
	reviewsCount: 105,
	siteUrl: 'https://asador-de-mena.vercel.app',
	geo: { lat: 36.7202184, lng: -4.4285694 },
	featureId: '0xd72f7981e383481:0x83218879e9aeedf4',
	placeId: 'ChIJgTQ4Hpj3cg0R9O2u6XmIIYM',
	cid: '9448983550392987124',
	/** Categorías con las que Google clasifica el local. */
	category: 'Pollería y comida para llevar',
	categories: ['Restaurante de comida para llevar', 'Pollería'],
	tagline: 'Pollo asado y comida casera',
	description:
		'Asador de Mena, pollo asado y comida casera para llevar en la calle Huerta del Obispo 25, Distrito Centro, Málaga. Abre de martes a domingo de 13:30 a 15:45. 4,6 sobre 5 en Google con 105 reseñas.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio establecimiento en su ficha. */
	ownerDescription:
		'Nuestro deseo es que el cliente recuerde sabores de su niñez, las comidas que tenían en sus casas, que les hacían sus madres, abuelas... Intentamos que todo sea lo más tradicional posible.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Mena/@36.7202184,-4.4285694,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7981e383481:0x83218879e9aeedf4!8m2!3d36.7202184!4d-4.4285694!16s%2Fg%2F11b6hr5b3w',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7202184%2C-4.4285694',
	embed: 'https://maps.google.com/maps?q=36.7202184,-4.4285694&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: solo comidas, de 13:30 a 15:45, de
 * martes a domingo. El lunes aparece cerrado y no hay servicio de cenas.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '13:30–15:45' },
	{ day: 'Miércoles', value: '13:30–15:45' },
	{ day: 'Jueves', value: '13:30–15:45' },
	{ day: 'Viernes', value: '13:30–15:45' },
	{ day: 'Sábado', value: '13:30–15:45' },
	{ day: 'Domingo', value: '13:30–15:45' },
];

/**
 * Señales de identidad que sí constan: las categorías de la ficha, el barrio,
 * el horario de comidas, el teléfono y el dato de accesibilidad que Google
 * marca (acceso sí; asientos adaptados y aparcamiento adaptado, no).
 */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Comida para llevar',
	'Solo comidas · 13:30–15:45',
	'Acceso adaptado',
	'+34 952 30 29 56',
];

/**
 * Los menús numerados y el pollo asado salen de la carta de reparto de la casa;
 * sus precios son los de la plataforma y pueden no coincidir con los del
 * mostrador. El resto se apoya en la descripción del local y en las reseñas.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado entero', note: 'el plato que más repiten las reseñas, en el horno de la casa', price: '12,08 €' },
			{ name: 'Medio pollo asado', note: 'para una persona o para completar la mesa', price: '6,83 €' },
			{ name: 'Menú 1', note: 'combinación de pollo asado de la carta de reparto', price: '9,35 €' },
			{ name: 'Menú 2', note: 'menú más completo para compartir', price: '15,65 €' },
			{ name: 'Menú 3', note: 'el menú grande de la casa', price: '23,63 €' },
		],
	},
	{
		title: 'Guisos de cuchara',
		items: [
			{ name: 'Albóndigas en salsa', note: 'dos albóndigas grandes con tomate y verdura, en las fotos' },
			{ name: 'Estofado de cerdo con patatas', note: 'el guiso que aparece junto a las patatas fritas' },
			{ name: 'Potaje de garbanzos con chorizo', note: 'con patata, morcilla y pimentón, también en las fotos' },
			{ name: 'Cinta de lomo', note: 'anunciada en los carteles de la fachada' },
		],
	},
	{
		title: 'Mostrador y sábados',
		items: [
			{ name: 'Paella', note: 'los carteles de la puerta la anuncian para los sábados' },
			{ name: 'Ensalada de papas con atún', note: 'con tomate, aceitunas y cebolla, en las fotos' },
			{ name: 'Arroz con pasas y huevo', note: 'el arroz de la casa que aparece en las fotos' },
			{ name: 'Raciones para llevar', note: 'comida casera preparada para recoger' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Buñuelos con azúcar', note: 'fritos y espolvoreados, en las fotos' },
			{ name: 'Arroz con leche', note: 'anunciado en el escaparate' },
			{ name: 'Flan del día', note: 'uno de los postres del cartel de la puerta' },
			{ name: 'Tocino de cielo', note: 'también en el cartel del escaparate' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Asador de Mena?',
		a: 'En la calle Huerta del Obispo 25, en el Distrito Centro de Málaga (29007). El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha publica solo servicio de comidas: de 13:30 a 15:45, de martes a domingo. El lunes figura como cerrado y no aparece horario de cenas. En festivos puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'Según la ficha de Google, no: el único horario publicado es el de comidas, de 13:30 a 15:45. Si buscas cena, llama antes para confirmar que no haya cambiado.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado entero o medio pollo, los menús 1, 2 y 3 de la carta de reparto, platos de comida casera del día y acompañamientos. Las reseñas destacan el pollo asado y la cocina casera.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La carta de reparto de la casa marca 12,08 € el pollo entero, 6,83 € el medio y 9,35 €, 15,65 € y 23,63 € para los menús 1, 2 y 3. Son precios de plataforma y pueden no coincidir con los del mostrador; confírmalos por teléfono.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Google clasifica el local como restaurante de comida para llevar y pollería, y la casa mantiene carta de reparto. Para encargar, lo más directo es llamar al teléfono publicado.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no asientos adaptados ni aparcamiento adaptado. Si necesitas una mesa con condiciones concretas, llama antes.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del asador y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
