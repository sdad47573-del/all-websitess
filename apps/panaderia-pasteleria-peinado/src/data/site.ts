/**
 * Datos de Panadería Pastelería Peinado — Calle Pedro Gómez Chaix, 3
 * (Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Pastelería Peinado,
 *   36.717434,-4.4403996, feature 0xd72f775bad87339:0xd9cd900a8641fbd5.
 * - Dirección, categorías, teléfono, valoración, horario, accesibilidad y
 *   WhatsApp de pedidos: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, carta ni precios,
 * así que la página no los afirma.
 */

export const BUSINESS = {
	name: 'Panadería Pastelería Peinado',
	shortName: 'Peinado',
	mark: 'P',
	street: 'Calle Pedro Gómez Chaix, 3',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	phone: '952 39 58 00',
	phoneHref: 'tel:+34952395800',
	whatsapp: 'https://wa.me/34639737762',
	whatsappDisplay: '639 73 77 62',
	rating: 4.7,
	reviewsCount: 70,
	siteUrl: 'https://panaderia-pasteleria-peinado.vercel.app',
	geo: { lat: 36.717434, lng: -4.4403996 },
	featureId: '0xd72f775bad87339:0xd9cd900a8641fbd5',
	placeId: 'ChIJOXPYunX3cg0R1ftBhgqQzdk',
	plusCode: '8C8QPH85+XR',
	googleCategory: 'Panadería y pastelería',
	tagline: 'Panadería y pastelería artesanal en Cruz de Humilladero',
	description:
		'Panadería Pastelería Peinado en Calle Pedro Gómez Chaix, 3 (Cruz de Humilladero, 29007 Málaga). Panadería y pastelería artesanal, pedidos de roscos de reyes por WhatsApp. 4,7 sobre 5 con 70 reseñas. Teléfono 952 39 58 00.',
	hoursSummary: 'L–V 8:00–20:30 · S 8:00–15:00 · D 8:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Pasteler%C3%ADa+Peinado/@36.717434,-4.4403996,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f775bad87339:0xd9cd900a8641fbd5!8m2!3d36.717434!4d-4.4403996!16s%2Fg%2F1tdcsw_7?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=15714216060537986649',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.717434%2C-4.4403996',
	embed: 'https://maps.google.com/maps?q=36.717434,-4.4403996&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.717434,-4.4403996',
	/** La otra tienda que la ficha menciona (C/ del Ciprés, 2, frente a Carlos Haya). */
	sisterShop:
		'https://www.google.com/maps/place/Panader%C3%ADa+Peinado/@36.7226087,-4.4481104,17z',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–20:30' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: '8:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultado el 29 de octubre de 2026. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente; conviene llamar antes de ir.';

/** Lo que la ficha publica del local. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería artesanal',
	'Roscas y roscos de reyes',
	'Pedidos por WhatsApp',
	'Acceso para sillas de ruedas',
	'Teléfono publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y pastelería',
		text: 'Google clasifica el local en las dos categorías a la vez, panadería y pastelería, y la casa se presenta en su ficha como panadería pastelería artesanal.',
	},
	{
		title: 'Roscas por WhatsApp',
		text: 'La ficha publica un WhatsApp, el 639 73 77 62, para pedir roscos de reyes. Es el único canal de encargo que la casa anuncia por escrito.',
	},
	{
		title: 'Dos tiendas',
		text: 'La propia ficha avisa de que la casa también atiende en la calle del Ciprés, 2, frente a Carlos Haya, con el nombre de Panadería Peinado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Pastelería Peinado?',
		a: 'En la calle Pedro Gómez Chaix, número 3, en el barrio de Cruz de Humilladero (29007 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 20:30. El sábado cierra a las 15:00 y el domingo a las 14:30, con apertura a las 8:00 los dos días. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Se pueden encargar roscos de reyes?',
		a: 'Sí. La ficha publica un WhatsApp para pedidos de roscos de reyes: el 639 73 77 62. Es el único sistema de encargo que la casa anuncia en su ficha.',
	},
	{
		q: '¿Cómo se contacta con la tienda?',
		a: 'Por teléfono en el 952 39 58 00 o por WhatsApp en el 639 73 77 62 para los pedidos de roscos. La ficha no publica página web propia.',
	},
	{
		q: '¿Hay otra tienda de Peinado?',
		a: 'Sí. La ficha de este local indica que la casa también está en la calle del Ciprés, 2, frente a Carlos Haya, con el nombre de Panadería Peinado.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero avisa de que no hay aparcamiento accesible reservado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 70 reseñas en Google, que la clasifica como panadería y pastelería.',
	},
	{
		q: '¿Publica la web carta o precios?',
		a: 'No. La ficha de Google no incluye carta ni precios, así que esta página no los afirma: el surtido y los precios se consultan en la tienda o por teléfono.',
	},
];
