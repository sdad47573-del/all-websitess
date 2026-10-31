/**
 * Datos de Alimentación Preparada El Dorado — Calle de Palos de la Frontera, 17,
 * 28045 Madrid (Arganzuela).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Alimentación Preparada El Dorado»,
 *   40.4033348,-3.6961437, feature 0xd42262e2551b459:0xaab737f3fb412798.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia, no publica descripción del negocio,
 *   carta ni precios.
 *
 * Google registra la dirección como «C. de Palos de la Frontera, 17»; aquí se
 * usa la forma desarrollada «Calle de Palos de la Frontera, 17».
 */

export const BUSINESS = {
	name: 'El Dorado',
	fullName: 'Alimentación Preparada El Dorado',
	shortName: 'El Dorado',
	mark: 'ED',
	street: 'Calle de Palos de la Frontera, 17',
	district: 'Arganzuela',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28045',
	country: 'ES',
	siteUrl: 'https://alimentacion-preparada-el-dorado.vercel.app',
	geo: { lat: 40.4033348, lng: -3.6961437 },
	featureId: '0xd42262e2551b459:0xaab737f3fb412798',
	placeId: 'ChIJWbRRJS4mQg0RmCdB-_M3t6o',
	plusCode: '8CGRC833+8G',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '914 67 57 90',
	phoneHref: 'tel:+34914675790',
	tagline: 'Comida preparada para llevar en Arganzuela',
	description:
		'El Dorado, en Calle de Palos de la Frontera, 17 (28045 Madrid, Arganzuela). Alimentación preparada para llevar: pollo, carne, pescado, ensaladas y postres. Todos los días, de 10:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Alimentaci%C3%B3n+Preparada+El+Dorado/@40.4033348,-3.6961437,17z/data=!3m1!4b1!4m6!3m5!1s0xd42262e2551b459:0xaab737f3fb412798!8m2!3d40.4033348!4d-3.6961437!16s%2Fg%2F12qfqw7x7?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4033348%2C-3.6961437',
	embed: 'https://maps.google.com/maps?q=40.4033348,-3.6961437&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4033348,-3.6961437',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 3.2,
	count: 64,
	label: '3,2',
};

/** Horario que publica la ficha: todos los días, de 10:00 a 16:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:00' },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Alimentación preparada',
	'Comida para llevar',
	'Pollo asado',
	'Carnes preparadas',
	'Pescados preparados',
	'Ensaladas',
	'Postres',
];

export const HIGHLIGHTS = [
	{
		title: 'De todo, cada día',
		text: 'Una de las reseñas lo resume así: «tienen de todo: pollo, carne, pescado, ensaladas, postres». Esa variedad es la seña de identidad del mostrador.',
	},
	{
		title: 'El pollo',
		text: 'Otra opinión destaca el pollo por encima del resto: «rápido y variado, el pollo está buenísimo». Se vende preparado, para llevar, como el resto de la comida.',
	},
	{
		title: 'Raciones ajustadas',
		text: 'No todas las reseñas son igual de buenas: una avisa de que «las raciones pueden ser un poco pequeñas». Conviene tenerlo en cuenta al calcular la comida para un grupo.',
	},
	{
		title: '3,2 sobre 5',
		text: 'Con 64 reseñas, la ficha de Google le da 3,2 sobre 5 (octubre de 2026). Es una media por debajo de cuatro, con opiniones repartidas: quien valora la variedad y la rapidez, y quien echa en falta más ración.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Tienen de todo: pollo, carne, pescado, ensaladas, postres.',
		valor: 5,
	},
	{
		texto: 'Rápido y variado, el pollo está buenísimo.',
		valor: 4,
	},
];

/**
 * Lo que se puede deducir de la categoría y las reseñas de la ficha. No hay
 * carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'el plato que destacan las reseñas' },
			{ name: 'Medio pollo asado', note: 'para una ración individual' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Carnes a la plancha', note: 'entrecot y otras carnes, con patatas y huevos' },
			{ name: 'Guisos', note: 'de cuchara, según el día' },
			{ name: 'Arroces', note: 'con habichuelas y aguacate, como en casa' },
			{ name: 'Pescados preparados', note: 'según lo que haya en el mostrador' },
			{ name: 'Ensaladas', note: 'para completar la comida' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Flan', note: 'con caramelo, vista en las fotos del local' },
			{ name: 'Postres caseros', note: 'la variedad cambia cada día' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Dorado?',
		a: 'En la Calle de Palos de la Frontera, 17, 28045 Madrid, en el distrito de Arganzuela. Google registra la dirección como «C. de Palos de la Frontera, 17». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica todos los días, de 10:00 a 16:00. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Alimentación preparada para llevar. Las reseñas de Google mencionan pollo, carne, pescado, ensaladas y postres, con el pollo como lo más destacado. La ficha no publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 914 67 57 90. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google la clasifica como establecimiento de comida preparada. La ficha no anuncia servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. Una de las reseñas avisa además de que las raciones pueden ser pequeñas, así que conviene preguntar por teléfono qué incluye cada ración y cuánto cuesta.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo publica que no hay aparcamiento adaptado para sillas de ruedas y no aclara si la entrada es accesible. Conviene llamar antes si necesitas ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,2 sobre 5 con 64 reseñas en el momento de consultarla (31 de octubre de 2026). Es una media baja para lo habitual en el barrio, con opiniones muy repartidas: unas elogian la variedad y la rapidez y otras se quejan del tamaño de las raciones.',
	},
];
