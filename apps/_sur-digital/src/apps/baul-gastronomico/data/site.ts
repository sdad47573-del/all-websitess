/**
 * Datos de Baúl Gastronómico — Avenida de Europa, 38, local 10,
 * 30007 Murcia.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Baúl Gastronómico», 38.000963,-1.1336485,
 *   feature 0xd638227165f2c11:0xfd55a6d6aadd7043.
 * - Nombre, dirección, teléfono, descripción, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta ni precios.
 *
 * Google registra la dirección como «Av. Europa, 38, Loc 10»; aquí se usa la
 * forma desarrollada «Avenida de Europa, 38, local 10».
 */

export const BUSINESS = {
	name: 'Baúl Gastronómico',
	fullName: 'Baúl Gastronómico',
	shortName: 'Baúl Gastronómico',
	mark: 'BG',
	street: 'Avenida de Europa, 38, local 10',
	district: 'Murcia',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30007',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/baul-gastronomico',
	geo: { lat: 38.000963, lng: -1.1336485 },
	featureId: '0xd638227165f2c11:0xfd55a6d6aadd7043',
	placeId: 'ChIJESxfFieCYw0RQ3DdqtamVf0',
	plusCode: '8CCW2V28+9G',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '968 90 61 93',
	phoneHref: 'tel:+34968906193',
	tagline: 'Comida casera, paellas por encargo y reparto en Murcia',
	description:
		'Baúl Gastronómico, en Avenida de Europa, 38, local 10 (30007 Murcia). Comida casera para llevar y a domicilio: platos elaborados, paellas por encargo y menús diarios con opciones vegetarianas. De lunes a sábado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ba%C3%BAl+Gastron%C3%B3mico/data=!4m7!3m6!1s0xd638227165f2c11:0xfd55a6d6aadd7043!8m2!3d38.000963!4d-1.1336485!16s%2Fg%2F11cn9t5k7l!19sChIJESxfFieCYw0RQ3DdqtamVf0?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.000963%2C-1.1336485',
	embed: 'https://maps.google.com/maps?q=38.000963,-1.1336485&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.000963,-1.1336485',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 123,
	label: '4,6',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–17:00' },
	{ dia: 'Martes', horas: '8:00–17:00' },
	{ dia: 'Miércoles', horas: '8:00–17:00' },
	{ dia: 'Jueves', horas: '8:00–17:00' },
	{ dia: 'Viernes', horas: '8:00–17:00' },
	{ dia: 'Sábado', horas: '11:30–16:30' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'A domicilio',
	'Terraza',
	'Paellas por encargo',
	'Menús diarios',
	'Opciones vegetarianas',
	'Opciones saludables',
];

export const HIGHLIGHTS = [
	{
		title: 'Paellas por encargo',
		text: 'La ficha lo dice en su descripción: «ricas paellas que poder hacer por encargo». Se preparan para llevar o para enviar a domicilio, y conviene encargarlas con antelación.',
	},
	{
		title: 'Menús diarios variados',
		text: 'Una reseña lo destaca: «gran variedad en los menús diarios, opciones vegetarianas». La ficha añade que hay también opciones saludables entre los platos.',
	},
	{
		title: 'Comida casera y raciones',
		text: 'Las opiniones insisten en la cocina de casa: «buena comida, buen precio y raciones generosas» y «buen servicio, buen trato, buena comida casera».',
	},
	{
		title: '4,6 sobre 5',
		text: 'Con 123 reseñas, la ficha de Google le da 4,6 sobre 5 (octubre de 2026). Es una de las medias más altas de la zona y se mantiene con muchas opiniones.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Buena comida, buen precio y raciones generosas.',
		valor: 5,
	},
	{
		texto: 'Buen servicio, buen trato, buena comida casera.',
		valor: 5,
	},
	{
		texto: 'Y gran variedad en los menús diarios, opciones vegetarianas.',
		valor: 5,
	},
];

/**
 * Lo que anuncia la ficha y citan las reseñas. No hay carta ni precios
 * publicados.
 */
export const MENU = [
	{
		title: 'Por encargo',
		items: [
			{ name: 'Paellas por encargo', note: 'para llevar o a domicilio' },
			{ name: 'Platos elaborados', note: 'de la cocina casera de la casa' },
		],
	},
	{
		title: 'Cada día',
		items: [
			{ name: 'Menú diario', note: 'con varios platos para elegir' },
			{ name: 'Opciones vegetarianas', note: 'dentro de los menús diarios' },
			{ name: 'Opciones saludables', note: 'la ficha las anuncia expresamente' },
		],
	},
	{
		title: 'En las fotos del perfil',
		items: [
			{ name: 'Paella de marisco', note: 'con mejillones, gambas y calamar' },
			{ name: 'Lomo de cerdo asado', note: 'en salsa de azafrán' },
			{ name: 'Salmón en hojaldre', note: 'cortado en porciones' },
			{ name: 'Tallarines negros con marisco', note: 'a la tinta de calamar' },
			{ name: 'Pimientos rellenos gratinados', note: 'servidos con ensalada' },
			{ name: 'Postre de yogur con frutos rojos', note: 'en vaso individual' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Baúl Gastronómico?',
		a: 'En la Avenida de Europa, 38, local 10, 30007 Murcia. Google registra la dirección como «Av. Europa, 38, Loc 10». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a viernes, de 8:00 a 17:00, y el sábado de 11:30 a 16:30. El domingo está cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar o a domicilio: platos elaborados, menús diarios y paellas por encargo, con opciones vegetarianas y saludables. Las reseñas de Google mencionan la variedad de los menús y el tamaño de las raciones. La ficha no publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 968 90 61 93. La ficha no enlaza una web propia ni un sistema de pedidos online, así que lo previsible es llamar y acordar la recogida o el envío.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí, la descripción de la ficha habla de platos y paellas que se pueden «llevar a domicilio». Lo que no publica es una plataforma concreta ni el horario de reparto, así que conviene preguntar por teléfono antes de contar con ello.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar, pero las fotos del perfil enseñan una pequeña sala con mesas puestas y una terraza con manteles verdes delante del local. La ficha no anuncia reservas ni servicio de mesa de forma expresa, así que si quieres sentarte conviene llamar antes al 968 90 61 93.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. Las reseñas hablan de «buen precio» y de raciones generosas, pero la única forma de saber el precio del menú o de la paella es preguntar por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha indica que el local tiene acceso para sillas de ruedas en la entrada. No publica datos de aparcamiento adaptado ni de aseos, así que conviene llamar antes si necesitas algo más.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 123 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian la comida casera, el precio, las raciones y la variedad de los menús diarios.',
	},
];
