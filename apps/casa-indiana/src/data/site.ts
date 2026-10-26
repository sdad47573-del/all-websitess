/**
 * Datos de Casa Indiana — Av. Rovisco Pais 2, Loja A, 1000-268 Lisboa.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Casa Indiana», 38.7351664,-9.1399403,
 *   feature 0xd1933a21ebee7bf:0x9fc41d4168229325 (dirección, teléfono, horario,
 *   categoría, nota, reseñas, accesibilidad y la descripción del propio local).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que esta web NO inventa: la ficha no publica carta ni precios. El menú que
 * aparece aquí se apoya en la descripción del propio restaurante
 * («vegetarian/vegan/lamb/chicken/halal») y en lo que se ve en las fotos del
 * perfil.
 */

export const BUSINESS = {
	name: 'Casa Indiana',
	shortName: 'Casa Indiana',
	mark: 'CI',
	street: 'Av. Rovisco Pais, 2 (Loja A)',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1000-268',
	country: 'PT',
	phoneDisplay: '21 840 1195',
	phoneHref: 'tel:+351218401195',
	rating: 4.6,
	reviewsCount: 806,
	siteUrl: 'https://casa-indiana.vercel.app',
	geo: { lat: 38.7351664, lng: -9.1399403 },
	featureId: '0xd1933a21ebee7bf:0x9fc41d4168229325',
	placeId: 'ChIJv-e-HqIzGQ0RJZMiaEEdxJ8',
	cid: '11512358714223006501',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante indio',
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'Cocina india con opciones vegetarianas, veganas, de cordero y de pollo, y carne halal.',
	tagline: 'Cocina india · vegetariano, vegano y halal en Lisboa',
	description:
		'Casa Indiana, restaurante indio en la Av. Rovisco Pais 2, Loja A (1000-268 Lisboa): cocina con opciones vegetarianas, veganas, de cordero y de pollo, y carne halal. Abre de 11:30 a 23:00, cierra miércoles y domingo. 4,6 en Google con 806 reseñas. Tel. 21 840 1195.',
	/** La ficha no publica sitio web propio. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Casa+Indiana/@38.7351664,-9.1399403,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933a21ebee7bf:0x9fc41d4168229325!8m2!3d38.7351664!4d-9.1399403!16s%2Fg%2F11hcf1kj5k',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7351664%2C-9.1399403',
	embed: 'https://maps.google.com/maps?q=38.7351664,-9.1399403&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '11:30–23:00' },
	{ day: 'Martes', value: '11:30–23:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '11:30–23:00' },
	{ day: 'Viernes', value: '11:30–23:00' },
	{ day: 'Sábado', value: '11:30–23:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Cocina india',
	'Opciones vegetarianas',
	'Opciones veganas',
	'Cordero y pollo',
	'Carne halal',
	'Accesibilidad completa',
	'Bucle magnético',
];

/**
 * La ficha no publica carta ni precios. Los platos salen de la descripción del
 * propio restaurante y de las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Samosas', note: 'empanadillas triangulares fritas, servidas en plato de la casa' },
			{ name: 'Kebab de la casa', note: 'albóndigas alargadas de carne especiada, con limón y cilantro' },
			{ name: 'Entrantes vegetarianos', note: 'el restaurante anuncia opciones sin carne en su ficha' },
		],
	},
	{
		title: 'Los curries',
		items: [
			{ name: 'Cordero al curry', note: 'cordero en salsa roja de especias, servido en cazuela de cobre' },
			{ name: 'Pollo al curry', note: 'pollo en salsa cremosa con cilantro y lima' },
			{ name: 'Gambas al curry', note: 'gambas en salsa de tomate y especias, con un hilo de nata' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Biryani', note: 'arroz basmati especiado, con azafrán, cilantro y cebolla frita' },
			{ name: 'Biryani de verduras', note: 'versión vegetariana, con las mismas especias' },
			{ name: 'Arroz para acompañar', note: 'para el curry o para compartir en el centro de la mesa' },
		],
	},
	{
		title: 'Para todos',
		items: [
			{ name: 'Menú vegetariano', note: 'opciones sin carne en toda la carta' },
			{ name: 'Menú vegano', note: 'el local las anuncia en su descripción de Google' },
			{ name: 'Carne halal', note: 'toda la carne del restaurante es halal, según su ficha' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casa Indiana?',
		a: 'En la Av. Rovisco Pais, 2 (Loja A), en Lisboa (1000-268). El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 11:30 a 23:00 de lunes a martes y de jueves a sábado. Cierra los miércoles y los domingos. Es el horario que publica su ficha de Google, que avisa de que puede cambiar en festivos.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina india. El propio restaurante describe su carta con opciones vegetarianas, veganas, de cordero y de pollo, y carne halal. Es la referencia que publica en Google, porque no hay carta con precios disponible.',
	},
	{
		q: '¿Hay opciones vegetarianas o veganas?',
		a: 'Sí. La ficha del restaurante indica expresamente opciones vegetarianas y veganas, además de platos de cordero y pollo. Al no publicar carta completa, conviene confirmar los platos del día al llamar.',
	},
	{
		q: '¿La carne es halal?',
		a: 'El restaurante lo indica en su propia descripción de Google: sirve carne halal. Si necesitas confirmar un plato concreto, lo mejor es preguntar al llamar al 21 840 1195.',
	},
	{
		q: '¿Se puede reservar o pedir para llevar?',
		a: 'Su ficha de Google no ofrece reserva ni pedido online. El teléfono es el 21 840 1195, así que lo más rápido es llamar para reservar mesa o preguntar por la comida para llevar.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí. Su ficha marca acceso, asientos, aseo y aparcamiento adaptados para sillas de ruedas, además de bucle magnético asistencial. Es uno de los locales más accesibles de la zona.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 806 reseñas. Es una nota alta y con muchas opiniones, lo que la hace bastante representativa.',
	},
];
