/**
 * Datos de Oído Cocina — C. Genezaret, 3,
 * Cruz de Humilladero, 29006 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Oído Cocina»,
 *   36.7128757,-4.4356337, feature 0xd72f7ce3cf726bb:0x7f9202d4fe394276,
 *   place id ChIJuyb3PM73cg0RdkI5_tQCkn8.
 * - Nombre, dirección, teléfono, valoración, accesibilidad y reseñas: ficha
 *   pública de Google consultada en octubre de 2026.
 *
 * La ficha no publica horario, categoría principal, carta ni precios. La web
 * no inventa esos datos: lo dice y remite al teléfono.
 */

export const BUSINESS = {
	name: 'Oído Cocina',
	fullName: 'Oído Cocina',
	shortName: 'Oído Cocina',
	mark: 'OC',
	street: 'C. Genezaret, 3',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	siteUrl: 'https://oido-cocina.vercel.app',
	geo: { lat: 36.7128757, lng: -4.4356337 },
	featureId: '0xd72f7ce3cf726bb:0x7f9202d4fe394276',
	placeId: 'ChIJuyb3PM73cg0RdkI5_tQCkn8',
	phone: '952 72 11 59',
	phoneHref: 'tel:+34952721159',
	tagline: 'Tapas y cocina de barrio en Cruz de Humilladero',
	description:
		'Oído Cocina, en C. Genezaret, 3 (Cruz de Humilladero, 29006 Málaga). Tapas, bravas con kimchi, serranitos y camperos. 4,6 sobre 5 con 19 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/O%C3%ADdo+Cocina/@36.7128757,-4.4356337,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ce3cf726bb:0x7f9202d4fe394276!8m2!3d36.7128757!4d-4.4356337!16s%2Fg%2F11ymtzb4hp?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7128757%2C-4.4356337',
	embed: 'https://maps.google.com/maps?q=36.7128757,-4.4356337&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7128757,-4.4356337',
};

/** Reparto a domicilio enlazado desde la ficha de Google. */
export const ORDER = {
	label: 'Pedir a domicilio en Glovo',
	href: 'https://glovoapp.com/es/es/malaga/oido-cocina-malaga',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 19,
	label: '4,6',
};

/**
 * La ficha NO publica horario. En lugar de inventar uno, la web lo declara
 * y ofrece el teléfono como único canal para confirmarlo.
 */
export const HORARIO = [];
export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura. Llama antes de venir: es la única forma de confirmar que está abierto y a qué hora.';

export const HIGHLIGHTS = [
	{
		title: 'Bravas con kimchi',
		text: 'Es lo primero que destaca una reseña: «me ha gustado mucho las bravas con kimchi». Una brava de barrio con un guiño coreano.',
	},
	{
		title: 'Serranito y camperos',
		text: '«El serranito un espectáculo» y «de los mejores camperos que he probado». Dos bocadillos que se repiten en las opiniones de la ficha.',
	},
	{
		title: 'La tarta de queso',
		text: '«La tarta de queso también estaba riquísima», cuenta otra reseña. El postre que cierra la comida según los clientes.',
	},
];

/** Solo lo que nombran las reseñas: la ficha no publica carta ni precios. */
export const MENU = [
	{
		title: 'Para picar',
		source: 'lo que nombran las reseñas de la ficha',
		items: [
			{
				name: 'Bravas con kimchi',
				note: 'la tapa que abre la primera reseña de la ficha',
			},
			{
				name: 'Camperos',
				note: '«de los mejores camperos que he probado», dice una opinión',
			},
			{
				name: 'Serranito',
				note: '«un espectáculo», según otra de las reseñas publicadas',
			},
		],
	},
	{
		title: 'Para terminar',
		source: 'postres y platos citados por los clientes',
		items: [
			{
				name: 'Tarta de queso',
				note: '«también estaba riquísima», en palabras de una reseña',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Me ha gustado mucho las bravas con Kimchi y el serranito un espectáculo.',
		valor: 5,
	},
	{
		texto: 'De los mejores camperos que he probado!!',
		valor: 5,
	},
	{
		texto: 'La tarta de queso también estaba riquísima.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Oído Cocina?',
		a: 'En la calle Genezaret, 3, en Cruz de Humilladero (29006 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario de apertura. No hay dato que copiar, así que esta web no lo inventa: llama al 952 72 11 59 antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Las reseñas de la ficha hablan de bravas con kimchi, serranitos, camperos y tarta de queso. Es lo único que se puede afirmar: la carta completa no está publicada.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. Ni la ficha de Google ni esta página tienen carta ni importes. Para saber qué hay y cuánto cuesta, llama al 952 72 11 59.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha de Google enlaza con Glovo para pedir a domicilio. Esta página recoge ese mismo enlace, sin añadir nada más.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica reservas online ni un teléfono específico para ellas. Si vais en grupo, lo prudente es llamar antes al 952 72 11 59.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca acceso para sillas de ruedas. No detalla si hay aseo adaptado, asientos adaptados o aparcamiento accesible, así que esta web no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 19 reseñas en el momento de consultar la ficha (octubre de 2026). Las publicadas destacan las bravas, los camperos y la tarta de queso.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales; solo el enlace de reparto a Glovo.',
	},
];
