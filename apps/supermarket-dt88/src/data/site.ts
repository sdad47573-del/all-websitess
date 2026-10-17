/**
 * Datos de Supermarket DT88 (Pasillo de Sta. Isabel, 16 · 29005 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, accesibilidad y extractos de reseñas.
 *
 * La ficha no publica descripción del titular, ni catálogo, ni precios, ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://supermarket-dt88.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'Supermarket DT88',
	shortName: 'Supermarket DT88',
	/** Categoría principal que publica Google en esta ficha. */
	category: 'Supermercado',
	categories: [
		'Supermercado',
		'Tienda de alimentación',
		'Tienda de cerveza',
		'Proveedor de agua embotellada',
		'Tienda de golosinas',
		'Heladería',
		'Tienda de refrescos',
		'Proveedor de tabaco',
		'Tienda de baterías',
		'Tienda de recuerdos de boda',
	],
	streetAddress: 'Pasillo de Sta. Isabel, 16',
	district: 'Distrito Centro',
	postalCode: '29005',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 663 45 43 61',
	latitude: 36.719384,
	longitude: -4.4250809,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPH9F+QX). */
	plusCode: 'PH9F+QX Málaga',
	/** Valoración de la ficha en la fecha de consulta (3,8 sobre 5 con 13 reseñas). */
	rating: 3.8,
	reviewCount: 13,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Supermarket+DT88/@36.719384,-4.4250809,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f727c9700b33:0x6e7733507158bc27!8m2!3d36.719384!4d-4.4250809!16s%2Fg%2F11yrbs79pt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJMwtwySf3cg0RJ7xYcVAzd24&hl=es';

export const phoneHref = 'tel:+34663454361';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. La tienda abre
 * todos los días de 9:00 a 3:00 (cierre de madrugada).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 3:00',
		shifts: [{ open: '09:00', close: '03:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 9:00 a 3:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Los tres figuran como disponibles: acceso, aparcamiento adaptado y asientos adaptados para sillas
 * de ruedas. La ficha también marca el local como amigable con la comunidad LGBTQ+.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Amigable con la comunidad LGBTQ+', disponible: true },
] as const;

/**
 * Extractos de reseñas destacadas que publica la ficha.
 *
 * Son los tres extractos que Google cita en la portada de la ficha en la fecha de consulta. Se
 * reproducen literalmente y sin nombre de autor: la vista previa no incluye el nombre.
 */
export const reviews = [
	{
		text: 'Tienen una gran variedad de marcas y los precios son bastante competitivos.',
		rating: 5,
		source: 'Reseña en Google Maps',
	},
	{
		text: 'Excelente supermarket, gran variedad de productos y todo muy ordenado.',
		rating: 5,
		source: 'Reseña en Google Maps',
	},
	{
		text: 'Además la atención pésima.',
		rating: 1,
		source: 'Reseña en Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, catálogo, precios ni web, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Supermarket DT88?',
		answer:
			'En el Pasillo de Sta. Isabel, 16, en Distrito Centro, con código postal 29005, en Málaga. La ficha publica el plus code PH9F+QX Málaga y las coordenadas 36.719384, -4.4250809.',
	},
	{
		question: '¿Cuál es el horario de Supermarket DT88?',
		answer:
			'La ficha publica apertura todos los días de 9:00 a 3:00, de lunes a domingo. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la tienda?',
		answer:
			'Google la clasifica sobre todo como supermercado, y también como tienda de alimentación, de cerveza, de refrescos, de golosinas, heladería, proveedor de agua embotellada y de tabaco, entre otras. La ficha no publica descripción, catálogo ni precios, así que esta web no los reproduce: para saber qué hay disponible, lo más rápido es llamar al 663 45 43 61 o pasar por la tienda.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 663 45 43 61. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pasillo de Sta. Isabel, 16, en Distrito Centro de Málaga, y las coordenadas 36.719384, -4.4250809. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH9F+QX Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica acceso para sillas de ruedas, aparcamiento adaptado y asientos adaptados, los tres como disponibles, y además marca el local como amigable con la comunidad LGBTQ+. No publica ningún otro dato de accesibilidad.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 3,8 sobre 5 con 13 reseñas. Google cita tres extractos: dos de 5 sobre 5 que destacan la variedad de marcas, los precios competitivos y el orden, y uno de 1 sobre 5 que critica la atención. Aquí se reproducen esos tres extractos tal cual, sin añadir nada.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'Supermarket',
	'@id': `${site.siteUrl}/#supermercado`,
	name: business.name,
	description:
		'Supermercado en el Pasillo de Sta. Isabel, 16 de Málaga, en Distrito Centro (29005 Málaga).',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.province,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.flatMap((item) =>
		item.shifts.map((shift) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: shift.open,
			closes: shift.close,
		})),
	),
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${site.siteUrl}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

/**
 * Datos legales del titular (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
