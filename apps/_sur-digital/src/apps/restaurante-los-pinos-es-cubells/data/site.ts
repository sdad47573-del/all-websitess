/**
 * Datos de Restaurante Los Pinos — Carre des LLombi, 31 (07839 Es Cubells,
 * Sant Josep de sa Talaia, Ibiza).
 *
 * Ojo: no confundir con el Restaurante Los Pinos de Zahora (Barbate), que tiene
 * su propia web en este monorepo (apps/restaurante-los-pinos).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Los Pinos»,
 *   38.880097,1.27617, feature 0x12994c16e980c875:0x8016ff99013fceea
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - La descripción de la ficha dice literalmente «cerrado temporalmente», así
 *   que la web lo advierte en lugar de presentar el local como abierto.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan sus reseñas y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante Los Pinos',
	shortName: 'Los Pinos',
	mark: 'LP',
	street: 'Carre des LLombi, 31',
	city: 'Es Cubells',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07839',
	country: 'ES',
	phoneDisplay: '971 80 21 86',
	phoneHref: 'tel:+34971802186',
	rating: 4.7,
	reviewsCount: 295,
	siteUrl: 'https://www.sur-digital.com/restaurante-los-pinos-es-cubells',
	geo: { lat: 38.880097, lng: 1.27617 },
	featureId: '0x12994c16e980c875:0x8016ff99013fceea',
	placeId: 'ChIJdciA6RZMmRIR6s4_AZn_FoA',
	cid: '16877651227528322514',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Los+Pinos/@38.880097,1.27617,17z/data=!3m1!4b1!4m6!3m5!1s0x12994c16e980c875:0x8016ff99013fceea!8m2!3d38.880097!4d1.27617!16s%2Fg%2F1pzxgfmm2',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.880097%2C1.27617',
	embed: 'https://maps.google.com/maps?q=38.880097,1.27617&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comidas de 13:00 a 15:30 (los martes hasta las
 * 15:00) y cenas de 19:00 a 23:00; el miércoles cierra y el jueves solo abre
 * por la noche.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–15:30 · 19:00–23:00' },
	{ day: 'Martes', value: '13:00–15:00 · 19:00–23:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '19:00–23:00' },
	{ day: 'Viernes', value: '13:00–15:30 · 19:00–23:00' },
	{ day: 'Sábado', value: '13:00–15:30 · 19:00–23:00' },
	{ day: 'Domingo', value: '13:00–15:30 · 19:00–23:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'La comida muy buena: carpaccio de aguacate, ensalada de queso de cabra y paella.',
	'Buena comida, buen trato y servicio.',
	'Muy buena atención y su comida exquisita!',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que muestran las fotos del perfil y lo que marca su ficha de
 * accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante',
	'Cocina española',
	'Terraza entre pinos',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
];

/**
 * Aviso tomado de la propia ficha: describe el local como «cerrado
 * temporalmente». Se muestra tal cual para no anunciar un servicio que Google
 * no está confirmando.
 */
export const AVISO = {
	title: 'La ficha de Google lo marca como «cerrado temporalmente»',
	text: 'La descripción que el restaurante tiene publicada en Google Maps dice literalmente «cerrado temporalmente». Los horarios de la ficha siguen activos, pero conviene llamar al 971 80 21 86 antes de acercarse hasta Es Cubells.',
};

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas
 * y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Carpaccio de aguacate', note: 'citado en una reseña y en las fotos del perfil' },
			{ name: 'Ensalada de queso de cabra', note: 'citada en una reseña' },
			{ name: 'Gambas al ajillo', note: 'en las fotos del perfil' },
			{ name: 'Calamares a la plancha', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Arroces y pescados',
		items: [
			{ name: 'Paella', note: '«muy buena», según una reseña' },
			{ name: 'Pescado a la plancha con verduras', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Carnes y postres',
		items: [
			{ name: 'Chuletillas de cordero con patatas', note: 'en las fotos del perfil' },
			{ name: 'Crema catalana', note: 'en las fotos del perfil' },
			{ name: 'Helado con chocolate', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Está abierto Los Pinos?',
		a: 'La ficha de Google del restaurante dice literalmente «cerrado temporalmente» en su descripción, aunque mantiene los horarios publicados. Antes de ir conviene llamar al 971 80 21 86 para confirmar que está abierto.',
	},
	{
		q: '¿Dónde está este Los Pinos?',
		a: 'En Carre des LLombi, 31, del 07839 Es Cubells (Sant Josep de sa Talaia, Ibiza). No es el Los Pinos de Zahora (Barbate): son dos restaurantes distintos con el mismo nombre.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, comidas de 13:00 a 15:30 (los martes hasta las 15:00) y cenas de 19:00 a 23:00. El miércoles cierra y el jueves solo abre por la noche.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 80 21 86.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina española. Sus reseñas citan el carpaccio de aguacate, la ensalada de queso de cabra y la paella, y en las fotos del perfil aparecen las gambas al ajillo, los calamares a la plancha, el pescado con verduras, las chuletillas de cordero y los postres. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza de suelo de barro, con mesas de mantel blanco, sillas de mimbre, sombrillas y pinos alrededor.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,7 sobre 5 con 295 reseñas. Las publicadas destacan la comida, el trato y el servicio.',
	},
];
