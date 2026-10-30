/**
 * Datos de Panadería La Paz · Horno de leña — Ctra. de Madrid, 36,
 * Alcolea, 14610 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería La Paz- Horno de leña,
 *   37.9314156,-4.6752266, feature 0xd6ce1088fcaab49:0x51fdc07bbce17bea.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   fotos: ficha pública de Google (octubre de 2026).
 *
 * La ficha no publica descripción, web, correo, redes, carta, precios,
 * métodos de pago ni reparto. Tampoco publica atributos de accesibilidad.
 * Esta web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Panadería La Paz',
	displayName: 'Panadería La Paz',
	legalName: 'Panadería La Paz',
	subtitle: 'Horno de leña',
	shortName: 'La Paz',
	mark: 'LP',
	street: 'Ctra. de Madrid, 36',
	district: 'Alcolea',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14610',
	country: 'ES',
	phone: '655 51 04 27',
	phoneHref: 'tel:+34655510427',
	rating: 5,
	reviewsCount: 4,
	siteUrl: 'https://panaderia-la-paz-horno-de-lena.vercel.app',
	geo: { lat: 37.9314156, lng: -4.6752266 },
	featureId: '0xd6ce1088fcaab49:0x51fdc07bbce17bea',
	placeId: 'ChIJSavKjwjhbA0R6nvhvHvA_VE',
	plusCode: '8C9QW8JF+HW',
	googleCategory: 'Panadería',
	tagline: 'Pan de horno de leña en Alcolea',
	description:
		'Panadería La Paz, horno de leña en la carretera de Madrid, 36 (Alcolea, 14610 Córdoba). Pan del día horneado en horno de leña, abierta todos los días de 10:15 a 14:30. 5 sobre 5 con 4 reseñas en Google. Teléfono 655 51 04 27.',
	hoursSummary: 'Todos los días · 10:15–14:30',
	photoCount: 4,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Paz-+Horno+de+le%C3%B1a/@37.9314156,-4.6752266,17z/data=!3m1!4b1!4m6!3m5!1s0xd6ce1088fcaab49:0x51fdc07bbce17bea!8m2!3d37.9314156!4d-4.6752266!16s%2Fg%2F11c0ppv4x2?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJSavKjwjhbA0R6nvhvHvA_VE',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9314156%2C-4.6752266',
	embed: 'https://maps.google.com/maps?q=37.9314156,-4.6752266&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9314156,-4.6752266',
};

/** Horario publicado en la ficha: el mismo todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '10:15–14:30' },
	{ day: 'Martes', value: '10:15–14:30' },
	{ day: 'Miércoles', value: '10:15–14:30' },
	{ day: 'Jueves', value: '10:15–14:30' },
	{ day: 'Viernes', value: '10:15–14:30' },
	{ day: 'Sábado', value: '10:15–14:30' },
	{ day: 'Domingo', value: '10:15–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: todos los días, de 10:15 a 14:30, en un único turno de mañana. La ficha advierte de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría ser diferente.';

export const SERVICIOS = ['Horno de leña', 'Pan del día', 'Alcolea', 'Todos los días', 'Para llevar'];

export const HIGHLIGHTS = [
	{
		title: 'Horno de leña',
		text: 'El nombre del negocio lo anuncia: el pan se hornea en horno de leña. En una de las fotos de la galería se ve al panadero con una pieza grande recién hecha.',
	},
	{
		title: 'En Alcolea',
		text: 'Está en la carretera de Madrid, 36, en Alcolea (14610 Córdoba), en la entrada este de la ciudad por la antigua carretera nacional.',
	},
	{
		title: 'Todos los días',
		text: 'La ficha publica el mismo horario los siete días: de 10:15 a 14:30. Sin cierre al mediodía porque solo abre por la mañana.',
	},
];

export const PAN = [
	{
		title: 'El pan',
		text: 'La ficha la clasifica como panadería y el nombre del negocio remite al horno de leña. Las fotos muestran panes de corteza dorada y piezas grandes en el escaparate y el mostrador.',
	},
	{
		title: 'Sin carta publicada',
		text: 'No hay lista de panes, bollería ni precios en la ficha. Esta web no inventa un surtido: lo que hay cada día se ve en el mostrador.',
	},
	{
		title: 'Cómo comprar',
		text: 'En el local, de 10:15 a 14:30 todos los días. La ficha no indica reparto, encargos por teléfono ni métodos de pago.',
	},
];

export const RESENAS = [
	{ texto: 'El mejor pan que e probado hace tiempo', valor: 5 },
	{ texto: 'Productos de gran calidad', valor: 5 },
];

export const RESENAS_NOTE =
	'La ficha tiene 5 sobre 5 con 4 reseñas (octubre de 2026). Google devuelve el texto de dos de ellas, que se reproducen tal cual, sin corregir la ortografía original. Las otras dos no vienen en la respuesta consultada.';

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Paz?',
		a: 'En la carretera de Madrid, 36, en Alcolea (14610 Córdoba), en la entrada este de la ciudad. El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 10:15 a 14:30, según la ficha de Google consultada en octubre de 2026. Es un único turno de mañana. El domingo 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente.',
	},
	{
		q: '¿Cómo se puede llamar?',
		a: 'El teléfono que publica la ficha es el 655 51 04 27. Es un número móvil, así que también admite llamada desde fuera de la provincia.',
	},
	{
		q: '¿Qué pan venden?',
		a: 'La ficha la clasifica como panadería y el nombre del negocio indica horno de leña. Las reseñas hablan del pan y de la calidad de los productos. No publica una lista de panes ni precios, así que el surtido se consulta en el mostrador.',
	},
	{
		q: '¿Se hornea con leña?',
		a: 'El nombre de la ficha es «Panadería La Paz- Horno de leña», así que el propio negocio lo anuncia. La ficha no añade más detalles sobre el horno ni sobre el proceso.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '5 sobre 5 con 4 reseñas en Google (octubre de 2026). Dos de ellas hablan del pan («el mejor pan que e probado hace tiempo») y de la calidad de los productos.',
	},
	{
		q: '¿Abre los fines de semana?',
		a: 'Sí. La ficha publica el mismo horario los siete días de la semana, de 10:15 a 14:30, incluidos sábado y domingo.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'No consta página web, correo ni perfiles sociales asociados a la ficha. Tampoco publica una descripción del negocio, así que esta web no enlaza ninguno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica atributos de accesibilidad: no indica si hay acceso para sillas de ruedas ni aparcamiento adaptado. Por eso esta página no afirma nada al respecto.',
	},
	{
		q: '¿Hay reparto o se puede pagar con tarjeta?',
		a: 'La ficha no indica servicio de reparto, encargos por teléfono ni métodos de pago, así que esta web no los afirma. Se consulta en el local o llamando al 655 51 04 27.',
	},
];
