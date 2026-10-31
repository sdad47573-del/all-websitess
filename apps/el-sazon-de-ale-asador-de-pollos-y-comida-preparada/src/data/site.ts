/**
 * Datos de El Sazón de Ale: asador de pollos y comida preparada —
 * Calle de Zabaleta, 7 bis, local, 28002 Madrid (Chamartín).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «El Sazón de Ale: asador de pollos y comida
 *   preparada», 40.4415698,-3.6747232, feature
 *   0xd42295cac8e8be5:0xb95a9a50e69fdf6.
 * - Nombre, dirección, teléfono, descripción, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta ni precios.
 *
 * Google registra la dirección como «C. de Zabaleta, 7 bis, Loc»; aquí se usa
 * la forma desarrollada «Calle de Zabaleta, 7 bis, local».
 */

export const BUSINESS = {
	name: 'El Sazón de Ale',
	fullName: 'El Sazón de Ale: asador de pollos y comida preparada',
	shortName: 'El Sazón de Ale',
	mark: 'SA',
	street: 'Calle de Zabaleta, 7 bis, local',
	district: 'Chamartín',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28002',
	country: 'ES',
	siteUrl: 'https://el-sazon-de-ale-asador-de-pollos-y-comida-preparada.vercel.app',
	geo: { lat: 40.4415698, lng: -3.6747232 },
	featureId: '0xd42295cac8e8be5:0xb95a9a50e69fdf6',
	placeId: 'ChIJ5YuOrFwpQg0R9v1pDqWplQs',
	plusCode: '8CGRC8RG+J4',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '624 41 46 04',
	phoneHref: 'tel:+34624414604',
	tagline: 'Asador de pollos y comida casera para llevar en Chamartín',
	description:
		'El Sazón de Ale, en Calle de Zabaleta, 7 bis, local (28002 Madrid, Chamartín). Asador de pollos y comida casera con género fresco, solo para llevar. Abre todos los días de 9:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Saz%C3%B3n+de+Ale:+asador+de+pollos+y+comida+preparada/@40.4415698,-3.6747232,17z/data=!3m1!4b1!4m6!3m5!1s0xd42295cac8e8be5:0xb95a9a50e69fdf6!8m2!3d40.4415698!4d-3.6747232!16s%2Fg%2F11wts0wknt?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4415698%2C-3.6747232',
	embed: 'https://maps.google.com/maps?q=40.4415698,-3.6747232&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4415698,-3.6747232',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 22,
	label: '4,6',
};

/** Horario que publica la ficha: todos los días, de 9:00 a 16:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Asador de pollos',
	'Comida casera',
	'Solo para llevar',
	'Pollo asado',
	'Paella',
	'Platos preparados',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'El nombre de la ficha lo dice: «asador de pollos». Los pollos se hacen al asador y se venden para llevar, enteros o por piezas, según lo que quede en el mostrador.',
	},
	{
		title: 'Paella, arroces y fideuá',
		text: 'Una reseña destaca «la paella muy buena». En las fotos del perfil aparecen también fideos con marisco y una tarrina de arroz con langostinos, además de la pasta con bacon y las alitas del mostrador.',
	},
	{
		title: 'Todo para llevar',
		text: 'La descripción de la ficha es explícita: «solo para llevar». No hay servicio de mesa ni reservas: se pide en el local o por teléfono y se recoge.',
	},
	{
		title: '4,6 sobre 5',
		text: 'Con 22 reseñas, la ficha de Google le da 4,6 sobre 5 (octubre de 2026). Las opiniones repiten el trato amable y la atención al cliente.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Muy Rico todo, la paella muy buena, excelente atención al cliente!',
		valor: 5,
	},
	{
		texto: 'Deliciosa comida casera, súper amables!',
		valor: 5,
	},
	{
		texto: 'Muy amigable muy buen trato hacia los clientes',
		valor: 5,
	},
];

/**
 * Lo que anuncia la ficha. No hay carta ni precios publicados: solo el asador
 * de pollos y la comida casera preparada del día.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [{ name: 'Pollo asado', note: 'la especialidad de la casa, para llevar' }],
	},
	{
		title: 'Arroces y pescados',
		items: [
			{ name: 'Paella', note: 'mencionada en las reseñas del local' },
			{ name: 'Fideos con marisco', note: 'vistos en las fotos del mostrador' },
			{ name: 'Arroz con langostinos', note: 'servido en tarrina para llevar' },
			{ name: 'Chopitos encebollados', note: 'de la vitrina' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Tortilla de patatas', note: 'por ración' },
			{ name: 'Croquetas de jamón', note: 'hechas en el local' },
			{ name: 'Empanadillas', note: 'de la vitrina' },
			{ name: 'Callos con garbanzos', note: 'plato de cuchara' },
			{ name: 'Pasta con bacon', note: 'vista en las fotos del perfil' },
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{ name: 'Ensalada César', note: 'con pollo empanado y picatostes' },
			{ name: 'Ensalada de col y jamón', note: 'con maíz' },
			{ name: 'Ensalada de tomate y huevo', note: 'con pepino, cebolla y aceitunas' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Sazón de Ale?',
		a: 'En la Calle de Zabaleta, 7 bis, local, 28002 Madrid, en el distrito de Chamartín. Google registra la dirección como «C. de Zabaleta, 7 bis, Loc». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a domingo, de 9:00 a 16:00. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo resume en su nombre: asador de pollos y comida preparada. La descripción habla de comida casera con género fresco y de primera, y las reseñas mencionan la paella y el trato. No publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 624 41 46 04. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'No. La ficha lo dice expresamente: «solo para llevar». No anuncia servicio de mesa, terraza ni reservas, así que lo que hay es recogida del pedido.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de saber el precio del pollo o de los platos del día es preguntar por teléfono al hacer el pedido.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo publica que no hay aparcamiento adaptado para sillas de ruedas y no indica si la entrada es accesible. Conviene llamar antes si necesitas ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha no publica reparto a domicilio ni plataformas de entrega asociadas. Lo que consta es la recogida en el local y el teléfono de contacto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 22 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian la paella, la comida casera y el trato.',
	},
];
