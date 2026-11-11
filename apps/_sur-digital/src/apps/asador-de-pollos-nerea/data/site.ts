/**
 * Datos de Asador de Pollos Nerea — Juan de Garay Kalea, 57
 * (Ibaiondo, 48003 Bilbao, Bizkaia).
 *
 * Fuentes consultadas en noviembre de 2026:
 * - Ficha pública de Google Maps: nombre, dirección, teléfono, categoría y nº de reseñas.
 * - Carta de Glovo: platos, precios y agrupaciones (asados, raciones, ensaladas…).
 * - Uber Eats y Just Eat: composición de los menús y de las raciones.
 * - Perfil del negocio en Instagram: horario de lunes a viernes.
 *
 * Lo que las fuentes NO publican de forma fiable y esta web no inventa:
 * - La nota media en estrellas: los directorios dan cifras incompatibles entre sí
 *   (8/10 con 662 opiniones en un agregador, 5/5 con 78 en otro). Se cita el número
 *   de opiniones y reseñas textuales, sin media.
 * - El horario de sábado y domingo.
 */

export const BUSINESS = {
	name: 'Asador de Pollos Nerea',
	fullName: 'Asador de Pollos Nerea',
	shortName: 'Nerea',
	mark: 'N',
	street: 'Juan de Garay Kalea, 57',
	locality: 'Ibaiondo',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-de-pollos-nerea',
	googleCategory: 'Asador de pollos',
	phone: '944 43 53 36',
	phoneHref: 'tel:+34944435336',
	tagline: 'Pollo asado y recetas de casa en Ibaiondo, Bilbao',
	description:
		'Asador de Pollos Nerea, en Juan de Garay Kalea, 57 (Ibaiondo, 48003 Bilbao). Pollo asado, codillo, raciones y recetas caseras para recoger o pedir a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos+Nerea/@43.2532,-2.9342,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4e2b1a7a3645:0x4336e85646f682ef!8m2!3d43.2532!4d-2.9342!16s%2Fg%2F1tgqkr4z?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Asador+de+Pollos+Nerea/@43.2532,-2.9342,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4e2b1a7a3645:0x4336e85646f682ef!8m2!3d43.2532!4d-2.9342!16s%2Fg%2F1tgqkr4z?authuser=0&hl=es&entry=ttu',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=Juan+de+Garay+Kalea+57%2C+48003+Bilbao',
	embed: 'https://maps.google.com/maps?q=Juan+de+Garay+Kalea+57,+48003+Bilbao&z=17&hl=es&output=embed',
	glovo: 'https://glovoapp.com/es/es/bilbao/stores/asador-de-pollos-nerea',
	facebook: 'https://www.facebook.com/asadorNereaBilbao',
};

/** Reseñas publicadas en la ficha de Google (cifra del agregador, noviembre de 2026). */
export const REVIEWS = {
	count: 662,
	label: '662',
	updated: 'noviembre de 2026',
};

/** Citas textuales de reseñas de Google recogidas por el agregador GastroRanking. */
export const RESENAS = [
	{
		texto: 'Pollo riquísimo y las patatas también. Precio calidad estupendos.',
		autor: 'Nat R.',
		fecha: 'noviembre de 2025',
	},
	{
		texto:
			'Acababa de llegar a Bilbao y compramos para comer, la mejor decisión: pasar a Nerea, buena atención y rápida, estaba todo exquisito.',
		autor: 'Itziar',
		fecha: 'noviembre de 2025',
	},
];

/** Horario tal y como lo anuncia el negocio en su perfil de Instagram. */
export const HORARIO = [
	{ dia: 'Lunes a viernes', horas: '9:30 – 22:00' },
	{ dia: 'Sábado', horas: 'No consta' },
	{ dia: 'Domingo', horas: 'No consta' },
];

export const HORARIO_NOTA =
	'El horario de lunes a viernes es el que publica el propio negocio en su perfil de Instagram (noviembre de 2026). Para el fin de semana no consta horario en las fuentes consultadas: antes de acercarte, llama al 944 43 53 36 o mira la ficha de Google.';

/** Lo que la ficha y la carta permiten afirmar del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Recetas caseras',
	'Recogida en el local',
	'Reparto con Glovo',
	'Ibaiondo · Bilbao',
];

export const HIGHLIGHTS = [
	{
		title: 'El asador',
		text:
			'Pollo asado y medio pollo, además de codillo. El pollo entero figura a 15,20 € y el medio a 9,20 € en la carta de reparto.',
	},
	{
		title: 'Recetas de casa',
		text:
			'Además del asado, la carta mantiene guisos de siempre: lengua en salsa, albóndigas, callos y carrilleras de ternera.',
	},
	{
		title: 'Recoger o recibirlo',
		text:
			'Se puede recoger en el local o pedir a domicilio por Glovo y Just Eat. Para encargos y dudas, el teléfono del negocio.',
	},
];

/**
 * Carta publicada en la plataforma de reparto Glovo (noviembre de 2026).
 * Los precios son los de esa carta y pueden variar.
 */
export const MENU = [
	{
		title: 'Asados',
		items: [
			{ name: 'Pollo Asado Nerea', price: '15,20 €', note: 'Pollo entero asado' },
			{ name: 'Medio Pollo Nerea', price: '9,20 €', note: 'Medio pollo asado' },
			{ name: 'Codillo asado', price: '20,90 €', note: '' },
		],
	},
	{
		title: 'Raciones',
		items: [
			{ name: 'Croquetas de jamón ibérico', price: '8,80 €', note: '6 unidades' },
			{ name: 'Alitas de pollo', price: '7,50 €', note: '6 unidades' },
			{ name: 'Morcilla', price: '7,50 €', note: 'Frita' },
			{ name: 'Pimientos verdes', price: '6,90 €', note: 'Docena' },
			{ name: 'Patatas rancheras', price: '5,80 €', note: '' },
			{ name: 'Patatas fritas', price: '5,20 €', note: '' },
			{ name: 'Nuggets de pollo', price: '4,90 €', note: '6 unidades' },
		],
	},
	{
		title: 'Recetas de casa',
		items: [
			{ name: 'Lengua en salsa', price: '', note: 'Sin precio publicado' },
			{ name: 'Albóndigas', price: '', note: 'Ración de unos 250 g' },
			{ name: 'Callos', price: '', note: 'Ración de unos 250 g' },
			{ name: 'Carrilleras de ternera', price: '', note: 'Ración de unos 250 g' },
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{
				name: 'Ensalada mixta',
				price: '11,90 €',
				note: 'Lechuga, tomate, cebolla, huevo cocido, espárragos, aceitunas y atún',
			},
			{ name: 'Ensaladilla rusa', price: '10,50 €', note: 'Patata, huevo cocido y atún' },
		],
	},
	{
		title: 'Menús',
		items: [
			{
				name: 'Menú 1',
				price: '',
				note: 'Medio pollo, patatas pequeñas y 3 croquetas',
			},
			{
				name: 'Menú 2',
				price: '',
				note: 'Pollo asado, patatas, pimientos y ensalada',
			},
			{
				name: 'Menú 3',
				price: '',
				note: 'Codillo asado, patatas, pimientos y ensalada',
			},
		],
	},
];

export const MENU_NOTA =
	'Platos y precios de la carta que el negocio publica en Glovo (consultada en noviembre de 2026). Pueden cambiar y no incluyen suplementos; los menús, las recetas de casa y las raciones no llevan precio en esa carta. Confirma el importe al encargar.';

export const FAQ = [
	{
		q: '¿Dónde está Asador de Pollos Nerea?',
		a: 'En Juan de Garay Kalea, 57, en el barrio de Ibaiondo (Bilbao La Vieja), 48003 Bilbao. La parada de Cercanías Miribilla queda a unos 260 metros del local.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Lo más directo es llamar al 944 43 53 36. El negocio también está en Glovo y en Just Eat, así que se puede pedir a domicilio o recoger en el local.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 9:30 a 22:00, según el horario que publica el propio negocio en su perfil de Instagram. Para sábado y domingo no consta horario en las fuentes consultadas: conviene llamar antes de ir.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El local funciona sobre todo con recogida y reparto, y su perfil de Facebook anuncia terraza. No consta un comedor con servicio de mesa, así que si quieres sentarte, pregunta por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado entero o medio, codillo, raciones (croquetas, alitas, morcilla, pimientos, patatas), ensaladas y recetas de casa como lengua en salsa, albóndigas, callos o carrilleras de ternera.',
	},
	{
		q: '¿Cuánto cuesta el pollo asado?',
		a: 'En la carta de reparto consultada, el pollo entero figura a 15,20 € y el medio pollo a 9,20 €. Los precios pueden cambiar; confírmalos al encargar.',
	},
	{
		q: '¿Hay menús completos?',
		a: 'Sí. El menú 1 combina medio pollo, patatas pequeñas y tres croquetas; el menú 2, pollo asado con patatas, pimientos y ensalada; y el menú 3 cambia el pollo por codillo asado.',
	},
];
