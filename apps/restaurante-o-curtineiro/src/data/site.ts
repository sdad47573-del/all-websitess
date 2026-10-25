/**
 * Datos de Restaurante O Curtiñeiro — Praza da Fonte, 6 (32740 Parada de Sil, Ourense).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante O Curtiñeiro»,
 *   42.3832702,-7.568213, feature 0xd300f2a75aa8f17:0x1fe9c3d6eb12121c
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan sus reseñas y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante O Curtiñeiro',
	shortName: 'O Curtiñeiro',
	mark: 'OC',
	street: 'Praza da Fonte, 6',
	city: 'Parada de Sil',
	region: 'Ourense',
	regionName: 'Galicia',
	postalCode: '32740',
	country: 'ES',
	phoneDisplay: '619 02 07 01',
	phoneHref: 'tel:+34619020701',
	rating: 4.4,
	reviewsCount: 2450,
	siteUrl: 'https://restaurante-o-curtineiro.vercel.app',
	geo: { lat: 42.3832702, lng: -7.568213 },
	featureId: '0xd300f2a75aa8f17:0x1fe9c3d6eb12121c',
	placeId: 'ChIJF4-qdSoPMA0RHBIS69bD6R8',
	cid: '1733053911932882338',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+O+Curti%C3%B1eiro/@42.3832702,-7.568213,17z/data=!4m6!3m5!1s0xd300f2a75aa8f17:0x1fe9c3d6eb12121c!8m2!3d42.3832702!4d-7.568213!16s%2Fg%2F1pp2xbhls',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.3832702%2C-7.568213',
	embed: 'https://maps.google.com/maps?q=42.3832702,-7.568213&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 8:00 a 22:00. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–22:00' },
	{ day: 'Martes', value: '8:00–22:00' },
	{ day: 'Miércoles', value: '8:00–22:00' },
	{ day: 'Jueves', value: '8:00–22:00' },
	{ day: 'Viernes', value: '8:00–22:00' },
	{ day: 'Sábado', value: '8:00–22:00' },
	{ day: 'Domingo', value: '8:00–22:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Raciones abundantes en un menú del día variado y con productos de calidad.',
	'La merluza estupenda, la empanada mejor, las patatas con pulpo impresionante.',
	'Pedimos caldo gallego, oreja, jarrete y jamón.',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica
 * el local, lo que citan sus reseñas y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante gallego',
	'Menú del día',
	'Raciones',
	'Cocina casera',
	'Sin reserva: por orden de llegada',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas
 * y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Menú y raciones',
		items: [
			{ name: 'Menú del día', note: '«menú del día variado y con productos de calidad», dice una reseña' },
			{ name: 'Raciones', note: '«raciones abundantes», añade la misma reseña' },
			{ name: 'Empanada', note: 'citada en una de las reseñas publicadas' },
			{ name: 'Jamón', note: 'citado en una de las reseñas publicadas' },
		],
	},
	{
		title: 'Platos de la casa',
		items: [
			{ name: 'Caldo gallego', note: 'citado en una reseña' },
			{ name: 'Oreja', note: 'citada en una reseña' },
			{ name: 'Jarrete', note: 'citado en una reseña y en las fotos del perfil' },
			{ name: 'Merluza', note: '«estupenda», según una reseña' },
			{ name: 'Patatas con pulpo', note: '«impresionante», según una reseña' },
			{ name: 'Carne asada con patatas', note: 'en las fotos del perfil' },
			{ name: 'Carne guisada con zanahoria', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Flan casero', note: 'en la bandeja de postres de las fotos del perfil' },
			{ name: 'Tocino de cielo', note: 'en la misma bandeja de postres' },
			{ name: 'Tarta de la casa', note: 'en la misma bandeja de postres' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante O Curtiñeiro?',
		a: 'En Praza da Fonte, 6, del 32740 Parada de Sil (Ourense), en plena Ribeira Sacra. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 8:00 a 22:00, de lunes a domingo. Es el horario publicado, así que conviene confirmarlo llamando antes de subir hasta Parada de Sil.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No. La propia ficha del restaurante lo dice: «No trabajamos con reservas vamos por orden de llegada». Para cualquier duda, el teléfono es el 619 02 07 01.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina gallega de menú del día y raciones. Sus reseñas citan el caldo gallego, la oreja, el jarrete, el jamón, la merluza, la empanada y las patatas con pulpo, y en las fotos del perfil aparecen carnes guisadas o asadas con patatas y una bandeja de postres caseros. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'No hay precios publicados ni en la ficha de Google ni en las fotos del perfil. Lo mejor es llamar al 619 02 07 01 y preguntar por el menú del día.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran mesas altas con taburetes bajo los dos toldos rojos de la fachada, en la misma plaza del pueblo, delante de los letreros de pizarra del restaurante.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 2.450 reseñas. Las publicadas destacan las raciones abundantes, el menú del día variado y platos como la merluza, la empanada o las patatas con pulpo.',
	},
];
