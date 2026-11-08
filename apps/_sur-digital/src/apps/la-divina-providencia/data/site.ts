/**
 * Datos de La Divina Providencia — Calle del Barón, 12
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Divina Providencia,
 *   36.7270548,-4.4412287, feature 0xd72f7099d1b34b5:0xdb29e1f04dea6d23.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del negocio, carta
 * ni precios. La sección del mostrador recoge solo lo que citan las reseñas
 * (pimientos asados, lasañas, tortillas de patatas, carne de membrillo) y lo
 * que muestran las fotos del perfil, sin importes.
 */

export const BUSINESS = {
	name: 'La Divina Providencia',
	shortName: 'La Divina',
	mark: 'D',
	street: 'Calle del Barón, 12',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '952 61 37 96',
	phoneHref: 'tel:+34952613796',
	rating: 4.5,
	reviewsCount: 31,
	siteUrl: 'https://www.sur-digital.com/la-divina-providencia',
	geo: { lat: 36.7270548, lng: -4.4412287 },
	featureId: '0xd72f7099d1b34b5:0xdb29e1f04dea6d23',
	placeId: 'ChIJtTQbnQn3cg0RI23qTfDhKds',
	googleCategory: 'Panadería',
	tagline: 'Panadería y cocina de barrio en Bailén-Miraflores',
	description:
		'La Divina Providencia, en Calle del Barón, 12 (Bailén-Miraflores, 29010 Málaga). Panadería de barrio con pimientos asados, lasañas, tortillas de patatas y carne de membrillo artesanal. Teléfono 952 61 37 96. 4,5 sobre 5 en Google.',
	hoursSummary: 'L–V 7:15–14:30 y 17:00–21:00 · S 8:00–14:30 y 17:00–21:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Divina+Providencia/@36.7270548,-4.4412287,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7099d1b34b5:0xdb29e1f04dea6d23!8m2!3d36.7270548!4d-4.4412287!16s%2Fg%2F1tczlv4b?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=15789663209461263651',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7270548%2C-4.4412287',
	embed: 'https://maps.google.com/maps?q=36.7270548,-4.4412287&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7270548,-4.4412287',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:15–14:30 · 17:00–21:00' },
	{ day: 'Sábado', value: '8:00–14:30 · 17:00–21:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) puede variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Además a mi mujer le encantan los pimientos asados que venden.',
	},
	{
		rating: 4,
		text: 'Además, hace unas lasañas y tortillas de patatas exquisitas.',
	},
	{
		rating: 5,
		text: 'La carne de membrillo artesanal que preparan es exquisita.',
	},
];

/** Lo que la ficha, las fotos y las reseñas permiten afirmar. */
export const HIGHLIGHTS = [
	{
		title: 'La cocina',
		text: 'Las reseñas hablan de pimientos asados, lasañas y tortillas de patatas. No hay carta publicada: es lo que cuentan quienes compran allí.',
	},
	{
		title: 'El membrillo',
		text: '«La carne de membrillo artesanal que preparan es exquisita», dice una reseña. Es uno de los dulces que se preparan en la casa.',
	},
	{
		title: 'El acceso',
		text: 'La ficha indica acceso para sillas de ruedas y aparcamiento adaptado para sillas de ruedas.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'De la cocina',
		items: [
			{ name: 'Pimientos asados', note: 'Una reseña los destaca: «le encantan los pimientos asados que venden».' },
			{ name: 'Lasañas', note: '«Hace unas lasañas... exquisitas», según otra reseña.' },
			{ name: 'Tortillas de patatas', note: 'La misma reseña las califica de exquisitas.' },
		],
	},
	{
		title: 'El dulce',
		items: [
			{
				name: 'Carne de membrillo artesanal',
				note: 'La preparan en la casa, según una reseña de la ficha.',
			},
		],
	},
	{
		title: 'El obrador',
		items: [
			{ name: 'Pan', note: 'La ficha la clasifica como panadería; no publica variedades.' },
			{ name: 'Dulces', note: 'Los de la foto de la ficha, rebozados de azúcar.' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Divina Providencia?',
		a: 'En la calle del Barón, 12, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:15 a 14:30 y de 17:00 a 21:00; el sábado, de 8:00 a 14:30 y de 17:00 a 21:00. El domingo está cerrado. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
			a: 'La ficha la clasifica como panadería. Las reseñas citan pimientos asados, lasañas, tortillas de patatas y carne de membrillo artesanal. No hay carta ni precios publicados, así que esta web no los inventa.',
	},
	{
		q: '¿Hacen encargos?',
			a: 'La ficha no publica información sobre encargos. Lo mejor es llamar al 952 61 37 96 y preguntar directamente.',
	},
	{
		q: '¿Cómo se puede contactar?',
			a: 'El teléfono de la ficha es el 952 61 37 96. No publica página web ni correo electrónico.',
	},
	{
		q: '¿Es accesible?',
			a: 'La ficha de Google indica acceso para sillas de ruedas y aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
			a: 'Tiene 4,5 sobre 5 con 31 reseñas en Google. Las tres que se citan en esta página son las destacadas de la ficha: dos de cinco estrellas y una de cuatro.',
	},
	{
		q: '¿Tiene fotos la ficha?',
			a: 'Sí, dos: una bandeja de dulces y un pan en papel. Esta página usa esas dos fotos y dos vistas de Google Street View de la calle del Barón.',
	},
];
