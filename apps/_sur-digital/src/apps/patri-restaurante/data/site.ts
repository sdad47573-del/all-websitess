/**
 * Datos de PATRI Restaurante — Kale Nagusia Kalea, 14
 * (20170 Usurbil, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: PATRI Restaurante, 43.27005,-2.0507052,
 *   feature 0xd51b1ac2d73261f:0x88463a9d447c9443 (dirección, teléfono, horario,
 *   categoría, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, y su
 * descripción de comerciante llega corrupta («Kuala es la mejor cocina?..la
 * limpia»), así que no se usa. La carta resume lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'PATRI Restaurante',
	shortName: 'Patri',
	mark: 'PA',
	street: 'Kale Nagusia Kalea, 14',
	city: 'Usurbil',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phoneDisplay: '943 36 27 25',
	phoneHref: 'tel:+34943362725',
	rating: 4.7,
	reviewsCount: 460,
	siteUrl: 'https://www.sur-digital.com/patri-restaurante',
	geo: { lat: 43.27005, lng: -2.0507052 },
	featureId: '0xd51b1ac2d73261f:0x88463a9d447c9443',
	placeId: 'ChIJHyZzLayxUQ0RQ5R8RJ06Rog',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/PATRI+Restaurante/@43.27005,-2.0507052,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b1ac2d73261f:0x88463a9d447c9443!8m2!3d43.27005!4d-2.0507052!16s%2Fg%2F1ts30ldg',
	cid: 'https://www.google.com/maps?cid=9819600484661236803',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.27005%2C-2.0507052',
	embed: 'https://maps.google.com/maps?q=43.27005,-2.0507052&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comidas de 11:00 a 16:00 todos los días y
 * cenas de 19:00 a 24:00 los viernes y sábados.
 */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–16:00' },
	{ day: 'Martes', value: '11:00–16:00' },
	{ day: 'Miércoles', value: '11:00–16:00' },
	{ day: 'Jueves', value: '11:00–16:00' },
	{ day: 'Viernes', value: '11:00–16:00 · 19:00–24:00' },
	{ day: 'Sábado', value: '11:00–16:00 · 19:00–24:00' },
	{ day: 'Domingo', value: '11:00–16:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'La comida casera era muy rica, la camarera muy amable y atenta.' },
	{
		rating: 5,
		text: 'Comimos ensalada de tomate con bonito y chuleta con pimientos y patatas.',
	},
	{
		rating: 4,
		text: 'El arroz con hongos y huevo muy rico y el filete con roquefort super jugoso.',
	},
];

/**
 * Servicios y señas de identidad que sí constan: la categoría con la que Google
 * lo clasifica, su horario de comidas y cenas y lo que destacan sus reseñas.
 */
export const SERVICIOS = [
	'Restaurante en Usurbil',
	'Comida casera',
	'Comidas y cenas',
	'Menú del día',
	'Carnes a la plancha',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece
 * aquí lo dicen sus reseñas o se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Lo que piden las reseñas',
		items: [
			{
				name: 'Ensalada de tomate con bonito',
				note: 'citada por una de las reseñas del local',
			},
			{
				name: 'Chuleta con pimientos y patatas',
				note: '«comimos ensalada... y chuleta», cuenta otra reseña',
			},
			{
				name: 'Arroz con hongos y huevo',
				note: '«muy rico», en palabras de una reseña',
			},
			{
				name: 'Filete con roquefort',
				note: '«super jugoso», según la misma reseña',
			},
		],
	},
	{
		title: 'Lo que se ve en las fotos',
		items: [
			{
				name: 'Pescado con ajo y perejil',
				note: 'en las fotos del perfil de Google',
			},
			{
				name: 'Pescado en salsa blanca con patatas',
				note: 'en las fotos del perfil de Google',
			},
			{
				name: 'Ensalada mixta con atún y huevo',
				note: 'con espárragos y aceitunas, en las fotos del perfil',
			},
			{ name: 'Torrija con chocolate', note: 'de postre, en las fotos del perfil' },
			{ name: 'Mousse de chocolate', note: 'con nata montada, en las fotos del perfil' },
		],
	},
	{
		title: 'La casa',
		items: [
			{ name: 'Comida casera', note: '«la comida casera era muy rica»' },
			{ name: 'Menú del día', note: 'el local abre todos los días para comer' },
			{ name: 'Cenas de viernes y sábado', note: 'hasta las 24:00, según la ficha' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está PATRI Restaurante?',
		a: 'En Kale Nagusia Kalea, 14, del 20170 Usurbil (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Come todos los días de 11:00 a 16:00. Los viernes y sábados también abre para cenar, de 19:00 a 24:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 36 27 25. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera y menú del día. Sus reseñas citan la ensalada de tomate con bonito, la chuleta con pimientos y patatas, el arroz con hongos y huevo y el filete con roquefort. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Abre para cenar?',
		a: 'Solo viernes y sábados, de 19:00 a 24:00. El resto de días el servicio termina a las 16:00.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,7 sobre 5 con 460 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. No publica datos sobre aparcamiento adaptado.',
	},
];
