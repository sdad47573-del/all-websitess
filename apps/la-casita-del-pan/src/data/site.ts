/**
 * Datos de La casita del pan — Pje. Aguilar de la Frontera, Sur, 14013 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La casita del pan, 37.864071,-4.7807352,
 *   feature 0xd6d2163385c8733:0x34fee64f6a648a75.
 * - Categoría, valoración, reseñas, teléfono, horario, accesibilidad y
 *   descripción del negocio: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con la
 * descripción del negocio, las fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'La casita del pan',
	shortName: 'La casita del pan',
	mark: 'C',
	street: 'Pje. Aguilar de la Frontera',
	district: 'Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '647 93 88 10',
	phoneHref: 'tel:+34647938810',
	rating: 4.5,
	reviewsCount: 29,
	siteUrl: 'https://la-casita-del-pan.vercel.app',
	geo: { lat: 37.864071, lng: -4.7807352 },
	featureId: '0xd6d2163385c8733:0x34fee64f6a648a75',
	placeId: 'ChIJM4dcOGMhbQ0RdYpkak_m_jQ',
	googleCategory: 'Panadería',
	tagline: 'Pan del día y dulces de pastelero en el Sur',
	description:
		'La casita del pan, en el Pasaje Aguilar de la Frontera (Sur, 14013 Córdoba). Pan del día, dulces de pastelero, dulces finos, tartas de cumpleaños y empanadas por encargo, y desayunos. Abre de lunes a viernes de 8:00 a 15:00 y de 17:00 a 20:00. 4,5 sobre 5 en Google.',
	hoursSummary: 'L–V 8:00–15:00 y 17:00–20:00 · sábados y domingos 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+casita+del+pan/@37.864071,-4.7807352,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d2163385c8733:0x34fee64f6a648a75!8m2!3d37.864071!4d-4.7807352!16s%2Fg%2F11mvlqkyz5?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=3818742762818538101',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.864071%2C-4.7807352',
	embed: 'https://maps.google.com/maps?q=37.864071,-4.7807352&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.864071,-4.7807352',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00 · 17:00–20:00' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días por la mañana y, de lunes a viernes, vuelve por la tarde. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Dulces de pastelero',
	'Dulces finos',
	'Tartas de cumpleaños',
	'Empanadas',
	'Desayunos',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan recién horneado',
		text: 'La descripción del propio negocio en Google lo dice así: «pan del día y recién horneado». Es lo primero que se anuncia en la ficha.',
	},
	{
		title: 'Dulces de pastelero',
		text: 'La ficha habla de «dulces de pastelero y dulces finos», además de tartas de cumpleaños por encargo y empanadas.',
	},
	{
		title: 'Desayuno en el Sur',
		text: 'Una reseña lo recomienda como «buen sitio para desayunar», con «buena atención». Otra destaca a «dos trabajadoras maravillosas» y una atención exquisita.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: '«Pan del día y recién horneado», según la descripción del negocio en Google.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Dulces',
		items: [
			{
				name: 'Dulces de pastelero',
				note: 'Así los anuncia la ficha del establecimiento, junto a los dulces finos.',
			},
			{
				name: 'Dulces finos',
				note: 'Piezas pequeñas de mostrador; la ficha no detalla variedades ni precios.',
			},
		],
	},
	{
		title: 'Encargos',
		items: [
			{
				name: 'Tartas de cumpleaños',
				note: 'La ficha anuncia tartas de cumpleaños por encargo. No publica catálogo, plazos ni precios.',
			},
			{
				name: 'Empanadas',
				note: 'También por encargo, según la descripción del negocio. Rellenos y tamaños no están publicados.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La casita del pan?',
		a: 'En el Pasaje Aguilar de la Frontera, en el distrito Sur de Córdoba (14013). La ficha de Google no publica número; el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 15:00 y de 17:00 a 20:00. Sábados y domingos abre solo por la mañana, de 8:00 a 15:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 647 93 88 10. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan del día, dulces de pastelero, dulces finos, tartas de cumpleaños y empanadas por encargo, según la descripción del negocio en Google y las fotos del perfil. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Se pueden encargar tartas o empanadas?',
		a: 'Sí: la ficha del negocio anuncia tartas de cumpleaños y empanadas por encargo. No publica catálogo, plazos ni precios, así que lo mejor es llamar al 647 93 88 10 y preguntar.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Una reseña de Google lo describe como «buen sitio para desayunar y buena atención». La ficha no publica carta de desayunos ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, pero indica que no hay aparcamiento accesible. No informa sobre el aseo ni el mostrador, así que esta página no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 29 reseñas en Google. Las hay muy buenas, sobre el trato y el desayuno, y alguna negativa: una clienta cuenta que las pastas saladas eran congeladas.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. Según la ficha de Google, sábados y domingos abre de 8:00 a 15:00. De lunes a viernes amplía hasta las 20:00 con una pausa de 15:00 a 17:00.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local o por teléfono para encargos.',
	},
];
