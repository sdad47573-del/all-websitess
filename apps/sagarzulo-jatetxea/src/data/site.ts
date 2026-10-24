/**
 * Datos de Sagarzulo Jatetxea — Herriondo Bailara, 8 (Calle Valle)
 * (20100 Lezo, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Sagarzulo jatetxea, 43.3168622,-1.8913513,
 *   feature 0xd51ab95760a7daf:0xe907addd1a2925fd (dirección, teléfono, horario,
 *   categorías, nota, reseñas, servicios y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del local, carta,
 * precios ni web propia. La carta recoge solo lo que citan sus reseñas y las
 * categorías con las que Google lo clasifica. No hay importes en ningún sitio.
 */

export const BUSINESS = {
	name: 'Sagarzulo Jatetxea',
	shortName: 'Sagarzulo',
	mark: 'SZ',
	street: 'Herriondo Bailara, 8',
	streetNote: 'Calle Valle',
	district: 'Herriondo',
	city: 'Lezo',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20100',
	country: 'ES',
	phoneDisplay: '675 70 15 83',
	phoneHref: 'tel:+34675701583',
	rating: 4.5,
	reviewsCount: 681,
	siteUrl: 'https://sagarzulo-jatetxea.vercel.app',
	geo: { lat: 43.3168622, lng: -1.8913513 },
	featureId: '0xd51ab95760a7daf:0xe907addd1a2925fd',
	placeId: 'ChIJr30KdpWrUQ0R_SUpGt2tB-k',
	/** Categorías con las que Google clasifica el local. */
	tagline: 'Parrilla y restaurante en Lezo',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sagarzulo+jatetxea/@43.3168622,-1.8913513,17z/data=!3m1!4b1!4m6!3m5!1s0xd51ab95760a7daf:0xe907addd1a2925fd!8m2!3d43.3168622!4d-1.8913513!16s%2Fg%2F1tgtgtw_',
	cid: 'https://www.google.com/maps?cid=16791580900812465661',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3168622%2C-1.8913513',
	embed: 'https://maps.google.com/maps?q=43.3168622,-1.8913513&z=16&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre de 8:30 a 19:30 todos los días
 * salvo el miércoles. No hay servicio de cena en ese horario.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:30–19:30' },
	{ day: 'Martes', value: '8:30–19:30' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '8:30–19:30' },
	{ day: 'Viernes', value: '8:30–19:30' },
	{ day: 'Sábado', value: '8:30–19:30' },
	{ day: 'Domingo', value: '8:30–19:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Pescado y carne a la brasa, sopas de cocido, jamon, todo riquisimo.' },
	{ rating: 4, text: 'La comida muy rica , con raciones abundantes y el precio razonable.' },
	{ rating: 5, text: 'Croquetas, calamares, pimientos rellenos, tortilla de bacalao exquisito todo.' },
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google lo
 * clasifica, el brunch que marca la ficha y sus datos de accesibilidad.
 */
export const SERVICIOS = [
	'Parrilla en Lezo',
	'Restaurante',
	'Brunch',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece aquí
 * lo citan las reseñas de Google.
 */
export const MENU = [
	{
		title: 'De la brasa',
		items: [
			{
				name: 'Carne a la brasa',
				note: '«pescado y carne a la brasa», dice una de sus reseñas',
			},
			{ name: 'Pescado a la brasa', note: 'en la misma reseña, como lo primero que destaca' },
		],
	},
	{
		title: 'De cuchara y de la casa',
		items: [
			{ name: 'Sopas de cocido', note: '«sopas de cocido», añade esa reseña' },
			{ name: 'Jamón', note: '«jamón, todo riquísimo», en palabras de la misma opinión' },
			{
				name: 'Tortilla de bacalao',
				note: '«tortilla de bacalao exquisito todo», según otra reseña',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Croquetas', note: '«croquetas, calamares, pimientos rellenos», enumera una reseña' },
			{ name: 'Calamares', note: 'en la misma lista de platos de esa reseña' },
			{ name: 'Pimientos rellenos', note: 'el tercero de los platos que cita' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sagarzulo Jatetxea?',
		a: 'En Herriondo Bailara, 8 (Calle Valle), en el barrio de Herriondo del 20100 Lezo (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 8:30 a 19:30 todos los días salvo el miércoles, que cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Abre para cenar?',
		a: 'El horario publicado termina a las 19:30, así que la ficha no recoge servicio de cena. Si buscas cenar, conviene llamar antes al 675 70 15 83 y preguntar.',
	},
	{
		q: '¿Es una parrilla?',
		a: 'Sí. Google lo clasifica como parrilla y restaurante, y sus reseñas hablan de «pescado y carne a la brasa». También aparece marcado como brunch en la ficha.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan carne y pescado a la brasa, sopas de cocido, jamón, tortilla de bacalao, croquetas, calamares y pimientos rellenos, con «raciones abundantes». La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 675 70 15 83. La ficha de Google no ofrece reserva online y el local tampoco publica una web propia.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'Sí. La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 681 reseñas en Google.',
	},
];
