/**
 * Datos de TU ASADOR — Av. Pueblo Saharaui (frente al Aldi), 41008 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «TU ASADOR», 37.3988754,-5.9693448,
 *   feature 0xd126eb3c7d2f47b:0xf02143de1e4db0c0 (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta con precios ni enlaza
 * web propia. Los platos que se listan son los que aparecen en las fotos y en
 * las reseñas del perfil, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'Tu Asador',
	fullName: 'Tu Asador',
	googleName: 'TU ASADOR',
	shortName: 'Tu Asador',
	mark: 'A',
	street: 'Av. Pueblo Saharaui, frente al Aldi',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Av. Pueblo Saharaui',
	postalCode: '41008',
	country: 'ES',
	phone: '+34 955 09 86 84',
	phoneHref: '+34955098684',
	rating: 4.7,
	reviewsCount: 128,
	siteUrl: 'https://tu-asador.vercel.app',
	geo: { lat: 37.3988754, lng: -5.9693448 },
	featureId: '0xd126eb3c7d2f47b:0xf02143de1e4db0c0',
	placeId: 'ChIJe_TSx7NuEg0RwLBNHt5DIfA',
	cid: '17301490402030981248',
	category: 'Asador de pollos y comida para llevar',
	categories: ['Restaurante especializado en pollo', 'Restaurante de comida para llevar'],
	tagline: 'Pollos, carnes y otras delicias en Sevilla',
	description:
		'Asador de pollos y comida para llevar en Av. Pueblo Saharaui, frente al Aldi, Sevilla. De miércoles a domingo, 9:00–15:00. 4,7 sobre 5 en Google con 128 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/TU+ASADOR/@37.3988754,-5.9693448,17z/data=!4m6!3m5!1s0xd126eb3c7d2f47b:0xf02143de1e4db0c0!8m2!3d37.3988754!4d-5.9693448!16s%2Fg%2F11dyqrh4f9',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3988754%2C-5.9693448',
	embed: 'https://maps.google.com/maps?q=37.3988754,-5.9693448&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: cierra lunes y martes y abre de
 * miércoles a domingo de 9:00 a 15:00. La ficha avisa de que en festivos puede
 * cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '9:00–15:00' },
	{ day: 'Jueves', value: '9:00–15:00' },
	{ day: 'Viernes', value: '9:00–15:00' },
	{ day: 'Sábado', value: '9:00–15:00' },
	{ day: 'Domingo', value: '9:00–15:00' },
];

/**
 * Señales de identidad que sí constan: las dos categorías de la ficha, el
 * formato de comida para llevar, el horario de mediodía, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Comida para llevar',
	'Av. Pueblo Saharaui · Sevilla',
	'De miércoles a domingo · 9:00–15:00',
	'4,7 · 128 reseñas en Google',
	'+34 955 09 86 84',
];

export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'el plato de la casa: entero, por raciones o con patatas' },
			{
				name: 'Pollo con patatas',
				note: 'de la bandeja del horno, con patata y su jugo · foto del perfil',
			},
			{ name: 'Patatas fritas', note: 'para acompañar el pollo' },
			{ name: 'Pollo entero por encargo', note: 'llama y confirma cuántos y a qué hora recogerlos' },
		],
	},
	{
		title: 'Carnes y guisos',
		items: [
			{
				name: 'Carne en salsa',
				note: 'lomo en rodajas con su salsa · foto del perfil',
			},
			{ name: 'Carnes asadas', note: 'el rótulo de la casa anuncia «pollos / carnes»' },
			{ name: 'Guisos del día', note: 'según lo que se cocine esa mañana; pregunta por teléfono' },
			{ name: 'Raciones para compartir', note: 'para una comida en casa o un encargo' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Tortilla de patatas',
				note: '«la mejor tortilla casera», dice una reseña · foto del perfil',
			},
			{ name: 'Croquetas', note: 'de la bandeja de fritos · foto del perfil' },
			{ name: 'Ensaladilla', note: 'casera, con su huevo y su mayonesa · foto del perfil' },
			{ name: 'Empanadas y empanadillas', note: 'del mostrador, según el día' },
		],
	},
	{
		title: 'Postres y bebidas',
		items: [
			{ name: 'Arroz con leche', note: 'en tarro de cristal, con canela y limón · foto del perfil' },
			{ name: 'Postres caseros', note: 'según lo que haya en el mostrador' },
			{ name: 'Refrescos y agua', note: 'para completar el pedido' },
			{ name: 'Encargos por teléfono', note: `el canal que consta es el ${'+34 955 09 86 84'}` },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tu Asador?',
		a: 'En la avenida Pueblo Saharaui, frente al Aldi, en el 41008 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de miércoles a domingo de 9:00 a 15:00. Los lunes y los martes cierra, según la ficha de Google, que avisa de que en festivos el horario puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo y de comida para llevar. La especialidad es el pollo asado con patatas, y las reseñas mencionan también la tortilla casera, el trato y los precios.',
	},
	{
		q: '¿Es un restaurante con mesas o es para llevar?',
		a: 'La ficha lo clasifica como «restaurante de comida para llevar» y no publica servicio de mesa. Lo habitual es encargar y recoger el pedido, o comerlo fuera.',
	},
	{
		q: '¿Hay que encargar el pollo con antelación?',
		a: `No consta que haga falta, pero es lo recomendable si vas a por varios pollos o una bandeja. Llama al ${BUSINESS.phone} y confirma qué hay y a qué hora puedes recogerlo.`,
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Una reseña de Google destaca los «precios económicos», pero para saber el precio del día hay que preguntar en el local o por teléfono.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica que hay acceso para sillas de ruedas, pero no aparcamiento ni asientos adaptados. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 128 reseñas en Google, según la ficha consultada. Las reseñas destacan la materia prima, el trato y la tortilla casera.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
