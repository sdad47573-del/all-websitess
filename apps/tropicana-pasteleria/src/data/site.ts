/**
 * Datos de Tropicana Pastelería — C. Nuzas, 22 (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Tropicana Pastelería,
 *   36.7309051,-4.469115, feature 0xd72f73aade77037:0xdedd9b98fad3b8c0.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La web
 * no inventa esos datos. «Boutique de la Panadería» es la descripción que el propio
 * negocio escribe en Google.
 */

export const BUSINESS = {
	name: 'Tropicana Pastelería',
	shortName: 'Tropicana',
	mark: 'T',
	street: 'C. Nuzas, 22',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://tropicana-pasteleria.vercel.app',
	geo: { lat: 36.7309051, lng: -4.469115 },
	featureId: '0xd72f73aade77037:0xdedd9b98fad3b8c0',
	placeId: 'ChIJN3DnrTr3cg0RwLjT-pib3d4',
	plusCode: '8C8QPGJJ+99',
	googleCategory: 'Panadería y pastelería',
	phone: '697 56 30 66',
	phoneHref: 'tel:+34697563066',
	tagline: 'Pastelería y panadería en el barrio de Teatinos',
	description:
		'Tropicana Pastelería, en la calle Nuzas, 22 (Teatinos-Universidad, 29010 Málaga). Pastelería tradicional, bollería y panadería, abierta todos los días de la semana.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tropicana+Pasteler%C3%ADa/@36.7309051,-4.469115,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73aade77037:0xdedd9b98fad3b8c0!8m2!3d36.7309051!4d-4.469115!16s%2Fg%2F1ttpcnf_?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=16060267899955300544',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7309051%2C-4.469115',
	embed: 'https://maps.google.com/maps?q=36.7309051,-4.469115&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7309051,-4.469115',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.4,
	count: 52,
	label: '4,4',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–20:00' },
	{ dia: 'Martes', horas: '8:00–20:00' },
	{ dia: 'Miércoles', horas: '8:00–20:00' },
	{ dia: 'Jueves', horas: '8:00–20:00' },
	{ dia: 'Viernes', horas: '8:00–20:00' },
	{ dia: 'Sábado', horas: '8:00–19:00' },
	{ dia: 'Domingo', horas: '8:00–19:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pastelería tradicional',
	'Bollería',
	'Panadería',
	'Abierta los 7 días',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pastelería tradicional',
		text: 'Una de las reseñas de la ficha la define como «pastelería tradicional, ricos y grandes». La ficha la clasifica a la vez como panadería y pastelería.',
	},
	{
		title: 'Trato de mostrador',
		text: 'Las opiniones publicadas repiten el buen trato: «buen trato al público», «trato de la dependienta exquisita» y «dependienta super simpática».',
	},
	{
		title: 'Abierta todos los días',
		text: 'La ficha publica horario de lunes a domingo, de 8:00 a 20:00 entre semana y hasta las 19:00 el fin de semana. No figura ningún día de cierre.',
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'Muy buenos los dulces y buen trato al público', valor: 5 },
	{ texto: 'Pasteleria tradicional, ricos y grandes. trato de la dependienta exquisita.', valor: 5 },
	{ texto: 'Dependienta super simpática y la repostería de vicio.', valor: 4 },
];

export const FAQ = [
	{
		q: '¿Dónde está Tropicana Pastelería?',
		a: 'En la calle Nuzas, 22, en el barrio de Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: de lunes a viernes de 8:00 a 20:00, y sábado y domingo de 8:00 a 19:00. No figura ningún día de cierre. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. Según el horario publicado en Google, el domingo abre de 8:00 a 19:00.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'Sí. El teléfono que publica la ficha es el 697 56 30 66, y esta página lo enlaza para llamar directamente desde el móvil.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y pastelería, y su descripción dice «Boutique de la Panadería». Las reseñas hablan de dulces, repostería y pastelería tradicional. No publica carta ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene una valoración de 4,4 sobre 5 con 52 reseñas en el momento de consultarla (octubre de 2026). El estado actualizado y las reseñas completas se ven en Google Maps.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
