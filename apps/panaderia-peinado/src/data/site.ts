/**
 * Datos de Panadería Peinado — Av. de Carlos Haya, 76 (Cruz de Humilladero,
 * 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Peinado, 36.7226087,-4.4481104,
 *   feature 0xd72f70d6cce3bc5:0x28b97608255750e3.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia,
 * correo ni redes sociales. El mostrador recoge solo lo que muestran las fotos
 * del perfil, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería Peinado',
	shortName: 'Peinado',
	mark: 'P',
	street: 'Av. de Carlos Haya, 76',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '951 90 02 21',
	phoneHref: 'tel:+34951900221',
	rating: 4.1,
	reviewsCount: 51,
	siteUrl: 'https://panaderia-peinado.vercel.app',
	geo: { lat: 36.7226087, lng: -4.4481104 },
	featureId: '0xd72f70d6cce3bc5:0x28b97608255750e3',
	placeId: 'ChIJxTvObA33cg0R41BXJQh2uSg',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería artesanal en Cruz de Humilladero',
	description:
		'Panadería Peinado, en la avenida de Carlos Haya, 76 (Cruz de Humilladero, 29010 Málaga). Panadería y pastelería artesanal con obrador propio. Teléfono 951 90 02 21. 4,1 sobre 5 en Google.',
	hoursSummary: 'Todos los días 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Peinado/@36.7226087,-4.4481104,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70d6cce3bc5:0x28b97608255750e3!8m2!3d36.7226087!4d-4.4481104!16s%2Fg%2F11fswdffng?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=2934506409566884067',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7226087%2C-4.4481104',
	embed: 'https://maps.google.com/maps?q=36.7226087,-4.4481104&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7226087,-4.4481104',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '8:00–15:00' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

/** Lo que anuncia la ficha y lo que se ve en el mostrador. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería artesanal',
	'Bollería',
	'Roscones de Reyes',
	'Magdalenas',
	'Dulces de temporada',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y pastelería',
		text: 'El propio obrador se define así en su ficha de Google: panadería y pastelería artesanal, con el trabajo de cada día.',
	},
	{
		title: 'Dos obradores en Málaga',
		text: 'La ficha anuncia un segundo local en la zona de Carranque, en la calle Pedro Gómez Chaix, 3.',
	},
	{
		title: 'Abierto los siete días',
		text: 'Abre todos los días de 8:00 a 15:00, también sábado y domingo, así que el pan recién hecho se compra por la mañana.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan del día',
		items: [
			{
				name: 'Hogaza',
				note: 'De corteza gruesa y greña abierta, en las fotos del perfil recién salida del horno.',
			},
			{
				name: 'Bollos de pan',
				note: 'Bandeja de piezas redondas, con la harina aún encima.',
			},
			{
				name: 'Pan para el día',
				note: 'La ficha no publica variedades ni precios; el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Napolitanas de chocolate',
				note: 'En la bandeja del obrador, con el chocolate por encima.',
			},
			{
				name: 'Cañas de nata',
				note: 'Masa alargada rellena de nata, preparadas en el obrador.',
			},
			{
				name: 'Dulces de crema y coco',
				note: 'Rectángulos de hojaldre con crema y coco rallado.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Roscones de Reyes',
				note: 'Con fruta escarchada y azúcar, en la foto principal del perfil.',
			},
			{
				name: 'Magdalenas',
				note: 'En cápsula de papel, con azúcar por encima.',
			},
			{
				name: 'Tartas y dulces de temporada',
				note: 'En el mostrador aparecen tartas decoradas de Navidad y dulces de Halloween.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Peinado?',
		a: 'En la avenida de Carlos Haya, 76, en el barrio de Cruz de Humilladero (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:00 a 15:00, de lunes a domingo. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 951 90 02 21. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Tiene otro local?',
		a: 'Sí. La descripción de la ficha de Google indica que también están en la zona de Carranque, en la calle Pedro Gómez Chaix, 3.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y pastelería. En las fotos del perfil aparecen hogazas y bollos de pan, napolitanas de chocolate, cañas de nata, dulces de crema con coco, magdalenas, roscones de Reyes y tartas decoradas de temporada. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden roscones de Reyes?',
		a: 'Sí. En la galería del perfil hay una bandeja de roscones con fruta escarchada y azúcar. La ficha no indica cómo se encargan ni si hay que reservarlos; para eso, llama al 951 90 02 21.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas y aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,1 sobre 5 con 51 reseñas en Google, que la clasifica como panadería.',
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
