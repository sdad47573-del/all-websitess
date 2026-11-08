/**
 * Datos de Los fogones de Victoria — C. Juan Muñoz Herrera, 42
 * (Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Los fogones de victoria,
 *   36.6901631,-4.4530047, feature 0xd72f9514ca2bde5:0xe070dc69bce3c616.
 * - Nombre, dirección, categoría, valoración, horario, teléfono, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos ni un número de contacto.
 */

export const BUSINESS = {
	name: 'Los fogones de Victoria',
	shortName: 'Victoria',
	mark: 'LV',
	street: 'C. Juan Muñoz Herrera, 42',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/los-fogones-de-victoria',
	geo: { lat: 36.6901631, lng: -4.4530047 },
	featureId: '0xd72f9514ca2bde5:0xe070dc69bce3c616',
	placeId: 'ChIJ5b2iTFH5cg0RFsbjvGnccOA',
	plusCode: '8C8QMGRW+3Q',
	googleCategory: 'Comida a domicilio',
	phone: '744 25 67 35',
	phoneHref: 'tel:+34744256735',
	tagline: 'Comida casera para llevar, a domicilio y para eventos',
	description:
		'Los fogones de Victoria, comida casera para llevar y a domicilio en C. Juan Muñoz Herrera, 42 (Carretera de Cádiz, 29004 Málaga). Cuchareo, pasta, ensaladas, pescaito, bocadillos y comidas morunas.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Los+fogones+de+victoria/@36.6901631,-4.4530047,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9514ca2bde5:0xe070dc69bce3c616!8m2!3d36.6901631!4d-4.4530047!16s%2Fg%2F11zwnp_pw4?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=16029542296557747552',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6901631%2C-4.4530047',
	embed: 'https://maps.google.com/maps?q=36.6901631,-4.4530047&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6901631,-4.4530047',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 18,
	label: '5,0',
};

/** Horario que publica la ficha: mañana y mediodía, con el miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'A domicilio',
	'Comidas morunas',
	'Salsas caseras',
	'Eventos y menús a medida',
];

export const HIGHLIGHTS = [
	{
		title: 'Cuchareo y algo más',
		text: 'La descripción de la ficha lo dice tal cual: cuchareo y no cuchareo, pasta, ensaladas, pescaito y bocadillo de calamares, con salsas caseras.',
	},
	{
		title: 'Para llevar o a domicilio',
		text: 'Google la clasifica como comida a domicilio y el negocio se presenta como comida casera «para llevar». El pedido se cierra por teléfono.',
	},
	{
		title: 'Eventos a tu medida',
		text: 'También preparan comidas para celebraciones: «menús personalizados, adaptamos el presupuesto», según su propia descripción.',
	},
];

/**
 * Platos que nombran la descripción del negocio y las reseñas. La ficha no
 * publica carta ni precios, así que aquí no se inventa ningún valor.
 */
export const MENU = [
	{
		title: 'De cuchara',
		items: [
			{
				name: 'Tallarines al pil pil',
				note: '«delicioso», según una de las reseñas publicadas en la ficha',
			},
			{
				name: 'Paella mixta',
				note: 'la otra receta que destaca una opinión: «le ha encantado a mi hijo»',
			},
			{
				name: 'Guisos de cuchareo',
				note: 'la cocina de cuchara que anuncia la descripción del negocio',
			},
		],
	},
	{
		title: 'Del horno y la sartén',
		items: [
			{
				name: 'Pollo asado con patatas',
				note: 'la bandeja de cuartos de pollo dorados con patatas panadera de las fotos del local',
			},
			{
				name: 'Tortilla de patatas',
				note: 'cuajada en sartén y servida en tabla, como se ve en la galería',
			},
			{
				name: 'Carne en salsa con patatas',
				note: 'tarrina con la carne guisada, patatas y pimiento verde frito',
			},
		],
	},
	{
		title: 'De la cocina',
		items: [
			{
				name: 'Pasta',
				note: 'uno de los bloques que cita la descripción de la ficha',
			},
			{
				name: 'Ensaladas',
				note: 'para completar el pedido, también según la descripción',
			},
			{
				name: 'Pescaito',
				note: 'frito de pescado, en el estilo de la casa',
			},
			{
				name: 'Bocadillo de calamares',
				note: 'el bocadillo que nombra la descripción del negocio',
			},
		],
	},
	{
		title: 'Comidas morunas',
		items: [
			{
				name: 'Comidas morunas',
				note: 'la cocina árabe que anuncia la descripción: se consulta qué hay cada día',
			},
			{
				name: 'Salsas caseras',
				note: 'hechas en la casa, según la propia descripción de la ficha',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Los tallarines al pil pil delicioso y la paella mixta le ha encantado a mi hijo.',
		valor: 5,
	},
	{
		texto: 'Inmejorable, todo casero, buena atención. Recomendable para comida casera.',
		valor: 5,
	},
	{ texto: 'Todo buenísimo y muy bien de precio.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Los fogones de Victoria?',
		a: 'En la calle Juan Muñoz Herrera, 42, en la zona de Carretera de Cádiz (29004 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 9:00 a 16:00 de lunes a martes y de jueves a domingo. El miércoles permanece cerrado. La propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera: cuchareo y platos que no son de cuchara, pasta, ensaladas, pescaito, bocadillo de calamares, comidas morunas y salsas caseras. Las reseñas citan los tallarines al pil pil y la paella mixta. La ficha no publica una carta cerrada.',
	},
	{
		q: '¿Es comida para llevar?',
		a: 'Sí. El negocio se presenta en Google como comida casera «para llevar» y la categoría de la ficha es comida a domicilio. Para encargar hay que llamar al 744 25 67 35.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'Google la clasifica como comida a domicilio y la descripción habla de comida «para llevar». La ficha no detalla zonas ni horarios de reparto, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Preparan comida para eventos?',
		a: 'Sí. Su descripción explica que hacen eventos adaptados al cliente, con menús personalizados y presupuesto a medida. Se habla por teléfono con el 744 25 67 35.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni precios. Las reseñas hablan de «muy bien de precio», pero esta página no inventa valores.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas, aparcamiento adaptado y asientos adaptados. Indica que no hay aseo adaptado ni bucle magnético.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública de Google no publica página web ni perfiles sociales, así que esta web solo enlaza el teléfono y la propia ficha.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5,0 sobre 5 con 18 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones publicadas dan cinco estrellas y destacan lo casero, el trato y el precio.',
	},
];
