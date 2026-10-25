/**
 * Datos de Taberna Xan de Patricio — Pob. Capilla, 13 (36528 Quintas, Agolada,
 * Pontevedra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Taberna Xan De Patricio»,
 *   42.8163279,-8.0317923, feature 0xd2fcc1d92b9c073:0x90f496a07a59ac52
 *   (teléfono, horario, categorías, nota, reseñas y accesibilidad).
 *   Google da el código postal 36528 y el plus code sitúa el local en Quintas
 *   (Agolada): «RX89+G7 Quintas, Golada».
 * - Reseñas publicadas en esa ficha: buen ambiente, buen trato, comida rica y
 *   precios asequibles.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que citan las reseñas y lo que muestran las
 * fotos del propio local.
 */

export const BUSINESS = {
	name: 'Taberna Xan de Patricio',
	shortName: 'Xan de Patricio',
	mark: 'XP',
	street: 'Pob. Capilla, 13',
	city: 'Quintas',
	municipality: 'Agolada',
	region: 'Pontevedra',
	regionName: 'Galicia',
	postalCode: '36528',
	country: 'ES',
	phoneDisplay: '646 29 37 19',
	phoneHref: 'tel:+34646293719',
	rating: 4.7,
	reviewsCount: 59,
	siteUrl: 'https://taberna-xan-de-patricio.vercel.app',
	geo: { lat: 42.8163279, lng: -8.0317923 },
	featureId: '0xd2fcc1d92b9c073:0x90f496a07a59ac52',
	placeId: 'ChIJc8C5kh3MLw0RUqxZeqCW9JA',
	cid: '10445139051770653778',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Taberna+Xan+De+Patricio/@42.8163279,-8.0317923,17z/data=!3m1!4b1!4m6!3m5!1s0xd2fcc1d92b9c073:0x90f496a07a59ac52!8m2!3d42.8163279!4d-8.0317923!16s%2Fg%2F11c52rmbf2',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.8163279%2C-8.0317923',
	embed: 'https://maps.google.com/maps?q=42.8163279,-8.0317923&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: cierra los lunes. El martes abre solo por la
 * tarde, de 18:30 a 23:00; de miércoles a domingo, de 12:30 a 23:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: '18:30–23:00' },
	{ day: 'Miércoles', value: '12:30–23:00' },
	{ day: 'Jueves', value: '12:30–23:00' },
	{ day: 'Viernes', value: '12:30–23:00' },
	{ day: 'Sábado', value: '12:30–23:00' },
	{ day: 'Domingo', value: '12:30–23:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Buen ambiente,buen trato comida rica,precios asequibles.' },
	{ rating: 5, text: 'Seguro que volveremos muchas veces más.' },
	{ rating: 4, text: 'Buen lugar con un muy buen ambiente' },
] as const;

/**
 * Categorías y servicios que constan: Google lo clasifica como taberna y bar,
 * marca acceso, aparcamiento, aseo y asientos adaptados, y las reseñas hablan
 * de buen ambiente, buen trato, comida rica y precios asequibles.
 */
export const SERVICIOS = [
	'Taberna',
	'Bar',
	'Comida casera',
	'Buen ambiente',
	'Precios asequibles',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de las reseñas publicadas
 * y de lo que muestran las fotos del perfil del local.
 */
export const MENU = [
	{
		title: 'De la casa',
		items: [
			{
				name: 'Tomate con queso fresco y anchoas',
				note: 'en sus fotos, con aceite y un hilo de balsámico',
			},
			{ name: 'Tortilla', note: 'en sus fotos, servida en la mesa para compartir' },
			{ name: 'Raciones', note: 'la mesa de la taberna, pensada para compartir' },
			{ name: 'Comida casera', note: '«comida rica», según las reseñas publicadas' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está la Taberna Xan de Patricio?',
		a: 'En Pob. Capilla, 13, en el 36528 Quintas (Agolada, Pontevedra). El mapa de esta página lleva directo a la taberna y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. El martes abre de 18:30 a 23:00 y de miércoles a domingo, de 12:30 a 23:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus fotos muestran raciones como tomate con queso fresco y anchoas y tortilla para compartir, y sus reseñas hablan de comida rica y precios asequibles. La ficha de Google no publica carta, así que la oferta del día se consulta llamando al 646 29 37 19.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del local muestran una terraza con mesas junto a la casa de piedra, además del comedor y la barra de madera.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 646 29 37 19. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 59 reseñas en Google. Las publicadas destacan el ambiente, el trato, la comida y los precios asequibles.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
