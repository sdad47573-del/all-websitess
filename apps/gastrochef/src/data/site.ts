/**
 * Datos de GASTROCHEF — comida para llevar —
 * Av. de las Naciones, 37, Loc, 28320 Pinto (Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'GASTROCHEF',
	fullName: 'GASTROCHEF · Comida para llevar',
	shortName: 'GASTROCHEF',
	mark: 'G',
	street: 'Av. de las Naciones, 37, Loc',
	city: 'Pinto',
	region: 'Comunidad de Madrid',
	postalCode: '28320',
	locality: 'Pinto',
	country: 'ES',
	siteUrl: 'https://gastrochef.vercel.app',
	geo: { lat: 40.2519004, lng: -3.6956988 },
	featureId: '0xd4221d645195555:0xdf84a7b4d6893dc2',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '919 39 76 69',
	phoneHref: 'tel:+34919397669',
	tagline: 'Comida para llevar en Pinto',
	description:
		'GASTROCHEF, comida para llevar en Av. de las Naciones, 37, Loc (Pinto, 28320 Madrid). Según su ficha de Google Maps, restaurante de comida para llevar.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/GASTROCHEF+comida+para+llevar/@40.2519004,-3.6956988,17z/data=!4m6!3m5!1s0xd4221d645195555:0xdf84a7b4d6893dc2!8m2!3d40.2519004!4d-3.6956988!16s%2Fg%2F11gf62rhf3?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJVVUZRdYhQg0Rwj2J1rSnhN8&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.2519004%2C-3.6956988',
	embed: 'https://maps.google.com/maps?q=40.2519004,-3.6956988&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.2519004,-3.6956988',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.2,
	count: 114,
	label: '4,2',
};

/** Horario de la ficha: lunes a miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado' },
	{ dia: 'Martes', horas: 'Cerrado' },
	{ dia: 'Miércoles', horas: 'Cerrado' },
	{ dia: 'Jueves', horas: '9:30–16:30' },
	{ dia: 'Viernes', horas: '9:30–16:30' },
	{ dia: 'Sábado', horas: '9:30–16:30' },
	{ dia: 'Domingo', horas: '9:30–16:30' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Comida para llevar', 'Comida preparada'];

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: 'La ficha lo clasifica como restaurante de comida para llevar.',
	},
	{
		title: 'Horario',
		text: 'Jueves a domingo de 9:30 a 16:30. De lunes a miércoles cerrado.',
	},
];

/** Reseñas de la ficha, tal cual aparecen. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está GASTROCHEF?',
		a: 'En la Av. de las Naciones, 37, Loc, en Pinto, 28320 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Jueves a domingo de 9:30 a 16:30. De lunes a miércoles está cerrado. El domingo 1 de noviembre la ficha avisa de que el horario podría cambiar por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha de Google Maps lo clasifica como restaurante de comida para llevar. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para cifras concretas conviene llamar al 919 39 76 69.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'La ficha no indica encargos. Para consultarlo, llama al 919 39 76 69.',
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
		a: 'Google le da 4,2 sobre 5 con 114 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
