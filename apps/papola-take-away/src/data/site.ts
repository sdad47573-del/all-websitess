/**
 * Datos de Papola // Take Away — Calle de Andrés Torrejón, 17,
 * 28014 Madrid (Retiro).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Papola // Take Away»,
 *   40.4078707,-3.6825089, feature 0xd4227000ac4fe89:0xd2a0df23d456d136.
 * - Nombre, dirección, teléfono, descripción, categoría, valoración, horario
 *   y reseñas: ficha pública de Google consultada el 31 de octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta ni precios.
 *
 * Google registra la dirección como «C. Andrés Torrejón, 17»; aquí se usa la
 * forma desarrollada «Calle de Andrés Torrejón, 17».
 */

export const BUSINESS = {
	name: 'Papola',
	fullName: 'Papola // Take Away',
	shortName: 'Papola',
	mark: 'P',
	street: 'Calle de Andrés Torrejón, 17',
	district: 'Retiro',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28014',
	country: 'ES',
	siteUrl: 'https://papola-take-away.vercel.app',
	geo: { lat: 40.4078707, lng: -3.6825089 },
	featureId: '0xd4227000ac4fe89:0xd2a0df23d456d136',
	placeId: 'ChIJif7ECgAnQg0RNtFW1CPfoNI',
	plusCode: '8CGRC858+4X',
	googleCategory: 'Restaurante de comida rápida',
	phone: '642 41 43 13',
	phoneHref: 'tel:+34642414313',
	tagline: 'Hamburguesas y perros para llevar en Retiro',
	description:
		'Papola // Take Away, en Calle de Andrés Torrejón, 17 (28014 Madrid, Retiro). Comida rápida para recoger: hamburguesas y perros. Abre todos los días desde las 12:00, con cierre de madrugada los viernes y sábados.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Papola+%2F%2F+Take+Away/@40.4078707,-3.6825089,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227000ac4fe89:0xd2a0df23d456d136!8m2!3d40.4078707!4d-3.6825089!16s%2Fg%2F11z36b7v4m?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4078707%2C-3.6825089',
	embed: 'https://maps.google.com/maps?q=40.4078707,-3.6825089&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4078707,-3.6825089',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 5,
	count: 5,
	label: '5,0',
};

/** Horario que publica la ficha, con los cierres de madrugada del fin de semana. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–24:00' },
	{ dia: 'Martes', horas: '12:00–24:00' },
	{ dia: 'Miércoles', horas: '12:00–24:00' },
	{ dia: 'Jueves', horas: '12:00–24:00' },
	{ dia: 'Viernes', horas: '12:00–1:30' },
	{ dia: 'Sábado', horas: '12:00–1:30' },
	{ dia: 'Domingo', horas: '12:00–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'Los cierres de las 1:30 corresponden a la madrugada del día siguiente. La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente; confírmalo por teléfono antes de ir.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para recoger',
	'Comida rápida',
	'Hamburguesas',
	'Perros calientes',
	'Abierto de madrugada',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Hamburguesas y perros',
		text: 'Una reseña lo resume así: «hamburguesas y perros excelentes al mejor estilo, atención muy buena». Son los dos platos que la ficha y sus opiniones ponen sobre la mesa.',
	},
	{
		title: 'Comida para recoger',
		text: 'La descripción de la ficha es breve y clara: «comida para recoger». No hay servicio de mesa: se pide y se recoge en el local.',
	},
	{
		title: 'Hasta la madrugada',
		text: 'El horario alarga el cierre los viernes y los sábados hasta la 1:30 de la madrugada, y el resto de días hasta las 24:00 o las 23:00. Una opción para cenar tarde en Retiro.',
	},
	{
		title: '5,0 sobre 5',
		text: 'Con 5 reseñas, la ficha de Google le da 5,0 sobre 5 (octubre de 2026). Son pocas opiniones, pero todas de cinco estrellas y todas hablan de volver.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Hamburguesas y perros excelente al mejor estilo, atención muy buena.',
		valor: 5,
	},
	{
		texto: 'Me encantó Papola Fast Food.',
		valor: 5,
	},
	{
		texto: 'Sin dudas volveré a pedir.',
		valor: 5,
	},
];

/**
 * Lo que anuncia la ficha. No hay carta ni precios publicados: solo las
 * hamburguesas y los perros que citan las reseñas.
 */
export const MENU = [
	{
		title: 'De la plancha',
		items: [
			{ name: 'Hamburguesas', note: 'la especialidad que destacan las reseñas' },
			{ name: 'Perros calientes', note: 'al estilo de la casa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Papola?',
		a: 'En la Calle de Andrés Torrejón, 17, 28014 Madrid, en el distrito de Retiro. Google registra la dirección como «C. Andrés Torrejón, 17». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica un horario distinto cada día: de lunes a jueves de 12:00 a 24:00, viernes y sábado de 12:00 a 1:30 de la madrugada, y domingo de 12:00 a 23:00. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida rápida para recoger. Las reseñas de Google mencionan las hamburguesas y los perros calientes, que son los platos que la ficha destaca. No publica una carta con todos los productos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 642 41 43 13. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha lo describe como «comida para recoger» y no anuncia servicio de mesa, terraza ni reservas. Lo previsible es pedir y recoger.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de saber cuánto cuestan las hamburguesas y los perros es preguntar por teléfono al hacer el pedido.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas acceso para silla de ruedas o ayuda para recoger un pedido.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha no publica reparto a domicilio ni plataformas de entrega asociadas. Lo que anuncia es la recogida en el local y el teléfono de contacto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 5,0 sobre 5 con 5 reseñas en el momento de consultarla (31 de octubre de 2026). Son pocas opiniones, pero todas de cinco estrellas; a medida que se sumen más puede cambiar la media.',
	},
];
