/**
 * Datos de Maison Tánger — C. Quevedo, 18, 13004 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc3ed4b8cee0b:0x3f1f11fd6da9393a, place id
 * ChIJC-6MS-3Daw0ROjmpbf0RHz8, código /g/11nc8v3rn1).
 *
 * La ficha publica: «Maison Tánger», categoría «Restaurante marroquí», teléfono
 * 926 72 20 22, 5 sobre 5 con 21 reseñas y horario de 9:00 a 16:00 y de 19:00 a
 * 23:00 (domingos solo mediodía). No enlaza web propia ni publica carta, así que
 * los platos que se nombran salen de las reseñas que destaca Google.
 */

export const BUSINESS = {
	name: 'Maison Tánger',
	shortName: 'Maison Tánger',
	mark: 'MT',
	street: 'C. Quevedo, 18',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://maison-tanger.vercel.app',
	geo: { lat: 38.9880043, lng: -3.9214967 },
	featureId: '0xd6bc3ed4b8cee0b:0x3f1f11fd6da9393a',
	placeId: 'ChIJC-6MS-3Daw0ROjmpbf0RHz8',
	plusCode: '8CCRX3QH+6C',
	category: 'Restaurante marroquí',
	categories: ['Restaurante marroquí'],
	phone: '926 72 20 22',
	phoneHref: '+34926722022',
	rating: 5,
	reviewsCount: 21,
	tagline: 'Cocina marroquí en Ciudad Real',
	description:
		'Maison Tánger, restaurante marroquí en la calle Quevedo, 18, 13004 Ciudad Real. Tajines, pastela de pollo y cocina de cocción lenta, para comer allí o para llevar. De 9:00 a 16:00 y de 19:00 a 23:00; domingos solo mediodía. Teléfono 926 72 20 22.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Maison+T%C3%A1nger/@38.9880043,-3.9214967,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3ed4b8cee0b:0x3f1f11fd6da9393a!8m2!3d38.9880043!4d-3.9214967!16s%2Fg%2F11nc8v3rn1',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9880043%2C-3.9214967',
	embed: 'https://maps.google.com/maps?q=38.9880043,-3.9214967&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: dos servicios de lunes a sábado, domingo solo mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Martes', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Jueves', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Viernes', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Sábado', horas: '9:00–16:00 · 19:00–23:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

export const HORARIO_AVISO =
	'La ficha abre de 9:00 a 16:00 y de 19:00 a 23:00 de lunes a sábado, y los domingos solo de 9:00 a 16:00. En festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Cocina marroquí',
	'Tajines',
	'Pastela de pollo',
	'Para llevar',
	'Comida y cena',
	'Domingo mediodía',
];

/** Reseñas destacadas en la ficha, todas de cinco estrellas. */
export const RESENAS = [
	{
		quote: 'Bastela de pollo auténtica y muy rica y precios muy competitivos.',
		rating: 5,
	},
	{
		quote: 'Pedimos para llevar el tajin de pollo y tajin de kofta.',
		rating: 5,
	},
	{
		quote: 'Un espectáculo, que suerte hemos tenido que hayáis venido a Ciudad Real!',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Maison Tánger?',
		a: 'En la calle Quevedo, 18, 13004 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 9:00 a 16:00 y de 19:00 a 23:00 de lunes a sábado. Los domingos solo abre de 9:00 a 16:00, así que esa noche no hay servicio.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como restaurante marroquí. Las reseñas que Google destaca citan la pastela de pollo, el tajín de pollo y el tajín de kofta. No hay carta publicada con precios, así que el surtido se confirma en el local o en el 926 72 20 22.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Una de las reseñas destacadas cuenta que pidieron para llevar el tajín de pollo y el tajín de kofta. Los pedidos se hacen en el local o por teléfono, en el 926 72 20 22; esta página no tramita encargos.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Una de las reseñas destaca que los precios son competitivos, pero la cifra se confirma en el local o al llamar.',
	},
	{
		q: '¿Sirven alcohol o carne de cerdo?',
		a: 'La ficha no publica ese dato y esta página no lo supone: es un restaurante marroquí, así que lo mejor es preguntar directamente en el 926 72 20 22.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cinco sobre cinco con 21 reseñas. Las tres que Google destaca son de cinco estrellas; en la ficha están todas, también las que puntúan por debajo.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos.',
	},
];
