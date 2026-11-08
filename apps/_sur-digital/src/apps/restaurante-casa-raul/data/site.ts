/**
 * Datos de Restaurante Casa Raúl — Av. Martín Palomino, 88
 * (10600 Plasencia, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Casa Raúl,
 *   40.0091006,-6.1109882, feature 0xd3e170a72a7dd0f:0xc17eed8be710f866
 *   (dirección, teléfono, horario, categorías, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la carta resume lo que citan sus reseñas y lo que aparece en sus fotos.
 */

export const BUSINESS = {
	name: 'Restaurante Casa Raúl',
	shortName: 'Casa Raúl',
	mark: 'CR',
	street: 'Av. Martín Palomino, 88',
	city: 'Plasencia',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10600',
	country: 'ES',
	phoneDisplay: '927 42 29 55',
	phoneHref: 'tel:+34927422955',
	rating: 4.2,
	reviewsCount: 2174,
	siteUrl: 'https://www.sur-digital.com/restaurante-casa-raul',
	geo: { lat: 40.0091006, lng: -6.1109882 },
	featureId: '0xd3e170a72a7dd0f:0xc17eed8be710f866',
	placeId: 'ChIJD92ncgoXPg0RZvgQ54vtfsE',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Casa+Ra%C3%BAl/@40.0091006,-6.1109882,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e170a72a7dd0f:0xc17eed8be710f866!8m2!3d40.0091006!4d-6.1109882!16s%2Fg%2F1yfh_kfws',
	cid: 'https://www.google.com/maps?cid=13942842681518520422',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0091006%2C-6.1109882',
	embed: 'https://maps.google.com/maps?q=40.0091006,-6.1109882&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: abre a las 7:00 todos los días salvo el
 * domingo, que cierra. Viernes y sábado alarga hasta la 1:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–24:00' },
	{ day: 'Martes', value: '7:00–24:00' },
	{ day: 'Miércoles', value: '7:00–24:00' },
	{ day: 'Jueves', value: '7:00–24:00' },
	{ day: 'Viernes', value: '7:00–1:00' },
	{ day: 'Sábado', value: '7:00–1:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Dispone de menú diario además de raciones, bocadillos, hamburguesas...',
	},
	{
		rating: 4,
		text: 'Buen servicio , buenos precios y buena calidad de aperitivos y tostadas.',
	},
	{ rating: 5, text: 'Cochinillo excelente y ensalada casa Raúl buenísima....para repetir.' },
];

/** Lo que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Restaurante y bar en Plasencia',
	'Terraza de verano e invierno',
	'Comedor climatizado',
	'Menú diario',
	'Parrilla',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
];

/**
 * Carta resumida: la ficha no publica carta ni precios. Todo lo que aparece
 * aquí lo dicen sus reseñas o se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Menú especial · primeros',
		items: [
			{ name: 'Entremeses ibéricos', note: 'con queso manchego' },
			{ name: 'Torta del Casar', note: 'gratinada con pimentón Verato' },
			{ name: 'Bacalao', note: 'a la Dorada' },
			{ name: 'Ensalada de zorongollo', note: 'con huevo y atún' },
			{ name: 'Ensalada de piquillos', note: 'con ventresca de atún y huevo' },
			{ name: 'Ensalada César', note: 'con pollo y queso' },
			{ name: 'Salmorejo', note: 'con huevo y jamón' },
		],
	},
	{
		title: 'Menú especial · segundos',
		items: [
			{ name: 'Solomillo de cerdo ibérico', note: 'a la parrilla' },
			{ name: 'Entrecot de ternera joven', note: 'braseado' },
			{ name: 'Secreto ibérico', note: 'a la parrilla con patatas' },
			{ name: 'Chuletillas de cordero Verato', note: 'a la brasa' },
			{ name: 'Chipirones a la plancha', note: 'con ensalada y alioli' },
			{ name: 'Sepia a la plancha', note: 'con ensalada y alioli' },
			{ name: 'Lubina a la plancha', note: 'con ensalada' },
		],
	},
	{
		title: 'El menú incluye',
		items: [
			{ name: 'Vino tinto, blanco, agua, cerveza o refresco', note: 'a elegir' },
			{ name: 'Pan, postre de la casa y café', note: 'incluidos' },
		],
	},
	{
		title: 'De la casa y la parrilla',
		items: [
			{ name: 'Cochinillo', note: '«cochinillo excelente», en palabras de una de las reseñas' },
			{
				name: 'Ensalada Casa Raúl',
				note: '«buenísima... para repetir», según la misma reseña',
			},
		],
	},
	{
		title: 'Carta del día',
		items: [
			{
				name: 'Menú diario',
				note: '«además de raciones, bocadillos, hamburguesas...», según una reseña',
			},
			{ name: 'Raciones', note: 'citadas en las reseñas del local' },
			{ name: 'Bocadillos', note: 'citados en las reseñas del local' },
			{ name: 'Hamburguesas', note: 'citadas en las reseñas del local' },
			{ name: 'Aperitivos y tostadas', note: '«buena calidad», según una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Casa Raúl?',
		a: 'En la avenida Martín Palomino, 88, del 10600 Plasencia (Cáceres). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:00 a 24:00, salvo viernes y sábado, que cierra a la 1:00. El domingo cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 42 29 55. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Menú del día, raciones, bocadillos y hamburguesas, además de parrilla. En la galería de la ficha está publicado su menú especial: primeros, segundos, vino, pan, postre y café por 30,00 €. Sus reseñas destacan el cochinillo y la ensalada Casa Raúl.',
	},
	{
		q: '¿Cuánto cuesta el menú especial?',
		a: '30,00 € por persona, según el cartel que el propio restaurante publica en la galería de su ficha de Google. Incluye un primero, un segundo, vino tinto o blanco, agua, cerveza o refresco, pan, postre de la casa y café.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La ficha de Google lo describe como «restaurante con terraza de verano e invierno y comedor cerrado y climatizado».',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,2 sobre 5 con 2.174 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
];
