/**
 * Datos de Panadería Santa Ana Colombiana — C. Ibrahin, 1
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Santa Ana Colombiana,
 *   36.728935,-4.4424789, feature 0xd72f708e9ad79b9:0x5f3d1cb01a017d53.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Reseñas publicadas en la misma ficha.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   para src/assets/fotos/.
 * - Cartel visible en una de las fotos del perfil: «Panificadora Santa Ana ·
 *   Phanor Herrera · Panadería y Repostería Gourmet», con tortas y pasabocas
 *   para eventos y el teléfono 665 72 07 62.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia.
 * Los productos citados son los que aparecen en las reseñas, en las
 * fotografías del perfil y en el cartel del obrador; no se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Santa Ana Colombiana',
	shortName: 'Santa Ana',
	mark: 'SA',
	street: 'C. Ibrahin, 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '952 39 24 93',
	phoneHref: 'tel:+34952392493',
	/** Teléfono que anuncia el cartel del obrador para encargos. */
	orderPhone: '665 72 07 62',
	orderPhoneHref: 'tel:+34665720762',
	rating: 4.5,
	reviewsCount: 27,
	siteUrl: 'https://panaderia-santa-ana-colombiana.vercel.app',
	geo: { lat: 36.728935, lng: -4.4424789 },
	featureId: '0xd72f708e9ad79b9:0x5f3d1cb01a017d53',
	placeId: 'ChIJuXmt6Qj3cg0RU30BGrAcPV8',
	googleCategory: 'Panadería',
	tagline: 'Panadería colombiana y repostería en Bailén-Miraflores',
	description:
		'Panadería Santa Ana Colombiana, en C. Ibrahin, 1 (Bailén-Miraflores, 29010 Málaga). Pan del día, empanadas, tortas y pasabocas por encargo. Abre de martes a domingo y cierra los lunes. Teléfono 952 39 24 93.',
	hoursSummary: 'Martes a sábado, 8:00–22:00 · Domingo, 8:00–3:00 · Lunes, cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Santa+Ana+Colombiana/@36.728935,-4.4424789,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f708e9ad79b9:0x5f3d1cb01a017d53!8m2!3d36.728935!4d-4.4424789!16s%2Fg%2F1tj34h1h?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=6862672949858630995',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.728935%2C-4.4424789',
	embed: 'https://maps.google.com/maps?q=36.728935,-4.4424789&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes a sábado', value: '8:00–22:00' },
	{ day: 'Domingo', value: '8:00–3:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buena atención, pan muy bueno',
	},
	{
		rating: 5,
		text: 'Precios inmejorables.',
	},
	{
		rating: 5,
		text: 'Pan de calidad 100x100',
	},
];

/** Lo que la ficha, las fotos y el cartel del obrador muestran. */
export const SERVICIOS = [
	'Panadería colombiana',
	'Repostería gourmet',
	'Tortas por encargo',
	'Empanadas',
	'Helados de fruta',
	'Para llevar',
];

/**
 * Productos que aparecen en las fotografías del perfil y en el cartel del
 * obrador. La ficha no publica carta ni precios, así que no se muestran
 * importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{
				name: 'Hogazas de pan',
				note: 'pan de corteza dorada y miga abierta, como el que sale del horno en las fotos del perfil',
			},
			{
				name: 'Pan del día',
				note: 'las reseñas lo describen como «pan muy bueno» y «pan de calidad 100x100»',
			},
		],
	},
	{
		title: 'Repostería',
		items: [
			{
				name: 'Tartas de chocolate',
				note: 'con galleta, nata o fresas, según la pieza',
			},
			{
				name: 'Tartas de fruta',
				note: 'con melocotón, uva y fresa sobre crema',
			},
			{
				name: 'Tartas de cumpleaños',
				note: 'por encargo; el cartel del obrador anuncia tortas para eventos especiales',
			},
		],
	},
	{
		title: 'Para picar y celebrar',
		items: [
			{
				name: 'Empanadas colombianas',
				note: 'de masa de maíz, fritas, en bandeja',
			},
			{
				name: 'Pasabocas para eventos',
				note: 'el cartel del obrador los anuncia junto a las tortas',
			},
			{
				name: 'Helados de fruta',
				note: 'La Quindianita, en el mostrador de la panadería',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Santa Ana Colombiana?',
		a: 'En la calle Ibrahin, 1, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de martes a sábado de 8:00 a 22:00. El domingo la ficha marca de 8:00 a 3:00, y el lunes figura como cerrado. Para el domingo 1 de noviembre, Día de Todos los Santos, la ficha avisa de que el horario podría ser diferente.',
	},
	{
		q: '¿Cierra los lunes?',
		a: 'Sí, la ficha de Google marca el lunes como día de cierre. El resto de la semana abre a las 8:00.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 952 39 24 93. Además, el cartel del obrador anuncia el 665 72 07 62 para encargos de tortas y pasabocas.',
	},
	{
		q: '¿Hacen tartas y pasabocas para eventos?',
		a: 'El cartel visible en las fotos del perfil anuncia «tortas y pasabocas para eventos especiales». Los encargos se consultan en el teléfono que aparece en ese mismo cartel, el 665 72 07 62. La ficha de Google no publica catálogo, precios ni plazos.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y el nombre indica que es colombiana. En las fotos del perfil se ven hogazas de pan, empanadas, tartas de chocolate y de fruta, tartas de cumpleaños, helados de fruta y productos envasados. La ficha no publica carta ni precios, así que esta página no cita importes.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 27 reseñas en Google. Las reseñas destacadas elogian la atención, el pan y los precios.',
	},
];
