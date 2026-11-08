/**
 * Datos de El Capricho de Ana — C. Porvenir, 29 (41013 Sevilla).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La oferta que se describe son los
 * platos que aparecen en las fotografías del local y en sus reseñas.
 */

export const BUSINESS = {
	name: 'El Capricho de Ana',
	shortName: 'El Capricho',
	mark: 'CA',
	street: 'C. Porvenir, 29',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41013',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-capricho-de-ana',
	geo: { lat: 37.3725079, lng: -5.981675 },
	featureId: '0xd126e9d0d32575f:0x161ccb2a1592780d',
	placeId: 'ChIJX1cyDZ1uEg0RDXiSFSrLHBY',
	googleCategory: 'Comida a domicilio',
	phone: '630 38 97 32',
	phoneHref: 'tel:+34630389732',
	tagline: 'Comida casera con recetas de la abuela en Sevilla',
	description:
		'El Capricho de Ana, tienda de comida casera para llevar en C. Porvenir, 29 (41013 Sevilla). Recetas de la abuela, cocina diaria con ingredientes frescos y pasteles salados por encargo. Recogida en el local.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Capricho+de+Ana/@37.3725079,-5.981675,17z/data=!3m1!4b1!4m6!3m5!1s0xd126e9d0d32575f:0x161ccb2a1592780d!8m2!3d37.3725079!4d-5.981675!16s%2Fg%2F11c5bsvkxy',
	cid: 'https://www.google.com/maps?cid=1593241334403868691',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3725079%2C-5.981675',
	embed: 'https://maps.google.com/maps?q=37.3725079,-5.981675&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3725079,-5.981675',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.3, count: 59, label: '4,3' };

/** Horario publicado: solo mediodía, de lunes a viernes. */
export const HORARIO = [
	{ day: 'Lunes a viernes', value: '12:30 – 16:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de 12:30 a 16:00 de lunes a viernes, con cierre los sábados y los domingos. En festivos el horario puede variar, así que conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera',
	'Para recoger en el local',
	'Recetas de la abuela',
	'Pastel de merluza y gambas',
	'Huevos rellenos',
	'Grandes pedidos',
];

export const HIGHLIGHTS = [
	{
		title: 'Recetas de la abuela',
		text: 'El negocio lo explica así en su ficha: comida «totalmente casera, elaborada en el propio establecimiento con recetas de la Abuela» y cocinada a diario con ingredientes frescos.',
	},
	{
		title: 'El pastel de merluza y gambas',
		text: 'Es la especialidad que más se repite en las fotos y en las reseñas: «Estas navidades encargamos un pastel de merluza y gambas exquisito». Se prepara para celebraciones y encargos.',
	},
	{
		title: `Un ${RATING.label} con ${RATING.count} reseñas`,
		text: 'La ficha suma 59 opiniones. Los clientes destacan la comida «bien preparada y con ingredientes de calidad», además del trato y la profesionalidad.',
	},
];

/**
 * La ficha no publica carta ni precios. Selección basada en las fotografías
 * del local y en las reseñas.
 */
export const MENU = [
	{
		title: 'Especialidades para encargar',
		items: [
			{ name: 'Pastel de merluza y gambas', note: 'el salado de la casa, por encargo' },
			{ name: 'Huevos rellenos', note: 'bandeja para compartir' },
			{ name: 'Tortilla de patatas', note: 'entera, en bandeja' },
		],
	},
	{
		title: 'Guisos de cuchara',
		items: [
			{ name: 'Carne en salsa', note: 'lomo en su salsa, cortado en lonchas' },
			{ name: 'Callos', note: 'guiso de la abuela' },
			{ name: 'Espinacas con garbanzos', note: 'ración' },
			{ name: 'Fideos guisados', note: 'guiso de la casa' },
			{ name: 'Lentejas', note: 'guiso de la casa' },
		],
	},
	{
		title: 'Del día',
		items: [
			{ name: 'Guiso del día', note: 'se cocina a diario; se pregunta en el local' },
			{ name: 'Ración de carne', note: 'de la vitrina, con su salsa' },
			{ name: 'Ensalada para acompañar', note: 'según el día' },
		],
	},
	{
		title: 'Encargos y bandejas',
		items: [
			{ name: 'Pasteles salados para celebraciones', note: 'por encargo, como el de Navidad' },
			{ name: 'Bandejas para compartir', note: 'huevos rellenos y tortillas' },
			{ name: 'Grandes pedidos', note: 'el único servicio fuera del local' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«La comida es deliciosa, bien preparada y con ingredientes de calidad.»', valor: 5 },
	{
		texto: '«Estas navidades encargamos un pastel de merluza y gambas exquisito.»',
		valor: 5,
	},
	{ texto: '«Muy buen trato y profesionalidad.»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está El Capricho de Ana?',
		a: 'En la calle Porvenir, 29, 41013 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 630 38 97 32. Llama para consultar el menú del día o encargar un pastel o una bandeja.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 12:30 a 16:00. Los sábados y los domingos cierra. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'El negocio lo indica en su ficha: la comida es para recoger en el local y no hay reparto a domicilio, salvo para grandes pedidos. Pregunta por las condiciones al encargar.',
	},
	{
		q: '¿Qué es el pastel de merluza y gambas?',
		a: 'Es un pastel salado de la casa, el plato que más aparece en las fotos y que una clienta destaca por encargo en Navidad. Se prepara para celebraciones; conviene encargarlo con antelación.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica una carta con precios, y esta web no los inventa. Los platos que aparecen son los de las fotografías y reseñas del establecimiento; consulta precios y disponibilidad al llamar.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'En las fotos aparecen huevos rellenos, tortilla de patatas y espinacas con garbanzos, entre otros. Pregunta por los ingredientes y por las opciones del día al hacer el encargo.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan la comida, el trato y la profesionalidad.`,
	},
];
