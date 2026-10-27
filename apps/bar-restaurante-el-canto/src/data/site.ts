/**
 * Datos de Bar Restaurante El Cantó — Carrer la Via, 6,
 * 12530 Les Alqueries (Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Restaurante El Cantó», 39.8977408,
 *   -0.1038519, feature 0xd60042815296d83:0x96b2383f0b1f865 (dirección,
 *   teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Reseñas públicas de Google citadas en la web.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta ni precios: los platos salen de las fotos del
 * perfil y de las reseñas. No se inventan importes.
 */

export const BUSINESS = {
	name: 'El Cantó',
	fullName: 'Bar Restaurante El Cantó',
	shortName: 'El Cantó',
	mark: 'EC',
	street: 'Carrer la Via, 6',
	city: 'Les Alqueries',
	province: 'Castellón',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Baixa',
	postalCode: '12530',
	country: 'ES',
	phoneDisplay: '964 51 36 47',
	phoneHref: 'tel:+34964513647',
	rating: 4.4,
	reviewsCount: 232,
	siteUrl: 'https://bar-restaurante-el-canto.vercel.app',
	geo: { lat: 39.8977408, lng: -0.1038519 },
	featureId: '0xd60042815296d83:0x96b2383f0b1f865',
	placeId: 'ChIJg20pFSgEYA0RZfix8IMjawk',
	cid: '678675218435274853',
	googleCats: ['Restaurante de cocina española', 'Bar'],
	tagline: 'Cocina de cada día en Les Alqueries',
	description:
		'Bar Restaurante El Cantó, en Carrer la Via, 6, Les Alqueries (Castellón): almuerzos, cocina casera, arroces y plancha hasta las cuatro, con terraza y comedor. 4,4 en Google con 232 reseñas. Tel. 964 51 36 47.',
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+El+Cant%C3%B3/@39.8977408,-0.1038519,17z/data=!3m1!4b1!4m6!3m5!1s0xd60042815296d83:0x96b2383f0b1f865!8m2!3d39.8977408!4d-0.1038519!16s%2Fg%2F11g03n6d95?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=39.8977408,-0.1038519&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: mañana y mediodía, con el domingo cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '6:00–16:00' },
	{ day: 'Martes', value: '6:00–16:00' },
	{ day: 'Miércoles', value: '6:00–16:00' },
	{ day: 'Jueves', value: '6:00–16:00' },
	{ day: 'Viernes', value: '6:00–16:00' },
	{ day: 'Sábado', value: '6:00–13:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const SERVICIOS = [
	'Almuerzos',
	'Cocina casera',
	'Arroces',
	'Sepia a la plancha',
	'Carnes a la plancha',
	'Bocadillos',
	'Café y carajillo',
	'Terraza',
	'Comedor',
	'Reservas por teléfono',
];

/**
 * Carta. La ficha no publica carta con precios: los platos salen de las fotos
 * del perfil y de las reseñas públicas.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Olivas de la casa', note: 'en aceitera metálica, lo primero que llega a la mesa' },
			{ name: 'Almendras tostadas', note: 'en plato pequeño, con la primera bebida' },
		],
	},
	{
		title: 'Almuerzos y bocadillos',
		items: [
			{
				name: 'Bocadillo de la barra',
				note: 'en pan de pueblo, con el relleno del día; la ficha no publica la lista',
			},
			{
				name: 'Almuerzo con huevo y patatas',
				note: 'el clásico de media mañana en la comarca, a cualquier hora de la mañana',
			},
		],
	},
	{
		title: 'De cuchara y de arroz',
		items: [
			{
				name: 'Arroces de la casa',
				note: '«recomiendo arroces y sepia», resume una reseña de la ficha',
			},
			{
				name: 'Cocina casera del día',
				note: 'guisos de temporada; lo que hay cada día se pregunta en la barra',
			},
		],
	},
	{
		title: 'A la plancha',
		items: [
			{
				name: 'Filete con patatas',
				note: 'a la plancha, con salsa de la casa y patatas fritas',
			},
			{ name: 'Sepia a la plancha', note: 'a la plancha con alioli; la citan varias reseñas' },
		],
	},
	{
		title: 'Postre y café',
		items: [
			{
				name: 'Postre de crema de la casa',
				note: 'crema fría servida en cuenco de cristal, con galleta',
			},
			{ name: 'Carajillo', note: 'en vaso de caña, el café de después de comer en la barra' },
		],
	},
];

export const REVIEWS = [
	{ text: 'Buen sitio para comer, excelente calidad y buen trato.', rating: 5 },
	{ text: 'Buen servicio, recomiendo arroces y sepia.', rating: 4 },
	{ text: 'Comida casera muy buena, trato excelente y muy buena atención.', rating: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante El Cantó?',
		a: 'En el número 6 de la calle la Via, en Les Alqueries (12530), en la Plana Baixa. Es un bajo de ladrillo con el rótulo rojo de «Bar Rte. El Cantó», terraza delante y un árbol dando sombra a las mesas de fuera. El botón «Cómo llegar» abre la ruta exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 6:00 a 16:00 y el sábado de 6:00 a 13:00. Los domingos cierra. Es horario de mañana y mediodía: se desayuna, se almuerza y se come antes de las cuatro, y no hay servicio de cena. En fiestas del pueblo conviene llamar antes al 964 51 36 47.',
	},
	{
		q: '¿Hay carta y precios?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no inventa importes: los platos que aparecen aquí son los de sus propias fotos y los que citan las reseñas. Los arroces, la sepia, el menú del día y su precio se consultan por teléfono o directamente en la barra.',
	},
	{
		q: '¿Qué se come en El Cantó?',
		a: 'Cocina española casera. La ficha lo clasifica como restaurante de cocina española y bar, y en sus fotos aparecen el bocadillo de la barra, el filete con patatas, las olivas, las almendras tostadas, el postre de crema y el carajillo. Las reseñas hablan de arroces, sepia a la plancha y comida casera.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Por teléfono, en el 964 51 36 47. No hay reserva online ni formulario en esta web. El comedor es amplio y tiene terraza, así que para grupos o para el domingo de fiestas conviene llamar con tiempo.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos de la ficha se ven mesas y sillas blancas delante de la fachada, a pie de calle y a la sombra de un árbol. No hay reserva de terraza: se ocupa según llegada.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada, así que el aparcamiento es el de la calle.',
	},
	{
		q: '¿Dónde se aparca?',
		a: 'El local no tiene aparcamiento propio: se aparca en la misma calle la Via y en las calles del entorno, en superficie. Al ser un pueblo, salvo a la hora del almuerzo suele haber sitio cerca.',
	},
];
