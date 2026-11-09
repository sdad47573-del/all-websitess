/**
 * Datos de O Brilhante Restaurante — Av. Bulhão Pato 24, Trafaria (Almada).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «O Brilhante Restaurante»,
 *   38.6725552,-9.2312537, feature 0xd1ecb06545e86c7:0xf20e5560e27862bb
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'O Brilhante Restaurante',
	shortName: 'O Brilhante',
	mark: 'OB',
	street: 'Av. Bulhão Pato, 24',
	city: 'Trafaria',
	region: 'Almada',
	regionName: 'Portugal',
	postalCode: '2825-846',
	country: 'PT',
	phoneDisplay: '212 958 552',
	phoneHref: 'tel:+351212958552',
	rating: 4.4,
	reviewsCount: 64,
	siteUrl: 'https://www.sur-digital.com/o-brilhante',
	geo: { lat: 38.6725552, lng: -9.2312537 },
	featureId: '0xd1ecb06545e86c7:0xf20e5560e27862bb',
	placeId: 'ChIJx4ZeVAbLHg0Ru2J44mBVDvI',
	cid: '17441972281457271483',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/O+Brilhante+Restaurante/@38.6725552,-9.2312537,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecb06545e86c7:0xf20e5560e27862bb!8m2!3d38.6725552!4d-9.2312537!16s%2Fg%2F11cjhsplbv',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6725552%2C-9.2312537',
	embed: 'https://maps.google.com/maps?q=38.6725552,-9.2312537&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: solo cenas, de lunes a sábado. */
export const HOURS = [
	{ day: 'Lunes', value: '19:00–21:30' },
	{ day: 'Martes', value: '19:00–21:30' },
	{ day: 'Miércoles', value: '19:00–21:30' },
	{ day: 'Jueves', value: '19:00–21:30' },
	{ day: 'Viernes', value: '19:00–21:30' },
	{ day: 'Sábado', value: '19:00–21:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Tanto os grelhados como comida é bom',
	'Restaurante com ambiente agradável, requintado.',
	'Recomendo para um passeio na Trafaria.',
];

/**
 * Señas de identidad que sí constan: la categoría de Google, lo que muestran
 * las fotos del perfil y lo que dicen las reseñas.
 */
export const SERVICIOS = [
	'Cocina portuguesa',
	'Grelhados',
	'Peixe fresco',
	'Espetadas',
	'Tasca de barrio',
	'Terraza',
	'Cenas',
];

/**
 * La ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil; por eso no hay precios.
 */
export const MENU = [
	{
		title: 'Da grelha',
		items: [
			{
				name: 'Espetadas',
				note: 'brochetas de vacuno a la brasa con patata frita y limón (foto del perfil)',
			},
			{ name: 'Sardinhas assadas', note: 'sardinas a la parrilla con ensalada de tomate y cebolla' },
			{ name: 'Costeleta de novilho', note: 'chuleta de ternera a la brasa, con patata y limón' },
		],
	},
	{
		title: 'Da tasca',
		items: [
			{ name: 'Bitoque', note: 'bistec con huevo frito, arroz, patata frita y ensalada' },
			{ name: 'Peixe do dia', note: 'pescado fresco a la parrilla, según lo que llegue' },
			{ name: 'Pão e azeitonas', note: 'para empezar, con el pan de la casa' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Pudim con canela', note: 'postre de la casa, servido en copa (foto del perfil)' },
			{ name: 'Vinho da casa', note: 'blanco o tinto, para acompañar la brasa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está O Brilhante?',
		a: 'En la Avenida Bulhão Pato, 24, del 2825-846 Trafaria, en el municipio de Almada, en la orilla sur del Tajo. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Solo abre para cenar, de 19:00 a 21:30, de lunes a sábado. El domingo cierra. Es el horario que publica su ficha de Google, que avisa de que puede cambiar en festivos; conviene llamar antes.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina portuguesa de tasca, con la brasa como centro: espetadas de vacuno, sardinas asadas, costeleta de novilho y bitoque, además del pescado que llegue ese día. Las fotos del perfil muestran estos platos con patata frita, arroz, ensalada y limón.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza con mesas y sillas verdes bajo sombrillas, además del comedor con manteles de cuadros rojos.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para reservar mesa hay que llamar al 212 958 552. El horario es corto, así que conviene llamar con antelación.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca entrada y asientos accesibles para personas en sillas de ruedas. No confirma estacionamiento ni aseo adaptados: para eso, llama antes.',
	},
	{
		q: '¿Se puede ir con niños?',
		a: 'No hay una indicación específica en la ficha. Es una tasca de barrio con mesas amplias y terraza, pero si vas con niños pequeños lo mejor es llamar y preguntar por la disponibilidad y el menú.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 64 reseñas. Las publicadas elogian los grelhados, el ambiente y el paseo por Trafaria.',
	},
];
