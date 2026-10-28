/**
 * Datos de Panadería Santa Isabel — Cam. Soliva del Cañaveral, 21
 * (Puerto de la Torre, 29190 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Santa Isabel,
 *   36.7397949,-4.4885203, feature 0xd72f1a3f232cb81:0x188d1b824b3befea.
 * - Dirección, categoría, teléfono, valoración, reseñas y accesibilidad:
 *   ficha pública de Google, consultada el 28 de octubre de 2026.
 * - Horario: texto del titular en la descripción de la ficha. La ficha no
 *   tiene un bloque de horario estructurado; se reproduce ese texto.
 * - Fotografías: perfil del establecimiento en Google Maps.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, carta, precios,
 * reparto ni fecha de fundación. Los productos citados son los que aparecen en
 * las reseñas, en el rótulo y en las fotografías del perfil; no se publican
 * importes.
 */

export const BUSINESS = {
	name: 'Panadería Santa Isabel',
	displayName: 'Santa Isabel',
	mark: 'SI',
	street: 'Cam. Soliva del Cañaveral, 21',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	phone: '952 10 70 86',
	phoneHref: 'tel:+34952107086',
	rating: 4.7,
	reviewsCount: 20,
	siteUrl: 'https://panaderia-santa-isabel.vercel.app',
	geo: { lat: 36.7397949, lng: -4.4885203 },
	featureId: '0xd72f1a3f232cb81:0x188d1b824b3befea',
	placeId: 'ChIJgcsy8qPxcg0R6u87S4IbjRg',
	googleCategory: 'Supermercado',
	tagline: 'Panadería, confitería y mini servicio en Puerto de la Torre',
	description:
		'Panadería Santa Isabel, en Cam. Soliva del Cañaveral, 21 (Puerto de la Torre, 29190 Málaga). Pan, confitería, bocadillos y mini servicio. Teléfono 952 10 70 86.',
	hoursSummary: 'Lunes a viernes, 9:00–15:00 y 17:30–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Santa+Isabel/@36.7397949,-4.4885203,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f1a3f232cb81:0x188d1b824b3befea!8m2!3d36.7397949!4d-4.4885203!16s%2Fg%2F11k2x85zl4?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7397949%2C-4.4885203',
	embed: 'https://maps.google.com/maps?q=36.7397949,-4.4885203&z=17&hl=es&output=embed',
};

/**
 * Horario escrito por el titular en la descripción de la ficha.
 * Google no publica un bloque de horario estructurado para este negocio.
 */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:00–15:00 · 17:30–21:00' },
	{ day: 'Sábado y domingo', value: '9:30–15:00' },
];

/**
 * Reseñas publicadas en la ficha de Google. La primera se cita textualmente;
 * las demás se resumen sin inventar productos ni importes.
 */
export const REVIEW_QUOTE = 'Bocatas muy ricos y personal muy amable';

export const REVIEW_NOTES = [
	'Las reseñas también hablan de los bocadillos, del trato cercano y de los precios del pequeño supermercado.',
	'Una de las opiniones resume el local como «el súper de siempre», con bocatas y una despensa de barrio.',
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Bocadillos',
	'Mini servicio',
	'Fruta y verdura',
	'Puerto de la Torre',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'Panadería y confitería',
		text: 'El rótulo azul de la fachada anuncia «Panadería Confitería Santa Isabel». En las fotos se ven cestas de pan y el horno del obrador.',
	},
	{
		number: '02',
		title: 'Mini servicio',
		text: 'Bajo el rótulo, la casa anuncia «Mini servicio». La ficha la clasifica como supermercado y las reseñas hablan de una tienda de barrio con precios ajustados.',
	},
	{
		number: '03',
		title: 'Bocadillos y fruta',
		text: 'Las reseñas destacan los bocadillos y el trato. En el mostrador de fruta aparecen sandía, higos, aguacates, manzanas, peras y uvas.',
	},
];

/**
 * Lo que aparece en el rótulo, las reseñas y las fotografías.
 * La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		kicker: 'Panadería',
		items: [
			{
				name: 'Pan del día',
				note: 'las cestas de pan aparecen junto al horno en las fotos del perfil',
			},
			{
				name: 'Barras y hogazas',
				note: 'en las cestas de mimbre se ven piezas de distintos tamaños',
			},
			{
				name: 'Confitería',
				note: 'el rótulo de la fachada anuncia «Panadería Confitería»',
			},
		],
	},
	{
		title: 'Para picar',
		kicker: 'Mostrador',
		items: [
			{
				name: 'Bocadillos',
				note: '«bocatas muy ricos», en palabras de una reseña de la ficha',
			},
			{
				name: 'Fruta y verdura',
				note: 'sandía, higos, aguacates, manzanas, peras y uvas en el mostrador',
			},
			{
				name: 'Despensa',
				note: 'la ficha la clasifica como supermercado; las reseñas citan sus precios',
			},
		],
	},
	{
		title: 'Para llevar',
		kicker: 'Mini servicio',
		items: [
			{
				name: 'Pan y dulces',
				note: 'para desayuno, merienda o para completar la compra',
			},
			{
				name: 'Bocadillos',
				note: 'se preparan en el mostrador; la ficha no anuncia reparto a domicilio',
			},
			{
				name: 'Compra diaria',
				note: 'el «mini servicio» del rótulo y la categoría de Google',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Santa Isabel?',
		a: 'En el Camino Soliva del Cañaveral, 21, en Puerto de la Torre (29190 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'El titular escribe en la descripción de Google: de lunes a viernes, de 9:00 a 15:00 y de 17:30 a 21:00; sábado y domingo, de 9:30 a 15:00. La ficha no tiene un bloque de horario estructurado, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 952 10 70 86. La panadería no publica página web propia ni un canal de pedidos por internet.',
	},
	{
		q: '¿Es una panadería o un supermercado?',
		a: 'Las dos cosas. El rótulo dice «Panadería Confitería Santa Isabel» y «Mini servicio»; Google la clasifica como supermercado. Las reseñas hablan de bocadillos, de una tienda de barrio y de precios ajustados.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'En las fotos del perfil se ven cestas de pan, el horno y un mostrador de fruta con sandía, higos, aguacates, manzanas, peras y uvas. Las reseñas citan los bocadillos y la despensa del mini servicio. La ficha no publica carta ni precios, así que aquí no se citan importes.',
	},
	{
		q: '¿Hacen reparto a domicilio o pedidos online?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet; para consultar una compra, lo directo es llamar al 952 10 70 86.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 20 reseñas en Google. Las opiniones destacan los bocadillos, el trato cercano y los precios del pequeño supermercado.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La ficha pública no publica una fecha de fundación ni una historia del negocio. Esta página no inventa una fecha; solo reproduce lo que aparece en Google y en el rótulo.',
	},
];
