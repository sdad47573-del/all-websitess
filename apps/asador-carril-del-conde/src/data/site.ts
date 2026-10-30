/**
 * Datos de Asador Carril del Conde — Ctra. Carril del Conde, Local 2,
 * Calle Antillas (29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador carril del conde»,
 *   36.6954379,-4.4534835, feature 0xd72f999425603b7:0x5a75c705d5a4fa65.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. El surtido que se cita es el que nombran la
 * descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Asador Carril del Conde',
	fullName: 'Asador carril del conde',
	shortName: 'Carril del Conde',
	mark: 'CC',
	street: 'Ctra. Carril del Conde, Local 2',
	district: 'Calle Antillas',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://asador-carril-del-conde.vercel.app',
	geo: { lat: 36.6954379, lng: -4.4534835 },
	featureId: '0xd72f999425603b7:0x5a75c705d5a4fa65',
	placeId: 'ChIJtwNWQpn5cg0RZfqk1QXHdVo',
	plusCode: '8C8QMGWW+5J',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '656 19 38 44',
	phoneHref: 'tel:+34656193844',
	tagline: 'Comida casera hecha al día, para llevar',
	description:
		'Asador Carril del Conde, en la Ctra. Carril del Conde, Local 2 (Calle Antillas, 29004 Málaga). Comida para llevar casera, con productos naturales y hecha al día, todos los días de 12:30 a 16:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+carril+del+conde/@36.6954379,-4.4534835,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f999425603b7:0x5a75c705d5a4fa65!8m2!3d36.6954379!4d-4.4534835!16s%2Fg%2F11hzv44ltr?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6954379%2C-4.4534835',
	embed: 'https://maps.google.com/maps?q=36.6954379,-4.4534835&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6954379,-4.4534835',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 37,
	label: '4,7',
};

/** Horario que publica la ficha: todos los días al mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:30' },
	{ dia: 'Martes', horas: '12:30–16:30' },
	{ dia: 'Miércoles', horas: '12:30–16:30' },
	{ dia: 'Jueves', horas: '12:30–16:30' },
	{ dia: 'Viernes', horas: '12:30–16:30' },
	{ dia: 'Sábado', horas: '12:30–16:30' },
	{ dia: 'Domingo', horas: '12:30–16:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Hecha al día',
	'Productos naturales',
	'Para llevar',
	'Pollo asado',
	'Cocina árabe',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Hecha al día',
		text: 'La descripción del negocio en Google lo dice sin rodeos: «Comida para llevar casera con productos naturales y hecha al día». Es la promesa que publica la propia casa.',
	},
	{
		title: 'Productos naturales',
		text: 'La ficha insiste en la materia prima: comida casera «con productos naturales». No publica la carta, así que el detalle del día se pregunta por teléfono.',
	},
	{
		title: 'El pollo asado',
		text: 'El nombre del local es «Asador» y una de las reseñas lo confirma: «No les quedaba pollo asado pero volveremos sin duda». El pollo forma parte de la casa aunque no siempre quede.',
	},
	{
		title: 'Sabor árabe',
		text: 'Una reseña lo describe así: «Excelente comida, con sabor árabe, y muy variada». La ficha no detalla qué platos son, pero la cocina de la casa tiene esa huella.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'lo nombra una de las reseñas de la ficha; el local se presenta como asador',
			},
			{
				name: 'Para llevar',
				note: 'Google lo clasifica como restaurante de comida para llevar',
			},
		],
	},
	{
		title: 'Comida casera',
		items: [
			{
				name: 'Platos del día',
				note: '«hecha al día», dice la descripción del negocio; la ficha no publica la lista de platos',
			},
			{
				name: 'Cocina con sabor árabe',
				note: '«Excelente comida, con sabor árabe, y muy variada», según una de las reseñas',
			},
			{
				name: 'Productos naturales',
				note: 'la materia prima que destaca la descripción de la ficha',
			},
		],
	},
	{
		title: 'Lo que se ve en la vitrina',
		items: [
			{
				name: 'Pastelas de pollo',
				note: 'triángulos y pasteles redondos de pasta fina rellenos, con azúcar glass, canela y almendras, en las fotos del local',
			},
			{
				name: 'Pollo frito',
				note: 'las bandejas de pollo rebozado que aparecen en la galería, junto a las pastelas',
			},
			{
				name: 'Calabacines rellenos',
				note: 'en salsa, en una de las bandejas de la galería',
			},
			{
				name: 'Arroz y guisos de pollo',
				note: 'arroz con verduras en tarrinas y pollo guisado con cilantro y cebolla en las fotos del perfil',
			},
			{
				name: 'Pasta gratinada',
				note: 'bandejas al horno con queso gratinado en la galería; la ficha no publica precios',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'No les quedaba pollo asado pero volveremos sin duda.',
		valor: 5,
	},
	{
		texto: 'Buenos precios y un trato exquisito.',
		valor: 5,
	},
	{
		texto: 'Excelente comida ,con sabor árabe ,y muy variada',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Carril del Conde?',
		a: 'En la Ctra. Carril del Conde, Local 2, junto a la calle Antillas (29004 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica todos los días de 12:30 a 16:30, de lunes a domingo. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La descripción del negocio habla de «comida para llevar casera con productos naturales y hecha al día». Las reseñas nombran el pollo asado y una cocina «con sabor árabe, y muy variada». La ficha no publica la carta completa.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar. La ficha no detalla servicio de mesa ni terraza; conviene preguntar por teléfono antes de ir a sentarse.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 656 19 38 44. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca los «buenos precios». La comida del día se consulta por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 37 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la comida, la variedad, los precios y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
