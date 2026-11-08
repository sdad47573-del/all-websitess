/**
 * Datos de RESTAURANT PIZZERIA VENÈCIA — Sant Julià de Lòria (Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «RESTAURANT PIZZERIA VENÈCIA»,
 *   42.4626196,1.4911699, feature 0x12a5f37d59ce1799:0x5050715ef9e79ba8.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, Plus Code y
 *   fotos: respuesta pública de la ficha de Google consultada el 1 de noviembre
 *   de 2026 (4,4 · 622 reseñas).
 *
 * Avisos importantes:
 * - La ficha no publica carta, precios ni servicios (reparto, reservas,
 *   terraza). La web no los inventa: remite al teléfono.
 * - Accesibilidad según la ficha (noviembre de 2026): acceso y asientos
 *   adaptados para sillas de ruedas.
 * - La ficha es de una pizzería: el nombre comercial añade «restaurante», pero
 *   Google solo la clasifica como «Pizzería».
 */

export const BUSINESS = {
	name: 'RESTAURANT PIZZERIA VENÈCIA',
	displayName: 'Venècia',
	fullName: 'RESTAURANT PIZZERIA VENÈCIA',
	shortName: 'Venècia',
	mark: 'VP',
	street: 'Av. Verge de Canòlich, 20',
	district: 'Sant Julià de Lòria',
	city: 'Sant Julià de Lòria',
	region: 'Andorra',
	postalCode: 'AD600',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/restaurant-pizzeria-venecia',
	geo: { lat: 42.4626196, lng: 1.4911699 },
	featureId: '0x12a5f37d59ce1799:0x5050715ef9e79ba8',
	placeId: 'ChIJmRfOWX3zpRIRqJvn-V5xUFA',
	plusCode: 'FF7R+2F Sant Julià de Lòria',
	googleCategory: 'Pizzería',
	phone: '+376 841 796',
	phoneHref: 'tel:+376841796',
	tagline: 'Pizzería y restaurante en Sant Julià de Lòria',
	description:
		'RESTAURANT PIZZERIA VENÈCIA, en la Av. Verge de Canòlich, 20, de Sant Julià de Lòria (AD600). Pizzería de Andorra con 4,4 sobre 5 y 622 reseñas en Google. Abre a mediodía y por la noche, de 13:00 a 15:30 y de 20:00 a 23:30; cierra los martes.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANT+PIZZERIA+VEN%C3%88CIA/@42.4626196,1.4911699,17z/data=!3m1!4b1!4m6!3m5!1s0x12a5f37d59ce1799:0x5050715ef9e79ba8!8m2!3d42.4626196!4d1.4911699!16s%2Fg%2F1pp2xbjd3?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.4626196%2C1.4911699',
	embed: 'https://maps.google.com/maps?q=42.4626196,1.4911699&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.4626196,1.4911699',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 622,
	label: '4,4',
};

/** Horario que publica la ficha: dos servicios al día y el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–15:30 · 20:00–23:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '13:00–15:30 · 20:00–23:30' },
	{ dia: 'Jueves', horas: '13:00–15:30 · 20:00–23:30' },
	{ dia: 'Viernes', horas: '13:00–15:30 · 20:00–23:30' },
	{ dia: 'Sábado', horas: '13:00–15:30 · 20:00–23:30' },
	{ dia: 'Domingo', horas: '13:00–15:30 · 20:00–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que en festivos el horario puede ser distinto. Los martes cierra todo el día.';

export const SERVICIOS = [
	'Pizzería',
	'Sant Julià de Lòria',
	'Mediodía y noche',
	'Martes cerrado',
	'En la Av. Verge de Canòlich',
	'Acceso adaptado',
	'Cocina italiana',
	'4,4 en Google',
	'622 reseñas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pizzería, con nombre de restaurante',
		text: 'Google clasifica el negocio como «Pizzería», y el nombre comercial añade «restaurante»: la ficha no publica carta ni distingue entre pizzas al horno y platos de mesa. Eso se pregunta por teléfono.',
	},
	{
		title: 'Dos servicios al día',
		text: 'Abre a mediodía de 13:00 a 15:30 y vuelve por la noche de 20:00 a 23:30, de domingo a sábado. El martes está cerrado todo el día, y la ficha avisa de que en festivos el horario puede cambiar.',
	},
	{
		title: 'En la avenida de Sant Julià',
		text: 'La dirección de la ficha es Av. Verge de Canòlich, 20, en Sant Julià de Lòria (AD600), la parroquia de entrada a Andorra desde la Seu d’Urgell. Plus Code FF7R+2F.',
	},
	{
		title: 'Acceso y asientos adaptados',
		text: 'La ficha marca acceso para sillas de ruedas y asientos adaptados en el comedor. No publica datos sobre el aparcamiento, así que esta web no afirma nada al respecto.',
	},
	{
		title: '622 opiniones',
		text: 'La ficha reúne 622 reseñas con una media de 4,4 sobre 5 (noviembre de 2026). Es una muestra amplia para un local de parroquia: hay margen para opiniones de todo tipo, no solo las entusiastas.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está RESTAURANT PIZZERIA VENÈCIA?',
		a: 'En la Av. Verge de Canòlich, 20, de Sant Julià de Lòria (AD600, Andorra), en las coordenadas 42.4626196, 1.4911699 y Plus Code FF7R+2F. Se llega por la avenida que atraviesa la parroquia, en dirección al centro. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, sirve de 13:00 a 15:30 y de 20:00 a 23:30 de domingo a sábado, y cierra los martes todo el día. La ficha avisa de que en festivos el horario puede ser distinto, así que conviene llamar antes.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 841 796. Es la vía para reservar, preguntar por la carta, los precios o si hay sitio un día concreto; la web no gestiona reservas.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google la clasifica como «Pizzería», y el nombre comercial es «Restaurant Pizzeria Venècia». Es decir, el negocio se presenta como pizzería y restaurante; la ficha no publica carta ni platos concretos, así que la oferta exacta se consulta por teléfono.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica un sistema de reservas online ni dice si hacen falta. Para una mesa en fin de semana o para un grupo, lo práctico es llamar al +376 841 796 y preguntar.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados en el comedor. No publica datos sobre aparcamiento adaptado ni aseos, así que esta página no los afirma; si necesitas una condición concreta, llama al +376 841 796.',
	},
	{
		q: '¿Tiene terraza o reparto a domicilio?',
		a: 'La ficha pública no lo indica: no publica servicios de terraza, reparto ni comida para llevar. Conviene preguntarlo en el mismo teléfono, +376 841 796, antes de contar con ello.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,4 sobre 5 con 622 reseñas (consultado el 2 de noviembre de 2026). Es una media con muchas opiniones, así que refleja bastante bien la experiencia media del local, sin ser un 5 perfecto.',
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos, los precios y las opciones para celíacos o vegetarianos se preguntan por teléfono.',
	},
	{
		q: '¿Es un sitio para ir en familia?',
		a: 'No consta en la ficha. Lo único comprobable es el tipo de negocio (pizzería y restaurante) y el horario de comidas y cenas. Para saber si hay menú infantil, tronas o espacio para grupos, hay que llamar al local.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'RESTAURANT PIZZERIA VENÈCIA',
	actualizado: 'Noviembre de 2026',
};
