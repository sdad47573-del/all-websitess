/**
 * Datos de Barbakun — Av. Fiter i Rossell, 38, AD700 Escaldes-Engordany
 * (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Barbakun», 42.5137845,1.5337382,
 *   feature 0x12a58ac4f55a020b:0xeed193d942a097f4.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,4 · 43 reseñas).
 * - Platos: fotos del perfil del local (pizza en caja, hamburguesa, fritos en
 *   bandeja, patatas asadas y patatas rellenas fritas), más la pizarra de la
 *   puerta, que anuncia parrilla al mediodía.
 *
 * La ficha no publica carta ni precios: no se copian importes.
 */

export const BUSINESS = {
	name: 'Barbakun',
	fullName: 'Barbakun',
	shortName: 'Barbakun',
	mark: 'BB',
	street: 'Av. Fiter i Rossell, 38',
	district: 'Escaldes-Engordany',
	city: 'Escaldes-Engordany',
	region: 'Escaldes-Engordany',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/barbakun',
	geo: { lat: 42.5137845, lng: 1.5337382 },
	featureId: '0x12a58ac4f55a020b:0xeed193d942a097f4',
	placeId: 'ChIJCwJa9cSKpRIR9JegQtmT0e4',
	plusCode: 'GG7M+GF Escaldes-Engordany',
	googleCategory: 'Comida a domicilio',
	phone: '+376 727 726',
	phoneHref: 'tel:+376727726',
	tagline: 'Pizzas, hamburguesas y parrilla en Escaldes-Engordany',
	description:
		'Barbakun, en la Av. Fiter i Rossell, 38 (AD700 Escaldes-Engordany). Pizzas al horno, hamburguesas, fritos y parrilla, con reparto a domicilio. 4,4 sobre 5 con 43 reseñas en Google. Abre de martes a domingo de 13:00 a 15:30 y de 19:30 a 23:00; lunes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Barbakun/@42.5137845,1.5337382,17z/data=!4m6!3m5!1s0x12a58ac4f55a020b:0xeed193d942a097f4!8m2!3d42.5137845!4d1.5337382!16s%2Fg%2F11b6_kbdj5?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5137845%2C1.5337382',
	embed: 'https://maps.google.com/maps?q=42.5137845,1.5337382&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5137845,1.5337382',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 43,
	label: '4,4',
};

/** Horario que publica la ficha: mediodía y noche, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '13:00–15:30 · 19:30–23:00' },
	{ dia: 'Miércoles', horas: '13:00–15:30 · 19:30–23:00' },
	{ dia: 'Jueves', horas: '13:00–15:30 · 19:30–23:00' },
	{ dia: 'Viernes', horas: '13:00–15:30 · 19:30–23:00' },
	{ dia: 'Sábado', horas: '13:00–15:30 · 19:30–23:00' },
	{ dia: 'Domingo', horas: '13:00–15:30 · 19:30–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El lunes cierra todo el día.';

export const SERVICIOS = [
	'Pizzas al horno',
	'Hamburguesas',
	'Parrilla',
	'Fritos',
	'Comida a domicilio',
	'Para llevar',
	'Abierto por la noche',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Pizzas al horno',
		text: 'La pizza sale en caja, redonda y con la masa fina: una de las fotos del perfil la enseña con jamón, carne picada, maíz y queso fundido. Se pide entera, para comer en el local o para llevar a casa.',
	},
	{
		title: 'Hamburguesas y bocadillos',
		text: 'La hamburguesa va en pan de sésamo, envuelta en papel de cuadros rojos y blancos, con la carne a la parrilla y los vegetales dentro. Se sirve con patatas y es la opción rápida del local.',
	},
	{
		title: 'Fritos y patatas',
		text: 'En el mostrador aparecen bandejas de empanadillas y croquetas recién fritas, patatas asadas en tandas y patatas rellenas pasadas por la freidora. Es la parte de picoteo, para compartir mientras llega la pizza.',
	},
	{
		title: 'Reparto a domicilio',
		text: 'Google lo clasifica como «Comida a domicilio», así que se puede pedir por teléfono y recibirlo en casa. El local está en la Avenida Fiter i Rossell, 38, con la pizarra del día en la puerta y el rótulo rojo de Barbakun.',
	},
];

/**
 * Lo que se ve en las fotos del perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Pizzas',
		items: [
			{ name: 'Pizza de la casa', note: 'jamón, carne picada, maíz y queso fundido' },
			{ name: 'Pizza de queso', note: 'la base de siempre, para los más pequeños' },
			{ name: 'Pizza con embutido', note: 'con lo que haya en el mostrador ese día' },
			{ name: 'Pizza para llevar', note: 'en caja, recién salida del horno' },
		],
	},
	{
		title: 'Hamburguesas',
		items: [
			{ name: 'Hamburguesa clásica', note: 'pan de sésamo, carne a la parrilla, lechuga y tomate' },
			{ name: 'Hamburguesa con queso', note: 'con queso fundido' },
			{ name: 'Hamburguesa con bacon', note: 'con bacon y salsa de la casa' },
			{ name: 'Bocadillo', note: 'de carne, en pan crujiente' },
		],
	},
	{
		title: 'Fritos y para compartir',
		items: [
			{ name: 'Empanadillas', note: 'fritas, en bandeja, para picar' },
			{ name: 'Croquetas', note: 'de la casa, recién fritas' },
			{ name: 'Patatas asadas', note: 'en tandas, con sal gruesa' },
			{ name: 'Patatas rellenas', note: 'fritas y rellenas, para compartir' },
			{ name: 'Alitas de pollo', note: 'a la parrilla, con salsa' },
		],
	},
	{
		title: 'Bebidas y postres',
		items: [
			{ name: 'Refrescos', note: 'lata o botella, de la nevera del mostrador' },
			{ name: 'Cervezas', note: 'para acompañar la pizza' },
			{ name: 'Postre de la casa', note: 'se pregunta en el local' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Barbakun?',
		a: 'En la Avinguda Fiter i Rossell, 38, AD700 Escaldes-Engordany (Principado de Andorra), en la calle principal de la parroquia. La ficha de Google sitúa el local en las coordenadas 42.5137845, 1.5337382.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de martes a domingo de 13:00 a 15:30 y de 19:30 a 23:00. El lunes cierra todo el día. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 727 726. Es el número para pedir a domicilio, encargar para llevar o preguntar por la carta.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pizzas al horno, hamburguesas en pan de sésamo, bocadillos de carne, y una parte de fritos y picoteo: empanadillas, croquetas, patatas asadas y patatas rellenas fritas. La pizarra de la puerta anuncia además parrilla al mediodía.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha lo clasifica como «Comida a domicilio», así que sí se puede pedir por teléfono. Conviene confirmar la zona de reparto y el importe mínimo al llamar al +376 727 726.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí. Las fotos del perfil muestran un comedor con mesas y sillas de madera junto a la barra y la vitrina de bebidas, así que hay servicio en mesa además del reparto y la comida para llevar.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'La ficha no publica carta ni alérgenos. Con pizzas de queso, patatas y fritos hay opciones sin carne, pero conviene preguntar por teléfono antes de pedir.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios ni hay carta en el perfil. Los importes se consultan en el local o por teléfono, en el +376 727 726.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Barbakun',
	actualizado: 'Noviembre de 2026',
};
