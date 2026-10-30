/**
 * Datos de Pollos Pineda — C. Lope de Rueda, 92, Puerto de la Torre (29190 Málaga).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * Lo que la ficha no publica: página web, redes sociales, carta ni precios. La web
 * no inventa esos datos: el surtido citado es el que nombran la descripción del
 * negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Pollos Pineda',
	shortName: 'Pineda',
	mark: 'PP',
	street: 'C. Lope de Rueda, 92',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	siteUrl: 'https://pollos-pineda.vercel.app',
	geo: { lat: 36.7374079, lng: -4.4799283 },
	featureId: '0xd72f72b332c1339:0x9adfcbbf8bcef896',
	placeId: 'ChIJORMsMyv3cg0RlvjOi7_L35o',
	googleCategory: 'Restaurante',
	phone: '951 08 02 62',
	phoneHref: 'tel:+34951080262',
	tagline: 'Pollos asados y comida casera en Puerto de la Torre',
	description:
		'Pollos Pineda, asador de pollos en C. Lope de Rueda, 92, Puerto de la Torre (29190 Málaga). Pollos asados halal, raciones de comida casera y encargos para celebraciones. Consulta el encargo por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pollos+Pineda/@36.7374079,-4.4799283,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f72b332c1339:0x9adfcbbf8bcef896!8m2!3d36.7374079!4d-4.4799283!16s%2Fg%2F11b7jxxg0f',
	cid: 'https://www.google.com/maps?cid=104861666622805960558',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7374079%2C-4.4799283',
	embed: 'https://maps.google.com/maps?q=36.7374079,-4.4799283&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7374079,-4.4799283',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.5, count: 372, label: '4,5' };

/** Horario publicado: cierra los lunes y el resto, mediodía. */
export const HORARIO = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes a domingo', value: '9:30 – 16:00' },
];
export const HORARIO_AVISO =
	'La ficha de Google cierra los lunes y abre de martes a domingo de 9:30 a 16:00, mientras que el rótulo de la fachada anuncia apertura todos los días. En festivos el horario puede variar: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Pollos asados halal',
	'Comida casera',
	'Raciones',
	'Para llevar',
	'Encargos para eventos',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El asador',
		text: 'El negocio se presenta en Google como «Asador de Pollos Pineda, los mejores pollos asados de el Puerto de la Torre», y ofrece pollos asados halal.',
	},
	{
		title: 'Raciones caseras',
		text: 'La ficha habla de raciones de comidas caseras hechas con ingredientes de primera calidad. Las reseñas citan ensaladilla rusa, pimientos y albóndigas en salsa de almendras.',
	},
	{
		title: 'Encargos y eventos',
		text: 'Preparan comidas para comuniones, bautizos y celebraciones. Se puede reservar el pedido por teléfono para asegurarse de tenerlo.',
	},
];

/** Familias de producto que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado halal',
				note: 'la especialidad que anuncia la descripción del negocio en Google',
			},
			{
				name: 'Pollo para llevar',
				note: 'se prepara para recoger en el local; la ficha permite reservar el pedido',
			},
		],
	},
	{
		title: 'Raciones caseras',
		items: [
			{
				name: 'Ensaladilla rusa y pimientos',
				note: 'citadas en una reseña de cinco estrellas junto al pollo',
			},
			{
				name: 'Albóndigas en salsa de almendras',
				note: 'plato casero que aparece en las opiniones de la ficha',
			},
			{
				name: 'Menús caseros variados',
				note: '«buen lugar para comprar menús caseros variados y a buen precio», según una reseña',
			},
		],
	},
	{
		title: 'Celebraciones',
		items: [
			{
				name: 'Comuniones y bautizos',
				note: 'la ficha menciona la preparación de comidas para eventos y celebraciones',
			},
			{
				name: 'Encargo por teléfono',
				note: 'el negocio invita a reservar el pedido para no quedarse sin él',
			},
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Buenísimo los pollos y raciones de ensaladilla rusa, pimientos, etc.»',
		valor: 5,
	},
	{
		texto: '«Buen lugar para comprar menús caseros variados y a buen precio.»',
		valor: 4,
	},
	{
		texto: '«Albóndigas en salsa de almendras con sabor a harina y poco hechas.»',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pollos Pineda?',
		a: 'En C. Lope de Rueda, 92, en Puerto de la Torre (29190 Málaga). Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 951 08 02 62. Sirve tanto para consultar el surtido del día como para reservar un encargo.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca cierre los lunes y apertura de martes a domingo de 9:30 a 16:00. El rótulo de la fachada, en cambio, anuncia apertura todos los días, así que lo mejor es llamar al 951 08 02 62 antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿El pollo es halal?',
		a: 'Sí. La descripción del negocio en Google habla expresamente de pollos asados halal.',
	},
	{
		q: '¿Se puede encargar para una celebración?',
		a: 'La ficha indica que preparan comidas para comuniones, bautizos y celebraciones. El encargo se reserva por teléfono; no hay pedidos en línea en esta página.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante y el negocio habla de comida para llevar y de recoger el pedido. La ficha no detalla servicio de mesa ni terraza.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas, aparcamiento adaptado y aseo adaptado. En cambio, indica que no hay asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Al consultar la ficha en octubre de 2026 mostraba 4,5 sobre 5 con 372 reseñas. Hay opiniones muy buenas del pollo y de las raciones, y también alguna crítica con un plato concreto.',
	},
];
