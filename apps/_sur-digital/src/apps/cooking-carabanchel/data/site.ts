/**
 * Datos de COOKING - Comida casera para llevar - Pollos asados —
 * C. de Salvador Allende, 34, Carabanchel, 28054 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «COOKING - Comida casera para llevar -
 *   Pollos asados», 40.3613682,-3.758145,
 *   feature 0xd4189cdc159c387:0x4cb0859beb15e73d.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad, descripción y galería: ficha pública de Google consultada
 *   en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta con precios, página web, redes sociales,
 * encargos, reparto a domicilio ni pedidos online.
 */

export const BUSINESS = {
	name: 'COOKING',
	fullName: 'COOKING',
	shortName: 'COOKING',
	mark: 'CK',
	street: 'C. de Salvador Allende, 34',
	district: 'Carabanchel',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28054',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/cooking-carabanchel',
	geo: { lat: 40.3613682, lng: -3.758145 },
	featureId: '0xd4189cdc159c387:0x4cb0859beb15e73d',
	placeId: 'ChIJh8NZwc2JQQ0RPecV65uFsEw',
	plusCode: '8CGR966R+GP',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '915 11 46 57',
	phoneHref: 'tel:+34915114657',
	tagline: 'Comida casera y pollos asados en Carabanchel',
	description:
		'COOKING, en C. de Salvador Allende, 34 (Carabanchel, 28054 Madrid). Comida casera para llevar, pollos asados, paellas y arroces, pescados y ensaladas, elaborados a diario.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/COOKING+-+Comida+casera+para+llevar+-+Pollos+asados/@40.3613682,-3.758145,17z/data=!3m1!4b1!4m6!3m5!1s0xd4189cdc159c387:0x4cb0859beb15e73d!8m2!3d40.3613682!4d-3.758145!16s%2Fg%2F1q5bsdcfx?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJh8NZwc2JQQ0RPecV65uFsEw&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3613682%2C-3.758145',
	embed: 'https://maps.google.com/maps?q=40.3613682,-3.758145&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3613682,-3.758145',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.2,
	count: 120,
	label: '3,2',
};

/** La ficha publica el mismo horario para todos los días. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:00' },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que anuncia la ficha y lo que muestran las reseñas. */
export const SERVICIOS = [
	'Comida casera',
	'Pollos asados',
	'Paellas y arroces',
	'Pescados',
	'Ensaladas',
	'Para llevar',
];

/**
 * Sin exagerar: la nota de Google es 3,2 con 120 reseñas. Las tres que muestra
 * la ficha son de 4 y 5 estrellas, y se reproducen tal cual.
 */
export const HIGHLIGHTS = [
	{
		title: 'Elaborado a diario',
		text: 'La descripción de la ficha lo dice: «Comida casera para llevar. Pollos asados, paellas y arroces, pescados, ensaladas. Gran variedad de platos elaborados a diario».',
	},
	{
		title: 'Pollo asado y arroces',
		text: 'El asador de pollos es la base de la casa, con paellas y arroces al lado. Una reseña lo llama «asador de pollos de siempre»; otra elogia el arroz y el bacalao.',
	},
	{
		title: 'Para llevar, sin rodeos',
		text: 'La ficha lo clasifica como restaurante de comida para llevar y la reseña más reciente lo resume: «Rápido y con buen gusto en los menús que ofrecen».',
	},
	{
		title: 'Croquetas, ensaladilla y albóndigas',
		text: '«Pedimos croquetas, ensaladilla y albóndigas de pollo y todo bastante bien», cuenta una de las reseñas de cuatro estrellas que muestra Google.',
	},
];

/** Solo lo que publican la ficha y las reseñas; sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'la especialidad que anuncia la ficha' },
			{ name: 'Paellas y arroces', note: 'en la descripción del local' },
		],
	},
	{
		title: 'Casero',
		items: [
			{ name: 'Pescados', note: '«el arroz y el bacalao han gustado mucho», cuenta una reseña' },
			{ name: 'Ensaladas', note: 'en la descripción de la ficha' },
			{ name: 'Croquetas y ensaladilla', note: 'pedidas en una de las reseñas' },
			{ name: 'Albóndigas de pollo', note: 'también en esa misma reseña' },
			{
				name: 'Platos de puchero · 3,30 €/ración',
				note: 'patatas con costillas, callos, cocido madrileño y patatas con bacalao, según el cartel del escaparate',
			},
			{ name: 'Potaje de los viernes', note: 'lo anuncia el toldo de la fachada' },
		],
	},
	{
		title: 'Para llevar',
		items: [
			{ name: 'Menús del día', note: '«rápido y con buen gusto en los menús», dice una reseña' },
			{ name: 'Mini menú · 4,95 €', note: 'según el cartel del escaparate' },
			{ name: 'Maxi menú · 6,95 €', note: 'según el cartel del escaparate' },
			{ name: 'Platos elaborados a diario', note: 'la ficha habla de «gran variedad»' },
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Pedimos croquetas; ensaladilla y albóndigas de pollo y todo bastante bien.',
		valor: 4,
	},
	{
		texto: 'El arroz y el bacalao han gustado mucho a mis padres.',
		valor: 5,
	},
	{
		texto: 'Rápido y con buen gusto en los menús que ofrecen, asador de pollos de siempre',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está COOKING?',
		a: 'En la calle de Salvador Allende, 34, Carabanchel, 28054 Madrid. El mapa de esta página abre las coordenadas exactas (40.3613682, -3.758145) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 10:00 a 16:00 todos los días, también sábado y domingo. El domingo 1 de noviembre avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar: pollos asados, paellas y arroces, pescados y ensaladas, con platos elaborados a diario. Las reseñas nombran croquetas, ensaladilla, albóndigas de pollo y bacalao. La ficha no publica la carta completa ni los precios.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica una carta con precios, pero el escaparate anuncia un mini menú por 4,95 €, un maxi menú por 6,95 € y platos de puchero a 3,30 € la ración. Son los importes del cartel de las fotos y pueden cambiar; se confirman por teléfono.',
	},
	{
		q: '¿Es solo para llevar?',
		a: 'Google lo clasifica como restaurante de comida para llevar; la ficha no describe sala ni servicio en mesa. Todo lo que se publica apunta a recoger el pedido en el local.',
	},
	{
		q: '¿Hay reparto a domicilio o pedidos online?',
		a: 'La ficha no publica reparto a domicilio, página web ni pedidos online. El único canal que aparece es el teléfono, el 915 11 46 57, así que la recogida y cualquier reparto se confirman llamando.',
	},
	{
		q: '¿Se pueden encargar pollos o paellas?',
		a: 'La ficha anuncia pollos asados y paellas, pero no publica encargos, mínimos ni plazos. Se consulta por teléfono antes de contar con ello.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca que no hay acceso para sillas de ruedas, ni aparcamiento adaptado, ni asientos adaptados. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 3,2 sobre 5 con 120 reseñas en el momento de consultar la ficha (octubre de 2026). No es una nota alta: las tres opiniones que muestra son de cuatro y cinco estrellas, pero el conjunto de la ficha incluye valoraciones más bajas.',
	},
];
