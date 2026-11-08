/**
 * Datos de La Ermita — Camino de la Ermita, s/n, 30169 San Ginés (Murcia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La Ermita», 37.9584484,-1.179648,
 *   feature 0xd637f4ca51dabdb:0xd253c2d1f7aae348.
 * - Nombre, dirección, teléfono, categoría, valoración, horario y reseñas: ficha
 *   pública de Google consultada el 1 de noviembre de 2026. La ficha no enlaza
 *   una web propia ni publica carta ni precios.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs). El cartel de la puerta que aparece en una
 *   de ellas confirma el horario de lunes a viernes, de 8:00 a 15:30.
 */

export const BUSINESS = {
	name: 'La Ermita',
	fullName: 'La Ermita',
	shortName: 'La Ermita',
	mark: 'LE',
	street: 'Camino de la Ermita, s/n',
	district: 'San Ginés',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30169',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-ermita',
	geo: { lat: 37.9584484, lng: -1.179648 },
	featureId: '0xd637f4ca51dabdb:0xd253c2d1f7aae348',
	placeId: 'ChIJ26sdpUx_Yw0RSOOq99HCU9I',
	plusCode: '8C9WXR5C+94',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '621 20 65 07',
	phoneHref: 'tel:+34621206507',
	tagline: 'Comida casera para llevar en San Ginés, Murcia',
	description:
		'La Ermita, en el Camino de la Ermita (30169 San Ginés, Murcia). Comida casera para llevar servida en bandejas: guisos, arroces, migas, berenjenas gratinadas y tortilla. De lunes a viernes, de 8:00 a 15:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Ermita/@37.9584484,-1.179648,17z/data=!3m1!4b1!4m6!3m5!1s0xd637f4ca51dabdb:0xd253c2d1f7aae348!8m2!3d37.9584484!4d-1.179648!16s%2Fg%2F11fd71t_zv?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9584484%2C-1.179648',
	embed: 'https://maps.google.com/maps?q=37.9584484,-1.179648&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9584484,-1.179648',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 105,
	label: '4,5',
};

/** Horario que publica la ficha y confirma el cartel de la puerta. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–15:30' },
	{ dia: 'Martes', horas: '8:00–15:30' },
	{ dia: 'Miércoles', horas: '8:00–15:30' },
	{ dia: 'Jueves', horas: '8:00–15:30' },
	{ dia: 'Viernes', horas: '8:00–15:30' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Solo abre de lunes a viernes: sábado y domingo cierra. Si vas a última hora, llama antes por si se han acabado las bandejas.';

/** Lo que la ficha, las reseñas y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Guisos de cuchara',
	'Arroces',
	'Croquetas de cocido',
	'Comida por bandejas',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera y variada',
		text: 'Una reseña lo dice con detalle: «comida casera sabrosa, variada, higiene excepcional, trato inmejorable». Es la cocina de cada día, cambiando el guiso según lo que haya ese día en las bandejas.',
	},
	{
		title: 'Raciones generosas y buen precio',
		text: 'Otra reseña lo remata: «todo buenísimo, raciones generosas, todo muy limpio y muy económico». Es el perfil clásico de la casa de comidas de barrio: se come bien y no sale caro.',
	},
	{
		title: 'Arroces y croquetas de cocido',
		text: '«Los arroces riquísimos y las croquetas de cocido», dice una de las opiniones. Las croquetas de cocido son el aperitivo de la casa, y los arroces se sirven en la misma bandeja que los guisos.',
	},
	{
		title: '4,5 sobre 5 con 105 reseñas',
		text: 'Con 105 opiniones, la ficha de Google le da 4,5 sobre 5 (noviembre de 2026). Las reseñas insisten en la limpieza, en el trato y en la relación calidad-precio.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{ texto: 'Todo buenísimo, raciones generosas, todo muy limpio y muy económico.' },
	{ texto: 'Los arroces riquísimos y las croquetas de cocido.' },
	{ texto: 'Comida casera sabrosa, variada, higiene excepcional, trato inmejorable.' },
];

/**
 * Lo que se reconoce en las fotos del perfil y lo que citan las reseñas. La
 * ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'De cuchara',
		items: [
			{ name: 'Arroces', note: '«riquísimos», según una reseña' },
			{ name: 'Croquetas de cocido', note: 'el aperitivo que destaca otra reseña' },
			{ name: 'Potaje de garbanzos con acelgas', note: 'en cazuela grande, como en las fotos' },
			{ name: 'Guiso de patatas', note: 'con su salsa de tomate y pimiento' },
			{ name: 'Menestra de verduras con huevo', note: 'judía verde, guisante y huevo picado' },
		],
	},
	{
		title: 'Del horno y la plancha',
		items: [
			{ name: 'Migas', note: 'en cazuela de barro, con tropezones de carne' },
			{ name: 'Berenjenas gratinadas', note: 'cubiertas de queso fundido' },
			{ name: 'Tortilla de patatas', note: 'en la bandeja del mostrador, a porciones' },
		],
	},
	{
		title: 'En el mostrador',
		items: [
			{ name: 'Bandejas del día', note: 'el buffet donde se sirve todo para llevar' },
			{ name: 'Tápers y tapa sellada', note: 'el cartel del local recuerda cerrarla con seguridad' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Ermita?',
		a: 'En el Camino de la Ermita, s/n, 30169 San Ginés (Murcia). La ficha de Google sitúa el local en las coordenadas 37.9584484, -1.179648, junto al Carril Saavedra que aparece en una de las fotos. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 8:00 a 15:30. Sábado y domingo está cerrado. El horario lo publica la ficha de Google y lo confirma el cartel pegado en la puerta del local, que también aparece en las fotos del perfil. El 1 de noviembre Google avisaba de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar, servida en bandejas: arroces, croquetas de cocido, potaje de garbanzos con acelgas, guiso de patatas, menestra de verduras con huevo, migas, berenjenas gratinadas y tortilla de patatas. Las reseñas lo resumen como comida casera, variada y con raciones generosas. No hay carta con todos los platos ni precios publicados.',
	},
	{
		q: '¿Cómo funciona el local?',
		a: 'Es un local de comida para llevar con un mostrador corrido de bandejas: se elige lo que hay ese día y se sirve en táper. En las fotos se ven los contenedores con las tapas apiladas y un cartel que recuerda cerrar la tapa con seguridad para que no se derrame por el camino.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Google la clasifica solo como restaurante de comida para llevar, sin bar ni comedor. Las fotos del interior enseñan el mostrador, una estantería con cajas de madera y un carro de pan, no mesas para sentarse. Cuenta con recoger el pedido.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no lo anuncia ni enlaza plataformas de entrega, así que no se puede afirmar. El pedido se recoge en el Camino de la Ermita. Si necesitas reparto, pregúntalo al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las fotos publican precios. Las reseñas lo describen como «muy económico» y con raciones generosas, pero el importe del táper o de la bandeja solo se sabe preguntando por teléfono.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento. Esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono, en el 621 20 65 07, o en el propio mostrador.',
	},
];
