/**
 * Datos de Zampa Zampa Comida para llevar — Calle del Sauce, 14,
 * 28016 Madrid (Chamartín).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Zampa Zampa Comida para llevar»,
 *   40.4533212,-3.6686108, feature 0xd4229006f9e060d:0x454b31733f3394ad.
 * - Nombre, dirección, teléfono, valoración, horario y reseñas: ficha pública
 *   de Google consultada el 31 de octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta, precios ni datos de
 *   accesibilidad. Los platos que se citan son los que mencionan las reseñas
 *   y los que aparecen en las fotos del propio perfil.
 *
 * Google registra la dirección como «C. del Sauce, 14»; aquí se usa la forma
 * desarrollada «Calle del Sauce, 14».
 */

export const BUSINESS = {
	name: 'Zampa Zampa',
	fullName: 'Zampa Zampa Comida para llevar',
	shortName: 'Zampa Zampa',
	mark: 'ZZ',
	street: 'Calle del Sauce, 14',
	district: 'Chamartín',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28016',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/zampa-zampa-comida-para-llevar',
	geo: { lat: 40.4533212, lng: -3.6686108 },
	featureId: '0xd4229006f9e060d:0x454b31733f3394ad',
	placeId: 'ChIJDQaebwApQg0RrZQzP3MxS0U',
	plusCode: '8CGRF83J+8H',
	googleCategory: 'Proveedor mayorista de alimentos y bebidas',
	phone: '629 38 59 88',
	phoneHref: 'tel:+34629385988',
	tagline: 'Comida casera para llevar en Chamartín',
	description:
		'Zampa Zampa, en Calle del Sauce, 14 (28016 Madrid, Chamartín). Comida casera para llevar con raciones abundantes: gnocchis, pollo al curry con arroz y los guisos del día. De miércoles a viernes, de 11:00 a 16:00, y sábados de 10:30 a 14:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Zampa+Zampa+Comida+para+llevar/@40.4533212,-3.6686108,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229006f9e060d:0x454b31733f3394ad!8m2!3d40.4533212!4d-3.6686108!16s%2Fg%2F11xw3ww4gn?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4533212%2C-3.6686108',
	embed: 'https://maps.google.com/maps?q=40.4533212,-3.6686108&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4533212,-3.6686108',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 42,
	label: '4,9',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: '10:30–14:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Comida casera',
	'Carta del día',
	'Raciones abundantes',
	'Ensaladilla rusa',
	'Callos con garbanzos',
	'Postres caseros',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Carta del día',
		text: 'La pizarra del local cambia cada día. La del sábado 31 de octubre tiene diecisiete platos, de los boquerones en vinagre al strudel de manzana, y casi todos por ración.',
	},
	{
		title: 'Ensaladilla y salmorejo',
		text: 'Los clásicos de cuchara abren la carta: salmorejo (6,00 €), crema de verduras (5,50 €), ensaladilla rusa (7,00 €) y ensalada de lentejas, calabaza y queso (7,50 €).',
	},
	{
		title: 'Guisos de los de siempre',
		text: 'Callos con garbanzos (8,00 €), albóndigas de pollo con salsa tikka masala (8,50 €), costillas al horno con puré de boniato (9,00 €) y cazón encebollado (9,50 €).',
	},
	{
		title: '4,9 sobre 5',
		text: 'Con 42 reseñas, la ficha de Google le da 4,9 sobre 5 (octubre de 2026). Las opiniones insisten en las raciones abundantes y en el buen precio.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'La comida está buenísima, la raciones son muy abundantes y a muy buen precio.',
		valor: 5,
	},
	{
		texto: 'Me llevé gnocchis y pollo con curry y arroz.',
		valor: 5,
	},
	{
		texto: 'Comida casera muy muy rica a muy buen precio, volveremos 100%!!',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Zampa Zampa?',
		a: 'En la Calle del Sauce, 14, 28016 Madrid, en el distrito de Chamartín. Google registra la dirección como «C. del Sauce, 14». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a viernes, de 11:00 a 16:00, y el sábado de 10:30 a 14:00. Domingo, lunes y martes está cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar con raciones abundantes. La carta que se ve en las fotos del perfil, la del sábado 31 de octubre, incluye salmorejo, crema de verduras, ensaladilla rusa, boquerones en vinagre, callos con garbanzos, albóndigas de pollo con salsa tikka masala, costillas al horno con puré de boniato, cazón encebollado, arroz con leche y strudel de manzana, entre otros. La pizarra cambia cada día, así que conviene preguntar por teléfono qué hay.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 629 38 59 88. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre de la ficha es «Zampa Zampa Comida para llevar» y la descripción que publica es «tienda de comida casera para llevar». La ficha no anuncia servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'En la pizarra del sábado 31 de octubre las raciones van de 5,00 € (empanada de atún y pisto, arroz con leche o strudel de manzana) a 9,50 € (boquerones en vinagre o cazón encebollado). El filete ruso cuesta 4,80 € por unidad. Los precios cambian con la carta del día, así que confírmalos al pedir.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha no publica reparto a domicilio ni plataformas de entrega asociadas. Lo que consta es la recogida en el local y el teléfono de contacto.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas acceso para silla de ruedas o ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 42 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian las raciones, el precio y que la comida es casera.',
	},
];

/**
 * Carta de la pizarra fotografiada en el perfil de Google (sábado 31 de
 * octubre de 2026). La pizarra se reescribe cada día; los precios son los de
 * esa foto y van por ración salvo donde se indica.
 */
export const MENU = [
	{
		title: 'Entrantes y ensaladas',
		items: [
			{ name: 'Salmorejo', note: 'ración', price: '6,00 €' },
			{ name: 'Crema de verduras', note: 'ración', price: '5,50 €' },
			{ name: 'Pastel de coliflor y brócoli', note: 'ración', price: '7,00 €' },
			{ name: 'Lasaña de calabacín y espinacas', note: 'ración', price: '8,50 €' },
			{ name: 'Ensalada de lentejas, calabaza y queso', note: 'ración', price: '7,50 €' },
			{ name: 'Ensaladilla rusa', note: 'ración', price: '7,00 €' },
			{ name: 'Ensalada de quinoa', note: 'ración', price: '7,00 €' },
			{ name: 'Boquerones en vinagre', note: 'ración', price: '9,50 €' },
			{ name: 'Empanada de atún y pisto', note: 'ración', price: '5,00 €' },
		],
	},
	{
		title: 'Platos principales',
		items: [
			{ name: 'Pimientos rellenos de bacalao y langostino', note: 'ración', price: '8,50 €' },
			{ name: 'Callos con garbanzos', note: 'ración', price: '8,00 €' },
			{ name: 'Filete ruso', note: 'unidad', price: '4,80 €' },
			{ name: 'Albóndigas de pollo con salsa tikka masala', note: 'ración', price: '8,50 €' },
			{ name: 'Costillas al horno con puré de boniato', note: 'ración', price: '9,00 €' },
			{ name: 'Cazón encebollado', note: 'ración', price: '9,50 €' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Arroz con leche', note: 'ración', price: '5,00 €' },
			{ name: 'Strudel de manzana', note: 'ración', price: '5,00 €' },
		],
	},
];
