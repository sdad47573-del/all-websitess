/**
 * Datos de Bar Restaurante Juantxo — Lezo-Bide Kalea, 17 (20110 Pasai Donibane,
 * Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Restaurante Juantxo SL»,
 *   43.3230184,-1.9123003, feature 0xd51a5e2d42a7d45:0x80347790619df8d4
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Reseñas publicadas en esa ficha, recogidas también por GastroRanking.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta, así que la sección de la
 * carta resume lo que citan las reseñas (menú del día, arroz negro con alioli,
 * rape, postres caseros, pintxos de tortilla) y no da precios propios.
 */

export const BUSINESS = {
	name: 'Bar Restaurante Juantxo',
	legalName: 'Bar Restaurante Juantxo SL',
	shortName: 'Juantxo',
	mark: 'JU',
	street: 'Lezo-Bide Kalea, 17',
	city: 'Pasai Donibane',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 51 20 61',
	phoneHref: 'tel:+34943512061',
	rating: 4.3,
	reviewsCount: 446,
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-juantxo',
	geo: { lat: 43.3230184, lng: -1.9123003 },
	featureId: '0xd51a5e2d42a7d45:0x80347790619df8d4',
	placeId: 'ChIJRX0q1OKlUQ0R1PidYZB3NIA',
	cid: '9238140197640468692',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+Juantxo+SL/@43.3230184,-1.9123003,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a5e2d42a7d45:0x80347790619df8d4!8m2!3d43.3230184!4d-1.9123003!16s%2Fg%2F1tdd6l5v',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3230184%2C-1.9123003',
	embed: 'https://maps.google.com/maps?q=43.3230184,-1.9123003&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: los lunes cierra la cocina a las 17:00, de
 * martes a jueves y el domingo hasta las 22:00, y viernes y sábado hasta las
 * 23:30. Abre a las 9:00 todos los días.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–17:00' },
	{ day: 'Martes', value: '9:00–22:00' },
	{ day: 'Miércoles', value: '9:00–22:00' },
	{ day: 'Jueves', value: '9:00–22:00' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '9:00–23:30' },
	{ day: 'Domingo', value: '9:00–22:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Los segundos (albóndigas y chuletas de pavo) perfectos.',
		author: 'Reseña de Google',
	},
	{
		rating: 5,
		text: 'Comida muy buena, el servicio rápido y los camareros muy atentos.',
		author: 'Reseña de Google',
	},
	{
		rating: 5,
		text: 'Excelente servicio, camarera muy amable, comida excelente. Muy buena relación calidad-precio.',
		author: 'Reseña de Google',
	},
	{
		rating: 5,
		text: 'Pintxos de tortilla muy top para desayunar.',
		author: 'Reseña de Google',
	},
] as const;

/**
 * Categoría, servicios y señas de identidad que constan en la ficha de Google:
 * «Bar restaurante», acceso y asientos adaptados para sillas de ruedas, y lo que
 * citan las reseñas (menú del día, pintxos de tortilla, pescado, postres caseros).
 */
export const SERVICIOS = [
	'Bar restaurante',
	'Menú del día',
	'Cocina de pescado',
	'Postres caseros',
	'Pintxos y desayunos',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta ni precios, así que cada plato lleva la nota
 * de dónde consta. Los precios que aparecen son los que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Del menú',
		items: [
			{ name: 'Menú del día', note: 'citado en varias reseñas, también en domingo' },
			{ name: 'Menú de fin de semana', note: '28,50 € según una reseña de 2026; 30 € en otra' },
			{ name: 'Primeros de cuchara', note: 'sopa entre los platos que citan las reseñas' },
			{ name: 'Segundos de carne', note: 'albóndigas y chuletas de pavo, «perfectos»' },
		],
	},
	{
		title: 'Pescado y arroces',
		items: [
			{ name: 'Arroz negro con alioli', note: 'en las reseñas del menú de fin de semana' },
			{ name: 'Rape', note: 'citado como segundo del menú' },
			{ name: 'Pescado a la plancha', note: 'merluza con langostinos, en las fotos del perfil' },
		],
	},
	{
		title: 'Barra y postres',
		items: [
			{ name: 'Pintxo de tortilla', note: '«muy top para desayunar», dice una reseña' },
			{ name: 'Postres caseros', note: 'en las reseñas del menú' },
			{ name: 'Tarta de queso', note: 'con mermelada de frutos rojos, en las fotos del perfil' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Bar Restaurante Juantxo?',
		a: 'En Lezo-Bide Kalea, 17, en Pasai Donibane (20110 Pasaia, Gipuzkoa), a pie de la calle que sube desde el puerto. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono para reservar?',
		a: 'El 943 51 20 61. La ficha de Google no ofrece reserva online, así que conviene llamar, sobre todo para el menú del domingo y los fines de semana.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días a las 9:00. Los lunes cierra a las 17:00; de martes a jueves y el domingo hasta las 22:00; viernes y sábado hasta las 23:30. Es el horario que publica su ficha de Google y puede cambiar, así que lo mejor es confirmarlo por teléfono.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'El menú de fin de semana ronda los 28,50–30 € según reseñas de 2026, con primeros, segundos, postre y pan. La ficha de Google no publica carta ni precios, así que el importe del menú del día se consulta llamando.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas: menú del día con platos de cuchara, albóndigas y chuletas de pavo, arroz negro con alioli, rape y postres caseros. Por la mañana hay pintxos, entre ellos el de tortilla, que una reseña califica de «muy top para desayunar».',
	},
	{
		q: '¿Se puede desayunar o tomar algo en la barra?',
		a: 'Sí. Google lo clasifica como bar restaurante y abre a las 9:00, así que sirve desayunos y pintxos además de comidas y cenas.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,3 sobre 5 con 446 reseñas en Google. Las publicadas destacan el servicio atento, la relación calidad-precio y las raciones abundantes del menú.',
	},
	{
		q: '¿Se puede ir andando desde el centro de Pasai Donibane?',
		a: 'Sí: el restaurante está en Lezo-Bide Kalea, la calle que sale del casco de Pasai Donibane hacia Lezo. Una reseña propone comer aquí y después dar un paseo hasta el faro.',
	},
] as const;
