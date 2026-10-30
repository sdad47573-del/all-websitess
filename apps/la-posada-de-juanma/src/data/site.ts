/**
 * Datos de La posada de Juanma — Av. de la Paloma, 41,
 * Carretera de Cádiz, 29003 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La posada de Juanma»,
 *   36.701857,-4.445183, feature 0xd72f75e3e0da785:0x64d449561041c4a4.
 * - Nombre, categoría, descripción del negocio, dirección, teléfono,
 *   valoración, horario, accesibilidad y reseñas: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * La ficha no publica página web, carta ni precios. La web no inventa esos
 * datos: los platos que se citan son los que nombran la descripción del
 * negocio y las reseñas del perfil.
 */

export const BUSINESS = {
	name: 'La posada de Juanma',
	fullName: 'La posada de Juanma',
	shortName: 'La posada',
	mark: 'PJ',
	street: 'Av. de la Paloma, 41',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	siteUrl: 'https://la-posada-de-juanma.vercel.app',
	geo: { lat: 36.701857, lng: -4.445183 },
	featureId: '0xd72f75e3e0da785:0x64d449561041c4a4',
	placeId: 'ChIJhacNPl73cg0RpMRBEFZJ1GQ',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '633 19 86 32',
	phoneHref: 'tel:+34633198632',
	tagline: 'Asador de pollos con comida casera en Carretera de Cádiz',
	description:
		'La posada de Juanma, en Av. de la Paloma, 41 (Carretera de Cádiz, 29003 Málaga). Asador de pollos con comida casera y comida para llevar, de 12:00 a 16:00. 4,5 sobre 5 con 29 reseñas en Google.',
	/** Descripción que publica el propio negocio en su ficha de Google. */
	ownDescription: 'Asador de pollos con comida casera.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+posada+de+Juanma/@36.701857,-4.445183,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f75e3e0da785:0x64d449561041c4a4!8m2!3d36.701857!4d-4.445183!16s%2Fg%2F11s3b0h2dm?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.701857%2C-4.445183',
	embed: 'https://maps.google.com/maps?q=36.701857,-4.445183&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.701857,-4.445183',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 29,
	label: '4,5',
};

/** Horario que publica la ficha: mediodía, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–16:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:00–16:00' },
	{ dia: 'Jueves', horas: '12:00–16:00' },
	{ dia: 'Viernes', horas: '12:00–16:00' },
	{ dia: 'Sábado', horas: '12:00–16:00' },
	{ dia: 'Domingo', horas: '12:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. Confirma la apertura en Google o por teléfono antes de desplazarte.';

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Una de las reseñas de la ficha no deja dudas: «El mejor pollo asado que he probado en Málaga». El negocio se presenta como asador de pollos con comida casera.',
	},
	{
		title: 'Raciones de las de antes',
		text: '«El pollo buenísimo y la ración de patatas era cuantiosa», cuenta otra reseña. Las patatas son el acompañamiento que más se repite en las opiniones.',
	},
	{
		title: 'Para llevar',
		text: 'Google lo clasifica como restaurante de comida para llevar, así que el pedido se recoge y se come donde quieras. Abre de 12:00 a 16:00 y cierra los martes.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que da nombre a la casa y el que destaca la descripción del negocio',
			},
			{
				name: 'Patatas',
				note: 'la guarnición que aparece en las reseñas, con ración abundante según una de ellas',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Comida casera',
				note: 'así se describe el negocio en Google: asador de pollos con comida casera',
			},
			{
				name: 'Menú para llevar',
				note: 'la ficha lo clasifica como restaurante de comida para llevar; no publica la lista ni los precios',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'El mejor pollo asado que he probado en Málaga!',
		valor: 5,
	},
	{
		texto: 'El pollo buenísimo y la ración de patatas era cuantiosa.',
		valor: 5,
	},
	{
		texto: 'Y deberían también diferenciar como en otros sitios la cola de reserva.',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La posada de Juanma?',
		a: 'En la avenida de la Paloma, 41, en Carretera de Cádiz (29003 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 12:00 a 16:00 de lunes a domingo, con el martes cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'El negocio se describe como «asador de pollos con comida casera». Las reseñas hablan del pollo asado y de la ración de patatas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni importes. Para saber qué hay y cuánto cuesta, llama al 633 19 86 32.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí: Google lo clasifica como restaurante de comida para llevar, y así lo indica el propio negocio. El pedido se recoge en el local.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas. Una reseña menciona que convendría diferenciar la cola de reserva, así que si vas en grupo, llama antes al 633 19 86 32.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. Indica que no hay aparcamiento accesible ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,5 sobre 5 con 29 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones destacan el pollo asado y el tamaño de las raciones.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
