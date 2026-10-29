/**
 * Datos de Cafetería Panadería Margarita — C. Corregidor Francisco de Molina, 3
 * (Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cafeteria panaderia margarita,
 *   36.7137249,-4.4493173, feature 0xd72f765450e4747:0xe0cbea094c7eb54d.
 * - Nombre, dirección, categoría, valoración, horario, accesibilidad, descripción
 *   del propio negocio y galería de fotos: ficha pública de Google (octubre de 2026).
 *
 * Lo que la ficha NO publica: teléfono, página web, redes sociales, carta ni
 * precios. La web no inventa ninguno de esos datos.
 */

export const BUSINESS = {
	name: 'Cafetería Panadería Margarita',
	shortName: 'Margarita',
	mark: 'M',
	street: 'C. Corregidor Francisco de Molina, 3',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	siteUrl: 'https://cafeteria-panaderia-margarita.vercel.app',
	geo: { lat: 36.7137249, lng: -4.4493173 },
	featureId: '0xd72f765450e4747:0xe0cbea094c7eb54d',
	placeId: 'ChIJR0cORWX3cg0RTbV-TAnqy-A',
	plusCode: '8C8QPH72+F7',
	googleCategory: 'Panadería',
	tagline: 'Panadería y cafetería en la calle Corregidor Francisco de Molina',
	description:
		'Cafetería Panadería Margarita, en la calle Corregidor Francisco de Molina, 3 (Cruz de Humilladero, 29006 Málaga). Pan casero del día, abierta todos los días de la semana.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cafeteria+panaderia+margarita/@36.7137249,-4.4493173,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f765450e4747:0xe0cbea094c7eb54d!8m2!3d36.7137249!4d-4.4493173!16s%2Fg%2F11ywggpm_c?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=16192440437319914829',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7137249%2C-4.4493173',
	embed: 'https://maps.google.com/maps?q=36.7137249,-4.4493173&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7137249,-4.4493173',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 2,
	label: '5,0',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–17:30' },
	{ dia: 'Martes', horas: '9:00–17:30' },
	{ dia: 'Miércoles', horas: '9:00–17:30' },
	{ dia: 'Jueves', horas: '9:00–17:30' },
	{ dia: 'Viernes', horas: '9:00–14:30' },
	{ dia: 'Sábado', horas: '9:00–14:30' },
	{ dia: 'Domingo', horas: '9:00–17:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'Día de Todos los Santos: el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en la propia ficha de Google antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pan casero del día',
	'Abierta los siete días',
	'Acceso para sillas de ruedas',
	'Panadería',
	'Cruz de Humilladero',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan del día',
		text: 'La descripción del propio negocio en Google dice que el pan se hace casero todos los días y es del día. Es lo único que la ficha cuenta sobre el género.',
	},
	{
		title: 'Abierta toda la semana',
		text: 'La ficha publica horario de lunes a domingo, sin día de cierre: entre semana y el domingo hasta las 17:30, y el viernes y el sábado hasta las 14:30.',
	},
	{
		title: 'Entrada sin escalones',
		text: 'Google marca el acceso para sillas de ruedas como atributo del local. No publica información sobre el interior ni sobre el aseo.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cafetería Panadería Margarita?',
		a: 'En la calle Corregidor Francisco de Molina, 3, en el barrio de Cruz de Humilladero (29006 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: lunes, martes, miércoles y jueves de 9:00 a 17:30; viernes y sábado de 9:00 a 14:30; y domingo de 9:00 a 17:30. No figura ningún día de cierre. El horario puede cambiar, y en festivos como el Día de Todos los Santos la propia ficha avisa de que podría ser distinto.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí, según el horario publicado en Google: el domingo figura abierta de 9:00 a 17:30.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'La ficha no publica ningún teléfono, así que esta página no ofrece número. La atención es en el propio establecimiento.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y su descripción habla de pan casero hecho a diario. No publica carta, surtido completo ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. No publica información sobre el interior, los aseos ni el aparcamiento, así que esta página no la añade.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene una valoración de 5,0 sobre 5 con 2 reseñas en el momento de consultarla (octubre de 2026). Con tan pocas opiniones la media es orientativa; el estado actual se puede ver en Google Maps.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
