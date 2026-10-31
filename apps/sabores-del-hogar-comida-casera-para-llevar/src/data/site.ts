/**
 * Datos de Sabores del Hogar | Comida Casera para llevar by Dani —
 * Calle de Gaztambide, 32, 28015 Madrid (Chamberí).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Sabores del Hogar | Comida Casera para
 *   llevar by Dani», 40.4348287,-3.7154037, feature
 *   0xd42290d269393a9:0xc1776e5031cb6532.
 * - Nombre, dirección, categoría, teléfono, descripción, valoración, horario y
 *   reseñas: ficha pública de Google consultada el 31 de octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta, precios ni datos de
 *   accesibilidad. Los platos que se citan en esta página son los que
 *   mencionan las reseñas del propio perfil.
 *
 * Google registra la dirección como «C. de Gaztambide, 32»; aquí se usa la
 * forma desarrollada «Calle de Gaztambide, 32».
 */

export const BUSINESS = {
	name: 'Sabores del Hogar',
	fullName: 'Sabores del Hogar | Comida Casera para llevar by Dani',
	shortName: 'Sabores del Hogar',
	mark: 'SH',
	street: 'Calle de Gaztambide, 32',
	district: 'Chamberí',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28015',
	country: 'ES',
	siteUrl: 'https://sabores-del-hogar-comida-casera-para-llevar.vercel.app',
	geo: { lat: 40.4348287, lng: -3.7154037 },
	featureId: '0xd42290d269393a9:0xc1776e5031cb6532',
	placeId: 'ChIJqZOTJg0pQg0RMmXLMVBud8E',
	plusCode: '8CGRC7MM+WR',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '642 91 25 57',
	phoneHref: 'tel:+34642912557',
	tagline: 'Comida casera para llevar en Chamberí',
	description:
		'Sabores del Hogar, en Calle de Gaztambide, 32 (28015 Madrid, Chamberí). Comida casera para llevar hecha por Dani, con ingredientes de calidad: guisos, albóndigas en salsa, croquetas y patatas caseras. De domingo a viernes, de 12:00 a 17:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sabores+del+Hogar+%7C+Comida+Casera+para+llevar+by+Dani/@40.4348287,-3.7154037,17z/data=!3m1!4b1!4m6!3m5!1s0xd42290d269393a9:0xc1776e5031cb6532!8m2!3d40.4348287!4d-3.7154037!16s%2Fg%2F11lj2xs74c?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4348287%2C-3.7154037',
	embed: 'https://maps.google.com/maps?q=40.4348287,-3.7154037&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4348287,-3.7154037',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.2,
	count: 43,
	label: '4,2',
};

/** Horario que publica la ficha: domingo a viernes, con el sábado cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–17:00' },
	{ dia: 'Martes', horas: '12:00–17:00' },
	{ dia: 'Miércoles', horas: '12:00–17:00' },
	{ dia: 'Jueves', horas: '12:00–17:00' },
	{ dia: 'Viernes', horas: '12:00–17:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: '12:00–17:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Comida casera',
	'Guisos de cuchara',
	'Albóndigas en salsa',
	'Croquetas caseras',
	'Patatas caseras',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Albóndigas en salsa',
		text: 'Una de las reseñas de la ficha lo dice sin rodeos: «Volveremos para catar las albóndigas en salsa». Es el plato que más se repite en las opiniones del perfil.',
	},
	{
		title: 'Croquetas caseras',
		text: 'Las opiniones de Google destacan «las croquetas muy conseguidas». Se preparan en casa, como el resto de la comida que sale del local.',
	},
	{
		title: 'Patatas caseras',
		text: '«Patatas caseras buenísimas», resume otra reseña. Acompañan a los guisos y a los platos de cuchara que dan nombre a la casa.',
	},
	{
		title: 'Raciones generosas',
		text: 'La ficha puntúa 4,2 sobre 5 con 43 reseñas, y varias opiniones coinciden en dos cosas: la ración es abundante y el precio acompaña.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Volveremos para catar las albóndigas en salsa.',
		valor: 5,
	},
	{
		texto: 'Raciones generosas a buen precio.',
		valor: 5,
	},
	{
		texto: 'Patatas caseras buenísimas y las croquetas muy conseguidas.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabores del Hogar?',
		a: 'En la Calle de Gaztambide, 32, 28015 Madrid, en el distrito de Chamberí. Google registra la dirección como «C. de Gaztambide, 32». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de domingo a viernes, de 12:00 a 17:00, con el sábado cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar. La ficha se presenta como cocina de casa hecha por Dani, con ingredientes de calidad, y las reseñas de Google mencionan las albóndigas en salsa, las croquetas caseras y las patatas caseras. La ficha no publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 642 91 25 57. No consta un sistema de pedidos online propio ni una carta publicada en la web.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el nombre de la ficha lo deja claro: «Comida Casera para llevar». La ficha no publica servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica precios ni una carta. Las reseñas hablan de «raciones generosas a buen precio», pero la única forma de saber el precio del día es preguntar por teléfono al hacer el pedido.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha no publica reparto a domicilio ni plataformas de entrega asociadas. Lo que consta es la recogida en el local y el teléfono de contacto.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas acceso para silla de ruedas o ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,2 sobre 5 con 43 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian las albóndigas en salsa, las croquetas, las patatas caseras y la relación entre ración y precio.',
	},
];

/**
 * Platos que se ven en las fotos del mostrador y que citan las reseñas. La ficha
 * no publica carta ni precios, así que no se inventa ninguno: cada grupo es lo
 * que aparece en las bandejas del propio perfil de Google.
 */
export const MENU = [
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Lentejas', note: 'guiso de cuchara; según el día' },
			{ name: 'Garbanzos con tomate', note: 'guiso de cuchara; según el día' },
			{ name: 'Judías verdes con jamón', note: 'verdura de temporada' },
			{ name: 'Berenjena asada con pisto', note: 'verdura asada' },
			{ name: 'Pasta con verduras', note: 'ensalada de pasta' },
			{ name: 'Ensaladilla rusa', note: 'para picar' },
		],
	},
	{
		title: 'Carnes y guisos',
		items: [
			{ name: 'Albóndigas en salsa', note: 'el plato que más repiten las reseñas' },
			{ name: 'Pollo asado', note: 'en la bandeja del mostrador' },
			{ name: 'Guiso de ternera', note: 'carne guisada con su salsa' },
			{ name: 'Lomo asado en salsa', note: 'loncheado y servido con su jugo' },
		],
	},
	{
		title: 'Para completar',
		items: [
			{ name: 'Croquetas caseras', note: 'hechas en casa' },
			{ name: 'Patatas caseras', note: 'de acompañamiento' },
			{ name: 'Arroz al horno gratinado', note: 'con queso y verduras' },
			{ name: 'Verduras asadas', note: 'berenjena, calabacín, calabaza, cebolla y tomate' },
		],
	},
];
