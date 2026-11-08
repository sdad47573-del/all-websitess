/**
 * Datos de Buen Gusto - Comida para llevar — Calle de Diego de León, 59,
 * Salamanca (28006 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Buen Gusto - Comida para llevar»,
 *   40.43482,-3.6761776, feature 0xd4228c7680963e3:0x91d288a6d34ea1c5.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta oficial ni datos de accesibilidad. Los platos y precios de
 * esta web son los que aparecen en los carteles de las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Buen Gusto',
	fullName: 'Buen Gusto - Comida para llevar',
	shortName: 'Buen Gusto',
	mark: 'BG',
	street: 'Calle de Diego de León, 59',
	district: 'Salamanca',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28006',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/buen-gusto-comida-para-llevar',
	geo: { lat: 40.43482, lng: -3.6761776 },
	featureId: '0xd4228c7680963e3:0x91d288a6d34ea1c5',
	placeId: 'ChIJ42MJaMcoQg0RxaFO06aI0pE',
	plusCode: '8CGRC8MF+WG',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '913 44 09 56',
	phoneHref: 'tel:+34913440956',
	tagline: 'Pollo asado y comida para llevar en Salamanca',
	description:
		'Buen Gusto, en Calle de Diego de León, 59 (Salamanca, 28006 Madrid). Pollo asado y comida preparada para llevar, con menú completo. De lunes a sábado, de 9:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Buen+Gusto+-+Comida+para+llevar/@40.43482,-3.6761776,17z/data=!3m1!4b1!4m6!3m5!1s0xd4228c7680963e3:0x91d288a6d34ea1c5!8m2!3d40.43482!4d-3.6761776!16s%2Fg%2F11cmfz9dtr?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.43482%2C-3.6761776',
	embed: 'https://maps.google.com/maps?q=40.43482,-3.6761776&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.43482,-3.6761776',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 236,
	label: '4,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y los carteles del local permiten afirmar. */
export const SERVICIOS = [
	'Pollos asados',
	'Comida preparada',
	'Menú completo',
	'Para llevar',
	'Ofertas a 12 €',
	'Comida casera',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Es lo que anuncia el rótulo de la fachada y lo que aparece en la vitrina. Una de las reseñas lo resume así: «He comprado un pollo asado muy bien hecho y nada seco lo recomiendo».',
	},
	{
		title: 'Menú completo a 7,25 €',
		text: 'El cartel «Elija su comida» del local propone primer plato, segundo, postre y bebida por 7,25 €. La ficha de Google no publica este menú; el precio es el que se ve en la foto del cartel.',
	},
	{
		title: 'Ocho ofertas a 12 €',
		text: 'La pizarra del local combina pollo asado, tortilla, croquetas, empanadillas, paella, pasta, arroz, patatas y postres en ocho ofertas, todas a 12 €.',
	},
	{
		title: 'Comida preparada de vitrina',
		text: 'Google clasifica el local como establecimiento de comida preparada. En el mostrador se ven bandejas de primeros y segundos, y las reseñas hablan de «comida casera y variada».',
	},
];

/** Platos y ofertas que aparecen en los carteles de las fotos del perfil. */
export const MENU = [
	{
		title: 'Primeros',
		items: [
			{ name: 'Macarrones', note: 'en la lista de primeros del cartel «Elija su comida»' },
			{ name: 'Paella', note: 'uno de los primeros que anuncia el cartel' },
			{ name: 'Menestra', note: 'en la lista de primeros del cartel' },
			{ name: 'Arroz tres delicias', note: 'en el cartel del menú' },
			{ name: 'Pisto', note: 'en la lista de primeros' },
			{ name: 'Judías verdes', note: 'en el cartel y en la vitrina' },
			{ name: 'Ensalada campera', note: 'en la lista de primeros' },
		],
	},
	{
		title: 'Segundos',
		items: [
			{ name: '1/2 pollo asado', note: 'el asador es la especialidad de la casa' },
			{ name: 'Escalope', note: 'en la lista de segundos del cartel' },
			{ name: 'Filete de pescado', note: 'en la lista de segundos' },
			{ name: 'Pollo al ajillo', note: 'en el cartel del menú' },
			{ name: 'Albóndigas', note: 'en la lista de segundos' },
			{ name: 'Canelones', note: 'en el cartel del menú' },
			{ name: 'Croquetas', note: 'también en las ofertas de la pizarra' },
			{ name: 'Empanadillas', note: 'en el cartel y en las ofertas' },
		],
	},
	{
		title: 'Postres y bebida',
		items: [
			{ name: 'Flan', note: 'en la lista de postres del cartel' },
			{ name: 'Arroz con leche', note: 'en la lista de postres' },
			{ name: 'Natillas', note: 'en la lista de postres' },
			{ name: 'Macedonia', note: 'en la lista de postres' },
			{ name: 'Tarta de queso', note: 'en la lista de postres' },
			{ name: 'Profiteroles', note: 'en la lista de postres' },
			{ name: 'Lata de refresco', note: 'una de las bebidas del menú' },
			{ name: 'Cerveza', note: 'una de las bebidas del menú' },
			{ name: 'Zumo', note: 'una de las bebidas del menú' },
			{ name: 'Agua', note: 'una de las bebidas del menú' },
		],
	},
	{
		title: 'Ofertas a 12 €',
		items: [
			{ name: 'Oferta n.º 1', note: '1 pollo asado + 1 tortilla + 3 croquetas', price: '12 €' },
			{ name: 'Oferta n.º 5', note: '1 pollo asado + tortilla + croquetas + empanadillas + patatas + 2 postres', price: '12 €' },
			{ name: 'Oferta n.º 7', note: '1 pollo asado + 5 empanadillas de verdura + 2 postres', price: '12 €' },
			{ name: 'Oferta n.º 8', note: '6 croquetas + 6 empanadillas + 1 ración de patatas + 2 postres', price: '12 €' },
		],
	},
];

/** Reseñas publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'He comprado un pollo asado muy bien hecho y nada seco lo recomiendo',
		valor: 5,
	},
	{
		texto: 'Buenos precios, comida casera y variada.',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Buen Gusto?',
		a: 'En la calle de Diego de León, 59, en el distrito de Salamanca (28006 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a sábado, de 9:00 a 16:00, con el domingo cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida preparada para llevar. En la vitrina hay pollos asados y bandejas de primeros y segundos, y el cartel del local propone un menú de primero, segundo, postre y bebida. La ficha de Google no publica una carta oficial.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'El cartel «Elija su comida» que aparece en las fotos del perfil marca 7,25 € por primer plato, segundo, postre y bebida, con un suplemento de cubiertos de 0,25 €. Es el precio visto en la foto: confírmalo en el local o por teléfono.',
	},
	{
		q: '¿Hay ofertas?',
		a: 'La pizarra del local anuncia ocho combinaciones a 12 €. Por ejemplo, la oferta n.º 1 es 1 pollo asado, 1 tortilla y 3 croquetas; la n.º 8, 6 croquetas, 6 empanadillas, una ración de patatas y 2 postres.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre de la ficha es «Comida para llevar» y Google lo clasifica como establecimiento de comida preparada. La ficha no publica servicio de mesa, terraza ni reservas, así que lo previsible es pedir para llevar.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 913 44 09 56. No consta página web propia, red social, aplicación ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad; solo marca que no hay aparcamiento adaptado para sillas de ruedas. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,5 sobre 5 con 236 reseñas en el momento de consultarla (octubre de 2026). Las opiniones elogian el pollo asado, la variedad y los precios; también hay alguna queja por la espera en los encargos.',
	},
];
