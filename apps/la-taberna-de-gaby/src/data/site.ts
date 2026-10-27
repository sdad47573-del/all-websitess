/**
 * Datos de La Taberna de Gaby — Plaça la Concordia, 11 (la Vall d'Alba, Castellón).
 *
 * Fuente: ficha pública de Google Maps facilitada para el proyecto
 * (https://www.google.com/maps/place/La+Taberna+de+Gaby./, 40.1759031,-0.0353307,
 * feature 0xd5ff768ebadc90b:0x8ddc4fb6b3575331). De ahí salen el nombre, la
 * dirección, la categoría «Taberna», el teléfono, el horario, la nota (4,5) y el
 * número de reseñas (56).
 *
 * Lo que la ficha NO publica: web propia (muestra la opción «Añadir sitio web»),
 * carta ni precios. Por eso esta web no inventa ni carta ni precios.
 *
 * Las fotografías de src/assets/fotos/ son las que publica el perfil del
 * establecimiento en Google Maps.
 */

export const BUSINESS = {
	name: 'La Taberna de Gaby.',
	shortName: 'La Taberna de Gaby',
	mark: 'G',
	street: 'Plaça la Concordia, 11',
	city: "la Vall d'Alba",
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	geoRegion: 'ES-VC',
	postalCode: '12194',
	country: 'ES',
	phone: '+34 642 87 62 40',
	phoneHref: '+34642876240',
	rating: 4.5,
	reviewsCount: 56,
	siteUrl: 'https://la-taberna-de-gaby.vercel.app',
	geo: { lat: 40.1759031, lng: -0.0353307 },
	featureId: '0xd5ff768ebadc90b:0x8ddc4fb6b3575331',
	placeId: 'ChIJC8mt62j3Xw0RMVNXs7ZP3I0',
	/** Categoría con la que Google clasifica el local. */
	category: 'Taberna',
	district: "la Vall d'Alba",
	tagline: "Taberna de desayunos y almuerzos en la Vall d'Alba",
	description:
		"La Taberna de Gaby, taberna de la Plaça la Concordia 11 en la Vall d'Alba (Castellón). Desayunos y almuerzos desde las 8:00 y brasa los viernes y sábados por la noche. 4,5 sobre 5 en Google con 56 reseñas.",
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Taberna+de+Gaby./@40.1759031,-0.0353307,17z/data=!3m1!4b1!4m6!3m5!1s0xd5ff768ebadc90b:0x8ddc4fb6b3575331!8m2!3d40.1759031!4d-0.0353307!16s%2Fg%2F11g__10syq',
	cid: 'https://www.google.com/maps?cid=10222132900335670065',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.1759031%2C-0.0353307',
	embed: 'https://maps.google.com/maps?q=40.1759031,-0.0353307&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google. Viernes y sábado abre también de
 * noche; la ficha avisa de que en festivos el horario podría ser diferente.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–14:00' },
	{ day: 'Martes', value: '8:00–14:00' },
	{ day: 'Miércoles', value: '8:00–14:00' },
	{ day: 'Jueves', value: '8:00–14:00' },
	{ day: 'Viernes', value: '8:00–14:00 · 18:00–24:00' },
	{ day: 'Sábado', value: '8:00–14:00 · 18:00–24:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/**
 * Señas de identidad: la categoría de la ficha, el horario y el teléfono
 * publicados, y las valoraciones que deja la clientela.
 */
export const SERVICIOS = [
	'Taberna',
	'Desayunos desde las 8:00',
	'Almuerzos',
	'Brasa viernes y sábado',
	'4,5 en Google · 56 reseñas',
	'+34 642 87 62 40',
];

/**
 * La ficha no publica carta ni precios. Lo que sigue son los platos que
 * mencionan las reseñas destacadas de la ficha, no una carta oficial.
 */
export const MENU = [
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Desayuno de la casa',
				note: 'las reseñas destacadas hablan de «unos desayunos increíbles»',
			},
			{
				name: 'Café y bollería',
				note: 'a primera hora, desde las 8:00 de lunes a sábado',
			},
		],
	},
	{
		title: 'Almuerzos',
		items: [
			{
				name: 'Almuerzo del día',
				note: 'la ficha recoge «almuerzos muy buenos» entre las reseñas',
			},
			{
				name: 'Comida casera',
				note: '«buen trato y buena comida» es otra de las reseñas destacadas',
			},
		],
	},
	{
		title: 'Brasa',
		items: [
			{
				name: 'Parrilla',
				note: 'una reseña destaca «una brasa espectacular»; se sirve viernes y sábado por la noche',
			},
			{
				name: 'Para compartir',
				note: 'los platos de brasa se piden al centro, con el teléfono como único canal para reservar',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Taberna de Gaby?',
		a: "En la Plaça la Concordia 11, en la Vall d'Alba (12194, Castellón). El mapa de esta página lleva hasta la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.",
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google publica de 8:00 a 14:00 de lunes a sábado, y añade tarde-noche de 18:00 a 24:00 los viernes y los sábados. El domingo aparece como cerrado y la ficha avisa de que en festivos el horario podría ser diferente.',
	},
	{
		q: '¿Cómo reservo o pregunto por el menú del día?',
		a: `El único contacto que publica la ficha es el teléfono ${BUSINESS.phone}. No hay reservas ni pedidos en línea: el local no tiene web propia y la ficha muestra la opción de «añadir sitio web».`,
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Las reseñas destacadas de la ficha hablan de desayunos, de almuerzos y de una brasa espectacular que se sirve viernes y sábado por la noche. La ficha no publica carta ni precios, así que conviene preguntar por teléfono qué hay ese día.',
	},
	{
		q: '¿Tiene web propia o carta en línea?',
		a: 'No. La ficha de Google invita a añadir un sitio web, lo que confirma que no hay ninguno publicado, y tampoco publica carta. Esta página reúne lo que sí es público: dirección, teléfono, horario, valoración y fotografías.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 56 reseñas en Google, según la ficha consultada. Entre los comentarios destacados aparecen «buen servicio y almuerzos muy buenos», «buen trato y buena comida» y «unos desayunos increíbles y una brasa espectacular».',
	},
];
