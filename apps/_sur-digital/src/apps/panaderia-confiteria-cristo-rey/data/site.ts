/**
 * Datos de Panadería Confitería Cristo Rey — Rotonda de Suárez, 1
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Confitería Cristo Rey,
 *   36.7289092,-4.443435, feature 0xd72f708d821c20b:0x9ccadfd41d160f76.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Reseñas publicadas en la misma ficha.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   con scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia.
 * Los productos citados son los que aparecen en las reseñas y en las
 * fotografías del perfil; no se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Confitería Cristo Rey',
	shortName: 'Cristo Rey',
	mark: 'CR',
	street: 'Rotonda de Suárez, 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '635 38 40 85',
	phoneHref: 'tel:+34635384085',
	rating: 4.3,
	reviewsCount: 75,
	siteUrl: 'https://www.sur-digital.com/panaderia-confiteria-cristo-rey',
	geo: { lat: 36.7289092, lng: -4.443435 },
	featureId: '0xd72f708d821c20b:0x9ccadfd41d160f76',
	placeId: 'ChIJC8Ih2Aj3cg0Rdg8WHdTfypw',
	/** Cómo clasifica Google el local. */
	googleCategories: ['Panadería', 'Cafetería'],
	tagline: 'Panadería y confitería en Bailén-Miraflores, Málaga',
	description:
		'Panadería Confitería Cristo Rey, en la Rotonda de Suárez, 1 (Bailén-Miraflores, 29011 Málaga). Pan artesano, empanadas, dulces y pasteles, con cafetería. Abre todos los días de 8:00 a 22:00; teléfono 635 38 40 85.',
	/** Horario publicado en la ficha de Google. */
	hoursSummary: 'Todos los días, de 8:00 a 22:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Cristo+Rey/@36.7289092,-4.443435,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f708d821c20b:0x9ccadfd41d160f76!8m2!3d36.7289092!4d-4.443435!16s%2Fg%2F11bzz1mf4j?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=11298088717326356342',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7289092%2C-4.443435',
	embed: 'https://maps.google.com/maps?q=36.7289092,-4.443435&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–22:00' },
	{ day: 'Martes', value: '8:00–22:00' },
	{ day: 'Miércoles', value: '8:00–22:00' },
	{ day: 'Jueves', value: '8:00–22:00' },
	{ day: 'Viernes', value: '8:00–22:00' },
	{ day: 'Sábado', value: '8:00–22:00' },
	{ day: 'Domingo', value: '8:00–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'He probado las empanadas de atún, la de pollo y otra de cebolla.',
	},
	{
		rating: 5,
		text: 'Buenísimos sus dulces y muy atentos a lo que necesites.',
	},
	{
		rating: 5,
		text: 'Excelente trato, el pan artesano se reconoce y los pasteles magníficos.',
	},
];

/** Lo que la ficha y las fotos del perfil muestran del local. */
export const SERVICIOS = [
	'Pan artesano',
	'Empanadas',
	'Bollería',
	'Pasteles',
	'Dulces',
	'Cafetería',
	'Para llevar',
];

/**
 * Productos que aparecen en las reseñas y en las fotografías del perfil.
 * La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{
				name: 'Pan artesano',
				note: 'el pan que las reseñas de la ficha destacan por su elaboración',
			},
			{
				name: 'Bollería',
				note: 'para el desayuno o la merienda, junto al café de la casa',
			},
			{
				name: 'Pasteles',
				note: '“los pasteles magníficos”, en palabras de una de las reseñas',
			},
		],
	},
	{
		title: 'Salado',
		items: [
			{
				name: 'Empanadas de atún',
				note: 'una de las que cita una reseña de la ficha',
			},
			{
				name: 'Empanadas de pollo',
				note: 'citadas en la misma reseña, junto a la de cebolla',
			},
			{
				name: 'Empanadas de cebolla',
				note: 'la tercera que prueba quien deja la reseña',
			},
		],
	},
	{
		title: 'Dulce y cafetería',
		items: [
			{
				name: 'Dulces',
				note: '“buenísimos sus dulces”, según las reseñas de Google',
			},
			{
				name: 'Café',
				note: 'la ficha clasifica el local también como cafetería',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Confitería Cristo Rey?',
		a: 'En la Rotonda de Suárez, 1, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica que abre todos los días de 8:00 a 22:00, sin día de cierre. Conviene confirmarlo antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 635 38 40 85. La panadería no tiene web propia ni página de pedidos online en la ficha.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y cafetería. Las reseñas hablan del pan artesano, de los dulces, de los pasteles y de las empanadas de atún, pollo y cebolla; las fotografías del perfil muestran el mostrador, el pan y la bollería.',
	},
	{
		q: '¿Tiene cafetería?',
		a: 'Sí, Google la clasifica también como cafetería. El local abre desde las 8:00, así que el café y la bollería están disponibles desde primera hora.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Es una panadería y confitería de barrio: el pan, la bollería, los pasteles y las empanadas se compran en el mostrador. La ficha no publica servicio a domicilio ni pedidos por WhatsApp.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 75 reseñas en Google. Las reseñas destacadas elogian el trato, el pan artesano, los pasteles, los dulces y las empanadas.',
	},
];
