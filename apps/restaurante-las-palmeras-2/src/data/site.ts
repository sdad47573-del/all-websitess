/**
 * Datos de Restaurante las Palmeras 2 — Cdad. del Transporte (30500 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante las palmeras 2,
 *   38.0773622,-1.2224829, feature 0xd647991337d8589:0xee3a9384e4495652.
 * - La ficha publica teléfono, horario, categorías, nota y reseñas; de ahí salen
 *   todos los datos operativos de esta web.
 *
 * Lo que la web NO inventa: precios, carta cerrada ni servicios que la ficha no
 * publique. La carta se resume a partir de los platos que se ven en las fotos de
 * la ficha; las reseñas se citan tal cual.
 */

export const BUSINESS = {
	name: 'Restaurante las Palmeras 2',
	mark: 'LP',
	street: 'Cdad. del Transporte',
	city: 'Murcia',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30500',
	country: 'ES',
	phoneDisplay: '621 25 55 79',
	phoneHref: 'tel:+34621255579',
	rating: 4.4,
	reviewsCount: 64,
	priceRange: '€',
	siteUrl: 'https://restaurante-las-palmeras-2.vercel.app',
	geo: { lat: 38.0773622, lng: -1.2224829 },
	featureId: '0xd647991337d8589:0xee3a9384e4495652',
};

const CID_DECIMAL = '17166195128651044434';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+las+palmeras+2/@38.0773622,-1.2224829,17z/data=!3m1!4b1!4m6!3m5!1s0xd647991337d8589:0xee3a9384e4495652!8m2!3d38.0773622!4d-1.2224829!16s%2Fg%2F11nycdcy9z',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.0773622%2C-1.2224829',
	embed: 'https://maps.google.com/maps?q=38.0773622,-1.2224829&z=17&hl=es&output=embed',
};

export const HOURS = [
	{ day: 'Lunes', value: '5:30–21:00' },
	{ day: 'Martes', value: '5:30–21:00' },
	{ day: 'Miércoles', value: '5:30–21:00' },
	{ day: 'Jueves', value: '5:30–21:00' },
	{ day: 'Viernes', value: '5:30–21:00' },
	{ day: 'Sábado', value: '7:00–13:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Voy mucho por allí buena comida y buenos precios servicio rápido.',
	},
	{
		rating: 5,
		text: 'Comimos el menú del día y buenísimo.',
	},
	{
		rating: 5,
		text: 'Almuerzos caseros y económicos.',
	},
];

export const SERVICIOS = [
	'Desayunos',
	'Almuerzos y menú del día',
	'Bar de tapas',
	'Cocina española casera',
	'Buenos precios',
	'Servicio rápido',
	'Aparcamiento',
	'Acceso adaptado',
];

/** Carta resumida a partir de los platos que se ven en las fotos de la ficha. */
export const MENU = [
	{
		title: 'Desayunos',
		items: [
			{ name: 'Mollete con jamón', note: 'con aceite de oliva; en la carta de la barra hay más montaditos' },
			{ name: 'Café con leche, solo y cortado', note: 'el local abre a las 5:30 para el turno de mañana' },
			{ name: 'Bollería y tostadas', note: 'en la vitrina de la barra' },
		],
	},
	{
		title: 'Tapas y raciones',
		items: [
			{ name: 'Calamar a la plancha', note: 'con ensalada, limón y pimientos' },
			{ name: 'Alitas de pollo en salsa', note: 'con patatas fritas' },
			{ name: 'Brochetas de verdura', note: 'a la plancha, con salsa de la casa' },
			{ name: 'Carne a la plancha', note: 'con patatas y ensalada' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{ name: 'Primero, segundo y postre', note: 'cocina casera, con pan y bebida' },
			{ name: 'Precio', note: 'la ficha no publica importes: pregúntalo en la barra' },
		],
	},
	{
		title: 'Bodega',
		items: [
			{ name: 'Vinos tintos y blancos', note: 'botellas de bodegas españolas en la vitrina' },
			{ name: 'Cerveza de barril', note: 'Cervezas Alhambra en la terraza' },
			{ name: 'Refrescos y agua', note: 'para el almuerzo o la comida' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante las Palmeras 2?',
		a: 'En la Ciudad del Transporte (30500 Murcia), en la zona industrial junto a la autovía. La ficha de Google no da número de calle, así que lo más fiable es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿A qué hora abre?',
		a: 'De lunes a viernes abre de 5:30 a 21:00, el sábado de 7:00 a 13:00 y el domingo cierra. Es un horario pensado para el turno de mañana: a primera hora hay desayunos y a mediodía, menú.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, y es lo que más valoran las reseñas: «comimos el menú del día y buenísimo», «almuerzos caseros y económicos». La ficha no publica ni la carta ni el precio, así que se pregunta en la barra.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'El teléfono de la ficha es el 621 25 55 79. Para grupos conviene llamar antes; el resto del tiempo funciona como bar de tapas con servicio rápido, sin reserva.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'Sí. Está en la Ciudad del Transporte, con aparcamiento en la zona, y la ficha indica aparcamiento adaptado, acceso, aseo y asientos para sillas de ruedas.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina española casera: desayunos con mollete y café, tapas y raciones como calamar a la plancha, alitas en salsa o brochetas de verdura, carne a la plancha y menú del día. Los precios son de los más ajustados de la zona según las reseñas.',
	},
];
