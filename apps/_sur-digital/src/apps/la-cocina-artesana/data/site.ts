/**
 * Datos de La Cocina Artesana, Avenida Reino de Murcia, Bajo 3 A (Altorreal, 30506 Molina de Segura).
 *
 * Fuente: ficha pública de Google Maps consultada el 31 de octubre de 2026
 * (feature 0xd6386c0d20bf163:0x280e30cfbe9c9f20). La ficha la clasifica como
 * restaurante de comida para llevar y no publica web propia ni carta con precios.
 * La respuesta consultada no trae textos de reseñas, así que no se citan opiniones.
 */

export const BUSINESS = {
	name: 'La Cocina Artesana',
	fullName: 'La Cocina Artesana',
	shortName: 'Cocina Artesana',
	mark: 'CA',
	street: 'Avenida Reino de Murcia, Bajo 3 A',
	district: 'Altorreal',
	city: 'Molina de Segura',
	region: 'Región de Murcia',
	postalCode: '30506',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-cocina-artesana',
	geo: { lat: 38.0735771, lng: -1.1563394 },
	featureId: '0xd6386c0d20bf163:0x280e30cfbe9c9f20',
	placeId: 'ChIJY_EL0sCGYw0RIJ-cvs8wDig',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '868 10 17 95',
	phoneHref: 'tel:+34868101795',
	tagline: 'Comida para llevar en Altorreal',
	description:
		'La Cocina Artesana, en Avenida Reino de Murcia, Bajo 3 A (30506 Altorreal, Molina de Segura, Murcia). Valoración de 4,1 sobre 5 en Google Maps con 36 reseñas. Comida para llevar de lunes a viernes, de 12:30 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cocina+Artesana/@38.0735771,-1.1563394,17z/data=!3m1!4b1!4m6!3m5!1s0xd6386c0d20bf163:0x280e30cfbe9c9f20!8m2!3d38.0735771!4d-1.1563394!16s%2Fg%2F11hb4dgrz7?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.0735771%2C-1.1563394',
	embed: 'https://maps.google.com/maps?q=38.0735771,-1.1563394&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.0735771,-1.1563394',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 36,
	label: '4,1',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:00' },
	{ dia: 'Martes', horas: '12:30–16:00' },
	{ dia: 'Miércoles', horas: '12:30–16:00' },
	{ dia: 'Jueves', horas: '12:30–16:00' },
	{ dia: 'Viernes', horas: '12:30–16:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. Confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar. */
export const SERVICIOS = ['Comida para llevar', 'Horario de mediodía', 'Cerrado fines de semana'];

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: 'Google la clasifica como restaurante de comida para llevar, en Altorreal.',
	},
	{
		title: '4,1 sobre 5',
		text: 'Con 36 reseñas, la ficha de Google le da 4,1 sobre 5 (octubre de 2026).',
	},
	{
		title: 'Mediodía',
		text: 'Abre de lunes a viernes, de 12:30 a 16:00. Los sábados y domingos cierra.',
	},
];

/** La ficha no publica carta ni precios. Estos platos se ven en las fotos del perfil. */
export const MENU: { title: string; items: { name: string; note: string }[] }[] = [
	{
		title: 'Pasta y verduras',
		items: [
			{ name: 'Espaguetis con almejas', note: 'visto en las fotos' },
			{ name: 'Macarrones con tomate', note: 'visto en las fotos' },
			{ name: 'Verduras salteadas', note: 'visto en las fotos' },
		],
	},
	{
		title: 'Carne y pescado',
		items: [
			{ name: 'Albóndigas en salsa', note: 'visto en las fotos' },
			{ name: 'Pescado al horno con limón', note: 'visto en las fotos' },
		],
	},
	{
		title: 'Gratinados y fríos',
		items: [
			{ name: 'Pasta gratinada', note: 'visto en las fotos' },
			{ name: 'Pimientos rellenos gratinados', note: 'visto en las fotos' },
			{ name: 'Ensaladilla con atún', note: 'visto en las fotos' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cocina Artesana?',
		a: 'En la Avenida Reino de Murcia, Bajo 3 A, en Altorreal (30506 Molina de Segura, Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a viernes, de 12:30 a 16:00. Los sábados y domingos cierra. El 1 de noviembre (Día de Todos los Santos) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 868 10 17 95. La ficha no enlaza una web propia ni un sistema de pedidos online.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de conocerlos es preguntar por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 36 reseñas en el momento de consultarla (31 de octubre de 2026).',
	},
];
