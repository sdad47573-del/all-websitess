/**
 * Datos de Asador de pollos Nora comida árabe — Av. de Carlos Haya, 63,
 * Cruz de Humilladero, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: Asador de pollos Nora comida árabe,
 *   36.7221911,-4.4480432, feature 0xd72f70d6b96eae5:0xdd10ab863bfe4dbb
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas,
 *   accesibilidad y descripción del local).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios. No se dan cifras ni se prometen servicios que no consten.
 */

export const BUSINESS = {
	name: 'Asador de pollos Nora',
	fullName: 'Asador de pollos Nora · comida árabe',
	shortName: 'Nora',
	mark: 'ن',
	street: 'Av. de Carlos Haya, 63',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Cruz de Humilladero',
	postalCode: '29010',
	country: 'ES',
	phone: '+34 652 10 98 20',
	phoneHref: '+34652109820',
	rating: 4.6,
	reviewsCount: 96,
	siteUrl: 'https://www.sur-digital.com/asador-de-pollos-nora',
	geo: { lat: 36.7221911, lng: -4.4480432 },
	featureId: '0xd72f70d6b96eae5:0xdd10ab863bfe4dbb',
	placeId: 'ChIJ5eqWaw33cg0Ru03-O4arEN0',
	cid: '15929420475029933499',
	category: 'Asador de pollos y comida árabe',
	categories: ['Restaurante'],
	tagline: 'Pollo asado y comida árabe halal en Carlos Haya',
	description:
		'Asador de pollos Nora, pollo asado y comida árabe halal en la avenida de Carlos Haya 63, Cruz de Humilladero, Málaga. Cuscús, pastela, tajín y dulces árabes. 4,6 sobre 5 en Google con 96 reseñas.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio establecimiento en su ficha. */
	ownerDescription:
		'Comida halal y andaluza con un toque especial de la dueña: pastela, cuscús, dulces y mucho más.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+pollos+Nora+comida+%C3%A1rabe/@36.7221911,-4.4480432,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70d6b96eae5:0xdd10ab863bfe4dbb!8m2!3d36.7221911!4d-4.4480432!16s%2Fg%2F11dz1n5bml',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7221911%2C-4.4480432',
	embed: 'https://maps.google.com/maps?q=36.7221911,-4.4480432&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google. El miércoles abre antes (9:00) y el
 * resto de días el horario cambia entre las 16:00 y las 16:30. La ficha avisa
 * de que en festivos puede ser distinto.
 */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–16:30' },
	{ day: 'Martes', value: '11:00–16:00' },
	{ day: 'Miércoles', value: '9:00–17:00' },
	{ day: 'Jueves', value: '11:00–16:00' },
	{ day: 'Viernes', value: '11:00–16:00' },
	{ day: 'Sábado', value: '11:00–16:30' },
	{ day: 'Domingo', value: '11:00–16:30' },
];

/**
 * Señales de identidad que sí constan: la comida halal y andaluza que anuncia
 * la ficha, el pollo asado, el cuscús, la pastela, el barrio y el teléfono.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Comida halal',
	'Cuscús y pastela',
	'Comida andaluza',
	'Acceso adaptado',
	'+34 652 10 98 20',
];

/**
 * La ficha no publica carta ni precios. Los platos se apoyan en la descripción
 * del propio local (pastela, cuscús, dulces) y en las reseñas, que nombran el
 * pollo asado, el tajín, las albóndigas y las raciones de comida casera.
 */
/**
 * La ficha no publica carta ni precios. Los platos se apoyan en la descripción
 * del local (pastela, cuscús, dulces), en las reseñas (pollo, tajín, albóndigas)
 * y en las fotografías del perfil (cuscús, pastelas, pescado al horno, fritos y
 * dulces del mostrador). No se dan precios.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado', note: 'el plato que destaca la reseña: «está muy bueno»' },
			{ name: 'Medio pollo', note: 'para una persona o para completar la mesa' },
			{ name: 'Pollo con garbanzos y cebolla', note: 'en salsa, como en una de las fotos del perfil' },
			{ name: 'Raciones para llevar', note: 'la casa prepara pollo para recoger' },
		],
	},
	{
		title: 'Cuscús y pastela',
		items: [
			{ name: 'Cuscús', note: 'con verduras, garbanzos y pasas, en la bandeja de las fotos' },
			{ name: 'Pastela de carne', note: 'hojaldre relleno, servido en porciones' },
			{ name: 'Pastela de pescado', note: 'con langostinos alrededor, en una de las fotos' },
			{ name: 'Tajín de pollo', note: 'uno de los platos que piden las reseñas' },
		],
	},
	{
		title: 'Pescado y fritos',
		items: [
			{ name: 'Pescado al horno con pimientos', note: 'bandeja de lomos con hierbas y pimiento rojo' },
			{ name: 'Empanadillas fritas', note: 'rellenas y doradas, en la bandeja del mostrador' },
			{ name: 'Albóndigas en salsa de tomate', note: 'el guiso que repiten las reseñas' },
			{ name: 'Platos del día', note: 'la propuesta cambia; pregunta por teléfono' },
		],
	},
	{
		title: 'Dulces árabes',
		items: [
			{ name: 'Surtido de dulces', note: 'tartas y petit fours de la vitrina' },
			{ name: 'Bollitos de almendra y pétalos de rosa', note: 'en la bandeja junto a la caja registradora' },
			{ name: 'Pastelería del día', note: 'según lo que haya en el mostrador' },
			{ name: 'Té y café', note: 'para acompañar los dulces' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador de pollos Nora?',
		a: 'En la avenida de Carlos Haya 63, en Cruz de Humilladero, 29010 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días, pero con horarios distintos: lunes de 11:00 a 16:30, martes, jueves y viernes de 11:00 a 16:00, miércoles de 9:00 a 17:00 y sábado y domingo de 11:00 a 16:30. La ficha avisa de que en festivos puede cambiar.',
	},
	{
		q: '¿La comida es halal?',
		a: 'Sí. La propia ficha del local se presenta como comida halal y andaluza con un toque especial de la dueña. Si necesitas un detalle concreto de certificación, confírmalo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, cuscús con verduras y garbanzos, pastela de carne y de pescado, tajín de pollo, pescado al horno con pimientos, empanadillas fritas, albóndigas en salsa de tomate y dulces árabes del mostrador. La casa mezcla la cocina árabe con la andaluza.',
	},
	{
		q: '¿Hay que reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa, para encargar pollo o para preguntar por los platos del día.`,
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Es un asador de pollos con comida casera, así que lo habitual es encargar por teléfono y recoger en el local.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica más datos de accesibilidad, así que conviene llamar si necesitas una condición concreta.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 96 reseñas en Google, según la ficha consultada.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del asador y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
