/**
 * Datos de Itxaropena 1910 — Enbeltran Kalea, 16
 * (20003 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Itxaropena 1910, 43.3225195,-1.9854189,
 *   feature 0xd51a54d831992a7:0x79ab5f2bdf0de516 (dirección, categorías,
 *   teléfono, horario, nota, reseñas, accesibilidad y descripción de Google).
 * - Reseñas publicadas en esa misma ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del local, carta,
 * precios, correo ni web propia. La sección de cocina recoge solo lo que citan
 * las reseñas y la frase con la que Google describe el local.
 */

export const BUSINESS = {
	name: 'Itxaropena 1910',
	shortName: 'Itxaropena',
	mark: 'I10',
	street: 'Enbeltran Kalea, 16',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20003',
	country: 'ES',
	phone: '943 43 62 10',
	phoneHref: 'tel:+34943436210',
	rating: 4.3,
	reviewsCount: 1588,
	siteUrl: 'https://www.sur-digital.com/itxaropena-1910',
	geo: { lat: 43.3225195, lng: -1.9854189 },
	featureId: '0xd51a54d831992a7:0x79ab5f2bdf0de516',
	placeId: 'ChIJp5IZg02lUQ0RFuUN3ytfq3k',
	/** Frase con la que Google describe el local en su ficha. */
	googleBlurb: 'Tapas en un restaurante con paredes de piedra',
	tagline: 'Bar restaurante y vinoteca en Donostia',
	description:
		'Itxaropena 1910, bar restaurante en Enbeltran Kalea, 16 (20003 Donostia / San Sebastián). Tapas, pintxos, raciones y vinos, con 4,3 sobre 5 en Google y 1.588 reseñas. Teléfono 943 43 62 10.',
	/** La ficha publica teléfono, pero ni web propia ni correo. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Itxaropena+1910/@43.3225195,-1.9854189,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a54d831992a7:0x79ab5f2bdf0de516!8m2!3d43.3225195!4d-1.9854189!16s%2Fg%2F1tgnyjvr',
	cid: 'https://www.google.com/maps?cid=8767205741637264662',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3225195%2C-1.9854189',
	embed: 'https://maps.google.com/maps?q=43.3225195,-1.9854189&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra los miércoles. */
export const HOURS = [
	{ day: 'Domingo', value: '12:00–23:00' },
	{ day: 'Lunes', value: '12:00–23:00' },
	{ day: 'Martes', value: '12:00–23:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '12:00–23:00' },
	{ day: 'Viernes', value: '12:00–23:00' },
	{ day: 'Sábado', value: '12:00–23:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 4, text: 'Vinoteca con pinchos y raciones muy buenas a precio razonable.' },
	{
		rating: 5,
		text: 'La ensalada de alcachofas el taco de chuleta, nos encantó tanto repetimos.',
	},
	{
		rating: 5,
		text: 'La ración de carrilleras y el pintxo de zamburiñas estaban muy ricos.',
	},
];

/**
 * Señas de identidad que sí constan: categorías, la frase de Google,
 * lo que citan las reseñas y la accesibilidad que marca la ficha.
 */
export const SERVICIOS = [
	'Bar restaurante y vinoteca',
	'Tapas y pinchos',
	'Raciones',
	'Paredes de piedra',
	'Acceso y aseo adaptados',
	'Cierra los miércoles',
];

export const MENU = [
	{
		title: 'La barra',
		items: [
			{
				name: 'Pintxos',
				note: '«pinchos y raciones muy buenas a precio razonable», dice una reseña',
			},
			{
				name: 'Pintxo de zamburiñas',
				note: '«estaban muy ricos», añade otra opinión',
			},
			{
				name: 'Tapas',
				note: 'es la palabra con la que Google presenta el local',
			},
			{
				name: 'Raciones',
				note: 'la misma reseña destaca las raciones de la casa',
			},
			{
				name: 'Vinos',
				note: 'una de las reseñas define el local como «vinoteca»',
			},
		],
	},
	{
		title: 'La cocina',
		items: [
			{
				name: 'Ensalada de alcachofas',
				note: '«nos encantó tanto repetimos», cuenta una reseña',
			},
			{
				name: 'Taco de chuleta',
				note: 'la misma opinión lo cita junto a la ensalada',
			},
			{
				name: 'Carrilleras',
				note: '«la ración de carrilleras… estaba muy rica»',
			},
		],
	},
	{
		title: 'La casa',
		items: [
			{
				name: 'Paredes de piedra',
				note: 'Google describe el local como «tapas en un restaurante con paredes de piedra»',
			},
			{
				name: 'Precio razonable',
				note: '«a precio razonable», resume una de las opiniones',
			},
			{
				name: 'Acceso y aseo adaptados',
				note: 'la ficha marca acceso, aseo y asientos adaptados',
			},
			{
				name: 'Cierra los miércoles',
				note: 'el resto de días abre de 12:00 a 23:00',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Itxaropena 1910?',
		a: 'En Enbeltran Kalea, 16, del 20003 Donostia / San Sebastián (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de jueves a martes, de 12:00 a 23:00. Los miércoles cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 43 62 10. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas hablan de pintxos, tapas y raciones, con un pintxo de zamburiñas, ensalada de alcachofas, taco de chuleta y carrilleras. No hay carta ni precios publicados, así que para saber qué hay hoy lo más directo es llamar al 943 43 62 10.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. También indica que no hay aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 1.588 reseñas en Google. Las opiniones destacadas elogian los pintxos, las raciones y el precio.',
	},
];
