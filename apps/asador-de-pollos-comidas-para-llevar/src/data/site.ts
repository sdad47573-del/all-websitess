/**
 * Datos de Asador de Pollos, comidas para llevar —
 * C. de San Fernando de Henares, 10 (28914 Leganés, Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'Asador de Pollos, comidas para llevar',
	fullName: 'Asador de Pollos · Comidas para llevar',
	shortName: 'Asador de Pollos',
	mark: 'A',
	street: 'C. de San Fernando de Henares, 10',
	city: 'Leganés',
	region: 'Comunidad de Madrid',
	postalCode: '28914',
	locality: 'Leganés',
	country: 'ES',
	siteUrl: 'https://asador-de-pollos-comidas-para-llevar.vercel.app',
	geo: { lat: 40.3171961, lng: -3.7858156 },
	featureId: '0xd418bcd130e8ef9:0x5ed004bba9b75403',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '695 91 36 99',
	phoneHref: 'tel:+34695913699',
	tagline: 'Pollo asado y comidas caseras para llevar en Leganés',
	description:
		'Asador de Pollos, comidas para llevar en C. de San Fernando de Henares, 10 (28914 Leganés, Madrid). Según su ficha de Google Maps, restaurante especializado en pollo y de comida para llevar, con comida casera.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos,+comidas+para+llevar/@40.3171961,-3.7858156,17z/data=!3m1!4b1!4m6!3m5!1s0xd418bcd130e8ef9:0x5ed004bba9b75403!8m2!3d40.3171961!4d-3.7858156!16s%2Fg%2F1xgzd269?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJ-Y4OE82LQQ0RA1S3qbsE0F4&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3171961%2C-3.7858156',
	embed: 'https://maps.google.com/maps?q=40.3171961,-3.7858156&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3171961,-3.7858156',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.2,
	count: 99,
	label: '4,2',
};

/** Horario de la ficha: todos los días de 10:00 a 15:30. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–15:30' },
	{ dia: 'Martes', horas: '10:00–15:30' },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

export const HORARIO_AVISO =
	'La ficha avisa de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría ser diferente. Confirma antes de desplazarte.';

/** Lo que publican la ficha y las categorías. */
export const SERVICIOS = ['Pollo asado', 'Comida casera', 'Comida para llevar', 'Paella'];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'La ficha lo clasifica como restaurante especializado en pollo, y las reseñas recomiendan el pollo con patatas.',
	},
	{
		title: 'Comida casera',
		text: 'La ficha describe comida casera para llevar, con buenos precios según las reseñas.',
	},
];

/** La ficha no publica reseñas literales en esta web: solo la valoración y el número. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está Asador de Pollos?',
		a: 'En la C. de San Fernando de Henares, 10, en Leganés, 28914 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Todos los días de 10:00 a 15:30 según la ficha. La ficha avisa de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría cambiar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha de Google Maps lo clasifica como restaurante especializado en pollo y de comida para llevar, y la describe como comida casera. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. Para cifras concretas conviene llamar al 695 91 36 99.',
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
		a: 'Google le da 4,2 sobre 5 con 99 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
