/**
 * Datos de Asador Pollos La Cúpula — Carrer d'Alcoi, 9 (03590 Altea, Alicante).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: ASADOR POLLOS LA CUPULA,
 *   38.598607,-0.0556723, feature 0xd6201cc599ef35d:0x3cd53f08435ee032.
 * - Nombre, dirección, teléfono, categoría, valoración y plus code: ficha
 *   pública de Google, consultada en noviembre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta, precios ni horario completo de la semana. Esta web no
 * inventa esos datos.
 */

export const BUSINESS = {
	name: 'Asador Pollos La Cúpula',
	shortName: 'La Cúpula',
	mark: 'LC',
	street: "Carrer d'Alcoi, 9",
	district: '',
	city: 'Altea',
	region: 'Comunidad Valenciana',
	postalCode: '03590',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-pollos-la-cupula',
	geo: { lat: 38.598607, lng: -0.0556723 },
	featureId: '0xd6201cc599ef35d:0x3cd53f08435ee032',
	plusCode: 'HWXV+CP Altea',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '965 84 31 10',
	phoneHref: 'tel:+34965843110',
	tagline: 'Pollos asados y comida para llevar en Altea',
	description:
		"Asador Pollos La Cúpula, en el carrer d'Alcoi, 9 (03590 Altea, Alicante). Restaurante de comida para llevar con 4,6 sobre 5 en Google. Pedidos por teléfono.",
};

const cid = BigInt('0x3cd53f08435ee032').toString();

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ASADOR+POLLOS+LA+CUPULA/@38.598607,-0.0556723,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201cc599ef35d:0x3cd53f08435ee032!8m2!3d38.598607!4d-0.0556723!16s%2Fg%2F11lcc7j1r0',
	cid: `https://www.google.com/maps?cid=${cid}`,
	reviews:
		'https://www.google.com/maps/place/ASADOR+POLLOS+LA+CUPULA/@38.598607,-0.0556723,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201cc599ef35d:0x3cd53f08435ee032!8m2!3d38.598607!4d-0.0556723!16s%2Fg%2F11lcc7j1r0',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.598607%2C-0.0556723',
	embed: 'https://maps.google.com/maps?q=38.598607,-0.0556723&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.598607,-0.0556723',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.6,
	label: '4,6',
};

/** Qué dice la ficha del horario y qué no. */
export const HORARIO_NOTA =
	"La ficha marca el miércoles como día de cierre y la próxima apertura el domingo a las 9:00, pero no publica el horario completo de la semana. Confírmalo en Google o por teléfono antes de acercarte.";

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida para llevar',
	'Pollos asados',
	'Altea · Alicante',
	'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida para llevar',
		text: "Google lo clasifica como restaurante de comida para llevar. Es la categoría que publica la ficha, y el nombre del local añade lo que se cuece dentro: asador de pollos.",
	},
	{
		title: 'En el casco de Altea',
		text: "El local está en el número 9 del carrer d'Alcoi, en Altea (03590). La ficha da el plus code HWXV+CP Altea para llegar sin buscar el número.",
	},
	{
		title: 'Pedidos por teléfono',
		text: "La ficha no publica página web, redes sociales ni reservas online: el único canal que consta es el teléfono 965 84 31 10.",
	},
];

/** Lo que se puede decir del local sin inventar carta ni precios. */
export const FICHA = [
	{ label: 'Categoría en Google', value: 'Restaurante de comida para llevar' },
	{ label: 'Valoración', value: '4,6 sobre 5' },
	{ label: 'Dirección', value: "Carrer d'Alcoi, 9 · 03590 Altea" },
	{ label: 'Teléfono', value: '965 84 31 10' },
	{ label: 'Plus code', value: 'HWXV+CP Altea' },
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Pollos La Cúpula?',
		a: "En el carrer d'Alcoi, 9, en Altea (03590, Alicante). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.",
	},
	{
		q: '¿Qué teléfono tiene?',
		a: 'El 965 84 31 10, el que publica su ficha de Google. Es también el canal que indica la ficha para encargar, porque no consta página web ni reservas online.',
	},
	{
		q: '¿Qué horario tiene?',
		a: "La ficha marca el miércoles como día cerrado y la próxima apertura el domingo a las 9:00, pero no publica el horario completo. Lo mejor es llamar al 965 84 31 10 o mirar la ficha de Google antes de ir.",
	},
	{
		q: '¿Se puede comer allí o es solo para llevar?',
		a: 'Google lo clasifica como restaurante de comida para llevar. La ficha no detalla si hay mesas, así que conviene preguntar por teléfono antes de contar con sitio para comer en el local.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni precios, y esta página no los inventa. Para saber qué hay hoy y cuánto cuesta, llama al 965 84 31 10.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública de Google no publica web ni perfiles sociales, así que esta web solo enlaza el teléfono y la propia ficha.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Un 4,6 sobre 5 en el momento de consultar la ficha (noviembre de 2026).',
	},
];
