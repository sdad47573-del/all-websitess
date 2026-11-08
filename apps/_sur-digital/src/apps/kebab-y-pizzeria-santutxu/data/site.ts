/**
 * Datos de KEBAB Y PIZZERIA SANTUTXU — Santutxu Kalea, 48004 Bilbao (Bizkaia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «KEBAB Y PIZZERIA SANTUTXU»,
 *   43.2543252,-2.9166637, feature 0xd4e4f1192ae88d9:0x84cf3c8bfe106fa9.
 * - Nombre, dirección, teléfono, categorías, web, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs), incluida la carta de la ventana y el cartel
 *   de la fachada, de donde salen el segundo teléfono y los platos.
 *
 * La ficha no publica precios. Los de la carta de la ventana no se copian porque
 * pueden estar desactualizados.
 */

export const BUSINESS = {
	name: 'Kebab y Pizzería Santutxu',
	fullName: 'KEBAB Y PIZZERIA SANTUTXU',
	shortName: 'Santutxu',
	mark: 'KS',
	street: 'Santutxu Kalea',
	district: 'Santutxu',
	city: 'Bilbao',
	region: 'País Vasco',
	postalCode: '48004',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/kebab-y-pizzeria-santutxu',
	geo: { lat: 43.2543252, lng: -2.9166637 },
	featureId: '0xd4e4f1192ae88d9:0x84cf3c8bfe106fa9',
	placeId: 'ChIJ2YiukhFPTg0RqW8Q_os8z4Q',
	plusCode: '8CMV733M+P8',
	googleCategory: 'Comida rápida, halal, tienda de kebabs y pizzería a domicilio',
	phone: '666 23 49 05',
	phoneHref: 'tel:+34666234905',
	phoneSign: '944 020 958',
	phoneSignHref: 'tel:+34944020958',
	web: 'https://heartfelt-beignet-1fbd43.netlify.app/',
	tagline: 'Kebab, pizza y durum en Santutxu',
	description:
		'Kebab y Pizzería Santutxu, en Santutxu Kalea (48004 Bilbao). Kebab halal, durum, pizzas, hamburguesas y fritos, con servicio a domicilio. Abierto todos los días de 12:30 a 23:30, y hasta las 24:00 los viernes y sábados.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/KEBAB+Y+PIZZERIA+SANTUTXU/@43.2543252,-2.9166637,17z/data=!4m6!3m5!1s0xd4e4f1192ae88d9:0x84cf3c8bfe106fa9!8m2!3d43.2543252!4d-2.9166637!16s%2Fg%2F11tdtncdk8?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2543252%2C-2.9166637',
	embed: 'https://maps.google.com/maps?q=43.2543252,-2.9166637&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2543252,-2.9166637',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 88,
	label: '4,1',
};

/** Horario que publica la ficha: todos los días, con el fin de semana más largo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–23:30' },
	{ dia: 'Martes', horas: '12:30–23:30' },
	{ dia: 'Miércoles', horas: '12:30–23:30' },
	{ dia: 'Jueves', horas: '12:30–23:30' },
	{ dia: 'Viernes', horas: '12:30–24:00' },
	{ dia: 'Sábado', horas: '12:30–24:00' },
	{ dia: 'Domingo', horas: '12:30–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de pedir.';

/** Lo que la ficha, el cartel y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Kebab halal',
	'Durum',
	'Pizzas',
	'Hamburguesas',
	'Fritos y patatas',
	'A domicilio',
	'Comer en el local',
	'LGBTQ+ friendly',
];

export const HIGHLIGHTS = [
	{
		title: 'Kebab halal en Santutxu',
		text: 'La ficha lo clasifica como restaurante halal, de comida rápida, tienda de kebabs y pizzería a domicilio. El kebab se sirve en pan de pita con la carne recién cortada, lechuga, tomate y salsa.',
	},
	{
		title: 'Durum y pizza, en la misma carta',
		text: 'La carta de la ventana mezcla el kebab con la pizzería: durum normal y con queso, kebab, platos de fritos, hamburguesas y pizzas. Todo se puede pedir para comer allí o para llevar.',
	},
	{
		title: 'Una barra con azulejo verde',
		text: 'El local es pequeño y luminoso, con la barra de madera curvada, taburetes altos, paredes verdes y azulejo blanco en la cocina. La fachada roja anuncia «Asia Döner Kebab» y el servicio a domicilio.',
	},
	{
		title: '4,1 sobre 5 con 88 reseñas',
		text: 'La ficha de Google le da 4,1 sobre 5 con 88 opiniones (noviembre de 2026). Las reseñas que se ven hablan del kebab de siempre y de la buena atención. La ficha también lo marca como espacio amigable con la comunidad LGBTQ+.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'El típico kebab con buena atención.',
	},
];

/**
 * Lo que se lee en la carta de la ventana y lo que se reconoce en las fotos.
 * La ficha no publica precios y aquí no se copian los de la carta.
 */
export const MENU = [
	{
		title: 'Kebab',
		items: [
			{ name: 'Kebab en pan de pita', note: 'con carne de pollo o cordero, lechuga, tomate y salsa' },
			{ name: 'Kebab mixto', note: 'con pollo y cordero en el mismo pan' },
			{ name: 'Kebab con queso', note: 'con el queso fundido sobre la carne' },
			{ name: 'Kebab de falafel', note: 'la versión vegetariana, en la carta de la ventana' },
		],
	},
	{
		title: 'Durum',
		items: [
			{ name: 'Durum normal', note: 'en tortilla de trigo, a la plancha y enrollado' },
			{ name: 'Durum con queso', note: 'gratinado por encima, como el de las fotos' },
			{ name: 'Durum básico', note: 'el más sencillo de la carta, con carne y salsa' },
			{ name: 'Durum de falafel', note: 'la opción vegetariana, con verdura y salsa' },
		],
	},
	{
		title: 'Pizzas y hamburguesas',
		items: [
			{ name: 'Pizza', note: 'la pizzería del nombre, con la masa y los ingredientes clásicos' },
			{ name: 'Hamburguesa de pollo', note: 'en el apartado de hamburguesas de la carta' },
			{ name: 'Menú hamburguesa', note: 'con patatas fritas y bebida, en la carta de la ventana' },
			{ name: 'Pollo broster', note: 'tiras de pollo rebozado, en el apartado de fritos' },
		],
	},
	{
		title: 'Fritos y para compartir',
		items: [
			{ name: 'Patatas fritas', note: 'en ración grande, como la caja de las fotos' },
			{ name: 'Aros de cebolla', note: 'rebozados, para picar' },
			{ name: 'Nuggets de pollo', note: 'con salsa para mojar' },
			{ name: 'Ensalada mixta', note: 'con lechuga, tomate y cebolla' },
			{ name: 'Pizza pequeña', note: 'la ración individual de la pizzería' },
			{ name: 'Salsa de ajo', note: 'para el kebab y las patatas' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Kebab y Pizzería Santutxu?',
		a: 'En Santutxu Kalea, 48004 Bilbao (Bizkaia). La ficha de Google no publica número de portal, pero sí las coordenadas 43.2543252, -2.9166637, en pleno barrio de Santutxu. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 12:30 a 23:30, y los viernes y sábados hasta las 24:00. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 666 23 49 05. El cartel de la fachada, que se ve en las fotos del perfil, muestra otro número para el servicio a domicilio, el 944 020 958. Prueba con el de la ficha y, si no contesta, con el del cartel.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. La ficha lo clasifica como «pizzería a domicilio» y el cartel de la fachada anuncia «Servicio a domicilio» con su propio teléfono, el 944 020 958. La ficha no detalla la zona ni el importe mínimo, así que se pregunta al llamar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Kebab en pan de pita, mixto, con queso y de falafel; durum normal, con queso, básico y de falafel; pizzas y pizza pequeña; hamburguesas y menús; y fritos como patatas, aros de cebolla, nuggets y pollo broster. La carta está en la ventana del local.',
	},
	{
		q: '¿La comida es halal?',
		a: 'La ficha lo clasifica como restaurante halal, así que el local se anuncia como tal. Si necesitas confirmar algún ingrediente o el tipo de carne, pregunta al hacer el pedido.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. La carta que el local tiene en la ventana los lleva impresos, pero pueden cambiar: el precio de cada plato se confirma al llamar o en la barra.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha enlaza una página del local alojada en Netlify (heartfelt-beignet-1fbd43.netlify.app), que es su web. Esta página es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona pedidos.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fotos del perfil muestran la fachada con el banco de madera en la acera y el interior con la barra y las mesas. No hay mesas fuera a la vista, así que no se puede confirmar una terraza.',
	},
];

export const LEGAL = {
	razonSocial: 'KEBAB Y PIZZERIA SANTUTXU',
	actualizado: 'Noviembre de 2026',
};
