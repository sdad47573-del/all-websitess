/**
 * Datos de Panadería Sultana Marroquí (C. Bocanegra, 2, local A2 ·
 * Carretera de Cádiz · 29003 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Sultana Marroquí,
 *   36.7021825,-4.4458344, feature 0xd72f780134c1563:0xce49605c73a1ccfe.
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
	name: 'Panadería Sultana Marroquí',
	shortName: 'Sultana',
	mark: 'SM',
	street: 'C. Bocanegra, 2, local A2',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	phone: '633 52 21 03',
	phoneHref: 'tel:+34633522103',
	rating: 4.5,
	reviewsCount: 53,
	siteUrl: 'https://panaderia-sultana-marroqui.vercel.app',
	geo: { lat: 36.7021825, lng: -4.4458344 },
	featureId: '0xd72f780134c1563:0xce49605c73a1ccfe',
	placeId: 'ChIJYxVME4D3cg0R_syhc1xgSc4',
	googleCategories: ['Panadería'],
	tagline: 'Panadería marroquí en Carretera de Cádiz, Málaga',
	description:
		'Panadería Sultana Marroquí, en la calle Bocanegra, 2, local A2 (Carretera de Cádiz, 29003 Málaga). Pan árabe recién hecho, pastelas, cuscús y dulces marroquíes artesanales. Abre todos los días de 10:00 a 22:00.',
	hoursSummary: 'Todos los días, de 10:00 a 22:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Sultana+Marroqu%C3%AD/@36.7021825,-4.4458344,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f780134c1563:0xce49605c73a1ccfe!8m2!3d36.7021825!4d-4.4458344!16s%2Fg%2F11sjfcf29c?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7021825%2C-4.4458344',
	embed: 'https://maps.google.com/maps?q=36.7021825,-4.4458344&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–22:00' },
	{ day: 'Martes', value: '10:00–22:00' },
	{ day: 'Miércoles', value: '10:00–22:00' },
	{ day: 'Jueves', value: '10:00–22:00' },
	{ day: 'Viernes', value: '10:00–22:00' },
	{ day: 'Sábado', value: '10:00–22:00' },
	{ day: 'Domingo', value: '10:00–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Hemos probado las pastelas y varios dulces y todo muy rico y trato muy agradable',
	},
	{
		rating: 5,
		text: 'Ricas milhojas y buena atención',
	},
	{
		rating: 4,
		text: 'El resto de productos que hemos comprado en otras ocasiones están ricos.',
	},
];

/** Lo que la ficha y la descripción del establecimiento indican que hay. */
export const SERVICIOS = [
	'Pan árabe',
	'Pastelas',
	'Cuscús',
	'Dulces marroquíes',
	'Milhojas',
	'Bollería',
	'Comida para llevar',
];

/**
 * Productos que citan la descripción del establecimiento, las reseñas y las
 * fotografías del perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{
				name: 'Pan árabe',
				note: '«pan árabe recién hecho», en palabras del establecimiento',
			},
			{
				name: 'Bollería',
				note: 'las fotos del perfil muestran bandejas de bollos recién horneados',
			},
		],
	},
	{
		title: 'Salado',
		items: [
			{
				name: 'Pastelas',
				note: '«pastelas tradicionales», según la descripción del local',
			},
			{
				name: 'Cuscús marroquí',
				note: 'el establecimiento lo anuncia en su ficha',
			},
		],
	},
	{
		title: 'Dulce',
		items: [
			{
				name: 'Dulces marroquíes',
				note: '«dulces marroquíes artesanales», en su propia descripción',
			},
			{
				name: 'Milhojas',
				note: '«ricas milhojas», según una reseña de la ficha',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Sultana Marroquí?',
		a: 'En la calle Bocanegra, 2, local A2, en la zona de Carretera de Cádiz (29003 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica que abre todos los días de 10:00 a 22:00, sin día de cierre y sin pausa al mediodía. En festivos el horario puede cambiar: la propia ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 633 52 21 03. Para encargos o para saber qué hay hoy, lo más directo es llamar o pasarse por el local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El establecimiento presenta su ficha así: cuscús marroquí, pastelas tradicionales, dulces marroquíes artesanales y pan árabe recién hecho. Las reseñas añaden las milhojas y otros dulces. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede comer allí o es solo para llevar?',
		a: 'Google la clasifica solo como panadería y la ficha habla de productos para comprar; no publica mesas ni servicio de restaurante. Lo que sí está claro es que el cuscús y las pastelas se pueden llevar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 53 reseñas en Google. Las reseñas destacan las pastelas, los dulces, las milhojas y el trato.',
	},
];
