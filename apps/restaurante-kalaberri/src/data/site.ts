/**
 * Datos de Restaurante Kalaberri — Matia Kalea, 50 (20008 Donostia / San
 * Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Kalaberri / Restaurante en
 *   Donostia, 43.3128118,-2.0041333, feature
 *   0xd51baa096292cb9:0x5f15eadd62c37975 (dirección, teléfono, horario,
 *   categoría, descripción, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la carta resume lo que citan sus reseñas y lo que aparece en sus fotos.
 */

export const BUSINESS = {
	name: 'Restaurante Kalaberri',
	shortName: 'Kalaberri',
	mark: 'KA',
	street: 'Matia Kalea, 50',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20008',
	country: 'ES',
	phoneDisplay: '943 12 62 18',
	phoneHref: 'tel:+34943126218',
	rating: 4.7,
	reviewsCount: 361,
	siteUrl: 'https://restaurante-kalaberri.vercel.app',
	geo: { lat: 43.3128118, lng: -2.0041333 },
	featureId: '0xd51baa096292cb9:0x5f15eadd62c37975',
	placeId: 'ChIJuSwplqC6UQ0RdXnDYt3qFV8',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Kalaberri+%2F+Restaurante+en+Donostia/@43.3128118,-2.0041333,17z/data=!3m1!4b1!4m6!3m5!1s0xd51baa096292cb9:0x5f15eadd62c37975!8m2!3d43.3128118!4d-2.0041333!16s%2Fg%2F1tmxgwcv',
	cid: 'https://www.google.com/maps?cid=6851640644679727477',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3128118%2C-2.0041333',
	embed: 'https://maps.google.com/maps?q=43.3128118,-2.0041333&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: abre a las 11:00 todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–23:30' },
	{ day: 'Martes', value: '11:00–23:00' },
	{ day: 'Miércoles', value: '11:00–24:00' },
	{ day: 'Jueves', value: '11:00–24:00' },
	{ day: 'Viernes', value: '11:00–1:30' },
	{ day: 'Sábado', value: '11:00–1:30' },
	{ day: 'Domingo', value: '11:00–16:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Los pintxos y raciones deliciosos, y los platos de pescado exquisitos.' },
	{ rating: 5, text: 'Pedimos revuelto de hongos, pulpo, y cordero a la brasa.' },
	{ rating: 5, text: 'Ensalada de burrata, carrilleras, entrecot y revuelto de setas.' },
];

/** Lo que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Restaurante vasco en Donostia',
	'Pintxos',
	'Raciones',
	'Bocadillos',
	'Platos de pescado',
	'Buena música',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece
 * aquí lo dicen sus reseñas o se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Pintxos y raciones',
		items: [
			{
				name: 'Pintxos',
				note: '«los pintxos y raciones deliciosos», según una reseña',
			},
			{ name: 'Raciones', note: 'para compartir en la barra o en la mesa' },
			{ name: 'Bocadillos', note: 'citados en la descripción de la ficha' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Platos de pescado', note: '«exquisitos», en palabras de una reseña' },
			{ name: 'Pulpo', note: 'pedido y citado en una de las reseñas' },
			{ name: 'Cordero a la brasa', note: 'citado en la misma reseña' },
			{ name: 'Carrilleras', note: 'citadas en la ficha por sus clientes' },
			{ name: 'Entrecot', note: 'citado en la misma reseña' },
		],
	},
	{
		title: 'Para empezar y compartir',
		items: [
			{ name: 'Revuelto de hongos', note: 'citado en las reseñas del local' },
			{ name: 'Revuelto de setas', note: 'la otra forma de pedirlo que aparece en las reseñas' },
			{ name: 'Ensalada de burrata', note: 'citada en las reseñas del local' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Kalaberri?',
		a: 'En Matia Kalea, 50, del 20008 Donostia / San Sebastián (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días a las 11:00. Cierra a las 23:00 el martes, a las 23:30 el lunes, a las 24:00 miércoles y jueves, a la 1:30 viernes y sábado, y a las 16:00 el domingo. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 12 62 18. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pintxos, raciones y bocadillos, además de cocina vasca. Sus reseñas citan los platos de pescado, el pulpo, el cordero a la brasa, las carrilleras, el entrecot, el revuelto de hongos y la ensalada de burrata. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es un sitio para picar o para comer sentado?',
		a: 'Las dos cosas: la ficha describe «pintxos, raciones, bocadillos y buena música», y sus reseñas hablan de primeros, segundos y platos de pescado. Si vas a comer o cenar, conviene llamar y reservar.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,7 sobre 5 con 361 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. No marca aparcamiento adaptado.',
	},
];
