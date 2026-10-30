/**
 * Datos de Como En Casa Asador De Pollos Comida Casera Para Llevar —
 * C. Barcenillas, 4, Distrito Centro, 29012 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Como En Casa Asador De Pollos Comida
 *   Casera Para Llevar», 36.7268755,-4.4123866,
 *   feature 0xd72f7c6b8165369:0xa96d43fc2653d243.
 * - Nombre, categorías, dirección, teléfono, valoración, horario,
 *   accesibilidad y reseñas: ficha pública de Google consultada en octubre
 *   de 2026.
 *
 * La ficha no publica página web, carta ni precios. La web no inventa esos
 * datos: los platos que se citan son los que nombran las categorías del
 * negocio y las reseñas del perfil.
 */

export const BUSINESS = {
	name: 'Como En Casa',
	fullName: 'Como En Casa Asador De Pollos Comida Casera Para Llevar',
	shortName: 'Como En Casa',
	mark: 'CC',
	street: 'C. Barcenillas, 4',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29012',
	country: 'ES',
	siteUrl: 'https://como-en-casa-asador.vercel.app',
	geo: { lat: 36.7268755, lng: -4.4123866 },
	featureId: '0xd72f7c6b8165369:0xa96d43fc2653d243',
	placeId: 'ChIJaVMWuMb3cg0RQ9JTJvxDbak',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '951 99 39 29',
	phoneHref: 'tel:+34951993929',
	tagline: 'Asador de pollos y comida casera para llevar en el Centro',
	description:
		'Como En Casa, en C. Barcenillas, 4 (Distrito Centro, 29012 Málaga). Asador de pollos y comida casera para llevar, de 11:30 a 16:00, sábados cerrado. 4,5 sobre 5 con 34 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Como+En+Casa+Asador+De+Pollos+Comida+Casera+Para+Llevar/@36.7268755,-4.4123866,17z/data=!4m6!3m5!1s0xd72f7c6b8165369:0xa96d43fc2653d243!8m2!3d36.7268755!4d-4.4123866!16s%2Fg%2F11f3sc6qpm?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7268755%2C-4.4123866',
	embed: 'https://maps.google.com/maps?q=36.7268755,-4.4123866&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7268755,-4.4123866',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 34,
	label: '4,5',
};

/** Horario que publica la ficha: mediodía, con el sábado cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:30–16:00' },
	{ dia: 'Martes', horas: '11:30–16:00' },
	{ dia: 'Miércoles', horas: '11:30–16:00' },
	{ dia: 'Jueves', horas: '11:30–16:00' },
	{ dia: 'Viernes', horas: '11:30–16:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: '11:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. Confirma la apertura en Google o por teléfono antes de desplazarte.';

export const HIGHLIGHTS = [
	{
		title: 'Todo casero',
		text: 'Es lo que más repiten las reseñas: «todo casero y muy rico», «comida fantástica, casera». El nombre del negocio lo deja claro desde el principio: Como En Casa.',
	},
	{
		title: 'Raciones bien servidas',
		text: '«Raciones bien servidas» y «buenos precios» aparecen en la ficha. Es comida de mediodía para llevar, sin carta publicada ni precios en Google.',
	},
	{
		title: 'Asador de pollos',
		text: 'Google lo clasifica como restaurante especializado en pollo. El negocio añade al nombre «asador de pollos» y «comida casera para llevar».',
	},
];

/** Solo lo que nombran las categorías del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la categoría principal de la ficha, «restaurante especializado en pollo»',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Comida casera',
				note: 'el negocio la anuncia en su propio nombre y las reseñas la describen como casera y abundante',
			},
			{
				name: 'Raciones para llevar',
				note: 'una reseña habla de «raciones bien servidas»; la ficha no publica carta ni importes',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Comida fantástica, casera, raciones bien servidas.',
		valor: 5,
	},
	{
		texto: 'Y las trabajadoras un amor, todo casero y muy rico, repetiremos sin duda!!',
		valor: 5,
	},
	{
		texto: 'Comida buenísima y buenos precios',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Como En Casa?',
		a: 'En la calle Barcenillas, 4, en el Distrito Centro (29012 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 11:30 a 16:00 de lunes a viernes y el domingo; el sábado figura como cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Google lo clasifica como restaurante especializado en pollo. El nombre del negocio añade asador de pollos y comida casera para llevar, y las reseñas hablan de comida casera y raciones bien servidas. La carta completa no está publicada.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni importes; una reseña menciona «buenos precios», sin cifras. Para saber qué hay y cuánto cuesta, llama al 951 99 39 29.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí: «comida casera para llevar» forma parte del nombre del negocio. El pedido se recoge en el local.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica reservas online ni un teléfono específico para ellas. El único canal que aparece es el 951 99 39 29.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. Indica que no hay aparcamiento accesible ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,5 sobre 5 con 34 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones destacan el trato de las trabajadoras, la comida casera y las raciones.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
