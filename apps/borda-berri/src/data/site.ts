/**
 * Datos de Restaurante Borda Berri — Aldura Gunea Aldea, 53 (20100 Errenteria,
 * Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Borda Berri», 43.2710494,-1.9035473,
 *   feature 0xd51ab95760a7daf:0x208ceeb189a94511 (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Descripción que publica el propio restaurante en su ficha: comida tradicional
 *   y organización de comuniones, bautizos y comidas de empresa.
 * - Reseñas publicadas en esa ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que no se
 * reproducen. Tampoco se afirma nada sobre terraza, aparcamiento no adaptado ni
 * tipo de cocina que no conste en las fuentes.
 */

export const BUSINESS = {
	name: 'Restaurante Borda Berri',
	shortName: 'Borda Berri',
	mark: 'BB',
	street: 'Aldura Gunea Aldea, 53',
	city: 'Errenteria',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20100',
	country: 'ES',
	phoneDisplay: '943 52 92 74',
	phoneHref: 'tel:+34943529274',
	rating: 4.0,
	reviewsCount: 698,
	siteUrl: 'https://borda-berri.vercel.app',
	geo: { lat: 43.2710494, lng: -1.9035473 },
	featureId: '0xd51ab95760a7daf:0x208ceeb189a94511',
	placeId: 'ChIJr30KdpWrUQ0REUWpibHujCA',
	cid: '2345511952239379729',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Borda+Berri/@43.2710494,-1.9035473,17z/data=!3m1!4b1!4m6!3m5!1s0xd51ab95760a7daf:0x208ceeb189a94511!8m2!3d43.2710494!4d-1.9035473!16s%2Fg%2F1tj7gcl5',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2710494%2C-1.9035473',
	embed: 'https://maps.google.com/maps?q=43.2710494,-1.9035473&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: abre todos los días de 12:00 a 23:45, sin
 * excepción de domingos ni festivos.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–23:45' },
	{ day: 'Martes', value: '12:00–23:45' },
	{ day: 'Miércoles', value: '12:00–23:45' },
	{ day: 'Jueves', value: '12:00–23:45' },
	{ day: 'Viernes', value: '12:00–23:45' },
	{ day: 'Sábado', value: '12:00–23:45' },
	{ day: 'Domingo', value: '12:00–23:45' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 4, text: 'La comida casera estaba muy rica y las raciones eran generosas.' },
	{ rating: 5, text: 'Sitio muy bonito, y platos combinados muy majos, buena atención.' },
	{ rating: 2, text: 'Pedimos unos pinchos de morcilla y chorizo: en ambos casos secos y de mala calidad.' },
] as const;

/**
 * Descripción que el propio restaurante publica en su ficha de Google.
 */
export const DESCRIPCION_LOCAL =
	'Somos Borda Berri Restaurante, un restaurante de comida tradicional que cuenta con el reconocimiento de los clientes gracias a la exquisitez de los platos que elabora. Organizamos comuniones, bautizos y comidas para empresas.';

/**
 * Servicios que constan: la descripción del titular (comida tradicional y
 * celebraciones) y los servicios de accesibilidad que marca la ficha.
 */
export const SERVICIOS = [
	'Comida tradicional',
	'Comuniones y bautizos',
	'Comidas de empresa',
	'Platos combinados',
	'Terraza cubierta',
	'Jardín',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta ni precios. Cada entrada lleva la nota de
 * dónde consta.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Croquetas y calamares', note: 'en las fotos del perfil' },
			{ name: 'Ensalada con jamón y atún', note: 'en las fotos del perfil' },
			{ name: 'Pinchos de morcilla y chorizo', note: 'citados en una reseña, con crítica a su punto' },
		],
	},
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Entrecot con patatas y pimientos', note: 'en las fotos del perfil' },
			{ name: 'Chuletas de cerdo con patatas', note: 'en las fotos del perfil' },
			{ name: 'Dorada a la plancha', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Celebraciones',
		items: [
			{ name: 'Comuniones', note: 'el restaurante organiza este tipo de celebraciones' },
			{ name: 'Bautizos', note: 'también en la descripción del titular' },
			{ name: 'Comidas de empresa', note: 'el restaurante las anuncia en su ficha' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Borda Berri?',
		a: 'En Aldura Gunea Aldea, 53, en el 20100 Errenteria (Gipuzkoa), en el entorno rural de Aldura, fuera del casco urbano. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 12:00 a 23:45, también domingos. Es el horario que publica su ficha de Google y puede cambiar por celebraciones o temporada, así que conviene confirmarlo llamando.',
	},
	{
		q: '¿Organizan comuniones, bautizos y comidas de empresa?',
		a: 'Sí. El propio restaurante lo anuncia en la descripción de su ficha de Google: organiza comuniones, bautizos y comidas para empresas. Para fechas y condiciones hay que hablar con el restaurante.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Comida tradicional, según se define el propio restaurante. Sus reseñas hablan de comida casera, raciones generosas y platos combinados, y en las fotos del perfil aparecen croquetas, calamares, ensalada con jamón, entrecot, chuletas y dorada. La ficha de Google no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 52 92 74. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,0 sobre 5 con 698 reseñas en Google. Las publicadas destacan la comida casera, las raciones generosas y la atención; también hay alguna crítica por el punto de los pinchos.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
