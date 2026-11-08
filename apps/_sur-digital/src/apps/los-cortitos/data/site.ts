/**
 * Datos de Los Cortitos — Asador de Pollos Los Cortitos · Comida para llevar —
 * C. de San Amado, 18, 28917 La Fortuna (Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'Los Cortitos',
	fullName: 'Asador de Pollos Los Cortitos · Comida para llevar',
	shortName: 'Los Cortitos',
	mark: 'C',
	street: 'C. de San Amado, 18',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28917',
	locality: 'La Fortuna',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/los-cortitos',
	geo: { lat: 40.3572975, lng: -3.7810337 },
	featureId: '0xd4189a65a35e193:0x680f0589b9904393',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '910 10 43 97',
	phoneHref: 'tel:+34910104397',
	tagline: 'Asador de pollos y comida para llevar en La Fortuna',
	description:
		'Los Cortitos, asador de pollos y comida para llevar en C. de San Amado, 18 (La Fortuna, 28917 Madrid). Pollo asado, y bajo encargo paellas, codillo, pierna de cordero o cochinillo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos+Los+Cortitos+-+Comida+Para+Llevar/@40.3572975,-3.7810337,17z/data=!3m1!4b1!4m6!3m5!1s0xd4189a65a35e193:0x680f0589b9904393!8m2!3d40.3572975!4d-3.7810337!16s%2Fg%2F11fz9ymlnx?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJk-E1WqaJQQ0Rk0OQuYkFD2g&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3572975%2C-3.7810337',
	embed: 'https://maps.google.com/maps?q=40.3572975,-3.7810337&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3572975,-3.7810337',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 113,
	label: '4,6',
};

/** Horario de la ficha: lunes a miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado' },
	{ dia: 'Martes', horas: 'Cerrado' },
	{ dia: 'Miércoles', horas: 'Cerrado' },
	{ dia: 'Jueves', horas: '10:30–16:00' },
	{ dia: 'Viernes', horas: '10:30–16:00' },
	{ dia: 'Sábado', horas: '10:30–16:00' },
	{ dia: 'Domingo', horas: '10:30–16:00' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Pollo asado', 'Comida para llevar', 'Paellas y asados bajo encargo', 'Comida preparada'];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'Especialidad de la casa: asador de pollos para llevar, según su ficha de Google Maps.',
	},
	{
		title: 'Encargos especiales',
		text: 'La ficha indica que se pueden reservar paellas, codillo, pierna de cordero o cochinillo.',
	},
	{
		title: 'Comida para llevar',
		text: 'La ficha lo clasifica como establecimiento de comida preparada y restaurante especializado en pollo.',
	},
];

/** Reseñas de la ficha, tal cual aparecen. */
export const RESENAS: { texto: string; valor: number }[] = [
	{ texto: 'Pollo exquisito con sus patatas y la sepia fantástica..volveré a x más,', valor: 5 },
	{ texto: 'Trato excelente,buena calidad y buenos precios.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Los Cortitos?',
		a: 'En la calle de San Amado, 18, en La Fortuna, 28917 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Jueves, viernes, sábado y domingo de 10:30 a 16:00. De lunes a miércoles está cerrado. El domingo 1 de noviembre la ficha avisa de que el horario podría cambiar por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado para llevar. La ficha indica que también se pueden reservar paellas, codillo, pierna de cordero o cochinillo. La ficha no publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para cifras concretas conviene llamar al 910 10 43 97.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'Sí, según la ficha se pueden reservar paellas, codillo, pierna de cordero o cochinillo. Se confirma por teléfono, en el 910 10 43 97.',
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
		a: 'Google le da 4,6 sobre 5 con 113 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
