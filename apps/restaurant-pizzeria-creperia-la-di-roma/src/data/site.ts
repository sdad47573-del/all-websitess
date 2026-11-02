/**
 * Datos de RESTAURANT PIZZERIA CREPERIA LA DI ROMA — El Pas de la Casa (Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «RESTAURANT PIZZERIA CREPERIA LA DI ROMA»,
 *   42.5408852,1.733738, feature 0x12af7d8b2522358f:0x7d90700adb950c7c.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, Plus Code y
 *   fotos: respuesta pública de la ficha de Google consultada el 2 de noviembre
 *   de 2026 (4,0 · 499 reseñas).
 *
 * Avisos importantes:
 * - La ficha no publica carta, precios ni servicios (reparto, terraza). La web
 *   no los inventa: remite al teléfono.
 * - Cierra a la 1:00 de la madrugada, no a las 22:00: el horario se escribe tal
 *   cual lo publica Google, sin convertirlo a un cierre del mismo día.
 */

export const BUSINESS = {
	name: 'RESTAURANT PIZZERIA CREPERIA LA DI ROMA',
	displayName: 'La Di Roma',
	fullName: 'RESTAURANT PIZZERIA CREPERIA LA DI ROMA',
	shortName: 'La Di Roma',
	mark: 'LR',
	street: "Av. d'Encamp, 23",
	district: 'El Pas de la Casa',
	city: 'El Pas de la Casa',
	region: 'Andorra',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://restaurant-pizzeria-creperia-la-di-roma.vercel.app',
	geo: { lat: 42.5408852, lng: 1.733738 },
	featureId: '0x12af7d8b2522358f:0x7d90700adb950c7c',
	placeId: 'ChIJjzUiJYt9rxIRfAyV2wpwkH0',
	plusCode: 'GPRM+9F El Pas de la Casa',
	googleCategory: 'Pizzería',
	phone: '+376 855 516',
	phoneHref: 'tel:+376855516',
	tagline: 'Restaurante, pizzería y crepería en El Pas de la Casa',
	description:
		'RESTAURANT PIZZERIA CREPERIA LA DI ROMA, en la Av. d’Encamp, 23, de El Pas de la Casa (AD200, Andorra). Restaurante, pizzería y crepería con 4,0 sobre 5 y 499 reseñas en Google. Abre todos los días de 9:00 a 1:00 de la madrugada.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANT+PIZZERIA+CREPERIA+LA+DI+ROMA/@42.5408852,1.733738,17z/data=!3m1!4b1!4m6!3m5!1s0x12af7d8b2522358f:0x7d90700adb950c7c!8m2!3d42.5408852!4d1.733738!16s%2Fg%2F1pp2xbhzk?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5408852%2C1.733738',
	embed: 'https://maps.google.com/maps?q=42.5408852,1.733738&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5408852,1.733738',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 4.0,
	count: 499,
	label: '4,0',
};

/** Horario que publica la ficha: un solo servicio, de 9:00 a la 1:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–1:00' },
	{ dia: 'Martes', horas: '9:00–1:00' },
	{ dia: 'Miércoles', horas: '9:00–1:00' },
	{ dia: 'Jueves', horas: '9:00–1:00' },
	{ dia: 'Viernes', horas: '9:00–1:00' },
	{ dia: 'Sábado', horas: '9:00–1:00' },
	{ dia: 'Domingo', horas: '9:00–1:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha no añade avisos de festivos para este local. La hora de cierre que publica es la 1:00, es decir, ya pasada la medianoche.';

export const SERVICIOS = [
	'Restaurante',
	'Pizzería',
	'Crepería',
	'Fondues y raclette',
	'Tartiflette',
	'Tapas',
	'Terraza',
	'Take away',
	'El Pas de la Casa',
	'De 9:00 a 1:00',
];

export const HIGHLIGHTS = [
	{
		title: 'Tres cartas en una',
		text: 'El nombre comercial lo dice: restaurante, pizzería y crepería. Google la clasifica como «Pizzería» y añade la etiqueta de «Brunch», así que conviven la pizza, las crepes y el servicio de mañana.',
	},
	{
		title: 'Fondue, raclette y tartiflette',
		text: 'El rótulo de la fachada, en una de las fotos del perfil, anuncia «Fondues et raclette à volonté · Tartiflette · Tapas». Es la cocina de montaña que pide un pueblo a 2.050 metros y a un paso de la frontera francesa. La ficha no publica carta ni precios.',
	},
	{
		title: 'Terraza de madera y take away',
		text: 'La foto de la fachada muestra una terraza de madera con mesas y bancos en la acera de la Av. d’Encamp, además del cartel de «Take away» y la pizarra de precios junto a la puerta.',
	},
	{
		title: 'Abierto hasta la 1:00',
		text: 'Abre de 9:00 a 1:00 todos los días, sin día de cierre en la ficha. En un pueblo de esquí y de compras como El Pas de la Casa, eso cubre desayuno, comida, merienda, cena y la copa de después.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está LA DI ROMA?',
		a: 'En la Av. d’Encamp, 23, de El Pas de la Casa (AD200, Andorra), en las coordenadas 42.5408852, 1.733738 y Plus Code GPRM+9F. El Pas de la Casa es el núcleo de montaña de la parroquia de Encamp, en la frontera con Francia, así que la avenida es la vía principal del pueblo. El mapa de esta página abre la ubicación exacta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de 9:00 a 1:00 todos los días, de lunes a domingo, sin día de cierre semanal. La 1:00 es ya la madrugada del día siguiente. La ficha no añade avisos de festivos, así que en una fecha señalada conviene llamar antes.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 855 516. Es la vía para preguntar por la carta, reservar mesa o confirmar el horario en una fecha concreta; esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'El nombre comercial es «Restaurant Pizzeria Creperia La Di Roma»: restaurante, pizzería y crepería en el mismo local. Google la clasifica como «Pizzería» y añade la etiqueta «Brunch», y el rótulo de la fachada anuncia fondues, raclette, tartiflette y tapas. La ficha no publica carta ni precios, así que la oferta exacta se consulta por teléfono.'
	},
	{
		q: '¿Sirve desayunos o brunch?',
		a: 'La ficha incluye la etiqueta «Brunch» y abre a las 9:00, pero no publica qué incluye ni el precio. Para saber qué hay a primera hora, hay que llamar al +376 855 516.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni dice si hacen falta. Para una mesa en temporada de esquí, cuando el pueblo se llena, lo práctico es llamar al +376 855 516.',
	},
	{
		q: '¿Tiene terraza o comida para llevar?',
		a: 'Sí a las dos cosas, según las fotos del perfil: la fachada tiene una terraza de madera con mesas y bancos en la acera, y el rótulo anuncia «Take away». Lo que la ficha no publica es reparto a domicilio, así que si lo necesitas hay que llamar al +376 855 516 y preguntar.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,0 sobre 5 con 499 reseñas (consultado el 2 de noviembre de 2026). Es una media con muchas opiniones, así que refleja la experiencia media: hay mesas muy bien valoradas y otras que no, y merece la pena leer las reseñas enteras en la ficha.',
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos, los precios y las opciones vegetarianas o sin gluten se preguntan por teléfono.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'RESTAURANT PIZZERIA CREPERIA LA DI ROMA',
	actualizado: 'Noviembre de 2026',
};
