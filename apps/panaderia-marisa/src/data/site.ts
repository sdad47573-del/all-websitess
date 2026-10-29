/**
 * Datos de Panadería Marisa — C. Frigiliana, 10 (Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Marisa,
 *   36.6972301,-4.4471959, feature 0xd72f9cfca13712b:0xce67dfb5d11125d0.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del propio negocio, reseñas y galería de fotos: ficha pública de
 *   Google (consultada en octubre de 2026).
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La web
 * no inventa ninguno de esos datos.
 */

export const BUSINESS = {
	name: 'Panadería Marisa',
	shortName: 'Marisa',
	mark: 'M',
	street: 'C. Frigiliana, 10',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://panaderia-marisa.vercel.app',
	geo: { lat: 36.6972301, lng: -4.4471959 },
	featureId: '0xd72f9cfca13712b:0xce67dfb5d11125d0',
	placeId: 'ChIJK3ETys_5cg0R0CUR0bXfZ84',
	plusCode: '8C8QMHW3+V4',
	googleCategory: 'Panadería',
	phone: '624 39 15 11',
	phoneHref: 'tel:+34624391511',
	tagline: 'Pan de masa madre, quesos y charcutería en Carretera de Cádiz',
	description:
		'Panadería Marisa, en la calle Frigiliana, 10 (Carretera de Cádiz, 29004 Málaga). Panes de masa madre y ecológicos, galletas de espelta sarraceno, quesos y charcutería de pueblo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Marisa/@36.6972301,-4.4471959,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9cfca13712b:0xce67dfb5d11125d0!8m2!3d36.6972301!4d-4.4471959!16s%2Fg%2F11y_99ty5x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=14876812056702866384',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6972301%2C-4.4471959',
	embed: 'https://maps.google.com/maps?q=36.6972301,-4.4471959&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6972301,-4.4471959',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 13,
	label: '5,0',
};

/**
 * Horario que publica la ficha. De lunes a jueves abre en dos tramos; el viernes
 * solo por la mañana.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '7:30–15:00 · 17:00–21:00' },
	{ dia: 'Martes', horas: '7:30–15:00 · 17:00–21:00' },
	{ dia: 'Miércoles', horas: '7:30–15:00 · 17:00–21:00' },
	{ dia: 'Jueves', horas: '7:30–15:00 · 17:00–21:00' },
	{ dia: 'Viernes', horas: '7:30–15:00' },
	{ dia: 'Sábado', horas: '8:30–14:30' },
	{ dia: 'Domingo', horas: '8:30–15:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pan de masa madre',
	'Productos ecológicos',
	'Quesos',
	'Charcutería de pueblo',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Masa madre y ecológico',
		text: 'La descripción del propio negocio en Google abre con «panes de masa madre, ecológicos». Es lo primero que anuncia la casa y lo que da sentido al obrador.',
	},
	{
		title: 'Quesos y charcutería',
		text: 'Junto al pan, la ficha enumera quesos y charcutería de pueblo, además de galletas de espelta sarraceno. No publica carta completa ni precios.',
	},
	{
		title: 'Abierta los siete días',
		text: 'La ficha publica horario de lunes a domingo. De lunes a jueves hay jornada partida; el viernes solo abre por la mañana y el fin de semana cierra a mediodía.',
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'El pan y los dulces muy buenos', autor: 'Reseña publicada en Google', valor: 5 },
	{
		texto: 'Productos buenos frescos y una excelente atención!!!',
		autor: 'Reseña publicada en Google',
		valor: 5,
	},
	{
		texto: 'Maravillosos los dos, muy buena atención y buenos productos',
		autor: 'Reseña publicada en Google',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Marisa?',
		a: 'En la calle Frigiliana, 10, en el barrio de Carretera de Cádiz (29004 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: de lunes a jueves de 7:30 a 15:00 y de 17:00 a 21:00; viernes de 7:30 a 15:00; sábado de 8:30 a 14:30; y domingo de 8:30 a 15:00. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. Según el horario publicado en Google, el domingo abre de 8:30 a 15:00.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'Sí. El teléfono que publica la ficha es el 624 39 15 11, y esta página lo enlaza para llamar directamente desde el móvil.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La descripción del negocio en Google menciona panes de masa madre y ecológicos, galletas de espelta sarraceno, charcutería de pueblo y quesos. No publica la carta completa ni los precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. No publica información sobre el interior, los aseos ni el aparcamiento, así que esta página no la añade.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene una valoración de 5,0 sobre 5 con 13 reseñas en el momento de consultarla (octubre de 2026). El estado actualizado y las reseñas completas se ven en Google Maps.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
