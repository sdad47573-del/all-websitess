/**
 * Datos de Busy Bites Indian Restaurant — Praça Luís de Camões 50,
 * 2840-488 Seixal.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Busy Bites Indian Restaurant»,
 *   38.6437465,-9.1039646, feature 0xd1935d140c461e7:0xf020d49099caa2ae
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   la descripción del propio restaurante).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Busy Bites Indian Restaurant',
	shortName: 'Busy Bites',
	mark: 'BB',
	street: 'Praça Luís de Camões, 50',
	city: 'Seixal',
	region: 'Setúbal',
	regionName: 'Portugal',
	postalCode: '2840-488',
	country: 'PT',
	phoneDisplay: '939 383 344',
	phoneHref: 'tel:+351939383344',
	rating: 4.8,
	reviewsCount: 256,
	siteUrl: 'https://www.sur-digital.com/busy-bites',
	geo: { lat: 38.6437465, lng: -9.1039646 },
	featureId: '0xd1935d140c461e7:0xf020d49099caa2ae',
	placeId: 'ChIJ52HEQNE1GQ0RrqLKmZDUIPA',
	cid: '17303063485878018734',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Busy+Bites+Indian+Restaurant/@38.6437465,-9.1039646,17z/data=!3m1!4b1!4m6!3m5!1s0xd1935d140c461e7:0xf020d49099caa2ae!8m2!3d38.6437465!4d-9.1039646!16s%2Fg%2F11q3yh184x',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6437465%2C-9.1039646',
	embed: 'https://maps.google.com/maps?q=38.6437465,-9.1039646&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comida y cena de lunes a sábado, solo comida
 * el domingo y cierre semanal los martes.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–15:00 · 19:00–23:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '12:00–15:00 · 19:00–23:30' },
	{ day: 'Jueves', value: '12:00–15:00 · 19:00–23:30' },
	{ day: 'Viernes', value: '12:00–15:00 · 19:00–23:30' },
	{ day: 'Sábado', value: '12:00–15:00 · 19:00–23:30' },
	{ day: 'Domingo', value: '12:00–15:00 · 19:00–23:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Restaurante 5estrelas com muito boa comida e ambiente!',
	'Todos os pratos com sabores maravilhosos, frescos e bem servidos.',
	'Staff super simpático e com opções para crianças.',
];

/**
 * Señas de identidad que sí constan: la categoría de Google, lo que anuncia la
 * descripción del restaurante y lo que se ve en las fotos del perfil.
 */
export const SERVICIOS = [
	'Cocina india',
	'Tandoor y brasa',
	'Curry y biryani',
	'Bar',
	'Reparto a domicilio',
	'Pedidos por WhatsApp',
	'Opciones para niños',
	'Acepta perros',
];

/**
 * La ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y del cartel de la ventana; por eso no hay precios.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Pollo crujiente con salsa de menta',
				note: 'bocados de pollo especiados y fritos, con chutney verde (foto del perfil)',
			},
			{ name: 'Samosas', note: 'triángulos rellenos, en el cartel de la ventana' },
			{ name: 'Naan de ajo y cilantro', note: 'pan recién hecho con dos chutneys, en las fotos' },
		],
	},
	{
		title: 'Del tandoor',
		items: [
			{ name: 'Tandoori de pollo', note: 'pollo marinado y asado en el horno de barro' },
			{ name: 'Gambas a la brasa', note: 'en el cartel de la ventana, con lima' },
			{ name: 'Brochetas y costillas', note: 'carnes especiadas a la brasa' },
		],
	},
	{
		title: 'Curries',
		items: [
			{ name: 'Butter chicken', note: 'curry suave de pollo con la crema en espiral (foto del perfil)' },
			{ name: 'Chicken tikka masala', note: 'el clásico de la casa, en el cartel de la ventana' },
			{ name: 'Curry de verduras', note: 'con arroz basmati o naan' },
		],
	},
	{
		title: 'Arroces y panes',
		items: [
			{ name: 'Biryani', note: 'arroz basmati al azafrán con verduras o pollo, servido en cazuela de cobre' },
			{ name: 'Arroz basmati', note: 'como acompañamiento de los curries' },
			{ name: 'Naan', note: 'al horno, natural o con ajo y cilantro' },
		],
	},
	{
		title: 'Bar',
		items: [
			{ name: 'Cócteles', note: 'el restaurante se presenta como «Restaurant & Bar»' },
			{ name: 'Cervezas y vinos', note: 'para acompañar el picante' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Busy Bites?',
		a: 'En la Praça Luís de Camões, 50, del 2840-488 Seixal. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre para comer y cenar de lunes a sábado: de 12:00 a 15:00 y de 19:00 a 23:30. El domingo solo hay servicio de comida y la cena termina a las 23:00. El martes cierra. La ficha avisa de que puede cambiar en festivos.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina india. El restaurante la describe como «authentic Indian flavours in Seixal», con curries clásicos, ingredientes frescos y platos propios en un espacio moderno. De la cocina salen curries, tandoori, biryani, naan y entrantes especiados.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'En las fotos del perfil aparece un biryani de verduras y el cartel de la ventana muestra varios platos sin carne, además de arroces y panes. La ficha no publica la carta completa: conviene preguntar por las opciones vegetarianas al llamar.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Sí. El propio restaurante anuncia en su ficha «Delivery available» y «Free Delivery», con pedidos también por WhatsApp. Para pedir o confirmar la zona de reparto, el teléfono es el 939 383 344.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para reservar mesa hay que llamar al 939 383 344.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí, según su ficha de Google: estacionamiento, entrada, asientos y WC accesibles para personas en sillas de ruedas, además de bucle de inducción magnética.',
	},
	{
		q: '¿Se puede ir con perros?',
		a: 'La ficha marca el atributo «Aceita cães». Para saber si pueden quedarse dentro o solo en la terraza, lo mejor es confirmarlo al llamar.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,8 sobre 5 con 256 reseñas. Las publicadas destacan la comida, el ambiente y el trato del equipo, con opciones para niños.',
	},
];
