/**
 * Datos de El Puesto de Mariano — Mercado de Abasto Las Palmeritas,
 * C. Beatriz de Suabia (41005 Sevilla). Ficha pública de Google Maps
 * consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La oferta que se describe son los
 * platos que aparecen en las fotografías del puesto y en sus reseñas.
 */

export const BUSINESS = {
	name: 'El Puesto de Mariano',
	shortName: 'El Puesto',
	mark: 'PM',
	street: 'Mercado de Abasto Las Palmeritas, C. Beatriz de Suabia',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41005',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-puesto-de-mariano',
	geo: { lat: 37.3778108, lng: -5.967862 },
	featureId: '0xd126fe2ef86c49f:0xb1e53b311db8ccc2',
	placeId: 'ChIJn8SG7-JvEg0Rwsy4HTE75bE',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '620 00 90 17',
	phoneHref: 'tel:+34620009017',
	tagline: 'Comida casera y menús diarios en el mercado',
	description:
		'El Puesto de Mariano, comida casera para llevar en el Mercado de Abasto Las Palmeritas (C. Beatriz de Suabia, 41005 Sevilla). Recetas tradicionales de elaboración lenta, menús diarios y repostería casera. Encargos por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Puesto+de+Mariano/@37.3778108,-5.967862,17z/data=!3m1!4b1!4m6!3m5!1s0xd126fe2ef86c49f:0xb1e53b311db8ccc2!8m2!3d37.3778108!4d-5.967862!16s%2Fg%2F11rmq9kzww',
	cid: 'https://www.google.com/maps?cid=12805638977320361154',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3778108%2C-5.967862',
	embed: 'https://maps.google.com/maps?q=37.3778108,-5.967862&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3778108,-5.967862',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 5, count: 20, label: '5,0' };

/** Horario publicado en la ficha: solo mediodía. */
export const HORARIO = [
	{ day: 'Lunes a sábado', value: '8:00 – 15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de 8:00 a 15:00 de lunes a sábado y cierre los domingos. En festivos el horario puede variar, así que conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera para llevar',
	'Menú diario',
	'Elaboración lenta',
	'Cocina de mercado',
	'Repostería casera',
	'Encargos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina lenta',
		text: 'El puesto se presenta en su ficha como «comidas caseras para llevar, recetas tradicionales hechas con esmero» y cocina de elaboración lenta, «slow food», con productos de calidad.',
	},
	{
		title: 'Menús diarios',
		text: 'El menú cambia cada día. Una de las reseñas lo resume así: «Menús diarios exquisitos con relación calidad precio insuperables». Otra destaca la calidad y el trato amable.',
	},
	{
		title: `Un ${RATING.label} con ${RATING.count} reseñas`,
		text: 'La ficha de Google mantiene la máxima puntuación con 20 opiniones. Entre ellas, una clienta recuerda el pollo al ajillo: «me ha transportado a mi infancia».',
	},
];

/**
 * La ficha no publica carta ni precios. Selección basada en las fotografías
 * del puesto y en las reseñas.
 */
export const MENU = [
	{
		title: 'Arroces y cuchara',
		items: [
			{ name: 'Arroz con gambas', note: 'arroz amarillo con gambas y limón' },
			{ name: 'Garbanzos con gambas', note: 'guiso de garbanzos en salsa de tomate' },
		],
	},
	{
		title: 'Carnes y guisos',
		items: [
			{ name: 'Pollo en salsa de tomate', note: 'guiso de la casa' },
			{ name: 'Rollo de fiambre con frutos secos', note: 'para cortar en la mesa' },
			{ name: 'Croquetas caseras', note: 'de la vitrina del puesto' },
			{ name: 'Tortilla de patatas', note: 'por porciones' },
		],
	},
	{
		title: 'Del día a día',
		items: [
			{ name: 'Menú diario', note: 'el que se prepara cada día; se consulta por teléfono' },
			{ name: 'Pasta a la boloñesa', note: 'con tomate y queso rallado' },
			{ name: 'Empanada de hojaldre', note: 'con sésamo, para compartir' },
		],
	},
	{
		title: 'Repostería',
		items: [
			{ name: 'Tarta de nueces', note: 'con azúcar glas' },
			{ name: 'Cupcakes de cacahuete y chocolate', note: 'en caja, para llevar' },
			{ name: 'Repostería de la casa', note: 'según el día' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Menús diarios exquisitos con relación calidad precio insuperables.»',
		valor: 5,
	},
	{ texto: '«Excelente calidad, trato muy amable y precios asequibles.»', valor: 5 },
	{ texto: '«El pollo al ajillo me ha transportado a mi infancia.»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está El Puesto de Mariano?',
		a: 'En el Mercado de Abasto Las Palmeritas, en la calle Beatriz de Suabia, 41005 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 620 00 90 17. Llama para consultar el menú del día, encargar o preguntar por la repostería.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:00 a 15:00 y cierra los domingos. Al estar dentro de un mercado, el horario en festivos puede variar: conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué es el menú diario?',
		a: 'Es el menú que el puesto prepara cada día con recetas tradicionales de elaboración lenta. Cambia según el mercado, así que se consulta por teléfono o directamente en el mostrador.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica una carta con precios, y esta web no los inventa. Los platos que aparecen son los de las fotografías del puesto y las reseñas; consulta precios y disponibilidad al llamar.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el negocio habla de disfrutar la comida «en su mesa», es decir, en casa. No consta servicio de mesa en el puesto: lo habitual es recoger el pedido.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'En las fotos aparecen platos como la pasta a la boloñesa, la tarta de nueces o las croquetas. Pregunta por los ingredientes y por las opciones del día al hacer el encargo.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan la calidad, el trato y la relación calidad-precio.`,
	},
];
