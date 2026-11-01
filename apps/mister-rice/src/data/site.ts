/**
 * Datos de Restaurante Mister Rice — Av. de Lope de Vega, 19, Teatinos
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurante Mister Rice»,
 *   36.7302009,-4.4683286, feature 0xd72f711d3ee1fb3:0xb07578f8bdb6f31f.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, Plus Code y
 *   fotos: respuesta pública de la ficha de Google consultada el 1 de noviembre
 *   de 2026 (4,1 · 190 reseñas).
 *
 * Avisos importantes:
 * - Google lo clasifica como «Restaurante chino». La ficha no publica carta ni
 *   precios, y tampoco un menú del día: la web no los inventa.
 * - El martes solo abre a mediodía; el resto de días tiene dos turnos.
 */

export const BUSINESS = {
	name: 'Restaurante Mister Rice',
	fullName: 'Restaurante Mister Rice',
	shortName: 'Mister Rice',
	mark: 'MR',
	street: 'Av. de Lope de Vega, 19',
	district: 'Teatinos',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://mister-rice.vercel.app',
	geo: { lat: 36.7302009, lng: -4.4683286 },
	featureId: '0xd72f711d3ee1fb3:0xb07578f8bdb6f31f',
	placeId: 'ChIJsx_u0xH3cg0RH_O2vfh4dbA',
	plusCode: '8C8QPGJJ+3M',
	googleCategory: 'Restaurante chino',
	phone: '673 79 17 37',
	phoneHref: 'tel:+34673791737',
	tagline: 'Restaurante chino en Teatinos, Málaga',
	description:
		'Restaurante Mister Rice, en la Av. de Lope de Vega, 19, Teatinos (29010 Málaga). Restaurante chino con servicio de mediodía y noche, de 13:00 a 16:15 y de 20:00 a 23:30; los martes solo a mediodía. 4,1 sobre 5 con 190 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Mister+Rice/@36.7302009,-4.4683286,17z/data=!4m6!3m5!1s0xd72f711d3ee1fb3:0xb07578f8bdb6f31f!8m2!3d36.7302009!4d-4.4683286!16s%2Fg%2F11sz3qnz4r?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7302009%2C-4.4683286',
	embed: 'https://maps.google.com/maps?q=36.7302009,-4.4683286&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7302009,-4.4683286',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 190,
	label: '4,1',
};

/** Horario que publica la ficha: dos turnos, salvo el martes, solo mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:15 · 20:00–23:30' },
	{ dia: 'Martes', horas: '13:00–16:15' },
	{ dia: 'Miércoles', horas: '13:00–16:15 · 20:00–23:30' },
	{ dia: 'Jueves', horas: '13:00–16:15 · 20:00–23:30' },
	{ dia: 'Viernes', horas: '13:00–16:15 · 20:00–23:30' },
	{ dia: 'Sábado', horas: '13:00–16:15 · 20:00–23:30' },
	{ dia: 'Domingo', horas: '13:00–16:15 · 20:00–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Los martes no abre por la noche.';

export const SERVICIOS = [
	'Restaurante chino',
	'Cocina asiática',
	'Teatinos',
	'Av. de Lope de Vega, 19',
	'Comidas y cenas',
	'Martes solo mediodía',
	'Acceso para sillas de ruedas',
	'4,1 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina china en Teatinos',
		text: 'Google clasifica el negocio como «Restaurante chino», y el nombre lo deja claro: el arroz es la seña de la casa. La ficha no publica carta ni platos concretos, así que el surtido real se consulta por teléfono.',
	},
	{
		title: 'Dos turnos al día',
		text: 'Sirve de 13:00 a 16:15 y de 20:00 a 23:30, de domingo a sábado. El martes solo abre a mediodía, y la ficha advierte de que en festivos el horario puede cambiar.',
	},
	{
		title: 'En la avenida de Lope de Vega',
		text: 'La dirección de la ficha es Av. de Lope de Vega, 19, en Teatinos-Universidad (29010 Málaga), la zona universitaria y hospitalaria de la ciudad. Plus Code PGJJ+3M.',
	},
	{
		title: '190 opiniones',
		text: 'La ficha reúne 190 reseñas con una media de 4,1 sobre 5 (noviembre de 2026). Es una muestra amplia para un restaurante de barrio: hay opiniones muy buenas y alguna que no lo es tanto.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Mister Rice?',
		a: 'En la Av. de Lope de Vega, 19, en Teatinos-Universidad (29010 Málaga), frente a la zona universitaria y a pocos minutos del Hospital Clínico. Sus coordenadas son 36.7302009, -4.4683286 y su Plus Code PGJJ+3M. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de 13:00 a 16:15 y de 20:00 a 23:30 de domingo a sábado, salvo los martes, que solo sirve a mediodía. La ficha avisa de que en festivos —por ejemplo el Día de Todos los Santos— el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el 673 79 17 37. Es la vía para reservar mesa, preguntar por la carta o confirmar el horario; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google lo clasifica como «Restaurante chino», y el nombre comercial —Mister Rice— apunta al arroz como plato central. La ficha no publica carta ni precios, así que los platos concretos, el menú del día y las opciones vegetarianas se preguntan por teléfono.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'La ficha de Google no publica menú del día ni precios, y esta web no los inventa. Si el local lo tiene, se consulta en el 673 79 17 37 o en el propio establecimiento.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni dice si hacen falta. Para una mesa en fin de semana o para un grupo, lo práctico es llamar al 673 79 17 37.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'La ficha pública no publica servicios de comida para llevar ni de reparto a domicilio, así que no se puede afirmar desde aquí. Conviene preguntarlo en el mismo teléfono, el 673 79 17 37, antes de contar con ello.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,1 sobre 5 con 190 reseñas (consultado el 1 de noviembre de 2026). Es una media con bastantes opiniones, así que refleja la experiencia habitual del restaurante: buena, pero con margen.',
	},
	{
		q: '¿Hay que aparcar por la zona?',
		a: 'La ficha no publica datos de aparcamiento propio ni de accesibilidad. La avenida está en pleno Teatinos, una zona de calles anchas y tráfico universitario; para el aparcamiento y el acceso al local, lo mejor es consultar el mapa o llamar antes.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurante Mister Rice',
	actualizado: 'Noviembre de 2026',
};
