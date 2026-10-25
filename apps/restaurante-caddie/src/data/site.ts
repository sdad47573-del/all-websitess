/**
 * Datos de Restaurante Caddie — Plaza Caddie, 3 (20160 Lasarte-Oria, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Caddie»,
 *   43.2737343,-2.0192432, feature 0xd51b052c7fbaf17:0x695d262ffb723fb8
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Reseñas publicadas en esa ficha: tapas, bocadillos, raciones, platos
 *   combinados, pinchos y menú del día; ensalada completa, merluza rebozada y
 *   hamburguesa con patatas alioli.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que citan las reseñas y lo que muestran las
 * fotos del propio restaurante.
 */

export const BUSINESS = {
	name: 'Restaurante Caddie',
	shortName: 'Caddie',
	mark: 'RC',
	street: 'Plaza Caddie, 3',
	city: 'Lasarte-Oria',
	municipality: 'Lasarte-Oria',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20160',
	country: 'ES',
	phoneDisplay: '943 37 07 04',
	phoneHref: 'tel:+34943370704',
	rating: 4.4,
	reviewsCount: 305,
	siteUrl: 'https://restaurante-caddie.vercel.app',
	geo: { lat: 43.2737343, lng: -2.0192432 },
	featureId: '0xd51b052c7fbaf17:0x695d262ffb723fb8',
	placeId: 'ChIJF6_7x1KwUQ0RuD9y-y8mXWk',
	cid: '7592266534340411320',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Caddie/@43.2737343,-2.0192432,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b052c7fbaf17:0x695d262ffb723fb8!8m2!3d43.2737343!4d-2.0192432!16s%2Fg%2F1v7tmppw',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2737343%2C-2.0192432',
	embed: 'https://maps.google.com/maps?q=43.2737343,-2.0192432&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: abre todos los días menos el martes. Entre
 * semana empieza a las 6:30; el fin de semana, a las 9:00, y alarga hasta
 * medianoche viernes y sábado.
 */
export const HOURS = [
	{ day: 'Lunes', value: '6:30–22:00' },
	{ day: 'Martes', value: 'Cerrado' },
	{ day: 'Miércoles', value: '6:30–22:00' },
	{ day: 'Jueves', value: '6:30–22:00' },
	{ day: 'Viernes', value: '6:30–24:00' },
	{ day: 'Sábado', value: '9:00–24:00' },
	{ day: 'Domingo', value: '9:00–22:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Tienen tapas, bocadillos, raciones, platos combinados, pinchos, menu del dia.',
	},
	{ rating: 5, text: 'Una ensalada completisima, un plato combinado con merluza rebozada.' },
	{ rating: 5, text: 'Buenísima la hamburguesa y patata alioli!' },
] as const;

/**
 * Categorías y servicios que constan: Google lo clasifica como restaurante y
 * taberna, marca acceso y asientos adaptados y las reseñas hablan de tapas,
 * pinchos, bocadillos, raciones, platos combinados y menú del día.
 */
export const SERVICIOS = [
	'Restaurante',
	'Taberna',
	'Menú del día',
	'Tapas y pinchos',
	'Bocadillos',
	'Raciones',
	'Platos combinados',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de las reseñas publicadas
 * y de lo que muestran las fotos del perfil del restaurante.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{ name: 'Tapas', note: 'citadas en las reseñas del restaurante' },
			{
				name: 'Pinchos',
				note: 'en la barra, con tostas de setas y montaditos en sus fotos',
			},
			{ name: 'Raciones', note: 'para compartir, según las reseñas' },
			{ name: 'Bocadillos', note: 'en la lista de lo que sirve la casa' },
		],
	},
	{
		title: 'A la mesa',
		items: [
			{
				name: 'Menú del día',
				note: 'anunciado en la ficha, con primeros y segundos a elegir',
			},
			{ name: 'Platos combinados', note: 'con merluza rebozada, entre las reseñas' },
			{ name: 'Ensalada completa', note: '«completísima», en una reseña publicada' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Hamburguesa', note: 'con patatas alioli, citada en las reseñas' },
			{ name: 'Merluza rebozada', note: 'en un plato combinado, según una reseña' },
			{ name: 'Entrecot con patatas', note: 'en sus fotos, también con huevo frito' },
			{ name: 'Guiso de carne con puré', note: 'en una de las fotos del comedor' },
			{ name: 'Tarta de queso', note: 'casera, en sus fotos de postres' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Caddie?',
		a: 'En Plaza Caddie, 3, en el 20160 Lasarte-Oria (Gipuzkoa). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los martes. El resto de la semana abre a las 6:30 de lunes a viernes y a las 9:00 el fin de semana; entre semana cierra a las 22:00, el viernes y el sábado alarga hasta medianoche y el domingo vuelve a las 22:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, el restaurante anuncia menú del día. La ficha de Google no publica la carta ni el precio, así que el menú de hoy se consulta llamando al 943 37 07 04.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas: tapas, pinchos, bocadillos, raciones, platos combinados y menú del día, además de ensalada completa, merluza rebozada en plato combinado y hamburguesa con patatas alioli. La carta cambia, así que lo mejor es preguntar al llegar.',
	},
	{
		q: '¿Se puede desayunar o tomar algo a media mañana?',
		a: 'El horario de la ficha empieza a las 6:30 de lunes a viernes, así que abre para el desayuno y el café de la mañana. La ficha de Google lo etiqueta además como taberna.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 37 07 04. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 305 reseñas en Google. Las publicadas destacan la ensalada, la merluza rebozada, la hamburguesa con patatas alioli y la variedad de tapas, pinchos y platos combinados.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
