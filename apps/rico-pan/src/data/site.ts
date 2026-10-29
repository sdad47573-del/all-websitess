/**
 * Datos de Rico Pan — C. María la Talegona, 1, Poniente Norte, 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Rico Pan, 37.8848914,-4.8146475,
 *   feature 0xd6cd8abed81bec1:0xf07d0d66cf0c208a.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, carta, precios,
 * métodos de pago ni reparto. El surtido se describe solo con las fotos del
 * perfil y las dos reseñas que publica Google.
 */

export const BUSINESS = {
	name: 'Rico Pan',
	shortName: 'Rico Pan',
	mark: 'R',
	street: 'C. María la Talegona, 1',
	district: 'Poniente Norte',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '957 46 31 51',
	phoneHref: 'tel:+34957463151',
	rating: 4.3,
	reviewsCount: 12,
	siteUrl: 'https://rico-pan.vercel.app',
	geo: { lat: 37.8848914, lng: -4.8146475 },
	featureId: '0xd6cd8abed81bec1:0xf07d0d66cf0c208a',
	placeId: 'ChIJwb6B7avYbA0RiiAMz2YNffA',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería abierta a todas horas',
	description:
		'Rico Pan, en la calle María la Talegona, 1 (Poniente Norte, 14005 Córdoba). Panadería y pastelería con pan y pasteles, abierta las 24 horas. 4,3 sobre 5 con 12 reseñas en Google.',
	hoursSummary: 'Abierto 24 horas, todos los días',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Rico+Pan/@37.8848914,-4.8146475,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cd8abed81bec1:0xf07d0d66cf0c208a!8m2!3d37.8848914!4d-4.8146475!16s%2Fg%2F11xdw54tb?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=17329021676403040394',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8848914%2C-4.8146475',
	embed: 'https://maps.google.com/maps?q=37.8848914,-4.8146475&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8848914,-4.8146475',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a domingo', value: 'Abierto 24 horas' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: Rico Pan figura como abierto 24 horas todos los días. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Pan',
	'Pasteles',
	'Abierto 24 horas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan y pasteles',
		text: 'Las dos reseñas que publica Google hablan de eso: «buen pan y muy buenos pasteles» y «buena panadería y pastelería».',
	},
	{
		title: 'A cualquier hora',
		text: 'La ficha marca «Abierto 24 horas» los siete días de la semana, algo poco habitual en una panadería de barrio.',
	},
	{
		title: 'En María la Talegona',
		text: 'Está en el número 1 de la calle María la Talegona, en Poniente Norte, a un paso del centro histórico.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'Una reseña de Google lo resume así: «buen pan y muy buenos pasteles».',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: esta web no los indica.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
		{
			name: 'Tartas y pasteles',
			note: '«Muy buenos pasteles», según una de las reseñas. En la vitrina se ven tartas cortadas a porciones.',
		},
		{
			name: 'Rosquitos y ensaimadas',
			note: 'En la foto del perfil, con sus etiquetas de precio.',
		},
		{
			name: 'Palmeras',
			note: 'En la bandeja de la vitrina, junto a las tartas.',
		},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Rico Pan?',
		a: 'En la calle María la Talegona, 1, en Poniente Norte (14005 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre 24 horas todos los días de la semana. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿De verdad abre las 24 horas?',
		a: 'Es lo que publica la ficha de Google: «Abierto 24 horas» para los siete días. Esta página se limita a repetirlo; si se va a una hora intempestiva, conviene llamar antes al 957 46 31 51.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 46 31 51. No enlaza web propia, correo ni redes, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan y pasteles, según la ficha y las reseñas del perfil. Es una panadería y pastelería; Google no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas e indica que no hay aparcamiento accesible. No informa sobre el aseo ni los asientos, así que esta página no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 12 reseñas en Google, que la clasifica como panadería. Las reseñas publicadas destacan el pan y los pasteles.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
