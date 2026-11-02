/**
 * Datos de COMIDAS CASERAS PARA LLEVAR 'ALARCOS' — C. de Alarcos, 28, 13001 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc332fd256ee3:0xbe3b943969ed3331).
 *
 * Lo que publica la ficha: nombre, dirección, categoría («Restaurante de comida
 * para llevar»), teléfono, 4,5 sobre 5 con 184 reseñas, horario y dos reseñas
 * destacadas. No enlaza web propia ni redes, no tiene descripción escrita por el
 * negocio y no publica carta ni precios.
 */

export const BUSINESS = {
	name: "Comidas Caseras Alarcos",
	fullName: "COMIDAS CASERAS PARA LLEVAR 'ALARCOS'",
	shortName: 'Alarcos',
	mark: 'AL',
	street: 'C. de Alarcos, 28',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13001',
	country: 'ES',
	siteUrl: 'https://comidas-caseras-alarcos.vercel.app',
	geo: { lat: 38.9821152, lng: -3.9324906 },
	featureId: '0xd6bc332fd256ee3:0xbe3b943969ed3331',
	placeId: 'ChIJ424l_TLDaw0RMTPtaTmUO74',
	plusCode: '8CCRX3J9+R2',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '601 62 27 22',
	phoneHref: 'tel:+34601622722',
	tagline: 'Comida casera para llevar en la calle Alarcos',
	description:
		'Comidas Caseras Alarcos, en C. de Alarcos, 28 (13001 Ciudad Real). Menús caseros, pollo asado y codillo en salsa de cebollitas para llevar. De 12:00 a 15:30, de martes a sábado.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/COMIDAS+CASERAS+PARA+LLEVAR+%27ALARCOS%27/@38.9821152,-3.9324906,17z/data=!4m7!3m6!1s0xd6bc332fd256ee3:0xbe3b943969ed3331!8m2!3d38.9821152!4d-3.9324906!16s%2Fg%2F11mxb5z5r6!19sChIJ424l_TLDaw0RMTPtaTmUO74?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9821152%2C-3.9324906',
	embed: 'https://maps.google.com/maps?q=38.9821152,-3.9324906&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9821152,-3.9324906',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 184,
	label: '4,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '12:00–15:30' },
	{ dia: 'Miércoles', horas: '12:00–15:30' },
	{ dia: 'Jueves', horas: '12:00–15:30' },
	{ dia: 'Viernes', horas: '12:00–15:30' },
	{ dia: 'Sábado', horas: '12:00–15:30' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha marca además el Día de Todos los Santos (domingo 1 de noviembre) como cerrado. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Menús económicos',
	'Pollo asado',
	'Codillo en salsa',
	'Raciones generosas',
];

export const HIGHLIGHTS = [
	{
		title: 'Menús a buen precio',
		text: 'Una de las dos reseñas que destaca Google lo resume así: «Los precios de los menús son muy económicos y las raciones dan gusto». La ficha no publica la carta, pero en el mostrador del local se ven arroces, fideos, pasta gratinada y guisos.',
	},
	{
		title: 'Pollo asado y codillo',
		text: 'La otra reseña de portada dice: «Riquísimo el pollo asado y el codillo en salsa de cebollitas!!!». El codillo aparece en las fotos del perfil dentro de su bandeja, cubierto de una salsa oscura y brillante.',
	},
	{
		title: 'Bandejas que llenan',
		text: 'Arroz con pollo, ensaladilla con palitos de cangrejo, fideos con champiñones, berenjena rellena gratinada, croquetas, pescado rebozado y carne en salsa: todo sale en bandejas de aluminio, listo para llevar.',
	},
	{
		title: 'De martes a sábado',
		text: 'Abre de 12:00 a 15:30 de martes a sábado. Lunes y domingo figuran cerrados, y el Día de Todos los Santos también. Es un local de comida para llevar: la ficha no menciona mesas ni reparto a domicilio.',
	},
];

/**
 * Carta construida con las dos reseñas destacadas y con las bandejas que
 * aparecen en las fotos del perfil. La ficha no publica precios ni un menú
 * escrito, así que aquí no hay importes.
 */
export const MENU = [
	{
		title: 'Arroces y pasta',
		items: [
			{ name: 'Arroz con pollo', note: 'en las fotos del perfil, con pimiento y guisantes' },
			{ name: 'Arroz negro', note: 'en el mostrador de las fotos' },
			{ name: 'Fideos con verduras', note: 'en el mostrador de las fotos' },
			{ name: 'Fideos con champiñones', note: 'en una bandeja del perfil' },
			{ name: 'Pasta gratinada', note: 'en el mostrador de las fotos' },
			{ name: 'Macarrones con tomate', note: 'en una de las bandejas' },
		],
	},
	{
		title: 'Del horno y la sartén',
		items: [
			{ name: 'Pollo asado', note: 'elogiado en una de las reseñas destacadas' },
			{ name: 'Pollo troceado en su jugo', note: 'en las fotos del perfil, con hierbas' },
			{ name: 'Codillo en salsa de cebollitas', note: 'elogiado en una reseña y visible en las fotos' },
			{ name: 'Carne en salsa con patatas', note: 'en una bandeja del perfil' },
			{ name: 'Berenjena rellena gratinada', note: 'en una de las fotos, con tomate y queso' },
			{ name: 'Pescado rebozado', note: 'filetes fritos en una bandeja del perfil' },
			{ name: 'Croquetas', note: 'empanadas y listas para freír, en una de las fotos' },
			{ name: 'Ensaladilla de patata', note: 'con palitos de cangrejo, en una bandeja del perfil' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{ name: 'Por teléfono', note: `llama al ${BUSINESS.phone} para saber el menú del día` },
			{ name: 'Recogida en el local', note: 'C. de Alarcos, 28, de 12:00 a 15:30' },
			{ name: 'Menú del día', note: 'las reseñas hablan de menús económicos; el de cada día se pregunta al llamar' },
		],
	},
];

/** Las dos reseñas que la ficha destaca, tal como aparecen publicadas. */
export const RESENAS = [
	{
		texto: 'Los precios de los menús son muy económicos y las raciones dan gusto.',
		valor: 5,
	},
	{
		texto: 'Riquísimo el pollo asado y el codillo en salsa de cebollitas!!!',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comidas Caseras Alarcos?',
		a: 'En la calle de Alarcos, 28, en Ciudad Real (13001). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 12:00 a 15:30, de martes a sábado. El lunes y el domingo figuran cerrados, y la ficha también marca como cerrado el Día de Todos los Santos. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera para llevar. Entre las reseñas y las fotos del perfil aparecen arroces, fideos, pasta gratinada, pollo asado, codillo en salsa de cebollitas, carne en salsa con patatas, berenjena rellena, pescado rebozado, croquetas y ensaladilla. El menú de cada día se pregunta en el 601 62 27 22.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'La ficha no publica carta ni precios. Una de las reseñas que destaca Google dice que «los precios de los menús son muy económicos y las raciones dan gusto», pero es una opinión, no una tarifa. El importe del día se confirma por teléfono.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay servicio de reserva en esta página ni datos de reservas en la ficha. Al ser comida para llevar, lo práctico es llamar al 601 62 27 22 por la mañana, preguntar el menú y encargar lo que quieras recoger.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha la clasifica como «restaurante de comida para llevar» y no menciona mesas ni servicio en sala. Tampoco publica datos de accesibilidad, salvo que no hay asientos adaptados para sillas de ruedas. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha no anuncia reparto a domicilio: la categoría es comida para llevar y no hay zona, horario de entrega ni pedido mínimo publicados. Pregúntalo al llamar. Esta página no tramita pedidos.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,5 sobre 5 con 184 reseñas en el momento de consultarla (noviembre de 2026). Las dos opiniones que destaca Google son de cinco estrellas: una habla del precio y del tamaño de las raciones, la otra del pollo asado y del codillo.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio, y tampoco incluye una descripción escrita por el local. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
