/**
 * Datos de Restaurante MLC — Carr. Ergoyen, 18D (20130 Urnieta, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante MLC, 43.2363963,-1.9978974,
 *   feature 0xd51b1003d8a6e25:0xcea92d923416e196 (dirección, teléfono, horario,
 *   categorías, nota, reseñas, accesibilidad y atributos del local).
 * - Descripción del comerciante y publicaciones del propio establecimiento en
 *   esa ficha (carta, desayuno buffet y horario que anuncian).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica precios, así que no
 * aparecen. El horario estructurado de Google marca el lunes como cerrado y el
 * local anunció en sus publicaciones «abierto todos los días desde las 7:30»;
 * se muestran las horas de la ficha y se avisa de la discrepancia.
 */

export const BUSINESS = {
	name: 'Restaurante MLC',
	shortName: 'MLC',
	mark: 'MLC',
	street: 'Carr. Ergoyen, 18D',
	city: 'Urnieta',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20130',
	country: 'ES',
	phoneDisplay: '694 90 63 82',
	phoneHref: 'tel:+34694906382',
	rating: 4.5,
	reviewsCount: 72,
	siteUrl: 'https://restaurante-mlc.vercel.app',
	geo: { lat: 43.2363963, lng: -1.9978974 },
	featureId: '0xd51b1003d8a6e25:0xcea92d923416e196',
	placeId: 'ChIJJW6KPQCxUQ0RluEWNJItqc4',
	cid: '14891483748839645590',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+MLC/@43.2363963,-1.9978974,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b1003d8a6e25:0xcea92d923416e196!8m2!3d43.2363963!4d-1.9978974!16s%2Fg%2F11xl0xd9mg',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2363963%2C-1.9978974',
	embed: 'https://maps.google.com/maps?q=43.2363963,-1.9978974&z=17&hl=es&output=embed',
};

/**
 * Horario estructurado de la ficha de Google: lunes cerrado, de martes a jueves
 * de 7:00 a 22:00, viernes y sábado hasta las 23:00 y domingo hasta las 17:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '7:00–22:00' },
	{ day: 'Miércoles', value: '7:00–22:00' },
	{ day: 'Jueves', value: '7:00–22:00' },
	{ day: 'Viernes', value: '7:00–23:00' },
	{ day: 'Sábado', value: '7:00–23:00' },
	{ day: 'Domingo', value: '7:00–17:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Las mejores hamburguesas y sándwiches que hemos probado.',
	},
	{
		rating: 5,
		text: 'Además, muy buen servicio por parte de las camareras, atentas y agradables.',
	},
	{
		rating: 1,
		text: 'La camarera fue a consultar con cocina y tardó un buen rato en regresar.',
	},
];

/**
 * Categorías, servicios y atributos que publica la ficha: las cuatro categorías
 * con las que Google clasifica el local, la accesibilidad, los perros y los
 * distintivos del establecimiento.
 */
export const SERVICIOS = [
	'Restaurante vasco',
	'Bar',
	'Restaurante de brunch',
	'Cafetería',
	'Desayuno buffet',
	'Hamburguesas artesanales',
	'Se admiten perros',
	'Aparcamiento adaptado',
];

/**
 * Carta: la ficha no publica precios. Los platos salen de la descripción y de
 * las publicaciones del propio restaurante en Google, y de sus reseñas.
 */
export const MENU = [
	{
		title: 'Desayunos y brunch',
		items: [
			{ name: 'Desayuno buffet', note: '«el mejor comienzo del día», según el propio local' },
			{ name: 'Tostas gourmet', note: 'en la carta que anuncia el restaurante' },
			{ name: 'Brunch', note: 'Google lo clasifica como restaurante de brunch' },
		],
	},
	{
		title: 'Hamburguesas y sándwiches',
		items: [
			{
				name: 'Hamburguesa artesanal de txuleta madurada',
				note: 'de la carta que anuncia el restaurante',
			},
			{
				name: 'Hamburguesa con huevo y queso cheddar',
				note: 'en pan brioche, en las fotos del perfil',
			},
			{ name: 'Sándwiches', note: '«los mejores que hemos probado», dice una reseña' },
			{ name: 'Patatas caseras', note: 'en las fotos, en gajo y fritas' },
		],
	},
	{
		title: 'Platos y barra',
		items: [
			{ name: 'Pintxos', note: 'en la barra, según la publicación de Google' },
			{ name: 'Burrata con pimientos', note: 'en las fotos del perfil' },
			{ name: 'Pimientos rellenos en salsa', note: 'en las fotos del perfil' },
			{ name: 'Mejillones en salsa', note: 'en las fotos del perfil' },
			{ name: 'Tosta de setas', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante MLC?',
		a: 'En Carr. Ergoyen, 18D, del 20130 Urnieta (Gipuzkoa). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca de martes a jueves de 7:00 a 22:00, viernes y sábado de 7:00 a 23:00, domingo de 7:00 a 17:00 y lunes cerrado. El propio restaurante anunció en Google «abierto todos los días desde las 7:30», así que conviene llamar al 694 90 63 82 para confirmar antes de ir.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 694 90 63 82. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Hamburguesas artesanales de txuleta madurada, tostas gourmet, pintxos, patatas caseras y sándwiches, además de un desayuno buffet y brunch. Es la carta que anuncia el propio restaurante en su ficha de Google, que no publica precios.',
	},
	{
		q: '¿Se puede desayunar o ir a un brunch?',
		a: 'Sí. Abre a las 7:00 y ofrece desayuno buffet; Google lo clasifica también como restaurante de brunch y cafetería.',
	},
	{
		q: '¿Es el restaurante de un hotel?',
		a: 'Sí. En sus publicaciones de Google se presenta como el restaurante del Hotel MLC de Urnieta.',
	},
	{
		q: '¿Hay acceso adaptado y aparcamiento?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, asientos adaptados y aparcamiento adaptado.',
	},
	{
		q: '¿Puedo ir con perro?',
		a: 'Sí. La ficha de Google indica que se admiten perros.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,5 sobre 5 con 72 reseñas en Google.',
	},
];
