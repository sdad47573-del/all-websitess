/**
 * Datos de Restaurante El Tozón — Av. Constitución, 22B
 * (10410 Arroyomolinos de la Vera, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante El Tozón, 40.05403,-5.85012,
 *   feature 0xd3e319cf73bbcfb:0xe9a7cb812bfb45b4 (dirección, teléfono, horario,
 *   nota, reseñas, categoría y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante El Tozón',
	shortName: 'El Tozón',
	mark: 'ET',
	street: 'Av. Constitución, 22B',
	city: 'Arroyomolinos de la Vera',
	region: 'Cáceres',
	regionName: 'Cáceres',
	postalCode: '10410',
	country: 'ES',
	phoneDisplay: '927 17 76 35',
	phoneHref: 'tel:+34927177635',
	rating: 4.6,
	reviewsCount: 229,
	priceRange: '€€',
	siteUrl: 'https://restaurante-el-tozon.vercel.app',
	geo: { lat: 40.05403, lng: -5.85012 },
	featureId: '0xd3e319cf73bbcfb:0xe9a7cb812bfb45b4',
};

const CID_DECIMAL = '16836649487596996020';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+Toz%C3%B3n/@40.05403,-5.85012,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e319cf73bbcfb:0xe9a7cb812bfb45b4!8m2!3d40.05403!4d-5.85012!16s%2Fg%2F11fkf07fqs',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.05403%2C-5.85012',
	embed: 'https://maps.google.com/maps?q=40.05403,-5.85012&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google Maps. Martes, miércoles y jueves cierra. */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–15:00 · 18:00–21:00' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: 'Cerrado', closed: true },
	{ day: 'Viernes', value: '10:00–17:00 · 18:00–23:00' },
	{ day: 'Sábado', value: '10:00–23:30' },
	{ day: 'Domingo', value: '10:00–21:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy rica la ensalada de naranja y jamón y la ración de sepia.',
	},
	{
		rating: 5,
		text: 'Raciones abundantes. Buen trato y precio asequible.',
	},
	{
		rating: 5,
		text: 'Ricas ensaladas, estupenda y tierna carrillera, deliciosos postres.',
	},
];

export const SERVICIOS = [
	'Bar restaurante',
	'Terraza con vistas',
	'Raciones abundantes',
	'Ensaladas',
	'Arroces',
	'Carnes a la plancha',
	'Postres',
	'Cocina de La Vera',
	'Acceso adaptado',
	'Aseo adaptado',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{
				name: 'Ensalada de naranja y jamón',
				note: 'con naranja en trozos, jamón y aliño oscuro',
			},
			{ name: 'Sepia a la plancha', note: 'la ración que citan las reseñas' },
			{ name: 'Tapa de la casa', note: 'con la caña, como se ve en las fotos' },
			{ name: 'Carpaccio', note: 'con parmesano, rúcula y aceite' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Paella', note: 'con pollo y pimientos verdes, en paellera' },
			{ name: 'Chuletón', note: 'a la plancha, con patatas paja' },
			{ name: 'Carrillera', note: '«estupenda y tierna», según las reseñas' },
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Helado con frutos rojos',
				note: 'dos bolas, con salsa de frutos rojos y virutas',
			},
			{ name: 'Postres', note: 'los que haya ese día; los de la ficha son helados con frutos rojos' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Tozón?',
		a: 'En la Avenida Constitución, 22B, 10410 Arroyomolinos de la Vera (Cáceres), en La Vera. Lo más cómodo es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Viernes de 10:00 a 17:00 y de 18:00 a 23:00; sábado de 10:00 a 23:30; domingo de 10:00 a 21:00; y lunes de 10:00 a 15:00 y de 18:00 a 21:00. Martes, miércoles y jueves cierra.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 17 76 35. La ficha de Google no ofrece reserva online. Para grupos y fines de semana conviene llamar con tiempo.',
	},
	{
		q: '¿Qué se come en El Tozón?',
		a: 'Cocina de bar restaurante con raciones abundantes: ensalada de naranja y jamón, sepia a la plancha, carpaccio, paella, chuletón y carrillera, con postres caseros. No publicamos precios porque el restaurante no los tiene publicados.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, una terraza cubierta con sillas rojas y vistas a los bancales del valle, como se ve en las fotos de la ficha. No hay información pública de cuántas mesas hay, así que conviene preguntar al reservar.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El restaurante no publica precios ni carta con importes en su ficha de Google. En las reseñas se repite que tiene «precio asequible», pero esta web no inventa cifras: se consultan al llamar o en el local.',
	},
];
