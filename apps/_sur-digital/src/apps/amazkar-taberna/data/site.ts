/**
 * Datos de Amazkar Taberna — Kontzejuerreka Kalea, 2
 * (20180 Elizalde, Oiartzun, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Amazkar Taberna, 43.2991021,-1.860758,
 *   feature 0xd51a8689c118057:0x761f7cb600e2ff7d (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia, y
 * su descripción de comerciante se reduce a «Sukaldaritza tradizionala». Por eso
 * la carta recoge solo lo que citan las reseñas y no hay importes en ningún sitio.
 */

export const BUSINESS = {
	name: 'Amazkar Taberna',
	shortName: 'Amazkar',
	mark: 'AT',
	street: 'Kontzejuerreka Kalea, 2',
	district: 'Elizalde',
	city: 'Oiartzun',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20180',
	country: 'ES',
	phoneDisplay: '612 55 88 53',
	phoneHref: 'tel:+34612558853',
	rating: 4.5,
	reviewsCount: 243,
	siteUrl: 'https://www.sur-digital.com/amazkar-taberna',
	geo: { lat: 43.2991021, lng: -1.860758 },
	featureId: '0xd51a8689c118057:0x761f7cb600e2ff7d',
	placeId: 'ChIJV4ARnGioUQ0Rff_iALZ8H3Y',
	/** Descripción con la que el local se presenta en Google Maps. */
	tagline: 'Sukaldaritza tradizionala',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Amazkar+Taberna/@43.2991021,-1.860758,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a8689c118057:0x761f7cb600e2ff7d!8m2!3d43.2991021!4d-1.860758!16s%2Fg%2F1tf3cw2j',
	cid: 'https://www.google.com/maps?cid=8511658941894295421',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2991021%2C-1.860758',
	embed: 'https://maps.google.com/maps?q=43.2991021,-1.860758&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre de miércoles a domingo y cierra
 * lunes y martes. Viernes y sábado alarga hasta medianoche.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '9:30–23:00' },
	{ day: 'Jueves', value: '9:30–23:00' },
	{ day: 'Viernes', value: '9:30–24:00' },
	{ day: 'Sábado', value: '9:30–24:00' },
	{ day: 'Domingo', value: '9:30–17:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Relación precio calidad adecuada, la cocinera Ohiana es una crack.' },
	{
		rating: 5,
		text: 'Las raciones espectaculares y los platos combinados increibles también.',
	},
	{ rating: 5, text: 'Trato amable, buen producto y profesionalidad' },
];

/**
 * Señas de identidad que sí constan en la ficha: la categoría con la que Google
 * lo clasifica, su cocina, su horario y los servicios que marca el local.
 */
export const SERVICIOS = [
	'Taberna en Oiartzun',
	'Cocina tradicional',
	'Raciones',
	'Platos combinados',
	'Se admiten perros',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo dicen sus reseñas o la propia descripción del local.
 */
export const MENU = [
	{
		title: 'Lo que citan las reseñas',
		items: [
			{
				name: 'Raciones',
				note: '«las raciones espectaculares», en palabras de una reseña',
			},
			{
				name: 'Platos combinados',
				note: '«los platos combinados increíbles también», añade la misma reseña',
			},
			{
				name: 'Cocina tradicional',
				note: '«Sukaldaritza tradizionala», la descripción del propio local en Google',
			},
		],
	},
	{
		title: 'La casa',
		items: [
			{
				name: 'Precio y calidad',
				note: '«relación precio calidad adecuada», según otra reseña',
			},
			{ name: 'Trato y producto', note: '«trato amable, buen producto y profesionalidad»' },
			{
				name: 'La cocina, a cargo de Ohiana',
				note: '«la cocinera Ohiana es una crack», dice una de las reseñas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Amazkar Taberna?',
		a: 'En Kontzejuerreka Kalea, 2, en el barrio de Elizalde del 20180 Oiartzun (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de miércoles a domingo: miércoles y jueves de 9:30 a 23:00, viernes y sábado de 9:30 a 24:00 y domingo de 9:30 a 17:00. Cierra lunes y martes. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 612 55 88 53. La ficha de Google no ofrece reserva online y el local tampoco publica una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina tradicional, raciones y platos combinados. La ficha no publica carta ni precios: lo que aparece en esta web es lo que citan sus reseñas, que hablan de raciones «espectaculares» y de platos combinados «increíbles».',
	},
	{
		q: '¿Abre los lunes y los martes?',
		a: 'No. La ficha de Google marca lunes y martes como días de cierre. El resto de la semana abre a las 9:30.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'Sí. La ficha de Google marca «se admiten perros» entre los servicios del local.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados. En cambio, no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 243 reseñas en Google.',
	},
];
