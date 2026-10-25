/**
 * Datos de Bar Restaurante Belartza — Gurutzegi Kalea, 15, Bajo Local A4
 * (20018 Donostia / San Sebastián, Gipuzkoa), en el polígono Belartza.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «BAR RESTAURANTE BELARTZA SL»,
 *   43.279942,-2.0106997, feature 0xd51b100ffb076c7:0x41464310c4fc8cdb
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   «se admiten perros»).
 * - Descripción que el propio establecimiento publica en esa ficha: desayunos,
 *   bocadillos, pinchos variados, platos combinados y menús del día caseros
 *   para trabajadores y empresas del polígono.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta se limita a lo que anuncian la descripción y las reseñas.
 */

export const BUSINESS = {
	name: 'Bar Restaurante Belartza',
	shortName: 'Belartza',
	mark: 'BR',
	street: 'Gurutzegi Kalea, 15, Bajo Local A4',
	city: 'Donostia',
	municipality: 'San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20018',
	country: 'ES',
	phoneDisplay: '943 53 98 49',
	phoneHref: 'tel:+34943539849',
	rating: 4.4,
	reviewsCount: 15,
	siteUrl: 'https://bar-restaurante-belartza.vercel.app',
	geo: { lat: 43.279942, lng: -2.0106997 },
	featureId: '0xd51b100ffb076c7:0x41464310c4fc8cdb',
	placeId: 'ChIJx3aw_wCxUQ0R24z8xBBDRkE',
	cid: '4703520600138484955',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/BAR+RESTAURANTE+BELARTZA+SL/@43.279942,-2.0106997,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b100ffb076c7:0x41464310c4fc8cdb!8m2!3d43.279942!4d-2.0106997!16s%2Fg%2F11zbft960k',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.279942%2C-2.0106997',
	embed: 'https://maps.google.com/maps?q=43.279942,-2.0106997&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: de lunes a viernes, de 8:00 a 18:30, y cierra
 * sábados y domingos. Es un bar de polígono, así que sigue el calendario laboral.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–18:30' },
	{ day: 'Martes', value: '8:00–18:30' },
	{ day: 'Miércoles', value: '8:00–18:30' },
	{ day: 'Jueves', value: '8:00–18:30' },
	{ day: 'Viernes', value: '8:00–18:30' },
	{ day: 'Sábado', value: 'Cerrado' },
	{ day: 'Domingo', value: 'Cerrado' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Bar top, buena comida, buenos pintxos y buen café.' },
	{ rating: 5, text: 'Muchas gracias por todo, volveremos eso es cierto :)' },
] as const;

/**
 * Categoría y servicios que constan en la ficha o en la descripción del propio
 * establecimiento. No se añade nada que no aparezca en ellas.
 */
export const SERVICIOS = [
	'Restaurante vasco',
	'Desayunos',
	'Bocadillos',
	'Pinchos variados',
	'Platos combinados',
	'Menú del día casero',
	'Café',
	'Se admiten perros',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
] as const;

/**
 * Carta: la ficha no publica carta ni precios. Los apartados salen de la
 * descripción del establecimiento y de lo que citan sus reseñas.
 */
export const MENU = [
	{
		title: 'El menú del día',
		items: [
			{
				name: 'Menú del día',
				note: '16 € con postre, pan y bebida, según la pizarra del bar',
			},
			{
				name: 'Primeros de la pizarra',
				note: 'lentejas, espaguetis a la carbonara, ensalada mixta, templada de gulas y menestra de verduras',
			},
			{
				name: 'Segundos de la pizarra',
				note: 'filete con patatas, pechugas con ensalada, hamburguesa con patatas y ensalada, y pimientos rellenos de bacalao',
			},
		],
	},
	{
		title: 'Desayunos y barra',
		items: [
			{ name: 'Café', note: 'citado en las reseñas del bar' },
			{ name: 'Bocadillos', note: 'en la descripción que publica el establecimiento' },
			{ name: 'Pinchos variados', note: 'la barra del mediodía, según su ficha' },
			{ name: 'Platos combinados', note: 'en la descripción del establecimiento' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Albóndigas en salsa', note: 'con patatas, en las fotos del menú' },
			{
				name: 'Entrecot con salsa de queso',
				note: 'con patatas fritas y pimientos del piquillo, en sus fotos',
			},
			{ name: 'Patatas con guisantes', note: 'estofado del menú, en sus fotos' },
			{ name: 'Torreznos', note: 'servidos en la terraza, en sus fotos' },
			{ name: 'Arroz con leche', note: 'postre casero con canela, en sus fotos' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Bar Restaurante Belartza?',
		a: 'En Gurutzegi Kalea, 15, Bajo Local A4, en el 20018 Donostia / San Sebastián (Gipuzkoa). Está en el polígono Belartza, la zona industrial de la ciudad, y el mapa de esta página lleva directo a la puerta. «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes, de 8:00 a 18:30, y cierra sábados y domingos. Es el horario que publica su ficha de Google y sigue el ritmo laboral del polígono, así que conviene confirmarlo por teléfono antes de acercarse.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El establecimiento anuncia menús del día caseros para trabajadores y empresas, y su pizarra lo pone a 16 € con postre, pan y bebida. La ficha de Google no publica la carta, así que el menú de hoy se consulta llamando al 943 53 98 49.',
	},
	{
		q: '¿Qué se puede tomar?',
		a: 'Según su propia descripción: desayunos, bocadillos, pinchos variados, platos combinados y menús del día caseros. Las reseñas destacan la comida, los pintxos y el café.',
	},
	{
		q: '¿Es un bar para trabajadores del polígono?',
		a: 'Sí. Belartza es un polígono industrial y el bar se presenta como uno de sus bares de referencia, con menús caseros y servicio ágil para trabajadores, empresas y cualquiera que quiera comer bien y rápido.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'La ficha de Google marca aparcamiento adaptado para sillas de ruedas. Al estar en un polígono industrial, el aparcamiento de la zona es el habitual de las calles del entorno.',
	},
	{
		q: '¿Es accesible y se admiten perros?',
		a: 'La ficha marca acceso para sillas de ruedas y aparcamiento adaptado, y añade que se admiten perros.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 53 98 49. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 15 reseñas en Google. Las publicadas hablan de «buena comida, buenos pintxos y buen café» y de volver.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
