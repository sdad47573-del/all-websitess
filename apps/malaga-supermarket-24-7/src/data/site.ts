/**
 * Datos de MALAGA SUPERMARKET 24/7 (Calle Comedias, 15 · 29008 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y el servicio de accesibilidad.
 *
 * La ficha no publica descripción del titular, ni catálogo, ni precios, ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://malaga-supermarket-24-7.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'MALAGA SUPERMARKET 24/7',
	shortName: 'MALAGA SUPERMARKET',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Tienda de alimentación',
	categories: ['Tienda de alimentación'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Comedias, 15»: aquí se
	 * desarrolla a «Calle Comedias, 15», como en el resto del repositorio. «Distrito Centro»
	 * es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Comedias, 15',
	district: 'Distrito Centro',
	postalCode: '29008',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 613 06 64 97',
	latitude: 36.7231956,
	longitude: -4.4212835,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPHFH+7F). */
	plusCode: 'PHFH+7F Málaga',
	/** Valoración de la ficha en la fecha de consulta (2,3 sobre 5 con 9 reseñas). */
	rating: 2.3,
	reviewCount: 9,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/MALAGA+SUPERMARKET+24%2F7/@36.7231956,-4.4212835,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ee5202b239:0xbd4a4e5f80e3fcd5!8m2!3d36.7231956!4d-4.4212835!16s%2Fg%2F11xl93yc1m?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJObICUu73cg0R1fzjgF9OSr0&hl=es';

export const phoneHref = 'tel:+34613066497';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. La tienda abre
 * todos los días a las 10:00: de domingo a jueves cierra a las 3:00 y viernes y sábado a las 5:00
 * (cierres de madrugada).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 3:00',
		shifts: [{ open: '10:00', close: '03:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 3:00',
		shifts: [{ open: '10:00', close: '03:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 3:00',
		shifts: [{ open: '10:00', close: '03:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 3:00',
		shifts: [{ open: '10:00', close: '03:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 5:00',
		shifts: [{ open: '10:00', close: '05:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 5:00',
		shifts: [{ open: '10:00', close: '05:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 3:00',
		shifts: [{ open: '10:00', close: '03:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días desde las 10:00; cierra a las 3:00 de domingo a jueves y a las 5:00 viernes y sábado';

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
 * La ficha tiene 9 reseñas (2,3 sobre 5), pero no cita ningún extracto en su portada, así que la
 * lista queda vacía: no hay texto que reproducir y no se inventa ninguno.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, catálogo, precios ni web, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está MALAGA SUPERMARKET 24/7?',
		answer:
			'En la Calle Comedias, 15, en Distrito Centro, con código postal 29008, en Málaga. La ficha publica el plus code PHFH+7F Málaga y las coordenadas 36.7231956, -4.4212835.',
	},
	{
		question: '¿Cuál es el horario de MALAGA SUPERMARKET 24/7?',
		answer:
			'La ficha publica apertura todos los días a las 10:00: de domingo a jueves cierra a las 3:00 y viernes y sábado a las 5:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la tienda?',
		answer:
			'Google la clasifica como tienda de alimentación. La ficha no publica descripción, catálogo ni precios, así que esta web no los reproduce: para saber qué hay disponible, lo más rápido es llamar al 613 06 64 97 o pasar por la tienda.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 613 06 64 97. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Comedias, 15, en Distrito Centro de Málaga, y las coordenadas 36.7231956, -4.4212835. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PHFH+7F Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 2,3 sobre 5 con 9 reseñas. Google no cita ningún extracto en la portada de la ficha, así que esta web no reproduce ningún texto de reseñas: solo enlaza al listado completo.',
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
		'Tienda de alimentación en la Calle Comedias, 15 de Málaga, en Distrito Centro (29008 Málaga).',
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
