/**
 * Datos de Bar Restaurante El Caserío — Euskadi Etorbidea, 23 (20110 Trintxerpe,
 * Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Restaurante El Caserío»,
 *   43.3229758,-1.9339794, feature 0xd51a530b41d365f:0x3f58ef1d6bb3da5d
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Reseñas publicadas en esa ficha, recogidas también por GastroRanking: menú
 *   del día de 14 € entre semana, 20 € el de fin de semana, sopa de pescado,
 *   mariscada para dos por 65 €, crepes, tacos de cerdo, cachopo, txuleta y
 *   arroces, y las terrazas descubierta y cubierta con carpa.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta, así que la sección de la
 * carta resume lo que citan las reseñas publicadas. Los precios que aparecen son
 * los que ellas mismas mencionan, con la fecha del comentario.
 */

export const BUSINESS = {
	name: 'Bar Restaurante El Caserío',
	shortName: 'El Caserío',
	mark: 'EC',
	street: 'Euskadi Etorbidea, 23',
	city: 'Trintxerpe',
	municipality: 'Pasaia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 39 38 87',
	phoneHref: 'tel:+34943393887',
	rating: 4.1,
	reviewsCount: 532,
	siteUrl: 'https://bar-restaurante-el-caserio.vercel.app',
	geo: { lat: 43.3229758, lng: -1.9339794 },
	featureId: '0xd51a530b41d365f:0x3f58ef1d6bb3da5d',
	placeId: 'ChIJXzYdtDClUQ0RXdqzax3vWD8',
	cid: '4564661131980036701',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+El+Caser%C3%ADo/@43.3229758,-1.9339794,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a530b41d365f:0x3f58ef1d6bb3da5d!8m2!3d43.3229758!4d-1.9339794!16s%2Fg%2F11hz1hscjw',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3229758%2C-1.9339794',
	embed: 'https://maps.google.com/maps?q=43.3229758,-1.9339794&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: cierra los lunes. De martes a jueves abre solo
 * a mediodía, el viernes alarga hasta las 23:30 y el fin de semana empieza a las
 * 10:00, con cierre a las 16:00 el domingo.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: '9:00–17:00' },
	{ day: 'Miércoles', value: '9:00–17:00' },
	{ day: 'Jueves', value: '9:00–17:00' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '10:00–23:30' },
	{ day: 'Domingo', value: '10:00–16:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Varias veces hemos ido y la verdad que salimos contentos, repetiremos.',
	},
	{ rating: 4, text: 'Buen ambiente, buena comida y buena relación calidad precio.' },
	{ rating: 5, text: 'El menú del día estupendo, mucha variedad y muy rico.' },
] as const;

/**
 * Categoría y servicios que constan: Google lo clasifica como restaurante, la
 * ficha marca acceso y asientos adaptados, y las reseñas hablan de menú del día,
 * mariscada, terrazas y comedor. No se añade nada que no aparezca en ellas.
 */
export const SERVICIOS = [
	'Restaurante',
	'Menú del día',
	'Mariscos y pescado',
	'Txuleta y carnes',
	'Postres caseros',
	'Terraza descubierta',
	'Terraza cubierta',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de las reseñas publicadas y
 * los precios son los que ellas citan, con su fecha.
 */
export const MENU = [
	{
		title: 'El menú',
		items: [
			{
				name: 'Menú del día',
				note: '14 € entre semana, con primeros y segundos a elegir (reseña de noviembre de 2025)',
			},
			{
				name: 'Menú de fin de semana',
				note: '20 €, según la misma reseña',
			},
			{ name: 'Sopa de pescado', note: '«riquísima», entre los primeros del menú' },
			{ name: 'Postres caseros', note: 'incluidos en la mariscada, según una reseña' },
		],
	},
	{
		title: 'Para compartir',
		items: [
			{ name: 'Mariscada para dos', note: '65 € con bebida y postre, según una reseña de 2025' },
			{ name: 'Arroces con marisco', note: 'citados en las reseñas del menú' },
			{ name: 'Parrillada de marisco', note: 'en las promociones que publica el restaurante' },
		],
	},
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Txuleta', note: 'citada como plato fuerte en las reseñas' },
			{ name: 'Cachopo', note: 'citado en las reseñas del menú de fin de semana' },
			{ name: 'Tacos de cerdo', note: 'en las reseñas del menú' },
			{ name: 'Entrecot', note: 'en las promociones que publica el restaurante' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Bar Restaurante El Caserío?',
		a: 'En Euskadi Etorbidea, 23, en el 20110 Trintxerpe (Pasaia, Gipuzkoa), junto a la avenida que cruza el barrio. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a jueves abre de 9:00 a 17:00; el viernes, de 9:00 a 23:30; el sábado, de 10:00 a 23:30; y el domingo, de 10:00 a 16:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'Según una reseña de noviembre de 2025, el menú del día cuesta 14 € entre semana y 20 € el de fin de semana, con varios primeros y segundos a elegir. La ficha de Google no publica carta ni precios, así que el importe de hoy se consulta llamando al 943 39 38 87.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas: menú del día con sopa de pescado, crepes, tacos de cerdo, cachopo, txuleta, arroces con marisco y postres caseros, además de mariscada para dos. La carta cambia, así que lo mejor es preguntar al reservar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las reseñas describen una terraza descubierta y otra cubierta con carpa en un lateral, además del comedor interior con las mesas espaciadas. Al mediodía solo se sirve menú en la terraza, según uno de los comentarios.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 39 38 87. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,1 sobre 5 con 532 reseñas en Google. Las publicadas destacan la relación calidad-precio, la variedad del menú, el trato del personal y el ambiente familiar.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
