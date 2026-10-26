/**
 * Datos de Sabores com Som — R. Cel. Guilherme Portugal 19, 2910-422 Setúbal (Portugal).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Sabores com Som», 38.5220716,-8.8806005,
 *   feature 0xd1943b8b3386757:0x5f7e5848c0032045 (dirección, teléfono, horario,
 *   categoría, nota, reseñas, accesibilidad y descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La cocina» resume lo que cuenta la descripción del negocio, lo que
 * citan las reseñas y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Sabores com Som',
	shortName: 'Sabores com Som',
	mark: 'SS',
	street: 'R. Cel. Guilherme Portugal, 19',
	city: 'Setúbal',
	region: 'Setúbal',
	regionName: 'Portugal',
	postalCode: '2910-422',
	country: 'PT',
	phoneDisplay: '932 119 810',
	phoneHref: 'tel:+351932119810',
	rating: 4.5,
	reviewsCount: 55,
	siteUrl: 'https://sabores-com-som.vercel.app',
	geo: { lat: 38.5220716, lng: -8.8806005 },
	featureId: '0xd1943b8b3386757:0x5f7e5848c0032045',
	placeId: 'ChIJV2c4s7hDGQ0RRSADwEhYfl8',
	cid: '6881034350151016517',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sabores+com+Som/@38.5220716,-8.8806005,17z/data=!3m1!4b1!4m6!3m5!1s0xd1943b8b3386757:0x5f7e5848c0032045!8m2!3d38.5220716!4d-8.8806005!16s%2Fg%2F11nn3wn6m2',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5220716%2C-8.8806005',
	embed: 'https://maps.google.com/maps?q=38.5220716,-8.8806005&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: cierra los lunes; de martes a sábado abre al
 * mediodía y vuelve por la noche; el domingo encadena comida y tarde.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–15:00 · 18:30–22:30' },
	{ day: 'Miércoles', value: '12:00–15:00 · 18:00–22:30' },
	{ day: 'Jueves', value: '12:00–15:00 · 18:00–22:30' },
	{ day: 'Viernes', value: '12:00–15:00 · 18:00–22:30' },
	{ day: 'Sábado', value: '12:00–15:00 · 18:00–22:30' },
	{ day: 'Domingo', value: '12:00–19:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Para mim dos melhores Restaurantes de Setúbal... comida top e ambiente top.',
	'Um lugar de gente simpática e comida boa',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que cuenta la descripción del negocio y lo que marca su ficha de
 * accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante',
	'Cocina portuguesa',
	'Churrasco',
	'Música ao vivo',
	'Espectáculos los fines de semana',
	'Ambiente típico portugués',
	'Comidas y cenas',
	'Entrada accesible para sillas de ruedas',
];

/**
 * La ficha no publica carta: los platos y los grupos salen de la pizarra del
 * menú completo que aparece en las fotos del perfil y de la descripción del
 * negocio («comida portuguesa, churrasco e muito mais»).
 */
export const MENU = [
	{
		title: 'Do mar',
		items: [
			{ name: 'Sardinhas', note: 'na grelha, no menú completo' },
			{ name: 'Carapaus', note: 'na grelha, no menú completo' },
			{ name: 'Dourada', note: 'na grelha, no menú completo' },
			{ name: 'Robalo', note: 'na grelha, no menú completo' },
			{ name: 'Peixe espada preto', note: 'na grelha, no menú completo' },
			{ name: 'Bacalhau à casa', note: 'el bacalhau de la casa, en la pizarra' },
		],
	},
	{
		title: 'Do churrasco',
		items: [
			{ name: 'Churrasco', note: 'en la descripción del negocio: «temos comida portuguesa, churrasco e muito mais»' },
			{ name: 'Grelhada mista', note: 'na brasa, no menú completo' },
			{ name: 'Febras', note: 'na brasa, no menú completo' },
			{ name: 'Entrecosto', note: 'na brasa, no menú completo' },
			{ name: 'Entremeadas', note: 'na brasa, no menú completo' },
			{ name: 'Picanha', note: 'en la pizarra de la entrada' },
		],
	},
	{			title: 'Para compartir',
		items: [
			{ name: 'Pan y aceitunas', note: 'en la mesa, en las fotos del perfil' },
			{ name: 'Entrada de la casa', note: 'en louça de barro, en las fotos del perfil' },
			{ name: 'Ensalada de lechuga, zanahoria y naranja', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Fruta de temporada', note: 'piña, plátano y naranja, en las fotos del perfil' },
			{ name: 'Café', note: 'para alargar la sobremesa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabores com Som?',
		a: 'En la Rua Coronel Guilherme Portugal, 19, del 2910-422 Setúbal, en Portugal. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a sábado sirve comidas de 12:00 a 15:00 y cenas desde las 18:00 o 18:30 hasta las 22:30. El domingo abre de 12:00 a 19:00, sin cerrar entre comida y tarde. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Hay música o espectáculos ao vivo?',
		a: 'Sí. El propio restaurante lo cuenta en su ficha: «aos fins-de-semana temos espectáculos ao vivo de diferentes artistas e géneros», además de «boa música» durante el servicio. La ficha no publica el cartel de cada fin de semana, así que para saber quién actúa hay que llamar al 932 119 810.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Su descripción lo resume así: «comida portuguesa, churrasco e muito mais», en un ambiente típico portugués. En las fotos del perfil aparecen la brasa y los platos de cocina portuguesa que salen de su cocina. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Por teléfono, en el 932 119 810. La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para grupos y para las noches con espectáculo conviene llamar con antelación.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca entrada accesible para personas en sillas de ruedas. No detalla el interior ni el aseo, así que para eso lo mejor es llamar antes al 932 119 810.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 55 reseñas. Las publicadas destacan la comida y el ambiente: «para mim dos melhores Restaurantes de Setúbal, comida top e ambiente top» y «um lugar de gente simpática e comida boa».',
	},
];
