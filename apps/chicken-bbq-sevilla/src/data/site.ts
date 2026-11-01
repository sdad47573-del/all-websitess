/**
 * Datos de CHICKEN BBQ SEVILLA — Av. de Alemania, 19, 41012 Sevilla
 * (Los Bermejales).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Chicken BBQ Sevilla: Los Bermejales,
 *   Pollo asado a la Brasa (carbon)», 37.3452325,-5.9815071,
 *   feature 0xd126f2fcdb4dbff:0x778bae87468348e0.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta, precios, página web propia, redes sociales
 * ni pedidos online. La web no inventa esos datos: lo que cuenta sale de la
 * ficha, de sus categorías y de sus reseñas.
 */

export const BUSINESS = {
	name: 'Chicken BBQ Sevilla',
	fullName: 'CHICKEN BBQ SEVILLA: LOS BERMEJALES, POLLO ASADO A LA BRASA (CARBÓN)',
	shortName: 'Chicken BBQ',
	mark: 'CB',
	street: 'Av. de Alemania, 19',
	district: 'Los Bermejales',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41012',
	country: 'ES',
	siteUrl: 'https://chicken-bbq-sevilla.vercel.app',
	geo: { lat: 37.3452325, lng: -5.9815071 },
	featureId: '0xd126f2fcdb4dbff:0x778bae87468348e0',
	placeId: 'ChIJ_9u0zS9vEg0R4EiDRoeui3c',
	plusCode: '8C9P82W9+39',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '955 38 61 30',
	phoneHref: 'tel:+34955386130',
	tagline: 'Pollo asado a la brasa en Los Bermejales',
	description:
		'Chicken BBQ Sevilla, en Av. de Alemania, 19 (Los Bermejales, 41012 Sevilla). Pollo asado a la brasa al carbón, patatas, arroz y salsa picante, con pedidos por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Chicken+BBQ+Sevilla:+Los+Bermejales,Pollo+asado+a+la+Brasa+(carbon)/@37.3452325,-5.9815071,17z/data=!4m6!3m5!1s0xd126f2fcdb4dbff:0x778bae87468348e0!8m2!3d37.3452325!4d-5.9815071!16s%2Fg%2F11gng95_hc?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3452325%2C-5.9815071',
	embed: 'https://maps.google.com/maps?q=37.3452325,-5.9815071&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3452325,-5.9815071',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.8,
	count: 135,
	label: '3,8',
};

/** Horario de la ficha: todos los días al mediodía, sin día de cierre. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:00' },
	{ dia: 'Martes', horas: '11:00–16:00' },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: '11:00–16:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que anuncian las categorías y las reseñas. */
export const SERVICIOS = [
	'Pollo a la brasa',
	'Parrilla',
	'Costillas',
	'Patatas',
	'Arroz',
	'Salsa picante',
	'A domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo a la brasa',
		text: 'La ficha lo clasifica como restaurante especializado en pollo, parrilla y barbacoa. Las reseñas lo confirman: «Pollo asado de calidad», dice una; «el pollo muy rico», otra.',
	},
	{
		title: 'Patatas y arroz',
		text: '«El pollo, las patatas y el arroz están bueníssimos», resume una de las reseñas de cinco estrellas. Es la guarnición que acompaña al pollo en la mesa.',
	},
	{
		title: 'La salsa picante',
		text: 'Otra reseña deja claro qué pedir al lado: «El pollo muy rico y la salsa picante buenísima». La ficha no publica la carta, así que el resto se pregunta al pedir.',
	},
	{
		title: 'Pedidos por teléfono',
		text: '«Formalidad al recoger los pedidos telefónicos», según otra opinión. Google lo clasifica como comida a domicilio y el canal que publica la ficha es el 955 38 61 30.',
	},
];

/** Solo lo que nombran la ficha y sus reseñas; sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado a la brasa',
				note: 'al carbón, según el nombre de la ficha',
			},
			{
				name: 'Costillas',
				note: 'la ficha lo clasifica como restaurante de costillas al estilo coreano',
			},
			{
				name: 'Parrilla',
				note: 'categoría de la ficha, junto a «zona de barbacoa»',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{
				name: 'Patatas',
				note: '«el pollo, las patatas y el arroz están bueníssimos», según una reseña',
			},
			{
				name: 'Arroz',
				note: 'la misma reseña lo pone al mismo nivel que el pollo',
			},
			{
				name: 'Salsa picante',
				note: '«buenísima», según otra de las reseñas de la ficha',
			},
		],
	},
	{
		title: 'Para casa',
		items: [
			{
				name: 'Pedidos a domicilio',
				note: 'la ficha lo clasifica como comida a domicilio; se piden por teléfono',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'El pollo, las patatas y el arroz están buenisimos',
		valor: 5,
	},
	{
		texto: 'El pollo muy rico y la salsa picante buenísima.',
		valor: 4,
	},
	{
		texto: 'Pollo asado de calidad y formalidad al recoger los pedidos telefónicos.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Chicken BBQ Sevilla?',
		a: 'En la avenida de Alemania, 19, 41012 Sevilla, en Los Bermejales. El mapa de esta página abre las coordenadas exactas (37.3452325, -5.9815071) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica horario de mediodía todos los días: de 10:00 a 16:00 el lunes y de 11:00 a 16:00 de martes a domingo. No marca ningún día de cierre. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado a la brasa al carbón, costillas, parrilla, patatas, arroz y salsa picante. La ficha no publica la carta completa ni los precios, así que la disponibilidad se confirma al pedir.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como «Comida a domicilio» y una reseña habla de «formalidad al recoger los pedidos telefónicos». El canal que publica la ficha es el teléfono, el 955 38 61 30; no consta página web ni pedidos online, así que el reparto y la zona se confirman llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No consta. La ficha de Google no incluye carta ni precios; hay que preguntar por teléfono o en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no aparcamiento adaptado ni asientos adaptados. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 3,8 sobre 5 con 135 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones que muestra elogian el pollo, las patatas, el arroz y la salsa picante, y destacan la formalidad en los pedidos por teléfono.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
