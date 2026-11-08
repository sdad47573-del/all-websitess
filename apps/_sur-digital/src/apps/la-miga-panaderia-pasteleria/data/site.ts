/**
 * Datos de La Miga panadería y pastelería — Levante, 14007 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Miga panadería y pastelería,
 *   Av. de Rabanales, 16, 37.8927644,-4.7604294,
 *   feature 0xd6cdf003b7dfe19:0x9ba7e0e8ab3cd27e.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, web propia,
 * correo, redes, carta, precios, métodos de pago ni reparto. El surtido se
 * describe solo con lo que dicen las reseñas y lo que muestran las fotos.
 */

export const BUSINESS = {
	name: 'La Miga Panadería y Pastelería',
	shortName: 'La Miga',
	mark: 'M',
	street: 'Av. de Rabanales, 16',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14007',
	country: 'ES',
	phone: '722 79 88 48',
	phoneHref: 'tel:+34722798848',
	rating: 5,
	reviewsCount: 4,
	siteUrl: 'https://www.sur-digital.com/la-miga-panaderia-pasteleria',
	geo: { lat: 37.8927644, lng: -4.7604294 },
	featureId: '0xd6cdf003b7dfe19:0x9ba7e0e8ab3cd27e',
	placeId: 'ChIJGf59OwDfbA0RftI8q-jgp5s',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería en el Levante',
	description:
		'La Miga panadería y pastelería, en Av. de Rabanales, 16 (Levante, 14007 Córdoba). Pan de masa madre, pan del día y dulces de pastelería. De martes a sábado de 9:00 a 14:00 y de 17:00 a 20:00; domingos de 9:00 a 14:00; lunes cerrado. 5 sobre 5 con 4 reseñas. Teléfono 722 79 88 48.',
	hoursSummary: 'M–S 9:00–14:00 y 17:00–20:00 · domingo 9:00–14:00 · lunes cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Miga+panader%C3%ADa+y+pasteler%C3%ADa/@37.8927644,-4.7604294,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf003b7dfe19:0x9ba7e0e8ab3cd27e!8m2!3d37.8927644!4d-4.7604294!16s%2Fg%2F11yrfpnmzv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJGf59OwDfbA0RftI8q-jgp5s',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8927644%2C-4.7604294',
	embed: 'https://maps.google.com/maps?q=37.8927644,-4.7604294&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8927644,-4.7604294',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Martes a sábado', value: '9:00–14:00 · 17:00–20:00' },
	{ day: 'Domingo', value: '9:00–14:00' },
	{ day: 'Lunes', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre de martes a sábado en dos turnos (9:00–14:00 y 17:00–20:00); el domingo solo por la mañana y el lunes cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Pan de masa madre',
	'Pan del día',
	'Dulces',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan de masa madre',
		text: '«Magnífico pan de masa madre y dulces», dice una de las 4 reseñas que tiene en Google, todas con 5 estrellas.',
	},
	{
		title: 'Dulces de pastelería',
		text: 'La ficha la clasifica como panadería y pastelería. La misma reseña destaca los dulces junto al pan.',
	},
	{
		title: 'Trato de la casa',
		text: '«Magnífico trato de quien lo lleva ahora», añade esa reseña. Otra cuenta que la familia ha probado varios productos «en varias ocasiones» y les «ha enamorado».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan de masa madre',
				note: '«Magnífico pan de masa madre», dice una de las reseñas de Google. La ficha no publica formatos ni precios.',
			},
			{
				name: 'Pan del día',
				note: 'Es la categoría con la que Google clasifica el local: panadería.',
			},
			{
				name: 'Barras y hogazas',
				note: 'La ficha no detalla variedades ni precios, así que esta web no los indica.',
			},
		],
	},
	{
		title: 'La pastelería',
		items: [
			{
				name: 'Torrijas',
				note: 'En la vitrina de las fotos aparecen torrijas tradicionales, algunas glaseadas y otras con azúcar.',
			},
			{
				name: 'Donuts y bollería cubierta',
				note: 'La vitrina muestra donuts y piezas cubiertas de chocolate y azúcar glas.',
			},
			{
				name: 'Tartas y pasteles',
				note: 'En las fotos hay tartas de chocolate, una de ellas con la palabra «Felicidades».',
			},
		],
	},
	{
		title: 'Fechas señaladas',
		items: [
			{
				name: 'Figuras de chocolate',
				note: 'En una de las fotos se ven figuras de chocolate de conejo y huevo de Pascua envueltas una a una.',
			},
			{
				name: 'Tartas de cumpleaños',
				note: 'La tarta con «Felicidades» de las fotos es un ejemplo; la ficha no publica encargos ni precios.',
			},
			{
				name: 'Dulces de temporada',
				note: 'La ficha no publica calendario ni catálogo; se pregunta en el obrador.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Miga?',
		a: 'En la Avenida de Rabanales, 16, en el distrito Levante de Córdoba (14007). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de martes a sábado abre de 9:00 a 14:00 y de 17:00 a 20:00; el domingo, de 9:00 a 14:00, y el lunes cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 722 79 88 48. No figuran web propia, correo ni redes sociales.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan y dulces de pastelería. Las reseñas de Google mencionan el pan de masa madre y los dulces. La ficha no publica carta, catálogo ni precios.',
	},
	{
		q: '¿Hacen pan de masa madre?',
		a: 'Sí, según una de las reseñas, que lo describe como «magnífico». La ficha no publica ingredientes, formatos ni precios; conviene confirmarlo en el mostrador.',
	},
	{
		q: '¿Abre los lunes?',
		a: 'No. La ficha de Google marca el lunes como cerrado; de martes a sábado abre en dos turnos y el domingo solo por la mañana.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica datos sobre el aseo ni sobre el aparcamiento.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con 4 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el pan de masa madre, los dulces y el trato.',
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
