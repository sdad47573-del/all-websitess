/**
 * Datos de La Romànica Andorra — Carrer del Solà, 3, Baixos, AD200 Encamp
 * (parroquia de Encamp, Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La Romànica Andorra», 42.5350349,1.5790739,
 *   feature 0x12a58b6e343db735:0x58e42b4fc6108906.
 * - Nombre, dirección, teléfono, categorías, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,9 · 72 reseñas).
 * - La ficha enlaza una carta propia en portalrest.com.
 * - Platos: fotos del perfil (pinsa romana alargada y con la masa fermentada,
 *   en caja, con burrata, prosciutto, rúcula, atún, pimientos, quesos y una
 *   versión dulce de chocolate y pistacho), además del tiramisú.
 */

export const BUSINESS = {
	name: 'La Romànica Andorra',
	fullName: 'La Romànica Andorra',
	shortName: 'La Romànica',
	mark: 'LR',
	street: 'Carrer del Solà, 3, Baixos',
	district: 'Encamp',
	city: 'Encamp',
	region: 'Encamp',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/la-romanica-andorra',
	geo: { lat: 42.5350349, lng: 1.5790739 },
	featureId: '0x12a58b6e343db735:0x58e42b4fc6108906',
	placeId: 'ChIJNbc9NG6LpRIRBokQxk8r5Fg',
	plusCode: 'GHPH+2J Encamp',
	googleCategory: 'Pizzería a domicilio',
	phone: '+376 851 780',
	phoneHref: 'tel:+376851780',
	tagline: 'Pinsa romana en Encamp',
	description:
		'La Romànica Andorra, Carrer del Solà, 3, Baixos (AD200 Encamp). Pinsa romana alargada y de masa fermentada, con burrata, prosciutto, rúcula o atún, y versión dulce de chocolate y pistacho. Para llevar y a domicilio. 4,9 sobre 5 con 72 reseñas. Abre viernes, sábado y domingo de 19:00 a 22:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Rom%C3%A0nica+Andorra/@42.5350349,1.5790739,17z/data=!4m6!3m5!1s0x12a58b6e343db735:0x58e42b4fc6108906!8m2!3d42.5350349!4d1.5790739!16s%2Fg%2F11kqxlvfsx?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5350349%2C1.5790739',
	embed: 'https://maps.google.com/maps?q=42.5350349,1.5790739&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5350349,1.5790739',
};

/** Carta propia que enlaza la ficha de Google. */
export const CARTA = {
	label: 'Ver la carta en portalrest.com',
	href: 'https://www.portalrest.com/index.html?data=%3DATPrNXYmITPtZyM0kDO5ITP0NXZSRWa',
	domain: 'portalrest.com',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.9,
	count: 72,
	label: '4,9',
};

/** Horario que publica la ficha: solo cenas de viernes a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: 'Cerrado', closed: true },
	{ dia: 'Viernes', horas: '19:00–22:30' },
	{ dia: 'Sábado', horas: '19:00–22:30' },
	{ dia: 'Domingo', horas: '19:00–22:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. De lunes a jueves está cerrado: solo abre las cenas de viernes, sábado y domingo.';

export const SERVICIOS = [
	'Pinsa romana',
	'Pizza para llevar',
	'A domicilio',
	'Burrata',
	'Prosciutto',
	'Pinsa dulce',
	'Tiramisú',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Pinsa, no pizza',
		text: 'La masa es de pinsa romana: alargada, irregular, con la fermentación larga y el borde crujiente y tostado. Se hornea y se sirve en caja, cortada en porciones para compartir.',
	},
	{
		title: 'Burrata y prosciutto',
		text: 'La combinación más repetida en el perfil es la pinsa con prosciutto, rúcula, lascas de parmesano y una burrata entera en el centro. También hay una versión con tomate cherry, burrata y pesto, y otra con rúcula y parmesano.',
	},
	{
		title: 'Pinsa dulce',
		text: 'Hay una pinsa de postre: base de chocolate, crema y pistacho picado por encima. En el perfil también aparece un tiramisú servido en vasitos de cristal, con el café y el cacao por capas.',
	},
	{
		title: 'Solo cenas de fin de semana',
		text: 'La ficha marca un horario corto: viernes, sábado y domingo de 19:00 a 22:30, y de lunes a jueves cerrado. Es un negocio de pizzas para llevar y a domicilio, no un restaurante de mediodía.',
	},
];

/**
 * Lo que se ve en las fotos del perfil y en la carta enlazada. No se copian
 * importes: la ficha no los publica y la carta enlazada puede cambiar.
 */
export const MENU = [
	{
		title: 'Pinsas con burrata',
		items: [
			{ name: 'Prosciutto, rúcula y burrata', note: 'prosciutto, rúcula, lascas de parmesano y burrata entera' },
			{ name: 'Tomate cherry, burrata y pesto', note: 'tomate asado, burrata y pesto por encima' },
			{ name: 'Rúcula y parmesano', note: 'tomate, mozzarella, rúcula y lascas de parmesano' },
		],
	},
	{
		title: 'Pinsas de la casa',
		items: [
			{ name: 'Pimientos y cebolla', note: 'pimientos amarillos y rojos, cebolla y mozzarella' },
			{ name: 'Atún y cebolla', note: 'atún, cebolla y aceitunas negras' },
			{ name: 'Salchicha y queso', note: 'salchicha, queso fundido y romero' },
			{ name: 'Quesos', note: 'pinsa blanca con quesos fundidos y láminas de parmesano' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Pinsa dulce', note: 'chocolate, crema y pistacho picado' },
			{ name: 'Tiramisú', note: 'en vasito, con café y cacao por capas' },
		],
	},
	{
		title: 'Para beber',
		items: [
			{ name: 'Vino', note: 'en el perfil aparece una botella para acompañar las pinsas' },
			{ name: 'Refrescos y cervezas', note: 'se preguntan al llamar' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Romànica Andorra?',
		a: 'En el Carrer del Solà, 3, Baixos, AD200 Encamp (Principado de Andorra). La ficha de Google sitúa el local en las coordenadas 42.5350349, 1.5790739, en la planta baja (Baixos).',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre solo los viernes, sábados y domingos de 19:00 a 22:30. De lunes a jueves está cerrado. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 851 780. Es el número para encargar la pinsa y confirmar el reparto o la recogida.',
	},
	{
		q: '¿Qué es la pinsa romana?',
		a: 'Es una masa alargada e irregular, de fermentación larga, que se hornea hasta quedar crujiente por fuera y tierna por dentro. La forma y el borde tostado son distintos de la pizza redonda: aquí se sirve en caja para compartir.',
	},
	{
		q: '¿Qué pinsas tienen?',
		a: 'En el perfil aparecen pinsas con prosciutto, rúcula, parmesano y burrata; con tomate cherry, burrata y pesto; con rúcula y parmesano; con pimientos y cebolla; con atún y aceitunas; con salchicha y queso; y una pinsa blanca de quesos. La carta completa está en el enlace que publica la ficha.',
	},
	{
		q: '¿Hay postre?',
		a: 'Sí: una pinsa dulce con chocolate, crema y pistacho, y tiramisú en vasito. Ambas aparecen en las fotos del perfil.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha lo clasifica como «Pizzería a domicilio» y «Pizza para llevar», así que el reparto y la recogida son parte del negocio. Conviene confirmar la zona y el importe mínimo al llamar al +376 851 780.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Las fotos del perfil son todas de cajas y de platos servidos, no del comedor, y la ficha no da datos de mesas. Lo práctico es pensar en un negocio de reparto y recogida; si se quiere comer allí, conviene preguntar al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios, pero sí enlaza una carta con precios en portalrest.com. Los importes se consultan ahí o por teléfono, en el +376 851 780.',
	},
];

export const LEGAL = {
	razonSocial: 'La Romànica Andorra',
	actualizado: 'Noviembre de 2026',
};
