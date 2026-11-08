/**
 * Datos de Panadería Horno La Molina — Levante, 14007 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Horno La Molina,
 *   37.8953901,-4.7612614, feature 0xd6cdf9afdc4dc45:0x51879f1250110b90.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con las
 * fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería Horno La Molina',
	shortName: 'La Molina',
	mark: 'M',
	street: 'Av. del 28 de Febrero, 34',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14007',
	country: 'ES',
	phone: '957 43 32 69',
	phoneHref: 'tel:+34957433269',
	rating: 4.5,
	reviewsCount: 322,
	siteUrl: 'https://www.sur-digital.com/panaderia-horno-la-molina',
	geo: { lat: 37.8953901, lng: -4.7612614 },
	featureId: '0xd6cdf9afdc4dc45:0x51879f1250110b90',
	placeId: 'ChIJRdzE_ZrfbA0RkAsRUBKfh1E',
	googleCategory: 'Panadería',
	tagline: 'Obrador tradicional en Levante',
	description:
		'Panadería Horno La Molina, en la Avenida del 28 de Febrero, 34 (Levante, 14007 Córdoba). Pan de telera, bollos, pastelería y dulces. Abierta todos los días de 7:00 a 19:00. 4,5 sobre 5 en Google.',
	hoursSummary: 'Todos los días 7:00–19:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Horno+La+Molina/@37.8953901,-4.7612614,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf9afdc4dc45:0x51879f1250110b90!8m2!3d37.8953901!4d-4.7612614!16s%2Fg%2F11cmg1bw58?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=5870044719700478864',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8953901%2C-4.7612614',
	embed: 'https://maps.google.com/maps?q=37.8953901,-4.7612614&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8953901,-4.7612614',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '7:00–19:00' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Obrador tradicional',
	'Pan de telera',
	'Bollos',
	'Pastelería',
	'Café',
	'Smoothies',
];

export const HIGHLIGHTS = [
	{
		title: 'Obrador tradicional',
		text: '«Obrador tradicional, con pan y pastelería de siempre y con trato exquisito», resume una de las reseñas de Google.',
	},
	{
		title: 'Pan de telera',
		text: 'Otra reseña habla de «unos bollos más grandes de pan de telera para bocadillo muy ricos». La ficha no publica precios.',
	},
	{
		title: 'Café y smoothies',
		text: 'En el local hay mesas para tomar café y una carta de «smoothies naturales hechos al momento», según las fotos del perfil.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: 'Pan del día',
				note: 'En las cestas y bolsas del mostrador, según las fotos del perfil.',
			},
			{
				name: 'Bollos de pan de telera',
				note: '«Más grandes y muy ricos» para bocadillo, según una reseña de Google.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo del día.',
			},
		],
	},
	{
		title: 'Bollería y pastelería',
		items: [
			{
				name: 'Bollos y bollería',
				note: 'En las bandejas y vitrinas del local, según las fotos del perfil.',
			},
			{
				name: 'Tartas y pasteles',
				note: 'Tartas de chocolate y de nata, pasteles de yema y hojaldres en la vitrina.',
			},
			{
				name: 'Dulces',
				note: '«Pan y dulces magníficos», cuenta una reseña de Google.',
			},
		],
	},
	{
		title: 'Café y smoothies',
		items: [
			{
				name: 'Café',
				note: 'Hay mesas en el local: en una foto del perfil se ve un café con leche y un bollo.',
			},
			{
				name: 'Smoothies naturales',
				note: '«Hechos al momento», según la carta de smoothies que aparece en las fotos.',
			},
			{
				name: 'Encargos',
				note: 'La ficha no detalla qué se puede encargar: se pregunta en el mostrador o por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Horno La Molina?',
		a: 'En la Avenida del 28 de Febrero, 34, en Levante (14007 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:00 a 19:00, de lunes a domingo. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 43 32 69. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio obrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollos, bollería, pastelería y dulces, según la ficha, las fotos del perfil y las reseñas de Google. Una reseña menciona los bollos de pan de telera para bocadillo. En el local también hay mesas, café y una carta de smoothies naturales. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'La ficha no publica catálogo, cantidades ni plazos de encargo. Lo mejor es llamar al 957 43 32 69 y preguntar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 322 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Qué es el pan de telera?',
		a: 'Es el pan que menciona una de las reseñas del perfil: «unos bollos más grandes de pan de telera para bocadillo muy ricos». La ficha no detalla la elaboración, así que esta página no añade nada más.',
	},
];
