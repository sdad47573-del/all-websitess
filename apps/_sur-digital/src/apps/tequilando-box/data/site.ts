/**
 * Datos de Restaurant Tequilando Box «Mexican Street Food» —
 * Av. de Tarragona, 53, Local 2 (AD500 Andorra la Vella).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurant Tequilando Box "Mexican Street Food"»,
 *   42.5051766,1.527328, feature 0x12a58bec4f604213:0xad71564d36e91df6.
 * - Nombre, dirección, categoría, teléfono, valoración, horario y web: respuesta
 *   pública de la ficha de Google consultada el 1 de noviembre de 2026
 *   (4,6 · 285 reseñas).
 *
 * Avisos:
 * - Google la clasifica como «Restaurante mexicano». La ficha enlaza una carta
 *   online, pero esta web no copia precios ni platos de ella.
 * - La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario
 *   podría ser distinto.
 */

export const BUSINESS = {
	name: 'Tequilando Box',
	fullName: 'Restaurant Tequilando Box «Mexican Street Food»',
	shortName: 'Tequilando Box',
	mark: 'TB',
	street: 'Av. de Tarragona, 53, Local 2',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/tequilando-box',
	geo: { lat: 42.5051766, lng: 1.527328 },
	featureId: '0x12a58bec4f604213:0xad71564d36e91df6',
	placeId: 'ChIJE0JgT-yLpRIR9h3pNk1Wca0',
	googleCategory: 'Restaurante mexicano',
	phone: '+376 805 515',
	phoneHref: 'tel:+376805515',
	website: 'https://tequilandobox-menu-carta.my.canva.site/#inicio',
	tagline: 'Comida mexicana tipo street food en Andorra la Vella',
	description:
		'Restaurant Tequilando Box «Mexican Street Food», en la Av. de Tarragona, 53, Local 2, de Andorra la Vella (AD500). Restaurante mexicano con 4,6 sobre 5 y 285 reseñas en Google. Teléfono +376 805 515.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+Tequilando+Box+%22Mexican+Street+Food%22/@42.5051766,1.527328,17z/data=!4m6!3m5!1s0x12a58bec4f604213:0xad71564d36e91df6!8m2!3d42.5051766!4d1.527328!16s%2Fg%2F11nwl0yyb5?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5051766%2C1.527328',
	embed: 'https://maps.google.com/maps?q=42.5051766,1.527328&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5051766,1.527328',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.6,
	count: 285,
	label: '4,6',
};

/**
 * Horario que publica la ficha. Los turnos son los de la semana consultada.
 * El domingo aparece cerrado el 1 de noviembre (festivo); el horario habitual
 * del domingo no aparece en la respuesta consultada.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–15:30 · 19:00–22:00' },
	{ dia: 'Martes', horas: '12:30–15:30' },
	{ dia: 'Miércoles', horas: '12:30–15:30 · 19:00–22:00' },
	{ dia: 'Jueves', horas: '12:30–15:30 · 19:00–22:00' },
	{ dia: 'Viernes', horas: '12:30–15:30 · 19:00–22:30' },
	{ dia: 'Sábado', horas: '12:30–15:30 · 19:00–22:30' },
	{ dia: 'Domingo', horas: 'Consultar en la ficha' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Confírmalo por teléfono antes de desplazarte.';

export const SERVICIOS = [
	'Restaurante mexicano',
	'Street food',
	'Abierto a mediodía y por la noche',
	'4,6 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Mexican Street Food',
		text: 'Así se presenta el local en su nombre completo. Google lo clasifica como «Restaurante mexicano».',
	},
	{
		title: 'Dos turnos',
		text: 'Según la ficha, abre a mediodía, de 12:30 a 15:30, y por la noche en varios días de la semana.',
	},
	{
		title: 'En Andorra la Vella',
		text: 'Está en la Av. de Tarragona, 53, Local 2, en Andorra la Vella (AD500).',
	},
	{
		title: '285 opiniones',
		text: 'La ficha reúne 285 reseñas con una media de 4,6 sobre 5 (noviembre de 2026).',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tequilando Box?',
		a: 'En la Av. de Tarragona, 53, Local 2, en Andorra la Vella (AD500). El mapa de esta página muestra la ubicación y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google: de 12:30 a 15:30 y, en varios días, también de 19:00 a 22:00 o 22:30. El martes solo abre a mediodía. La ficha avisa de que en festivos, como el Día de Todos los Santos, el horario podría ser distinto.',
	},
	{
		q: '¿Qué tipo de cocina tiene?',
		a: 'Google la clasifica como «Restaurante mexicano». La ficha no publica la carta completa en sí, pero enlaza una carta online del local.',
	},
	{
		q: '¿Cómo puedo consultar la carta?',
		a: 'La ficha de Google enlaza una carta online del propio local. Esta web no copia precios ni platos de ella; para dudas, llama al +376 805 515.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 805 515. Sirve para preguntar por la carta, el horario o un pedido concreto; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,6 sobre 5 con 285 reseñas (consultado el 1 de noviembre de 2026).',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurant Tequilando Box',
	actualizado: 'Noviembre de 2026',
};
