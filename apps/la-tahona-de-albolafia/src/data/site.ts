/**
 * Datos de La Tahona de Albolafia — Poniente Norte, 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Tahona de Albolafia,
 *   37.8853227,-4.8147552, feature 0xd6cd8abf43d055b:0x3b0e10c465d1b7fb.
 * - Categorías, valoración, reseñas, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web propia, correo,
 * redes, carta, precios, métodos de pago ni reparto. El surtido se describe con
 * las fotos del perfil y lo que cuentan las reseñas. La ficha sí indica que no
 * hay acceso para sillas de ruedas.
 */

export const BUSINESS = {
	name: 'La Tahona de Albolafia',
	shortName: 'La Tahona',
	mark: 'T',
	street: 'C. María la Talegona, 7',
	district: 'Poniente Norte',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.3,
	reviewsCount: 11,
	siteUrl: 'https://la-tahona-de-albolafia.vercel.app',
	geo: { lat: 37.8853227, lng: -4.8147552 },
	featureId: '0xd6cd8abf43d055b:0x3b0e10c465d1b7fb',
	placeId: 'ChIJWwU99KvYbA0R-7fRZcQQDjs',
	googleCategory: 'Panadería y pastelería',
	tagline: 'Pan y dulces en Poniente Norte',
	description:
		'La Tahona de Albolafia, panadería y pastelería en la calle María la Talegona, 7 (Poniente Norte, 14005 Córdoba). Pan y dulces, abierta todos los días de 8:30 a 15:30 y de 17:00 a 21:00. 4,3 sobre 5 en Google.',
	hoursSummary: 'Todos los días 8:30–15:30 y 17:00–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Tahona+de+Albolafia/@37.8853227,-4.8147552,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cd8abf43d055b:0x3b0e10c465d1b7fb!8m2!3d37.8853227!4d-4.8147552!16s%2Fg%2F11dxld03yt?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4257542685263296507',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8853227%2C-4.8147552',
	embed: 'https://maps.google.com/maps?q=37.8853227,-4.8147552&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8853227,-4.8147552',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '8:30–15:30 · 17:00–21:00' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días, con cierre a mediodía. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene pasarse o mirar la ficha antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Palmeras',
	'Tartas',
	'Tartas personalizadas',
	'Bollería',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan y pastelería',
		text: 'La ficha de Google la clasifica como panadería y pastelería. Una reseña lo resume así: «excelente pan y dulces».',
	},
	{
		title: 'Palmeras y tartas',
		text: 'En las fotos del perfil se ven palmeras bañadas de chocolate, bandejas de pasteles variados y tartas de nata y chocolate.',
	},
	{
		title: 'Tartas de cumpleaños',
		text: 'Una de las fotos enseña una tarta con una lámina de dibujos animados y la palabra «Felicidades» escrita a mano.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: 'Pan del día',
				note: '«Excelente pan», según una de las reseñas de Google.',
			},
			{
				name: 'Barras y piezas de horno',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo del día.',
			},
			{
				name: 'Pan para llevar',
				note: 'La tahona abre de 8:30 a 15:30 y de 17:00 a 21:00, todos los días.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Palmeras de chocolate',
				note: 'En las bandejas del perfil: bañadas de chocolate, con y sin virutas.',
			},
			{
				name: 'Tartas y pasteles',
				note: 'Bandejas de pasteles variados y tartas de nata, chocolate y fruta.',
			},
			{
				name: 'Dulces',
				note: '«Pan y dulces», destacan las reseñas del perfil.',
			},
		],
	},
	{
		title: 'Encargos y tienda',
		items: [
			{
				name: 'Tartas de cumpleaños',
				note: 'En las fotos aparece una tarta con lámina de dibujos y «Felicidades» escrito a mano.',
			},
			{
				name: 'Chocolates y golosinas',
				note: 'Una vitrina del local con tabletas y bombones, según las fotos del perfil.',
			},
			{
				name: 'Para llevar',
				note: 'Sin precios publicados en la ficha de Google.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tahona de Albolafia?',
		a: 'En la calle María la Talegona, 7, en Poniente Norte (14005 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:30 a 15:30 y de 17:00 a 21:00, con cierre a mediodía. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en la propia tienda; para la ubicación exacta, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces y pastelería, según la ficha, las fotos del perfil y las reseñas de Google. En las fotos se ven palmeras bañadas de chocolate, bandejas de pasteles variados, tartas de nata y chocolate y una tarta de cumpleaños personalizada. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que no hay acceso para sillas de ruedas, ni aparcamiento adaptado, ni aseo ni asientos adaptados. Esta página recoge ese dato tal cual; si necesitas una condición concreta, conviene comprobarla en el local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 11 reseñas en Google, que la clasifica como panadería y pastelería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en la tienda.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha marca el mismo horario todos los días: de 8:30 a 15:30 y de 17:00 a 21:00, domingo incluido.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'En las fotos del perfil aparece una tarta de cumpleaños personalizada. La ficha no publica catálogo ni plazos de encargo; al no publicar teléfono, lo mejor es preguntar directamente en la tienda.',
	},
];
