/**
 * Datos de Panadería Artesana de Villarrubia — C. Guadalquivir, 1, 14710 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Artesana de Villarrubia,
 *   37.8471018,-4.9144868, feature 0xd6d2842869d265f:0xe87bf73c6dbc7886.
 * - Categoría, valoración, reseñas, teléfono, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, métodos de pago
 * ni reparto. El surtido se describe con las fotos del perfil y lo que cuentan
 * las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería Artesana de Villarrubia',
	shortName: 'Artesana de Villarrubia',
	mark: 'V',
	street: 'C. Guadalquivir, 1',
	district: 'Villarrubia',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14710',
	country: 'ES',
	phone: '957 32 71 71',
	phoneHref: 'tel:+34957327171',
	rating: 4.6,
	reviewsCount: 111,
	siteUrl: 'https://panaderia-artesana-de-villarrubia.vercel.app',
	geo: { lat: 37.8471018, lng: -4.9144868 },
	featureId: '0xd6d2842869d265f:0xe87bf73c6dbc7886',
	placeId: 'ChIJXyadhkIobQ0Rhni8bTz3e-g',
	googleCategory: 'Panadería',
	tagline: 'Pan artesano, dulces y tartas en Villarrubia',
	description:
		'Panadería Artesana de Villarrubia, en la calle Guadalquivir, 1 (14710 Córdoba). Pan artesano, dulces, tortas de aceite, recortes, empanadas y tartas por encargo. Abre a las 7:00 todos los días menos el domingo; el lunes cierra a las 13:30 y de martes a sábado, de madrugada. 4,6 sobre 5 con 111 reseñas en Google.',
	hoursSummary: 'L–V 7:00–13:30 · martes a sábado también de madrugada',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Artesana+de+Villarrubia/@37.8471018,-4.9144868,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d2842869d265f:0xe87bf73c6dbc7886!8m2!3d37.8471018!4d-4.9144868!16s%2Fg%2F1hc86hjxv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=16752255077845858438',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8471018%2C-4.9144868',
	embed: 'https://maps.google.com/maps?q=37.8471018,-4.9144868&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8471018,-4.9144868',
};

/**
 * Horario publicado en la ficha de Google. Los tramos que terminan de madrugada
 * (1:30 y 2:30) son la madrugada del día siguiente: Google los lista así.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–13:30' },
	{ day: 'Martes a viernes', value: '7:00–1:30 (madrugada)' },
	{ day: 'Sábado', value: '7:00–2:30 (madrugada)' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre a las 7:00 todos los días menos el domingo. El lunes cierra a las 13:30; de martes a viernes, a la 1:30 de la madrugada; y el sábado, a las 2:30 de la madrugada. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería artesana',
	'Dulces',
	'Tortas de aceite',
	'Recortes',
	'Empanadas',
	'Tartas por encargo',
];

export const HIGHLIGHTS = [
	{
		title: 'Tortas de aceite y recortes',
		text: '«Las mejores tortas de aceite, recortes, empanadas...», cuenta una reseña de Google. Son las especialidades de la casa.',
	},
	{
		title: 'Tartas por encargo',
		text: '«He comprado la tarta de cumpleaños para los peques y muy buena calidad/precio», dice otra reseña. Se encargan en el mostrador.',
	},
	{
		title: 'Pan del día',
		text: '«Buen pan y buenos dulces y buena atención, sí señor», resume otra de las 111 reseñas que suman 4,6 sobre 5 en Google.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan artesano',
				note: 'El que da nombre a la casa; las reseñas lo describen como «buen pan».',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo del día.',
			},
		],
	},
	{
		title: 'Dulces y salado',
		items: [
			{
				name: 'Tortas de aceite',
				note: '«Las mejores tortas de aceite», según una reseña de Google.',
			},
			{
				name: 'Recortes',
				note: 'Los recortes de hojaldre que menciona la misma reseña, junto a las empanadas.',
			},
			{
				name: 'Dulces',
				note: 'En el mostrador del local. La ficha no detalla variedades ni precios.',
			},
		],
	},
	{
		title: 'Encargos',
		items: [
			{
				name: 'Tartas de cumpleaños',
				note: 'Una reseña cuenta que compró aquí la tarta de cumpleaños de los niños, «muy buena calidad/precio».',
			},
			{
				name: 'Empanadas',
				note: 'Mencionadas en las reseñas junto a las tortas de aceite y los recortes. No hay catálogo ni precios publicados.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Artesana de Villarrubia?',
		a: 'En la calle Guadalquivir, 1, en Villarrubia (14710 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días menos el domingo. El lunes, de 7:00 a 13:30; de martes a viernes, de 7:00 a la 1:30 de la madrugada; y el sábado, de 7:00 a las 2:30 de la madrugada. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cierra de madrugada?',
		a: 'Sí. Según la ficha de Google, de martes a viernes cierra a la 1:30 de la madrugada y el sábado a las 2:30, es decir, ya del día siguiente. El lunes cierra antes, a las 13:30.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 32 71 71. No enlaza correo ni redes desde la ficha, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan artesano, dulces, tortas de aceite, recortes y empanadas, y tartas por encargo, según las fotos del perfil y las reseñas. La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Se pueden encargar tartas?',
		a: 'Sí. Una reseña cuenta que compró aquí la tarta de cumpleaños de los niños. La ficha no publica catálogo, plazos ni precios, así que lo mejor es llamar al 957 32 71 71 y preguntar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento accesible. No publica datos sobre el acceso, el aseo ni los asientos, así que esta página no los afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 111 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el pan, los dulces, las tortas de aceite, las empanadas, las tartas y la atención.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. Según la ficha de Google, el domingo está cerrado; el resto de días abre a las 7:00.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local o por teléfono para encargos.',
	},
];
