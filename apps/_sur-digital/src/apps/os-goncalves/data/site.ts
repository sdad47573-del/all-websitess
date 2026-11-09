/**
 * Datos de Restaurante Os Gonçalves — Av. Infante Dom Henrique 32-A,
 * 2635-366 Rio de Mouro (Sintra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Os Gonçalves»,
 *   38.7853217,-9.3248921, feature 0xd1ed16e0921f813:0x54471894eb4baa4f
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad,
 *   «Aceita cães» y la descripción del propio restaurante).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Restaurante Os Gonçalves',
	shortName: 'Os Gonçalves',
	mark: 'OG',
	street: 'Av. Infante Dom Henrique, 32-A',
	city: 'Rio de Mouro',
	region: 'Sintra',
	regionName: 'Portugal',
	postalCode: '2635-366',
	country: 'PT',
	phoneDisplay: '219 164 202',
	phoneHref: 'tel:+351219164202',
	rating: 4.4,
	reviewsCount: 91,
	siteUrl: 'https://www.sur-digital.com/os-goncalves',
	geo: { lat: 38.7853217, lng: -9.3248921 },
	featureId: '0xd1ed16e0921f813:0x54471894eb4baa4f',
	placeId: 'ChIJE_ghCW7RHg0RT6pL65QYR1Q',
	cid: '6072849650414234191',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Os+Gon%C3%A7alves/@38.7853217,-9.3248921,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ed16e0921f813:0x54471894eb4baa4f!8m2!3d38.7853217!4d-9.3248921!16s%2Fg%2F11h0ykt1w6',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7853217%2C-9.3248921',
	embed: 'https://maps.google.com/maps?q=38.7853217,-9.3248921&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: 8:30–22:00, con el jueves cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '8:30–22:00' },
	{ day: 'Martes', value: '8:30–22:00' },
	{ day: 'Miércoles', value: '8:30–22:00' },
	{ day: 'Jueves', value: 'Cerrado', closed: true },
	{ day: 'Viernes', value: '8:30–22:00' },
	{ day: 'Sábado', value: '8:30–22:00' },
	{ day: 'Domingo', value: '8:30–22:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Comida muito saborosa, boa relação preço quantidade',
	'Comi a picanha, o feijão é bem saboroso, e pessoal simpático.',
	'Bom ambiente asseio segurança e...muito boa comida.',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica
 * el local, la descripción del propio restaurante y sus atributos.
 */
export const SERVICIOS = [
	'Cocina tradicional portuguesa',
	'Grelha a carvão',
	'Petiscos',
	'Peixe fresco',
	'Carne',
	'Marisco',
	'Sin producto congelado',
	'Acepta perros',
	'Estacionamiento accesible',
];

/**
 * La ficha no publica carta ni precios. Los platos salen de las fotos del perfil
 * y de las reseñas; por eso no hay precios y la nota del menú lo explica.
 */
export const MENU = [
	{
		title: 'Da grelha',
		items: [
			{
				name: 'Peixe grelhado',
				note: 'dorada o lubina a la brasa, con patata cocida, brécol y limón (foto del perfil)',
			},
			{ name: 'Frango na brasa', note: 'pollo a la brasa con arroz, patata frita y ensalada' },
			{ name: 'Costeletas de porco', note: 'costillas a la brasa con patata cocida y limón' },
		],
	},
	{
		title: 'Da casa',
		items: [
			{
				name: 'Picanha com feijão',
				note: 'citada en una reseña: «Comi a picanha, o feijão é bem saboroso»',
			},
			{
				name: 'Feijão com carne e chouriço',
				note: 'guiso de judías con carne y chouriço, en las fotos del perfil',
			},
			{ name: 'Arroz com carne e chouriço', note: 'arroz guisado con carne y chouriço' },
		],
	},
	{
		title: 'Bitoque e petiscos',
		items: [
			{ name: 'Bitoque', note: 'bistec con huevo frito, arroz, patata frita y ensalada' },
			{ name: 'Tortilla de la casa', note: 'cuajada con verduras, servida en porciones' },
			{ name: 'Pão e azeitonas', note: 'para picar mientras llega la brasa' },
		],
	},
];

/** Accesibilidad que confirma la ficha de Google, punto por punto. */
export const ACCESIBILIDAD = [
	'Estacionamiento accesible para sillas de ruedas',
	'Entrada accesible para sillas de ruedas',
	'Asientos accesibles para sillas de ruedas',
	'WC accesible para sillas de ruedas',
];

export const FAQ = [
	{
		q: '¿Dónde está Os Gonçalves?',
		a: 'En la Avenida Infante Dom Henrique, 32-A, del 2635-366 Rio de Mouro, en el municipio de Sintra. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a miércoles y de viernes a domingo, de 8:30 a 22:00. El jueves cierra. Es el horario que publica su ficha de Google, que además avisa de que puede cambiar en festivos: conviene llamar antes.',
	},
	{
		q: '¿Qué se come en Os Gonçalves?',
		a: 'Cocina tradicional portuguesa. El propio restaurante la resume así en su ficha: «Petiscos, Peixe, Carne e Mariscos frescos, todos os dias, Grelha a Carvão. Nao trabalhamos com material congelado». Es decir, petiscos, pescado, carne y marisco fresco a la brasa de carbón, sin congelados.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para reservar mesa o preguntar por el menú del día hay que llamar al 219 164 202.',
	},
	{
		q: '¿Se puede ir con perros?',
		a: 'Sí. La ficha de Google marca el atributo «Aceita cães» (acepta perros). Para saber si pueden quedarse en la sala o solo en la zona exterior, lo mejor es confirmarlo al llamar.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí, según su ficha de Google: estacionamiento, entrada, asientos y WC accesibles para personas en sillas de ruedas.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El restaurante no publica carta ni precios en su ficha de Google, y esta web no los inventa. Una de las reseñas destaca la «boa relação preço quantidade»; para el precio del día, llama al 219 164 202.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 91 reseñas. Las publicadas destacan el sabor de la comida, la relación calidad-precio, la picanha con feijão y el trato del personal.',
	},
];
