/**
 * Datos de ASADOR EL CAMPERO — Tr.ª Virgen de la Roca, 59, Ciudad Lineal,
 * 28027 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador El Campero»,
 *   40.4356861,-3.6580625, feature 0xd422f35e8277505:0xfc067930cc02aa79.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta, precios concretos, página web, redes
 * sociales ni reparto a domicilio. La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Asador El Campero',
	fullName: 'ASADOR EL CAMPERO',
	shortName: 'El Campero',
	mark: 'EC',
	street: 'Tr.ª Virgen de la Roca, 59',
	district: 'Ciudad Lineal',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28027',
	country: 'ES',
	siteUrl: 'https://asador-el-campero.vercel.app',
	geo: { lat: 40.4356861, lng: -3.6580625 },
	featureId: '0xd422f35e8277505:0xfc067930cc02aa79',
	placeId: 'ChIJBXUn6DUvQg0ReaoCzDB5Bvw',
	plusCode: '8CGRC8PR+7Q',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '914 03 94 41',
	phoneHref: 'tel:+34914039441',
	tagline: 'Pollo asado y comida casera en Ciudad Lineal',
	description:
		'Asador El Campero, en Tr.ª Virgen de la Roca, 59 (Ciudad Lineal, 28027 Madrid). Pollo asado, parrilla, comida casera para llevar y paellas por encargo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+El+Campero/@40.4356861,-3.6580625,17z/data=!4m6!3m5!1s0xd422f35e8277505:0xfc067930cc02aa79!8m2!3d40.4356861!4d-3.6580625!16s%2Fg%2F12qg5t4bc?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4356861%2C-3.6580625',
	embed: 'https://maps.google.com/maps?q=40.4356861,-3.6580625&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4356861,-3.6580625',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.3,
	count: 78,
	label: '4,3',
};

/** Horario de la ficha: mediodía de lunes a domingo, con el sábado cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que nombran las categorías y las reseñas. */
export const SERVICIOS = [
	'Pollo asado',
	'Parrilla',
	'Comida casera',
	'Paellas por encargo',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo y la parrilla',
		text: 'La ficha lo clasifica como restaurante especializado en pollo y parrilla. Es la base de la casa, junto a una carta de comida casera que las reseñas describen como «muy variada».',
	},
	{
		title: 'Comida casera a diario',
		text: '«Muy buena comida casera para llevar a diario, o por encargo los fines de semana», cuenta una de las reseñas de cinco estrellas. Es cocina de todos los días, para recoger.',
	},
	{
		title: 'Paellas por encargo',
		text: '«Encargué una paella de quince raciones para un evento y fue un éxito», dice otra reseña. La ficha no publica mínimos ni precios: se consultan por teléfono.',
	},
	{
		title: 'Buenos precios',
		text: '«Buena comida, muy variada y buenos precios», resume la tercera opinión. Google le da 4,3 sobre 5 con 78 reseñas.',
	},
];

/**
 * Lo que anuncia el escaparate del local, leído en las fotos de la ficha:
 * ensaladas, verduras, arroces, pastas, pescados, carnes, sándwiches, menús
 * para llevar, pollos asados, bocadillos calientes, tortillas, croquetas y
 * empanadas argentinas, con paella y pollo asado en el rótulo de la luna.
 * La ficha no publica precios, así que aquí no hay importes.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'el cartel de la luna y la ficha lo ponen primero' },
			{ name: 'Paella', note: 'por encargo; una reseña habla de quince raciones' },
			{ name: 'Parrilla', note: 'categoría de la ficha junto al pollo' },
		],
	},
	{
		title: 'Casero',
		items: [
			{ name: 'Arroces', note: 'también arroz negro con langostinos, como el de la galería' },
			{ name: 'Pastas y fideos', note: 'fideos con langostinos en la galería' },
			{ name: 'Carnes y guisos', note: 'ternera con patata y zanahoria, cocido con garbanzos' },
			{ name: 'Pescados', note: 'en la lista del escaparate' },
			{ name: 'Verduras, ensaladas y tortillas', note: 'ensaladilla con atún y aceitunas' },
		],
	},
	{
		title: 'Para llevar',
		items: [
			{ name: 'Menús para llevar', note: 'el formato de todos los días' },
			{ name: 'Bocadillos calientes y sándwiches', note: 'en la lista del escaparate' },
			{ name: 'Croquetas', note: 'la torre de croquetas de la galería' },
			{ name: 'Empanadas argentinas', note: 'en la lista del escaparate' },
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Buena comida, muy variada y buenos precios',
		valor: 5,
	},
	{
		texto: 'Muy buena comida casera para llevar a diario, o por encargo los fines de semana.',
		valor: 5,
	},
	{
		texto: 'Encargué una paella de quince raciones para un evento y fue un éxito.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador El Campero?',
		a: 'En la Travesía Virgen de la Roca, 59, Ciudad Lineal, 28027 Madrid. El mapa de esta página abre las coordenadas exactas (40.4356861, -3.6580625) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 9:00 a 16:00 de lunes a viernes y también el domingo. El sábado cierra. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'El escaparate anuncia pollo asado, paella, parrilla, arroces, pastas, pescados, carnes, verduras, ensaladas, tortillas, croquetas, empanadas argentinas, bocadillos calientes, sándwiches y menús para llevar. La ficha no publica precios ni la carta completa.',
	},
	{
		q: '¿Se puede encargar una paella?',
		a: 'Sí, según las reseñas: una clienta encargó una paella de quince raciones para un evento. La ficha no publica mínimos, plazos ni precios, así que el encargo se concreta por teléfono, en el 914 03 94 41.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha solo lo clasifica como restaurante de comida para llevar; no publica reparto a domicilio ni pedidos online. El canal que aparece es el teléfono, así que la recogida y cualquier reparto se confirman llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No consta una carta con precios. Una reseña habla de «buenos precios» y otra de comida casera para llevar a diario; los importes se consultan por teléfono o en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,3 sobre 5 con 78 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones que muestra son de cinco estrellas y elogian la variedad, los precios, la comida casera y la paella por encargo.',
	},
];
