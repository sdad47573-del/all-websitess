/**
 * Datos de La Cosecha - Panadería — Av. de los Almogávares, 42, Nte. Sierra, 14006 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Cosecha - Panadería,
 *   37.8971392,-4.7769757, feature 0xd6cdf57393787d5:0x57f63f8fb70e5f35.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Panes y dulces: lo que cuentan las reseñas de la propia ficha.
 *
 * La ficha no publica descripción del negocio, web, correo, redes, carta,
 * precios, métodos de pago, reparto ni fotografías del local. Esta web no
 * inventa esos datos: usa ilustraciones propias y provisionales.
 */

export const BUSINESS = {
	name: 'La Cosecha · Panadería',
	legalName: 'La Cosecha - Panadería',
	shortName: 'La Cosecha',
	mark: 'LC',
	street: 'Av. de los Almogávares, 42',
	district: 'Nte. Sierra',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14006',
	country: 'ES',
	phone: '857 87 03 72',
	phoneHref: 'tel:+34857870372',
	rating: 3.8,
	reviewsCount: 16,
	siteUrl: 'https://la-cosecha-panaderia.vercel.app',
	geo: { lat: 37.8971392, lng: -4.7769757 },
	featureId: '0xd6cdf57393787d5:0x57f63f8fb70e5f35',
	placeId: 'ChIJ1Yc3OVffbA0RNV8Ot48_9lc',
	plusCode: '8C9QV6WF+V6',
	googleCategory: 'Panadería',
	tagline: 'Pan y dulces en la avenida de los Almogávares',
	description:
		'La Cosecha - Panadería, en la avenida de los Almogávares, 42 (Nte. Sierra, 14006 Córdoba). Pan y dulces de barrio, abierta todos los días de 8:00 a 21:00. 3,8 sobre 5 con 16 reseñas. Teléfono 857 87 03 72.',
	hoursSummary: 'Todos los días 8:00–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cosecha+-+Panader%C3%ADa/@37.8971392,-4.7769757,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf57393787d5:0x57f63f8fb70e5f35!8m2!3d37.8971392!4d-4.7769757!16s%2Fg%2F11vcm__l03?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJ1Yc3OVffbA0RNV8Ot48_9lc',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8971392%2C-4.7769757',
	embed: 'https://maps.google.com/maps?q=37.8971392,-4.7769757&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8971392,-4.7769757',
};

/** Horario publicado en la ficha de Google: todos los días, sin turnos. */
export const HOURS = [{ day: 'Lunes a domingo', value: '8:00–21:00' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: abre todos los días de 8:00 a 21:00, sin descanso de mediodía. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Dulces',
	'Encargos',
	'Abierta todos los días',
];

export const HIGHLIGHTS = [
	{
		title: 'De 8 a 21, todos los días',
		text: 'La ficha publica el mismo horario los siete días de la semana: trece horas seguidas de panadería, sin cerrar al mediodía.',
	},
	{
		title: 'Pan y dulces',
		text: '«Pura amabilidad de las dependientas y unos panes y dulces que saben a gloria», resume una reseña de cinco estrellas.',
	},
	{
		title: 'Encargos',
		text: 'Otra reseña cuenta que encargó para recoger el día 5 y el producto estaba duro. La ficha no detalla cómo funcionan los encargos, así que se consultan en el local.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan del día',
				note: 'Las reseñas hablan de «panes»; la ficha no detalla variedades ni precios.',
			},
			{
				name: 'Dulces',
				note: 'Citados junto al pan en las reseñas. La galería muestra el mostrador del local.',
			},
		],
	},
	{
		title: 'Cada día',
		items: [
			{
				name: 'Panadería abierta',
				note: 'De 8:00 a 21:00 los siete días, según la ficha de Google.',
			},
			{
				name: 'Para llevar',
				note: 'La ficha no aclara servicio de mesa, reparto ni métodos de pago.',
			},
		],
	},
	{
		title: 'Encargos',
		items: [
			{
				name: 'Encargos para recoger',
				note: 'Una reseña menciona un encargo recogido el día 5. La ficha no publica plazos ni catálogo: se pregunta en el local o en el 857 87 03 72.',
			},
			{
				name: 'Sin carta publicada',
				note: 'No hay lista de productos ni precios en Google; esta web no los inventa.',
			},
		],
	},
];

export const RESENAS = [
	{ texto: 'Pura amabilidad de las dependientas y unos panes y dulces que saben a gloria.', valor: 5 },
	{ texto: 'Encargado para recoger el 5 y estaba duro; creo que no era del día.', valor: 2 },
];

export const FAQ = [
	{
		q: '¿Dónde está La Cosecha?',
		a: 'En la avenida de los Almogávares, 42, en la zona de Nte. Sierra (14006 Córdoba). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:00 a 21:00, sin descanso de mediodía, según la ficha de Google. El domingo 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y las reseñas hablan de panes y dulces. No publica carta, variedades ni precios, así que el surtido del día se consulta en el local.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'Una reseña cuenta que encargó para recoger el día 5. La ficha no publica plazos, catálogo ni condiciones de encargo, así que conviene llamar al 857 87 03 72 o preguntar en el local.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha publica el mismo horario los siete días, de 8:00 a 21:00, domingo incluido.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 857 87 03 72. No consta página web propia, correo ni perfiles sociales, así que esta página no enlaza ninguno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,8 sobre 5 con 16 reseñas en Google (octubre de 2026). Una reseña destaca la amabilidad y el pan; otra cuenta que un encargo estaba duro. Se reproducen las dos.',
	},
	{
		q: '¿Se puede pagar con tarjeta o pedir a domicilio?',
		a: 'La ficha pública no indica métodos de pago ni servicio de reparto, así que esta web no los afirma. Se consulta en el local o por teléfono.',
	},
];
