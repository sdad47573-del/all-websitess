/**
 * Datos de Alsara express Los Tilos (P.º de los Tilos, 22 · 29006 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, categoría, valoración con número
 * de reseñas, coordenadas, plus code, horario semanal y el servicio de accesibilidad.
 *
 * La ficha **no publica teléfono** (muestra «Añadir teléfono»), ni descripción del titular, ni
 * catálogo, ni precios, ni web propia, así que no se reproduce ninguno de ellos. Por eso esta web
 * no tiene ningún botón de llamada: los contactos son las indicaciones y la ficha de Maps.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://alsara-express-los-tilos.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'Alsara express Los Tilos',
	shortName: 'Alsara express',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Tienda de alimentación',
	categories: ['Tienda de alimentación'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «P.º de los Tilos, 22»: aquí se
	 * desarrolla a «Paseo de los Tilos, 22», como en el resto del repositorio. «Distrito Centro»
	 * es el distrito y se conserva aparte.
	 */
	streetAddress: 'Paseo de los Tilos, 22',
	district: 'Distrito Centro',
	postalCode: '29006',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/* Sin `phone`: la ficha no publica ningún teléfono (muestra «Añadir teléfono»). */
	latitude: 36.7136423,
	longitude: -4.4336503,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPH78+FG). */
	plusCode: 'PH78+FG Málaga',
	/** Valoración de la ficha en la fecha de consulta (3,7 sobre 5 con 3 reseñas). */
	rating: 3.7,
	reviewCount: 3,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Alsara+express+Los+Tilos/@36.7136423,-4.4336503,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f700509b23bd:0xa82661605abacb41!8m2!3d36.7136423!4d-4.4336503!16s%2Fg%2F11ytp83fz_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJvSObUAD3cg0RQcu6WmBhJqg&hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. La tienda abre
 * todos los días de 9:30 a 24:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 9:30 a 24:00';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos de reseñas destacadas que publica la ficha.
 *
 * La ficha tiene 3 reseñas (3,7 sobre 5), pero no cita ningún extracto en su portada, así que la
 * lista queda vacía: no hay texto que reproducir y no se inventa ninguno.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica teléfono, descripción, catálogo, precios ni web, así que ninguna respuesta
 * los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Alsara express Los Tilos?',
		answer:
			'En el Paseo de los Tilos, 22, en Distrito Centro, con código postal 29006, en Málaga. La ficha publica el plus code PH78+FG Málaga y las coordenadas 36.7136423, -4.4336503.',
	},
	{
		question: '¿Cuál es el horario de Alsara express Los Tilos?',
		answer:
			'La ficha publica apertura todos los días de 9:30 a 24:00, de lunes a domingo. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar antes de ir porque la ficha no publica teléfono.',
	},
	{
		question: '¿Qué vende la tienda?',
		answer:
			'Google la clasifica como tienda de alimentación. La ficha no publica descripción, catálogo ni precios, así que esta web no los reproduce: para saber qué hay disponible, lo más rápido es pasar por la tienda o mirar su ficha en Google Maps.',
	},
	{
		question: '¿Tiene teléfono público?',
		answer:
			'No: la ficha no publica ningún teléfono (muestra «Añadir teléfono»), así que esta web no tiene botón de llamada. Los botones abren las indicaciones de Google Maps o la ficha del local.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Paseo de los Tilos, 22, en Distrito Centro de Málaga, y las coordenadas 36.7136423, -4.4336503. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH78+FG Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 3,7 sobre 5 con 3 reseñas. Google no cita ningún extracto en la portada de la ficha, así que esta web no reproduce ningún texto de reseñas: solo enlaza al listado completo.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'ConvenienceStore',
	'@id': `${site.siteUrl}/#tienda`,
	name: business.name,
	description:
		'Tienda de alimentación en el Paseo de los Tilos, 22 de Málaga, en Distrito Centro (29006 Málaga).',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
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
	/* Sin `telephone`: la ficha no publica ningún teléfono y no se inventa uno. */
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
