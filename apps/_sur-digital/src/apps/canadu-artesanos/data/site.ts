/**
 * Datos de Cañadú Artesanos — Poniente Sur, 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cañadú Artesanos, 37.88365,-4.792803,
 *   feature 0xd6cdf5efe482ded:0x2063124898be8c42.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha solo publica la categoría «Panadería», un
 * teléfono y la dirección. No tiene web propia, correo, redes, carta, métodos de
 * pago ni reparto. El surtido se describe con lo que muestran las fotos del
 * perfil y lo que cuentan las reseñas; los precios de los cartelitos de la
 * vitrina no se repiten porque cambian.
 */

export const BUSINESS = {
	name: 'Cañadú Artesanos',
	shortName: 'Cañadú',
	mark: 'C',
	street: 'Plaza Cardenal Cisneros, s/n',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '614 28 15 14',
	phoneHref: 'tel:+34614281514',
	rating: 4.7,
	reviewsCount: 102,
	siteUrl: 'https://www.sur-digital.com/canadu-artesanos',
	geo: { lat: 37.88365, lng: -4.792803 },
	featureId: '0xd6cdf5efe482ded:0x2063124898be8c42',
	placeId: 'ChIJ7S1I_l7fbA0RQoy-mEgSYyA',
	googleCategory: 'Panadería',
	tagline: 'Panadería artesana en Poniente Sur',
	description:
		'Cañadú Artesanos, panadería en la Plaza Cardenal Cisneros (Poniente Sur, 14005 Córdoba). Pan, bollería, pasteles y tartas. De lunes a viernes de 8:00 a 15:00. 4,7 sobre 5 en Google.',
	hoursSummary: 'Lunes a viernes 8:00–15:00 · sábados 8:30–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ca%C3%B1ad%C3%BA+Artesanos/@37.88365,-4.792803,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf5efe482ded:0x2063124898be8c42!8m2!3d37.88365!4d-4.792803!16s%2Fg%2F11cns7jxwz?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=2332912315787324482',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.88365%2C-4.792803',
	embed: 'https://maps.google.com/maps?q=37.88365,-4.792803&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.88365,-4.792803',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00' },
	{ day: 'Sábado', value: '8:30–14:30' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Bollería',
	'Pasteles',
	'Tartas por encargo',
	'Recogida en tienda',
];

export const HIGHLIGHTS = [
	{
		title: 'Artesanos, en el nombre',
		text: 'El rótulo del local dice «Cañadú artesanos» y la ficha de Google lo clasifica como panadería. Está en la Plaza Cardenal Cisneros, en Poniente Sur.',
	},
	{
		title: 'Pan y pasteles',
		text: '«Muy buenos pasteles y pan», resume una de las reseñas del perfil, que también se queda con «la bollería pequeña».',
	},
	{
		title: 'Tartas con dedicatoria',
		text: 'En las fotos del perfil aparecen tartas escritas a mano con el nombre: «Felicidades Lauri», «¡Felicidades! mamá». Otra reseña cuenta que «atienden encargos con formalidad».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: 'Pan del día',
				note: '«Muy buenos pasteles y pan», dicen las reseñas de Google. En las fotos se ven bandejas y cestas de pan en la trastienda.',
			},
			{
				name: 'Barras y piezas de horno',
				note: 'En la vitrina y en las estanterías del obrador, junto al mostrador.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Donuts bañados',
				note: 'De chocolate y de glaseado claro, en la vitrina de las fotos del perfil.',
			},
			{
				name: 'Bollos rellenos de nata',
				note: 'Coronados con nata y trozos de fresa y kiwi, en una de las bandejas.',
			},
			{
				name: 'Bollería pequeña',
				note: '«Me encanta la bollería pequeña», cuenta una de las reseñas de Google.',
			},
		],
	},
	{
		title: 'Pastelería y encargos',
		items: [
			{
				name: 'Tartas de vitrina',
				note: 'Tarta de nata y tartas de fruta, en las bandejas del mostrador.',
			},
			{
				name: 'Tartas con dedicatoria',
				note: 'En las fotos aparecen tartas con el nombre escrito a mano, del tipo «Felicidades Lauri».',
			},
			{
				name: 'Encargos',
				note: 'Una reseña de Google cuenta que «atienden encargos con formalidad». La ficha no publica catálogo ni plazos: se pregunta en el local o por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cañadú Artesanos?',
		a: 'En la Plaza Cardenal Cisneros, s/n, en Poniente Sur (14005 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 8:00 a 15:00 y los sábados de 8:30 a 14:30. El domingo cierra. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 614 28 15 14. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y pastelería, según la ficha, las fotos del perfil y las reseñas de Google. En las fotos se ven bandejas de pan, donuts bañados, bollos rellenos de nata, tartas de nata y de fruta y tartas con dedicatoria.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'Las fotos del perfil incluyen tartas con el nombre escrito a mano, y una reseña cuenta que «atienden encargos con formalidad». La ficha no publica catálogo, plazos ni precios de encargo: lo mejor es llamar al 614 28 15 14 y preguntar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha de Google no publica carta ni precios. En las fotos se ven cartelitos escritos a mano en la vitrina, pero los importes cambian, así que esta web no los repite.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 102 reseñas en Google, que la clasifica como panadería.',
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
