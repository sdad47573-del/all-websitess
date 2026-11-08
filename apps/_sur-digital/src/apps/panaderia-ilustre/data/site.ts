/**
 * Datos públicos de Panadería Ilustre, C. Don Juan de Austria, 33, Málaga.
 * Fuente: ficha pública de Google Maps, consultada el 28 de octubre de 2026.
 * Las fotos de la galería se descargan del perfil enlazado abajo.
 */
export const BUSINESS = {
	name: 'Panadería Ilustre',
	shortName: 'Ilustre',
	mark: 'I',
	street: 'C. Don Juan de Austria, 33',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29009',
	country: 'ES',
	phone: '652 87 56 74',
	phoneHref: 'tel:+34652875674',
	rating: 4.7,
	reviewsCount: 100,
	siteUrl: 'https://www.sur-digital.com/panaderia-ilustre',
	geo: { lat: 36.725652, lng: -4.4289 },
	featureId: '0xd72f79f2abc7e77:0x10c742416113821f',
	placeId: 'ChIJd368Kp_3cg0RH4ITYUFCxxA',
	googleCategory: 'Panadería',
	tagline: 'Panadería en Distrito Centro, Málaga',
	description:
		'Panadería Ilustre, en C. Don Juan de Austria, 33, Distrito Centro, Málaga. Panadería con variedad de panes, teléfono 652 87 56 74 y valoración 4,7 sobre 5 en Google.',
	hoursSummary: 'L–V 8:00–14:30 y 17:15–20:30 · S–D 8:30–14:30',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Panader%C3%ADa+Ilustre/@36.725652,-4.4289,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f79f2abc7e77:0x10c742416113821f!8m2!3d36.725652!4d-4.4289!16s%2Fg%2F11j1544b0c?authuser=0&hl=es',
	cid: 'https://www.google.com/maps?cid=14436788289144588432',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.725652%2C-4.4289',
	embed: 'https://maps.google.com/maps?q=36.725652,-4.4289&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.725652%2C-4.4289',
};

export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–14:30 · 17:15–20:30' },
	{ day: 'Sábado y domingo', value: '8:30–14:30' },
];

export const HOURS_NOTE =
	'Horario transcrito del cartel del escaparate en las fotos del perfil. Confirma posibles cambios en días festivos antes de ir.';

export const SERVICIOS = ['Panes variados', 'Bollería', 'Pastelería', 'Galletas'];

export const HIGHLIGHTS = [
	{
		title: 'Panes para cada día',
		text: 'Las fotos muestran hogazas de corteza rústica y panes de diferentes formas, tamaños y tipos de miga.',
	},
	{
		title: 'Bollería y algo dulce',
		text: 'En la galería también se ven bandejas de bollería, pasteles, galletas y palmeras de hojaldre.',
	},
	{
		title: 'Abre todos los días',
		text: 'El cartel de la puerta indica horario de mañana de lunes a domingo, y apertura por la tarde de lunes a viernes.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan del mostrador',
		items: [
			{ name: 'Hogazas rústicas', note: 'Panes de corteza marcada y harinada, visibles en las fotos del mostrador.' },
			{ name: 'Pan de miga clara y oscura', note: 'Distintos panes aparecen en las estanterías de la galería.' },
			{ name: 'Panes variados', note: 'Una reseña también menciona pan de cerveza, pan de tomate y bases para pizza.' },
		],
	},
	{
		title: 'Bollería y pastelería',
		items: [
			{ name: 'Bollería hojaldrada', note: 'Croissants, piezas dulces y otras variedades en las fotos.' },
			{ name: 'Palmeras', note: 'Palmeras de hojaldre fotografiadas en la galería pública.' },
			{ name: 'Galletas y pasteles', note: 'También se ven galletas en tarros y dulces de mostrador.' },
		],
	},
	{
		title: 'Información',
		items: [
			{ name: 'De lunes a viernes', note: '8:00–14:30 y 17:15–20:30, según el cartel de la puerta.' },
			{ name: 'Sábados y domingos', note: '8:30–14:30, según el cartel de la puerta.' },
			{ name: 'Pedidos y consultas', note: 'Llama al 652 87 56 74 para confirmar disponibilidad.' },
		],
	},
];

export const FAQ = [
	{ q: '¿Dónde está Panadería Ilustre?', a: 'Está en C. Don Juan de Austria, 33, Distrito Centro, 29009 Málaga. El mapa de esta página enlaza con la ubicación de Google Maps.' },
	{ q: '¿Cuál es el horario?', a: 'El cartel del escaparate indica de lunes a viernes, de 8:00 a 14:30 y de 17:15 a 20:30; sábados y domingos, de 8:30 a 14:30. En festivos puede variar; confirma antes de ir.' },
	{ q: '¿Cómo puedo contactar?', a: 'Puedes llamar al 652 87 56 74.' },
	{ q: '¿Qué tipo de pan tienen?', a: 'Las fotos muestran hogazas rústicas y panes de distintos tipos de miga. Una reseña menciona además panes de cerveza, de tomate y bases para pizza. Consulta la disponibilidad directamente en la panadería.' },
	{ q: '¿Qué valoración tiene?', a: 'La ficha pública muestra 4,7 sobre 5, basada en 100 reseñas.' },
	{ q: '¿Se puede recoger para llevar?', a: 'Para consultar el surtido o la disponibilidad, llama al 652 87 56 74.' },
	{ q: '¿Abre los domingos?', a: 'Sí. El cartel del escaparate indica horario de 8:30 a 14:30 los sábados y domingos.' },
	{ q: '¿Publica carta o precios?', a: 'La ficha no publica un catálogo completo ni precios. Para información actualizada, llama al establecimiento.' },
];
