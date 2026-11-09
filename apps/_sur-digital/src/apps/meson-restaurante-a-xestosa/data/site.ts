/**
 * Datos de Mesón Restaurante A Xestosa — Lugar Cende, 17 (36873 Covelo, Pontevedra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Mesón Restaurante A Xestosa»,
 *   42.2923767,-8.3050019, feature 0xd2f888119e8445d:0x53b7c87bb378cacd
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan las reseñas, lo que cuenta la
 * descripción del negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Mesón Restaurante A Xestosa',
	shortName: 'A Xestosa',
	mark: 'AX',
	street: 'Lugar Cende, 17',
	city: 'Covelo',
	region: 'Pontevedra',
	regionName: 'Galicia',
	postalCode: '36873',
	country: 'ES',
	phoneDisplay: '659 51 64 96',
	phoneHref: 'tel:+34659516496',
	rating: 4.6,
	reviewsCount: 292,
	siteUrl: 'https://www.sur-digital.com/meson-restaurante-a-xestosa',
	geo: { lat: 42.2923767, lng: -8.3050019 },
	featureId: '0xd2f888119e8445d:0x53b7c87bb378cacd',
	placeId: 'ChIJXUToGYGILw0Rzcp4s3vIt1M',
	cid: '13005628843028920678',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mes%C3%B3n+Restaurante+A+Xestosa/@42.2923767,-8.3050019,17z/data=!3m1!4b1!4m6!3m5!1s0xd2f888119e8445d:0x53b7c87bb378cacd!8m2!3d42.2923767!4d-8.3050019!16s%2Fg%2F11f0kvy8b_',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.2923767%2C-8.3050019',
	embed: 'https://maps.google.com/maps?q=42.2923767,-8.3050019&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 9:30 a 24:00 salvo el
 * miércoles, que cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:30–24:00' },
	{ day: 'Martes', value: '9:30–24:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '9:30–24:00' },
	{ day: 'Viernes', value: '9:30–24:00' },
	{ day: 'Sábado', value: '9:30–24:00' },
	{ day: 'Domingo', value: '9:30–24:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Hacen encargos de cochinillo, cabrito y arroces, para tomar nota.',
	'Todo muy rico (queso frito y chuletón de vaca) y trato extraordinario!!!',
	'Buena comida, buen trato y grandes personas, volveremos pronto',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica
 * el local, lo que cuenta la descripción del negocio, lo que citan sus reseñas
 * y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante gallego',
	'Comida casera',
	'Carnes frescas a la brasa',
	'Quesos y embutidos',
	'Negocio familiar',
	'Merendero y pozas naturales',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas,
 * de la descripción del negocio y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'De la brasa',
		items: [
			{ name: 'Chuletón de vaca', note: '«muy rico», según una reseña' },
			{ name: 'Carnes frescas a la brasa', note: 'en la descripción del negocio' },
			{ name: 'Cochinillo', note: 'por encargo, según una reseña y en las fotos del perfil' },
			{ name: 'Cabrito', note: 'por encargo, según una reseña' },
		],
	},
	{
		title: 'Para empezar',
		items: [
			{ name: 'Queso frito', note: 'citado en una reseña y en las fotos del perfil' },
			{ name: 'Quesos de la zona', note: 'en la descripción del negocio' },
			{ name: 'Embutido', note: 'en la descripción del negocio' },
			{ name: 'Arroces', note: 'por encargo, según una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Mesón Restaurante A Xestosa?',
		a: 'En Lugar Cende, 17, del 36873 Covelo (Pontevedra), en el valle de Tielas. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 9:30 a 24:00, salvo el miércoles, que cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa o hacer un encargo hay que llamar al 659 51 64 96.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera y carnes frescas a la brasa, con quesos y embutidos, según la descripción del propio negocio. Sus reseñas citan el queso frito, el chuletón de vaca y los encargos de cochinillo, cabrito y arroces. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede encargar cochinillo o cabrito?',
		a: 'Sí, según una de las reseñas publicadas: «hacen encargos de cochinillo, cabrito y arroces». Conviene llamar con antelación al 659 51 64 96.',
	},
	{
		q: '¿Qué hay alrededor?',
		a: 'La descripción del negocio habla del valle de Tielas, del santuario de la Virgen de la Xestosa y su capilla, del río con merendero y pozas naturales, y de rutas de senderismo por la ruta de las estrellas. También asegura que allí está el punto más alto de la provincia de Pontevedra.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado y aseo adaptado.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 292 reseñas. Las publicadas destacan el trato familiar, el queso frito, el chuletón de vaca y los encargos de cochinillo, cabrito y arroces.',
	},
];
