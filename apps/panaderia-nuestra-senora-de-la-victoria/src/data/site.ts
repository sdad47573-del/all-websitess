/**
 * Datos de Panadería Nuestra Señora de la Victoria — C. San Millán, 3
 * (Distrito Centro, 29013 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Nuestra Señora de la Victoria,
 *   36.7268686,-4.4200622, feature 0xd72f7bf2d652861:0x78a227e539a4c2c4.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia,
 * correo ni redes sociales. El mostrador recoge solo lo que muestran las fotos
 * del perfil y lo que cuentan las reseñas, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería Nuestra Señora de la Victoria',
	shortName: 'La Victoria',
	mark: 'V',
	street: 'C. San Millán, 3',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29013',
	country: 'ES',
	phone: '627 10 45 06',
	phoneHref: 'tel:+34627104506',
	rating: 4.9,
	reviewsCount: 263,
	siteUrl: 'https://panaderia-nuestra-senora-de-la-victoria.vercel.app',
	geo: { lat: 36.7268686, lng: -4.4200622 },
	featureId: '0xd72f7bf2d652861:0x78a227e539a4c2c4',
	placeId: 'ChIJYShlLb_3cg0RxMKkOeUnong',
	googleCategory: 'Panadería',
	tagline: 'Panadería, pastelería y desayunos en el Distrito Centro de Málaga',
	description:
		'Panadería Nuestra Señora de la Victoria, en la calle San Millán, 3 (Distrito Centro, 29013 Málaga). Pan, dulces, bocadillos y desayunos. Teléfono 627 10 45 06. 4,9 sobre 5 en Google.',
	hoursSummary: 'L–V 8:00–15:00 · S 9:00–14:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Nuestra+Se%C3%B1ora+de+la+Victoria/@36.7268686,-4.4200622,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7bf2d652861:0x78a227e539a4c2c4!8m2!3d36.7268686!4d-4.4200622!16s%2Fg%2F11bwh9zdvk?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=8692554096246571716',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7268686%2C-4.4200622',
	embed: 'https://maps.google.com/maps?q=36.7268686,-4.4200622&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7268686,-4.4200622',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00' },
	{ day: 'Sábado', value: '9:00–14:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

/** Lo que anuncian el rótulo y el toldo, y lo que muestran las fotos. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Bocadillos',
	'Café y zumos',
	'Desayunos en el local',
	'Roscones de Reyes',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y pastelería',
		text: 'El rótulo redondo de la fachada lo dice: «Ntra. Sra. de la Victoria · Panadería y pastelería». El toldo azul añade «Panadería».',
	},
	{
		title: 'Mesa para desayunar',
		text: 'Dentro hay mesas y vitrinas. Las reseñas de Google hablan del bocadillo de tortilla, de los bocatas y del zumo de naranja recién hecho.',
	},
	{
		title: '4,9 sobre 5',
		text: 'Con 263 reseñas en Google, es una de las panaderías mejor valoradas del centro de Málaga.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Para desayunar',
		items: [
			{
				name: 'Café con leche',
				note: 'En vaso, en las fotos del perfil, junto a los bocadillos y los dulces.',
			},
			{
				name: 'Bocadillos',
				note: 'El local tiene una lista escrita de bocadillos. Las reseñas destacan el de tortilla y el de jamón.',
			},
			{
				name: 'Zumo de naranja',
				note: '«Muy fresco», según una de las reseñas de Google.',
			},
		],
	},
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan del día',
				note: 'La ficha no publica variedades ni precios; el surtido cambia a lo largo de la mañana.',
			},
			{
				name: 'Roscones de Reyes',
				note: 'En cajas, con fruta escarchada, en el mostrador del local.',
			},
			{
				name: 'Cuadrados de azúcar y canela',
				note: 'Bandeja de dulces cuadrados con azúcar por encima.',
			},
		],
	},
	{
		title: 'La vitrina',
		items: [
			{
				name: 'Dulces de bandeja',
				note: 'En la vitrina, junto a la bollería y los bocadillos.',
			},
			{
				name: 'Bollería',
				note: 'Piezas para el desayuno, en las bandejas del mostrador.',
			},
			{
				name: 'Dulces de temporada',
				note: 'Los roscones de Reyes aparecen en el perfil en plena campaña.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Nuestra Señora de la Victoria?',
		a: 'En la calle San Millán, 3, en el Distrito Centro de Málaga (29013). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 15:00; el sábado, de 9:00 a 14:00, y el domingo cierra. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 627 10 45 06. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí. En las fotos del perfil se ven mesas y sillas dentro del local, con cafés, bocadillos y dulces. Las reseñas de Google mencionan el bocadillo de tortilla, los bocatas y el zumo de naranja.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces y bocadillos. En las fotos del perfil aparecen bandejas de dulces cuadrados con azúcar, roscones de Reyes en cajas, vitrinas con bollería y una lista de bocadillos escrita en el local. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden roscones de Reyes?',
		a: 'Sí. En la galería del perfil hay roscones con fruta escarchada, tanto en bandeja como en cajas. La ficha no indica cómo se encargan; para eso, llama al 627 10 45 06.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca aparcamiento adaptado para sillas de ruedas. No publica información sobre el acceso, el mostrador o el aseo, así que esta página no la da por hecha: si necesitas un acceso concreto, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,9 sobre 5 con 263 reseñas en Google, que la clasifica como panadería.',
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
