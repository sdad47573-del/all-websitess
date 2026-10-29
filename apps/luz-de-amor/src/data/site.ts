/**
 * Datos de Luz De Amor — Cmo de S. Rafael, 58 (Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Luz De Amor,
 *   36.7081294,-4.4477767, feature 0xd72f76d60d291f9:0xc13227338a95f781.
 * - Dirección, categorías, teléfono, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * página no los afirma; el texto propio describe solo lo que Google lista.
 */

export const BUSINESS = {
	name: 'Luz De Amor',
	shortName: 'Luz De Amor',
	mark: 'L',
	street: 'Cmo de S. Rafael, 58',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '627 95 12 46',
	phoneHref: 'tel:+34627951246',
	rating: 5,
	reviewsCount: 74,
	siteUrl: 'https://luz-de-amor.vercel.app',
	geo: { lat: 36.7081294, lng: -4.4477767 },
	featureId: '0xd72f76d60d291f9:0xc13227338a95f781',
	placeId: 'ChIJ-ZHSYG33cg0RgfeVijMnMsE',
	plusCode: '8C8QPH52+7V',
	googleCategory: 'Pastelería, panadería y cafetería',
	tagline: 'Pastelería artesanal y tartas por encargo en Cruz de Humilladero',
	description:
		'Luz De Amor, pastelería artesanal en Cmo de S. Rafael, 58 (Cruz de Humilladero, 29006 Málaga). Tartas por encargo para cumpleaños y bodas, café, desayunos y meriendas. 5,0 sobre 5 con 74 reseñas. Teléfono 627 95 12 46.',
	hoursSummary: 'L–V 8:30–22:00 · S 10:00–22:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Luz+De+Amor/@36.7081294,-4.4477767,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76d60d291f9:0xc13227338a95f781!8m2!3d36.7081294!4d-4.4477767!16s%2Fg%2F11ytfdy05m?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=14067522065384461441',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7081294%2C-4.4477767',
	embed: 'https://maps.google.com/maps?q=36.7081294,-4.4477767&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7081294,-4.4477767',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–22:00' },
	{ day: 'Sábado', value: '10:00–22:00' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultado el 29 de octubre de 2026. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente; conviene llamar antes de ir.';

/** Categorías y servicios que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Pastelería',
	'Panadería',
	'Cafetería',
	'Tartas por encargo',
	'Tarta de queso al estilo San Sebastián',
	'Carrot cake',
	'Repostería casera',
	'Desayunos y meriendas',
	'Wifi gratuito',
	'Mesas para sentarse',
	'Entrada accesible',
	'Admite perros',
];

export const HIGHLIGHTS = [
	{
		title: 'Tartas por encargo',
		text: 'La ficha describe la casa como pastelería artesanal especializada en tartas por encargo para cumpleaños, bodas y celebraciones, con pedidos que se preparan con antelación y se recogen en la tienda.',
	},
	{
		title: 'Repostería y café',
		text: 'Entre lo que publica la ficha están la tarta de queso al estilo San Sebastián, el carrot cake y la repostería casera, junto al café, los desayunos y las meriendas.',
	},
	{
		title: 'Un sitio para quedarse',
		text: 'El local tiene mesas para sentarse, wifi gratuito y entrada accesible, y la ficha indica que se admiten perros.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Luz De Amor?',
		a: 'En el Camino de San Rafael, número 58, en el barrio de Cruz de Humilladero (29006 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:30 a 22:00, el sábado de 10:00 a 22:00 y el domingo está cerrado. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha publica tartas por encargo para cumpleaños, bodas y celebraciones, tarta de queso al estilo San Sebastián, carrot cake y repostería casera, además de café, desayunos y meriendas. No publica carta ni precios, así que esta página no los afirma.',
	},
	{
		q: '¿Hay que pedir la tarta con antelación?',
		a: 'Sí. La ficha indica que los pedidos se preparan con antelación y se recogen en la tienda. Para encargar uno conviene llamar al 627 95 12 46.',
	},
	{
		q: '¿Se puede sentar dentro?',
		a: 'La ficha indica que hay mesas para sentarse y wifi gratuito. No publica aforo ni reserva de mesa, así que esta página no lo afirma.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Se admiten perros?',
		a: 'Sí. La ficha de Google indica que se admiten perros en el local.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 627 95 12 46. La ficha de Google no publica página web propia ni perfil de redes sociales del negocio.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5,0 sobre 5 con 74 reseñas en Google, que la clasifica como pastelería, panadería, cafetería y tienda de postres.',
	},
];
