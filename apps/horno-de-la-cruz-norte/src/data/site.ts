/**
 * Datos de Horno de la Cruz — Av. Agrupación Córdoba, 19, Nave 7c, 14013.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Horno de la Cruz,
 *   37.9037615,-4.7607527, feature 0xd6cdfa2645d4087:0xe6f27f812a34f1c3.
 *   Es una ficha distinta de la del Centro (Calle Góngora, 2).
 * - Nombre, dirección, teléfono, web, categoría, valoración, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 * - «Casa fundada en 1880», «despacho de venta público» y «especialidad en
 *   empanadas y magdalenas»: carteles del propio establecimiento que aparecen
 *   en esas fotos.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, correo, redes,
 * carta, precios, métodos de pago ni reparto, y en esta consulta no muestra
 * los textos de las reseñas. El surtido se describe solo con la categoría, la
 * cartelería y lo que muestran las fotos.
 */

export const BUSINESS = {
	name: 'Horno de la Cruz',
	shortName: 'Horno de la Cruz',
	mark: 'H',
	street: 'Av. Agrupación Córdoba, 19, Nave 7c',
	district: '',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '957 48 02 03',
	phoneHref: 'tel:+34957480203',
	rating: 5,
	reviewsCount: 5,
	siteUrl: 'https://horno-de-la-cruz-norte.vercel.app',
	website: 'https://sites.google.com/site/hornodelacruz/',
	geo: { lat: 37.9037615, lng: -4.7607527 },
	featureId: '0xd6cdfa2645d4087:0xe6f27f812a34f1c3',
	placeId: 'ChIJh0BdZKLfbA0Rw_E0KoF_8uY',
	googleCategory: 'Panadería',
	tagline: 'Despacho de venta al público en la Nave 7c',
	description:
		'Horno de la Cruz, en la Av. Agrupación Córdoba, 19, Nave 7c (14013 Córdoba). Despacho de venta al público de una casa fundada en 1880, con especialidad en empanadas y magdalenas según su cartel. Lunes a miércoles y viernes de 7:00 a 14:00; jueves de 7:00 a 21:00; sábado de 7:00 a 11:00; domingo cerrado. 5 sobre 5 con 5 reseñas. Teléfono 957 48 02 03.',
	hoursSummary: 'L–X y V 7:00–14:00 · J 7:00–21:00 · S 7:00–11:00 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Horno+de+la+Cruz/@37.9037615,-4.7607527,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdfa2645d4087:0xe6f27f812a34f1c3!8m2!3d37.9037615!4d-4.7607527!16s%2Fg%2F1vfp4_7x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJh0BdZKLfbA0Rw_E0KoF_8uY',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9037615%2C-4.7607527',
	embed: 'https://maps.google.com/maps?q=37.9037615,-4.7607527&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9037615,-4.7607527',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a miércoles', value: '7:00–14:00' },
	{ day: 'Jueves', value: '7:00–21:00' },
	{ day: 'Viernes', value: '7:00–14:00' },
	{ day: 'Sábado', value: '7:00–11:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. De lunes a miércoles y el viernes abre de 7:00 a 14:00; el jueves alarga hasta las 21:00 y el sábado solo hasta las 11:00. El domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Despacho de venta al público',
	'Empanadas',
	'Magdalenas',
	'Panadería',
];

export const HIGHLIGHTS = [
	{
		title: 'La nave 7c',
		text: 'La fachada de las fotos enseña el rótulo rojo sobre la pared crema y amarilla, la puerta con el número 7C y la persiana metálica del obrador.',
	},
	{
		title: 'Desde 1880',
		text: 'El cartel de la entrada anuncia «casa fundada en 1880», «despacho de venta público» y «especialidad en empanadas y magdalenas».',
	},
	{
		title: 'Jueves hasta las 21:00',
		text: 'Abre de lunes a miércoles y el viernes de 7:00 a 14:00, el jueves alarga hasta las 21:00 y el sábado cierra a las 11:00. El domingo descansa.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está este Horno de la Cruz?',
		a: 'En la Avenida Agrupación Córdoba, 19, nave 7c (14013 Córdoba). Es una ficha distinta de la del Horno de la Cruz de la calle Góngora, en el Centro. El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de lunes a miércoles y el viernes abre de 7:00 a 14:00; el jueves, de 7:00 a 21:00; el sábado, de 7:00 a 11:00, y el domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado es el 957 48 02 03 y la ficha enlaza una página web: sites.google.com/site/hornodelacruz. No figuran correo ni redes sociales.',
	},
	{
		q: '¿Qué vende?',
		a: 'Google la clasifica como panadería. El cartel del establecimiento anuncia «despacho de venta público» y «especialidad en empanadas y magdalenas». La ficha no publica carta ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Desde cuándo existe la casa?',
		a: 'El cartel de la entrada anuncia «casa fundada en 1880». Es el dato que da el propio establecimiento en su cartelería; la ficha de Google no lo recoge.',
	},
	{
		q: '¿Es la misma que el Horno de la Cruz del Centro?',
		a: 'Tienen el mismo nombre, pero son fichas distintas: esta está en la Avenida Agrupación Córdoba, 19, nave 7c (14013), y la otra en la calle Góngora, 2 (14002). Cada una tiene su teléfono y su horario.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. La ficha de Google marca el domingo como cerrado; el sábado abre solo de 7:00 a 11:00.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento accesible para sillas de ruedas. No publica datos sobre el acceso al obrador ni sobre el aseo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con 5 reseñas en Google, que la clasifica como panadería. En esta consulta la ficha no muestra los textos de las reseñas.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el despacho.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. Se consulta por teléfono.',
	},
];
