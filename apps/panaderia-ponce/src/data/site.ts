/**
 * Datos de Panadería Ponce (C. Lepanto, 2 · Carretera de Cádiz · 29003 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Ponce,
 *   36.6978632,-4.4439349, feature 0xd72f9d5dff7e699:0xb175acad3de8ead1.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario,
 *   accesibilidad y descripción del titular: ficha pública de Google
 *   (octubre de 2026).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   con scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios. Los
 * productos citados son los que aparecen en la descripción del establecimiento,
 * en las reseñas y en las fotografías del perfil; no se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Ponce',
	shortName: 'Ponce',
	mark: 'P',
	street: 'C. Lepanto, 2',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	phone: '951 24 32 68',
	phoneHref: 'tel:+34951243268',
	rating: 4.6,
	reviewsCount: 53,
	siteUrl: 'https://panaderia-ponce.vercel.app',
	geo: { lat: 36.6978632, lng: -4.4439349 },
	featureId: '0xd72f9d5dff7e699:0xb175acad3de8ead1',
	placeId: 'ChIJmeb339X5cg0R0eroPa2sdbE',
	googleCategories: ['Panadería'],
	tagline: 'Pan artesanal con más de 20 años en Carretera de Cádiz, Málaga',
	description:
		'Panadería Ponce, en la calle Lepanto, 2 (Carretera de Cádiz, 29003 Málaga). Pan artesanal elaborado en el obrador, con más de 20 años de oficio. Abre todos los días desde las 6:00; teléfono 951 24 32 68.',
	hoursSummary: 'De lunes a sábado, de 6:00 a 14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Ponce/@36.6978632,-4.4439349,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9d5dff7e699:0xb175acad3de8ead1!8m2!3d36.6978632!4d-4.4439349!16s%2Fg%2F11bzz5qnnk?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6978632%2C-4.4439349',
	embed: 'https://maps.google.com/maps?q=36.6978632,-4.4439349&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '6:00–14:30' },
	{ day: 'Martes', value: '6:00–14:30' },
	{ day: 'Miércoles', value: '6:00–14:30' },
	{ day: 'Jueves', value: '6:00–14:30' },
	{ day: 'Viernes', value: '6:00–14:30' },
	{ day: 'Sábado', value: '6:00–14:30' },
	{ day: 'Domingo', value: '6:00–14:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Hay mucha variedad (el mollete integral no lo encuentras en otro sitio).',
	},
	{
		rating: 4,
		text: 'Una panadería con un gran surtido y variedad, de panes y dulces.',
	},
	{
		rating: 4,
		text: 'Buen producto y buena atención',
	},
];

/** Lo que la ficha y las reseñas indican que hay. */
export const SERVICIOS = [
	'Pan artesanal',
	'Mollete integral',
	'Variedad de panes',
	'Dulces',
	'Tartas decoradas',
	'Para llevar',
];

/**
 * Productos que citan la descripción del establecimiento, las reseñas y las
 * fotografías del perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan artesanal',
				note: '«elaborado por nosotros», dice el establecimiento en su ficha',
			},
			{
				name: 'Mollete integral',
				note: '«no lo encuentras en otro sitio», según una reseña',
			},
			{
				name: 'Variedad de panes',
				note: '«un gran surtido y variedad, de panes y dulces», escribe otro cliente',
			},
		],
	},
	{
		title: 'Dulce',
		items: [
			{
				name: 'Dulces',
				note: 'citados en las reseñas junto a los panes',
			},
			{
				name: 'Tartas decoradas',
				note: 'una de las dos fotos del perfil enseña tartas de encargo de Superpapá',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Ponce?',
		a: 'En la calle Lepanto, 2, en la zona de Carretera de Cádiz (29003 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica de lunes a sábado de 6:00 a 14:30 y el domingo de 6:00 a 14:00. Abre todas las mañanas desde primera hora; en festivos el horario puede cambiar, y la propia ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 951 24 32 68. La panadería no tiene web propia ni página de pedidos online en Google.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El establecimiento describe su ficha como pan artesanal elaborado por ellos mismos, con más de 20 años de oficio. Las reseñas hablan de un gran surtido de panes y dulces y destacan el mollete integral. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas. No publica datos sobre el acceso al local, así que no se puede afirmar que la entrada sea accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 53 reseñas en Google. Las reseñas destacan la variedad de panes y dulces, el mollete integral, el producto y la atención.',
	},
];
