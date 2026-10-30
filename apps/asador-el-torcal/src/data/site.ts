/**
 * Datos de Asador el Torcal — C. Antonio Chacón, 7, Carretera de Cádiz
 * (29003 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador el Torcal»,
 *   36.6986743,-4.4481823, feature 0xd72f9d7e3e8741d:0x3286078a76c4164c.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta, precios ni
 * servicio de mesa. La web no inventa esos datos. Los platos que se citan son
 * los que nombran las reseñas y la descripción del negocio.
 */

export const BUSINESS = {
	name: 'Asador el Torcal',
	fullName: 'Asador el Torcal',
	shortName: 'El Torcal',
	mark: 'AT',
	street: 'C. Antonio Chacón, 7',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	siteUrl: 'https://asador-el-torcal.vercel.app',
	geo: { lat: 36.6986743, lng: -4.4481823 },
	featureId: '0xd72f9d7e3e8741d:0x3286078a76c4164c',
	placeId: 'ChIJHXTo49f5cg0RTBbEdooHhjI',
	plusCode: '8C8QMHX2+FP',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '677 76 60 36',
	phoneHref: 'tel:+34677766036',
	tagline: 'Comida casera para llevar en Carretera de Cádiz',
	description:
		'Asador el Torcal, en C. Antonio Chacón, 7 (Carretera de Cádiz, Málaga). Comida casera para llevar, de lunes a viernes, de 12:00 a 15:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+el+Torcal/@36.6986743,-4.4481823,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9d7e3e8741d:0x3286078a76c4164c!8m2!3d36.6986743!4d-4.4481823!16s%2Fg%2F11c6dg4xq4?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6986743%2C-4.4481823',
	embed: 'https://maps.google.com/maps?q=36.6986743,-4.4481823&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6986743,-4.4481823',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 96,
	label: '4,6',
};

/** Horario que publica la ficha: mediodía de lunes a viernes. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–15:30' },
	{ dia: 'Martes', horas: '12:00–15:30' },
	{ dia: 'Miércoles', horas: '12:00–15:30' },
	{ dia: 'Jueves', horas: '12:00–15:30' },
	{ dia: 'Viernes', horas: '12:00–15:30' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Cocina de mediodía',
	'Entre semana',
	'Acceso para sillas de ruedas',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera',
		text: 'La descripción del negocio en Google es breve y clara: «Comida casera para llevar». Es la seña de identidad que publica la propia casa.',
	},
	{
		title: 'La pizarra de la puerta',
		text: 'Croquetas, pisto, filetitos rusos, albóndigas y ensaladas. La pizarra del local, fotografiada en su ficha de Google, marca los precios: desde 3,50 € la ración de croquetas.',
	},
	{
		title: 'Precio razonable',
		text: 'Dos de las reseñas destacadas coinciden en los precios: «muy muy razonables» y «razonables». La ficha no publica importes.',
	},
	{
		title: 'A mediodía, entre semana',
		text: 'La ficha abre de lunes a viernes, de 12:00 a 15:30, y marca el sábado y el domingo como días de cierre. Es una cocina de comida.',
	},
];

/**
 * Solo las familias de producto que nombran la descripción del negocio y las
 * reseñas. No hay carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'La pizarra de la puerta',
		items: [
			{
				name: 'Croquetas',
				price: '3,50 €',
				note: 'la ración de 8 unidades; sabores de pollo, gambas al pil pil, jamón serrano y pollo al curry con manzana',
			},
			{ name: 'Pisto', price: '4,95 €', note: 'el precio que marca la pizarra del local' },
			{ name: 'Filetitos rusos', price: '5,25 €', note: 'el precio que marca la pizarra del local' },
			{ name: 'Albóndigas', price: '5,25 €', note: 'el precio que marca la pizarra del local' },
			{ name: 'Ensaladas', price: '4,95 €', note: 'el precio que marca la pizarra del local' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Comida casera para llevar',
				note: 'la categoría y la descripción que publica la ficha de Google',
			},
			{
				name: 'Pimientos del piquillo rellenos de bacalao',
				note: 'con salsa de ñoras, tal como lo describe una de las reseñas',
			},
			{
				name: 'Platos de cuchara y guisos',
				note: 'las bandejas de las fotos del local muestran albóndigas, guisos de carne, pisto y ensaladilla',
			},
			{
				name: 'Pinchos y paellas por encargo',
				note: 'aparecen en la galería del local; la ficha no publica precios ni pedido mínimo',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'La comida exquisita, precios muy muy razonables y gran variedad de productos.',
		valor: 5,
	},
	{
		texto: 'Los pimientos del piquillo rellenos de bacalao con salsa de ñoras para morir!!',
		valor: 5,
	},
	{
		texto: 'La atención y el trato inmejorable, precios razonables y la comida buenísima.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador el Torcal?',
		a: 'En la calle Antonio Chacón, 7, en Carretera de Cádiz (29003 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a viernes, de 12:00 a 15:30, y el sábado y el domingo como días de cierre. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y la descripción habla de «comida casera para llevar». La ficha no detalla servicio de mesa ni terraza, así que conviene preguntar por teléfono antes de ir a sentarse.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 677 76 60 36. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas destacadas hablan de «precios muy muy razonables» y «precios razonables». La carta del día se consulta por teléfono.',
	},
	{
		q: '¿Qué platos se conocen?',
		a: 'Los que nombran las reseñas: los pimientos del piquillo rellenos de bacalao con salsa de ñoras, además de una «gran variedad de productos» de comida casera. La ficha no publica más detalle.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 96 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la comida, el trato y los precios.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
