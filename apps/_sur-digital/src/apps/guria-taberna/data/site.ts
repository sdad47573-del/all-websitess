/**
 * Datos de Guria Taberna — Puntapax Kalea, 12 (20170 Usurbil, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Guria Taberna», 43.272541,-2.0478871,
 *   feature 0xd51b1200991eb2b:0xf547ae416714c31f (dirección, teléfono,
 *   horario, categorías, nota, reseñas y accesibilidad).
 * - Reseñas publicadas en esa ficha.
 * - Oferta que el local anuncia en portales de empleo: «Taberna de bocadillos,
 *   hamburguesas, platos combinados y ensaladas».
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que citan las reseñas y lo que el propio local
 * anuncia, sin importes ni platos que no consten.
 */

export const BUSINESS = {
	name: 'Guria Taberna',
	shortName: 'Guria',
	mark: 'GU',
	street: 'Puntapax Kalea, 12',
	city: 'Usurbil',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phoneDisplay: '943 55 93 35',
	phoneHref: 'tel:+34943559335',
	rating: 4.4,
	reviewsCount: 142,
	siteUrl: 'https://www.sur-digital.com/guria-taberna',
	geo: { lat: 43.272541, lng: -2.0478871 },
	featureId: '0xd51b1200991eb2b:0xf547ae416714c31f',
	placeId: 'ChIJK-uRCSCxUQ0RH8MUZ0GuR_U',
	cid: '17674286858564322079',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Guria+Taberna/@43.272541,-2.0478871,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b1200991eb2b:0xf547ae416714c31f!8m2!3d43.272541!4d-2.0478871!16s%2Fg%2F11cs23647q',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.272541%2C-2.0478871',
	embed: 'https://maps.google.com/maps?q=43.272541,-2.0478871&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: cierra los lunes. Los martes solo abre por la
 * noche; miércoles y jueves tienen mediodía y noche; de viernes a domingo
 * encadena desde media mañana hasta medianoche.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: '18:00–24:00' },
	{ day: 'Miércoles', value: '11:00–15:00 · 18:00–23:00' },
	{ day: 'Jueves', value: '11:00–15:00 · 18:00–23:30' },
	{ day: 'Viernes', value: '11:00–24:00' },
	{ day: 'Sábado', value: '11:30–24:00' },
	{ day: 'Domingo', value: '11:00–24:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'La ensalada, las tapas y los bocadillos muy buenos, sobre todo el vegetal!!!',
	},
	{
		rating: 5,
		text: 'Buena cerveza, buen servicio, buenos platos combinados y muy buenas hamburguesas.',
	},
	{
		rating: 5,
		text: 'Han atendido muy bien, las patatas bravas buenísimas.',
	},
] as const;

/**
 * Categorías y servicios que constan: Google la clasifica como restaurante y
 * taberna; el local anuncia bocadillos, hamburguesas, platos combinados y
 * ensaladas; las reseñas añaden tapas y patatas bravas. La ficha marca acceso,
 * aseo y asientos adaptados.
 */
export const SERVICIOS = [
	'Taberna y restaurante',
	'Bocadillos',
	'Hamburguesas',
	'Platos combinados',
	'Ensaladas',
	'Tapas',
	'Patatas bravas',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
] as const;

/**
 * Carta: la ficha no publica carta ni precios. Cada plato lleva la nota de dónde
 * consta, para no presentar como carta oficial lo que solo citan las reseñas o
 * el anuncio del propio local.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{ name: 'Bocadillos', note: '«sobre todo el vegetal», dice una reseña' },
			{ name: 'Tapas', note: 'citadas junto a los bocadillos en las reseñas' },
			{ name: 'Patatas bravas', note: '«buenísimas», según una reseña' },
			{ name: 'Ensaladas', note: 'en la oferta que publica el local' },
			{ name: 'Cerveza', note: '«buena cerveza», dice una reseña' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Hamburguesas', note: '«muy buenas», según una reseña' },
			{ name: 'Platos combinados', note: 'en las reseñas y en la oferta del local' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está Guria Taberna?',
		a: 'En Puntapax Kalea, 12, en el 20170 Usurbil (Gipuzkoa). El mapa de esta página lleva directo a la taberna y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. Los martes abre solo por la noche, de 18:00 a 24:00; los miércoles y jueves tiene mediodía y noche (11:00–15:00 y 18:00–23:00, hasta las 23:30 el jueves); el viernes abre de 11:00 a 24:00, el sábado de 11:30 a 24:00 y el domingo de 11:00 a 24:00.',
	},
	{
		q: '¿Se puede comer al mediodía?',
		a: 'Sí, de miércoles a domingo: miércoles y jueves de 11:00 a 15:00, y de viernes a domingo desde las 11:00 (el sábado desde las 11:30) hasta medianoche. Los martes solo hay servicio de noche y los lunes cierra.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es una taberna de bocadillos, hamburguesas, platos combinados y ensaladas, según la oferta que publica el propio local. Sus reseñas añaden tapas, el bocadillo vegetal y las patatas bravas, y hablan bien de la cerveza.',
	},
	{
		q: '¿Tiene carta o precios publicados?',
		a: 'La ficha de Google no publica carta ni precios, así que esta web no reproduce ninguno. Los platos que aparecen aquí son los que citan las reseñas y la oferta del local; para precios y disponibilidad, hay que llamar o preguntar en la barra.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 55 93 35. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 142 reseñas en Google. Las publicadas destacan el trato, los bocadillos, las hamburguesas, los platos combinados y las patatas bravas.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
