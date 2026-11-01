/**
 * Datos de La Ribereña — Asador de Pollos y comida para llevar —
 * C. Antonio Cumella, 10, 28030 Madrid (Moratalaz).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'La Ribereña',
	fullName: 'La Ribereña, Asador de Pollos y comida para llevar',
	shortName: 'La Ribereña',
	mark: 'R',
	street: 'C. Antonio Cumella, 10',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28030',
	country: 'ES',
	siteUrl: 'https://la-ribena-moratalaz.vercel.app',
	geo: { lat: 40.4097943, lng: -3.6357978 },
	featureId: '0xd42258eb5a6725b:0x1ab821e9fa144377',
	placeId: 'ChIJW3KmtY4lQg0Rd0MU-ukhuBo',
	plusCode: '8CGRC957+WM',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '602 41 54 72',
	phoneHref: 'tel:+34602415472',
	tagline: 'Asador de pollos y comida para llevar en Moratalaz',
	description:
		'La Ribereña, asador de pollos y comida para llevar en C. Antonio Cumella, 10 (Moratalaz, 28030 Madrid). Pollo asado, paella y platos caseros para llevar.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Ribere%C3%B1a,+Asador+de+Pollos+y+comida+para+llevar.+Antonio+cumella+10/@40.4097943,-3.6357978,17z/data=!3m1!4b1!4m6!3m5!1s0xd42258eb5a6725b:0x1ab821e9fa144377!8m2!3d40.4097943!4d-3.6357978!16s%2Fg%2F11c55vpkz_?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJW3KmtY4lQg0Rd0MU-ukhuBo&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4097943%2C-3.6357978',
	embed: 'https://maps.google.com/maps?q=40.4097943,-3.6357978&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4097943,-3.6357978',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 91,
	label: '4,6',
};

/** Horario de la ficha: lunes a miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado' },
	{ dia: 'Martes', horas: 'Cerrado' },
	{ dia: 'Miércoles', horas: 'Cerrado' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '9:00–15:30' },
	{ dia: 'Domingo', horas: '9:00–15:30' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Pollo asado', 'Comida para llevar', 'Paella', 'Croquetas y tortilla', 'Platos caseros'];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'Especialidad de la casa, según su ficha: asador de pollos con la salsa del pollo como una de las cosas más valoradas.',
	},
	{
		title: 'Paella y platos caseros',
		text: 'Las reseñas destacan la paella, «buenísima y de precios inmejorables», y las croquetas y tortilla caseras.',
	},
	{
		title: 'Patatas caseras',
		text: '«La salsa del pollo exquisita, las patatas caseras y buenísimas», dice una de las reseñas de cinco estrellas.',
	},
	{
		title: 'Para llevar',
		text: 'La ficha lo clasifica como restaurante especializado en pollo y su descripción habla de comida para llevar.',
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{ texto: 'Encantadores, la paella buenisima y de precios inmejorables.', valor: 5 },
	{ texto: 'Deliciosas croquetas y tortilla caseras.', valor: 5 },
	{ texto: 'La salsa del pollo exquisita, las patatas caseras y buenísimas.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está La Ribereña?',
		a: 'En la calle Antonio Cumella, 10, en Moratalaz, 28030 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Jueves y viernes de 10:00 a 15:30; sábado y domingo de 9:00 a 15:30. De lunes a miércoles está cerrado. El domingo 1 de noviembre la ficha avisa de que el horario podría cambiar por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado, paella y platos caseros para llevar. Las reseñas mencionan también croquetas, tortilla y patatas caseras. La ficha no publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Una reseña destaca que la paella tiene «precios inmejorables», pero para cifras concretas conviene llamar al 602 41 54 72.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'La ficha no publica un sistema de encargos ni mínimos. Se consulta por teléfono, en el 602 41 54 72.',
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
		a: 'Google le da 4,6 sobre 5 con 91 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones que muestra son de cinco estrellas.',
	},
];
