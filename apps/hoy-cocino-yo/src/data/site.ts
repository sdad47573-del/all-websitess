/**
 * Datos de Hoy cocino yo! — C. Fernando Camino, 11
 * (Málaga-Este, 29016 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Hoy cocino yo!,
 *   36.7198357,-4.409069, feature 0xd72f7dd893fc2e1:0xf807b33597a2157e.
 * - Nombre, dirección, categorías, valoración, horario, teléfono, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos ni un número de contacto. La descripción del
 * negocio está publicada en inglés; aquí se traduce al castellano.
 */

export const BUSINESS = {
	name: 'Hoy cocino yo!',
	shortName: 'Hoy cocino yo',
	mark: 'HC',
	street: 'C. Fernando Camino, 11',
	district: 'Málaga-Este',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29016',
	country: 'ES',
	siteUrl: 'https://hoy-cocino-yo.vercel.app',
	geo: { lat: 36.7198357, lng: -4.409069 },
	featureId: '0xd72f7dd893fc2e1:0xf807b33597a2157e',
	placeId: 'ChIJ4cI_id33cg0RfhWilzWzB_g',
	plusCode: '8C8QPH9R+W9',
	googleCategory: 'Restaurante de comida para llevar · Comida a domicilio',
	phone: '673 18 32 55',
	phoneHref: 'tel:+34673183255',
	tagline: 'Comida casera y conos de pescado frito en Málaga-Este',
	description:
		'Hoy cocino yo!, comida casera para llevar y a domicilio en C. Fernando Camino, 11 (Málaga-Este, 29016 Málaga). Cocina diaria con ingredientes frescos, conos de pescado frito y bocadillos.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Hoy+cocino+yo!/@36.7198357,-4.409069,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7dd893fc2e1:0xf807b33597a2157e!8m2!3d36.7198357!4d-4.409069!16s%2Fg%2F11fn9s68zq?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=16089773002199216410',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7198357%2C-4.409069',
	embed: 'https://maps.google.com/maps?q=36.7198357,-4.409069&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7198357,-4.409069',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 214,
	label: '4,6',
};

/** Horario que publica la ficha: jornada partida de lunes a viernes y fines de semana hasta las 16:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–21:00' },
	{ dia: 'Martes', horas: '10:00–21:00' },
	{ dia: 'Miércoles', horas: '10:00–21:00' },
	{ dia: 'Jueves', horas: '10:00–21:00' },
	{ dia: 'Viernes', horas: '10:00–21:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'A domicilio',
	'Conos de pescado frito',
	'Bocadillos',
	'Ensaladas y raciones',
];

export const HIGHLIGHTS = [
	{
		title: 'Conos de pescado frito',
		text: 'La especialidad que anuncia la descripción del negocio: pescado recién frito servido en cono. Google lo clasifica como comida para llevar y comida a domicilio.',
	},
	{
		title: 'Cocina del día',
		text: 'La descripción explica que la comida se prepara cada día con ingredientes frescos. Las reseñas hablan de raciones generosas, ensaladas variadas, pulpo y paella.',
	},
	{
		title: 'Se come sin cocinar',
		text: 'Abren de 10:00 a 21:00 de lunes a viernes y hasta las 16:00 los fines de semana. El pedido se cierra por teléfono o en el local.',
	},
];

/**
 * Platos que nombran la descripción del negocio y las reseñas. La ficha no
 * publica carta ni precios, así que aquí no se inventa ningún valor.
 */
export const MENU = [
	{
		title: 'Conos y fritos',
		items: [
			{
				name: 'Cono de pescado frito',
				note: 'la especialidad de la casa, recién frito, según la descripción del negocio',
			},
			{
				name: 'Pulpo',
				note: 'uno de los platos que destaca una reseña de cinco estrellas',
			},
			{
				name: 'Patatas fritas',
				note: '«hechas al instante», según otra de las opiniones publicadas',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{
				name: 'Pollo asado',
				note: 'cuartos de pollo dorados en bandeja de aluminio, como se ven en las fotos',
			},
			{
				name: 'Empanadas y empanadillas',
				note: 'en la vitrina, junto a los bocadillos y las tartas',
			},
			{
				name: 'Tartas caseras',
				note: 'porciones y tartas enteras en el expositor de la tienda',
			},
		],
	},
	{
		title: 'Bocadillos y platos',
		items: [
			{
				name: 'Bocadillos',
				note: '«con sabor», los que anuncia la descripción de la ficha',
			},
			{
				name: 'Ensaladas variadas',
				note: '«ensaladas súper variadas», en palabras de una reseña',
			},
			{
				name: 'Paella',
				note: 'aparece en las opiniones de la ficha junto al pulpo y las ensaladas',
			},
			{
				name: 'Comida casera del día',
				note: 'la cocina diaria con ingredientes frescos que describe el negocio',
			},
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{
				name: 'Ensalada de garbanzos y queso fresco',
				note: 'tomate, pepino, cebolla morada y garbanzos, en tarrina lista para llevar',
			},
			{
				name: 'Ensaladilla rusa',
				note: 'con patata, atún, huevo y aceitunas, una de las tarrinas de la vitrina',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'Comida casera muy rica, raciones generosas y buen precio.', valor: 5 },
	{ texto: 'Pulpo, ensaladas súper variadas, paella y mucho más.', valor: 5 },
	{ texto: 'Las patatas están hechas al instante y son bastante ricas.', valor: 4 },
];

export const FAQ = [
	{
		q: '¿Dónde está Hoy cocino yo!?',
		a: 'En la calle Fernando Camino, 11, en Málaga-Este (29016 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 10:00 a 21:00. Los sábados y domingos cierra a las 16:00, siempre con apertura a las 10:00. La ficha no marca ningún día de descanso y avisa de que en el Día de Todos los Santos el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera preparada cada día, con especialidad en conos de pescado frito y bocadillos. Las reseñas citan el pulpo, las ensaladas variadas, la paella y las patatas fritas. La ficha no publica una carta cerrada.',
	},
	{
		q: '¿Es comida para llevar?',
		a: 'Sí. Google lo clasifica como restaurante de comida para llevar y como comida a domicilio, y el negocio se presenta como comida casera «para llevar». Para encargar se llama al 673 18 32 55.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha incluye la categoría de comida a domicilio. No detalla zonas, horarios ni coste de reparto, así que conviene confirmarlo por teléfono antes de pedir.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni precios. Las reseñas hablan de «buen precio» y raciones generosas, pero esta página no inventa valores.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. Indica que no hay aparcamiento adaptado ni asientos adaptados, y no publica datos sobre el aseo.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública de Google no publica página web ni perfiles sociales, así que esta web solo enlaza el teléfono y la propia ficha.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 214 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones publicadas hablan de comida casera, raciones generosas, ensaladas variadas y patatas fritas al momento.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha lo clasifica como comida para llevar y a domicilio, sin servicio de mesa. Las fotos y la descripción hablan de pedidos para llevar; conviene preguntar por teléfono si hay algún sitio para comer allí.',
	},
];
