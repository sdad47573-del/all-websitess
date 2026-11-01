/**
 * Datos de Anya Take Away — Andorra la Vella (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Anya Take Away», 42.506709,1.5187141,
 *   feature 0x12a5f50021d63897:0x53f40e20c66cd42.
 * - Nombre, dirección, teléfono, categorías, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,9 · 7 reseñas).
 * - Categorías: «Comida a domicilio» y «Restaurante familiar».
 *
 * Avisos importantes:
 * - Google no publica calle para este negocio: el campo de dirección solo trae
 *   «Ad500», el código postal. La web lo dice en vez de inventar una calle.
 * - La ficha no tiene fotos, ni carta, ni precios. Por eso la portada es un
 *   gráfico propio y no hay galería ni carta inventada.
 */

export const BUSINESS = {
	name: 'Anya Take Away',
	fullName: 'Anya Take Away',
	shortName: 'Anya',
	mark: 'AT',
	street: 'AD500 · Andorra la Vella',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://anya-take-away.vercel.app',
	geo: { lat: 42.506709, lng: 1.5187141 },
	featureId: '0x12a5f50021d63897:0x53f40e20c66cd42',
	placeId: 'ChIJlzjWIQD1pRIRQs1mDOJAPwU',
	plusCode: 'GG49+MF Andorra la Vella',
	googleCategory: 'Comida a domicilio',
	phone: '+376 666 669',
	phoneHref: 'tel:+376666669',
	tagline: 'Comida para llevar y a domicilio en Andorra la Vella',
	description:
		'Anya Take Away, en Andorra la Vella. Comida a domicilio y restaurante familiar, con servicio para llevar y reparto por teléfono. 4,9 sobre 5 con 7 reseñas en Google. Abre de 8:00 a 22:00, con el martes y el domingo solo hasta las 15:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Anya+Take+Away/@42.506709,1.5187141,17z/data=!4m6!3m5!1s0x12a5f50021d63897:0x53f40e20c66cd42!8m2!3d42.506709!4d1.5187141!16s%2Fg%2F11y9swy_xq?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.506709%2C1.5187141',
	embed: 'https://maps.google.com/maps?q=42.506709,1.5187141&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.506709,1.5187141',
};

/**
 * Valoración publicada en la ficha (1 de noviembre de 2026). Solo siete
 * reseñas: la web lo dice para no darle más peso del que tiene.
 */
export const RATING = {
	value: 4.9,
	count: 7,
	label: '4,9',
};

/** Horario que publica la ficha: martes y domingo solo por la mañana. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–22:00' },
	{ dia: 'Martes', horas: '8:00–15:00' },
	{ dia: 'Miércoles', horas: '8:00–22:00' },
	{ dia: 'Jueves', horas: '8:00–22:00' },
	{ dia: 'Viernes', horas: '8:00–22:00' },
	{ dia: 'Sábado', horas: '8:00–22:00' },
	{ dia: 'Domingo', horas: '9:00–15:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El martes y el domingo cierra a las 15:00.';

export const SERVICIOS = [
	'Comida a domicilio',
	'Para llevar',
	'Restaurante familiar',
	'Pedidos por teléfono',
	'Abierto por la mañana',
	'Al mediodía',
	'Hasta las 22:00',
	'Andorra la Vella',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida a domicilio',
		text: 'Google lo clasifica como servicio de comida a domicilio: se pide por teléfono y se lleva a casa. Es la vía más directa, porque el local no tiene web propia ni pedidos online.',
	},
	{
		title: 'Restaurante familiar',
		text: 'La segunda categoría de la ficha es «restaurante familiar», y el nombre lo dice todo: comida para llevar pensada para comer en casa, sin carta publicada ni platos concretos en el perfil.',
	},
	{
		title: 'Horario amplio',
		text: 'Abre a las 8:00 y cierra a las 22:00 de lunes a sábado, con el martes y el domingo solo hasta las 15:00. Son horas de desayuno, comida y cena, no las de un restaurante de mesa.',
	},
	{
		title: 'En Andorra la Vella',
		text: 'La ficha sitúa el negocio en Andorra la Vella, en las coordenadas 42.506709, 1.5187141 (Plus Code GG49+MF). No publica calle: el campo de dirección solo trae el código postal AD500, así que la web no inventa una.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Anya Take Away?',
		a: 'En Andorra la Vella (Principado de Andorra), en las coordenadas 42.506709, 1.5187141, Plus Code GG49+MF. La ficha de Google no publica la calle: el campo de dirección solo trae el código postal AD500. Para una ubicación exacta, lo mejor es llamar al +376 666 669 o abrir el mapa de esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de 8:00 a 22:00 de lunes a sábado, salvo el martes, que cierra a las 15:00. El domingo abre de 9:00 a 15:00. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 666 669. Es el número para pedir comida, preguntar por la carta o confirmar el reparto, ya que el local no tiene web propia ni pedidos online.',
	},
	{
		q: '¿Qué tipo de comida es?',
		a: 'La ficha lo clasifica como «comida a domicilio» y «restaurante familiar», pero no publica carta ni platos. No se puede decir desde aquí qué cocina exactamente: conviene preguntar por teléfono o consultar la ficha de Google.',
	},
	{
		q: '¿Hacen reparto?',
		a: 'La categoría principal de la ficha es «Comida a domicilio», así que el reparto es parte del negocio. Conviene confirmar la zona y el importe mínimo al llamar al +376 666 669.',
	},
	{
		q: '¿Se puede recoger en el local?',
		a: 'El nombre del negocio es «Take Away», así que la comida para llevar es la base. La ficha no publica dirección exacta, por lo que lo práctico es llamar antes y confirmar dónde se recoge el pedido.',
	},
	{
		q: '¿Cuánta valoración tiene?',
		a: '4,9 sobre 5, pero con solo 7 reseñas: es una muestra demasiado pequeña para sacar conclusiones. La web lo dice en vez de presentarlo como una media consolidada.',
	},
	{
		q: '¿Tiene carta o precios?',
		a: 'La ficha no publica carta ni precios, y no hay fotos en el perfil. Los platos y los importes se consultan por teléfono, en el +376 666 669.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos públicos de la ficha y no gestiona pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Anya Take Away',
	actualizado: 'Noviembre de 2026',
};
