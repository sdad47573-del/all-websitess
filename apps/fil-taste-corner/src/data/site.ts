/**
 * Datos de Fil taste corner — Carrer Callaueta, 11, AD500 Andorra la Vella
 * (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Fil taste corner», 42.5068653,1.5299884,
 *   feature 0x12a58b91ea8ae0db:0x447284519f492980.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,8 · 237 reseñas).
 * - Carta y platos: reseñas públicas del establecimiento y las fotos del perfil
 *   (gyozas, ramen, yakisoba, kung pao, takoyaki, pork mami, mousse de coco), más
 *   el menú del día a 12,90 € que citan varias reseñas.
 *
 * No se copian importes del menú: varían y la ficha no publica la carta.
 */

export const BUSINESS = {
	name: 'Fil taste corner',
	fullName: 'Fil taste corner',
	shortName: 'Fil taste corner',
	mark: 'FT',
	street: 'Carrer Callaueta, 11',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://fil-taste-corner.vercel.app',
	geo: { lat: 42.5068653, lng: 1.5299884 },
	featureId: '0x12a58b91ea8ae0db:0x447284519f492980',
	placeId: 'ChIJ2-CK6pGLpRIRgClJn1GEckQ',
	plusCode: 'GG4H+PX Andorra la Vella',
	googleCategory: 'Restaurante asiático',
	phone: '+376 833 733',
	phoneHref: 'tel:+376833733',
	tagline: 'Cocina filipina y japonesa en la calle Callaueta',
	description:
		'Fil taste corner, en Carrer Callaueta, 11 (AD500 Andorra la Vella). Cocina asiática de raíz filipina y japonesa en una calle peatonal, con menú del día y terraza. 4,8 sobre 5 con 237 reseñas en Google. Abre todos los días de 12:00 a 22:00 salvo el martes, que cierra.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Fil+taste+corner/@42.5068653,1.5299884,17z/data=!4m6!3m5!1s0x12a58b91ea8ae0db:0x447284519f492980!8m2!3d42.5068653!4d1.5299884!16s%2Fg%2F11tcz_h49p?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5068653%2C1.5299884',
	embed: 'https://maps.google.com/maps?q=42.5068653,1.5299884&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5068653,1.5299884',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 237,
	label: '4,8',
};

/** Horario que publica la ficha: todos los días, martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–22:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:30–22:00' },
	{ dia: 'Jueves', horas: '12:00–22:00' },
	{ dia: 'Viernes', horas: '12:00–22:00' },
	{ dia: 'Sábado', horas: '12:00–22:00' },
	{ dia: 'Domingo', horas: '13:00–22:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar en festivos; confírmalo por teléfono antes de ir.';

export const SERVICIOS = [
	'Cocina filipina',
	'Cocina japonesa',
	'Menú del día',
	'Terraza',
	'Para llevar',
	'Calle peatonal',
	'Abierto por la noche',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Filipino y japonés',
		text: 'La cocina cruza Filipinas y Japón: gyozas, ramen, yakisoba, takoyaki, kung pao, arroz con cerdo caramelizado y el beef pares filipino, que las reseñas señalan como plato de la casa. También hay entrantes y tapas para compartir.',
	},
	{
		title: 'Menú del día',
		text: 'El menú diario, con bebida y postre o café, ronda los 13 € según varias reseñas y también se sirve los fines de semana. Es la forma más sencilla de comer aquí a mediodía, y la razón por la que el local se llena temprano.',
	},
	{
		title: 'En la calle Callaueta',
		text: 'Está en el número 11 de la calle Callaueta, la calle peatonal nueva, junto al despacho de lotería y a un paso del centro. Las reseñas avisan de que no hay aparcamiento propio: lo práctico es aparcar en el Parc Central y subir andando.',
	},
	{
		title: 'Local pequeño, terraza',
		text: 'Dentro hay pocas mesas y el trato es familiar; fuera, la terraza ocupa la calle peatonal con mesas cubiertas los días de lluvia. El local está en la planta baja (la ficha lo marca como «Planta G»).',
	},
];

/**
 * Platos que citan las reseñas y el perfil del local. La ficha no publica carta
 * ni precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Gyozas', note: 'de pollo, con un toque de curry que las reseñas destacan' },
			{ name: 'Takoyaki', note: 'las bolitas japonesas de pulpo, también como plato' },
			{ name: 'Nachos', note: 'para compartir, con la salsa de la casa' },
			{ name: 'Rollitos de primavera', note: 'el entrante clásico, también en el menú' },
			{ name: 'Tempura', note: 'una de las cosas que más se repiten en las reseñas' },
		],
	},
	{
		title: 'Sopas y ramen',
		items: [
			{ name: 'Ramen de cerdo', note: 'el plato más citado en las reseñas' },
			{ name: 'Caldo de res picante', note: 'el otro caldo de la casa, filipino' },
			{ name: 'Sopa', note: 'del menú del día, cambia según el día' },
		],
	},
	{
		title: 'Arroces y fideos',
		items: [
			{ name: 'Yakisoba', note: 'fideos salteados, también con marisco' },
			{ name: 'Fideos con pollo al curry', note: 'uno de los favoritos de las reseñas' },
			{ name: 'Fideos con marisco y kimchi', note: 'con el toque picante del kimchi' },
			{ name: 'Arroz con cerdo caramelizado', note: 'el arroz de la casa' },
			{ name: 'Pollo kung pao', note: 'en la carta del local y en el menú' },
		],
	},
	{
		title: 'Platos de la casa y postres',
		items: [
			{ name: 'Beef pares', note: 'el guiso filipino de ternera que recomiendan las reseñas' },
			{ name: 'Pork mami', note: 'sopa filipina de cerdo con fideos' },
			{ name: 'Pollo agridulce', note: 'para los que buscan algo suave' },
			{ name: 'Mousse de coco', note: 'el postre que más se repite; también en el menú' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Fil taste corner?',
		a: 'En Carrer Callaueta, 11, AD500 Andorra la Vella (Principado de Andorra), en la calle peatonal nueva, junto al despacho de lotería. La ficha de Google sitúa el local en las coordenadas 42.5068653, 1.5299884 y en la planta baja del edificio («Planta G»).',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de lunes a domingo de 12:00 a 22:00, con dos excepciones: el miércoles empieza a las 12:30 y el domingo a las 13:00. El martes cierra todo el día. La ficha advierte además de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Cocina asiática con raíz filipina y japonesa. Lo más pedido en las reseñas son las gyozas, el ramen de cerdo, el yakisoba, los fideos con pollo al curry y el beef pares; también hay takoyaki, kung pao, arroz con cerdo caramelizado y postres como el mousse de coco.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'Sí, y es una de las cosas que más se mencionan: un menú diario con bebida y postre o café que varias reseñas sitúan alrededor de los 13 €, también en fin de semana. No copiamos el importe exacto porque cambia; se pregunta al llamar.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 833 733. El local no tiene web propia ni pedidos online, así que el teléfono es la vía para encargar, preguntar por el menú o reservar mesa.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. La terraza da a la calle Callaueta, que es peatonal y tranquila, y las reseñas cuentan que las mesas se cubren los días de lluvia. El interior es pequeño, de pocas mesas.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'El local no tiene aparcamiento propio y la calle es peatonal. La recomendación que aparece en las reseñas es dejar el coche en el Parc Central e ir andando, que son pocos minutos.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Las reseñas no hablan de reparto a domicilio; lo que sí aparece es el teléfono para encargar. Para llevarse la comida conviene llamar antes al +376 833 733 y confirmarlo.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local; solo un perfil en Facebook. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Fil taste corner',
	actualizado: 'Noviembre de 2026',
};
