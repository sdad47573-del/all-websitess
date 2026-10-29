/**
 * Datos de Panadería La Campiña — Centro, 14002 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia La Campiña, 37.8866159,-4.7718145,
 *   feature 0xd6cdf7ed82e457f:0x7cc00c9026e2172.
 * - Categoría, descripción, valoración, reseñas, teléfono, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con la
 * descripción de la ficha, las fotos del perfil y las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería La Campiña',
	shortName: 'La Campiña',
	mark: 'C',
	street: 'Pl. del Realejo, s/n',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14002',
	country: 'ES',
	phone: '957 57 66 65',
	phoneHref: 'tel:+34957576665',
	rating: 4.3,
	reviewsCount: 136,
	siteUrl: 'https://panaderia-la-campina.vercel.app',
	geo: { lat: 37.8866159, lng: -4.7718145 },
	featureId: '0xd6cdf7ed82e457f:0x7cc00c9026e2172',
	placeId: 'ChIJf0Uu2H7fbA0RciFuAskAzAc',
	googleCategory: 'Panadería',
	tagline: '25 clases de pan en la Plaza del Realejo',
	description:
		'Panadería La Campiña, en la Plaza del Realejo (Centro, 14002 Córdoba). Pan, bollería, pastelería y empanadas. Abierta de lunes a viernes de 8:00 a 20:00. 4,3 sobre 5 en Google.',
	hoursSummary: 'Lunes a viernes 8:00–20:00 · fin de semana 8:00–16:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+La+Campi%C3%B1a/@37.8866159,-4.7718145,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7ed82e457f:0x7cc00c9026e2172!8m2!3d37.8866159!4d-4.7718145!16s%2Fg%2F11hbpw_l8w?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=898955277309919602',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8866159%2C-4.7718145',
	embed: 'https://maps.google.com/maps?q=37.8866159,-4.7718145&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8866159,-4.7718145',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–20:00' },
	{ day: 'Sábado', value: '8:00–16:00' },
	{ day: 'Domingo', value: '8:00–16:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'25 clases de pan',
	'Bollería',
	'Pastelería',
	'Empanadas',
	'Miel y aceite',
];

export const HIGHLIGHTS = [
	{
		title: '25 clases de pan',
		text: 'Es la primera línea de la descripción que el propio negocio publica en su ficha de Google: «25 clases de pan, amplia oferta de bollería, pastelería y empanadas».',
	},
	{
		title: 'Pastelería y empanadas',
		text: 'Una reseña habla de «tartas y dulces deliciosos». Las empanadas aparecen en la descripción de la ficha y la pastelería, en las fotos del perfil.',
	},
	{
		title: 'Miel y aceite',
		text: '«También venden miel y aceite muy bueno», cuenta una de las reseñas de Google. La ficha no publica marcas, formatos ni precios.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: '25 clases de pan',
				note: 'Según la descripción de la propia ficha de Google.',
			},
			{
				name: 'Pan del día',
				note: 'En las bandejas y estanterías del obrador, según las fotos del perfil.',
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
				name: 'Bollería',
				note: 'La ficha anuncia una «amplia oferta de bollería».',
			},
			{
				name: 'Tartas y dulces',
				note: '«Tartas y dulces deliciosos», según una de las reseñas de Google.',
			},
			{
				name: 'Pastelería de vitrina',
				note: 'La ficha no publica catálogo ni precios: cambia según el día.',
			},
		],
	},
	{
		title: 'Salado y despensa',
		items: [
			{
				name: 'Empanadas',
				note: 'Aparecen en la descripción de la ficha de Google.',
			},
			{
				name: 'Miel',
				note: '«También venden miel», cuenta una reseña del perfil.',
			},
			{
				name: 'Aceite',
				note: '«Aceite muy bueno», según la misma reseña. Sin marcas ni precios publicados.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Campiña?',
		a: 'En la Plaza del Realejo, s/n, en el Centro de Córdoba (14002). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 8:00 a 20:00, y los sábados y domingos de 8:00 a 16:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 57 66 65. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha describe «25 clases de pan, amplia oferta de bollería, pastelería y empanadas». Las reseñas añaden tartas y dulces, y también miel y aceite. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Venden miel y aceite?',
		a: 'Sí, según una de las reseñas de Google: «también venden miel y aceite muy bueno». La ficha no publica marcas, formatos ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 136 reseñas en Google, que la clasifica como panadería.',
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
		q: '¿Se puede comer allí?',
		a: 'La ficha no publica mesas, terraza ni servicio de sala, así que esta web no lo afirma. Es una panadería con mostrador y tienda.',
	},
];
