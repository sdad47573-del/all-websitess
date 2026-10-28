/**
 * Datos de Fortes S.C. Panadería y pastelería (C. del Pintor Berrobianco
 * Menéndez · Carretera de Cádiz · 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Fortes S.C.Panadería y pastelería,
 *   36.7092668,-4.4440092, feature 0xd72f77a1d5f5981:0xabf9845f19f4037.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario,
 *   accesibilidad y descripción del titular: ficha pública de Google
 *   (octubre de 2026).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   con scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia,
 * ni el número de la calle. Los productos citados son los que aparecen en la
 * descripción del establecimiento, en las reseñas y en las fotografías del
 * perfil; no se publican importes.
 */

export const BUSINESS = {
	name: 'Fortes',
	fullName: 'Fortes S.C. Panadería y pastelería',
	shortName: 'Fortes',
	mark: 'F',
	street: 'C. del Pintor Berrobianco Menéndez',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '952 34 45 20',
	phoneHref: 'tel:+34952344520',
	rating: 4.5,
	reviewsCount: 34,
	siteUrl: 'https://panaderia-pasteleria-fortes.vercel.app',
	geo: { lat: 36.7092668, lng: -4.4440092 },
	featureId: '0xd72f77a1d5f5981:0xabf9845f19f4037',
	placeId: 'ChIJgVlfHXr3cg0RN0Cf8UWYvwo',
	/** Cómo clasifica Google el local. */
	googleCategories: ['Panadería', 'Pastelería'],
	tagline: 'Panadería y pastelería de tres generaciones en Carretera de Cádiz, Málaga',
	description:
		'Fortes, panadería y pastelería en la calle Pintor Berrobianco Menéndez (Carretera de Cádiz, 29006 Málaga). Tres generaciones de pan y dulces artesanos. Abre todos los días; teléfono 952 34 45 20.',
	hoursSummary: 'De lunes a viernes, de 7:00 a 15:00 y de 17:00 a 21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Fortes+S.C.Panader%C3%ADa+y+pasteler%C3%ADa/@36.7092668,-4.4440092,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77a1d5f5981:0xabf9845f19f4037!8m2!3d36.7092668!4d-4.4440092!16s%2Fg%2F1vmr2qvp?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7092668%2C-4.4440092',
	embed: 'https://maps.google.com/maps?q=36.7092668,-4.4440092&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–15:00 · 17:00–21:00' },
	{ day: 'Martes', value: '7:00–15:00 · 17:00–21:00' },
	{ day: 'Miércoles', value: '7:00–15:00 · 17:00–21:00' },
	{ day: 'Jueves', value: '7:00–15:00 · 17:00–21:00' },
	{ day: 'Viernes', value: '7:00–15:00 · 17:00–21:00' },
	{ day: 'Sábado', value: '7:00–15:00' },
	{ day: 'Domingo', value: '7:00–15:00 · 17:00–20:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buenos dulces y económica',
	},
	{
		rating: 4,
		text: 'Mucha variedad de pasteles y buén pan, muy simpatica la chica.',
	},
];

/** Lo que la ficha, la descripción y las fotos del perfil indican que hay. */
export const SERVICIOS = [
	'Pan artesanal',
	'Pastelería',
	'Tartas',
	'Dulces',
	'Bollería',
	'Palmeras',
	'Torrijas',
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
				note: '«todo artesanal», en palabras del propio establecimiento',
			},
			{
				name: 'Pan del día',
				note: 'la ficha la clasifica como panadería y pastelería',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Tartas',
				note: 'de manzana, de fresas y de cumpleaños en las fotos del perfil',
			},
			{
				name: 'Pasteles y surtidos',
				note: '«mucha variedad de pasteles», según una de las reseñas',
			},
			{
				name: 'Palmeras',
				note: 'una reseña cuenta que compró dos palmeras',
			},
		],
	},
	{
		title: 'Dulces y despensa',
		items: [
			{
				name: 'Dulces',
				note: '«muy buenos dulces», resume otra reseña',
			},
			{
				name: 'Torrijas',
				note: 'con su cartel en el escaparate, en una de las fotos',
			},
			{
				name: 'Gran variedad de alimentos',
				note: 'así lo describe el establecimiento en su ficha',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la panadería y pastelería Fortes?',
		a: 'En la calle del Pintor Berrobianco Menéndez, en la zona de Carretera de Cádiz (29006 Málaga). La ficha de Google no publica el número de la calle, así que el mapa de esta página marca el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 15:00 y de 17:00 a 21:00. El sábado solo por la mañana, de 7:00 a 15:00, y el domingo vuelve a abrir en dos tramos, de 7:00 a 15:00 y de 17:00 a 20:30. En festivos puede cambiar: la ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 952 34 45 20. La panadería no tiene web propia ni página de pedidos online en Google.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El establecimiento describe su obrador como artesanal y con tres generaciones de experiencia: pan, dulces y una gran variedad de alimentos. Las reseñas hablan del pan, de los pasteles y de los dulces. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 34 reseñas en Google. Las reseñas destacan el pan, la variedad de pasteles, los dulces y el trato.',
	},
	{
		q: '¿Se puede encargar una tarta?',
		a: 'La ficha no publica un servicio de encargos ni plazos, así que no se puede dar por hecho. Lo mejor es llamar al 952 34 45 20 o preguntar en el mostrador.',
	},
];
