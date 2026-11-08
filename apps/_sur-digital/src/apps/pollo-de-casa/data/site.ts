/**
 * Datos de Pollo de Casa — Polígono Industrial l'Alberca, 2,
 * 03530 La Nucía (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Pollo de Casa», 38.6082731,-0.1286065,
 *   feature 0xd62031f00f2803d:0x159312a320f8b6d7.
 * - Nombre, dirección, teléfono, categoría, valoración, horario y reseñas: ficha
 *   pública de Google consultada el 1 de noviembre de 2026. La ficha no enlaza
 *   una web propia ni publica carta ni precios.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 */

export const BUSINESS = {
	name: 'Pollo de Casa',
	fullName: 'Pollo de Casa',
	shortName: 'Pollo de Casa',
	mark: 'PC',
	street: "Polígono Industrial l'Alberca, 2",
	district: 'La Nucía',
	city: 'La Nucía',
	region: 'Comunidad Valenciana',
	postalCode: '03530',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/pollo-de-casa',
	geo: { lat: 38.6082731, lng: -0.1286065 },
	featureId: '0xd62031f00f2803d:0x159312a320f8b6d7',
	placeId: 'ChIJPYDyAB8DYg0R17b4IKMSkxU',
	plusCode: '8CCXJV5C+8H',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '607 15 99 89',
	phoneHref: 'tel:+34607159989',
	tagline: 'Pollo asado y terraza cubierta en La Nucía',
	description:
		"Pollo de Casa, en el Polígono Industrial l'Alberca, 2 (03530 La Nucía, Alicante). Pollo asado con patatas, arroces y guisos en una terraza cubierta con toldo. De martes a domingo, de 8:00 a 16:00.",
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pollo+de+Casa/@38.6082731,-0.1286065,17z/data=!3m1!4b1!4m6!3m5!1s0xd62031f00f2803d:0x159312a320f8b6d7!8m2!3d38.6082731!4d-0.1286065!16s%2Fg%2F11g8865fbl?authuser=0&hl=es',
	reviews: `https://www.google.com/maps/place/Pollo+de+Casa/@38.6082731,-0.1286065,17z/data=!4m8!3m7!1s0xd62031f00f2803d:0x159312a320f8b6d7!8m2!3d38.6082731!4d-0.1286065!9m1!1b1?hl=es&authuser=0`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6082731%2C-0.1286065',
	embed: 'https://maps.google.com/maps?q=38.6082731,-0.1286065&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6082731,-0.1286065',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 47,
	label: '4,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '8:00–16:00' },
	{ dia: 'Miércoles', horas: '8:00–16:00' },
	{ dia: 'Jueves', horas: '8:00–16:00' },
	{ dia: 'Viernes', horas: '8:00–16:00' },
	{ dia: 'Sábado', horas: '8:00–16:00' },
	{ dia: 'Domingo', horas: '8:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Solo abre a mediodía: si vas a última hora, llama antes por si se ha acabado el pollo.';

/** Lo que la ficha, las reseñas y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Medio pollo con patatas',
	'Arroces',
	'Guisos de pollo',
	'Ensaladas',
	'Terraza cubierta',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado de la casa',
		text: 'Google la clasifica como restaurante especializado en pollo. En las fotos del perfil se ve medio pollo asado con la piel dorada, servido con patatas fritas o con patatas panadera.',
	},
	{
		title: 'Terraza cubierta con toldo',
		text: 'El comedor está bajo un gran toldo marrón, con mesas y sillas rojas de plástico, barandilla metálica y vistas al aparcamiento del polígono. Un sitio de los de comer a mediodía sin quitarse el coche de encima.',
	},
	{
		title: 'Arroces y guisos',
		text: 'Además del asado, en el perfil aparecen un arroz amarillo con pollo y pimiento rojo y un guiso de pollo con arroz blanco, del tipo que se sirve como menú del día.',
	},
	{
		title: '4,5 sobre 5 con 47 reseñas',
		text: 'Con 47 opiniones, la ficha de Google le da 4,5 sobre 5 (noviembre de 2026). Las reseñas destacan el pollo y las patatas «buenos y a buen precio» y el trato; alguna se queja de la espera cuando hay mucha gente.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [{ texto: 'Me ha parecido genial, buen servicio y muy atento.' }];

/**
 * Lo que se reconoce en las fotos del perfil y lo que citan las reseñas. La
 * ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'El pollo',
		items: [
			{ name: 'Medio pollo asado con patatas', note: 'en plato, con patatas fritas' },
			{ name: 'Pollo asado con patatas panadera', note: 'con pimiento y cebolla asados' },
			{ name: 'Pollo guisado', note: 'con arroz blanco, como en las fotos' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Arroz amarillo con pollo', note: 'con pimiento rojo y un trozo de limón' },
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{ name: 'Patatas fritas', note: '«buenas», según las reseñas' },
			{ name: 'Ensalada mixta', note: 'lechuga, tomate, zanahoria y aceitunas' },
			{ name: 'Ensalada de zanahoria', note: 'rallada, con aceitunas y pepino' },
			{ name: 'Pan', note: 'en el servicio de mesa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pollo de Casa?',
		a: "En el Polígono Industrial l'Alberca, 2, 03530 La Nucía (Alicante). La ficha de Google sitúa el local en las coordenadas 38.6082731, -0.1286065. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 8:00 a 16:00. El lunes está cerrado. El día que se consultó la ficha Google advertía de que el 1 de noviembre el horario podría ser distinto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Sí. Hay una terraza cubierta bajo un gran toldo marrón, con mesas y sillas rojas, barandilla y vistas al aparcamiento del polígono. Las fotos del perfil están tomadas en esas mesas, con el pollo y las ensaladas servidos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado con patatas fritas o con patatas panadera, pollo guisado con arroz blanco y arroz amarillo con pollo y pimiento. Para acompañar hay ensalada mixta y ensalada de zanahoria. No hay carta pública con todos los platos ni precios.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. Una reseña dice que el pollo y las patatas están «buenos y a buen precio», pero el importe del menú o del medio pollo solo se sabe preguntando por teléfono o en el local.',
	},
	{
		q: '¿Hay que esperar mucho?',
		a: 'Depende de la hora. Una de las reseñas de la ficha se queja de media hora de espera porque las patatas tardan, y otras elogian el servicio y el trato. Si vas con prisa o en grupo, llama antes al 607 15 99 89.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no lo anuncia ni enlaza ninguna plataforma de entrega, así que no se puede afirmar. Lo que sí está claro es que el local sirve para comer en su terraza y que el pollo se puede pedir para llevar.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento. Esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono, en el 607 15 99 89, o en el propio local.',
	},
];
