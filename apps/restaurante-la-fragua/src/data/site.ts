/**
 * Datos de Restaurante la Fragua — C. Toril, 4 (10412 Garganta la Olla, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante la Fragua, 40.1112973,-5.776451,
 *   feature 0xd3e3459771f3aad:0x848fa4c04b1d1c57 (dirección, teléfono, horario,
 *   nota, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante la Fragua',
	shortName: 'La Fragua',
	mark: 'LF',
	street: 'C. Toril, 4',
	city: 'Garganta la Olla',
	region: 'Cáceres',
	regionName: 'Cáceres',
	postalCode: '10412',
	country: 'ES',
	phoneDisplay: '927 17 95 71',
	phoneHref: 'tel:+34927179571',
	rating: 4.4,
	reviewsCount: 660,
	priceRange: '€€',
	siteUrl: 'https://restaurante-la-fragua.vercel.app',
	geo: { lat: 40.1112973, lng: -5.776451 },
	featureId: '0xd3e3459771f3aad:0x848fa4c04b1d1c57',
};

const CID_DECIMAL = '9552034480476986455';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+la+Fragua/@40.1112973,-5.776451,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e3459771f3aad:0x848fa4c04b1d1c57!8m2!3d40.1112973!4d-5.776451!16s%2Fg%2F1td6tjlx',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=40.1112973%2C-5.776451',
	embed: 'https://maps.google.com/maps?q=40.1112973,-5.776451&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google Maps. */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–15:00' },
	{ day: 'Martes', value: '13:00–23:00' },
	{ day: 'Miércoles', value: '13:00–23:00' },
	{ day: 'Jueves', value: '13:00–23:00' },
	{ day: 'Viernes', value: '13:00–23:00' },
	{ day: 'Sábado', value: '13:00–23:00' },
	{ day: 'Domingo', value: '13:00–15:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Lo mejor el trozo de tarta semi fría de queso casera.',
	},
	{
		rating: 5,
		text: 'Menú asequible y de buena calidad, el secreto un poco seco pero muy rico.',
	},
	{
		rating: 5,
		text: 'Pedimos unos chipirones, unas migas y unos pimientos con ventresca.',
	},
];

export const SERVICIOS = [
	'Cocina extremeña',
	'Migas y platos de cuchara',
	'Carnes y guisos',
	'Menú del día',
	'Postres caseros',
	'Taberna',
	'Casa de piedra',
	'Mesas altas en la calle',
	'Asientos adaptados',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Migas extremeñas', note: 'con huevo frito por encima, la ración de la casa' },
			{ name: 'Revuelto de judías verdes', note: 'huevo cuajado con judía plana' },
			{ name: 'Ensalada de tomate', note: 'con aceitunas y pimientos encurtidos' },
			{ name: 'Pimientos con ventresca', note: 'uno de los platos que citan las reseñas' },
			{ name: 'Chipirones', note: 'citados en las reseñas de la ficha' },
		],
	},
	{
		title: 'Carnes y guisos',
		items: [
			{ name: 'Secreto ibérico', note: '«un poco seco pero muy rico», dicen en las reseñas' },
			{ name: 'Carne en salsa con patatas', note: 'guiso de la casa, con patatas fritas' },
			{ name: 'Guisos de cuchara', note: 'cocina de siempre, según el día' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{ name: 'Menú del día', note: '«asequible y de buena calidad», cuentan en Google' },
			{ name: 'Platos de la carta', note: 'para pedir platos sueltos fuera del menú' },
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Tarta semifría de queso',
				note: 'casera, con salsa de frutos rojos; la más citada en las reseñas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante la Fragua?',
		a: 'En la calle Toril, 4, 10412 Garganta la Olla (Cáceres), en plena La Vera. Lo más cómodo es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a sábado, de 13:00 a 23:00. El domingo abre de 13:00 a 15:30 y el lunes solo a mediodía, de 13:00 a 15:00. No abre por la mañana: el servicio empieza a la una.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'Sí, y en las reseñas de Google se describe como «asequible y de buena calidad». La ficha no publica el precio ni la carta del menú, así que se consultan al llamar o en el propio restaurante.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 17 95 71. La ficha de Google no ofrece reserva online. En temporada alta en La Vera o en puentes conviene llamar con tiempo.',
	},
	{
		q: '¿Qué se come en La Fragua?',
		a: 'Cocina extremeña: migas con huevo, revueltos, pimientos con ventresca, chipirones, secreto ibérico y carnes en salsa, además de menú del día. De postre, la tarta semifría de queso casera. No publicamos precios porque el restaurante no los tiene publicados.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google solo marca asientos adaptados para sillas de ruedas. No indica acceso ni aseo adaptados, y el local está en una casa de piedra del casco antiguo, así que si necesitas accesibilidad conviene llamar antes y preguntar.',
	},
	{
		q: '¿Se puede ir a comer sin reservar?',
		a: 'No hay dato público de aforo ni de reservas obligatorias. Lo prudente es llamar antes, sobre todo en fin de semana y en temporada de La Vera, y confirmar mesa y horario.',
	},
];
