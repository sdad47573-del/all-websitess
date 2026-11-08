/**
 * Datos de Artesano — C. Don José Mora, 7, 13170 Miguelturra, Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bdd9ff38bf8d9:0x7ada93b8f7e168ee, place id
 * ChIJ2fiL85_daw0R7mjh97iT2no, CID 13901850854891497299).
 *
 * La ficha publica: «Artesano», categoría «Restaurante de comida para llevar»
 * (y «Asador de pollos y comida para llevar»), teléfono 660 18 20 21, 4,9 sobre
 * 5 con 28 reseñas y horario de 12:00 a 15:30 con el martes cerrado. No enlaza
 * web propia y no publica carta ni precios.
 */

export const BUSINESS = {
	name: 'Artesano',
	shortName: 'Artesano',
	mark: 'AR',
	street: 'C. Don José Mora, 7',
	district: 'Miguelturra',
	city: 'Miguelturra',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13170',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/artesano',
	geo: { lat: 38.9651396, lng: -3.8888546 },
	featureId: '0xd6bdd9ff38bf8d9:0x7ada93b8f7e168ee',
	placeId: 'ChIJ2fiL85_daw0R7mjh97iT2no',
	cid: '13901850854891497299',
	plusCode: '8CCRX486+3F',
	category: 'Restaurante de comida para llevar',
	categories: ['Asador de pollos y comida para llevar'],
	phone: '660 18 20 21',
	phoneHref: '+34660182021',
	rating: 4.9,
	reviewsCount: 28,
	tagline: 'Comida para llevar en Miguelturra',
	description:
		'Artesano, restaurante de comida para llevar en la calle Don José Mora, 7, 13170 Miguelturra (Ciudad Real). Asador de pollos y comida casera para llevar, de 12:00 a 15:30; martes cerrado. Pedidos en el 660 18 20 21.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Artesano/@38.9651396,-3.8888546,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bdd9ff38bf8d9:0x7ada93b8f7e168ee!8m2!3d38.9651396!4d-3.8888546!16s%2Fg%2F11n3kmn811',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9651396%2C-3.8888546',
	embed: 'https://maps.google.com/maps?q=38.9651396,-3.8888546&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: solo mediodía, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:00–15:30' },
	{ dia: 'Jueves', horas: '12:00–15:30' },
	{ dia: 'Viernes', horas: '12:00–15:30' },
	{ dia: 'Sábado', horas: '12:00–15:30' },
	{ dia: 'Domingo', horas: '12:00–15:30' },
];

export const HORARIO_AVISO =
	'La ficha abre de 12:00 a 15:30 de domingo a lunes y cierra los martes: es servicio de mediodía, sin cenas. En festivos puede cambiar; llama antes de ir si es día señalado.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida para llevar',
	'Asador de pollos',
	'Comida casera',
	'Postres caseros',
	'Solo mediodía',
	'Martes cerrado',
];

/** Reseñas destacadas en la ficha, todas de cinco estrellas. */
export const RESENAS = [
	{
		quote: 'Uno de los mejores sitios de comida casera para llevar que he probado.',
		rating: 5,
	},
	{
		quote: 'Y lo mejor la tarta de queso, casera y bien cremosa.',
		rating: 5,
	},
	{
		quote: 'Volveremos a repetir!',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Artesano?',
		a: 'En la calle Don José Mora, 7, en Miguelturra, 13170 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 12:00 a 15:30 de domingo a lunes y los martes cerrado. Es comida para llevar de mediodía, no hay cenas.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha clasifica el local como restaurante de comida para llevar y como asador de pollos y comida para llevar. Las reseñas que Google destaca hablan de comida casera para llevar y de la tarta de queso casera. No hay carta publicada, así que el surtido del día se confirma en el local o llamando al 660 18 20 21.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'La categoría que publica Google es «Restaurante de comida para llevar» y la ficha no marca servicio de mesa. Es un local de pedidos y recogida; si quieres sentarte, pregunta antes por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 660 18 20 21, o en el propio local. Esta página no tramita pedidos: solo reúne lo que publica la ficha de Google.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Los precios se confirman en el local o llamando al teléfono publicado.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma nueve sobre cinco con 28 reseñas. Las tres que Google destaca son de cinco estrellas; en la ficha están todas, también las que puntúan por debajo.',
	},
];
