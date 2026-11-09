/**
 * Datos de Floristeria Claveles
 * (Calle Amor de Dios, 2 · 41002 Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code,
 * horario semanal y accesibilidad.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Floristeria». La ficha no
 * publica web propia ni precios, así que no se reproduce ninguno de ellos. Los 3 extractos de
 * reseñas se reproducen literalmente y se citan como tales en la web.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-claveles',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, sin tilde en «Floristeria». */
	name: 'Floristeria Claveles',
	shortName: 'Claveles',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Claveles, C. Amor de Dios, 2, Casco Antiguo,
	 * 41002 Sevilla». «Casco Antiguo» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Amor de Dios, 2',
	district: 'Casco Antiguo',
	postalCode: '41002',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 955 89 40 12',
	latitude: 37.3936854,
	longitude: -5.9947004,
	/** Plus code que publica la ficha (corto; el completo es 8C9P92V4+F4). */
	plusCode: '92V4+F4 Sevilla',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 65 reseñas). */
	rating: 4.7,
	reviewCount: 65,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Floristería con reparto a domicilio / Arreglo florales para eventos /Ramos de novias / Coronas fúnebres / centros florales',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Claveles/data=!4m7!3m6!1s0xd126c0f9db8c907:0x259dac9c6bde85ce!8m2!3d37.3936854!4d-5.9947004!16s%2Fg%2F1tfx64j0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJB8m4nQ9sEg0RzoXea5ysnSU&hl=es';

export const phoneHref = 'tel:+34955894012';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:00 a 14:00 y tarde de 17:30 a 20:30); el
 * sábado abre solo por la mañana (10:00 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
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
export const hoursSummary =
	'Dos turnos de lunes a viernes (10:00–14:00 y 17:30–20:30); sábado de 10:00 a 14:00; domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Hice un pedido y cumplieron mis expectativas, con reparto a domicilio',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Gracias por vuestro trabajo y dejarnos en el recuerdo el aroma de Sevilla.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy amables eficientes y buen trabajo José luis',
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
		question: '¿Dónde está Floristeria Claveles?',
		answer:
			'En la Calle Amor de Dios, 2, con código postal 41002, en Sevilla, en Casco Antiguo. Publica el plus code 92V4+F4 Sevilla y las coordenadas 37.3936854, -5.9947004.',
	},
	{
		question: '¿Cuál es el horario de Floristeria Claveles?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 14:00 y tarde de 17:30 a 20:30. El sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que es una floristería con reparto a domicilio, arreglos florales para eventos, ramos de novias, coronas fúnebres y centros florales.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 955 89 40 12. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Amor de Dios, 2, en Casco Antiguo de Sevilla, y las coordenadas 37.3936854, -5.9947004. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 92V4+F4 Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 65 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un pedido con reparto a domicilio que cumplió expectativas, del aroma de Sevilla y de amabilidad y buen trabajo. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Amor de Dios de Sevilla, en Casco Antiguo. Reparto a domicilio, ramos de novias y centros florales.',
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
