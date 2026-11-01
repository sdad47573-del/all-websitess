/**
 * Datos de GASTROCHEF — comida para llevar —
 * Av. de las Naciones, 37, Loc, 28320 Pinto (Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'Alimentación Preparada El Dorado',
	fullName: 'Alimentación Preparada El Dorado S.L.',
	shortName: 'El Dorado',
	mark: 'D',
	street: 'C. de Oliva de Plasencia, 1, Local 214 (C.C. San Ignacio de Loyola)',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28044',
	locality: 'Latina',
	country: 'ES',
	siteUrl: 'https://alimentacion-preparada-el-dorado.vercel.app',
	geo: { lat: 40.3785713, lng: -3.7792523 },
	featureId: '0xd41885736e7a045:0xd501cfd66ebcba54',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '917 10 67 19',
	phoneHref: 'tel:+34917106719',
	tagline: 'Alimentación preparada en Latina, Madrid',
	description:
		'Alimentación Preparada El Dorado, en C. de Oliva de Plasencia, 1, Local 214 (Latina, 28044 Madrid). Según su ficha de Google Maps, restaurante especializado en pollo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Alimentaci%C3%B3n+Preparada+El+Dorado+S.L./@40.3785713,-3.7792523,17z/data=!4m6!3m5!1s0xd41885736e7a045:0xd501cfd66ebcba54!8m2!3d40.3785713!4d-3.7792523!16s%2Fg%2F1thl6r26?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJRaDnNleIQQ0RVLq8btbPAdU&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3785713%2C-3.7792523',
	embed: 'https://maps.google.com/maps?q=40.3785713,-3.7792523&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3785713,-3.7792523',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.1,
	count: 77,
	label: '3,1',
};

/** Horario de la ficha: lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado' },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que publican la ficha y las reseñas. */
export const SERVICIOS = ['Comida preparada', 'Pollo'];

export const HIGHLIGHTS = [
	{
		title: 'Comida preparada',
		text: 'La ficha lo clasifica como restaurante especializado en pollo.',
	},
	{
		title: 'Horario',
		text: 'De martes a domingo de 10:00 a 16:00. Los lunes está cerrado.',
	},
];

/** Reseñas de la ficha, tal cual aparecen. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está El Dorado?',
		a: 'En el C. de Oliva de Plasencia, 1, Local 214, dentro del C.C. San Ignacio de Loyola, en Latina (28044 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo de 10:00 a 16:00. Los lunes está cerrado. El domingo 1 de noviembre la ficha avisa de que el horario podría cambiar por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha de Google Maps lo clasifica como restaurante especializado en pollo y alimentación preparada. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para cifras concretas conviene llamar al 917 10 67 19.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'La ficha no indica encargos. Para consultarlo, llama al 917 10 67 19.',
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
		a: 'Google le da 3,1 sobre 5 con 77 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
