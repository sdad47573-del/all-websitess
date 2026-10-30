/**
 * Datos de Asador 3 Delicias — C. López de Gómara, 9, 41010 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Asador 3 Delicias», 37.3799537,-6.0084962,
 *   feature 0xd126dfe252eb475:0x946ab70f139e4f6c (nombre, dirección, categoría,
 *   horario, teléfono, nota, reseñas, descripción y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta con precios ni enlaza
 * web propia. La carta se apoya en la descripción del propio negocio y en las
 * reseñas, y así se dice en la página.
 */

export const BUSINESS = {
	name: 'Asador 3 Delicias',
	fullName: 'Asador 3 Delicias',
	googleName: 'Asador 3 Delicias',
	shortName: '3 Delicias',
	mark: '3',
	street: 'C. López de Gómara, 9',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'López de Gómara',
	postalCode: '41010',
	country: 'ES',
	phone: '+34 640 15 55 90',
	phoneHref: '+34640155590',
	rating: 4.4,
	reviewsCount: 89,
	siteUrl: 'https://asador-3-delicias.vercel.app',
	geo: { lat: 37.3799537, lng: -6.0084962 },
	featureId: '0xd126dfe252eb475:0x946ab70f139e4f6c',
	placeId: 'ChIJdbQuJf5tEg0RbE-eEw-3apQ',
	cid: '10697400857447542636',
	category: 'Asador de pollos y restaurante',
	categories: ['Restaurante especializado en pollo'],
	tagline: 'Pollo asado, frito crujiente y tapas en Sevilla',
	description:
		'Asador de pollos en López de Gómara 9, Sevilla: pollo asado, pollo frito crujiente, tapas, serranitos y hamburguesas. 4,4 sobre 5 con 89 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+3+Delicias/@37.3799537,-6.0084962,17z/data=!3m1!4b1!4m6!3m5!1s0xd126dfe252eb475:0x946ab70f139e4f6c!8m2!3d37.3799537!4d-6.0084962!16s%2Fg%2F11r5xkrn_s',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3799537%2C-6.0084962',
	embed: 'https://maps.google.com/maps?q=37.3799537,-6.0084962&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: abre todos los días menos el
 * martes; de miércoles a viernes hay dos turnos y el fin de semana es
 * continuo. La ficha avisa de que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–17:00' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '12:30–16:30 · 20:00–23:00' },
	{ day: 'Jueves', value: '12:30–16:30 · 20:00–23:00' },
	{ day: 'Viernes', value: '12:30–16:30 · 20:00–23:45' },
	{ day: 'Sábado', value: '12:30–23:30' },
	{ day: 'Domingo', value: '12:30–23:00' },
];

/**
 * Señales de identidad que sí constan: la categoría, los productos que anuncia
 * la propia ficha, el horario, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Pollo frito crujiente',
	'Tapas y serranitos',
	'De lunes a domingo · martes cerrado',
	'4,4 · 89 reseñas en Google',
	'+34 640 15 55 90',
];

export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'el producto de la casa, de elaboración propia' },
			{
				name: 'Pollo asado con patatas',
				note: '«riquísimo», lo resume una reseña · foto del perfil',
			},
			{
				name: 'Pollo frito crujiente',
				note: 'la otra especialidad que anuncia la ficha · foto del perfil',
			},
			{
				name: 'Combo de pollo asado',
				note: 'pollo, ensalada, patatas y refresco · el cartel de ofertas del local',
			},
		],
	},
	{
		title: 'Platos y arroces',
		items: [
			{ name: 'Arroz 3 delicias', note: 'con huevo, jamón y verduras · foto del perfil' },
			{
				name: 'Lomo a la plancha con arroz',
				note: 'con pimientos, huevo y patatas · foto del perfil',
			},
			{ name: 'Nachos', note: 'con queso, guacamole, pico de gallo y nata agria · foto del perfil' },
			{ name: 'Platos grandes', note: 'para compartir en mesa o pedir para llevar' },
		],
	},
	{
		title: 'Entre panes y tapas',
		items: [
			{
				name: 'Hamburguesa con bacon y queso',
				note: 'con patatas · foto del perfil',
			},
			{ name: 'Serranitos', note: 'uno de los bocadillos que mencionan las reseñas' },
			{ name: 'Tapas variadas', note: 'la ficha anuncia tapas variadas' },
			{ name: 'Patatas fritas', note: 'para acompañar el pollo o la hamburguesa' },
		],
	},
	{
		title: 'Postres y bebidas',
		items: [
			{ name: 'Postres caseros', note: 'la ficha anuncia postres y bebidas' },
			{ name: 'Refrescos y agua', note: 'para completar la comida' },
			{ name: 'Cervezas', note: 'de nevera, para el tapeo' },
			{ name: 'Café', note: 'para el final de la mesa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador 3 Delicias?',
		a: 'En la calle López de Gómara 9, en el 41010 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De miércoles a viernes abre de 12:30 a 16:30 y de 20:00 a 23:00 (el viernes hasta las 23:45); el lunes, de 12:30 a 17:00; el sábado, de 12:30 a 23:30, y el domingo, de 12:30 a 23:00. Cierra los martes. En festivos puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, pollo frito crujiente, tapas variadas, hamburguesas, serranitos, postres y bebidas, según la descripción de la propia ficha. Las reseñas añaden la berenjena y los platos grandes.',
	},
	{
		q: '¿Se puede comer en el local o solo para llevar?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo y anuncia servicio con tapas y platos, así que hay mesa. Además, el pollo asado y los platos grandes se piden para llevar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Para saber el precio del pollo, del menú del día o de las raciones, llama al teléfono del asador o pregúntalo en el local.',
	},
	{
		q: '¿Se puede encargar por teléfono?',
		a: `Sí, el canal que consta es el teléfono ${BUSINESS.phone}. Llama para encargar un pollo, una bandeja o una mesa para un grupo.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica acceso para sillas de ruedas y aseo adaptado, pero no aparcamiento adaptado. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 89 reseñas en Google, según la ficha consultada. Las reseñas repiten el pollo con patatas, la atención y la presentación de los platos.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de reservas ni de pedidos: el teléfono es el contacto directo.',
	},
];
