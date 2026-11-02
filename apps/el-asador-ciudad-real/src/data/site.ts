/**
 * Datos de El Asador — C. de Pedrera Alta, 38, bajo, 13003 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc368e66f05f5:0x210803d1537c4967, place id
 * ChIJ9QVv5mjDaw0RZ0l8U9EDCCE, código /g/12qfzg443).
 *
 * La ficha publica: «El Asador», categoría «Pollería», teléfono 926 25 09 26,
 * 4,2 sobre 5 con 153 reseñas y un horario de mediodía con el lunes cerrado.
 * No enlaza web propia ni publica carta ni precios.
 */

export const BUSINESS = {
	name: 'El Asador',
	shortName: 'El Asador',
	mark: 'EA',
	street: 'C. de Pedrera Alta, 38, bajo',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13003',
	country: 'ES',
	siteUrl: 'https://el-asador-ciudad-real.vercel.app',
	geo: { lat: 38.9925357, lng: -3.9302337 },
	featureId: '0xd6bc368e66f05f5:0x210803d1537c4967',
	placeId: 'ChIJ9QVv5mjDaw0RZ0l8U9EDCCE',
	category: 'Pollería',
	categories: ['Pollería'],
	phone: '926 25 09 26',
	phoneHref: '+34926250926',
	rating: 4.2,
	reviewsCount: 153,
	tagline: 'Pollo asado y croquetas en Ciudad Real',
	description:
		'El Asador, pollería en la calle Pedrera Alta, 38, bajo, 13003 Ciudad Real. Pollos asados y croquetas para llevar, con atención en el mostrador. De 11:00 a 14:30, sábados hasta las 15:30 y domingos hasta las 15:00; lunes cerrado. Pedidos en el 926 25 09 26.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Asador/@38.9925357,-3.9302337,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc368e66f05f5:0x210803d1537c4967!8m2!3d38.9925357!4d-3.9302337!16s%2Fg%2F12qfzg443',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9925357%2C-3.9302337',
	embed: 'https://maps.google.com/maps?q=38.9925357,-3.9302337&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: solo mediodía, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:00–14:30' },
	{ dia: 'Miércoles', horas: '11:00–14:30' },
	{ dia: 'Jueves', horas: '11:00–14:30' },
	{ dia: 'Viernes', horas: '11:00–14:30' },
	{ dia: 'Sábado', horas: '11:00–15:30' },
	{ dia: 'Domingo', horas: '11:00–15:00' },
];

export const HORARIO_AVISO =
	'La ficha abre de 11:00 a 14:30 de martes a viernes, los sábados hasta las 15:30 y los domingos hasta las 15:00; los lunes cierra. Es horario de mediodía, sin cenas, y en festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Croquetas',
	'Para llevar',
	'Solo mediodía',
	'Lunes cerrado',
	'Acceso adaptado',
];

/** Reseñas destacadas en la ficha, todas de cinco estrellas. */
export const RESENAS = [
	{
		quote: 'Buenísimo el pollo mejores croquetas y buena atención al público',
		rating: 5,
	},
	{
		quote: 'Fui varias veces a por pollos y la verdad que muy ricos.',
		rating: 5,
	},
	{
		quote: 'Buena comida, buen servicio, buena calidad, que más se puede pedir!',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Asador?',
		a: 'En la calle Pedrera Alta, 38, bajo, 13003 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 11:00 a 14:30 de martes a viernes, sábados hasta las 15:30 y domingos hasta las 15:00. Los lunes cierra. Es una pollería de mediodía: no hay servicio de cena.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como pollería, y las tres reseñas que Google destaca hablan de pollos asados, de croquetas y de la atención en el mostrador. No hay carta publicada, así que el surtido del día se confirma en el local o llamando al 926 25 09 26.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'La ficha lo presenta como pollería y las reseñas hablan de ir «a por pollos», es decir, de comprar para llevar. No publica servicio de mesa, así que lo lógico es pedir y recoger.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'En el mostrador o por teléfono, en el 926 25 09 26. Para días señalados conviene llamar con antelación. Esta página no tramita pedidos.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Los precios se confirman en el mostrador o llamando al teléfono publicado.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca entrada adaptada para sillas de ruedas, pero no aparcamiento adaptado ni asientos adaptados. Si necesitas algún apoyo concreto, conviene llamar antes.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma dos sobre cinco con 153 reseñas. Las tres que Google destaca son de cinco estrellas y hablan del pollo, de las croquetas y del trato; en la ficha están todas, también las que puntúan por debajo.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos.',
	},
];
