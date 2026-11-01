/**
 * Datos de La Isla, Tacos, Kebab & Grill — Carrer Garganes, 2,
 * 03590 Altea (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La Isla, Tacos, Kebab & Grill»,
 *   38.6033005,-0.0455965, feature 0xd6201059ef95aa7:0x7cdb82a28bc7b410.
 * - Nombre, dirección, teléfono, categoría, atributos, valoración, horario y
 *   reseñas: ficha pública de Google consultada el 1 de noviembre de 2026. La
 *   ficha no enlaza una web propia ni publica carta ni precios.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 */

export const BUSINESS = {
	name: 'La Isla, Tacos, Kebab & Grill',
	fullName: 'La Isla, Tacos, Kebab & Grill',
	shortName: 'La Isla',
	mark: 'LI',
	street: 'Carrer Garganes, 2',
	district: 'Altea',
	city: 'Altea',
	region: 'Comunidad Valenciana',
	postalCode: '03590',
	country: 'ES',
	siteUrl: 'https://la-isla-tacos-kebab-grill.vercel.app',
	geo: { lat: 38.6033005, lng: -0.0455965 },
	featureId: '0xd6201059ef95aa7:0x7cdb82a28bc7b410',
	placeId: 'ChIJp1r5ngUBYg0RELTHi6KC23w',
	plusCode: '8CCXJX33+8Q',
	googleCategory: 'Restaurante halal',
	phone: '650 83 00 69',
	phoneHref: 'tel:+34650830069',
	tagline: 'Tacos, kebab y parrilla en Altea',
	description:
		'La Isla, Tacos, Kebab & Grill, en Carrer Garganes, 2 (03590 Altea, Alicante). Tacos, kebab, parrilla y cocina halal, con raciones grandes y menús completos. Abierto todos los días hasta la madrugada.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Isla,+Tacos,+Kebab+%26+Grill/@38.6033005,-0.0455965,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201059ef95aa7:0x7cdb82a28bc7b410!8m2!3d38.6033005!4d-0.0455965!16s%2Fg%2F11g6j8f4x1?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6033005%2C-0.0455965',
	embed: 'https://maps.google.com/maps?q=38.6033005,-0.0455965&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6033005,-0.0455965',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.3,
	count: 475,
	label: '4,3',
};

/** Horario que publica la ficha. Cierra pasada la medianoche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '19:00–0:30' },
	{ dia: 'Martes', horas: '13:00–0:30' },
	{ dia: 'Miércoles', horas: '13:00–0:30' },
	{ dia: 'Jueves', horas: '13:00–0:30' },
	{ dia: 'Viernes', horas: '13:00–0:30' },
	{ dia: 'Sábado', horas: '13:00–0:30' },
	{ dia: 'Domingo', horas: '13:00–0:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha publica un horario especial para el Día de Todos los Santos (1 de noviembre), así que conviene confirmarlo antes de ir. Las horas de cierre son de la madrugada siguiente.';

/** Lo que la ficha, las reseñas y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Tacos',
	'Kebab',
	'Parrilla',
	'Cocina halal',
	'Menús completos',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Tacos, kebab y parrilla',
		text: 'El propio nombre lo dice: tacos, kebab y grill. La ficha la clasifica como restaurante halal, con la carne de la parrilla y el kebab como base de la carta.',
	},
	{
		title: 'Raciones enormes',
		text: 'Una reseña lo destaca sin rodeos: «las raciones son enormes, y los menús sacian en cantidad». Se nota en los platos que aparecen en las fotos del perfil.',
	},
	{
		title: 'Hummus y pizza turca',
		text: 'Otra reseña concreta dos platos: «me encantó el hummus y la pizza turca me impresionó». Son los entrantes y la especialidad de horno que acompañan al kebab.',
	},
	{
		title: '4,3 sobre 5 con 475 reseñas',
		text: 'Con 475 opiniones, la ficha de Google le da 4,3 sobre 5 (noviembre de 2026). Es un volumen alto para la zona, de los locales que se llenan a la hora de cenar.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{ texto: 'Me encantó el hummus y la pizza turca me impresionó.' },
	{ texto: 'Las raciones son enormes, y los menús sacian en cantidad.' },
	{ texto: 'Excelente atención, la comida muy deliciosa, parece gourmet.' },
];

/**
 * Lo que se reconoce en las fotos del perfil y lo que citan las reseñas. La
 * ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Kebab', note: 'el clásico de la casa, en pan o en plato' },
			{ name: 'Carne a la parrilla', note: 'cocina halal, como clasifica Google al local' },
			{ name: 'Tacos', note: 'el primer nombre del rótulo' },
		],
	},
	{
		title: 'Para empezar',
		items: [
			{ name: 'Hummus', note: '«me encantó», según una reseña' },
			{ name: 'Pizza turca', note: '«me impresionó», dice la misma reseña' },
		],
	},
	{
		title: 'Menús',
		items: [
			{ name: 'Menú completo', note: '«los menús sacian en cantidad», según las reseñas' },
			{ name: 'Raciones', note: '«enormes», coinciden las opiniones' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Isla, Tacos, Kebab & Grill?',
		a: 'En Carrer Garganes, 2, 03590 Altea (Alicante). La ficha de Google sitúa el local en las coordenadas 38.6033005, -0.0455965, en pleno casco de Altea. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo abre de 13:00 a 0:30, con el cierre ya pasada la medianoche. El lunes abre solo por la noche, de 19:00 a 0:30. La ficha publica además un horario especial para el Día de Todos los Santos (1 de noviembre), así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Tacos, kebab y parrilla, que es lo que anuncia el nombre del local y con lo que lo clasifica Google (restaurante halal). Las reseñas citan además el hummus y la pizza turca, y hablan de menús completos con raciones enormes. No hay carta ni precios publicados.',
	},
	{
		q: '¿La comida es halal?',
		a: 'Google la clasifica como «restaurante halal», que es la única categoría con la que describe el local. Si necesitas confirmar el detalle de algún plato o de la carne, pregunta por teléfono.',
	},
	{
		q: '¿Se puede comer allí o es solo para llevar?',
		a: 'La ficha publica servicio de mesa y un horario de cenas hasta la madrugada, así que hay mesas para comer en el local. Además, como en cualquier kebab, se puede pedir para llevar.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha no lo anuncia ni enlaza ninguna plataforma de entrega, así que no se puede afirmar. El pedido se puede recoger en Carrer Garganes, 2. Si necesitas reparto, pregúntalo al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las fotos publican precios. Las reseñas hablan de raciones enormes y de menús que sacian, pero el importe del kebab, del menú o de una ración solo se sabe preguntando.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento. Esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono, en el 650 83 00 69, o en el propio mostrador.',
	},
];
