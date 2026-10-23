/**
 * Datos de Restaurante Asador Villa de Cañaveral —
 * Av. Dr. Boticario (10820 Cañaveral, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Asador Villa de Cañaveral,
 *   39.7921055,-6.3906577, feature 0xd15ffec372ff195:0xe5d2d00b90f46f9e
 *   (dirección, teléfono, horario, nota, reseñas, categoría y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Asador Villa de Cañaveral',
	shortName: 'Asador Villa de Cañaveral',
	mark: 'VC',
	street: 'Av. Dr. Boticario',
	city: 'Cañaveral',
	region: 'Cáceres',
	regionName: 'Cáceres',
	postalCode: '10820',
	country: 'ES',
	phoneDisplay: '609 18 64 73',
	phoneHref: 'tel:+34609186473',
	rating: 4.2,
	reviewsCount: 680,
	priceRange: '€€',
	siteUrl: 'https://restaurante-asador-villa-de-canaveral.vercel.app',
	geo: { lat: 39.7921055, lng: -6.3906577 },
	featureId: '0xd15ffec372ff195:0xe5d2d00b90f46f9e',
};

const CID_DECIMAL = '16560527527889891230';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Asador+Villa+de+Ca%C3%B1averal/@39.7921055,-6.3906577,17z/data=!3m1!4b1!4m6!3m5!1s0xd15ffec372ff195:0xe5d2d00b90f46f9e!8m2!3d39.7921055!4d-6.3906577!16s%2Fg%2F11btvwl0n2',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=39.7921055%2C-6.3906577',
	embed: 'https://maps.google.com/maps?q=39.7921055,-6.3906577&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google Maps. Miércoles cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–15:30 · 20:00–21:30' },
	{ day: 'Martes', value: '12:30–15:30 · 20:00–21:30' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '12:30–15:30 · 20:00–21:30' },
	{ day: 'Viernes', value: '12:30–15:30 · 20:00–21:30' },
	{ day: 'Sábado', value: '12:30–15:30 · 20:00–21:30' },
	{ day: 'Domingo', value: '12:30–15:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buena cocina, las recomendaciones exquisitas, postres caseros muy ricos.',
	},
	{
		rating: 5,
		text: 'Tosta de jamón al corte muy rica, buen trato.',
	},
	{
		rating: 5,
		text: 'Muy buen servicio, comida casera buenísima para repetir.',
	},
];

export const SERVICIOS = [
	'Asador',
	'Chuletillas de cordero',
	'Marisco y pescado',
	'Platos de cuchara',
	'Postres caseros',
	'Comida casera',
	'Comedor rústico',
	'Bodega a la vista',
	'Asientos adaptados',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Tosta de jamón al corte', note: '«muy rica», dicen en las reseñas' },
			{ name: 'Ensalada con jamón', note: 'con frutos secos y queso rallado' },
			{ name: 'Ensalada de marisco', note: 'con langostinos, tomate y aceitunas' },
		],
	},
	{
		title: 'Del asador',
		items: [
			{
				name: 'Chuletillas de cordero',
				note: 'a la brasa, con patatas y pimiento asado',
			},
			{ name: 'Brocheta de langostinos', note: 'con vieiras y patata' },
			{ name: 'Pechuga a la plancha', note: 'con patatas y pimiento rojo' },
		],
	},
	{
		title: 'Cuchara y casero',
		items: [
			{ name: 'Alubias con jamón', note: 'guiso de cuchara, con su caldo' },
			{ name: 'Platos caseros', note: '«comida casera buenísima», cuentan en Google' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Postres caseros', note: 'los que haya ese día; las reseñas los destacan' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Asador Villa de Cañaveral?',
		a: 'En la Avenida Dr. Boticario, 10820 Cañaveral (Cáceres), en la comarca de Monfragüe. La ficha de Google no da número de portal, así que lo más cómodo es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado, comidas de 12:30 a 15:30 y cenas de 20:00 a 21:30; el domingo solo abre a mediodía, de 12:30 a 15:30. El miércoles cierra.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 609 18 64 73. La ficha de Google no ofrece reserva online. Para fines de semana y puentes conviene llamar con tiempo.',
	},
	{
		q: '¿Qué se come en el asador?',
		a: 'Chuletillas de cordero a la brasa, brochetas de langostinos, pechuga a la plancha, platos de cuchara como las alubias con jamón, ensaladas y postres caseros. No publicamos precios porque el restaurante no los tiene publicados.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'La ficha de Google no publica menú ni precios, así que esta web no lo afirma. En las reseñas se habla de comida casera y de un servicio atento; para saber si hay menú del día, se pregunta al llamar.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google solo marca asientos adaptados para sillas de ruedas. No indica acceso ni aseo adaptados, así que si los necesitas conviene llamar antes.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El restaurante no publica precios en su ficha de Google. Esta web no inventa cifras: se consultan al llamar o en el propio asador.',
	},
];
