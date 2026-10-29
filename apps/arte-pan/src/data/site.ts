/**
 * Datos de Arte Pan — Poniente Sur, 14004 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Arte Pan, 37.8777758,-4.7910501,
 *   feature 0xd6d20a1c7a5ec5f:0xc3905585da5d32a2.
 * - Categoría, valoración, reseñas, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web propia, correo,
 * redes, carta, precios, métodos de pago ni reparto. El surtido se describe con
 * las fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Arte Pan',
	shortName: 'Arte Pan',
	mark: 'A',
	street: 'Av. del Aeropuerto, 11',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14004',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.6,
	reviewsCount: 21,
	siteUrl: 'https://arte-pan.vercel.app',
	geo: { lat: 37.8777758, lng: -4.7910501 },
	featureId: '0xd6d20a1c7a5ec5f:0xc3905585da5d32a2',
	placeId: 'ChIJX-ylx6EgbQ0RojJd2oVVkMM',
	googleCategory: 'Panadería',
	tagline: 'Panadería y desayunos en Poniente Sur',
	description:
		'Arte Pan, panadería en la Avenida del Aeropuerto, 11 (Poniente Sur, 14004 Córdoba). Pan, bollería y dulces, con desayunos y tapas. De lunes a viernes de 8:00 a 20:00. 4,6 sobre 5 en Google.',
	hoursSummary: 'Lunes a viernes 8:00–20:00 · sábados 9:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Arte+Pan/@37.8777758,-4.7910501,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20a1c7a5ec5f:0xc3905585da5d32a2!8m2!3d37.8777758!4d-4.7910501!16s%2Fg%2F11cmg1ck32?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=14088125864745288354',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8777758%2C-4.7910501',
	embed: 'https://maps.google.com/maps?q=37.8777758,-4.7910501&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8777758,-4.7910501',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–20:00' },
	{ day: 'Sábado', value: '9:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. En la fachada hay una pizarra con un «horario de invierno» que no coincide con el de la ficha: conviene confirmarlo antes de ir. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte además de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Café',
	'Desayunos',
	'Tostadas',
	'Bocadillos',
	'Pan sin gluten',
	'Leche sin lactosa',
	'Terraza',
];

export const HIGHLIGHTS = [
	{
		title: 'Café, pan y dulces',
		text: 'El rótulo de la fachada anuncia «Arte Pan · Café-Pan-Dulces-Bocadillos». La ficha de Google lo clasifica como panadería.',
	},
	{
		title: 'Pan sin gluten',
		text: 'La pizarra de la entrada avisa: «tenemos leche sin lactosa, pan s/n gluten y pan de pasas y nueces, pan de limón y mucho más».',
	},
	{
		title: 'Tostadas y terraza',
		text: 'En las fotos del perfil se ven tostadas con tomate y aguacate, café con leche y zumo, y una terraza con mesas rojas en la avenida.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panadería',
		items: [
			{
				name: 'Pan del día',
				note: 'Una de las reseñas recomienda el local «para comprar pan».',
			},
			{
				name: 'Pan sin gluten',
				note: 'Lo anuncia la pizarra de la entrada: «pan s/n gluten».',
			},
			{
				name: 'Pan de pasas y nueces',
				note: 'En la misma pizarra, junto al «pan de limón y mucho más».',
			},
		],
	},
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Tostadas variadas',
				note: 'La pizarra anuncia «variedad en tostadas». En las fotos se ven con tomate y aguacate.',
			},
			{
				name: 'Café con leche y zumo',
				note: 'En la mesa de una de las fotos del perfil, junto a las tostadas.',
			},
			{
				name: 'Leche sin lactosa',
				note: 'La pizarra lo indica expresamente: «tenemos leche sin lactosa».',
			},
		],
	},
	{
		title: 'Barra y bocadillos',
		items: [
			{
				name: 'Bocadillos',
				note: 'El rótulo de la fachada los anuncia, y la pizarra los repite al final.',
			},
			{
				name: 'Hamburguesa mixta y maxibaguettes',
				note: 'Aparecen en los carteles de la fachada. La ficha no publica precios, así que esta web no los indica.',
			},
			{
				name: 'Cañas y tapas',
				note: '«Para tomar una caña con una tapa», cuenta una reseña de Google.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Arte Pan?',
		a: 'En la Avenida del Aeropuerto, 11, en Poniente Sur (14004 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica de lunes a viernes de 8:00 a 20:00 y los sábados de 9:00 a 14:30, con el domingo cerrado. La pizarra de la fachada anuncia un «horario de invierno» distinto, así que conviene confirmarlo antes de ir. El 1 de noviembre (Día de Todos los Santos) Google advierte además de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en el propio local; para la ubicación, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y dulces, según la ficha y las reseñas de Google. La pizarra de la entrada añade tostadas variadas, pan sin gluten, pan de pasas y nueces, pan de limón, gofres y bocadillos, y el rótulo de la fachada anuncia café y bocadillos.',
	},
	{
		q: '¿Hay pan sin gluten?',
		a: 'Sí. La pizarra de la entrada avisa de que tienen «pan s/n gluten», y también leche sin lactosa. La ficha no detalla la carta de alérgenos, así que conviene preguntar en el local.',
	},
	{
		q: '¿Se puede desayunar o tomar algo?',
		a: 'Las reseñas de Google lo recomiendan «tanto para desayunar, como para tomar algo a mediodía» y mencionan «tomar una caña con una tapa». En las fotos del perfil se ven tostadas con tomate y aguacate, café con leche y zumo, y una terraza con mesas en la avenida.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'En una de las fotos del perfil se ve una terraza con mesas y sillas rojas en la acera, delante del local. La ficha de Google no la detalla ni publica número de mesas.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 21 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el local.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
