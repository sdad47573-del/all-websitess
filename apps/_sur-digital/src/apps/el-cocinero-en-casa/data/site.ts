/**
 * Datos de El Cocinero en Casa — comida casera para llevar —
 * Calle de Antonio Arias, 13, Retiro (28009 Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'El Cocinero en Casa',
	fullName: 'El Cocinero en Casa · Comida para llevar',
	shortName: 'El Cocinero en Casa',
	mark: 'C',
	street: 'Calle de Antonio Arias, 13',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28009',
	locality: 'Retiro',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-cocinero-en-casa',
	geo: { lat: 40.4168823, lng: -3.6714305 },
	featureId: '0xd4228a88dcb6511:0x8fdbc8a17885baaa',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '915 73 28 16',
	phoneHref: 'tel:+34915732816',
	tagline: 'Comida casera para llevar en Retiro',
	description:
		'El Cocinero en Casa, comida para llevar en Calle de Antonio Arias, 13 (Retiro, 28009 Madrid). Según su ficha de Google Maps, restaurante de comida para llevar con paellas los fines de semana.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Cocinero+en+Casa/@40.4168823,-3.6714305,17z/data=!3m1!4b1!4m6!3m5!1s0xd4228a88dcb6511:0x8fdbc8a17885baaa!8m2!3d40.4168823!4d-3.6714305!16s%2Fg%2F1vqtj2kj?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJEWXLjagoQg0RqrqFeKHI248&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4168823%2C-3.6714305',
	embed: 'https://maps.google.com/maps?q=40.4168823,-3.6714305&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4168823,-3.6714305',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.9,
	count: 47,
	label: '3,9',
};

/** Horario de la ficha: lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado' },
	{ dia: 'Martes', horas: '9:00–16:30' },
	{ dia: 'Miércoles', horas: '9:00–16:30' },
	{ dia: 'Jueves', horas: '9:00–16:30' },
	{ dia: 'Viernes', horas: '9:00–16:30' },
	{ dia: 'Sábado', horas: '9:00–16:30' },
	{ dia: 'Domingo', horas: '9:00–16:30' },
];

export const HORARIO_AVISO =
	'El horario es el de la ficha de Google Maps. Confirma antes de desplazarte: puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Comida para llevar', 'Paellas los fines de semana', 'Encargos por teléfono'];

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: 'La ficha lo clasifica como restaurante de comida para llevar.',
	},
	{
		title: 'Paellas y encargos',
		text: 'La ficha indica que los sábados y domingos hacen paellas y que se aceptan encargos por teléfono.',
	},
];

/** Reseñas de la ficha, tal cual aparecen. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está El Cocinero en Casa?',
		a: 'En la Calle de Antonio Arias, 13, en Retiro, 28009 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Martes a domingo de 9:00 a 16:30. Los lunes está cerrado.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha de Google Maps lo clasifica como restaurante de comida para llevar y dice que los sábados y domingos hacen paellas. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para cifras concretas conviene llamar al 915 73 28 16.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'Sí. La ficha indica que se aceptan encargos por teléfono, en el 915 73 28 16.',
	},
	{
		q: '¿Hay reparto a domicilio o pedidos online?',
		a: 'La ficha no publica reparto a domicilio, página web ni pedidos online. El único canal que aparece es el teléfono, así que cualquier recogida o reparto se confirma llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 3,9 sobre 5 con 47 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
