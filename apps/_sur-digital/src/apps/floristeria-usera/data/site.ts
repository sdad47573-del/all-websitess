/**
 * Datos de Floristería
 * (Calle de Marcelo Usera, 141 · 28026 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * La ficha se llama, sin más, «Floristería», y así se reproduce. La ficha no publica descripción
 * del titular, así que esta web no reproduce ninguna. La ficha no publica accesibilidad ni web
 * propia, así que no se reproduce nada de eso. La vista previa no incluía los textos de las
 * reseñas, así que no se reproduce ningún extracto: solo la nota, el recuento y el enlace. La ficha
 * no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-usera',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps: «Floristería», sin más. */
	name: 'Floristería',
	shortName: 'Floristería',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería, C. de Marcelo Usera, 141, Usera,
	 * 28026 Madrid».
	 */
	streetAddress: 'Calle de Marcelo Usera, 141',
	district: 'Usera',
	postalCode: '28026',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 632 33 73 11',
	latitude: 40.3850703,
	longitude: -3.7115178,
	/** Plus code que publica la ficha (corto; el completo es 8CG797PQ+29). */
	plusCode: '97PQ+29 Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 15 reseñas). */
	rating: 4.4,
	reviewCount: 15,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica ninguna, así que la lista viene vacía y la web lo dice claramente en lugar
 * de inventar una.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa/@40.3850703,-3.7115178,17z/data=!3m1!4b1!4m6!3m5!1s0xd422742f3156ce5:0xf37dac350d69083b!8m2!3d40.3850703!4d-3.7115178!16s%2Fg%2F11swm711cm?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5WwV80InQg0ROwhpDTWsffM&hl=es';

export const phoneHref = 'tel:+34632337311';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 9:30 a 21:30, de lunes a domingo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 21:30',
		shifts: [{ open: '9:30', close: '21:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 9:30 a 21:30, de lunes a domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que la lista viene vacía y la web lo dice claramente.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto:
 * la web publica solo la nota, el recuento y el enlace al listado completo.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, textos de reseñas, accesibilidad, web ni precios, así que
 * ninguna respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería?',
		answer:
			'En la Calle de Marcelo Usera, 141, con código postal 28026, en el distrito de Usera, Madrid. Publica el plus code 97PQ+29 Madrid y las coordenadas 40.3850703, -3.7115178.',
	},
	{
		question: '¿Cuál es el horario de Floristería?',
		answer:
			'La ficha publica que abre todos los días de 9:30 a 21:30, de lunes a domingo. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: para saber qué tiene, lo más rápido es llamar al 632 33 73 11 o mirar sus fotos en Google Maps.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 632 33 73 11. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Marcelo Usera, 141, en Madrid, y las coordenadas 40.3850703, -3.7115178. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 97PQ+29 Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 632 33 73 11 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 15 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle de Marcelo Usera, Usera, Madrid. Abre todos los días de 9:30 a 21:30.',
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
