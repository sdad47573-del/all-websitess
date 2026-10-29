/**
 * Datos de Panadería Naty — Poniente Norte, 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Naty, 37.8800597,-4.8153799,
 *   feature 0xd6d27000e47e191:0xfa181dc5cff42bbe.
 * - Categoría, valoración, teléfono, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica el número de la calle, ni web
 * propia, correo, redes, carta, precios, métodos de pago o reparto. Tampoco
 * muestra reseñas destacadas, así que la web no cita ninguna.
 */

export const BUSINESS = {
	name: 'Panadería Naty',
	shortName: 'Naty',
	mark: 'N',
	/** La ficha no publica número: solo la calle. */
	street: 'C. Centro de Salud',
	district: 'Poniente Norte',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '633 07 06 94',
	phoneHref: 'tel:+34633070694',
	rating: 4.8,
	reviewsCount: 12,
	siteUrl: 'https://panaderia-naty.vercel.app',
	geo: { lat: 37.8800597, lng: -4.8153799 },
	featureId: '0xd6d27000e47e191:0xfa181dc5cff42bbe',
	placeId: 'ChIJkeFHDgAnbQ0Rviv0z8UdGPo',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en Poniente Norte',
	description:
		'Panadería Naty, en la calle Centro de Salud (Poniente Norte, 14005 Córdoba). Pan, bollería y dulces. Abierta todos los días de 7:30 a 21:00. 4,8 sobre 5 en Google.',
	hoursSummary: 'Lunes a sábado 7:30–21:00 · domingos 7:30–18:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Naty/@37.8800597,-4.8153799,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d27000e47e191:0xfa181dc5cff42bbe!8m2!3d37.8800597!4d-4.8153799!16s%2Fg%2F11x333vfrv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=18017506197851876286',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8800597%2C-4.8153799',
	embed: 'https://maps.google.com/maps?q=37.8800597,-4.8153799&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8800597,-4.8153799',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '7:30–21:00' },
	{ day: 'Domingo', value: '7:30–18:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días, también los domingos, aunque con cierre más temprano. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Chucherías',
	'Golosinas',
	'Snacks',
	'Chocolates',
	'Recogida en tienda',
];

export const HIGHLIGHTS = [
	{
		title: 'Abierta todos los días',
		text: 'Abre de lunes a sábado de 7:30 a 21:00 y los domingos de 7:30 a 18:00, con una jornada muy amplia.',
	},
	{
		title: 'Mostrador de chucherías',
		text: 'Las fotos del perfil muestran un mostrador con tarros de golosinas y estanterías de snacks, chocolates y chucherías. La ficha, en cambio, la clasifica como panadería.',
	},
	{
		title: 'En Poniente Norte',
		text: 'Está en la calle Centro de Salud, en Poniente Norte (14005 Córdoba). La ficha no publica el número, así que el mapa de esta página lleva al punto exacto.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Chucherías',
		items: [
			{
				name: 'Golosinas a granel',
				note: 'En las fotos del perfil se ven tarros y cajas de golosinas de colores en el mostrador.',
			},
			{
				name: 'Chuches y caramelos',
				note: 'Bolsas y expositores de marcas de chucherías, en las mismas fotos.',
			},
			{
				name: 'Para llevar',
				note: 'La ficha no publica catálogo ni precios: cambian según el producto.',
			},
		],
	},
	{
		title: 'Snacks y chocolates',
		items: [
			{
				name: 'Snacks',
				note: 'Estanterías con bolsas de patatas y aperitivos, según las fotos del perfil.',
			},
			{
				name: 'Chocolates y dulces',
				note: 'Tabletas, barritas y expositor de chocolates en el local.',
			},
			{
				name: 'Sin precios publicados',
				note: 'Los carteles de las fotos llevan importes, pero cambian: esta web no los repite.',
			},
		],
	},
	{
		title: 'Panadería',
		items: [
			{
				name: 'Pan',
				note: 'La ficha de Google la clasifica como panadería. No publica qué panes tiene ni a qué precio.',
			},
			{
				name: 'Bollería y dulces',
				note: 'La ficha no publica catálogo: se pregunta en el mostrador.',
			},
			{
				name: 'Encargos',
				note: 'La ficha no detalla qué se puede encargar: se pregunta por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Naty?',
		a: 'En la calle Centro de Salud, en Poniente Norte (14005 Córdoba). La ficha de Google no publica el número, así que el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 7:30 a 21:00 y los domingos de 7:30 a 18:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 633 07 06 94. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha de Google la clasifica como panadería, aunque las fotos del perfil muestran sobre todo un mostrador de chucherías y estanterías de snacks, chocolates y golosinas. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha de Google marca de 7:30 a 18:00 los domingos, con cierre más temprano que el resto de la semana.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,8 sobre 5 con 12 reseñas en Google, que la clasifica como panadería.',
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
		q: '¿Se pueden hacer encargos?',
		a: 'La ficha no publica catálogo ni plazos de encargo. Lo mejor es llamar al 633 07 06 94 y preguntar.',
	},
];
