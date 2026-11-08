/**
 * Datos de Moremar comidas para llevar — Ronda de Levante,
 * 30320 Fuente Álamo (Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Moremar comidas para llevar»,
 *   37.7225175,-1.1665494, feature 0xd636180785216f3:0xf4c890f321c82611.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, datos de
 *   accesibilidad y reseñas: ficha pública de Google consultada en noviembre de
 *   2026.
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta ni precios, no publica reparto a domicilio ni formas de pago. Los
 * platos que aparecen aquí son los que citan las reseñas destacadas y las
 * categorías del propio local; no hay importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'Moremar comidas para llevar',
	fullName: 'Moremar comidas para llevar',
	shortName: 'Moremar',
	mark: 'MM',
	street: 'Ronda de Levante',
	district: 'Fuente Álamo',
	city: 'Fuente Álamo',
	region: 'Región de Murcia',
	postalCode: '30320',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/moremar-comidas-para-llevar',
	geo: { lat: 37.7225175, lng: -1.1665494 },
	featureId: '0xd636180785216f3:0xf4c890f321c82611',
	placeId: 'ChIJ8xZSeIBhYw0RESbIIfOQyPQ',
	plusCode: '8C9WPRFM+29',
	googleCategory: 'Restaurante de cocina española',
	phone: '669 23 26 05',
	phoneHref: 'tel:+34669232605',
	tagline: 'Comida casera y asados para llevar en Fuente Álamo',
	description:
		'Moremar comidas para llevar, en Ronda de Levante (30320 Fuente Álamo, Murcia). Cocina casera, raciones abundantes y asados los fines de semana, de 7:00 a 17:00.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Moremar+comidas+para+llevar/@37.7225175,-1.1665494,17z/data=!4m6!3m5!1s0xd636180785216f3:0xf4c890f321c82611!8m2!3d37.7225175!4d-1.1665494!16s%2Fg%2F11f_gf15wt?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.7225175%2C-1.1665494',
	embed: 'https://maps.google.com/maps?q=37.7225175,-1.1665494&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.7225175,-1.1665494',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 185,
	label: '4,4',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '7:00–17:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '7:00–17:00' },
	{ dia: 'Jueves', horas: '7:00–17:00' },
	{ dia: 'Viernes', horas: '7:00–17:00' },
	{ dia: 'Sábado', horas: '7:00–17:00' },
	{ dia: 'Domingo', horas: '7:00–17:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, sus categorías y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Cocina casera',
	'Asados',
	'Raciones',
	'Comedor y barra',
	'Desayunos',
	'Acceso adaptado',
	'Aseo adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina casera y raciones',
		text: 'Una de las reseñas lo resume así: «Muy buena cocina y raciones abundantes». La ficha lo clasifica como restaurante de cocina española y bar, así que hay comida de cuchara y también barra.',
	},
	{
		title: 'Asados el fin de semana',
		text: '«Buena comida casera y excelentes asados los fines de semana», cuenta otra opinión. Es lo que más se repite en la ficha sobre el sábado y el domingo.',
	},
	{
		title: 'Pizarra del día',
		text: 'En la pizarra del local se leen caldo de gallina, callos con garbanzos, gazpacho, paella, conejo, rabas, bacalao, cordero, chuletillas, dorada, pollo asado y ternera. Cambia cada día y no lleva precios publicados.',
	},
	{
		title: 'Comedor, barra y acceso adaptado',
		text: 'Hay mesas de mantel rojo y una barra con azulejos, y la ficha declara acceso para sillas de ruedas y aseo adaptado. Abre desde las 7:00, así que también vale para el desayuno.',
	},
];

/** Platos de la pizarra del local y del mostrador, sin precios inventados. */
export const MENU = [
	{
		title: 'De la pizarra',
		items: [
			{ name: 'Caldo de gallina', note: 'pizarra del local' },
			{ name: 'Callos con garbanzos', note: 'pizarra del local' },
			{ name: 'Gazpacho', note: 'pizarra del local' },
			{ name: 'Paella', note: 'pizarra del local' },
			{ name: 'Conejo', note: 'pizarra del local' },
			{ name: 'Rabas', note: 'pizarra del local' },
			{ name: 'Bacalao', note: 'pizarra del local' },
			{ name: 'Cordero', note: 'pizarra del local' },
			{ name: 'Chuletillas', note: 'pizarra del local' },
			{ name: 'Cochillo', note: 'pizarra del local' },
			{ name: 'Dorada', note: 'pizarra del local' },
			{ name: 'Pollo asado', note: 'pizarra del local' },
			{ name: 'Ternera', note: 'pizarra del local' },
		],
	},
	{
		title: 'Del mostrador y la vitrina',
		items: [
			{ name: 'Asado con patatas y tomate', note: 'en las bandejas del mostrador, los fines de semana' },
			{ name: 'Croquetas', note: 'en la bandeja del mostrador' },
			{ name: 'Caracoles', note: 'en la bandeja del mostrador' },
			{ name: 'Pinchos morunos', note: 'en la bandeja del mostrador' },
			{ name: 'Habas con embutido', note: 'guiso de cuchara, en las fotos del perfil' },
			{ name: 'Lentejas con patata y zanahoria', note: 'guiso de cuchara, en las fotos del perfil' },
			{ name: 'Tortilla', note: 'en el mostrador' },
			{ name: 'Ensaladas', note: 'en la vitrina' },
			{ name: 'Pan', note: 'en la cesta de las mesas' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{
				name: 'Por teléfono',
				note: `llama al ${BUSINESS.phone} para preguntar qué hay y encargar`,
			},
			{
				name: 'Recogida en el local',
				note: 'en Ronda de Levante, Fuente Álamo',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Muy buena cocina y raciones abundantes',
		valor: 4,
	},
	{
		texto: 'Buena comida casera y excelentes asados los fines de semana',
		valor: 4,
	},
	{
		texto: 'Y fritos de tomate enlatado barato con doble ración de sal.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Moremar comidas para llevar?',
		a: 'En la Ronda de Levante, en Fuente Álamo (30320 Murcia). La ficha no publica número de portal, así que el mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 7:00 a 17:00, de lunes a domingo, con el martes cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica una carta con precios. En la pizarra del local aparecen caldo de gallina, callos con garbanzos, gazpacho, paella, conejo, rabas, bacalao, cordero, chuletillas, cochillo, dorada, pollo asado y ternera, y en el mostrador hay croquetas, caracoles, pinchos morunos, guisos de cuchara, tortilla, ensaladas y pan. Para saber qué hay cada día, llama al 669 23 26 05.',
	},
	{
		q: '¿Hacen asados?',
		a: 'Sí. Una reseña destacada habla de «excelentes asados los fines de semana», y en las fotos del perfil se ven bandejas de asado con patatas y tomate. La ficha no detalla qué se asa ni los precios: se pregunta por teléfono.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí. Las fotos del perfil enseñan un comedor con mesas de mantel rojo y una barra con azulejos, y la ficha lo clasifica como bar además de restaurante de cocina española. El nombre habla de comida para llevar, así que las dos cosas conviven: se puede pedir para recoger o comer allí.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 669 23 26 05, y se recoge en el local. La ficha no enlaza ninguna tienda online ni plataforma de reparto, así que esta página no tramita pedidos.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni el perfil del local publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es el teléfono y la dirección. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono para no llevarte una sorpresa al recoger.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google declara acceso para sillas de ruedas y aseo adaptado, dos datos que no suelen publicarse. No indica plazas de aparcamiento adaptadas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,4 sobre 5 con 185 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian la cocina casera, las raciones y los asados del fin de semana; una de ellas, de una estrella, critica los fritos de tomate.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
