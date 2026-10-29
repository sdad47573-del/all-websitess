/**
 * Datos de Panadería ALMAFARA — Av. de José Ortega y Gasset, 139,
 * Cruz de Humilladero, 29006 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería ALMAFARA, 36.7098125,-4.4531344,
 *   feature 0xd72f7d0b7cc0f73:0x173c517b6fad494c.
 * - Categorías, descripción, valoración, reseñas y horario: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, correo, redes,
 * carta ni precios. El mapa y las indicaciones llevan al punto exacto. El
 * mostrador recoge solo lo que muestran las fotos y lo que cuentan la ficha y
 * las reseñas, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería ALMAFARA',
	shortName: 'Almafara',
	mark: 'A',
	street: 'Av. de José Ortega y Gasset, 139',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.6,
	reviewsCount: 13,
	siteUrl: 'https://panaderia-almafara.vercel.app',
	geo: { lat: 36.7098125, lng: -4.4531344 },
	featureId: '0xd72f7d0b7cc0f73:0x173c517b6fad494c',
	placeId: 'ChIJcw_Mt9D3cg0RTEmtb3tRPBc',
	googleCategory: 'Panadería',
	tagline: 'Panadería, charcutería y tienda de alimentación en Cruz de Humilladero',
	description:
		'Panadería ALMAFARA, panadería, charcutería y tienda de alimentación en la Avenida de José Ortega y Gasset, 139 (Cruz de Humilladero, 29006 Málaga). Pan, embutidos, fruta y verdura, productos de despensa y asado de pimientos y batatas. Abierta todos los días. 4,6 sobre 5 en Google.',
	hoursSummary: 'L–V 8:30–15:00 · S 9:00–15:00 · D 9:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+ALMAFARA/@36.7098125,-4.4531344,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7d0b7cc0f73:0x173c517b6fad494c!8m2!3d36.7098125!4d-4.4531344!16s%2Fg%2F11j0t8tvb6?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=1674302752071436620',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7098125%2C-4.4531344',
	embed: 'https://maps.google.com/maps?q=36.7098125,-4.4531344&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7098125,-4.4531344',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–15:00' },
	{ day: 'Sábado', value: '9:00–15:00' },
	{ day: 'Domingo', value: '9:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, con jornada de mañana todos los días. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene mirar la ficha o pasarse antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Charcutería',
	'Tienda de alimentación',
	'Fruta y verdura',
	'Asado de pimientos',
	'Asado de batatas',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y charcutería',
		text: 'El rótulo de la fachada anuncia «Panadería - Charcutería Almafara». Google clasifica además el negocio como tienda de alimentación.',
	},
	{
		title: 'Pimientos asados',
		text: 'En la puerta hay una pizarra que anuncia «Pimientos asados». La descripción de la ficha añade el asado de batatas.',
	},
	{
		title: 'La compra del día',
		text: 'Las fotos del perfil muestran cajas de fruta y verdura en la puerta y estanterías con productos de despensa dentro.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan y charcutería',
		items: [
			{
				name: 'Pan del día',
				note: 'Panadería de barrio: el pan se vende en el mostrador mientras dura la mañana.',
			},
			{
				name: 'Embutidos y charcutería',
				note: 'El rótulo de la fachada anuncia charcutería, junto a la panadería.',
			},
		],
	},
	{
		title: 'La tienda',
		items: [
			{
				name: 'Fruta y verdura',
				note: 'En las fotos se ven cajas de naranjas, plátanos, aguacates y sandías en la puerta.',
			},
			{
				name: 'Productos de despensa',
				note: 'Estanterías con conservas, paquetes y básicos, y una vitrina congeladora.',
			},
		],
	},
	{
		title: 'El asado',
		items: [
			{
				name: 'Pimientos asados',
				note: 'La pizarra de la puerta lo anuncia y la descripción de la ficha también lo menciona.',
			},
			{
				name: 'Batatas asadas',
				note: 'El mismo texto de la ficha menciona las batatas asadas junto a los pimientos.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería ALMAFARA?',
		a: 'En la Avenida de José Ortega y Gasset, 139, en Cruz de Humilladero (29006 Málaga). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 8:30 a 15:00, los sábados de 9:00 a 15:00 y los domingos de 9:00 a 14:30. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en el propio local; para la ubicación exacta, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, embutidos y charcutería, fruta y verdura, productos de despensa y asado de pimientos y batatas. El rótulo anuncia «Panadería - Charcutería Almafara», Google la clasifica como panadería y tienda de alimentación, y la propia ficha se describe como «tienda alimentación y asado de pimientos y batatas».',
	},
	{
		q: '¿Es charcutería?',
		a: 'Sí. El rótulo de la fachada, que aparece en las fotos del perfil, dice «Panadería - Charcutería Almafara». La ficha de Google la clasifica como panadería y tienda de alimentación.',
	},
	{
		q: '¿Venden fruta y verdura?',
		a: 'En las fotos del perfil se ven cajas y expositores con naranjas, plátanos, aguacates, sandías y otras frutas y verduras en la puerta del local. La ficha no detalla surtido ni precios.',
	},
	{
		q: '¿Asan pimientos y batatas?',
		a: 'Sí. Es lo que anuncia la descripción que el propio establecimiento publica en su ficha de Google. La ficha no indica precios ni horarios concretos para el asado; se pregunta en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad, mostrador o aseo, así que esta página no la afirma. La entrada se ve a pie de calle en las fotos, pero conviene preguntar en el local si necesitas acceso adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 13 reseñas en Google. Las reseñas destacadas hablan sobre todo del trato de la dueña y de la atención.',
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
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha marca los domingos de 9:00 a 14:30, y de lunes a viernes de 8:30 a 15:00. Los sábados abre a las 9:00.',
	},
];
