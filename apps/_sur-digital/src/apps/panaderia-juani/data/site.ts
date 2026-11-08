/**
 * Datos de Panadería Juani — C. Libertador Hidalgo y Costilla, 1, Sur,
 * 14013 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Juani, 37.8616141,-4.783694,
 *   feature 0xd6d20ed49b304d3:0x3aca6151c03e4b30.
 * - Categoría, valoración, reseñas, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, correo, redes,
 * carta ni precios. El mapa y las indicaciones llevan al punto exacto. El
 * mostrador recoge solo lo que muestran las fotos y lo que cuentan las reseñas,
 * sin importes.
 */

export const BUSINESS = {
	name: 'Panadería Juani',
	shortName: 'Juani',
	mark: 'J',
	street: 'C. Libertador Hidalgo y Costilla, 1',
	district: 'Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.9,
	reviewsCount: 23,
	siteUrl: 'https://www.sur-digital.com/panaderia-juani',
	geo: { lat: 37.8616141, lng: -4.783694 },
	featureId: '0xd6d20ed49b304d3:0x3aca6151c03e4b30',
	placeId: 'ChIJ0wSzSe0gbQ0RMEs-wFFhyjo',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en el Sur de Córdoba',
	description:
		'Panadería Juani, panadería en la calle Libertador Hidalgo y Costilla, 1 (barrio Sur, 14013 Córdoba). Pan del día, bollería y reparto. Abierta de lunes a viernes de 7:30 a 15:00 y de 17:30 a 21:00, sábados de 9:00 a 15:00 y domingos de 8:00 a 14:00. 4,9 sobre 5 en Google.',
	hoursSummary: 'L–V 7:30–15:00 y 17:30–21:00 · S 9:00–15:00 · D 8:00–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Juani/@37.8616141,-4.783694,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20ed49b304d3:0x3aca6151c03e4b30!8m2!3d37.8616141!4d-4.783694!16s%2Fg%2F12qgpg_xz?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4236305403240926000',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8616141%2C-4.783694',
	embed: 'https://maps.google.com/maps?q=37.8616141,-4.783694&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8616141,-4.783694',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–15:00 · 17:30–21:00' },
	{ day: 'Sábado', value: '9:00–15:00' },
	{ day: 'Domingo', value: '8:00–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: de lunes a viernes abre por la mañana y vuelve por la tarde, de 17:30 a 21:00; los sábados y domingos solo abre por la mañana. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Bollería',
	'Reparto a domicilio',
	'Encargos',
	'Dulces',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan calentito',
		text: 'Las reseñas lo repiten: «Muy buen pan y calentito tienen de todo» y «Genial, buen pan y buen trato». La ficha le da 4,9 sobre 5.',
	},
	{
		title: 'También por la tarde',
		text: 'De lunes a viernes abre de 7:30 a 15:00 y vuelve de 17:30 a 21:00. Los sábados y domingos solo abre por la mañana.',
	},
	{
		title: 'Reparto',
		text: 'Una de las reseñas habla de los plazos de entrega y del aviso al cliente: «Cumplen los plazos de entrega, te lo notifican y muy buen trato personal».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'El pan sale del obrador a lo largo de la mañana; las reseñas lo describen como «buen pan y calentito».',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica variedades ni precios: el surtido cambia cada día.',
			},
		],
	},
	{
		title: 'La bollería',
		items: [
			{
				name: 'Bollería del mostrador',
				note: 'Piezas de bollería y dulces junto al pan, según lo que muestra el local.',
			},
			{
				name: 'Dulces para casa',
				note: 'La ficha no detalla variedades ni precios. Confírmalo en el mostrador.',
			},
		],
	},
	{
		title: 'El reparto',
		items: [
			{
				name: 'Entrega a domicilio',
				note: 'Una reseña de Google menciona plazos de entrega y aviso al cliente. La ficha no publica zona ni condiciones.',
			},
			{
				name: 'Encargos',
				note: 'La ficha no publica teléfono ni web: los encargos se hablan en el propio local.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Juani?',
		a: 'En la calle Libertador Hidalgo y Costilla, 1, en el barrio Sur (14013 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 15:00 y de 17:30 a 21:00. Los sábados abre de 9:00 a 15:00 y los domingos de 8:00 a 14:00. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en el propio local; para la ubicación exacta, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y dulces. Google clasifica el negocio como panadería. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'Una de las reseñas de Google habla de «los plazos de entrega» y de que avisan al cliente, así que el reparto existe. La ficha no publica zona, condiciones ni teléfono para pedir; conviene preguntar en el local.',
	},
	{
		q: '¿Abre por la tarde?',
		a: 'Sí, de lunes a viernes: cierra a las 15:00 y vuelve de 17:30 a 21:00. Los sábados y domingos solo abre por la mañana.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,9 sobre 5 con 23 reseñas en Google. Las reseñas destacadas hablan del pan, del trato y de los plazos de entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha marca los domingos de 8:00 a 14:00, y los sábados de 9:00 a 15:00.',
	},
];
