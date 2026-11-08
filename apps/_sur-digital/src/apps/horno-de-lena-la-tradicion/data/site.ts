/**
 * Datos de Horno de Leña La Tradición — Poniente Sur, 14004 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Horno de Leña La Tradición,
 *   37.8767472,-4.7905792, feature 0xd6d214afbf31a1b:0x79db72e6dc074d0e.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con las
 * fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Horno de Leña La Tradición',
	shortName: 'La Tradición',
	mark: 'T',
	street: 'Pl. de Vista Alegre, 4',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14004',
	country: 'ES',
	phone: '644 20 48 73',
	phoneHref: 'tel:+34644204873',
	rating: 4.6,
	reviewsCount: 39,
	siteUrl: 'https://www.sur-digital.com/horno-de-lena-la-tradicion',
	geo: { lat: 37.8767472, lng: -4.7905792 },
	featureId: '0xd6d214afbf31a1b:0x79db72e6dc074d0e',
	placeId: 'ChIJGxrz-0ohbQ0RDk0H3OZy23k',
	googleCategory: 'Panadería',
	tagline: 'Pan de horno de leña en Vista Alegre',
	description:
		'Horno de Leña La Tradición, panadería en la Plaza de Vista Alegre, 4 (Poniente Sur, 14004 Córdoba). Pan de horno de leña, molletes, palmeras y dulces. De lunes a viernes de 9:00 a 14:30 y de 16:30 a 20:00. 4,6 sobre 5 en Google.',
	hoursSummary: 'L–V 9:00–14:30 y 16:30–20:00 · sábados 9:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Horno+de+Le%C3%B1a+La+Tradici%C3%B3n/@37.8767472,-4.7905792,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d214afbf31a1b:0x79db72e6dc074d0e!8m2!3d37.8767472!4d-4.7905792!16s%2Fg%2F11rjbc8lxv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=8778054380888665358',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8767472%2C-4.7905792',
	embed: 'https://maps.google.com/maps?q=37.8767472,-4.7905792&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8767472,-4.7905792',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:00–14:30 · 16:30–20:00' },
	{ day: 'Sábado', value: '9:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Los carteles de la fachada marcan otro horario (cierran la mañana a las 13:30 y abren por la tarde de 16:00 a 19:30), así que conviene llamar antes de ir. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte además de que el horario podría variar.';

export const SERVICIOS = [
	'Pan de masa madre',
	'Harinas ecológicas',
	'Horno de leña',
	'Bollería',
	'Dulces',
	'Tartas',
	'Encargos',
];

export const HIGHLIGHTS = [
	{
		title: 'Horno de leña desde 1913',
		text: 'El rótulo de la fachada lo anuncia: «La Tradición. Horno de leña. Desde 1913». Una reseña lo resume así: «el mejor pan que recuerdo haber probado en mi vida».',
	},
	{
		title: 'Masa madre y harinas eco',
		text: 'El escaparate lo repite en vinilos: «masa madre», «harinas ecológicas», «pan de verdad». La carta del local habla de fermentaciones de 20 a 48 horas y panes de 1 kg.',
	},
	{
		title: 'Dulces y tartas',
		text: '«Los molletes son un espectáculo y los dulces también», cuenta una reseña. Otra menciona «la palmera de chocolate y un trozo de tarta».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panes',
		items: [
			{
				name: 'Pan de masa madre',
				note: 'La carta del local habla de «masa madre de cultivo propio» y fermentaciones de 20 a 48 horas.',
			},
			{
				name: 'Harinas ecológicas de la campiña',
				note: 'Así lo indica la carta de panes del obrador, que cita harinas eco de la campiña de Córdoba.',
			},
			{
				name: 'Panes de 1 kg',
				note: 'El formato que anuncia la carta. El surtido rota por días: leváin, semillas, centeno, espelta, multicereales, triticordeum o monococcum, entre otros.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Palmera de chocolate',
				note: 'Una reseña del perfil la menciona junto a un trozo de tarta.',
			},
			{
				name: 'Bollería de vitrina',
				note: 'En la vitrina del local, según las fotos del perfil. La ficha no publica catálogo ni precios.',
			},
			{
				name: 'Molletes',
				note: '«Los molletes son un espectáculo», según una reseña de Google.',
			},
		],
	},
	{
		title: 'Dulces y tartas',
		items: [
			{
				name: 'Tartas',
				note: 'En las fotos del perfil aparecen tartas de crema con fruta confitada y frutos secos.',
			},
			{
				name: 'Dulces',
				note: '«Los dulces también» son un espectáculo, según la reseña de los molletes.',
			},
			{
				name: 'Encargos',
				note: 'La ficha no detalla qué se puede encargar: se pregunta en el obrador o por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Horno de Leña La Tradición?',
		a: 'En la Plaza de Vista Alegre, 4, en Poniente Sur (14004 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica de lunes a viernes de 9:00 a 14:30 y de 16:30 a 20:00, y los sábados solo por la mañana, de 9:00 a 14:30. El domingo cierra. Los carteles de la fachada marcan otro horario (mañanas hasta las 13:30 y tardes de 16:00 a 19:30), así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 644 20 48 73. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio obrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan de masa madre y harinas ecológicas, bollería, molletes, dulces y tartas, según la carta del local, las fotos del perfil y las reseñas de Google. La carta de panes rota el surtido por días e incluye variedades como leváin, semillas, centeno, espelta, multicereales o monococcum. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'La ficha no publica catálogo, cantidades ni plazos de encargo. Lo mejor es llamar al 644 20 48 73 y preguntar por el obrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 39 reseñas en Google, que la clasifica como panadería.',
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
		q: '¿Desde cuándo existe el obrador?',
		a: 'El rótulo de la fachada y el cartel del escaparate dicen «Desde 1913». Es la fecha que el propio establecimiento muestra en el local; la ficha de Google no añade más historia.',
	},
];
