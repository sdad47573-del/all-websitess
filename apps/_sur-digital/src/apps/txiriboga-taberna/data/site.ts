/**
 * Datos de Txiriboga Taberna — Irazu Kalea, 6
 * (20170 Usurbil, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Txiriboga Taberna, 43.2702172,-2.0501156,
 *   feature 0xd51b120e2f99723:0x8b324cea6f10b486 (dirección, categorías, teléfono,
 *   horario, nota, reseñas, accesibilidad y descripción del propio local).
 * - Descripción bilingüe que publica la taberna en su ficha (euskera y castellano).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica precios ni carta completa. La
 * sección de cocina se apoya en la descripción del local y en sus reseñas.
 */

export const BUSINESS = {
	name: 'Txiriboga Taberna',
	shortName: 'Txiriboga',
	mark: 'TT',
	street: 'Irazu Kalea, 6',
	city: 'Usurbil',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phone: '943 21 88 40',
	phoneHref: 'tel:+34943218840',
	rating: 4.5,
	reviewsCount: 108,
	siteUrl: 'https://www.sur-digital.com/txiriboga-taberna',
	geo: { lat: 43.2702172, lng: -2.0501156 },
	featureId: '0xd51b120e2f99723:0x8b324cea6f10b486',
	placeId: 'ChIJI5f54iCxUQ0RhrQQb-pMMos',
	/** Categorías con las que Google clasifica el local. */
	tagline: 'Taberna y bar en Usurbil',
	description:
		'Taberna en Irazu Kalea, 6 (20170 Usurbil, Gipuzkoa). Cocina de producto local, carta, platos combinados y raciones, con pan hecho en casa. 4,5 sobre 5 en Google con 108 reseñas.',
	/** La ficha publica teléfono, pero ni web propia ni correo. */
	hasPublicPhone: true,
	/** Descripción que publica el propio local en Google. */
	ownDescription:
		'Comidas y cenas: del viernes a la noche al domingo al mediodía. Cocina de producto local. Carta, platos combinados o raciones. Pan hecho en casa.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Txiriboga+Taberna/@43.2702172,-2.0501156,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b120e2f99723:0x8b324cea6f10b486!8m2!3d43.2702172!4d-2.0501156!16s%2Fg%2F11fzfdpq44',
	cid: 'https://www.google.com/maps?cid=10030163889876939910',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2702172%2C-2.0501156',
	embed: 'https://maps.google.com/maps?q=43.2702172,-2.0501156&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra lunes y martes. */
export const HOURS = [
	{ day: 'Domingo', value: '11:00–23:00' },
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '11:00–23:00' },
	{ day: 'Jueves', value: '11:00–23:00' },
	{ day: 'Viernes', value: '11:00–23:00' },
	{ day: 'Sábado', value: '11:00–23:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Ricos pintxos y el camarero es muy majo.' },
	{ rating: 5, text: 'De postre pedimos torrija y mousse de chocolate, ambos buenos también.' },
	{ rating: 5, text: 'Un bar muy agradable y Iker muy buena gente. Los pinchos muy buenos.' },
];

/**
 * Señas de identidad que sí constan: categorías, descripción del local,
 * accesibilidad y el día que cierra.
 */
export const SERVICIOS = [
	'Taberna y bar',
	'Cocina de producto local',
	'Carta y platos combinados',
	'Raciones y pintxos',
	'Pan hecho en casa',
	'Cierra lunes y martes',
];

export const MENU = [
	{
		title: 'La carta',
		items: [
			{
				name: 'Cocina de producto local',
				note: 'es la base que describe la propia taberna en su ficha',
			},
			{
				name: 'Carta',
				note: 'la descripción del local la cita junto a los platos combinados',
			},
			{
				name: 'Platos combinados',
				note: '«carta, platos combinados o raciones», publica la taberna',
			},
			{
				name: 'Raciones',
				note: 'la tercera opción que ofrece la casa para comer',
			},
			{
				name: 'Pintxos',
				note: '«ricos pintxos», «los pinchos muy buenos», dicen las reseñas',
			},
		],
	},
	{
		title: 'La casa',
		items: [
			{
				name: 'Pan hecho en casa',
				note: 'lo destaca el propio local en su descripción de Google',
			},
			{
				name: 'Producto local',
				note: '«cocina de producto local», en palabras de la taberna',
			},
			{
				name: 'Atención cercana',
				note: '«el camarero es muy majo», «Iker muy buena gente»',
			},
			{
				name: 'Ambiente agradable',
				note: '«un bar muy agradable», resume otra reseña',
			},
		],
	},
	{
		title: 'Los postres',
		items: [
			{
				name: 'Torrija',
				note: '«de postre pedimos torrija», cuenta una reseña',
			},
			{
				name: 'Mousse de chocolate',
				note: 'la misma opinión la pone «buena también»',
			},
			{
				name: 'Comidas y cenas',
				note: 'del viernes por la noche al domingo al mediodía',
			},
			{
				name: 'Cierra lunes y martes',
				note: 'el resto de días abre de 11:00 a 23:00',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Txiriboga Taberna?',
		a: 'En Irazu Kalea, 6, del 20170 Usurbil (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de miércoles a domingo de 11:00 a 23:00. Los lunes y los martes cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cuándo sirven comidas y cenas?',
		a: 'La propia taberna explica en su ficha que sirve comidas y cenas del viernes por la noche al domingo al mediodía. El horario de apertura que publica Google es de miércoles a domingo, de 11:00 a 23:00.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 21 88 40. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La taberna describe cocina de producto local, con carta, platos combinados o raciones, y pan hecho en casa. Sus reseñas destacan los pintxos, la torrija y la mousse de chocolate. La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 108 reseñas en Google. Las opiniones destacadas elogian los pintxos, el trato del personal y los postres.',
	},
];
