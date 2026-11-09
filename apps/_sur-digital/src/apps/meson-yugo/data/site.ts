/**
 * Datos de Mesón Yugo — Calle Santa María, 13 (10600 Plasencia, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesón Yugo, 40.0290349,-6.0899192,
 *   feature 0xd3e164a61e2b381:0x7c15fdbb52edb460 (dirección, teléfono, horario,
 *   categorías y reseñas).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica descripción, carta ni
 * precios, y no marca servicios ni accesibilidad, así que no se afirman.
 */

export const BUSINESS = {
	name: 'Mesón Yugo',
	shortName: 'Mesón Yugo',
	mark: 'MY',
	street: 'Calle Santa María, 13',
	city: 'Plasencia',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10600',
	country: 'ES',
	phoneDisplay: '927 41 95 04',
	phoneHref: 'tel:+34927419504',
	rating: 4.3,
	reviewsCount: 236,
	siteUrl: 'https://www.sur-digital.com/meson-yugo',
	geo: { lat: 40.0290349, lng: -6.0899192 },
	featureId: '0xd3e164a61e2b381:0x7c15fdbb52edb460',
	placeId: 'ChIJgbPiYUoWPg0RYLTtUrv9FXw',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mes%C3%B3n+Yugo/@40.0290349,-6.0899192,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e164a61e2b381:0x7c15fdbb52edb460!8m2!3d40.0290349!4d-6.0899192!16s%2Fg%2F11g0264qk3',
	cid: 'https://www.google.com/maps?cid=8941331616206009440',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0290349%2C-6.0899192',
	embed: 'https://maps.google.com/maps?q=40.0290349,-6.0899192&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comidas de 13:00 a 15:15 todos los días y
 * cenas de 20:00 a 23:30 de jueves a domingo.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–15:15' },
	{ day: 'Martes', value: '13:00–15:15' },
	{ day: 'Miércoles', value: '13:00–15:15' },
	{ day: 'Jueves', value: '13:00–15:15 · 20:00–23:30' },
	{ day: 'Viernes', value: '13:00–15:15 · 20:00–23:30' },
	{ day: 'Sábado', value: '13:00–15:15 · 20:00–23:30' },
	{ day: 'Domingo', value: '13:00–15:15 · 20:00–23:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Comida casera con menú del día los sábados muy rica y variada.' },
	{ rating: 5, text: 'Un buen sitio para comer bien, con raciones generosas, y a buen precio.' },
	{ rating: 5, text: 'Elegimos ensaladilla rusa, paella y judías de primero.' },
];

/**
 * Servicios y señas de identidad que sí constan en la ficha: las dos
 * categorías con las que Google lo clasifica y su horario de comidas y cenas.
 */
export const SERVICIOS = [
	'Restaurante en Plasencia',
	'Cocina española',
	'Cocina mediterránea',
	'Menú del día',
	'Comidas y cenas',
	'Calle Santa María, 13',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece
 * aquí lo dicen sus reseñas o se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Lo que citan las reseñas',
		items: [
			{
				name: 'Menú del día',
				note: '«comida casera con menú del día los sábados muy rica y variada»',
			},
			{ name: 'Ensaladilla rusa', note: 'uno de los primeros que eligen sus clientes' },
			{ name: 'Paella', note: 'citada en la misma reseña' },
			{ name: 'Judías', note: 'de primero, según esa reseña' },
		],
	},
	{
		title: 'De la casa',
		items: [
			{ name: 'Cocina casera', note: '«rica y variada», en palabras de una reseña' },
			{
				name: 'Raciones generosas',
				note: '«un buen sitio para comer bien... y a buen precio»',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón Yugo?',
		a: 'En la calle Santa María, 13, del 10600 Plasencia (Cáceres). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Come todos los días de 13:00 a 15:15. De jueves a domingo también abre para cenar, de 20:00 a 23:30. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 41 95 04. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera y menú del día. Sus reseñas citan la ensaladilla rusa, la paella y las judías, y destacan el menú del día de los sábados por «muy rico y variado». La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. Una de sus reseñas habla de «comida casera con menú del día los sábados muy rica y variada». El precio no está publicado en la ficha: se pregunta al llamar.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,3 sobre 5 con 236 reseñas en Google.',
	},
];
