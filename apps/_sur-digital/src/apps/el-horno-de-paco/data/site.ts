/**
 * Datos de El Horno de Paco – Panadería y Pastelería Artesanal Málaga —
 * C. Sta. Marta, 7 (Carretera de Cádiz, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: El Horno de Paco – Panadería y Pastelería
 *   Artesanal Málaga, 36.7115054,-4.440794, feature
 *   0xd72f74097c42de7:0xacb697bf82dbf764.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web ni
 * métodos de pago. El mostrador recoge solo lo que muestran las fotos del
 * perfil y lo que la ficha indica, sin importes.
 */

export const BUSINESS = {
	name: 'El Horno de Paco – Panadería y Pastelería Artesanal',
	shortName: 'El Horno de Paco',
	mark: 'P',
	street: 'C. Sta. Marta, 7',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '607 82 42 51',
	phoneHref: 'tel:+34607824251',
	rating: 5,
	reviewsCount: 857,
	siteUrl: 'https://www.sur-digital.com/el-horno-de-paco',
	geo: { lat: 36.7115054, lng: -4.440794 },
	featureId: '0xd72f74097c42de7:0xacb697bf82dbf764',
	placeId: 'ChIJ5y3El0D3cg0RZPfbgr-Xtqw',
	googleCategory: 'Panadería, pastelería y tienda de tartas',
	tagline: 'Panadería y pastelería artesanal en Carretera de Cádiz',
	description:
		'El Horno de Paco, panadería y pastelería artesanal en C. Sta. Marta, 7 (Carretera de Cádiz, 29006 Málaga). Pan, dulces y tartas. Teléfono 607 82 42 51. 5 sobre 5 en Google.',
	hoursSummary: 'L–S 8:00–14:30 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Horno+de+Paco+%E2%80%93+Panader%C3%ADa+y+Pasteler%C3%ADa+Artesanal+M%C3%A1laga/@36.7115054,-4.440794,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f74097c42de7:0xacb697bf82dbf764!8m2!3d36.7115054!4d-4.440794!16s%2Fg%2F11yp7gs7h7?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=12445301469074945892',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7115054%2C-4.440794',
	embed: 'https://maps.google.com/maps?q=36.7115054,-4.440794&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7115054,-4.440794',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) podría ser diferente; conviene llamar antes de ir.';

/** Comentario publicado en la ficha de Google. */
export const REVIEW_QUOTE =
	'Me encanta la amabilidad de los trabajadores. Pan y tartas de queso muy buenas.';

/** Lo que muestra la ficha y las fotos del local. */
export const SERVICIOS = [
	'Pan',
	'Pastelería artesanal',
	'Tartas',
	'Tartas de queso',
	'Brownies',
	'Tienda de tartas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'La casa se presenta como panadería y pastelería artesanal, y la ficha de Google la clasifica como panadería.',
	},
	{
		title: 'Las tartas de queso',
		text: 'En el mostrador hay tartas de queso enteras y porciones, además de mini tartas individuales en su papel.',
	},
	{
		title: 'La pastelería',
		text: 'Tartas, porciones y brownies de chocolate con pistacho, como los de las fotos del perfil.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'La panadería',
		items: [
			{
				name: 'Pan',
				note: 'La casa se presenta como panadería y pastelería artesanal; una reseña habla del pan junto a las tartas.',
			},
			{
				name: 'Elaboración artesanal',
				note: 'Está en el propio nombre de la casa: «Panadería y Pastelería Artesanal».',
			},
		],
	},
	{
		title: 'La pastelería',
		items: [
			{
				name: 'Tartas de queso',
				note: 'Enteras y porciones en el mostrador; una reseña las destaca como «muy buenas».',
			},
			{
				name: 'Tartas',
				note: 'La ficha clasifica el negocio también como tienda de tartas.',
			},
			{
				name: 'Mini tartas',
				note: 'Individuales, en su papel, en la bandeja del mostrador.',
			},
		],
	},
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Brownie de chocolate y pistacho',
				note: 'En las fotos del perfil: plancha de brownie con pistachos y chocolate fundido por encima.',
			},
			{
				name: 'Tartas decoradas',
				note: 'En el mostrador aparecen tartas decoradas y porciones, junto a las mini tartas.',
			},
			{
				name: 'Dulces para llevar',
				note: 'Porciones y piezas individuales, en cajas y papeles del propio obrador.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Horno de Paco?',
		a: 'En la calle Santa Marta, 7, en la zona de Carretera de Cádiz (29006 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:00 a 14:30. El domingo cierra. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 607 82 42 51. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre el mostrador, el aseo o el aparcamiento, así que esta página no la afirma.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La casa se presenta como panadería y pastelería artesanal, y la ficha la clasifica como panadería, pastelería y tienda de tartas. En las fotos del perfil aparecen tartas de queso enteras y porciones, mini tartas individuales, tartas decoradas y brownies de chocolate con pistacho. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con 857 reseñas en Google. Una de ellas destaca «la amabilidad de los trabajadores» y que el pan y las tartas de queso están «muy buenos».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
