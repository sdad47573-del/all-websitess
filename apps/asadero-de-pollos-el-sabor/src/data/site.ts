/**
 * Datos de Asadero de pollos El Sabor y comidas para llevar — Calle Mayor, 5,
 * 30165 Rincón de Seca (Murcia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Asadero de pollos el sabor y comidas para
 *   llevar», 37.9775182,-1.1656915, feature 0xd6381e3848d8265:0x6c4f0095483472a0.
 * - Nombre, dirección, teléfono, categorías, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 1 de noviembre de 2026. La ficha no
 *   enlaza una web propia ni publica carta ni precios.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 */

export const BUSINESS = {
	name: 'Asadero de pollos El Sabor',
	fullName: 'Asadero de pollos el sabor y comidas para llevar',
	shortName: 'El Sabor',
	mark: 'ES',
	street: 'Calle Mayor, 5',
	district: 'Rincón de Seca',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30165',
	country: 'ES',
	siteUrl: 'https://asadero-de-pollos-el-sabor.vercel.app',
	geo: { lat: 37.9775182, lng: -1.1656915 },
	featureId: '0xd6381e3848d8265:0x6c4f0095483472a0',
	placeId: 'ChIJZYKNhOOBYw0RoHI0SJUAT2w',
	plusCode: '8C9WXRHM+2P',
	googleCategory: 'Restaurante especializado en pollo, pollería y comida para llevar',
	phone: '968 26 09 38',
	phoneHref: 'tel:+34968260938',
	tagline: 'Pollo asado, croquetas y tartas caseras en Rincón de Seca',
	description:
		'Asadero de pollos El Sabor, en la Calle Mayor, 5 (30165 Rincón de Seca, Murcia). Pollos asados, croquetas de pollo, bocatas, hamburguesas y tartas caseras para llevar. De martes a domingo, con cenas viernes y sábado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asadero+de+pollos+el+sabor+y+comidas+para+llevar/@37.9775182,-1.1656915,17z/data=!3m1!4b1!4m6!3m5!1s0xd6381e3848d8265:0x6c4f0095483472a0!8m2!3d37.9775182!4d-1.1656915!16s%2Fg%2F11k0qylw9g?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9775182%2C-1.1656915',
	embed: 'https://maps.google.com/maps?q=37.9775182,-1.1656915&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9775182,-1.1656915',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 212,
	label: '4,8',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '9:00–15:00' },
	{ dia: 'Miércoles', horas: '9:00–15:00' },
	{ dia: 'Jueves', horas: '9:00–15:00' },
	{ dia: 'Viernes', horas: '9:00–15:00 · 20:30–23:00' },
	{ dia: 'Sábado', horas: '10:00–16:00 · 20:00–23:00' },
	{ dia: 'Domingo', horas: '10:00–17:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de ir a recoger el pedido.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Croquetas de pollo',
	'Arroces para llevar',
	'Pulpo',
	'Bocatas y tostas',
	'Comida para llevar',
	'Tartas caseras',
	'Cenas viernes y sábado',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado al momento',
		text: 'Google la clasifica como «restaurante especializado en pollo» y «pollería». En las fotos del perfil se ve el asador con las brochetas llenas, hilera tras hilera, y los pollos dorados esperando su bolsa de papel.',
	},
	{
		title: 'Croquetas de pollo asado',
		text: 'Una de las reseñas lo dice con todas las letras: «las mejores croquetas de pollo asado, ¡un espectáculo!». Se hacen con el pollo de la casa y se venden como guarnición o para picar.',
	},
	{
		title: 'Tartas caseras',
		text: 'El postre se repite en las opiniones: «pollos muy ricos y tarta de queso exquisita» y «las tartas caseras para perder la cabeza». Es el cierre habitual de los pedidos de fin de semana.',
	},
	{
		title: '4,8 sobre 5 con 212 reseñas',
		text: 'Es una de las notas más altas de la pedanía. Con 212 opiniones, la ficha de Google le da 4,8 sobre 5 (noviembre de 2026), y las reseñas insisten en el trato y en lo bien que sale el pollo.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{ texto: 'Pollos muy ricos y tarta de queso exquisita.' },
	{ texto: 'Unos pollos increíbles. Buen trato. Las tartas caseras para perder la cabeza.' },
	{ texto: 'Las mejores croquetas de pollo asado, ¡un espectáculo!' },
];

/**
 * Lo que anuncia la ficha (categorías) y lo que citan las reseñas. La ficha no
 * publica carta ni precios.
 */
export const MENU = [
	{
		title: 'El asadero',
		items: [
			{ name: 'Pollo asado', note: 'el producto de la casa, recién salido del asador' },
			{ name: 'Croquetas de pollo asado', note: 'las que destacan las reseñas, con perejil por encima' },
			{ name: 'Pollo guisado con pimientos', note: 'en bandeja de salsa, como el de las fotos' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Arroz con pollo y chorizo', note: 'en tarrina de aluminio, listo para llevar' },
			{ name: 'Pulpo cocido', note: 'en bandeja, con su aceite y pimentón' },
			{ name: 'Tostas y bocatas', note: 'con queso fresco, pepino y tomate cherry' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Tarta de queso', note: '«exquisita», según una reseña' },
			{ name: 'Tartas caseras', note: 'hechas en la casa, según las opiniones' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el asadero El Sabor?',
		a: 'En la Calle Mayor, 5, 30165 Rincón de Seca (Murcia). La ficha de Google sitúa el local en las coordenadas 37.9775182, -1.1656915. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: lunes cerrado; de martes a jueves de 9:00 a 15:00; viernes de 9:00 a 15:00 y de 20:30 a 23:00; sábado de 10:00 a 16:00 y de 20:00 a 23:00; domingo de 10:00 a 17:00. Solo hay cenas de sala viernes y sábado. El día que se consultó la ficha Google advertía de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿Hay que encargar el pollo?',
		a: 'La ficha no habla de encargos, pero al ser un asadero lo normal es que el pollo se prepare al momento y que en fin de semana se acabe. Lo práctico es llamar al 968 26 09 38 antes de ir, sobre todo si quieres varios pollos o una tarta entera.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado y croquetas de pollo asado, además de bocatas, hamburguesas y tapas, que son las categorías con las que Google describe el local. Para terminar, las reseñas citan la tarta de queso y las tartas caseras. No hay carta con todos los platos ni precios publicados.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google la clasifica como restaurante y bar, además de pollería y comida para llevar, y publica cenas de viernes y sábado, así que hay servicio de mesa. La ficha no permite reservar: si quieres sentarte, llama antes al 968 26 09 38.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no anuncia reparto propio ni enlaza ninguna plataforma de entrega. Todo lo que se puede afirmar es que es un local de comida para llevar, así que el pedido se recoge en la Calle Mayor, 5. Si necesitas entrega, pregúntalo por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las fotos del perfil publican precios. Las reseñas hablan muy bien de la relación calidad-precio, pero el precio del pollo, de las croquetas o de la tarta solo se sabe preguntando por teléfono.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento, así que esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono o en el propio mostrador.',
	},
];
