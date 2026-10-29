/**
 * Datos de Boutique del Pan la Pelusa C.B. — Plaza Basconia, 1, 1ºE,
 * Bailén-Miraflores, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Boutique del Pan la Pelusa C.B.,
 *   36.7227785,-4.4371933, feature 0xd72f7a0428e59a5:0x3b6e75d15f271808.
 * - Categoría, valoración, reseñas, horario, teléfono y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web, correo, redes, carta ni
 * precios. El mapa y las indicaciones llevan al punto exacto. El mostrador
 * recoge solo lo que muestran las fotos y lo que cuentan las reseñas, sin
 * importes.
 */

export const BUSINESS = {
	name: 'Boutique del Pan la Pelusa C.B.',
	shortName: 'La Pelusa',
	mark: 'P',
	street: 'Plaza Basconia, 1, 1ºE',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '952 61 45 99',
	phoneHref: 'tel:+34952614599',
	rating: 4.3,
	reviewsCount: 20,
	siteUrl: 'https://boutique-del-pan-la-pelusa.vercel.app',
	geo: { lat: 36.7227785, lng: -4.4371933 },
	featureId: '0xd72f7a0428e59a5:0x3b6e75d15f271808',
	placeId: 'ChIJpVmOQqD3cg0RCBgnX9F1bjs',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en Bailén-Miraflores',
	description:
		'Boutique del Pan la Pelusa C.B., panadería en la Plaza Basconia, 1 (Bailén-Miraflores, 29010 Málaga). Pan, bollería y empanadas. Abierta de lunes a sábado de 8:30 a 14:30 y los domingos de 8:30 a 14:00. 4,3 sobre 5 en Google.',
	hoursSummary: 'L–S 8:30–14:30 · Dom 8:30–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Boutique+del+Pan+la+Pelusa+C.B./@36.7227785,-4.4371933,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a0428e59a5:0x3b6e75d15f271808!8m2!3d36.7227785!4d-4.4371933!16s%2Fg%2F1tz77bb3?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4282489837780932616',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7227785%2C-4.4371933',
	embed: 'https://maps.google.com/maps?q=36.7227785,-4.4371933&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7227785,-4.4371933',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:30–14:30' },
	{ day: 'Domingo', value: '8:30–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: de lunes a sábado hasta las 14:30 y los domingos hasta las 14:00. El cartel de la puerta que aparece en las fotos indica horarios algo distintos, así que conviene confirmarlo antes de ir. El 1 de noviembre (Día de Todos los Santos) Google advierte además de que podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Empanadas',
	'Bollería',
	'Dulces',
	'Atención telefónica',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan de barrio',
		text: 'La ficha de Google clasifica el negocio como panadería. Las reseñas hablan de un «pan exquisito y de buenísima calidad».',
	},
	{
		title: 'Las empanadas',
		text: 'Una de las reseñas lo tiene claro: «Probad sus estupendas empanadas». Se venden en el mostrador, junto al pan.',
	},
	{
		title: 'Abierta los domingos',
		text: 'Abre de lunes a sábado de 8:30 a 14:30 y los domingos de 8:30 a 14:00, en jornada de mañana.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'Barras y piezas de pan en el mostrador, mientras dura la mañana.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica variedades ni precios: el surtido cambia cada día.',
			},
		],
	},
	{
		title: 'El mostrador',
		items: [
			{
				name: 'Empanadas',
				note: '«Probad sus estupendas empanadas», dice una reseña de Google.',
			},
			{
				name: 'Bollería y dulces',
				note: 'Piezas de bollería y dulces junto al pan, según las fotos del local.',
			},
		],
	},
	{
		title: 'Para casa',
		items: [
			{
				name: 'Consultas y encargos',
				note: 'La ficha publica el teléfono 952 61 45 99: las consultas se atienden en el mostrador o por teléfono.',
			},
			{
				name: 'Roscones y dulces de temporada',
				note: 'En las fotos del perfil aparece un roscón de Reyes con frutas escarchadas.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Boutique del Pan la Pelusa?',
		a: 'En la Plaza Basconia, 1, 1ºE, en Bailén-Miraflores (29010 Málaga). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:30 a 14:30 y los domingos de 8:30 a 14:00, según la ficha de Google. El cartel de la puerta que aparece en las fotos indica horarios algo distintos, así que conviene confirmarlo antes de ir. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 952 61 45 99. No indica página web, correo ni redes sociales, así que la web y los encargos se gestionan en el propio local o por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces y empanadas. Google clasifica el negocio como panadería. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Venden empanadas?',
		a: 'Sí. Una de las reseñas de Google dice: «Probad sus estupendas empanadas». La ficha no detalla sabores ni precios; se pregunta en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 20 reseñas en Google. Las reseñas destacadas hablan del trato, del pan y de las empanadas.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Abre por la tarde?',
		a: 'No. El horario publicado en Google termina a las 14:30 de lunes a sábado y a las 14:00 los domingos. Es una panadería de jornada de mañana.',
	},
];
