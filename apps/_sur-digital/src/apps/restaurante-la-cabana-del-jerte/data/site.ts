/**
 * Datos de Restaurante valle del jerte La Cabaña del Jerte —
 * Av. Ramón y Cajal, 17 (10612 Jerte, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante valle del jerte La Cabaña del Jerte,
 *   40.222238,-5.7528862, feature 0xd3e4b3e105e9f41:0x157806c9a54db781
 *   (dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante valle del jerte La Cabaña del Jerte',
	shortName: 'La Cabaña del Jerte',
	mark: 'CJ',
	street: 'Av. Ramón y Cajal, 17',
	city: 'Jerte',
	region: 'Cáceres',
	regionName: 'Cáceres',
	postalCode: '10612',
	country: 'ES',
	phoneDisplay: '645 23 39 53',
	phoneHref: 'tel:+34645233953',
	rating: 4.4,
	reviewsCount: 2158,
	priceRange: '€€',
	siteUrl: 'https://www.sur-digital.com/restaurante-la-cabana-del-jerte',
	geo: { lat: 40.222238, lng: -5.7528862 },
	featureId: '0xd3e4b3e105e9f41:0x157806c9a54db781',
};

const CID_DECIMAL = '1546993935133292417';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+valle+del+jerte+La+Caba%C3%B1a+del+Jerte/@40.222238,-5.7528862,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e4b3e105e9f41:0x157806c9a54db781!8m2!3d40.222238!4d-5.7528862!16s%2Fg%2F12qf7w9bl',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=40.222238%2C-5.7528862',
	embed: 'https://maps.google.com/maps?q=40.222238,-5.7528862&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google Maps: dos servicios, mediodía y cena. */
export const HOURS = [
	{ day: 'Lunes', value: '13:30–15:30 · 20:00–22:00' },
	{ day: 'Martes', value: '13:30–15:30 · 20:00–22:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '13:30–15:30 · 20:00–22:00' },
	{ day: 'Viernes', value: '13:30–15:30 · 20:00–22:00' },
	{ day: 'Sábado', value: '13:30–15:30 · 20:00–22:00' },
	{ day: 'Domingo', value: '13:30–15:30 · 20:00–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Probamos las croquetas, las chuletas, chuletón, queso frito y ensalada gourmet.',
	},
	{
		rating: 5,
		text: 'Buena cocina, buenos precios y un servicio rápido y amigable.',
	},
	{
		rating: 5,
		text: 'Buena comida y buen servicio, la ensalada de naranja curiosa y buena.',
	},
];

export const SERVICIOS = [
	'Cocina extremeña',
	'Migas con huevo',
	'Quesos de la tierra',
	'Carnes a la plancha',
	'Ensaladas',
	'Comidas y cenas',
	'Terraza cubierta',
	'Valle del Jerte',
	'Acceso adaptado',
	'Aseo adaptado',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Migas extremeñas', note: 'con huevo frito y pimentón por encima' },
			{ name: 'Torta del Casar', note: 'fundida, con pimentón y tostadas para untar' },
			{ name: 'Queso frito', note: 'con salsa dulce, uno de los platos que citan las reseñas' },
			{ name: 'Croquetas', note: 'caseras, de las que más se piden' },
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{ name: 'Ensalada gourmet', note: 'la que piden los clientes en las reseñas' },
			{ name: 'Ensalada de naranja', note: '«curiosa y buena», cuentan en Google' },
			{ name: 'Ensalada de pulpo', note: 'con tomate y aliño de la casa' },
		],
	},
	{
		title: 'Carnes',
		items: [
			{ name: 'Chuletón', note: 'a la plancha, con patatas y tomate' },
			{ name: 'Chuletas', note: 'uno de los platos que repiten las reseñas' },
			{ name: 'Pinchos a la plancha', note: 'con patatas y tomate' },
			{ name: 'Carne a la plancha', note: 'con patatas y ensalada' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cabaña del Jerte?',
		a: 'En la Avenida Ramón y Cajal, 17, 10612 Jerte (Cáceres), a pie de la carretera del Valle del Jerte. Lo más cómodo es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De jueves a martes, con dos servicios: comidas de 13:30 a 15:30 y cenas de 20:00 a 22:00. El miércoles cierra. En temporada de cerezas y fines de semana conviene reservar.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 645 23 39 53. La ficha de Google no ofrece reserva online. Para grupos o para la temporada de cerezas, llama con tiempo.',
	},
	{
		q: '¿Qué se come en La Cabaña del Jerte?',
		a: 'Cocina extremeña y casera: migas con huevo, torta del Casar fundida, queso frito, croquetas y ensaladas, además de carnes a la plancha como el chuletón. No publicamos precios porque el restaurante no los tiene publicados.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fotos de la ficha muestran una terraza cubierta con mesas, toldos y sillas de plástico, además del comedor. No hay información pública de si se usa todo el año, así que conviene preguntar al reservar.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados, así que es de los pocos de la zona con esos tres servicios indicados.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El restaurante no publica precios ni carta con importes en su ficha de Google. En las reseñas se repite que tiene «buenos precios», pero esta web no inventa cifras: se consultan al llamar o en el local.',
	},
];
