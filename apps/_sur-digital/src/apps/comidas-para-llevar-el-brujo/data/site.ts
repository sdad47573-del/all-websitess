/**
 * Datos de Comidas para llevar El Brujo — Cam. San José, 127,
 * 30570 San José de la Montaña (Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Comidas para llevar El Brujo»,
 *   37.959993,-1.0777847, feature 0xd6378134179b151:0x7bf740c30ce509e1.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, atributos de
 *   accesibilidad y reseñas: ficha pública de Google consultada en noviembre de
 *   2026.
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta ni precios, no publica reparto a domicilio ni formas de pago. Los
 * platos que aparecen aquí son los que citan las reseñas destacadas y las
 * categorías del propio local; no hay importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'Comidas para llevar El Brujo',
	fullName: 'Comidas para llevar El Brujo',
	shortName: 'El Brujo',
	mark: 'EB',
	street: 'Cam. San José, 127',
	district: 'San José de la Montaña',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30570',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/comidas-para-llevar-el-brujo',
	geo: { lat: 37.959993, lng: -1.0777847 },
	featureId: '0xd6378134179b151:0x7bf740c30ce509e1',
	placeId: 'ChIJUbF5QRN4Yw0R4QnlDMNA93s',
	plusCode: '8C9WXW5C+XV',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '968 82 33 80',
	phoneHref: 'tel:+34968823380',
	tagline: 'Asador y comida para llevar en San José de la Montaña',
	description:
		'Comidas para llevar El Brujo, en Cam. San José, 127 (30570 San José de la Montaña, Murcia). Pollos y corderos asados, carnes a la brasa y arroces para llevar.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Comidas+para+llevar+El+Brujo/@37.959993,-1.0777847,17z/data=!4m6!3m5!1s0xd6378134179b151:0x7bf740c30ce509e1!8m2!3d37.959993!4d-1.0777847!16s%2Fg%2F11b6dqkwfk?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.959993%2C-1.0777847',
	embed: 'https://maps.google.com/maps?q=37.959993,-1.0777847&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.959993,-1.0777847',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 363,
	label: '4,2',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–17:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, sus categorías y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Pollos asados',
	'Cordero asado',
	'Carnes a la brasa',
	'Arroces',
	'Comedor',
	'Terraza',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Asador de pollo y cordero',
		text: 'La ficha lo clasifica dos veces: «restaurante especializado en pollo» y «asador de cordero». El asador es el centro de la casa, no un añadido.',
	},
	{
		title: 'Carnes a la brasa',
		text: 'Una de las reseñas lo dice sin rodeos: «Buen sitio para carnes a la brasa y arroces». Es la combinación que más se repite en las opiniones.',
	},
	{
		title: 'Arroces y tataki',
		text: 'La reseña más detallada elogia «el tataki de atún, la croqueta de gamba roja y el arroz a banda». Se cocina más que asado: hay arroces y entrantes de cocina.',
	},
	{
		title: 'Comedor y terraza',
		text: 'Aunque la ficha lo clasifica como comida para llevar, las fotos del perfil muestran dos comedores con mesas vestidas y una terraza cubierta. Con 363 reseñas y un 4,2 de media, es uno de los asadores con más movimiento de la zona.',
	},
];

/** Platos que citan las reseñas y las categorías del local, sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'la ficha lo clasifica como restaurante especializado en pollo' },
			{ name: 'Cordero asado', note: 'la ficha incluye la categoría «asador de cordero»' },
			{ name: 'Carnes a la brasa', note: 'citadas en una de las reseñas destacadas' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Arroz a banda', note: 'elogiado en una reseña destacada' },
			{ name: 'Arroces', note: 'una reseña habla de «carnes a la brasa y arroces»' },
			{ name: 'Tataki de atún', note: 'citado en la reseña más detallada' },
			{ name: 'Croqueta de gamba roja', note: 'citada en la misma reseña' },
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
				note: 'en Cam. San José, 127, San José de la Montaña',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Muy bueno el tataki de atún, la croqueta de gamba roja y el arroz a banda.',
		valor: 5,
	},
	{
		texto: 'Buen sitio para carnes a la brasa y arroces.',
		valor: 5,
	},
	{
		texto: 'Muy buena comida, buen precio y buena calidad y buen servicio',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comidas para llevar El Brujo?',
		a: 'En el Camino de San José, 127, en San José de la Montaña (30570 Murcia). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De jueves a domingo, de 9:00 a 16:00, y los lunes de 9:00 a 17:00. Los martes y los miércoles figura cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica una carta con precios. Sus categorías son restaurante de comida para llevar, especializado en pollo y asador de cordero, y las reseñas destacadas citan carnes a la brasa, arroces, arroz a banda, tataki de atún y croqueta de gamba roja. Para saber qué hay cada día, llama al 968 82 33 80.',
	},
	{
		q: '¿Hacen pollos y corderos asados?',
		a: 'Sí. La propia ficha lo clasifica como restaurante especializado en pollo y como asador de cordero, además de restaurante de comida para llevar.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha lo clasifica como restaurante de comida para llevar, pero las fotos del perfil enseñan dos comedores con mesas vestidas y una terraza cubierta, así que también se atiende en sala. El local declara acceso para sillas de ruedas, aunque no asientos adaptados. Llama al 968 82 33 80 para saber cómo se sirve cada día.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 968 82 33 80, y se recoge en el local. La ficha no enlaza ninguna tienda online ni plataforma de reparto, así que esta página no tramita pedidos.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni el perfil del local publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es el teléfono y la dirección. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono para no llevarte una sorpresa al recoger.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google declara acceso para sillas de ruedas, pero no asientos adaptados. No publica más datos de accesibilidad; si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,2 sobre 5 con 363 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian el tataki, la croqueta de gamba roja, el arroz a banda, las carnes a la brasa y la relación calidad-precio.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
