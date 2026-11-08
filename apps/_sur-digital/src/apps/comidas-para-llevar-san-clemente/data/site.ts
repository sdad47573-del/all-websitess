/**
 * Datos de Comidas para Llevar san clemente — C. Galicia, bajo 2,
 * 30800 Lorca (Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Comidas para Llevar san clemente»,
 *   37.6821543,-1.6857895, feature 0xd64e7bfa83ec54b:0x62c7737634990b82.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, datos de
 *   accesibilidad, descripción del negocio y reseñas: ficha pública de Google
 *   consultada en noviembre de 2026.
 *
 * Descripción del propio negocio (texto de Google): guisos calientes
 * tradicionales, pescados, carnes, verduras, ensaladas, bollería por la mañana,
 * pan durante todo el día y migas los días lluviosos. El local también se
 * presenta como «Comidas para Llevar y Asador Clemente».
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta con precios, no publica reparto a domicilio ni formas de pago y
 * solo declara acceso adaptado. Los platos salen de la descripción del negocio
 * y de las reseñas; no hay importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'Comidas para Llevar san clemente',
	fullName: 'Comidas para Llevar san clemente',
	shortName: 'San Clemente',
	mark: 'SC',
	street: 'C. Galicia, bajo 2',
	district: 'Lorca',
	city: 'Lorca',
	region: 'Región de Murcia',
	postalCode: '30800',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/comidas-para-llevar-san-clemente',
	geo: { lat: 37.6821543, lng: -1.6857895 },
	featureId: '0xd64e7bfa83ec54b:0x62c7737634990b82',
	placeId: 'ChIJS8U-qL_nZA0RgguZNHZzx2I',
	plusCode: '8C9WM8J7+VM',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '623 22 80 65',
	phoneHref: 'tel:+34623228065',
	tagline: 'Guisos caseros y asador para llevar en Lorca',
	description:
		'Comidas para Llevar San Clemente, en C. Galicia, bajo 2 (30800 Lorca). Guisos caseros, pescados, carnes, ensaladas y bollería para llevar, de 11:00 a 15:15.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Comidas+para+Llevar+san+clemente/@37.6821543,-1.6857895,17z/data=!3m1!4b1!4m6!3m5!1s0xd64e7bfa83ec54b:0x62c7737634990b82!8m2!3d37.6821543!4d-1.6857895!16s%2Fg%2F11rzc0055j?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.6821543%2C-1.6857895',
	embed: 'https://maps.google.com/maps?q=37.6821543,-1.6857895&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.6821543,-1.6857895',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.6,
	count: 34,
	label: '4,6',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–15:15' },
	{ dia: 'Martes', horas: '11:00–15:15' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '11:00–15:15' },
	{ dia: 'Viernes', horas: '11:00–15:15' },
	{ dia: 'Sábado', horas: '11:00–15:15' },
	{ dia: 'Domingo', horas: '11:00–15:15' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, su descripción y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Guisos caseros',
	'Asador',
	'Pescados y carnes',
	'Verduras y ensaladas',
	'Bollería por la mañana',
	'Pan todo el día',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Guisos calientes',
		text: 'El negocio lo cuenta en su propia ficha: «¿Le gustaría comer guisos calientes sin tener que manchar la cocina?». La cocina es tradicional y para llevar, sin mesa de por medio.',
	},
	{
		title: 'Mucha variedad',
		text: 'La ficha anuncia guisos, pescados, carnes, verduras y ensaladas, además de bollería por la mañana y pan durante todo el día. Una reseña lo resume en cinco palabras: «Buena comida y mucha variedad».',
	},
	{
		title: 'Migas los días lluviosos',
		text: 'El local avisa en su ficha: «¡MIGAS LOS DÍAS LLUVIOSOS!». Es el plato que anuncian con más ganas, y solo aparece cuando toca.',
	},
	{
		title: 'También asador',
		text: 'El nombre completo con el que se presenta es «Comidas para Llevar y Asador Clemente», así que junto a los guisos hay asado, aunque la ficha no detalle qué se asa ni los precios.',
	},
];

/** Platos de la descripción del negocio y de las reseñas, sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador y el horno',
		items: [
			{ name: 'Carne asada al horno', note: 'pieza entera en su jugo, en las fotos del perfil' },
			{ name: 'Codillo asado con patatas', note: 'bandeja del perfil, con patatas panadera' },
			{ name: 'Asado de la casa', note: 'el local se presenta como «Comidas para Llevar y Asador Clemente»' },
		],
	},
	{
		title: 'De la cazuela',
		items: [
			{ name: 'Paella de marisco', note: 'con gambas, mejillones y calamar, en las fotos del perfil' },
			{ name: 'Cuscús con carne y pimientos', note: 'en la cazuela, en las fotos del perfil' },
			{ name: 'Guiso de ternera en salsa', note: 'bandeja del mostrador' },
			{ name: 'Patatas rellenas gratinadas', note: 'con carne y queso, en el mostrador' },
			{ name: 'Lasaña y canelones', note: 'bandejas individuales gratinadas' },
			{ name: 'Migas', note: '«los días lluviosos», anuncia el propio local' },
			{ name: 'Pescados, carnes, verduras y ensaladas', note: 'en la descripción del negocio' },
		],
	},
	{
		title: 'Para la mañana y el día',
		items: [
			{ name: 'Bollería', note: 'por las mañanas, según la ficha' },
			{ name: 'Pan', note: 'durante todo el día, según la ficha' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{
				name: 'Por teléfono',
				note: `llama al ${BUSINESS.phone} para preguntar qué hay y encargar`,
			},
			{
				name: 'Recogida en el local',
				note: 'en C. Galicia, bajo 2, Lorca, de 11:00 a 15:15',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Buena comida y mucha variedad.',
		valor: 5,
	},
	{
		texto: 'Comida riquisima, trato excelente.',
		valor: 5,
	},
	{
		texto: 'He pedido una merluza, un poco seca, poca cantidad de pescado y patatas 5€.',
		valor: 3,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comidas para Llevar San Clemente?',
		a: 'En la calle Galicia, bajo 2, en Lorca (30800 Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 11:00 a 15:15, de lunes a martes y de jueves a domingo. El miércoles figura cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica una carta con precios, pero el negocio describe su oferta: guisos calientes tradicionales, pescados, carnes, verduras, ensaladas, bollería por la mañana y pan durante todo el día, además de migas los días lluviosos. Para saber qué hay cada jornada, llama al 623 22 80 65.',
	},
	{
		q: '¿Cuándo hay migas?',
		a: 'El propio local las anuncia «los días lluviosos». No hay un día fijo publicado, así que lo mejor es preguntar por teléfono si vas buscándolas.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y la categoría de la ficha lo presentan como comida para llevar, y no consta servicio de mesa. La ficha sí declara acceso para sillas de ruedas. Si quieres sentarte, confírmalo al llamar.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 623 22 80 65, y se recoge en el local. La ficha no enlaza ninguna tienda online ni plataforma de reparto, así que esta página no tramita pedidos.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni las fotos del perfil publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es el teléfono y la dirección. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha declara acceso para sillas de ruedas y no publica más datos de accesibilidad, ni aseos ni aparcamiento adaptados. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 34 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian la comida, la variedad y el trato; otra, de tres estrellas, se queja de una merluza seca y de la cantidad.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio; solo aporta una descripción escrita por el propio local. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
