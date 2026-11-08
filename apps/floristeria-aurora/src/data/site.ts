/**
 * Datos de Floristería y Decoración Aurora
 * (Calle Dr. Gregorio Marañón, 3 · 14004 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 2 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 2 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-aurora.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería y Decoración Aurora',
	shortName: 'Aurora',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería y Decoración Aurora, Calle Dr. Gregorio
	 * Marañón, 3, Centro, 14004 Córdoba». «Centro» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Dr. Gregorio Marañón, 3',
	district: 'Centro',
	postalCode: '14004',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 957 20 33 41',
	latitude: 37.8781096,
	longitude: -4.78343,
	/** Plus code que publica la ficha (corto; el completo es 8C9QV6H8+6J). */
	plusCode: 'V6H8+6J Córdoba',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 41 reseñas). */
	rating: 4.2,
	reviewCount: 41,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+y+Decoraci%C3%B3n+Aurora/@37.8781096,-4.78343,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209c398f6271:0x34632bb82b7f5c82!8m2!3d37.8781096!4d-4.78343!16s%2Fg%2F11xngtt1l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJcWKPOZwgbQ0Rglx_K7grYzQ&hl=es';

export const phoneHref = 'tel:+34957203341';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:30 a 14:00 y tarde de 17:30 a 20:30); el
 * sábado abre solo por la mañana (10:00 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '9:30', close: '14:00' },
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
	'Dos turnos de lunes a viernes (9:30–14:00 y 17:30–20:30); sábado de 10:00 a 14:00; domingo cerrado';

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
 * Son los 2 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Se nota el cariño y la profesionalidad que ponen en su trabajo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Volveremos a repetir sin duda',
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
		question: '¿Dónde está Floristería y Decoración Aurora?',
		answer:
			'En la Calle Dr. Gregorio Marañón, 3, con código postal 14004, en Córdoba, en Centro. Publica el plus code V6H8+6J Córdoba y las coordenadas 37.8781096, -4.78343.',
	},
	{
		question: '¿Cuál es el horario de Floristería y Decoración Aurora?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 9:30 a 14:00 y tarde de 17:30 a 20:30. El sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su nombre anuncia decoración. La ficha no publica descripción del titular, así que esta web no reproduce ninguna.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 957 20 33 41. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Dr. Gregorio Marañón, 3, en Centro de Córdoba, y las coordenadas 37.8781096, -4.78343. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6H8+6J Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 41 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de cariño y profesionalidad en el trabajo y de ganas de repetir. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Dr. Gregorio Marañón de Córdoba, en Centro. Floristería y decoración.',
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
