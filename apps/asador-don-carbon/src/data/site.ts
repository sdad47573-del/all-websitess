/**
 * Datos de Asador Don Carbón — C. Cirilo Salinas, 7, Puerto de la Torre
 * (29190 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «ASADOR DON CARBÓN»,
 *   36.7319859,-4.4631077, feature 0xd72f738c37f14a9:0xe536fd53797e32fb.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en noviembre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. Los platos que se citan son los que nombran la
 * descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Asador Don Carbón',
	fullName: 'ASADOR DON CARBÓN',
	shortName: 'Don Carbón',
	mark: 'DC',
	street: 'C. Cirilo Salinas, 7',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	siteUrl: 'https://asador-don-carbon.vercel.app',
	geo: { lat: 36.7319859, lng: -4.4631077 },
	featureId: '0xd72f738c37f14a9:0xe536fd53797e32fb',
	placeId: 'ChIJqRR_wzj3cg0R-zJ-eVP9NuU',
	plusCode: '8C8QPGJP+QQ',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '625 89 33 57',
	phoneHref: 'tel:+34625893357',
	tagline: 'Pollo asado al carbón vegetal en Puerto de la Torre',
	description:
		'Asador Don Carbón, en C. Cirilo Salinas, 7 (Puerto de la Torre, 29190 Málaga). Pollo asado al carbón vegetal, carnes a la brasa y patatas, de jueves a lunes de 11:00 a 15:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ASADOR+DON+CARB%C3%93N/@36.7319859,-4.4631077,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f738c37f14a9:0xe536fd53797e32fb!8m2!3d36.7319859!4d-4.4631077!16s%2Fg%2F11t5y5ljfm?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7319859%2C-4.4631077',
	embed: 'https://maps.google.com/maps?q=36.7319859,-4.4631077&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7319859,-4.4631077',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.9,
	count: 431,
	label: '4,9',
};

/** Horario que publica la ficha: mediodía de jueves a lunes. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '11:00–15:30' },
	{ dia: 'Viernes', horas: '11:00–15:30' },
	{ dia: 'Sábado', horas: '11:00–15:30' },
	{ dia: 'Domingo', horas: '11:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollo asado al carbón vegetal',
	'Carnes a la brasa',
	'Costillas',
	'Patatas',
	'Salsas caseras',
	'Para llevar',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Carbón vegetal',
		text: 'La ficha lo anuncia con todas las letras: «Descubre el Pollo Asado al carbón vegetal». Esa es la seña de identidad del asador frente a otros pollos de la zona.',
	},
	{
		title: 'La receta de la casa',
		text: '«Mantener la receta más sabrosa que tanto deleita a nuestros clientes» es la misión que publica el negocio. La misma receta especial con la que sazonan pollos y carnes.',
	},
	{
		title: 'Pollo, patatas y pimientos',
		text: 'Una de las reseñas lo resume: «Pollos deliciosos, patatas muy ricas y pimientos exquisitos». Otra añade las costillas, las salsas y el pollo con patatas fritas.',
	},
	{
		title: 'Salsa incluida',
		text: 'Las reseñas insisten en la salsa: «Pollo riquísimo de muy buena calidad, y con salsa incluida, también muy rica». La ficha no publica la carta ni los precios.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado al carbón vegetal',
				note: 'el plato que destaca la descripción del negocio, asado con carbón vegetal',
			},
			{
				name: 'Costillas',
				note: 'una de las reseñas destaca que «las costillas son deliciosas»',
			},
			{
				name: 'Carnes a la brasa',
				note: 'la casa dice seleccionar «pollos y carnes para asar y sazonar con una receta especial»',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{
				name: 'Patatas',
				note: '«patatas muy ricas» y «pollo con patatas fritas», según las reseñas de la ficha',
			},
			{
				name: 'Pimientos',
				note: '«pimientos exquisitos», en palabras de una de las reseñas',
			},
			{
				name: 'Salsas de la casa',
				note: 'las reseñas nombran las salsas y la salsa incluida con el pollo',
			},
			{
				name: 'Para llevar',
				note: 'Google lo clasifica como restaurante de comida para llevar',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Pollos deliciosos, patatas muy ricas y pimientos exquisitos!',
		valor: 5,
	},
	{
		texto: 'Las costillas son deliciosas, las salsas y el pollo con patatas fritas.',
		valor: 5,
	},
	{
		texto: 'Pollo riquísimo de muy buena calidad, y con salsa incluida, también muy rica.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Don Carbón?',
		a: 'En la calle Cirilo Salinas, 7, en Puerto de la Torre (29190 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de jueves a lunes, de 11:00 a 15:30, y el martes y el miércoles como días de cierre. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La descripción del negocio destaca el pollo asado al carbón vegetal y las carnes asadas con su receta especial. Las reseñas nombran también las costillas, las patatas, los pimientos y las salsas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y la descripción habla de degustarlo «en la comodidad de tu hogar». La ficha no detalla servicio de mesa ni terraza; conviene preguntar por teléfono.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 625 89 33 57. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas elogian la calidad del pollo y las salsas, pero no citan precios. La disponibilidad y el precio se consultan por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas y el aparcamiento adaptado, pero indica que no hay aseo adaptado, asientos adaptados ni bucle magnético. No publica más datos sobre el interior.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 431 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian el pollo, las costillas, las patatas, los pimientos y las salsas.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
