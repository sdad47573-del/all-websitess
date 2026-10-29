/**
 * Datos de Panadería La Tahona — C. de Alozaina, 19 (Cruz de Humilladero,
 * 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería La Tahona,
 *   36.7096727,-4.4487527, feature 0xd72f77aa9803b3b:0xd41639583aa27567.
 * - Dirección, categoría, teléfono, valoración y horario: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web, redes sociales, carta ni
 * precios, así que la página no los afirma.
 */

export const BUSINESS = {
	name: 'Panadería La Tahona',
	shortName: 'La Tahona',
	mark: 'T',
	street: 'C. de Alozaina, 19',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '635 61 75 66',
	phoneHref: 'tel:+34635617566',
	rating: 4.7,
	reviewsCount: 45,
	since: 1986,
	siteUrl: 'https://panaderia-la-tahona.vercel.app',
	geo: { lat: 36.7096727, lng: -4.4487527 },
	featureId: '0xd72f77aa9803b3b:0xd41639583aa27567',
	placeId: 'ChIJOzuAqXr3cg0RZ3WiOlg5FtQ',
	plusCode: '8C8QPH52+VF',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería artesanal en Cruz de Humilladero',
	description:
		'Panadería La Tahona en C. de Alozaina, 19 (Cruz de Humilladero, 29006 Málaga). Panadería y pastelería artesanal de elaboración propia desde 1986. 4,7 sobre 5 con 45 reseñas. Teléfono 635 61 75 66.',
	hoursSummary: 'L–S 7:30–14:30 · D 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Tahona/@36.7096727,-4.4487527,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77aa9803b3b:0xd41639583aa27567!8m2!3d36.7096727!4d-4.4487527!16s%2Fg%2F11cnr_ssnb?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=15365024770677407357',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7096727%2C-4.4487527',
	embed: 'https://maps.google.com/maps?q=36.7096727,-4.4487527&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7096727,-4.4487527',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '7:30–14:30' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultado el 29 de octubre de 2026. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente; conviene llamar antes de ir.';

/** Lo que la ficha publica del local. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería artesanal',
	'Elaboración propia',
	'Casa desde 1986',
	'Pan del día',
	'Teléfono publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'Elaboración propia',
		text: 'La ficha presenta la casa como panadería y pastelería artesanal con gran variedad de productos de elaboración propia: todo lo que sale al mostrador lo hace la propia casa.',
	},
	{
		title: 'Una casa de 1986',
		text: 'La ficha sitúa el origen del negocio en 1986. Casi cuatro décadas de obrador en el mismo barrio, en la calle Alozaina.',
	},
	{
		title: 'Mañanas de pan',
		text: 'El horario es de mañana: de lunes a sábado abre a las 7:30 y cierra a las 14:30, y los domingos desayuna más tarde, de 8:00 a 15:00.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Tahona?',
		a: 'En la calle Alozaina, número 19, en el barrio de Cruz de Humilladero (29006 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre de 7:30 a 14:30 y los domingos de 8:00 a 15:00. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se vende en La Tahona?',
		a: 'La ficha la describe como panadería y pastelería artesanal con gran variedad de productos de elaboración propia. No publica lista de productos ni precios, así que esta página no los afirma.',
	},
	{
		q: '¿Está abierta por la tarde?',
		a: 'No. La ficha publica un horario de mañana de lunes a sábado (7:30–14:30) y domingos (8:00–15:00); por la tarde no figura abierto.',
	},
	{
		q: '¿Se puede encargar algo por teléfono?',
		a: 'La ficha publica el teléfono 635 61 75 66, pero no describe servicio de encargos ni reservas. Para cualquier pedido conviene llamar y preguntar directamente.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'La ficha de Google no publica enlaces a página web ni a redes sociales. Sí aparecen en la galería de la propia ficha una tarjeta de la casa con sus perfiles de Instagram (@latahona1986) y Facebook (Latahona 1986) y el mismo teléfono que la ficha. Esta página no enlaza perfiles que Google no publica en la ficha.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 45 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad del local, así que esta página no la afirma.',
	},
];
