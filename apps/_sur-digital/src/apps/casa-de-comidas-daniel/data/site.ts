/**
 * Datos de Casa de comidas Daniel (Antigua Chuky), C. Mayor, 98, 30150 La Alberca (Murcia).
 *
 * Fuente: ficha pública de Google Maps consultada el 31 de octubre de 2026
 * (feature 0xd637f15e95441db:0x4b578cb5a525eb45). La ficha no publica web
 * propia ni carta con precios, y la respuesta consultada no trae textos de
 * reseñas, así que no se citan opiniones concretas.
 */

export const BUSINESS = {
	name: 'Casa de comidas Daniel',
	fullName: 'Casa de comidas Daniel (Antigua Chuky)',
	shortName: 'Casa Daniel',
	mark: 'CD',
	street: 'C. Mayor, 98',
	district: 'La Alberca',
	city: 'La Alberca',
	region: 'Región de Murcia',
	postalCode: '30150',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/casa-de-comidas-daniel',
	geo: { lat: 37.9413129, lng: -1.1439071 },
	featureId: '0xd637f15e95441db:0x4b578cb5a525eb45',
	placeId: 'ChIJ20FU6RV_Yw0RReslpbWMV0s',
	googleCategory: 'Comida a domicilio',
	phone: '868 71 17 46',
	phoneHref: 'tel:+34868711746',
	tagline: 'Comida casera en La Alberca',
	description:
		'Casa de comidas Daniel (Antigua Chuky), en C. Mayor, 98 (30150 La Alberca, Murcia). Valoración de 4,1 sobre 5 en Google Maps con 96 reseñas. Abre de lunes a domingo, con horario de comidas y de cenas los viernes y sábados.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Casa+de+comidas+Daniel+%28Antigua+Chuky%29/data=!4m7!3m6!1s0xd637f15e95441db:0x4b578cb5a525eb45!8m2!3d37.9413129!4d-1.1439071!16s%2Fg%2F11trpbrbrl!19sChIJ20FU6RV_Yw0RReslpbWMV0s?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9413129%2C-1.1439071',
	embed: 'https://maps.google.com/maps?q=37.9413129,-1.1439071&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9413129,-1.1439071',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 96,
	label: '4,1',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00 y 20:00–23:00' },
	{ dia: 'Sábado', horas: '10:00–16:00 y 20:00–23:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. Confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar. */
export const SERVICIOS = ['Comida a domicilio', 'Comida para llevar', 'Horario de mañana y noche'];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera',
		text: 'Google la clasifica como comida a domicilio y la ficha tiene servicio para llevar.',
	},
	{
		title: '4,1 sobre 5',
		text: 'Con 96 reseñas, la ficha de Google le da 4,1 sobre 5 (octubre de 2026).',
	},
	{
		title: 'Mediodía y noche',
		text: 'Abre de martes a domingo, de 10:00 a 16:00, y los viernes y sábados también de 20:00 a 23:00. Cierra los lunes.',
	},
];

/** La respuesta consultada no trae textos de reseñas; no se inventan citas. */
export const RESENAS: { texto: string; valor: number }[] = [];

/** La ficha no publica carta ni precios. Estos platos se ven en las fotos del perfil. */
export const MENU = [
	{
		title: 'Comida casera',
		items: [
			{ name: 'Croquetas de pollo campero', note: 'visto en las fotos del perfil' },
			{ name: 'Potaje de garbanzos y verduras', note: 'visto en las fotos del perfil' },
			{ name: 'Albóndigas en caldo', note: 'visto en las fotos del perfil' },
			{ name: 'Marisco en caldo con patata', note: 'visto en las fotos del perfil' },
			{ name: 'Mini hamburguesas', note: 'visto en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casa de comidas Daniel?',
		a: 'En la C. Mayor, 98, 30150 La Alberca (Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 10:00 a 16:00, y los viernes y sábados también de 20:00 a 23:00. Los lunes cierra. El 1 de noviembre (Día de Todos los Santos) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 868 71 17 46. La ficha no enlaza una web propia ni un sistema de pedidos online.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de conocerlos es preguntar por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 96 reseñas en el momento de consultarla (31 de octubre de 2026).',
	},
];
