/**
 * Datos de Salón San Juan (comidas para llevar) — C. la Paz, 8,
 * 30740 San Pedro del Pinatar (Murcia).
 *
 * Fuente: ficha pública de Google Maps consultada el 31 de octubre de 2026
 * (feature 0xd630fb37d4bd65b:0x7d26d26b388bd61). La ficha no publica web
 * propia, carta ni precios, y la respuesta consultada no incluye textos de
 * reseñas, así que no se citan opiniones concretas.
 */

export const BUSINESS = {
	name: 'Salón San Juan',
	fullName: 'Salón San Juan, comidas para llevar',
	shortName: 'Salón San Juan',
	mark: 'SJ',
	street: 'C. la Paz, 8',
	district: 'San Pedro del Pinatar',
	city: 'San Pedro del Pinatar',
	region: 'Región de Murcia',
	postalCode: '30740',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/salon-san-juan',
	geo: { lat: 37.8334836, lng: -0.7919809 },
	featureId: '0xd630fb37d4bd65b:0x7d26d26b388bd61',
	placeId: 'ChIJW9ZLfbMPYw0RYb2IsyZt0gc',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '664 06 27 13',
	phoneHref: 'tel:+34664062713',
	tagline: 'Comida para llevar en San Pedro del Pinatar',
	description:
		'Salón San Juan, en C. la Paz, 8 (30740 San Pedro del Pinatar, Murcia). Restaurante de comida para llevar con 4,5 sobre 5 en Google Maps. Abre de lunes a domingo y cierra los miércoles.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comidas+para+llevar+Sal%C3%B3n+San+Juan/data=!4m7!3m6!1s0xd630fb37d4bd65b:0x7d26d26b388bd61!8m2!3d37.8334836!4d-0.7919809!16s%2Fg%2F11cmh6sp58!19sChIJW9ZLfbMPYw0RYb2IsyZt0gc?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8334836%2C-0.7919809',
	embed: 'https://maps.google.com/maps?q=37.8334836,-0.7919809&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8334836,-0.7919809',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 596,
	label: '4,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:30–17:30' },
	{ dia: 'Martes', horas: '8:30–17:30' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '8:30–17:30' },
	{ dia: 'Viernes', horas: '8:30–17:30' },
	{ dia: 'Sábado', horas: '8:30–17:30' },
	{ dia: 'Domingo', horas: '8:30–17:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. Confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar. */
export const SERVICIOS = ['Comida para llevar', 'Restaurante', 'Horario de mañana y tarde'];

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: 'Google lo clasifica como restaurante de comida para llevar. Lo habitual es encargar y recoger en el local.',
	},
	{
		title: '4,5 sobre 5',
		text: 'Con 596 reseñas, la ficha de Google le da 4,5 sobre 5 (octubre de 2026). Es una nota alta sostenida por muchas opiniones.',
	},
	{
		title: 'Horario amplio',
		text: 'Abre de lunes a domingo, de 8:30 a 17:30, salvo los miércoles, que está cerrado.',
	},
];

/** La respuesta consultada no trae textos de reseñas; no se inventan citas. */
export const RESENAS: { texto: string; valor: number }[] = [];

/** La ficha no publica carta ni precios. */
export const MENU = [
	{
		title: 'Comida para llevar',
		items: [{ name: 'Platos para recoger', note: 'la ficha no publica una carta con precios' }],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Salón San Juan?',
		a: 'En la C. la Paz, 8, 30740 San Pedro del Pinatar (Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a domingo, de 8:30 a 17:30, y cierra los miércoles. El 1 de noviembre (Día de Todos los Santos) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 664 06 27 13. La ficha no enlaza una web propia ni un sistema de pedidos online.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de conocerlos es preguntar por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,5 sobre 5 con 596 reseñas en el momento de consultarla (31 de octubre de 2026).',
	},
];
