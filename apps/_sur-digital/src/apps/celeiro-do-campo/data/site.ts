/**
 * Datos de Restaurante Celeiro Do Campo — Av. Luísa Todi 121, 2900-324 Setúbal.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Celeiro Do Campo»,
 *   38.5227996,-8.8925642, feature 0xd1943c71e270913:0x520bbd40d5d5314f
 *   (dirección, categoría, horario, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha NO publica teléfono, sitio web, descripción del local ni carta con
 * precios: Google muestra los botones de «Añadir teléfono» y «Añadir sitio web».
 * Por eso esta web no inventa ninguno de esos datos y remite siempre a la ficha
 * de Google como único canal público.
 */

export const BUSINESS = {
	name: 'Restaurante Celeiro Do Campo',
	shortName: 'Celeiro do Campo',
	mark: 'CC',
	street: 'Av. Luísa Todi, 121',
	city: 'Setúbal',
	region: 'Setúbal',
	regionName: 'Portugal',
	postalCode: '2900-324',
	country: 'PT',
	/** La ficha no publica teléfono. */
	phoneDisplay: '',
	phoneHref: '',
	rating: 4.7,
	reviewsCount: 146,
	siteUrl: 'https://www.sur-digital.com/celeiro-do-campo',
	geo: { lat: 38.5227996, lng: -8.8925642 },
	featureId: '0xd1943c71e270913:0x520bbd40d5d5314f',
	placeId: 'ChIJEwknHsdDGQ0RTzHV1UC9C1I',
	cid: '5912027022016983375',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante',
	/** La ficha no publica descripción del local. */
	ownDescription: '',
	tagline: 'Buffet de mediodía en el centro de Setúbal',
	description:
		'Restaurante Celeiro do Campo, buffet de mediodía en la Av. Luísa Todi 121 (2900-324 Setúbal): sopa, barra de saladas, platos calientes y postre, de lunes a viernes de 12:00 a 15:00. 4,7 en Google con 146 reseñas.',
	hasPublicPhone: false,
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Celeiro+Do+Campo/@38.5227996,-8.8925642,17z/data=!3m1!4b1!4m6!3m5!1s0xd1943c71e270913:0x520bbd40d5d5314f!8m2!3d38.5227996!4d-8.8925642!16s%2Fg%2F11j3t578y2',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5227996%2C-8.8925642',
	embed: 'https://maps.google.com/maps?q=38.5227996,-8.8925642&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: solo mediodía, de lunes a viernes. */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–15:00' },
	{ day: 'Martes', value: '12:00–15:00' },
	{ day: 'Miércoles', value: '12:00–15:00' },
	{ day: 'Jueves', value: '12:00–15:00' },
	{ day: 'Viernes', value: '12:00–15:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y se ven en las fotos del perfil. */
export const SERVICIOS = [
	'Buffet de mediodía',
	'Sopa del día',
	'Barra de saladas',
	'Platos calientes',
	'Fruta fresca',
	'Postres caseros',
	'Accesible',
];

/**
 * La ficha no publica carta ni precios. Lo que sigue sale de las fotos del
 * perfil: la barra de saladas, las bandejas del buffet, la sopa y los postres.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Sopa del día', note: 'caldo con verduras, servido en cuenco, como en las fotos' },
			{
				name: 'Barra de saladas',
				note: 'lechugas, tomate, zanahoria, remolacha, kiwi, piña y fresa',
			},
			{ name: 'Entrantes fríos', note: 'olivas, huevos rellenos y verduras aliñadas' },
		],
	},
	{
		title: 'Del buffet',
		items: [
			{
				name: 'Guisos de la casa',
				note: 'setas y castañas en salsa cremosa, entre los platos calientes',
			},
			{ name: 'Patatas asadas', note: 'guarnición que aparece en todos los platos del perfil' },
			{ name: 'Verdura salteada', note: 'judías verdes con ajo, recién hechas' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Fruta fresca', note: 'papaya, plátano, naranja y manzana en el buffet' },
			{ name: 'Postre del día', note: 'crema dulce con coco rallado, servida en copa' },
			{ name: 'Café', note: 'para cerrar el menú de mediodía' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Celeiro do Campo?',
		a: 'En la Av. Luísa Todi, 121, en Setúbal (2900-324), en pleno centro de la ciudad. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Solo abre al mediodía: de lunes a viernes, de 12:00 a 15:00. Sábados y domingos cierra. Es el horario que publica su ficha de Google, que avisa de que puede cambiar en festivos.',
	},
	{
		q: '¿Cómo se come?',
			a: 'Con servicio de buffet: se coge la bandeja y se pasa por la sopa, la barra de saladas y los platos calientes, y se termina con fruta o postre. Las fotos del perfil muestran las bandejas, la barra de ensaladas y los platos ya servidos.',
	},
	{
		q: '¿Se puede reservar?',
			a: 'La ficha de Google no publica teléfono ni ofrece reserva online, y esta web no inventa ninguno de los dos. La ficha de Google Maps es el único canal público del restaurante; para una mesa, lo más práctico es acercarse en horario de mediodía.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
			a: 'Las fotos del perfil muestran una barra de saladas amplia y platos de verduras, patata y setas. La ficha no publica carta, así que conviene preguntar en el local por las opciones del día.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
			a: 'Su ficha de Google marca entrada y asientos accesibles para personas en sillas de ruedas. No confirma aseo ni aparcamiento adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
			a: '4,7 sobre 5 con 146 reseñas. Es una nota muy alta para un restaurante de mediodía en Setúbal.',
	},
	{
		q: '¿Tiene web o teléfono propio?',
			a: 'No. Su ficha de Google muestra «Añadir teléfono» y «Añadir sitio web», así que no hay un canal publicado más allá de Google Maps. Esta página es una ficha informativa elaborada con esos datos públicos.',
	},
];
