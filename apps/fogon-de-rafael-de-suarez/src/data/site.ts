/**
 * Datos de Fogón de Rafael de Suárez — Cam. de Suárez, 58
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Fogón de Rafael de Suárez,
 *   36.7283638,-4.441045, feature 0xd72f709a8aeb353:0x785f34b66dde5ce4.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, atributos de
 *   accesibilidad, reseñas y galería: ficha pública de Google consultada en
 *   octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta ni precios. La web no inventa esos datos. El surtido que se
 * cita es el que nombran las reseñas y la propia categoría del negocio.
 */

export const BUSINESS = {
	name: 'Fogón de Rafael de Suárez',
	shortName: 'Fogón de Rafael',
	mark: 'FR',
	street: 'Cam. de Suárez, 58',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://fogon-de-rafael-de-suarez.vercel.app',
	geo: { lat: 36.7283638, lng: -4.441045 },
	featureId: '0xd72f709a8aeb353:0x785f34b66dde5ce4',
	placeId: 'ChIJU7OuqAn3cg0R5FzebbY0X3g',
	plusCode: '8C8QPHH5+8H',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '952 30 80 93',
	phoneHref: 'tel:+34952308093',
	tagline: 'Asador de pollos en el Camino de Suárez',
	description:
		'Fogón de Rafael de Suárez, asador de pollos en Cam. de Suárez, 58 (Bailén-Miraflores, 29010 Málaga). Pollo asado, patatas, croquetas y raciones de comida casera.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Fog%C3%B3n+de+Rafael+de+Su%C3%A1rez/@36.7283638,-4.441045,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f709a8aeb353:0x785f34b66dde5ce4!8m2!3d36.7283638!4d-4.441045!16s%2Fg%2F11cly5vjt6?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=8673709365470846180',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7283638%2C-4.441045',
	embed: 'https://maps.google.com/maps?q=36.7283638,-4.441045&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7283638,-4.441045',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 183,
	label: '4,1',
};

/** Horario que publica la ficha: mediodía, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Patatas',
	'Croquetas',
	'Raciones de comida',
	'Acceso para sillas de ruedas',
	'Amigable con la comunidad LGBTQ+',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Es la razón de ser de la casa y lo que más se repite en las reseñas: «el pollo asado muy muy buen sabor». También hay críticas por piezas secas, que se reproducen en esta página.',
	},
	{
		title: 'Patatas y croquetas',
		text: 'Una reseña recuerda «la patata fresca casera y las croquetas buenísimas». Son los acompañamientos que los clientes citan por su nombre.',
	},
	{
		title: 'Raciones de comida',
		text: '«Las raciones de comida increíbles», dice otra opinión. Es un asador de barrio, de los de recoger el pollo y completar la mesa.',
	},
];

/**
 * Solo la familia de producto que nombran la categoría y las reseñas. No hay
 * carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que define la casa; Google la clasifica como restaurante especializado en pollo',
			},
			{
				name: 'Patatas',
				note: '«la patata fresca casera», según una reseña de la ficha',
			},
			{
				name: 'Croquetas',
				note: '«croquetas buenísimas», recuerda la misma reseña',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{
				name: 'Raciones de comida',
				note: '«las raciones de comida increíbles», según una opinión de cinco estrellas',
			},
			{
				name: 'Albóndigas en salsa',
				note: 'una de las bandejas que aparecen en las fotos de la vitrina',
			},
			{
				name: 'Guisos y arroces',
				note: 'estofados, arroz con gambas y otras bandejas de la vitrina',
			},
			{
				name: 'Empanadas',
				note: 'junto a las croquetas, en la vitrina de comida preparada',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'El pollo asado muy muy buen sabor, las raciones de comida increíbles.', valor: 5 },
	{
		texto: 'Antes era el pollo muy sabroso y la patata fresca casera y croquetas buenísimas.',
		valor: 2,
	},
	{
		texto: 'Pollo del día anterior, seco, jamás de los jamases compraré más de este asador.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Fogón de Rafael de Suárez?',
		a: 'En el Camino de Suárez, 58, en Bailén-Miraflores (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 9:00 a 16:00 de lunes, miércoles, jueves, viernes, sábado y domingo. El martes figura como día de cierre. En festivos el horario puede cambiar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, patatas, croquetas y raciones de comida, según la categoría y las reseñas de la ficha. No hay carta publicada, así que el surtido del día se consulta por teléfono.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'La ficha de Google no lo especifica: solo lo clasifica como restaurante especializado en pollo. Las reseñas hablan de comprar el pollo y las raciones, pero conviene llamar al 952 30 80 93 para confirmar cómo se recoge el pedido.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha no incluye carta ni precios. Esta página solo cita las preparaciones que nombran las reseñas, y no inventa valores.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No hay sistema de reservas online ni página web propia. Para mesas o encargos, el canal que publica la ficha es el teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 183 reseñas en el momento de consultarla (octubre de 2026). Hay opiniones muy buenas sobre el sabor del pollo y las raciones, y también críticas por piezas secas o pollo del día anterior, que se muestran en esta página.',
	},
	{
		q: '¿Es un espacio amigable con la comunidad LGBTQ+?',
		a: 'Sí. La ficha de Google incluye el atributo «Amigable con la comunidad LGBTQ+».',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
