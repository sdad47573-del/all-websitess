/**
 * Datos de Joxe Mari Taberna — Erregezaintza Kalea, 49
 * (20008 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Joxe Mari Taberna, 43.3118598,-2.0002208,
 *   feature 0xd51b0082ceec065:0x9eec130ccea6b476 (dirección, categoría, teléfono,
 *   horario, nota, reseñas, accesibilidad y descripción del local).
 * - Descripción que publica el propio local en su ficha.
 * - Reseñas publicadas en esa misma ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta completa, precios, correo
 * ni web propia. La sección de cocina recoge solo lo que describe el local y lo
 * que citan sus reseñas, incluidas las críticas.
 */

export const BUSINESS = {
	name: 'Joxe Mari Taberna',
	shortName: 'Joxe Mari',
	mark: 'JM',
	street: 'Erregezaintza Kalea, 49',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20008',
	country: 'ES',
	phone: '943 90 51 24',
	phoneHref: 'tel:+34943905124',
	rating: 4.3,
	reviewsCount: 307,
	siteUrl: 'https://www.sur-digital.com/joxe-mari-taberna',
	geo: { lat: 43.3118598, lng: -2.0002208 },
	featureId: '0xd51b0082ceec065:0x9eec130ccea6b476',
	placeId: 'ChIJZcDuLAiwUQ0RdrSmzgwT7J4',
	/** Descripción que publica el propio local en Google. */
	ownDescription: 'Especialista en pintxos de alta elaboración',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Restaurante vasco en Donostia',
	description:
		'Joxe Mari Taberna, restaurante vasco en Erregezaintza Kalea, 49 (20008 Donostia / San Sebastián). Pintxos, raciones y menú del día, con 4,3 sobre 5 en Google y 307 reseñas. Teléfono 943 90 51 24.',
	/** La ficha publica teléfono, pero ni web propia ni correo. */
	hasPublicPhone: true,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Joxe+Mari+Taberna/@43.3118598,-2.0002208,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b0082ceec065:0x9eec130ccea6b476!8m2!3d43.3118598!4d-2.0002208!16s%2Fg%2F1tf596fx',
	cid: 'https://www.google.com/maps?cid=11451548898223895670',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3118598%2C-2.0002208',
	embed: 'https://maps.google.com/maps?q=43.3118598,-2.0002208&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra los lunes. */
export const HOURS = [
	{ day: 'Domingo', value: '10:00–24:00' },
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '8:00–24:00' },
	{ day: 'Miércoles', value: '8:00–24:00' },
	{ day: 'Jueves', value: '8:00–24:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '10:00–24:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buena cocina, con buenos pinchos y menú del día a precio asequible.',
	},
	{ rating: 2, text: 'Nachos insulsos, calamares súper salados y raciones escasas.' },
	{
		rating: 5,
		text: 'Sitio agradable y limpio, camarero súper profesional, y pintxos ricos.',
	},
];

/**
 * Señas de identidad que sí constan: categoría, descripción del local,
 * lo que citan las reseñas y la accesibilidad que marca la ficha.
 */
export const SERVICIOS = [
	'Restaurante vasco',
	'Pintxos de alta elaboración',
	'Menú del día',
	'Raciones',
	'Acceso y asientos adaptados',
	'Cierra los lunes',
];

export const MENU = [
	{
		title: 'La barra',
		items: [
			{
				name: 'Pintxos de alta elaboración',
				note: 'es la especialidad con la que se presenta el local en Google',
			},
			{
				name: 'Pintxos',
				note: '«pintxos ricos» y «buenos pinchos», dicen las reseñas',
			},
			{
				name: 'Raciones',
				note: 'las citan las opiniones; una de ellas las encontró escasas',
			},
			{
				name: 'Menú del día',
				note: '«menú del día a precio asequible», según una reseña',
			},
		],
	},
	{
		title: 'La casa',
		items: [
			{
				name: 'Cocina vasca',
				note: 'Google clasifica el local como restaurante vasco',
			},
			{
				name: 'Atención profesional',
				note: '«camarero súper profesional», destaca una opinión',
			},
			{
				name: 'Local limpio y agradable',
				note: '«sitio agradable y limpio», añade la misma reseña',
			},
			{
				name: 'Precio asequible',
				note: '«a precio asequible», en la reseña del menú del día',
			},
		],
	},
	{
		title: 'También en las fotos',
		items: [
			{
				name: 'Hamburguesas',
				note: 'con bacon y queso, en dos fotos de la galería del local',
			},
			{
				name: 'Cócteles',
				note: 'dos mojitos con lima y menta, servidos en la barra',
			},
			{
				name: 'Postres',
				note: 'helado con migas de galleta y caramelo, en otra foto',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Joxe Mari Taberna?',
		a: 'En Erregezaintza Kalea, 49, del 20008 Donostia / San Sebastián (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de martes a viernes de 8:00 a 24:00, y sábados y domingos de 10:00 a 24:00. Los lunes cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 90 51 24. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Se presenta como especialista en pintxos de alta elaboración. Sus reseñas hablan de pintxos, raciones y menú del día; también hay alguna crítica por raciones escasas o platos salados. No hay carta ni precios publicados, así que lo más directo es llamar.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 307 reseñas en Google. Las hay muy positivas, que destacan los pintxos y el menú del día, y alguna negativa por las raciones y el punto de sal.',
	},
];
