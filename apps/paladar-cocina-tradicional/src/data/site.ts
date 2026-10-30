/**
 * Datos de Paladar Cocina Tradicional — Calle Zuloaga, 3, Loc 1
 * (41500 Alcalá de Guadaíra, Sevilla). Ficha pública de Google Maps
 * consultada en octubre de 2026.
 *
 * La ficha no publica precios. La lista de guisos se ha copiado de la
 * cartelería que el propio establecimiento publica en sus fotografías.
 */

export const BUSINESS = {
	name: 'Paladar Cocina Tradicional',
	shortName: 'Paladar',
	mark: 'PC',
	street: 'Calle Zuloaga, 3, Loc 1',
	district: 'Sevilla',
	city: 'Alcalá de Guadaíra',
	region: 'Andalucía',
	postalCode: '41500',
	country: 'ES',
	siteUrl: 'https://paladar-cocina-tradicional.vercel.app',
	geo: { lat: 37.3383898, lng: -5.8304974 },
	featureId: '0xd1264b650663529:0x5c474f9febb8c5dd',
	placeId: 'ChIJKTVmULZkEg0R3cW4659PR1w',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '622 17 32 37',
	phoneHref: 'tel:+34622173237',
	tagline: 'Cocina tradicional para llevar en Alcalá de Guadaíra',
	description:
		'Paladar Cocina Tradicional, comida casera para llevar en Calle Zuloaga, 3, local 1 (41500 Alcalá de Guadaíra, Sevilla). Guisos de siempre, bocadillos con pan de Alcalá, panadería y repostería. Consulta el menú del día por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Paladar+Cocina+Tradicional/@37.3383898,-5.8304974,17z/data=!3m1!4b1!4m6!3m5!1s0xd1264b650663529:0x5c474f9febb8c5dd!8m2!3d37.3383898!4d-5.8304974!16s%2Fg%2F11hcj2940g',
	cid: 'https://www.google.com/maps?cid=6652218182163655005',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3383898%2C-5.8304974',
	embed: 'https://maps.google.com/maps?q=37.3383898,-5.8304974&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3383898,-5.8304974',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.2, count: 160, label: '4,2' };

/** Horario publicado en la ficha. */
export const HORARIO = [
	{ day: 'Lunes', value: '9:30 – 15:30' },
	{ day: 'Martes', value: '9:30 – 15:30 · 18:30 – 22:30' },
	{ day: 'Miércoles', value: '9:30 – 15:30 · 18:30 – 22:30' },
	{ day: 'Jueves', value: '9:30 – 15:30 · 18:30 – 22:30' },
	{ day: 'Viernes', value: '9:30 – 15:30 · 18:30 – 22:30' },
	{ day: 'Sábado', value: '9:30 – 15:30 · 18:30 – 22:30' },
	{ day: 'Domingo', value: '9:30 – 15:30' },
];
export const HORARIO_AVISO =
	'La ficha marca dos turnos de martes a sábado: de 9:30 a 15:30 y de 18:30 a 22:30. Los lunes y los domingos solo abre a mediodía. En festivos el horario puede variar, así que conviene confirmarlo por teléfono.';

export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Bocadillos con pan de Alcalá',
	'Pizzas',
	'Panadería y repostería',
	'Catering',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina tradicional',
		text: 'El negocio se define en su ficha como «tu rincón de cocina tradicional para llevar», con «sabores caseros y auténticos platos». La carta se organiza en guisos de cuchara, pollo, verduras y bocadillos.',
	},
	{
		title: 'Pan de Alcalá',
		text: 'La cartelería del local anuncia los bocadillos con pan de Alcalá como especialidad. El mismo cartel suma panadería, repostería y catering entre los servicios de la casa.',
	},
	{
		title: `Un ${RATING.label} con ${RATING.count} reseñas`,
		text: 'La ficha de Google reúne 160 opiniones. Entre ellas: «Tortilla, salchichas, carne con tomate, papas aliñás... muy rico todo» y «las tortillas y empanadas increíbles».',
	},
];

/**
 * Lista copiada de la cartelería del local. La ficha no publica precios ni una
 * carta oficial con importes.
 */
export const MENU = [
	{
		title: 'Guisos caseros',
		items: [
			{ name: 'Carne con tomate', note: 'guiso de la casa' },
			{ name: 'Carrillá en salsa', note: 'guiso de la casa' },
			{ name: 'Solomillo', note: 'a la plancha' },
			{ name: 'Solomillo a la pimienta', note: 'con salsa de pimienta' },
			{ name: 'Ternera a la jardinera', note: 'con verduras' },
			{ name: 'Albóndigas en salsa', note: 'guiso de la casa' },
			{ name: 'Sangre encebollada', note: 'con cebolla' },
			{ name: 'Higaditos de pollo', note: 'al ajillo' },
		],
	},
	{
		title: 'Pollo',
		items: [
			{ name: 'Pollo al curry', note: 'con salsa de curry y perejil' },
			{ name: 'Pollo con verduras', note: 'guiso de la casa' },
			{ name: 'Filetes de pollo al queso', note: 'con queso fundido' },
			{ name: 'Churrasco de pollo en salsa verde', note: 'con salsa verde' },
			{ name: 'Churrasco de pollo adobado', note: 'a la plancha' },
		],
	},
	{
		title: 'Verduras y huevo',
		items: [
			{ name: 'Pisto con huevo', note: 'ración' },
			{ name: 'Habichuelas con huevo', note: 'ración' },
			{ name: 'Guisantes con huevo', note: 'ración' },
			{ name: 'Espinacas con garbanzos', note: 'ración' },
			{ name: 'Revuelto de setas', note: 'ración' },
		],
	},
	{
		title: 'Bocadillos, pan y pizza',
		items: [
			{ name: 'Bocadillo con pan de Alcalá', note: 'especialidad de la casa' },
			{ name: 'Pizzas', note: 'del catálogo del local' },
			{ name: 'Panadería', note: 'pan y bollería' },
			{ name: 'Repostería', note: 'dulces de la casa' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«Tortilla, salchichas, carne con tomate, papas aliñás... muy rico todo.»', valor: 5 },
	{ texto: '«Todo espectacular, las tortillas y empanadas increíbles!!»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Paladar Cocina Tradicional?',
		a: 'En la calle Zuloaga, 3, local 1, 41500 Alcalá de Guadaíra (Sevilla). Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 622 17 32 37. Llama para consultar el menú del día, encargar o preguntar por el catering.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a sábado abre de 9:30 a 15:30 y de 18:30 a 22:30. Los lunes y los domingos solo abre a mediodía, de 9:30 a 15:30. En festivos el horario puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Guisos caseros como carne con tomate, carrillá en salsa, albóndigas, pollo al curry o churrasco de pollo; verduras y huevos; bocadillos con pan de Alcalá, pizzas, panadería y repostería.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica una carta con precios, y esta web no los inventa. Los guisos que aparecen aquí son los de la cartelería del propio establecimiento; consulta precios y disponibilidad por teléfono.',
	},
	{
		q: '¿Se puede comer en el local o es solo para llevar?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el negocio se presenta como cocina tradicional para llevar. Lo habitual es recoger el pedido; pregunta al llamar si hay mesas.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'La carta incluye pisto con huevo, habichuelas con huevo, guisantes con huevo, espinacas con garbanzos y revuelto de setas. Pregunta por los ingredientes y por las opciones del día.',
	},
	{
		q: '¿Hacen catering?',
		a: 'El cartel del local incluye catering entre sus servicios. Para comidas de grupo o encargos grandes, llama al 622 17 32 37 y pregunta por las condiciones.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan los guisos, las tortillas y el trato.`,
	},
];
