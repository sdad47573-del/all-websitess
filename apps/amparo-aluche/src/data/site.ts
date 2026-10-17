/**
 * Datos de Floristería amparo sucursal aluche
 * (Av. de los Poblados, 58 · 28044 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * valoración con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica descripción del titular, web propia, plus code ni datos de accesibilidad, así
 * que la web lo declara donde corresponde en vez de inventarlo. La vista previa no incluía los
 * textos de las reseñas, así que no se reproduce ningún extracto: solo la nota, el recuento y el
 * enlace. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://amparo-aluche.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Amparo · Sucursal Aluche',
	shortName: 'Amparo · Aluche',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería amparo sucursal aluche, Av. de los Poblados,
	 * 58, Latina, 28044 Madrid».
	 */
	streetAddress: 'Av. de los Poblados, 58',
	district: 'Latina',
	postalCode: '28044',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 631 94 14 00',
	latitude: 40.3860303,
	longitude: -3.7625951,
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 84 reseñas). */
	rating: 4.3,
	reviewCount: 84,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+amparo+sucursal+aluche/@40.3860303,-3.7625951,17z/data=!3m1!4b1!4m6!3m5!1s0xd41883f37d950c1:0xdb3d831ef2867b14!8m2!3d40.3860303!4d-3.7625951!16s%2Fg%2F11c5_32387?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwVDZNz-IQQ0RFHuG8h6DPds&hl=es';

export const phoneHref = 'tel:+34631941400';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a sábado abre de 9:00 a 20:00; el domingo abre de 9:00 a 15:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 15:00',
		shifts: [{ open: '9:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a sábado de 9:00 a 20:00; domingo de 9:00 a 15:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ningún dato de accesibilidad, así que la lista viene vacía y la web lo
 * declara en la sección de horario.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

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
 * La ficha no publica descripción del titular, textos de reseñas, web, accesibilidad ni precios,
 * así que ninguna respuesta los presenta como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Amparo · Sucursal Aluche?',
		answer:
			'En la Av. de los Poblados, 58, con código postal 28044, en el distrito de Latina, Madrid. Publica las coordenadas 40.3860303, -3.7625951.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que de lunes a sábado abre de 9:00 a 20:00 y el domingo de 9:00 a 15:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: lo que se cuenta aquí es solo su dirección, su horario, su teléfono y su valoración.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 631 94 14 00. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de los Poblados, 58, en Madrid, y las coordenadas 40.3860303, -3.7625951. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no afirma nada al respecto; ante la duda, conviene preguntar por teléfono antes de ir.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 84 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. La ficha no publica descripción del titular, así que no se reproduce ninguna. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Av. de los Poblados, 58, Latina, Madrid. De lunes a sábado de 9:00 a 20:00; domingo de 9:00 a 15:00.',
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
