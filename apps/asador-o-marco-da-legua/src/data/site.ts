/**
 * Datos de Asador O Marco Da Legua — Aldea Lagoas, 31 (32135 Piñor, Ourense).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador O Marco Da Legua»,
 *   42.4759445,-8.0087108, feature 0xd2feefb59670def:0x711cd45fb042773c
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan las reseñas, lo que cuenta la
 * descripción del negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Asador O Marco Da Legua',
	shortName: 'O Marco Da Legua',
	mark: 'ML',
	street: 'Aldea Lagoas, 31',
	city: 'Piñor',
	region: 'Ourense',
	regionName: 'Galicia',
	postalCode: '32135',
	country: 'ES',
	phoneDisplay: '673 65 64 13',
	phoneHref: 'tel:+34673656413',
	rating: 4.8,
	reviewsCount: 210,
	siteUrl: 'https://asador-o-marco-da-legua.vercel.app',
	geo: { lat: 42.4759445, lng: -8.0087108 },
	featureId: '0xd2feefb59670def:0x711cd45fb042773c',
	placeId: 'ChIJ7w1nWfvuLw0RPHdCsF_UHHE',
	cid: '13854824999252491587',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+O+Marco+Da+Legua/@42.4759445,-8.0087108,17z/data=!3m1!4b1!4m6!3m5!1s0xd2feefb59670def:0x711cd45fb042773c!8m2!3d42.4759445!4d-8.0087108!16s%2Fg%2F11mp6lcgfl',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.4759445%2C-8.0087108',
	embed: 'https://maps.google.com/maps?q=42.4759445,-8.0087108&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: cierra de lunes a miércoles; de jueves a
 * domingo abre a media mañana y alarga la noche del viernes y el sábado.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '10:30–24:00' },
	{ day: 'Viernes', value: '10:30–0:30' },
	{ day: 'Sábado', value: '11:00–0:30' },
	{ day: 'Domingo', value: '10:30–24:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Fuimos a cenar pedimos chipirones a la plancha y churrasco buenísimo todo',
	'Camarera y cocinero de 5 estrellas sitio para repetir 100% recomendable',
	'La pizza enorme y buenisima postres caseros y tambien muy ricos.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que cuenta la descripción del negocio, lo que citan sus reseñas
 * y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Brasería',
	'Restaurante familiar',
	'Restaurante gallego',
	'Carnes a la brasa',
	'Cabrito y cordero en horno de leña',
	'Tapas',
	'Comida para llevar',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas,
 * de la descripción del negocio y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Del horno de leña',
		items: [
			{ name: 'Cabrito', note: 'en la descripción del negocio' },
			{ name: 'Cordero', note: 'en la descripción del negocio' },
			{ name: 'Carnes a la brasa', note: 'en la descripción del negocio' },
		],
	},
	{
		title: 'De la brasa y la plancha',
		items: [
			{ name: 'Churrasco', note: '«buenísimo», según una reseña' },
			{ name: 'Chipirones a la plancha', note: 'citados en una reseña' },
		],
	},
	{
		title: 'Para picar y compartir',
		items: [
			{ name: 'Tapas', note: 'en las categorías de la ficha de Google' },
			{ name: 'Pizza', note: '«enorme y buenisima», según una reseña' },
			{ name: 'Postres caseros', note: '«también muy ricos», según la misma reseña' },
		],
	},
];

export const FAQ: { q: string; a: string }[] = [];
