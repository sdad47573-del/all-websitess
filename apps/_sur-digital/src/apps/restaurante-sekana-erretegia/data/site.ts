/**
 * Datos de Restaurante Sekaña Erretegia — Lugar Barrio Aginaga, 20
 * (20170 Aginaga, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Sekaña Erretegia, 43.2747958,-2.071319,
 *   feature 0xd51b72a0143a65b:0xf250c30def5ea53c (dirección, categoría, teléfono,
 *   nota, reseñas, accesibilidad, idiomas y etiqueta «Brunch»).
 * - Reseñas publicadas en esa misma ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica descripción, carta,
 * precios, horario, correo ni web propia. La sección «Lo que cuentan las reseñas»
 * recoge solo lo que dicen sus opiniones.
 */

export const BUSINESS = {
	name: 'Restaurante Sekaña Erretegia',
	shortName: 'Sekaña Erretegia',
	mark: 'SE',
	street: 'Lugar Barrio Aginaga, 20',
	city: 'Aginaga',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phone: '943 36 27 73',
	phoneHref: 'tel:+34943362773',
	rating: 4.6,
	reviewsCount: 242,
	siteUrl: 'https://www.sur-digital.com/restaurante-sekana-erretegia',
	geo: { lat: 43.2747958, lng: -2.071319 },
	featureId: '0xd51b72a0143a65b:0xf250c30def5ea53c',
	placeId: 'ChIJW6ZDASq3UQ0RPKVe7w3DUPI',
	/** Nombre alternativo que publica la ficha. */
	alternateName: 'Sekaña Erretegia',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Parrilla en Aginaga, Gipuzkoa',
	description:
		'Parrilla en Lugar Barrio Aginaga, 20 (20170 Aginaga, Gipuzkoa). Chuleta, costilla y cochinillo por encargo, con 4,6 sobre 5 en Google y 242 reseñas. Teléfono 943 36 27 73.',
	/** La ficha publica teléfono, pero ni web propia ni correo. */
	hasPublicPhone: true,
	/** Idiomas que declara la ficha. */
	languages: ['Español', 'Euskera'],
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Seka%C3%B1a+Erretegia/@43.2747958,-2.071319,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b72a0143a65b:0xf250c30def5ea53c!8m2!3d43.2747958!4d-2.071319!16s%2Fg%2F1th0crzm',
	cid: 'https://www.google.com/maps?cid=17460670219933361468',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2747958%2C-2.071319',
	embed: 'https://maps.google.com/maps?q=43.2747958,-2.071319&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario: en el panel del propietario aparece
 * «Añadir horario». No hay días que copiar, así que la tabla lo dice tal cual.
 */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Buen sitio para comer chuleta, costilla o cochinillo.' },
	{ rating: 4, text: 'Buenos asados, sobre todo el cochinillo (por encargo), postres caseros.' },
	{ rating: 5, text: 'Pollo a la brasa exquisita, buenas ensaladas…' },
];

/**
 * Señas de identidad que sí constan en la ficha: categoría, idiomas, etiqueta
 * de Google, accesibilidad y lo que destacan las reseñas.
 */
export const SERVICIOS = [
	'Parrilla',
	'Chuleta, costilla y cochinillo',
	'Cochinillo por encargo',
	'Postres caseros',
	'Acceso y aseo adaptados',
	'Español y euskera',
];

/**
 * La ficha no publica carta ni precios, así que esto no es una carta: es lo que
 * dicen las reseñas del local, agrupado para que se lea de un vistazo.
 */
export const MENU = [
	{
		title: 'La parrilla',
		items: [
			{
				name: 'Chuleta',
				note: '«buen sitio para comer chuleta, costilla o cochinillo», dice una reseña',
			},
			{
				name: 'Costilla',
				note: 'la misma opinión la cita junto a la chuleta y el cochinillo',
			},
			{
				name: 'Cochinillo por encargo',
				note: '«sobre todo el cochinillo (por encargo)», escribe otra reseña',
			},
			{
				name: 'Pollo a la brasa',
				note: '«pollo a la brasa exquisita», añade una tercera',
			},
		],
	},
	{
		title: 'La mesa',
		items: [
			{
				name: 'Ensaladas',
				note: 'la reseña del pollo a la brasa también las recomienda',
			},
			{
				name: 'Postres caseros',
				note: 'los citan entre los «buenos asados» de la casa',
			},
			{
				name: 'Asados',
				note: '«buenos asados», resumen de una de las opiniones destacadas',
			},
			{
				name: 'Español y euskera',
				note: 'los dos idiomas que declara la ficha del local',
			},
		],
	},
	{
		title: 'También en las fotos',
		items: [
			{
				name: 'Bogavantes a la parrilla',
				note: 'aparecen sobre las brasas en una de las fotos del perfil',
			},
			{
				name: 'Gambas a la plancha',
				note: 'con limón y mayonesa, en otra foto de la galería',
			},
			{
				name: 'Rodaballo al horno',
				note: 'con ajos laminados, tal como se ve en las fotos',
			},
			{
				name: 'Croquetas y jamón',
				note: 'dos entrantes que también recoge la galería del local',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Sekaña Erretegia?',
		a: 'En Lugar Barrio Aginaga, 20, del 20170 Aginaga (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario: en su lugar aparece la opción de añadirlo. Para saber cuándo abre hay que llamar al 943 36 27 73, sobre todo antes de desplazarse hasta Aginaga.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 36 27 73. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas hablan de chuleta, costilla, cochinillo y pollo a la brasa, además de ensaladas y postres caseros. El cochinillo se pide por encargo. No hay carta ni precios publicados, así que conviene llamar antes.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 242 reseñas en Google. Las opiniones destacadas elogian los asados, el cochinillo por encargo y los postres caseros.',
	},
];
