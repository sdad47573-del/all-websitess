/**
 * Datos de Tortillas Y Comida Javi Sera — C. Santo Domingo de la Calzada, 23,
 * 41018 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Tortillas Y Comida Javi Sera»,
 *   37.383566,-5.9746591, feature 0xd126f1f6159399d:0xae8017cf9d7fb0d2
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta con precios, descripción
 * ni web propia. Los platos que se listan son los que aparecen en las fotos y
 * en las reseñas del perfil, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'Tortillas y Comida Javi Sera',
	fullName: 'Tortillas Y Comida Javi Sera',
	googleName: 'Tortillas Y Comida Javi Sera',
	shortName: 'Javi Sera',
	mark: 'J',
	street: 'C. Santo Domingo de la Calzada, 23',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Santo Domingo de la Calzada',
	postalCode: '41018',
	country: 'ES',
	phone: '+34 615 36 88 80',
	phoneHref: '+34615368880',
	rating: 4,
	reviewsCount: 133,
	siteUrl: 'https://tortillas-y-comida-javi-sera.vercel.app',
	geo: { lat: 37.383566, lng: -5.9746591 },
	featureId: '0xd126f1f6159399d:0xae8017cf9d7fb0d2',
	placeId: 'ChIJnTlZYR9vEg0R0rB_nc8XgK4',
	cid: '12576645691243110500',
	category: 'Tortillas y comida casera',
	categories: ['Restaurante'],
	tagline: 'Tortillas y comida casera en Sevilla',
	description:
		'Tortillas y comida casera en C. Santo Domingo de la Calzada 23, Sevilla. Raciones generosas, pastel de berenjena y pisto. De 11:30 a 16:00. 4,0 con 133 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tortillas+Y+Comida+Javi+Sera/@37.383566,-5.9746591,17z/data=!3m1!4b1!4m6!3m5!1s0xd126f1f6159399d:0xae8017cf9d7fb0d2!8m2!3d37.383566!4d-5.9746591!16s%2Fg%2F11lgqkkjtv',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.383566%2C-5.9746591',
	embed: 'https://maps.google.com/maps?q=37.383566,-5.9746591&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: todos los días de 11:30 a 16:00,
 * solo mediodía. La ficha avisa de que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '11:30–16:00' },
	{ day: 'Martes', value: '11:30–16:00' },
	{ day: 'Miércoles', value: '11:30–16:00' },
	{ day: 'Jueves', value: '11:30–16:00' },
	{ day: 'Viernes', value: '11:30–16:00' },
	{ day: 'Sábado', value: '11:30–16:00' },
	{ day: 'Domingo', value: '11:30–16:00' },
];

/**
 * Señales de identidad que sí constan: la categoría de restaurante, la
 * especialidad de tortillas, el horario de mediodía, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Tortillas',
	'Comida casera',
	'Santo Domingo de la Calzada · Sevilla',
	'Todos los días · 11:30–16:00',
	'4,0 · 133 reseñas en Google',
	'+34 615 36 88 80',
];

/**
 * Carta construida con el nombre del negocio y lo que destacan las reseñas y
 * las fotos. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Tortillas y guisos',
		items: [
			{
				name: 'Tortilla de patatas',
				note: 'entera o por porciones; en las fotos aparece una de más de un kilo',
			},
			{ name: 'Pastel de berenjena', note: '«increíble», dice una reseña del perfil' },
			{ name: 'Pisto', note: 'casero, también entre lo que destacan las reseñas' },
			{ name: 'Choco en salsa', note: 'de las bandejas del mostrador · foto del perfil' },
			{ name: 'Choco encebollado', note: 'con su salsa de cebolla · foto del perfil' },
			{ name: 'Platos del día', note: 'según lo que se cocine esa mañana; pregunta por teléfono' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Ensaladilla de atún', note: 'en tarrina, como en las fotos del perfil' },
			{ name: 'Salpicón de marisco', note: 'con langostinos y verduras · foto del perfil' },
			{ name: 'Patatas alioli', note: 'caseras, de nevera' },
			{ name: 'Huevos rellenos', note: 'del mostrador, para completar la mesa' },
			{ name: 'Puntillitas', note: 'fritas, según el día' },
			{ name: 'Raciones generosas', note: '«a buen precio y raciones generosas», resume una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Javi Sera?',
		a: 'En la calle Santo Domingo de la Calzada 23, en el 41018 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días de 11:30 a 16:00, solo al mediodía, según la ficha de Google. En festivos puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Tortillas y comida casera. Las reseñas destacan el pastel de berenjena y el pisto, y hablan de un surtido de comida a buen precio con raciones generosas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Se puede comer en el local o es para llevar?',
		a: 'La ficha lo clasifica como restaurante, así que hay servicio en el local. Las raciones y el surtido de comida también se pueden pedir para llevar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Una reseña habla de «buen precio y raciones generosas», pero para saber lo que cuesta el plato del día hay que preguntar en el local o por teléfono.',
	},
	{
		q: '¿Se puede encargar por teléfono?',
		a: `Sí, el canal que consta es el teléfono ${BUSINESS.phone}. Llama para preguntar qué hay, encargar una tortilla o reservar raciones para una hora concreta.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica que hay acceso para sillas de ruedas. No publica más datos de accesibilidad, así que si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4 sobre 5 con 133 reseñas en Google, según la ficha consultada. Las reseñas mezclan elogios a los platos con alguna queja por detalles del servicio.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
