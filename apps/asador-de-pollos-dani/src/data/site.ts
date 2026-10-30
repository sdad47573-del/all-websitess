/**
 * Datos de ASADOR DE POLLOS DANI — Av. Escritor Antonio Soler, 13,
 * Puerto de la Torre (29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «ASADOR DE POLLOS DANI»,
 *   36.7239388,-4.4920974, feature 0xd72f755c3404c93:0x82019eea5048fff2.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio (solo repite la
 * dirección), página web, redes sociales, carta, precios ni datos de
 * accesibilidad. La web no inventa esos datos: solo cita lo que dicen las
 * reseñas y lo que muestran las fotos.
 */

export const BUSINESS = {
	name: 'Asador de Pollos Dani',
	fullName: 'ASADOR DE POLLOS DANI',
	shortName: 'Dani',
	mark: 'D',
	street: 'Av. Escritor Antonio Soler, 13',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://asador-de-pollos-dani.vercel.app',
	geo: { lat: 36.7239388, lng: -4.4920974 },
	featureId: '0xd72f755c3404c93:0x82019eea5048fff2',
	placeId: 'ChIJk0xAw1X3cg0R8v9IUOqeAYI',
	plusCode: '8C8QPGF5+H5',
	googleCategory: 'Comida a domicilio',
	phone: '722 76 59 90',
	phoneHref: 'tel:+34722765990',
	tagline: 'Pollos asados y comida a domicilio en Puerto de la Torre',
	description:
		'Asador de Pollos Dani, en Av. Escritor Antonio Soler, 13 (Puerto de la Torre, 29010 Málaga). Pollos asados, camperos, croquetas y ensaladas, con comida a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ASADOR+DE+POLLOS+DANI/@36.7239388,-4.4920974,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f755c3404c93:0x82019eea5048fff2!8m2!3d36.7239388!4d-4.4920974!16s%2Fg%2F11zdc6bhbm?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7239388%2C-4.4920974',
	embed: 'https://maps.google.com/maps?q=36.7239388,-4.4920974&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7239388,-4.4920974',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 29,
	label: '4,9',
};

/** Horario que publica la ficha: mediodía casi toda la semana y cenas de viernes a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–16:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–15:30 · 20:30–23:30' },
	{ dia: 'Sábado', horas: '11:00–16:00 · 20:30–23:30' },
	{ dia: 'Domingo', horas: '11:00–16:00 · 20:30–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollos asados',
	'Camperos nocturnos',
	'Croquetas',
	'Ensaladas',
	'Comida a domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Es la seña de identidad del asador y lo que repiten las reseñas: «Los mejores pollos asados», dice una; «súper bueno el pollo», otra.',
	},
	{
		title: 'Camperos nocturnos',
		text: 'Una de las reseñas los nombra y los puntúa: «deliciosos camperos nocturnos 10 de 10». Son los bocadillos de la casa, como el de la foto del perfil: lomo, queso, lechuga y mayonesa.',
	},
	{
		title: 'Las croquetas',
		text: 'Una reseña termina así: «Buenísimo todo y las croquetas 🔥 repetiré». La ficha no detalla el resto de la carta.',
	},
	{
		title: 'Ensaladas y trato',
		text: '«Súper bueno el pollo y ensaladas, muy buena atención!», resume otra de las opiniones de la ficha.',
	},
];

/** Solo lo que nombran las reseñas y la categoría de la ficha. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: '«Los mejores pollos asados», según una de las reseñas',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Camperos nocturnos',
				note: 'los bocadillos que nombra una reseña; la foto del perfil muestra uno con lomo, queso, lechuga y mayonesa',
			},
			{
				name: 'Croquetas',
				note: '«Buenísimo todo y las croquetas», dice una de las reseñas',
			},
			{
				name: 'Ensaladas',
				note: '«súper bueno el pollo y ensaladas», según otra reseña',
			},
		],
	},
	{
		title: 'Para casa',
		items: [
			{
				name: 'Comida a domicilio',
				note: 'la categoría con la que Google clasifica el local; el pedido se hace por teléfono',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Súper bueno el pollo y ensaladas, muy buena atención !',
		valor: 5,
	},
	{
		texto: 'Los mejores pollos asados y deliciosos camperos nocturnos 10 de 10',
		valor: 5,
	},
	{
		texto: 'Buenisimo todo y las croquetas 🔥🔥🔥 repetire',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador de Pollos Dani?',
		a: 'En la avenida Escritor Antonio Soler, 13, en Puerto de la Torre (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el mediodía de lunes a domingo (el martes cierra): de 11:00 a 16:00, salvo el viernes, que empieza a las 11:00 y cierra a las 15:30. Viernes, sábado y domingo abren además de 20:30 a 23:30. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como comida a domicilio y las reseñas nombran el pollo asado, los camperos nocturnos, las croquetas y las ensaladas. La ficha no publica la carta completa ni los precios.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como «Comida a domicilio». El canal que publica la ficha es el teléfono: 722 76 59 90. No consta página web propia ni pedidos online, así que el reparto y la zona se confirman llamando.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas hablan de los platos, pero no citan precios. La carta y la disponibilidad se consultan por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad: no marca acceso, asientos ni aparcamiento adaptados. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 29 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, los camperos, las croquetas, las ensaladas y la atención.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
