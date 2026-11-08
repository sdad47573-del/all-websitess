/**
 * Datos de La abuela Take Away — comida casera para llevar —
 * C. del Santo Ángel, 2 (Ciudad Lineal, 28043 Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'La abuela Take Away',
	fullName: 'La abuela Take Away · Comida casera para llevar',
	shortName: 'La abuela',
	mark: 'A',
	street: 'C. del Santo Ángel, 2',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28043',
	locality: 'Ciudad Lineal',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-abuela-take-away',
	geo: { lat: 40.4583845, lng: -3.6581091 },
	featureId: '0xd422ed43afc29f1:0x4e8dd09ded1bbb4c',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '916 56 31 42',
	phoneHref: 'tel:+34916563142',
	tagline: 'Comida casera para llevar en Ciudad Lineal',
	description:
		'La abuela Take Away, comida casera para llevar en C. del Santo Ángel, 2 (Ciudad Lineal, 28043 Madrid). Según su ficha de Google Maps, restaurante de comida para llevar con pollo asado todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+abuela+Take+Away/@40.4583845,-3.6581091,17z/data=!3m1!4b1!4m6!3m5!1s0xd422ed43afc29f1:0x4e8dd09ded1bbb4c!8m2!3d40.4583845!4d-3.6581091!16s%2Fg%2F1q5bmn7qt?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJ8Sn8OtQuQg0RTLsb7Z3QjU4&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4583845%2C-3.6581091',
	embed: 'https://maps.google.com/maps?q=40.4583845,-3.6581091&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4583845,-3.6581091',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 16,
	label: '4,1',
};

/** Horario de la ficha: todos los días de 9:00 a 16:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría ser diferente. Confirma antes de desplazarte.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Comida casera para llevar', 'Comer aquí', 'Pan recién horneado', 'Pollo asado'];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera',
		text: 'La ficha describe comida casera para llevar o para comer en el local.',
	},
	{
		title: 'Pan y pollo asado',
		text: 'Pan recién horneado por la mañana y pollo asado todos los días, según la descripción de la ficha.',
	},
];

/** La ficha no publica reseñas literales en esta web: solo la valoración y el número. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está La abuela Take Away?',
		a: 'En la C. del Santo Ángel, 2, en Ciudad Lineal, 28043 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Todos los días de 9:00 a 16:00 según la ficha. La ficha avisa de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría cambiar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha de Google Maps lo clasifica como restaurante de comida para llevar y dice que hay comida casera para llevar o para comer en el local, pan recién horneado y pollo asado a diario. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. Para cifras concretas conviene llamar al 916 56 31 42.',
	},
	{
		q: '¿Hay reparto a domicilio o pedidos online?',
		a: 'La ficha no publica reparto a domicilio, página web ni pedidos online. El único canal que aparece es el teléfono, así que cualquier recogida o encargo se confirma llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,1 sobre 5 con 16 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
