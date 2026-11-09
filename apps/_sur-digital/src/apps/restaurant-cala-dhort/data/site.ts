/**
 * Datos de Restaurant Cala d’Hort — Platja Cala d’Hort, s/n (07830 Sant Josep
 * de sa Talaia, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurant Cala d’Hort»,
 *   38.8903996,1.2244467, feature 0x12994ca4524fd36b:0x3c8a11d8e7665b14
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En ellas aparece el rótulo azul «CALA D’HORT
 *   RESTAURANT», el sombrajo de paja y las vistas a Es Vedrà.
 *
 * La ficha no publica carta ni precios: «La carta» recoge solo lo que se ve en
 * las fotos del perfil, lo que cuenta la descripción del negocio y lo que citan
 * las reseñas. No se inventan platos ni precios.
 */

export const BUSINESS = {
	name: 'Restaurant Cala d’Hort',
	shortName: 'Cala d’Hort',
	mark: 'CH',
	street: 'Platja Cala d’Hort, s/n',
	city: 'Sant Josep de sa Talaia',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07830',
	country: 'ES',
	phoneDisplay: '971 93 50 36',
	phoneHref: 'tel:+34971935036',
	rating: 4.4,
	reviewsCount: 1273,
	siteUrl: 'https://www.sur-digital.com/restaurant-cala-dhort',
	geo: { lat: 38.8903996, lng: 1.2244467 },
	featureId: '0x12994ca4524fd36b:0x3c8a11d8e7665b14',
	placeId: 'ChIJa9NPUqRMmRIRFFtm59gRijw',
	cid: '4362318812354599700',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+Cala+d%E2%80%99Hort/@38.8903996,1.2244467,17z/data=!3m1!4b1!4m6!3m5!1s0x12994ca4524fd36b:0x3c8a11d8e7665b14!8m2!3d38.8903996!4d1.2244467!16s%2Fg%2F11b7q6vzf1',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.8903996%2C1.2244467',
	embed: 'https://maps.google.com/maps?q=38.8903996,1.2244467&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 11:00 a 21:30, salvo el
 * martes, que cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–21:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '11:00–21:30' },
	{ day: 'Jueves', value: '11:00–21:30' },
	{ day: 'Viernes', value: '11:00–21:30' },
	{ day: 'Sábado', value: '11:00–21:30' },
	{ day: 'Domingo', value: '11:00–21:30' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Pedimos arroz, moluscos vapor y marinera, boquerones y calamares.',
	'Buena paella de pescado, muy buenas vistas i buena atención.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que cuenta la descripción del negocio, lo que se ve en las fotos
 * del perfil, lo que citan sus reseñas y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina mediterránea e ibicenca',
	'Restaurante familiar desde 1966',
	'Vistas a Es Vedrà',
	'Terraza junto al mar',
	'Paellas y arroces',
	'Pescado al horno',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de la
 * descripción del negocio, de las fotos del perfil y de las reseñas.
 */
export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{
				name: 'Paella de marisco',
				note: 'en las fotos del perfil, con langostinos, mejillones y limón',
			},
			{
				name: 'Arroz con carabineros',
				note: 'en las fotos del perfil, servido en plato hondo',
			},
			{ name: 'Arroz marinera', note: '«pedimos arroz… y marinera», según una reseña' },
			{
				name: 'Paella de pescado',
				note: '«buena paella de pescado», según una reseña',
			},
		],
	},
	{
		title: 'Del mar',
		items: [
			{ name: 'Pescado al horno', note: 'en la descripción del negocio' },
			{ name: 'Guisat de peix', note: 'en la descripción del negocio' },
			{
				name: 'Gambas al ajillo',
				note: 'en las fotos del perfil, con guindilla y perejil',
			},
			{ name: 'Moluscos al vapor', note: '«moluscos vapor», según una reseña' },
			{ name: 'Mejillones a la marinera', note: '«…y marinera», según una reseña' },
			{ name: 'Boquerones y calamares', note: 'citados en una reseña de la ficha' },
		],
	},
	{
		title: 'Carnes y ensaladas',
		items: [
			{
				name: 'Pollo asado con ensalada',
				note: 'en las fotos del perfil, con patatas y verduras',
			},
			{
				name: 'Ensalada mixta',
				note: 'en las fotos del perfil, con atún, huevo, aguacate y alcachofa',
			},
			{ name: 'Ensalada de tomate', note: 'en las fotos del perfil, con cebolla y orégano' },
			{ name: 'Platos de carne', note: 'en la descripción del negocio' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurant Cala d’Hort?',
		a: 'En Platja Cala d’Hort, s/n, en Sant Josep de sa Talaia (07830, Ibiza), en la misma playa y frente a Es Vedrà. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 11:00 a 21:30, salvo el martes, que cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 93 50 36.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina mediterránea e ibicenca, según la describe el propio negocio: «restaurante familiar de cocina mediterránea e ibicenca abierto en 1966. Paellas, pescado al horno, guisat de peix y una selección de platos de carne y ensaladas».',
	},
	{
		q: '¿Tiene vistas?',
		a: 'Sí. Está en la playa de Cala d’Hort, frente a Es Vedrà, y las fotos del perfil muestran las mesas bajo el sombrajo de paja con el islote y el mar al fondo, además de la puesta de sol sobre Es Vedrà.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La descripción del negocio cita paellas, pescado al horno, guisat de peix, platos de carne y ensaladas. En las fotos del perfil aparecen la paella de marisco, el arroz con carabineros, las gambas al ajillo, el pollo asado, la ensalada mixta y la ensalada de tomate. Sus reseñas mencionan además los moluscos al vapor, los mejillones a la marinera, los boquerones y los calamares. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 1.273 reseñas. Las publicadas destacan la paella de pescado, el arroz, los moluscos, las vistas y la atención.',
	},
];
