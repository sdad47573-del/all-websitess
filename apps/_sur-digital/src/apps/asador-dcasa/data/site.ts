/**
 * Datos de Asador D'casa Comida Casera Para Llevar — C. Polibea, 8, Ciudad
 * Lineal, 28027 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador D'casa Comida Casera Para Llevar»,
 *   40.4410866,-3.6440484, feature 0xd422f3dc5a51cdd:0xfa04c69fce03be41,
 *   place id ChIJ3RylxT0vQg0RQb4Dzp_GBPo.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, atributos de
 *   accesibilidad, descripción del local y reseñas: ficha pública consultada en
 *   octubre de 2026.
 * - La carta y los precios salen de la pizarra «Nuestra Carta» que aparece en
 *   las fotos de la propia ficha. Los precios del pollo no se leen con claridad,
 *   así que no se publican.
 * - El cartel de la pared confirma el teléfono de reservas y el cierre de
 *   lunes, domingos y festivos; su horario del sábado (11:00–15:00) no coincide
 *   con el de la ficha (11:30–15:30) y la web lo advierte.
 */

export const BUSINESS = {
	name: "Asador D'casa",
	fullName: "Asador D'casa Comida Casera Para Llevar",
	shortName: "D'casa",
	mark: "d'casa",
	street: 'C. Polibea, 8',
	district: 'Ciudad Lineal',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28027',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-dcasa',
	geo: { lat: 40.4410866, lng: -3.6440484 },
	featureId: '0xd422f3dc5a51cdd:0xfa04c69fce03be41',
	placeId: 'ChIJ3RylxT0vQg0RQb4Dzp_GBPo',
	category: 'Asador y comida casera para llevar',
	phone: '911 55 71 73',
	phoneHref: 'tel:+34911557173',
	tagline: 'Pollo asado y comida casera para llevar en Ciudad Lineal',
	description:
		"Asador D'casa, en C. Polibea, 8 (Ciudad Lineal, 28027 Madrid). Pollo asado, menús caseros y raciones para llevar, con el sabor de casa. 4,9 sobre 5 con 290 reseñas en Google. Martes a viernes de 12:00 a 16:00 y sábados hasta las 15:30.",
};

export const MAPS = {
	place:
		"https://www.google.com/maps/place/Asador+D'casa+Comida+Casera+Para+Llevar/@40.4410866,-3.6440484,17z/data=!3m1!4b1!4m6!3m5!1s0xd422f3dc5a51cdd:0xfa04c69fce03be41!8m2!3d40.4410866!4d-3.6440484!16s%2Fg%2F11c1rf5zn5?authuser=0&hl=es&entry=ttu",
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4410866%2C-3.6440484',
	embed: 'https://maps.google.com/maps?q=40.4410866,-3.6440484&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4410866,-3.6440484',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 290,
	label: '4,9',
};

/**
 * Horario publicado en la ficha: martes a viernes de 12:00 a 16:00 y sábados
 * de 11:30 a 15:30. Domingo y lunes cierra.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '12:00–16:00', closed: false },
	{ dia: 'Miércoles', horas: '12:00–16:00', closed: false },
	{ dia: 'Jueves', horas: '12:00–16:00', closed: false },
	{ dia: 'Viernes', horas: '12:00–16:00', closed: false },
	{ dia: 'Sábado', horas: '11:30–15:30', closed: false },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

export const HORARIO_AVISO =
	'El cartel de la pared marca los sábados de 11:00 a 15:00 y cierra «lunes, domingos y festivos por descanso»; la ficha publica 11:30–15:30 y avisa de que el Día de Todos los Santos el horario podría cambiar. Llama al 911 55 71 73 antes de bajar.';

export const HIGHLIGHTS = [
	{
		title: 'El pollo sale de la vitrina',
		text: 'La foto del mostrador enseña las bandejas de pollos enteros y brochetas recién asados. La pizarra vende el pollo entero, medio y en versión BBQ, con o sin patatas.',
	},
	{
		title: 'Menú del día, raciones de casa',
		text: 'Una reseña lo resume: «Menú variado entre semana; raciones generosas; precio ajustado». Otra añade que el pollo está «riquísimo» y los menús, «variados y muy ricos».',
	},
	{
		title: 'Todo para llevar',
		text: 'Google lo clasifica como restaurante de comida para llevar y el local lo dice en el nombre. Las fotos muestran el pedido en tarrinas y cajas, listo para cerrar y andar.',
	},
];

/** Grupos de la pizarra «Nuestra Carta». */
export type Plato = { name: string; price?: string; note?: string };
export type Grupo = { title: string; note?: string; items: Plato[] };

export const CARTA: Grupo[] = [
	{
		title: 'Del asador',
		note: 'La pizarra marca pollo entero, medio pollo y BBQ, con o sin patatas. Los precios no se leen con claridad en la foto, así que no se publican: se confirman por teléfono.',
		items: [
			{ name: 'Pollo asado entero', note: 'También con patatas fritas caseras' },
			{ name: 'Medio pollo asado' },
			{ name: 'Pollo BBQ', note: 'Entero o medio' },
			{ name: 'Brochetas de pollo', note: 'En la vitrina, junto a los pollos' },
		],
	},
	{
		title: 'Raciones y entrantes',
		note: 'Precios de la pizarra fotografiada.',
		items: [
			{ name: 'Croquetas caseras', price: '4,50 €', note: '6 unidades · 8,50 € las 12' },
			{ name: 'Patatas fritas caseras', price: '3,50 €' },
			{ name: 'Patatas D’casa al horno', price: '4,00 €', note: 'solo los sábados' },
			{ name: 'Pimientos asados', price: '5,00 €' },
			{ name: 'Ensalada D’casa', price: '4,50 €' },
			{ name: 'Ensaladilla casera', price: '5,00 €' },
			{ name: 'Mejillones tigre', price: '5,00 €' },
			{ name: 'Huevos rotos', price: '5,50 €' },
		],
	},
];

export const NOTA_CARTA =
	'Precios de la pizarra del local fotografiada en octubre de 2026. Pueden cambiar y no incluyen todo lo que se cuece cada día: para el menú del día y el precio del pollo, llama al 911 55 71 73.';

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Menú variado entre semana; raciones generosas; precio ajustado.',
		valor: 5,
	},
	{
		texto: 'El pollo riquísimo y los menús del día variados y muy ricos.',
		valor: 5,
	},
	{
		texto: 'Pedí pollo asado, patatas fritas y croquetas (de las mejores que he probado).',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: "¿Dónde está Asador D'casa?",
		a: 'En la calle Polibea, 8, en Ciudad Lineal (28027 Madrid). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Martes a viernes, de 12:00 a 16:00; sábados, de 11:30 a 15:30. Cierra domingos y lunes. El cartel de la pared añade los festivos y marca el sábado de 11:00 a 15:00, así que conviene llamar antes: 911 55 71 73.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado (entero, medio o BBQ), brochetas, croquetas caseras, patatas fritas, patatas al horno de los sábados, pimientos asados, ensalada, ensaladilla, mejillones tigre y huevos rotos. La pizarra cambia con el día y el menú del día no está publicado.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'En la pizarra fotografiada, las raciones van de 3,50 € (patatas fritas) a 5,50 € (huevos rotos), y las croquetas cuestan 4,50 € media docena o 8,50 € la docena. Los precios del pollo no se leen con claridad y esta web no los inventa: se preguntan al pedir.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'La ficha lo clasifica como restaurante de comida para llevar y las fotos muestran mesas altas y una barra pequeña, pero el negocio se presenta como asador con comida para llevar. Si quieres sentarte, confírmalo por teléfono.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no enlaza ninguna plataforma de reparto ni publica condiciones de envío. Lo que sí está claro es la comida para llevar: se pide por teléfono y se recoge en C. Polibea, 8.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'El cartel de la pared incluye un «Teléfono Reservas», el 911 55 71 73. La ficha no ofrece reservas online, así que la vía es llamar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca que no hay acceso para sillas de ruedas, ni asientos adaptados, ni aparcamiento accesible. Es un dato que conviene tener en cuenta antes de ir.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'La ficha no indica aparcamiento propio y marca que no hay aparcamiento adaptado. Es una calle de Ciudad Lineal, así que hay que buscar sitio en la zona.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,9 sobre 5 con 290 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres reseñas publicadas son de cinco estrellas y hablan del pollo, las croquetas y la relación calidad-precio.',
	},
];
