/**
 * Datos de Restaurante A Retoral Tapas y Brasas — Lugar O Cruceiro, 64
 * (36954 Moaña, Pontevedra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante A Retoral Tapas y Brasas»,
 *   42.2859158,-8.7497052, feature 0xd2f61578bf2fae1:0xb2da95bc89d61033
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan sus reseñas y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante A Retoral Tapas y Brasas',
	shortName: 'A Retoral',
	mark: 'AR',
	street: 'Lugar O Cruceiro, 64',
	city: 'Moaña',
	region: 'Pontevedra',
	regionName: 'Galicia',
	postalCode: '36954',
	country: 'ES',
	phoneDisplay: '986 31 56 23',
	phoneHref: 'tel:+34986315623',
	rating: 4.6,
	reviewsCount: 1220,
	siteUrl: 'https://www.sur-digital.com/a-retoral-tapas-y-brasas',
	geo: { lat: 42.2859158, lng: -8.7497052 },
	featureId: '0xd2f61578bf2fae1:0xb2da95bc89d61033',
	placeId: 'ChIJ4fryi1dhLw0RMxDWibyV2rI',
	cid: '13358100508988839532',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+A+Retoral+Tapas+y+Brasas/@42.2859158,-8.7497052,17z/data=!3m1!4b1!4m6!3m5!1s0xd2f61578bf2fae1:0xb2da95bc89d61033!8m2!3d42.2859158!4d-8.7497052!16s%2Fg%2F11bxfhndyc',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.2859158%2C-8.7497052',
	embed: 'https://maps.google.com/maps?q=42.2859158,-8.7497052&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de martes a domingo de 12:00 a 16:00, y
 * viernes y sábado también de 20:00 a 24:00. El lunes cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–16:00' },
	{ day: 'Miércoles', value: '12:00–16:00' },
	{ day: 'Jueves', value: '12:00–16:00' },
	{ day: 'Viernes', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Sábado', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Domingo', value: '12:00–16:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Zamburiñas, pulpo, calamares (chopitos fritos), pimientos de padrón...',
	'Recomendamos especialmente la ensalada de marisco y las croquetas, ¡deliciosas!',
	'Cocina casera, la carne muy rico y las raciones generosas.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google
 * clasifica el local, lo que citan sus reseñas y su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante gallego',
	'Brasería',
	'Tapas y raciones',
	'Cocina casera',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas
 * y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Pulpo á feira', note: 'en las fotos del perfil y en una reseña' },
			{ name: 'Chipirones fritos', note: 'en las fotos del perfil y en una reseña' },
			{ name: 'Zamburiñas', note: 'citadas en una reseña' },
			{ name: 'Pimientos de Padrón', note: 'citados en una reseña' },
			{ name: 'Croquetas', note: '«¡deliciosas!», según una reseña' },
			{ name: 'Ensalada de marisco', note: 'recomendada en una reseña' },
		],
	},
	{
		title: 'De la brasa',
		items: [
			{ name: 'Carne a la brasa', note: 'en las fotos del perfil, con patatas' },
			{ name: 'Entrecot con patatas', note: 'en las fotos del perfil' },
			{ name: 'Chuletón', note: 'en las fotos del perfil' },
			{ name: 'Carne en salsa', note: 'en las fotos del perfil' },
			{ name: 'Carne con salsa de setas', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Del mar',
		items: [
			{ name: 'Arroz con carabineros y almejas', note: 'en las fotos del perfil' },
			{ name: 'Rodaballo a la brasa', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está A Retoral?',
		a: 'En Lugar O Cruceiro, 64, del 36954 Moaña (Pontevedra), en la comarca de O Morrazo. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo abre de 12:00 a 16:00, y los viernes y sábados también de 20:00 a 24:00. El lunes cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 986 31 56 23.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Tapas, raciones y carne a la brasa. Sus reseñas citan las zamburiñas, el pulpo, los calamares, los pimientos de padrón, la ensalada de marisco y las croquetas, y en las fotos del perfil aparecen el pulpo á feira, el arroz con carabineros y almejas, el rodaballo a la brasa y varias carnes con patatas. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'No hay precios publicados ni en la ficha de Google ni en las fotos del perfil. Lo mejor es llamar al 986 31 56 23 y preguntar por la carta del día.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 1.220 reseñas. Las publicadas destacan las raciones generosas, la cocina casera y la carne, además de las zamburiñas, las croquetas y la ensalada de marisco.',
	},
];
