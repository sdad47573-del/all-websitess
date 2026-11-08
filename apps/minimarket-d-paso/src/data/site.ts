/**
 * Datos de Minimarket D´Paso málaga (Calle Conejito de Málaga, 16 · 29004 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y el servicio de accesibilidad.
 *
 * La ficha no publica descripción del titular, ni catálogo, ni precios, ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://minimarket-d-paso.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '16 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps. Google lo escribe «D´Paso» con acento
	 * espaciado en vez de apóstrofo y «málaga» en minúscula; se reproduce literal (como en el resto
	 * del repositorio).
	 */
	name: 'Minimarket D´Paso málaga',
	shortName: 'Minimarket D´Paso',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Tienda de alimentación',
	categories: ['Tienda de alimentación'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Conejito de Málaga, 16»: aquí se
	 * desarrolla a «Calle Conejito de Málaga, 16», como en el resto del repositorio. El segundo
	 * término de la ficha, «Carretera de Cádiz», es el barrio y se conserva aparte.
	 */
	streetAddress: 'Calle Conejito de Málaga, 16',
	district: 'Carretera de Cádiz',
	postalCode: '29004',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 643 51 49 42',
	latitude: 36.6984561,
	longitude: -4.4543047,
	/** Plus code que publica la ficha. */
	plusCode: 'MGXW+97 Málaga',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 1 reseña). */
	rating: 5,
	reviewCount: 1,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Minimarket+D%C2%B4Paso+m%C3%A1laga/@36.6984561,-4.4543047,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9ff7e0ff157:0x3d2ce22986e036df!8m2!3d36.6984561!4d-4.4543047!16s%2Fg%2F11t5xqthnn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJV_EPfv_5cg0R3zbghiniLD0&hl=es';

export const phoneHref = 'tel:+34643514942';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 16 de octubre de 2026 cubre del viernes 16 al jueves 22 de octubre. La tienda abre
 * todos los días de 10:00: cierra a las 22:30 de lunes a jueves y a las 23:00 de viernes a domingo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 22:30',
		shifts: [{ open: '10:00', close: '22:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 22:30',
		shifts: [{ open: '10:00', close: '22:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 22:30',
		shifts: [{ open: '10:00', close: '22:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 22:30',
		shifts: [{ open: '10:00', close: '22:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días de 10:00; cierra a las 22:30 de lunes a jueves y a las 23:00 de viernes a domingo';

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
 * La ficha tiene una reseña (5 sobre 5), pero no cita ningún extracto en su portada, así que la
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
		question: '¿Dónde está Minimarket D´Paso?',
		answer:
			'En la Calle Conejito de Málaga, 16, con código postal 29004, en Málaga, dentro del barrio de Carretera de Cádiz. La ficha publica el plus code MGXW+97 Málaga y las coordenadas 36.6984561, -4.4543047.',
	},
	{
		question: '¿Cuál es el horario de Minimarket D´Paso?',
		answer:
			'La ficha publica apertura todos los días a las 10:00: de lunes a jueves cierra a las 22:30 y de viernes a domingo lo hace a las 23:00. Es el horario de la ficha consultada el 16 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la tienda?',
		answer:
			'Google la clasifica como tienda de alimentación. La ficha no publica descripción, catálogo ni precios, así que esta web no los reproduce: para saber qué hay disponible, lo más rápido es llamar al 643 51 49 42 o pasar por la tienda.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 643 51 49 42. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Conejito de Málaga, 16, en el barrio de Carretera de Cádiz de Málaga, y las coordenadas 36.6984561, -4.4543047. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code MGXW+97 Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Cuántas reseñas tiene?',
		answer:
			'La ficha publica una única reseña, de 5 sobre 5, que es también su valoración media. Google no cita ningún extracto de esa reseña en la ficha, así que esta web no reproduce ningún texto de reseñas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 16 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'ConvenienceStore',
	'@id': `${site.siteUrl}/#minimarket`,
	name: business.name,
	description:
		'Minimarket y tienda de alimentación en la Calle Conejito de Málaga, 16 de Málaga, en el barrio de Carretera de Cádiz.',
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
