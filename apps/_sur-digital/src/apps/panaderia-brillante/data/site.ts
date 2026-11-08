/**
 * Datos de Panadería Brillante — Centro, 14010 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Brillante, 37.8867597,-4.7650626,
 *   feature 0xd6cdf81430929ad:0x80d7e18e923c247b.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con las
 * fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería Brillante',
	shortName: 'Brillante',
	mark: 'B',
	street: 'C. Rda. de la Manca, 4',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14010',
	country: 'ES',
	phone: '957 44 19 53',
	phoneHref: 'tel:+34957441953',
	rating: 4.5,
	reviewsCount: 39,
	siteUrl: 'https://www.sur-digital.com/panaderia-brillante',
	geo: { lat: 37.8867597, lng: -4.7650626 },
	featureId: '0xd6cdf81430929ad:0x80d7e18e923c247b',
	placeId: 'ChIJrSkJQ4HfbA0ReyQ8ko7h14A',
	googleCategory: 'Panadería',
	tagline: 'Pan y bollería en la Ronda de la Manca',
	description:
		'Panadería Brillante, en la Ronda de la Manca, 4 (14010 Córdoba). Pan, bollería y dulces, y pitufos de jamón. Abre de lunes a viernes de 6:00 a 15:00 y de 18:00 a 20:00. 4,5 sobre 5 en Google.',
	hoursSummary: 'L–V 6:00–15:00 y 18:00–20:00 · sábados 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Brillante/@37.8867597,-4.7650626,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf81430929ad:0x80d7e18e923c247b!8m2!3d37.8867597!4d-4.7650626!16s%2Fg%2F1hg48p1ws?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=9282829747856753787',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8867597%2C-4.7650626',
	embed: 'https://maps.google.com/maps?q=37.8867597,-4.7650626&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8867597,-4.7650626',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:00–15:00 · 18:00–20:00' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre muy temprano y vuelve a abrir por la tarde de lunes a viernes. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Bollería',
	'Dulces',
	'Empanadas',
	'Tartas por encargo',
	'Pitufos de jamón',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y confitería',
		text: 'El rótulo de la fachada anuncia «Panadería El Brillante · Confitería», con el sol y la caja de regalo dibujados en el centro.',
	},
	{
		title: 'Empanadas por encargo',
		text: 'Un cartel del local anuncia empanadas del obrador La Abuela Luisa, con rellenos normales y especiales, y anima a encargarlas allí.',
	},
	{
		title: 'Tartas con dedicatoria',
		text: 'En las fotos del perfil aparece una tarta de nata escrita a mano: «¡Felicidades Cumpleaños Marta!».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan y bollería',
		items: [
			{
				name: 'Pan del día',
				note: 'En las bandejas del mostrador, según las fotos del perfil.',
			},
			{
				name: 'Bollería de vitrina',
				note: 'En la vitrina del local, junto a la cafetera.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo del día.',
			},
		],
	},
	{
		title: 'Confitería',
		items: [
			{
				name: 'Dulces y pasteles',
				note: 'En las bandejas del perfil: dulces espolvoreados y bañados de chocolate.',
			},
			{
				name: 'Tartas',
				note: 'Tartas de nata con dedicatoria, como la de «Felicidades Marta».',
			},
			{
				name: 'Para llevar',
				note: 'Sin precios publicados en la ficha de Google.',
			},
		],
	},
	{
		title: 'Empanadas y salado',
		items: [
			{
				name: 'Empanadas normales',
				note: 'El cartel del local lista atún y tomate, atún y pisto, y jamón york y queso.',
			},
			{
				name: 'Empanadas especiales',
				note: 'Atún y pimiento morrón, salmón y philadelphia, bacon y dátiles, bacon y philadelphia, jamón york y queso, jamón york y roquefort y carbonara.',
			},
			{
				name: 'Pitufos de jamón',
				note: '«Una delicia», según una reseña de Google. La ficha no publica qué más hay de salado.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Brillante?',
		a: 'En la Ronda de la Manca, 4 (14010 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 6:00 a 15:00 y de 18:00 a 20:00, y los sábados de 8:00 a 15:00. El domingo cierra. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 44 19 53. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces, tartas y empanadas, según la ficha, las fotos del perfil y los carteles del local. Una reseña menciona los pitufos de jamón. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Qué son los pitufos de jamón?',
		a: 'Es lo que menciona una de las reseñas de Google: «los pitufos de jamón una delicia, trato familiar y un gran precio». La ficha no publica qué son ni cuánto cuestan, así que esta página no lo detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica información sobre el aparcamiento adaptado, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 39 reseñas en Google, que la clasifica como panadería. Entre las reseñas hay opiniones muy buenas y alguna queja sobre el pan.',
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
		q: '¿Se pueden hacer encargos?',
		a: 'El cartel de empanadas del local invita a encargarlas allí y lista varios rellenos; también hay tartas con dedicatoria en las fotos del perfil. La ficha no publica catálogo ni plazos, así que lo mejor es llamar al 957 44 19 53 y preguntar.',
	},
];
