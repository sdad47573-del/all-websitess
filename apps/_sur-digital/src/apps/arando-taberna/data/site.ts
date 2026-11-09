/**
 * Datos de Arando Taberna — Euskadi Etorbidea, 53
 * (20110 Trintxerpe, Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Arando Taberna, 43.3232417,-1.9308833,
 *   feature 0xd51a58e31041093:0x2ce6e779e01cc1c5 (dirección, teléfono, horario,
 *   categoría, nota, reseñas, servicios y descripción del local).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica precios ni una carta completa y
 * el local no tiene web propia. La carta recoge solo lo que anuncia la propia
 * casa en su descripción de Google y lo que citan sus reseñas.
 */

export const BUSINESS = {
	name: 'Arando Taberna',
	shortName: 'Arando',
	mark: 'AR',
	street: 'Euskadi Etorbidea, 53',
	district: 'Trintxerpe',
	city: 'Pasaia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 40 10 34',
	phoneHref: 'tel:+34943401034',
	rating: 4.5,
	reviewsCount: 229,
	siteUrl: 'https://www.sur-digital.com/arando-taberna',
	geo: { lat: 43.3232417, lng: -1.9308833 },
	featureId: '0xd51a58e31041093:0x2ce6e779e01cc1c5',
	placeId: 'ChIJkxAEMY6lUQ0RxcEc4Hnn5iw',
	/** Descripción con la que el local se presenta en Google Maps. */
	tagline: 'Calidad y precio, en mesa o para llevar',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Arando+Taberna/@43.3232417,-1.9308833,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a58e31041093:0x2ce6e779e01cc1c5!8m2!3d43.3232417!4d-1.9308833!16s%2Fg%2F11h9grkfq0',
	cid: 'https://www.google.com/maps?cid=3235527892949320133',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3232417%2C-1.9308833',
	embed: 'https://maps.google.com/maps?q=43.3232417,-1.9308833&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre todos los días. Viernes y
 * sábado alarga la noche y el sábado empieza una hora más tarde.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:30–23:00' },
	{ day: 'Martes', value: '9:30–23:00' },
	{ day: 'Miércoles', value: '9:30–23:00' },
	{ day: 'Jueves', value: '9:30–23:00' },
	{ day: 'Viernes', value: '9:30–0:30' },
	{ day: 'Sábado', value: '10:00–1:00' },
	{ day: 'Domingo', value: '9:30–23:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'La dueña es un sol, el café bueno, el jamón exquisito y la tortilla deliciosa.' },
	{ rating: 5, text: 'Todo muy rico La única pega es que había mucha gente y solo 2 camareros.' },
	{ rating: 5, text: 'La camarera de pelo rojo muy muy simpática Por más camareras así' },
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google lo
 * clasifica, lo que anuncia la casa, el brunch que marca la ficha y su
 * accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante en Trintxerpe',
	'Menú del día',
	'Risottos de hongos y txipis',
	'Calamares y zamburiñas',
	'Para llevar',
	'Brunch',
	'Acceso para sillas de ruedas',
];

/**
 * Carta resumida: la ficha no publica precios ni una carta completa. Todo lo que
 * aparece aquí lo dice la descripción del propio local o sus reseñas.
 */
export const MENU = [
	{
		title: 'Lo que anuncia la casa',
		items: [
			{
				name: 'Risotto de hongos',
				note: '«nuestros maravillosos risottos tanto de hongos...», dice el local en Google',
			},
			{
				name: 'Risotto de txipis',
				note: '«...como de Txipis», completa la misma descripción',
			},
			{
				name: 'Calamares',
				note: '«así como los calamares y zamburiñas», añade la casa',
			},
			{ name: 'Zamburiñas', note: 'en la lista de imprescindibles del local' },
		],
	},
	{
		title: 'Menú del día y para llevar',
		items: [
			{
				name: 'Menú del día',
				note: 'de martes a domingo, según la descripción del local',
			},
			{
				name: 'Para llevar',
				note: '«calidad y precio tanto en establecimiento como para llevar»',
			},
			{ name: 'Brunch', note: 'la ficha de Google lo marca como brunch' },
		],
	},
	{
		title: 'Lo que citan las reseñas',
		items: [
			{ name: 'Jamón', note: '«el jamón exquisito», dice una reseña' },
			{ name: 'Tortilla', note: '«la tortilla deliciosa», añade la misma reseña' },
			{ name: 'Café', note: '«el café bueno», en palabras de esa misma opinión' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Arando Taberna?',
		a: 'En Euskadi Etorbidea, 53, en el barrio de Trintxerpe del 20110 Pasaia (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. De lunes a jueves y el domingo, de 9:30 a 23:00; el viernes, de 9:30 a 0:30; y el sábado, de 10:00 a 1:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Sirve menú del día?',
		a: 'Sí. La propia casa explica en su ficha de Google que ofrece menú del día de martes a domingo. La ficha no publica el precio ni el contenido del menú.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. En su descripción de Google el local anuncia «calidad y precio tanto en establecimiento como para llevar». Los pedidos se hacen por teléfono, en el 943 40 10 34.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 40 10 34. La ficha de Google no ofrece reserva online y el local tampoco publica una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Los platos que la casa destaca son los risottos de hongos y de txipis, los calamares y las zamburiñas. Sus reseñas citan además el jamón, la tortilla y el café. La ficha no publica carta completa ni precios.',
	},
	{
		q: '¿Tiene acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. No publica datos sobre aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 229 reseñas en Google.',
	},
];
