/**
 * Datos de Tastic (Hot Pizza & Hot Stuff) — Carrer Dr. Vilanova, 13,
 * Andorra la Vella (AD500).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Tastic (Hot Pizza & Hot Stuff)»,
 *   42.5060766,1.5216047, feature 0x12a58b5d62be493d:0xf68125399ad7342f.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, Plus Code,
 *   accesibilidad y fotos: respuesta pública de la ficha de Google consultada
 *   el 1 de noviembre de 2026 (4,2 · 149 reseñas).
 *
 * Avisos importantes:
 * - Google la clasifica solo como «Pizzería», aunque el nombre comercial añade
 *   «Hot Pizza & Hot Stuff». La ficha no publica carta ni precios: la web no
 *   los inventa.
 * - Cierra los domingos y el sábado solo abre hasta las 16:00.
 */

export const BUSINESS = {
	name: 'Tastic (Hot Pizza & Hot Stuff)',
	fullName: 'Tastic (Hot Pizza & Hot Stuff)',
	shortName: 'Tastic',
	mark: 'T',
	street: 'Carrer Dr. Vilanova, 13',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/tastic',
	geo: { lat: 42.5060766, lng: 1.5216047 },
	featureId: '0x12a58b5d62be493d:0xf68125399ad7342f',
	placeId: 'ChIJPUm-Yl2LpRIRLzTXmjklgfY',
	plusCode: 'GG4C+CJ Andorra la Vella',
	googleCategory: 'Pizzería',
	phone: '+376 845 578',
	phoneHref: 'tel:+376845578',
	tagline: 'Pizza al corte y comida caliente en Andorra la Vella',
	description:
		'Tastic (Hot Pizza & Hot Stuff), en el Carrer Dr. Vilanova, 13, de Andorra la Vella (AD500). Pizzería de pizza al corte y comida caliente, con 4,2 sobre 5 y 149 reseñas en Google. Abre de 8:00 a 20:00 de lunes a viernes, el sábado de 9:00 a 16:00 y cierra los domingos.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tastic+(Hot+Pizza+%26+Hot+Stuff)/@42.5060766,1.5216047,17z/data=!4m6!3m5!1s0x12a58b5d62be493d:0xf68125399ad7342f!8m2!3d42.5060766!4d1.5216047!16s%2Fg%2F11sg7ztxkc?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5060766%2C1.5216047',
	embed: 'https://maps.google.com/maps?q=42.5060766,1.5216047&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5060766,1.5216047',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 149,
	label: '4,2',
};

/** Horario que publica la ficha: entre semana de 8:00 a 20:00, domingo cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–20:00' },
	{ dia: 'Martes', horas: '8:00–20:00' },
	{ dia: 'Miércoles', horas: '8:00–20:00' },
	{ dia: 'Jueves', horas: '8:00–20:00' },
	{ dia: 'Viernes', horas: '8:00–20:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El domingo cierra todo el día.';

export const SERVICIOS = [
	'Pizzería',
	'Pizza al corte',
	'Comida caliente',
	'Para llevar',
	'Andorra la Vella',
	'Abierto de 8:00 a 20:00',
	'Acceso para sillas de ruedas',
	'4,2 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Pizza al corte',
		text: 'Google la clasifica como «Pizzería», y el nombre comercial —Hot Pizza & Hot Stuff— apunta a porciones recién hechas y comida caliente para tomar al momento. La ficha no publica carta ni precios.',
	},
	{
		title: 'De la mañana a la tarde',
		text: 'Abre a las 8:00 y cierra a las 20:00 de lunes a viernes: cubre desayuno, almuerzo y merienda. El sábado abre de 9:00 a 16:00 y el domingo descansa.',
	},
	{
		title: 'En el centre de la capital',
		text: 'Está en el Carrer Dr. Vilanova, 13, en el centro de Andorra la Vella (AD500), a pocos pasos de la avenida Meritxell. Plus Code GG4C+CJ.',
	},
	{
		title: '149 opiniones',
		text: 'La ficha reúne 149 reseñas con una media de 4,2 sobre 5 (noviembre de 2026). Es una muestra amplia para un local de calle: hay opiniones buenas y alguna que no lo es tanto.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tastic?',
		a: 'En el Carrer Dr. Vilanova, 13, de Andorra la Vella (AD500), en las coordenadas 42.5060766, 1.5216047 y Plus Code GG4C+CJ. Es una calle del centro de la capital, a pocos minutos de la avenida Meritxell, la principal comercial de la parroquia. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de 8:00 a 20:00 de lunes a viernes, el sábado de 9:00 a 16:00 y cierra los domingos. La ficha advierte de que en festivos —por ejemplo el Día de Todos los Santos— el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 845 578. Es la vía para preguntar por la carta, encargar o confirmar el horario un día concreto; esta web no gestiona pedidos.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google la clasifica como «Pizzería»; el nombre completo, «Tastic (Hot Pizza & Hot Stuff)», habla de pizza caliente y comida caliente para tomar al momento. La ficha no publica carta ni precios, así que el surtido real se consulta por teléfono o en el mostrador.',
	},
	{
		q: '¿Tiene menú o precios publicados?',
		a: 'No. Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos, las porciones y los precios se preguntan en el +376 845 578 o directamente en el local.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'El formato de pizza al corte y comida caliente se presta a ello, y el teléfono de la ficha es el +376 845 578, pero Google no publica el servicio de comida para llevar ni el de reparto. Conviene confirmarlo al llamar antes de contar con ello.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. La ficha no publica datos de aparcamiento adaptado ni del interior del local.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,2 sobre 5 con 149 reseñas (consultado el 1 de noviembre de 2026). Es una media con bastantes opiniones, así que refleja la experiencia habitual: buena, con margen para opiniones de todo tipo.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No: la ficha marca el domingo como día de cierre. El sábado el horario se acorta, de 9:00 a 16:00.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos ni reservas y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

/**
 * Carta leída en las pizarras del local que aparecen en las fotos del perfil de
 * Google (consultadas el 1 de noviembre de 2026). La ficha no tiene carta
 * publicada; los importes son los de esas pizarras y pueden cambiar.
 */
export const MENU = [
	{
		title: 'Per picar',
		items: [
			{ name: 'Empanada', note: 'una empanada de la vitrina', price: '2,65 €' },
			{ name: 'Pack 6 empanades', note: 'seis empanadas para llevar', price: '12,00 €' },
			{ name: 'Pack 12 empanades', note: 'una docena de empanadas', price: '23,00 €' },
			{
				name: 'Burrito de vedella',
				note: 'burrito de ternera; también de pollastre o vegetal, al mismo precio',
				price: '5,95 €',
			},
			{ name: 'Burger', note: 'hamburguesa de la casa; el pack con patatas y bebida, 8,50 €', price: '6,50 €' },
		],
	},
	{
		title: 'Pizza',
		items: [
			{ name: 'Porció de pizza', note: 'un corte de pizza al momento', price: '2,50 €' },
			{
				name: 'Pizza + beguda',
				note: 'pizza de la carta con una bebida',
				price: '10,95 €',
			},
			{
				name: 'Pack pizza + 3 empanades + 2 begudes',
				note: 'el pack de la pizarra, para compartir o para llevar',
				price: '16,95 €',
			},
		],
	},
	{
		title: 'Menú esmorzar',
		items: [
			{ name: 'Menú brioxeria', note: 'cafè, tallat o cafè amb llet amb brioix', price: '2,20 €' },
			{
				name: 'Menú brioxeria premium',
				note: 'cafè o cafè amb llet amb croissant de nutella o napolitana',
				price: '2,80 €',
			},
			{ name: 'Menú picolo', note: 'cafè, tallat o cafè amb llet amb entrepà picolo', price: '3,60 €' },
			{ name: 'Menú flautí', note: 'cafè o cafè amb llet amb entrepà flautí', price: '3,60 €' },
			{
				name: 'Menú complet flautí',
				note: 'cafè o cafè amb llet, flautí i patates o suc de taronja',
				price: '4,00 €',
			},
		],
	},
	{
		title: 'Cafès',
		items: [
			{ name: 'Espresso', note: 'café solo', price: '1,15 €' },
			{ name: 'Tallat', note: 'café cortado', price: '1,25 €' },
			{ name: 'Cafè amb llet', note: 'café con leche', price: '1,40 €' },
			{ name: 'Americà', note: 'café americano', price: '1,50 €' },
			{ name: 'Capuccino', note: 'capuchino', price: '1,65 €' },
		],
	},
];

export const LEGAL = {
	razonSocial: 'Tastic (Hot Pizza & Hot Stuff)',
	actualizado: 'Noviembre de 2026',
};
