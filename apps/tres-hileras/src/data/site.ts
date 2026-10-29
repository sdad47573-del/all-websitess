/**
 * Datos de Tres Hileras — C. Manuel Cano "El Pireo", 1, Poniente Sur, 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Tres Hileras, 37.8785801,-4.7965971,
 *   feature 0xd6d210006db27a3:0xfcdaf6cf46ecfb50.
 * - Categoría, valoración, reseñas, teléfono, horario, accesibilidad y
 *   descripción del negocio: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con la
 * descripción del negocio, las fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Tres Hileras',
	shortName: 'Tres Hileras',
	mark: '3',
	street: 'C. Manuel Cano "El Pireo", 1',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '957 91 47 89',
	phoneHref: 'tel:+34957914789',
	rating: 4.2,
	reviewsCount: 246,
	siteUrl: 'https://tres-hileras.vercel.app',
	geo: { lat: 37.8785801, lng: -4.7965971 },
	featureId: '0xd6d210006db27a3:0xfcdaf6cf46ecfb50',
	placeId: 'ChIJoyfbBgAhbQ0RUPvsRs_22vw',
	googleCategory: 'Panadería, cafetería y pastelería',
	tagline: 'Panadería, pastelería y cafetería con terraza',
	description:
		'Tres Hileras, en la calle Manuel Cano «El Pireo», 1 (Poniente Sur, 14005 Córdoba). Panadería artesanal, pastelería artesanal y cafetería con amplia terraza. Abre todos los días: de 7:30 a 20:30 de lunes a viernes y de 8:30 a 20:30 sábados y domingos. 4,2 sobre 5 con 246 reseñas en Google.',
	hoursSummary: 'L–V 7:30–20:30 · sábados y domingos 8:30–20:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tres+Hileras/@37.8785801,-4.7965971,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d210006db27a3:0xfcdaf6cf46ecfb50!8m2!3d37.8785801!4d-4.7965971!16s%2Fg%2F11vsfg9cqt?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=18220146612589362000',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8785801%2C-4.7965971',
	embed: 'https://maps.google.com/maps?q=37.8785801,-4.7965971&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8785801,-4.7965971',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–20:30' },
	{ day: 'Sábado', value: '8:30–20:30' },
	{ day: 'Domingo', value: '8:30–20:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días y sin cierre a mediodía, así que se puede ir a desayunar, a comprar el pan o a merendar. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería artesanal',
	'Pastelería artesanal',
	'Cafetería',
	'Terraza',
	'Bollería',
	'Desayunos',
	'Meriendas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan artesanal variado',
		text: '«Ofrecen deliciosos y variados panes artesanales, buen surtido de bollería», cuenta una reseña. La ficha se presenta como panadería y pastelería artesanal.',
	},
	{
		title: 'Amplia terraza',
		text: 'La descripción del negocio en Google lo anuncia así: «Panadería Artesanal, Pastelería Artesanal y Cafetería con amplia terraza».',
	},
	{
		title: 'Desayunos y meriendas',
		text: 'Abre de 7:30 a 20:30 sin cerrar a mediodía, así que la cafetería cubre desayuno, aperitivo y merienda. «Pasamos ayer a desayunar y nos llevamos una grata sorpresa», dice una reseña.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Panes artesanales',
				note: 'La ficha los describe como «deliciosos y variados», según una reseña; se elaboran en el obrador del local.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo del día.',
			},
		],
	},
	{
		title: 'Pastelería y bollería',
		items: [
			{
				name: 'Bollería',
				note: '«Buen surtido de bollería», según las reseñas de Google.',
			},
			{
				name: 'Pastelería artesanal',
				note: 'La ficha se presenta como pastelería artesanal; no publica catálogo ni precios.',
			},
		],
	},
	{
		title: 'Cafetería y terraza',
		items: [
			{
				name: 'Desayunos',
				note: 'Hay servicio de mesa y terraza; una reseña cuenta que fue a desayunar y se llevó «una grata sorpresa».',
			},
			{
				name: 'Café y meriendas',
				note: 'La ficha no publica carta ni precios, así que esta web no los indica.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tres Hileras?',
		a: 'En la calle Manuel Cano «El Pireo», 1, en Poniente Sur (14005 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días y sin cierre a mediodía: de 7:30 a 20:30 de lunes a viernes y de 8:30 a 20:30 sábados y domingos. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 91 47 89. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan artesanal, pastelería artesanal y bollería, y también café y desayunos en la cafetería. La ficha lo resume como «Panadería Artesanal, Pastelería Artesanal y Cafetería con amplia terraza». No publica precios.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La descripción del negocio en Google habla de una «amplia terraza», y las fotos del perfil muestran las mesas del exterior. La ficha no indica cuántas mesas tiene ni si se puede reservar.',
	},
	{
		q: '¿Se puede desayunar o merendar?',
		a: 'Sí: es cafetería y abre de 7:30 a 20:30 sin cerrar a mediodía, así que cubre desayuno, aperitivo y merienda. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Indica que no hay aparcamiento accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,2 sobre 5 con 246 reseñas en Google. Las hay muy buenas, sobre el pan, la bollería y el desayuno, y alguna negativa: una clienta se queja de más de 50 minutos esperando sin que le atendieran.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
];
