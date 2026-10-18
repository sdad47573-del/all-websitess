/**
 * Datos de Floristería Flor i Planta (Flor y Planta)
 * (Travessera de Gràcia, 189 · 08012 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code y
 * horario semanal.
 *
 * La ficha no publica web propia ni datos de accesibilidad, así que no se reproduce ninguno.
 * Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-flor-i-planta.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Flor i Planta (Flor y Planta)',
	shortName: 'Flor i Planta',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Travessera de Gràcia, 189, Gràcia, 08012
	 * Barcelona». «Gràcia» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Travessera de Gràcia, 189',
	district: 'Gràcia',
	postalCode: '08012',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 676 15 39 00',
	latitude: 41.4024391,
	longitude: 2.1593793,
	/** Plus code que publica la ficha (corto C525+XQ Barcelona; el completo es 8FH4C525+XQ). */
	plusCode: 'C525+XQ Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 26 reseñas). */
	rating: 4.8,
	reviewCount: 26,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Nuestra floristería es una floristería asequible. No solo hay una variedad de flores, sino también una variedad de plantas verdes a la venta y se brindan servicios de entrega puerta a puerta.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Flor+i+Planta+(Flor+y+Planta)/@41.4024391,2.1593793,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a300733b6caf:0xea8d863096a202b5!8m2!3d41.4024391!4d2.1593793!16s%2Fg%2F11wmv8nmj5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJr2w7cwCjpBIRtQKiljCGjeo&hl=es';

export const phoneHref = 'tel:+34676153900';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de 10:00 a 21:00 de lunes a sábado salvo el martes, que cierra, y también el
 * domingo de 10:00 a 21:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 21:00',
		shifts: [{ open: '10:00', close: '21:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a sábado salvo el martes, y domingo, de 10:00 a 21:00; martes cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * La ficha no publica ningún dato de accesibilidad.
 */
export const accesibilidad = [] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Gran variedad de flores, precios asequibles y trato amable!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Ayer compré una Pata de Elefante súper bella y grande a un precio muy asequible.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hermosas flores, excelente servicio y precios justos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Flor i Planta (Flor y Planta)?',
		answer:
			'En la Travessera de Gràcia, 189, con código postal 08012, en Barcelona, en Gràcia. Publica el plus code C525+XQ Barcelona y las coordenadas 41.4024391, 2.1593793.',
	},
	{
		question: '¿Cuál es el horario de Floristería Flor i Planta (Flor y Planta)?',
		answer:
			'La ficha publica apertura de 10:00 a 21:00 de lunes a sábado salvo el martes, que cierra, y también el domingo de 10:00 a 21:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «Nuestra floristería es una floristería asequible. No solo hay una variedad de flores, sino también una variedad de plantas verdes a la venta y se brindan servicios de entrega puerta a puerta.»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 676 15 39 00. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Travessera de Gràcia, 189, en Gràcia de Barcelona, y las coordenadas 41.4024391, 2.1593793. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C525+XQ Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que esta web no reproduce ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 26 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de gran variedad de flores con precios asequibles y trato amable, de una Pata de Elefante súper bella y grande a precio muy asequible y de hermosas flores con excelente servicio y precios justos. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Travessera de Gràcia de Barcelona, en Gràcia. Gran variedad de flores, plantas verdes y entrega puerta a puerta, según su ficha.',
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
		name: (item as { label: string }).label,
		value: (item as { disponible: boolean }).disponible,
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
