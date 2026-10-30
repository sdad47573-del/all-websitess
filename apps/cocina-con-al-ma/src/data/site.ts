/**
 * Datos de Cocina con AL-MA — Av. Gregorio de Diego, 20,
 * Carretera de Cádiz, 29004 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Cocina con AL-MA»,
 *   36.6904465,-4.4527748, feature 0xd72f9b76f3b66c9:0x3a0c905f1bf944f9,
 *   place id ChIJyWY7b7f5cg0R-UT5G1-QDDo.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, descripción
 *   del local y reseñas: ficha pública de Google consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios, y no declara atributos de
 * accesibilidad. La web no inventa esos datos: lo dice.
 */

export const BUSINESS = {
	name: 'Cocina con AL-MA',
	fullName: 'Cocina con AL-MA',
	shortName: 'AL-MA',
	mark: 'AL-MA',
	street: 'Av. Gregorio de Diego, 20',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://cocina-con-al-ma.vercel.app',
	geo: { lat: 36.6904465, lng: -4.4527748 },
	featureId: '0xd72f9b76f3b66c9:0x3a0c905f1bf944f9',
	placeId: 'ChIJyWY7b7f5cg0R-UT5G1-QDDo',
	category: 'Pollería',
	phone: '642 21 37 08',
	phoneHref: 'tel:+34642213708',
	tagline: 'Pollo asado y comida casera para llevar en Carretera de Cádiz',
	description:
		'Cocina con AL-MA, pollería y local de comida para llevar en Av. Gregorio de Diego, 20 (Carretera de Cádiz, 29004 Málaga). Pollos asados, comida casera, pasta, ensaladas, patatas y postres. 4,4 sobre 5 con 47 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cocina+con+AL-MA/@36.6904465,-4.4527748,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9b76f3b66c9:0x3a0c905f1bf944f9!8m2!3d36.6904465!4d-4.4527748!16s%2Fg%2F11mcl3qts7?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6904465%2C-4.4527748',
	embed: 'https://maps.google.com/maps?q=36.6904465,-4.4527748&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6904465,-4.4527748',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.4,
	count: 47,
	label: '4,4',
};

/**
 * Horario publicado en la ficha. Google avisa de que el Día de Todos los
 * Santos el horario podría ser distinto.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '8:30 – 16:00', closed: false },
	{ dia: 'Jueves', horas: '8:30 – 16:00', closed: false },
	{ dia: 'Viernes', horas: '8:30 – 16:00', closed: false },
	{ dia: 'Sábado', horas: '8:30 – 16:00', closed: false },
	{ dia: 'Domingo', horas: '8:30 – 16:00', closed: false },
];

export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente. Llama al 642 21 37 08 si vienes en festivo.';

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'La ficha lo clasifica como pollería, y el pollo asado encabeza la lista de lo que se cocina aquí. Es el plato que sostiene el negocio.',
	},
	{
		title: 'Comida casera para llevar',
		text: 'El local se define como «comidas para llevar»: comida casera, pasta, ensaladas y patatas, pensadas para recoger y comer fuera.',
	},
	{
		title: 'Postres, helados y frío',
		text: 'La ficha anuncia «gran variedad de postres» y bebidas frías, helados e hielo. También hay croquetas y patatas fritas, según las reseñas.',
	},
];

/** Solo lo que declara la ficha y lo que nombran las reseñas: sin precios. */
export const MENU = [
	{
		title: 'Del asador',
		source: 'lo que declara la ficha del local',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato de una casa que Google clasifica como pollería',
			},
			{
				name: 'Patatas',
				note: 'la guarnición que la ficha pone junto al pollo',
			},
		],
	},
	{
		title: 'Comida casera',
		source: 'según la descripción del propio local',
		items: [
			{
				name: 'Comida casera',
				note: 'lo primero que anuncia la ficha, sin platos concretos',
			},
			{
				name: 'Pasta',
				note: 'citada en la descripción del local en Google',
			},
			{
				name: 'Ensaladas',
				note: 'también en la descripción de la ficha',
			},
			{
				name: 'Croquetas',
				note: '«se ven caseras», dice una de las reseñas publicadas',
			},
			{
				name: 'Patatas fritas',
				note: '«son naturales», añade la misma reseña',
			},
		],
	},
	{
		title: 'Postres y frío',
		source: 'lo que anuncia la ficha',
		items: [
			{
				name: 'Postres',
				note: '«gran variedad de postres», en palabras del local',
			},
			{
				name: 'Helados',
				note: 'la ficha los menciona junto a las bebidas frías',
			},
			{
				name: 'Bebidas frías e hielo',
				note: 'el local anuncia bebidas frías, helados y hielo',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Las croquetas están ricas y se ven caseras y las patatas fritas son naturales.',
		valor: 5,
	},
	{
		texto: 'Las raciones también están buenísimas y se nota la calidad de los ingredientes.',
		valor: 5,
	},
	{
		texto: 'Volveremos seguro a comprar otra vez',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cocina con AL-MA?',
		a: 'En la avenida Gregorio de Diego, 20, en Carretera de Cádiz (29004 Málaga). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De miércoles a domingo, de 8:30 a 16:00. Lunes y martes cierra. La ficha advierte además de que el Día de Todos los Santos el horario podría ser diferente.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, comida casera, pasta, ensaladas, patatas y postres, según la descripción que publica el propio local en Google. Las reseñas añaden croquetas y patatas fritas naturales.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no publica carta ni importes, y esta página no los inventa. Para saber qué hay cada día y cuánto cuesta, llama al 642 21 37 08.',
	},
	{
		q: '¿Es para comer allí o para llevar?',
		a: 'La ficha define el local como «comidas para llevar». No consta servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha pública no enlaza ningún servicio de reparto. Si necesitas entrega, pregúntalo por teléfono antes de contar con ella.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No consta reserva online ni teléfono específico para reservas. Es un local de comida para llevar de 8:30 a 16:00, así que no hay mesa que reservar según los datos publicados.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica ningún atributo de accesibilidad: no indica acceso adaptado, aseo adaptado ni aparcamiento accesible. Esta web no afirma nada que Google no diga; si lo necesitas, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 47 reseñas en el momento de consultar la ficha (octubre de 2026). Las publicadas destacan las croquetas, las patatas naturales y la calidad de los ingredientes.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales; el único canal publicado es el teléfono 642 21 37 08.',
	},
];
