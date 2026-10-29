/**
 * Datos de Panadería y Confitería Loli — Ctra. de Madrid, 28, 14610 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia Y Confiteria Loli,
 *   37.9312086,-4.6755917, feature 0xd6ce1088407180b:0xd910fea5287f2b3a.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas y horario:
 *   ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 * - Tartas, bizcochos, empanadas, dulces y encargos de pasteles: lo que
 *   cuentan las reseñas de la propia ficha y lo que muestra su galería.
 *
 * La ficha no publica descripción del negocio, web, correo, redes, carta ni
 * precios, y no da datos de accesibilidad. Esta web no inventa ninguno.
 */

export const BUSINESS = {
	name: 'Panadería y Confitería Loli',
	legalName: 'Panaderia Y Confiteria Loli',
	shortName: 'Loli',
	mark: 'L',
	street: 'Ctra. de Madrid, 28',
	district: 'Ctra. de Madrid',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14610',
	country: 'ES',
	phone: '625 41 07 43',
	phoneHref: 'tel:+34625410743',
	rating: 4.5,
	reviewsCount: 80,
	siteUrl: 'https://panaderia-y-confiteria-loli.vercel.app',
	geo: { lat: 37.9312086, lng: -4.6755917 },
	featureId: '0xd6ce1088407180b:0xd910fea5287f2b3a',
	placeId: 'ChIJCxgHhAjhbA0ROit_KKX-ENk',
	plusCode: '8C9QW8JF+FQ',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en la carretera de Madrid',
	description:
		'Panadería y Confitería Loli, en la carretera de Madrid, 28 (14610 Córdoba). Panadería y confitería de barrio: tartas, bizcochos, empanadas y dulces, con encargos de pasteles. Abre a las 6:00 de lunes a viernes. 4,5 sobre 5 con 80 reseñas. Teléfono 625 41 07 43.',
	hoursSummary: 'L–V 6:00–14:30 · S 7:00–14:30 · D 9:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+Y+Confiteria+Loli/@37.9312086,-4.6755917,17z/data=!3m1!4b1!4m6!3m5!1s0xd6ce1088407180b:0xd910fea5287f2b3a!8m2!3d37.9312086!4d-4.6755917!16s%2Fg%2F11bzrp7qtr?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJCxgHhAjhbA0ROit_KKX-ENk',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9312086%2C-4.6755917',
	embed: 'https://maps.google.com/maps?q=37.9312086,-4.6755917&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9312086,-4.6755917',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:00–14:30' },
	{ day: 'Sábado', value: '7:00–14:30' },
	{ day: 'Domingo', value: '9:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: abre a las 6:00 de lunes a viernes, a las 7:00 el sábado y a las 9:00 el domingo, siempre hasta las 14:30. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Tartas',
	'Bizcochos',
	'Empanadas',
	'Encargos de pasteles',
];

export const HIGHLIGHTS = [
	{
		title: 'Abre a las 6:00',
		text: 'De lunes a viernes el horno está en marcha desde primera hora; el sábado abre a las 7:00 y el domingo a las 9:00. Todos los días hasta las 14:30.',
	},
	{
		title: 'Dulces de siempre',
		text: 'Una reseña resume la casa así: «tarta, empanadas y buenos dulces en general». Otra destaca las tortas y bizcochos «con recetas tradicionales y muy ricos».',
	},
	{
		title: 'Encargos de pasteles',
		text: '«Excelente, siempre que vengo de Barcelona le encargo pasteles», cuenta una clienta. Para encargar, el teléfono de la ficha es el 625 41 07 43.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Confitería',
		items: [
			{
				name: 'Tartas',
				note: 'La primera reseña de la ficha las cita junto a las empanadas y los dulces. La ficha no publica catálogo ni precios.',
			},
			{
				name: 'Bizcochos y tortas',
				note: '«Con recetas tradicionales y muy ricos», según una reseña de Google.',
			},
			{
				name: 'Dulces variados',
				note: 'Lo que la galería muestra en el mostrador. Sin lista oficial de variedades.',
			},
		],
	},
	{
		title: 'Salado',
		items: [
			{
				name: 'Empanadas',
				note: 'Citadas en las reseñas de la ficha. No se publican tamaños, rellenos ni precios.',
			},
		],
	},
	{
		title: 'Por encargo',
		items: [
			{
				name: 'Pasteles por encargo',
				note: 'Una clienta cuenta que le encarga pasteles cada vez que viene. El encargo se hace por teléfono.',
			},
			{
				name: 'Tartas para celebraciones',
				note: 'La ficha no detalla el proceso de encargo ni plazos: se consulta en el local o en el 625 41 07 43.',
			},
		],
	},
];

export const RESENAS = [
	{ texto: 'Tarta, empanadas y buenos dulces en general.', valor: 5 },
	{ texto: 'Excelente siempre; que vengo de Barcelona, le encargo pasteles.', valor: 5 },
	{ texto: 'Hacen tortas y bizcochos con recetas tradicionales y muy ricos.', valor: 4 },
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería y Confitería Loli?',
		a: 'En la carretera de Madrid, 28 (14610 Córdoba). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 6:00 a 14:30; el sábado, de 7:00 a 14:30, y el domingo, de 9:00 a 14:30. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y el nombre incluye confitería. Las reseñas hablan de tartas, bizcochos, tortas, empanadas y dulces, y de encargar pasteles. No hay carta ni precios publicados.',
	},
	{
		q: '¿Se pueden encargar pasteles?',
		a: 'Sí, según una de las reseñas: «siempre que vengo de Barcelona le encargo pasteles». La ficha no publica plazos, catálogo ni precios de encargo, así que conviene llamar al 625 41 07 43.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. El domingo abre de 9:00 a 14:30, más tarde que el resto de la semana. De lunes a viernes abre a las 6:00 y el sábado a las 7:00.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 625 41 07 43. No consta página web propia, correo ni perfiles sociales, así que esta página no enlaza ninguno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha pública no publica datos de accesibilidad (ni acceso, ni aparcamiento, ni aseos). Esta web no los afirma: se consulta en el local o por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,5 sobre 5 con 80 reseñas en Google (octubre de 2026). Las opiniones destacan los dulces, las tartas y los bizcochos tradicionales, y los encargos de pasteles.',
	},
	{
		q: '¿Se puede pagar con tarjeta o pedir a domicilio?',
		a: 'La ficha pública no indica métodos de pago ni servicio de reparto, así que esta web no los afirma. Se consulta en el local o por teléfono.',
	},
];
