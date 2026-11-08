/**
 * Datos de D'PIN Parrilla, Pizzas y Raciones — C. Pedro Ávila, 49
 * (10710 Zarza de Granadilla, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: D'PIN PARRILLA, PIZZAS Y RACIONES,
 *   40.236821,-6.047444, feature 0xd3e421f433f8845:0xaa6dd6ef8f0fa498
 *   (dirección, teléfono, horario, reseñas, categorías, descripción del local y
 *   accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Los platos salen de las reseñas publicadas en
 * esa ficha; si en las fotos aparece la carta, se transcribe desde ahí.
 */

export const BUSINESS = {
	name: "D'PIN Parrilla, Pizzas y Raciones",
	shortName: "D'PIN",
	mark: 'DP',
	street: 'C. Pedro Ávila, 49',
	city: 'Zarza de Granadilla',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10710',
	country: 'ES',
	phoneDisplay: '687 22 55 86',
	phoneHref: 'tel:+34687225586',
	rating: 4.5,
	reviewsCount: 410,
	siteUrl: 'https://dpin-parrilla.vercel.app',
	geo: { lat: 40.236821, lng: -6.047444 },
	featureId: '0xd3e421f433f8845:0xaa6dd6ef8f0fa498',
	placeId: 'ChIJRYg_Qx9CPg0RmKQPj-_Wbao',
};

const CID_DECIMAL = '12280708083294905496';

export const MAPS = {
	place:
		"https://www.google.com/maps/place/D'PIN+PARRILLA,+PIZZAS+Y+RACIONES/@40.236821,-6.047444,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e421f433f8845:0xaa6dd6ef8f0fa498!8m2!3d40.236821!4d-6.047444!16s%2Fg%2F11_sps8__",
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.236821%2C-6.047444',
	embed: 'https://maps.google.com/maps?q=40.236821,-6.047444&z=17&hl=es&output=embed',
};

/**
 * Horario copiado de la ficha de Google. Tiene franjas tal y como las publica
 * el local, incluidas la del viernes (23:30–24:00) y la del sábado (desde las
 * 0:00), que no cuadran con el resto: se muestran sin corregirlas y se avisa en
 * la propia página de que conviene confirmarlas por teléfono.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–16:00 · 19:00–23:30' },
	{ day: 'Martes', value: '10:00–16:00 · 19:00–23:30' },
	{ day: 'Miércoles', value: '10:00–16:00 · 19:00–23:30' },
	{ day: 'Jueves', value: 'Cerrado' },
	{ day: 'Viernes', value: '10:00–16:00 · 23:30–24:00' },
	{ day: 'Sábado', value: '0:00–23:30' },
	{ day: 'Domingo', value: '12:00–23:30' },
];

/** Aviso que el propio negocio publica en su ficha de Google. */
export const AVISO =
	'Cerrado por descanso la primera quincena de septiembre, según avisa el propio local en su ficha de Google.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pedimos croquetas de jamón, calamares y entrecot.',
	},
	{
		rating: 5,
		text: 'Pedí crema de calabaza, churrasco, Aquarius de naranja, y flan de café, pan.',
	},
	{
		rating: 5,
		text: 'Las pizzas caseras muy ricas, y los camareros muy agradables',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Parrilla en Zarza de Granadilla',
	'Pizzas caseras',
	'Cafetería y bar de tapas',
	'Raciones para compartir',
	'Reservas por teléfono',
];

/**
 * Carta resumida de lo que nombran las reseñas de la ficha y de lo que se ve en
 * las fotos del propio perfil. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Croquetas de jamón', note: '«pedimos croquetas de jamón», empieza una reseña' },
			{ name: 'Calamares', note: 'de ración, junto a las croquetas' },
			{ name: 'Crema de calabaza', note: 'el primero que pide otra de las reseñas' },
			{ name: 'Tiras de pollo empanadas', note: 'en las fotos del perfil' },
			{ name: 'Patatas paja', note: 'de acompañamiento, también en las fotos' },
		],
	},
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Entrecot', note: 'citado en una reseña junto a croquetas y calamares' },
			{ name: 'Churrasco', note: '«pedí crema de calabaza, churrasco», cuenta otra' },
		],
	},
	{
		title: 'Pizzas, hamburguesas y postres',
		items: [
			{ name: 'Pizzas caseras', note: '«muy ricas», en palabras de una reseña' },
			{ name: 'Hamburguesa con bacon y queso', note: 'en las fotos del perfil' },
			{ name: 'Flan de café', note: 'el postre que nombra la reseña del churrasco' },
			{ name: 'Postre de chocolate con nata', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: "¿Dónde está D'PIN Parrilla, Pizzas y Raciones?",
		a: 'En la calle Pedro Ávila, 49, del 10710 Zarza de Granadilla (Cáceres), en el norte de la provincia. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google: de lunes a miércoles, de 10:00 a 16:00 y de 19:00 a 23:30; jueves cerrado; viernes de 10:00 a 16:00 y una franja de 23:30 a 24:00; sábado de 0:00 a 23:30 y domingo de 12:00 a 23:30. La ficha tiene franjas poco habituales, así que conviene confirmar por teléfono en el 687 22 55 86.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 687 22 55 86. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica carta ni precios. Sus reseñas nombran croquetas de jamón, calamares, entrecot, churrasco, crema de calabaza, pizzas caseras y flan de café. La ficha lo clasifica como parrilla, cafetería y bar de tapas.',
	},
	{
		q: '¿Cuándo cierra por vacaciones?',
		a: 'El propio local avisa en su ficha de Google de que cierra por descanso la primera quincena de septiembre.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,5 sobre 5 con 410 reseñas en Google. Una de ellas destaca que «las pizzas caseras» están «muy ricas» y que los camareros son «muy agradables».',
	},
];
