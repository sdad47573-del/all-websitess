/**
 * Datos de La Canela Asador y comida casera — Av. Jane Bowles, 1, Loc 14
 * (Palma-Palmilla, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Canela Asador y comida casera,
 *   36.7436913,-4.4267925, feature 0xd72f70030e9aa9f:0x8feb43d0eb6a3e5a.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La web
 * no inventa esos datos. El surtido que se cita es el que nombran las categorías,
 * la descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'La Canela Asador y comida casera',
	shortName: 'La Canela',
	mark: 'LC',
	street: 'Av. Jane Bowles, 1, Loc 14',
	district: 'Palma-Palmilla',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	siteUrl: 'https://la-canela-asador.vercel.app',
	geo: { lat: 36.7436913, lng: -4.4267925 },
	featureId: '0xd72f70030e9aa9f:0x8feb43d0eb6a3e5a',
	placeId: 'ChIJn6rpMAD3cg0RWj5q69BD648',
	plusCode: '8C8QPHVF+F7',
	googleCategory: 'Asador, cocina árabe y andaluza · Halal · A domicilio',
	phone: '614 73 96 21',
	phoneHref: 'tel:+34614739621',
	tagline: 'Asador y comida casera árabe y andaluza en Palma-Palmilla',
	description:
		'La Canela, asador y comida casera en Av. Jane Bowles, 1, local 14 (Palma-Palmilla, 29011 Málaga). Pollo asado, pastela, couscous y platos halal para llevar o a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Canela+Asador+y+comida+casera/@36.7436913,-4.4267925,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70030e9aa9f:0x8feb43d0eb6a3e5a!8m2!3d36.7436913!4d-4.4267925!16s%2Fg%2F11xcmmd8wl?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=10370457131532566106',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7436913%2C-4.4267925',
	embed: 'https://maps.google.com/maps?q=36.7436913,-4.4267925&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7436913,-4.4267925',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 82,
	label: '4,9',
};

/** Horario que publica la ficha: mediodía, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:00–17:00' },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: '11:00–16:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Cocina árabe',
	'Cocina andaluza',
	'Halal',
	'Para llevar y a domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'El asador',
		text: 'El pollo asado con patatas es lo primero que aparece en las reseñas: «compramos pollo asado con patatas, pastela y couscous, todo buenísimo».',
	},
	{
		title: 'Dos cocinas',
		text: 'Google clasifica la casa como restaurante árabe, halal y mediterráneo. Una reseña lo resume: «buena cocina árabe y andaluza, todo está delicioso».',
	},
	{
		title: 'Para llevar y a domicilio',
		text: 'La ficha la clasifica a la vez como restaurante de comida para llevar y de comida a domicilio. Los pedidos se hacen por teléfono.',
	},
];

/**
 * Solo las familias de producto que nombran las categorías y las reseñas. No hay
 * carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que citan las reseñas, servido con patatas',
			},
			{
				name: 'Patatas',
				note: 'el acompañamiento que aparece en las opiniones de la ficha',
			},
			{
				name: 'Comida para llevar',
				note: 'la ficha la clasifica como restaurante de comida para llevar',
			},
		],
	},
	{
		title: 'Cocina árabe y andaluza',
		items: [
			{
				name: 'Pastela',
				note: '«compramos pollo asado con patatas, pastela y couscous», dice una reseña',
			},
			{
				name: 'Couscous',
				note: 'el otro plato que destaca la misma reseña',
			},
			{
				name: 'Platos halal',
				note: 'Google clasifica el restaurante como halal',
			},
			{
				name: 'Cocina mediterránea',
				note: 'categoría que publica la ficha del negocio',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Compramos pollo asado con patatas, pastela y couscous todo buenísimo!!',
		valor: 5,
	},
	{ texto: 'Buena cocina árabe y Andaluza, todo está delicioso.', valor: 5 },
	{ texto: 'Buen trato, servicio rápido y precios justos.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está La Canela?',
		a: 'En la avenida Jane Bowles, 1, local 14, en Palma-Palmilla (29011 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: martes de 11:00 a 17:00; de miércoles a domingo de 11:00 a 16:00; lunes cerrado. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado con patatas, pastela, couscous y cocina árabe y andaluza, según la descripción y las reseñas de la ficha. Google la clasifica como restaurante árabe, halal y mediterráneo. No hay carta publicada.',
	},
	{
		q: '¿La comida es halal?',
		a: 'Sí. La ficha de Google incluye la categoría de restaurante halal, además de restaurante árabe y mediterráneo.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google la clasifica como restaurante de comida a domicilio y de comida para llevar. Los pedidos se hacen por teléfono, en el 614 73 96 21; conviene confirmar la zona de reparto al llamar.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha no incluye carta ni precios. Esta página solo cita las preparaciones que nombran las categorías y las reseñas, y no inventa valores. Una reseña habla de «precios justos».',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No hay sistema de reservas online ni página web propia. Para mesas o pedidos, el canal que publica la ficha es el teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. No publica datos sobre aparcamiento adaptado, asientos adaptados, interior ni aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 82 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacan el pollo asado, la cocina árabe y andaluza, el trato y la rapidez del servicio.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
