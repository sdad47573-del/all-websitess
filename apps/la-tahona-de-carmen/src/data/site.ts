/**
 * Datos de La tahona de Carmen — C. Eugenio d'Ors, Centro, 14007 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La tahona de Carmen, 37.8940589,-4.7724525,
 *   feature 0xd6cdfe085774dbb:0x7b5bc1f3256eeb5a.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con las
 * fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'La tahona de Carmen',
	shortName: 'La tahona de Carmen',
	mark: 'T',
	street: "C. Eugenio d'Ors",
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14007',
	country: 'ES',
	phone: '957 94 67 49',
	phoneHref: 'tel:+34957946749',
	rating: 4.6,
	reviewsCount: 102,
	siteUrl: 'https://la-tahona-de-carmen.vercel.app',
	geo: { lat: 37.8940589, lng: -4.7724525 },
	featureId: '0xd6cdfe085774dbb:0x7b5bc1f3256eeb5a',
	placeId: 'ChIJu013heDfbA0RWutuJfPBW3s',
	googleCategory: 'Panadería',
	tagline: "Pan artesanal y desayunos en Eugenio d'Ors",
	description:
		"La tahona de Carmen, en la calle Eugenio d'Ors (Centro, 14007 Córdoba). Pan artesanal, bollería, dulces y desayunos. Abre de lunes a viernes de 8:00 a 14:30 y sábados y domingos de 8:30 a 14:00. 4,6 sobre 5 con 102 reseñas en Google.",
	hoursSummary: 'L–V 8:00–14:30 · sábados y domingos 8:30–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+tahona+de+Carmen/@37.8940589,-4.7724525,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdfe085774dbb:0x7b5bc1f3256eeb5a!8m2!3d37.8940589!4d-4.7724525!16s%2Fg%2F11g0jdp49m?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=8888911539595045722',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8940589%2C-4.7724525',
	embed: 'https://maps.google.com/maps?q=37.8940589,-4.7724525&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8940589,-4.7724525',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–14:30' },
	{ day: 'Sábado', value: '8:30–14:00' },
	{ day: 'Domingo', value: '8:30–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días por la mañana y cierra a mediodía. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pan artesanal',
	'Bollería',
	'Dulces',
	'Desayunos',
	'Café',
	'Tartas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan artesanal',
		text: '«Pan artesanal, estupenda bollería y dulces», resume una reseña de Google. Es lo que anuncia la casa y lo que destaca quien entra.',
	},
	{
		title: 'Desayuno con café',
		text: '«El camarero muy agradable y el desayuno muy rico», cuenta otra reseña. Hay mesas para desayunar en el local, no solo mostrador.',
	},
	{
		title: 'Trato cercano',
		text: '«Pan magnifico, el personal amable y cercanos, un buen lugar», dice otra de las 102 reseñas que suman 4,6 sobre 5 en Google.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan artesanal',
				note: 'El que destaca la casa; las reseñas lo describen como «pan magnífico» y «pan artesanal».',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Dulces y bollería',
		items: [
			{
				name: 'Bollería',
				note: '«Estupenda bollería», según una reseña de Google.',
			},
			{
				name: 'Dulces',
				note: 'En el mostrador del local. La ficha no detalla variedades ni precios.',
			},
		],
	},
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Desayuno con café',
				note: 'Hay servicio de mesa y camareros: «el desayuno muy rico», cuenta una reseña.',
			},
			{
				name: 'Para tomar allí',
				note: 'La ficha no publica carta ni precios, así que esta web no los indica.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La tahona de Carmen?',
		a: "En la calle Eugenio d'Ors, en el distrito Centro de Córdoba (14007). La ficha de Google no publica número; el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 14:30, y sábados y domingos de 8:30 a 14:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 94 67 49. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan artesanal, bollería y dulces, según la ficha, las fotos del perfil y las reseñas. También hay desayunos con café y servicio de mesa. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí. Varias reseñas hablan del desayuno y del camarero, así que hay mesas y servicio de mesa. La ficha no publica carta de desayunos ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, pero indica que no hay aparcamiento accesible. No informa sobre el aseo ni el mostrador, así que esta página no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 102 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el pan, la bollería, los dulces, el desayuno y el trato del personal.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. Según la ficha de Google, sábados y domingos abre de 8:30 a 14:00. De lunes a viernes abre media hora antes, a las 8:00, y cierra a las 14:30.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
];
