/**
 * Datos de LA HOGAZA MALAGUEÑA — C. Muñoz Degraín, 4, Carretera de Cádiz,
 * 29002 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: LA HOGAZA MALAGUEÑA, 36.705692,-4.4350175,
 *   feature 0xd72f783dcdbde79:0x65e3dcc89056d452.
 * - Categorías, valoración, reseñas, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 * - Rótulos del local en esas mismas fotos: «Pan La Hogaza Malagueña», «Se hacen
 *   tartas personalizadas» y «Empanadas y salatitos por encargo».
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, correo, redes,
 * carta ni precios. El mapa y las indicaciones llevan al punto exacto. El
 * mostrador recoge solo lo que muestran las fotos y lo que cuentan las reseñas,
 * sin importes.
 */

export const BUSINESS = {
	name: 'LA HOGAZA MALAGUEÑA',
	shortName: 'La Hogaza',
	mark: 'H',
	street: 'C. Muñoz Degraín, 4',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29002',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.5,
	reviewsCount: 45,
	siteUrl: 'https://la-hogaza-malaguena.vercel.app',
	geo: { lat: 36.705692, lng: -4.4350175 },
	featureId: '0xd72f783dcdbde79:0x65e3dcc89056d452',
	placeId: 'ChIJed7b3IP3cg0RUtRWkMjc42U',
	googleCategory: 'Panadería',
	tagline: 'Panadería, pastelería y tartas en Carretera de Cádiz',
	description:
		'LA HOGAZA MALAGUEÑA, panadería, pastelería y tienda de tartas en la calle Muñoz Degraín, 4 (Carretera de Cádiz, 29002 Málaga). Abierta todos los días de 7:00 a 15:00. 4,5 sobre 5 en Google.',
	hoursSummary: 'Todos los días 7:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/LA+HOGAZA+MALAGUE%C3%91A/@36.705692,-4.4350175,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f783dcdbde79:0x65e3dcc89056d452!8m2!3d36.705692!4d-4.4350175!16s%2Fg%2F11cn0shqff?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=7341954571517219922',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.705692%2C-4.4350175',
	embed: 'https://maps.google.com/maps?q=36.705692,-4.4350175&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.705692,-4.4350175',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '7:00–15:00' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene pasarse o mirar la ficha antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Tienda de tartas',
	'Hogazas y barras',
	'Bollería',
	'Empanadas por encargo',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan, recién hecho',
		text: 'Las fotos del perfil muestran hogazas rústicas en cestas, barras y baguettes en la bandeja, y panes redondos con semillas. Todo se vende en el mostrador de la calle Muñoz Degraín.',
	},
	{
		title: 'Bollería y pastelería',
		text: 'En la vitrina hay napolitanas y caracolas con crema y azúcar glas, además de croissants. Google clasifica el negocio como panadería, pastelería y tienda de tartas.',
	},
	{
		title: 'Por encargo',
		text: 'El rótulo de la fachada anuncia «Se hacen tartas personalizadas» y, dentro, un cartel indica «Empanadas y salatitos por encargo». Los encargos se hablan en el local.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Hogazas rústicas',
				note: 'Panes de corteza marcada y harina, en cestas, en las fotos del perfil.',
			},
			{
				name: 'Barras y baguettes',
				note: 'Baguettes alineadas en la bandeja del obrador, recién hechas.',
			},
			{
				name: 'Pan con semillas',
				note: 'Panes redondos cubiertos de semillas, junto a las hogazas.',
			},
		],
	},
	{
		title: 'La bollería',
		items: [
			{
				name: 'Napolitanas de crema',
				note: 'Con crema y azúcar glas, en la bandeja de la vitrina.',
			},
			{
				name: 'Caracolas',
				note: 'Hojaldre enrollado con crema, en la misma bandeja.',
			},
			{
				name: 'Croissants',
				note: 'Piezas de hojaldre en la bandeja del mostrador.',
			},
		],
	},
	{
		title: 'Por encargo',
		items: [
			{
				name: 'Tartas personalizadas',
				note: 'Lo anuncia el cartel de la fachada. Condiciones y sabores, en el local.',
			},
			{
				name: 'Empanadas y salatitos',
				note: 'El cartel del interior indica que se hacen por encargo.',
			},
			{
				name: 'Dulces para llevar',
				note: 'La ficha no publica surtido ni precios; cambia a lo largo de la mañana.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está LA HOGAZA MALAGUEÑA?',
		a: 'En la calle Muñoz Degraín, 4, en Carretera de Cádiz (29002 Málaga). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:00 a 15:00, de lunes a domingo. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en el propio local; para la ubicación exacta, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, pastelería y tartas. En las fotos del perfil aparecen hogazas rústicas, barras, baguettes, panes con semillas, napolitanas y caracolas con crema, y croissants. Google clasifica el negocio como panadería, pastelería y tienda de tartas.',
	},
	{
		q: '¿Hacen tartas personalizadas?',
		a: 'El cartel de la fachada anuncia «Se hacen tartas personalizadas». La ficha de Google no publica condiciones, sabores ni plazos de encargo, así que lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Preparan empanadas y salatitos por encargo?',
		a: 'En el interior del local hay un cartel que indica «Empanadas y salatitos por encargo». La ficha no detalla cantidades, precios ni plazos; se habla en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 45 reseñas en Google. Una de ellas dice: «La mejor panadería, perfecta y espectacular en todos los sentidos».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Una reseña de Google comenta que no se podía pagar con tarjeta; conviene llevar efectivo y confirmarlo en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Abre por la tarde?',
		a: 'No. El horario publicado en Google termina a las 15:00 todos los días. Si buscas pan por la tarde, conviene mirar otra ficha o pasarse antes del cierre.',
	},
];
