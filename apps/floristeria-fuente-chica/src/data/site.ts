/**
 * Datos de Floristería · Calle Fuente Chica (Madrid).
 * (Calle Fuente Chica, 22 · Fuencarral-El Pardo · 28034 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 2 extractos destacados, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 2 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-fuente-chica.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería',
	shortName: 'Fuente Chica',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería, C. Fuente Chica, 22, ALM 1 B;1,
	 * Fuencarral-El Pardo, 28034 Madrid». «Fuencarral-El Pardo» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Fuente Chica, 22',
	district: 'Fuencarral-El Pardo',
	postalCode: '28034',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 917 34 10 10',
	latitude: 40.4956172,
	longitude: -3.6907135,
	/** Plus code que publica la ficha (corto; el completo es 8CGRF8W5+6P). */
	plusCode: 'F8W5+6P Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 9 reseñas). */
	rating: 4.6,
	reviewCount: 9,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa/@40.4956172,-3.6907135,17z/data=!3m1!4b1!4m6!3m5!1s0xd422bd866794941:0xd2fdcbcd10efc7ce!8m2!3d40.4956172!4d-3.6907135!16s%2Fg%2F1q5bmy18z?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJQUl5ZtgrQg0RzsfvEM3L_dI&hl=es';

export const phoneHref = 'tel:+34917341010';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Todos los días abre dos turnos (mañana de 10:00 a 14:00 y tarde de 17:00 a 20:00),
 * de domingo a sábado sin excepción.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos todos los días (10:00–14:00 y 17:00–20:00), de lunes a domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que la lista queda vacía y la web lo dice tal cual.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Mucha variedad de flores y unos dependientes muy atentos y honestos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me gusta,tienen buenos precios y los empleados son muy amables.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está esta floristería?',
		answer:
			'En la Calle Fuente Chica, 22 (ALM 1 B;1), con código postal 28034, en Madrid, en Fuencarral-El Pardo. Publica el plus code F8W5+6P Madrid y las coordenadas 40.4956172, -3.6907135.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos todos los días: mañana de 10:00 a 14:00 y tarde de 17:00 a 20:00, de lunes a domingo sin excepción. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de mucha variedad de flores, buenos precios y trato amable.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 917 34 10 10. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Fuente Chica, 22, en Fuencarral-El Pardo de Madrid, y las coordenadas 40.4956172, -3.6907135. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code F8W5+6P Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 9 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de mucha variedad de flores con dependientes atentos y honestos, y de buenos precios con empleados muy amables. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en la Calle Fuente Chica de Madrid, en Fuencarral-El Pardo. Mucha variedad de flores y trato amable, según sus reseñas.',
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
