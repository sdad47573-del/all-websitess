/**
 * Datos de Gabrielle. Algo más que comida — C. San Bernardo, 52
 * (41018 Sevilla). Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La oferta que se describe son los
 * platos de la descripción del negocio, sus fotografías y sus reseñas.
 */

export const BUSINESS = {
	name: 'Gabrielle. Algo más que comida',
	shortName: 'Gabrielle',
	mark: 'G',
	street: 'C. San Bernardo, 52',
	district: 'San Bernardo',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41018',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/gabrielle-algo-mas-que-comida',
	geo: { lat: 37.3816832, lng: -5.9829944 },
	featureId: '0xd126f5c7404f883:0x47a0a0d046d11e2e',
	placeId: 'ChIJg_gEdFxvEg0RLh7RRtCgoEc',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '692 88 91 56',
	phoneHref: 'tel:+34692889156',
	tagline: 'Comida casera recién hecha para llevar en San Bernardo',
	description:
		'Gabrielle. Algo más que comida, comida casera para llevar en C. San Bernardo, 52 (41018 Sevilla). Platos elaborados a diario con ingredientes seleccionados y recetas tradicionales, listos para disfrutar en casa.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Gabrielle.+Algo+m%C3%A1s+que+comida/data=!4m7!3m6!1s0xd126f5c7404f883:0x47a0a0d046d11e2e!8m2!3d37.3816832!4d-5.9829944!16s%2Fg%2F11zh6sw83j',
	cid: 'https://www.google.com/maps?cid=5166915881586605614',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3816832%2C-5.9829944',
	embed: 'https://maps.google.com/maps?q=37.3816832,-5.9829944&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3816832,-5.9829944',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 5, count: 5, label: '5,0' };

/** Horario publicado: solo mediodía, de lunes a viernes. */
export const HORARIO = [
	{ day: 'Lunes a viernes', value: '10:00 – 16:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de 10:00 a 16:00 de lunes a viernes, con cierre los sábados y los domingos. En festivos el horario puede variar, así que conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Platos del día',
	'Lasaña casera',
	'Cuscús',
	'Todo tipo de encargos',
];

export const HIGHLIGHTS = [
	{
		title: 'Recién hecha, sin cocinar',
		text: 'El negocio se presenta como comida casera para llevar: cada día elabora sus platos con ingredientes seleccionados y recetas tradicionales, para comer recién hecho sin tener que cocinar.',
	},
	{
		title: 'Cuscús y lasaña',
		text: 'La propuesta es variada: en las fotos aparecen cuscús con pollo, lasaña, salmón con quinoa, arroces y guisos. Una clienta lo destaca: «nos ha sorprendido el cuscús».',
	},
	{
		title: `Un ${RATING.label} con ${RATING.count} reseñas`,
		text: 'El local es nuevo y la ficha mantiene la máxima puntuación. Las opiniones hablan de «muy buena comida y buen trato» y de «porciones generosas».',
	},
];

/**
 * La ficha no publica carta ni precios. Selección basada en la descripción del
 * negocio, sus fotografías y las reseñas.
 */
export const MENU = [
	{
		title: 'Platos principales',
		items: [
			{ name: 'Lasaña casera', note: 'al horno, en bandeja o por raciones' },
			{ name: 'Cuscús con pollo', note: 'con verduras y garbanzos' },
			{ name: 'Salmón con quinoa', note: 'con ensalada y limón' },
		],
	},
	{
		title: 'Del día',
		items: [
			{ name: 'Plato del día', note: 'cambia cada jornada; se consulta por teléfono' },
			{ name: 'Guiso del día', note: 'de la cocina de casa' },
			{ name: 'Arroz del día', note: 'con verduras o carne' },
		],
	},
	{
		title: 'Acompañamientos',
		items: [
			{ name: 'Patatas', note: 'guisadas o asadas, según el plato' },
			{ name: 'Verduras', note: 'de temporada' },
			{ name: 'Ensalada', note: 'para completar el menú' },
		],
	},
	{
		title: 'Encargos',
		items: [
			{ name: 'Bandejas para compartir', note: 'lasaña y guisos por encargo' },
			{ name: 'Comida para varios', note: 'para llevar, con aviso previo' },
			{ name: 'Todo tipo de encargos', note: 'como anuncia el cartel del local' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Un lugar nuevo de comida para llevar con muy buena comida y buen trato.»',
		valor: 5,
	},
	{ texto: '«Las porciones son generosas y los precios buenis.»', valor: 5 },
	{
		texto: '«Nos ha encantado, especialmente, nos ha sorprendido el cuscus.»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Gabrielle?',
		a: 'En la calle San Bernardo, 52, 41018 Sevilla, en pleno barrio de San Bernardo. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha y del cartel del local es el 692 88 91 56. Llama para consultar el menú del día, encargar una bandeja o preguntar por la recogida.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 10:00 a 16:00. Los sábados y los domingos cierra. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Platos caseros elaborados a diario: lasaña, cuscús con pollo, salmón con quinoa, arroces, guisos y acompañamientos. La oferta cambia según el día.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el cartel del local anuncia «comida para llevar - take away». Lo habitual es recoger el pedido; pregunta por teléfono si necesitas otra fórmula.',
	},
	{
		q: '¿Se pueden hacer encargos grandes?',
		a: 'El cartel de la fachada anuncia «todo tipo de encargos» y en las fotos aparecen bandejas de lasaña. Para comidas de grupo o bandejas conviene llamar con antelación al 692 88 91 56.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica una carta con precios, y esta web no los inventa. Los platos que aparecen son los de las fotografías y reseñas del establecimiento; consulta precios y disponibilidad al llamar.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan la comida, el trato y las porciones.`,
	},
];
