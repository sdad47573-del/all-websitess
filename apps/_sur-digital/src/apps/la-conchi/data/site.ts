/**
 * Datos de La Conchi, C. Sta. Rosa, Nº 9 (30870 Mazarrón, Murcia).
 *
 * Fuente: ficha pública de Google Maps consultada el 31 de octubre de 2026
 * (feature 0xd64a3ae3ba65481:0x9bc6dfa4b6449cee). La ficha no publica web propia
 * ni carta con precios. Los textos de reseñas no se citan.
 */

export const BUSINESS = {
	name: 'La Conchi',
	fullName: 'La Conchi - Comidas para llevar',
	shortName: 'La Conchi',
	mark: 'LC',
	street: 'C. Sta. Rosa, Nº 9',
	district: 'Mazarrón',
	city: 'Mazarrón',
	region: 'Región de Murcia',
	postalCode: '30870',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-conchi',
	geo: { lat: 37.6014384, lng: -1.3131495 },
	featureId: '0xd64a3ae3ba65481:0x9bc6dfa4b6449cee',
	phone: '868 08 02 47',
	phoneHref: 'tel:+34868080247',
	tagline: 'Comida para llevar en Mazarrón',
	description:
		'La Conchi, en C. Sta. Rosa, Nº 9 (30870 Mazarrón, Murcia). Valoración de 4,1 sobre 5 en Google Maps con 78 reseñas. Comida para llevar.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Conchi-+Comidas+para+llevar/@37.6014384,-1.3131495,17z/data=!3m1!4b1!4m6!3m5!1s0xd64a3ae3ba65481:0x9bc6dfa4b6449cee!8m2!3d37.6014384!4d-1.3131495!16s%2Fg%2F11p9qc3g55?authuser=0&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.6014384%2C-1.3131495',
	embed: 'https://maps.google.com/maps?q=37.6014384,-1.3131495&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.6014384,-1.3131495',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 78,
	label: '4,1',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:00–15:30' },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario puede ser diferente. Confírmalo por teléfono antes de desplazarte.';

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: 'La ficha de Google la sitúa en C. Sta. Rosa, en Mazarrón.',
	},
	{
		title: '4,1 sobre 5',
		text: 'Con 78 reseñas, la ficha de Google le da 4,1 sobre 5 (octubre de 2026).',
	},
	{
		title: 'Mediodía',
		text: 'Abre de martes a domingo, de 10:00 a 15:30. Los lunes cierra.',
	},
];

/** La ficha no publica carta ni precios. Estos platos se ven en las fotos del perfil. */
export const MENU: { title: string; items: { name: string; note: string }[] }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está La Conchi?',
		a: 'En la C. Sta. Rosa, Nº 9, en Mazarrón (30870, Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 10:00 a 15:30. Los lunes cierra. El 1 de noviembre (Día de Todos los Santos) la propia ficha avisa de que el horario puede ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 868 08 02 47. La ficha no enlaza una web propia ni un sistema de pedidos online.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de conocerlos es preguntar por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 78 reseñas en el momento de consultarla (31 de octubre de 2026).',
	},
];
