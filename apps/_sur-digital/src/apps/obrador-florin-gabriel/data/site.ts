/**
 * Datos de OBRADOR de PANADERÍA y PASTELERÍA (Florin & Gabriel) — C. Carraca,
 * 5, Loc 20 (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: OBRADOR de PANADERÍA y PASTELERÍA
 *   (Florin & Gabriel), 36.7311665,-4.4370542, feature
 *   0xd72f7dea4581671:0xd2e81dbd389d9034.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Descripción del negocio: la propia ficha («obrador de panadería y
 *   pastelería con fabricación propia, venta al público y a la hostelería»).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia,
 * correo ni redes sociales. El mostrador recoge solo lo que muestran las fotos
 * del perfil y la descripción del obrador, sin importes.
 */

export const BUSINESS = {
	name: 'OBRADOR de PANADERÍA y PASTELERÍA (Florin & Gabriel)',
	shortName: 'Florin & Gabriel',
	mark: 'F',
	street: 'C. Carraca, 5, Loc 20',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '667 32 81 16',
	phoneHref: 'tel:+34667328116',
	rating: 3.7,
	reviewsCount: 9,
	siteUrl: 'https://www.sur-digital.com/obrador-florin-gabriel',
	geo: { lat: 36.7311665, lng: -4.4370542 },
	featureId: '0xd72f7dea4581671:0xd2e81dbd389d9034',
	placeId: 'ChIJcRZYpN73cg0RNJCdOL0d6NI',
	googleCategory: 'Panadería',
	tagline: 'Obrador de panadería y pastelería en Bailén-Miraflores',
	description:
		'OBRADOR de Panadería y Pastelería (Florin & Gabriel), en la calle Carraca, 5, local 20 (Bailén-Miraflores, 29011 Málaga). Fabricación propia de pan, bollería y tartas para el público y la hostelería. Teléfono 667 32 81 16.',
	hoursSummary: 'Todos los días 5:00–22:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/OBRADOR+de+PANADER%C3%8DA+y+PASTELER%C3%8DA+(Florin+%26+Gabriel)/@36.7311665,-4.4370542,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7dea4581671:0xd2e81dbd389d9034!8m2!3d36.7311665!4d-4.4370542!16s%2Fg%2F11j8tc79vs?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=15197429641097613364',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7311665%2C-4.4370542',
	embed: 'https://maps.google.com/maps?q=36.7311665,-4.4370542&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7311665%2C-4.4370542',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '5:00–22:30' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días: es un obrador, no una tienda de barrio. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

export const SERVICIOS = [
	'Obrador propio',
	'Panadería',
	'Pastelería',
	'Bollería',
	'Tartas personalizadas',
	'Venta a hostelería',
];

export const HIGHLIGHTS = [
	{
		title: 'Fabricación propia',
		text: 'La ficha lo dice tal cual: «obrador de panadería y pastelería (fabricación propia)». El pan y la bollería salen de sus hornos.',
	},
	{
		title: 'Público y hostelería',
		text: 'Venden al público y también al sector de la hostelería, «realizando cualquier tipo de pan y bollería que se necesite», según la ficha.',
	},
	{
		title: 'Tartas con foto',
		text: 'En las fotos del perfil aparecen tartas decoradas, una con foto comestible y otra de unicornio con nombre, además de bollos y napolitanas.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: 'Baguettes',
				note: 'Bandeja de baguettes recién hechas en el obrador, en las fotos del perfil.',
			},
			{
				name: 'Bollos de pan',
				note: 'Piezas redondas doradas sobre la rejilla del horno.',
			},
			{
				name: 'Pan por encargo',
				note: 'La ficha habla de hacer «cualquier tipo de pan» que necesite el cliente. La carta y los precios no se publican.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Napolitanas de chocolate',
				note: 'Hojaldres alargados con chocolate por encima, en la bandeja del obrador.',
			},
			{
				name: 'Berlinas de nata',
				note: 'Bañadas en chocolate y con nata rosa por encima.',
			},
			{
				name: 'Bollos glaseados',
				note: 'Bandeja de bollos brillantes, recién salidos del horno.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Tartas personalizadas',
				note: 'Con nombre, decoración de unicornio o foto comestible, en las fotos del perfil.',
			},
			{
				name: 'Tartas de chocolate',
				note: 'Cubiertas de chocolate y virutas, sobre el mármol del obrador.',
			},
			{
				name: 'Pastelitos y brownies',
				note: 'Bandejas de cuadraditos en filas, listos para el mostrador.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el OBRADOR de Panadería y Pastelería Florin & Gabriel?',
		a: 'En la calle Carraca, 5, local 20, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 5:00 a 22:30, en jornada continua. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 667 32 81 16. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el obrador o por teléfono.',
	},
	{
		q: '¿Es una tienda o un obrador?',
		a: 'Es un obrador con fabricación propia que también vende al público. La ficha explica que trabajan con el público y «principalmente» con el sector de la hostelería, y que hacen cualquier tipo de pan y bollería que se necesite.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y pastelería. En las fotos del perfil aparecen baguettes, bollos de pan, napolitanas de chocolate, berlinas de nata, bollos glaseados, tartas de chocolate, pastelitos y tartas personalizadas (con foto comestible o decoración de unicornio). La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hacen tartas personalizadas?',
		a: 'En la galería del perfil hay tartas con nombre, una decoración de unicornio y otra con foto comestible, así que sí se ven encargos personalizados. La ficha no indica cómo se piden ni cuánto cuestan: para eso, llama al 667 32 81 16.',
	},
	{
		q: '¿Trabajan con bares y restaurantes?',
		a: 'La descripción de la ficha dice que venden al público y «principalmente» al sector de la hostelería, con precios competitivos y adaptándose a los gustos comerciales del cliente. Para condiciones y pedidos, hay que llamar.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 3,7 sobre 5 con 9 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. Para pedidos de hostelería o encargos, la vía es el teléfono.',
	},
];
