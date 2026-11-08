/**
 * Datos de Panadería Nuestra Señora del Rocío — Cañada Real Soriana, 244, 14710 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Nuestra Señora del Rocío,
 *   37.846309,-4.9212038, feature 0xd6d2853014d583f:0x8cfa2ea79e789438.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con las
 * fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería Nuestra Señora del Rocío',
	shortName: 'Ntra. Sra. del Rocío',
	mark: 'R',
	street: 'C. Cañada Real Soriana, 244',
	district: 'Córdoba',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14710',
	country: 'ES',
	phone: '957 45 85 95',
	phoneHref: 'tel:+34957458595',
	rating: 4.5,
	reviewsCount: 457,
	siteUrl: 'https://www.sur-digital.com/panaderia-nuestra-senora-del-rocio',
	geo: { lat: 37.846309, lng: -4.9212038 },
	featureId: '0xd6d2853014d583f:0x8cfa2ea79e789438',
	googleCategory: 'Panadería',
	tagline: 'Pan recién hecho en la Cañada Real Soriana',
	description:
		'Panadería Nuestra Señora del Rocío, en la Cañada Real Soriana, 244 (14710 Córdoba). Pan, bollería, dulces y tartas. Abre de lunes a viernes de 6:30 a 15:00, y sábados y domingos de 7:00 a 14:30. 4,5 sobre 5 con 457 reseñas en Google.',
	hoursSummary: 'L–V 6:30–15:00 · sábados y domingos 7:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Nuestra+Se%C3%B1ora+del+Roc%C3%ADo/@37.846309,-4.9212038,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d2853014d583f:0x8cfa2ea79e789438!8m2!3d37.846309!4d-4.9212038!16s%2Fg%2F1z44b4cyc?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=10158483206940693560',
	reviews: 'https://www.google.com/maps?cid=10158483206940693560',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.846309%2C-4.9212038',
	embed: 'https://maps.google.com/maps?q=37.846309,-4.9212038&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.846309,-4.9212038',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:30–15:00' },
	{ day: 'Sábado', value: '7:00–14:30' },
	{ day: 'Domingo', value: '7:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días y cierra a mediodía, así que el pan se compra por la mañana. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Bollería',
	'Dulces',
	'Tartas',
	'Pasteles',
	'Pan del día',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan de cada día',
		text: 'Las reseñas coinciden en lo mismo: «el pan buenísimo». Es una panadería de barrio a la que se va a por el pan de la mañana.',
	},
	{
		title: 'Tartas y pasteles',
		text: '«Fabrican las mejores tartas que he probado en mi vida y a un precio inmejorable», cuenta una reseña de Google. En el mostrador también hay dulces y pasteles.',
	},
	{
		title: 'Trato de barrio',
		text: '«Muy buena calidad y buen trato», resume otra de las reseñas. La ficha suma 4,5 sobre 5 con 457 opiniones.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'El que sale del obrador cada mañana; las reseñas destacan su sabor.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Dulces y bollería',
		items: [
			{
				name: 'Dulces y pasteles',
				note: 'En el mostrador del local, junto al pan. Una reseña los pone a la altura del pan.',
			},
			{
				name: 'Bollería',
				note: 'La ficha la clasifica como panadería; el surtido concreto no está publicado.',
			},
		],
	},
	{
		title: 'Tartas',
		items: [
			{
				name: 'Tartas y pasteles',
				note: '«Las mejores tartas que he probado en mi vida», según una reseña. La ficha no publica catálogo ni plazos de encargo.',
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
		q: '¿Dónde está Panadería Nuestra Señora del Rocío?',
		a: 'En la Cañada Real Soriana, 244, en Córdoba (14710). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 6:30 a 15:00, y sábados y domingos de 7:00 a 14:30. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 45 85 95. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces, pasteles y tartas, según la ficha y las reseñas del perfil. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'Una reseña de Google habla de las tartas del obrador, pero la ficha no publica catálogo, plazos ni precios de encargo. Lo mejor es llamar al 957 45 85 95 y preguntar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica información sobre el aparcamiento adaptado, el aseo ni los asientos, así que esta página no los afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 457 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el pan, los dulces, las tartas y el trato.',
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
		q: '¿Abre los domingos?',
		a: 'Sí. Según la ficha de Google abre todos los días: de lunes a viernes de 6:30 a 15:00 y sábados y domingos de 7:00 a 14:30.',
	},
];
