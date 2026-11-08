/**
 * Datos de Flores Carlos de Troya
 * (Calle de Diego de León, 61 · 28006 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular, así que esta web no reproduce ninguna. La ficha no
 * publica accesibilidad ni web propia, así que no se reproduce nada de eso. La vista previa no
 * incluía los textos de las reseñas, así que no se reproduce ningún extracto: solo la nota, el
 * recuento y el enlace. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://carlos-troya.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flores Carlos de Troya',
	shortName: 'Carlos de Troya',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Flores Carlos de Troya, Calle de Diego de León, 61,
	 * Salamanca, 28006 Madrid».
	 */
	streetAddress: 'Calle de Diego de León, 61',
	district: 'Salamanca',
	postalCode: '28006',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 912 98 67 26',
	latitude: 40.4347757,
	longitude: -3.6759117,
	/** Plus code que publica la ficha (corto; el completo es 8CG8C8MF+WJ). */
	plusCode: 'C8MF+WJ Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 69 reseñas). */
	rating: 4.7,
	reviewCount: 69,
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
	'https://www.google.com/maps/place/Flores+Carlos+de+Troya/@40.4347757,-3.6759117,17z/data=!3m1!4b1!4m6!3m5!1s0xd422861549b3b49:0xd358a4c62542e9c8!8m2!3d40.4347757!4d-3.6759117!16s%2Fg%2F11hb42l077?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJSTubVGEoQg0RyOlCJcakWNM&hl=es';

export const phoneHref = 'tel:+34912986726';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 10:00 a 19:00; el sábado y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a viernes de 10:00 a 19:00; sábado y domingo cerrado';

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
		question: '¿Dónde está Flores Carlos de Troya?',
		answer:
			'En la Calle de Diego de León, 61, con código postal 28006, en el distrito de Salamanca, Madrid. Publica el plus code C8MF+WJ Madrid y las coordenadas 40.4347757, -3.6759117.',
	},
	{
		question: '¿Cuál es el horario de Flores Carlos de Troya?',
		answer:
			'La ficha publica que de lunes a viernes abre de 10:00 a 19:00, y el sábado y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: para saber qué tiene, lo más rápido es llamar al 912 98 67 26 o mirar sus fotos en Google Maps.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 912 98 67 26. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Diego de León, 61, en Madrid, y las coordenadas 40.4347757, -3.6759117. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C8MF+WJ Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 912 98 67 26 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 69 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle de Diego de León, Salamanca, Madrid. Abre de lunes a viernes de 10:00 a 19:00.',
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
