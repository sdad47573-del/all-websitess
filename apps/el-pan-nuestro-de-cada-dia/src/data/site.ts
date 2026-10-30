/**
 * Datos de El Pan Nuestro De Cada Día — C. Abén Mazarra, 37,
 * Nte. Sierra, 14006 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: El Pan Nuestro De Cada Día,
 *   37.8985662,-4.77426, feature 0xd6cdf740837ecff:0x4a0fc1f31d646583.
 * - Nombre, dirección, categoría, valoración, reseñas, horario, accesibilidad
 *   y fotos: ficha pública de Google (octubre de 2026).
 *
 * La ficha no publica teléfono, descripción, web, correo, redes, carta,
 * precios, métodos de pago ni reparto; tampoco aparece reclamada por el
 * negocio. Esta web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'El Pan Nuestro De Cada Día',
	brand: 'El Pan Nuestro',
	subtitle: 'De cada día',
	shortName: 'El Pan Nuestro',
	mark: 'EP',
	street: 'C. Abén Mazarra, 37',
	district: 'Nte. Sierra',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14006',
	country: 'ES',
	phone: null,
	phoneHref: null,
	rating: 4.6,
	reviewsCount: 12,
	siteUrl: 'https://el-pan-nuestro-de-cada-dia.vercel.app',
	geo: { lat: 37.8985662, lng: -4.77426 },
	featureId: '0xd6cdf740837ecff:0x4a0fc1f31d646583',
	placeId: 'ChIJ_-w3CHTfbA0Rg2VkHfPBD0o',
	plusCode: '8C9QV6XG+C7',
	googleCategory: 'Panadería',
	tagline: 'Panadería y salón en Nte. Sierra',
	description:
		'El Pan Nuestro De Cada Día, panadería con salón en la calle Abén Mazarra, 37 (Nte. Sierra, 14006 Córdoba). Pan, bollería y tortas, con mesas para desayunar y merendar todos los días de 8:30 a 14:00. 4,6 sobre 5 con 12 reseñas en Google.',
	hoursSummary: 'Todos los días · 8:30–14:00',
	photoCount: 4,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Pan+Nuestro+De+Cada+D%C3%ADa/@37.8985662,-4.77426,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf740837ecff:0x4a0fc1f31d646583!8m2!3d37.8985662!4d-4.77426!16s%2Fg%2F11cns9p048?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJ_-w3CHTfbA0Rg2VkHfPBD0o',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8985662%2C-4.77426',
	embed: 'https://maps.google.com/maps?q=37.8985662,-4.77426&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8985662,-4.77426',
};

/** Horario publicado en la ficha: el mismo todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '8:30–14:00' },
	{ day: 'Martes', value: '8:30–14:00' },
	{ day: 'Miércoles', value: '8:30–14:00' },
	{ day: 'Jueves', value: '8:30–14:00' },
	{ day: 'Viernes', value: '8:30–14:00' },
	{ day: 'Sábado', value: '8:30–14:00' },
	{ day: 'Domingo', value: '8:30–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: todos los días, de 8:30 a 14:00, en un único turno de mañana. La ficha advierte de que el domingo 1 de noviembre (Día de Todos los Santos) el horario podría ser diferente.';

export const SERVICIOS = ['Panadería', 'Desayunos', 'Meriendas', 'Salón', 'Nte. Sierra'];

export const HIGHLIGHTS = [
	{
		title: 'Panadería con salón',
		text: 'Las fotos de la galería muestran mesas y sillas junto al mostrador: no es solo una panadería para llevar, también se puede desayunar y merendar allí.',
	},
	{
		title: 'En Abén Mazarra',
		text: 'Está en el número 37 de la calle Abén Mazarra, en Nte. Sierra (14006 Córdoba), entre el centro y el barrio de Santa Rosa.',
	},
	{
		title: 'Todos los días',
		text: 'La ficha publica el mismo horario los siete días: de 8:30 a 14:00. Abre pronto, que es lo que se agradece para el desayuno.',
	},
];

export const DESAYUNOS = [
	{
		title: 'Desayuno y merienda',
		text: 'Una reseña lo resume como «buen lugar para desayunar y merendar familia». El salón, con sus mesas de mantel, está pensado para sentarse.',
	},
	{
		title: 'La vitrina',
		text: 'En la galería se ven tortas grandes de crema y hojaldre en bandejas doradas, además de bollería y pan en el mostrador.',
	},
	{
		title: 'Sin carta ni precios',
		text: 'La ficha no publica carta, precios ni métodos de pago. Esta web no inventa un surtido: lo que hay se ve en el mostrador y la vitrina.',
	},
];

export const RESENAS = [
	{ texto: 'Buen lugar para desayunar y merendar familia', valor: 5 },
	{ texto: 'Buenos productos ,trato inmejorable', valor: 5 },
	{ texto: 'Bonito, amabilidad, buen servicio', valor: 5 },
];

export const RESENAS_NOTE =
	'La ficha tiene 4,6 sobre 5 con 12 reseñas (octubre de 2026). Google devuelve el texto de tres de ellas, que se reproducen tal cual, sin corregir la puntuación original.';

export const FAQ = [
	{
		q: '¿Dónde está El Pan Nuestro De Cada Día?',
		a: 'En la calle Abén Mazarra, 37, en Nte. Sierra (14006 Córdoba). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:30 a 14:00, según la ficha de Google consultada en octubre de 2026. Es un único turno de mañana. El domingo 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente.',
	},
	{
		q: '¿Cómo se puede llamar?',
		a: 'La ficha no publica teléfono del establecimiento, así que esta web no puede ofrecer ninguno sin inventarlo. El contacto es presencial.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí, según las fotos y las reseñas: el local tiene mesas y sillas junto al mostrador, y una reseña lo describe como «buen lugar para desayunar y merendar familia».',
	},
	{
		q: '¿Qué venden?',
		a: 'Es una panadería: pan, bollería y tortas, con vitrina y mostrador. Las fotos muestran tortas grandes de crema y hojaldre, barras y panes. No publica carta ni precios.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 12 reseñas en Google (octubre de 2026). Las tres reseñas que devuelve la ficha hablan del desayuno, del trato y de la amabilidad.',
	},
	{
		q: '¿Abre los fines de semana?',
		a: 'Sí. La ficha publica el mismo horario los siete días de la semana, de 8:30 a 14:00, incluidos sábado y domingo.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'No consta página web, correo ni perfiles sociales asociados a la ficha. Tampoco aparece reclamada por el negocio, por lo que los datos pueden estar incompletos.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica si hay aparcamiento adaptado ni más detalles del interior o de los aseos.',
	},
	{
		q: '¿Hay reparto o se puede pagar con tarjeta?',
		a: 'La ficha no indica servicio de reparto ni métodos de pago, así que esta web no los afirma. Se consulta en el local.',
	},
];
