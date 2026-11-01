/**
 * Datos de MYCORNER SUNSET • Brunch & Cocktails — Edifici Quars, Av. Consell
 * d'Europa, 14, planta baja, AD500 Andorra la Vella (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «MYCORNER SUNSET • Brunch & Cocktails»,
 *   42.508846,1.529973, feature 0x12a58b8c4f0d4b89:0x905b81acf02aca08.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,7 · 90 reseñas).
 * - Platos y bebidas: fotos del perfil del local (brunch de salmón y huevos,
 *   gofre, bocadillo, patatas, piña colada, matcha y cafés).
 *
 * No hay carta publicada ni precios en la ficha: no se copian importes.
 */

export const BUSINESS = {
	name: 'MYCORNER SUNSET',
	fullName: 'MYCORNER SUNSET • Brunch & Cocktails',
	shortName: 'MYCORNER SUNSET',
	mark: 'MS',
	street: "Av. Consell d'Europa, 14 (Edifici Quars, planta baja)",
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://mycorner-sunset.vercel.app',
	geo: { lat: 42.508846, lng: 1.529973 },
	featureId: '0x12a58b8c4f0d4b89:0x905b81acf02aca08',
	placeId: 'ChIJiUsNT4yLpRIRCMoq8KyBW5A',
	googleCategory: 'Restaurante de brunch',
	phone: '+376 828 800',
	phoneHref: 'tel:+376828800',
	tagline: 'Brunch y coctelería en Andorra la Vella',
	description:
		'MYCORNER SUNSET • Brunch & Cocktails, en la Av. Consell d\'Europa, 14 (Edifici Quars, planta baja), AD500 Andorra la Vella. Brunch todo el día, gofres, bocadillos, matcha y cócteles en un local acristalado con neón rosa. 4,7 sobre 5 con 90 reseñas. Abre todos los días de 9:30 a 21:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/MYCORNER+SUNSET+%E2%80%A2+Brunch+%26+Cocktails/@42.508846,1.529973,17z/data=!4m6!3m5!1s0x12a58b8c4f0d4b89:0x905b81acf02aca08!8m2!3d42.508846!4d1.529973!16s%2Fg%2F11yg_lr005?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.508846%2C1.529973',
	embed: 'https://maps.google.com/maps?q=42.508846,1.529973&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.508846,1.529973',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.7,
	count: 90,
	label: '4,7',
};

/** Horario que publica la ficha: todos los días, de 9:30 a 21:30. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:30–21:30' },
	{ dia: 'Martes', horas: '9:30–21:30' },
	{ dia: 'Miércoles', horas: '9:30–21:30' },
	{ dia: 'Jueves', horas: '9:30–21:30' },
	{ dia: 'Viernes', horas: '9:30–21:30' },
	{ dia: 'Sábado', horas: '9:30–21:30' },
	{ dia: 'Domingo', horas: '9:30–21:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar en festivos; confírmalo por teléfono antes de ir.';

export const SERVICIOS = [
	'Brunch',
	'Gofres',
	'Bocadillos',
	'Café de especialidad',
	'Matcha',
	'Cócteles',
	'Terraza',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Brunch a cualquier hora',
		text: 'La ficha lo clasifica como «restaurante de brunch» y abre de 9:30 a 21:30 todos los días, sin descanso: se puede desayunar tarde, comer huevos benedictinos a media tarde o tomar el último café antes de cenar.',
	},
	{
		title: 'Huevos, salmón y aguacate',
		text: 'Los platos que más aparecen en el perfil son huevos fritos con salmón ahumado, aguacate y tostadas, servidos en el mismo plato con ensalada. También hay bocadillos en pan de ciabatta con patatas, y hamburguesa con patatas y zanahoria frita.',
	},
	{
		title: 'Dulce y café de especialidad',
		text: 'El gofre llega cubierto de chocolate, crema de cacahuete y fresas con azúcar glas. Para beber hay matcha latte con dibujo en la espuma, flat white, café helado y zumos verdes, además de la coctelería de la casa.',
	},
	{
		title: 'Cócteles al atardecer',
		text: 'De ahí el nombre: la piña colada se sirve en vaso alto con piña deshidratada, y junto a ella aparecen margaritas y otros cócteles de fruta. El local es acristalado, con neón rosa de MYCORNER y sofás corridos junto al ventanal.',
	},
];

/**
 * Lo que se ve en las fotos del perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Brunch',
		items: [
			{ name: 'Huevos con salmón y aguacate', note: 'dos huevos, salmón ahumado, aguacate, tostadas y ensalada' },
			{ name: 'Tostada con huevo y aguacate', note: 'pan de semillas, huevo y aguacate' },
			{ name: 'Huevos fritos con hierbas', note: 'con pan tostado y ensalada' },
			{ name: 'Bocadillo de ciabatta', note: 'con patatas fritas y ensalada' },
			{ name: 'Hamburguesa', note: 'con patatas y zanahoria frita' },
		],
	},
	{
		title: 'Dulce',
		items: [
			{ name: 'Gofre', note: 'con chocolate, crema de cacahuete, fresas y azúcar glas' },
			{ name: 'Repostería del día', note: 'lo que haya en el mostrador' },
		],
	},
	{
		title: 'Cafés y matcha',
		items: [
			{ name: 'Matcha latte', note: 'con dibujo en la espuma; también en versión fresa' },
			{ name: 'Flat white', note: 'café de especialidad, servido en taza de la casa' },
			{ name: 'Café helado', note: 'con hielo, para el verano' },
			{ name: 'Zumos verdes', note: 'recién hechos, en vaso alto' },
		],
	},
	{
		title: 'Cócteles',
		items: [
			{ name: 'Piña colada', note: 'en vaso alto, con piña deshidratada' },
			{ name: 'Margarita', note: 'servida en copa, con borde de sal' },
			{ name: 'Cócteles de fruta', note: 'la carta cambia; se pregunta en la barra' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está MYCORNER SUNSET?',
		a: "En la Avinguda del Consell d'Europa, 14, planta baja del Edifici Quars, AD500 Andorra la Vella (Principado de Andorra). La ficha de Google sitúa el local en las coordenadas 42.508846, 1.529973, en un local acristalado a pie de calle con el neón rosa de MYCORNER.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 9:30 a 21:30, sin día de descanso. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 828 800. El local no tiene web propia ni reservas online, así que el teléfono es la vía para preguntar por la carta, reservar o encargar para llevar.',
	},
	{
		q: '¿Sirve brunch todo el día?',
		a: 'La ficha lo clasifica como restaurante de brunch y el horario va de 9:30 a 21:30 de forma continua, así que los platos de brunch se sirven a lo largo de toda la jornada, no solo por la mañana.',
	},
	{
		q: '¿Hay cócteles?',
		a: 'Sí, forma parte del nombre del local. En las fotos del perfil aparecen piña colada en vaso alto con piña deshidratada, margaritas y otros cócteles de fruta. La carta cambia, así que lo mejor es preguntar en la barra.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. El local está a pie de calle y en el perfil se ven mesas redondas blancas en la acera, además de los sofás corridos junto al ventanal dentro.',
	},
	{
		q: '¿Hay opciones sin gluten o vegetarianas?',
		a: 'La ficha no publica carta ni alérgenos, así que no se puede confirmar desde aquí. Con platos de huevos, aguacate, ensalada y tostadas hay margen, pero conviene preguntar por teléfono o en el local antes de pedir.',
	},
	{
		q: '¿Se puede ir a trabajar o estudiar?',
		a: 'La ficha no da datos de wifi ni de enchufes. Lo que sí se ve en el perfil es un local amplio, con sofás y mesas de mármol verde, cómodo para una comida larga; para trabajar conviene preguntar por el wifi al llegar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. En el perfil hay una foto de un ticket con importes, pero puede estar desactualizado: los precios se consultan en el local.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'MYCORNER SUNSET • Brunch & Cocktails',
	actualizado: 'Noviembre de 2026',
};
