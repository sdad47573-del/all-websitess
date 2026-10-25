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
			{ name: 'Pulpo á feira', note: 'en las fotos del perfil' },
			{ name: 'Zamburiñas a la plancha', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para compartir y postres',
		items: [
			{ name: 'Tapas y raciones', note: 'en las categorías de la ficha de Google' },
			{ name: 'Pizza', note: '«enorme y buenisima», según una reseña y en las fotos del perfil' },
			{ name: 'Postres caseros', note: '«también muy ricos», según la misma reseña' },
			{ name: 'Tabla de embutido con patatas', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador O Marco Da Legua?',
		a: 'En Aldea Lagoas, 31, del 32135 Piñor (Ourense). El mapa de esta página lleva directo al asador y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De jueves a domingo. Jueves y domingo abre de 10:30 a 24:00, el viernes de 10:30 a 0:30 y el sábado de 11:00 a 0:30. Cierra los lunes, martes y miércoles. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa o encargar comida hay que llamar al 673 65 64 13.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha del asador lo resume así: «carnes a la brasa, cabrito y cordero en horno tradicional de leña». Sus reseñas citan el churrasco, los chipirones a la plancha, la pizza y los postres caseros, y en las fotos del perfil aparecen las zamburiñas, el pulpo á feira, los pimientos de Padrón y una tabla de embutido con patatas. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hay comida para llevar?',
		a: 'Sí. «Restaurante de comida para llevar» es una de las categorías con las que Google clasifica el local. Para encargar, llama al 673 65 64 13.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran mesas y sillas de terraza en el jardín, bajo los árboles y con luces colgadas entre las ramas.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,8 sobre 5 con 210 reseñas. Las publicadas destacan el churrasco, los chipirones, la pizza, los postres caseros y el trato del personal.',
	},
];
