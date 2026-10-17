/**
 * Datos de Floristería y Complementos Rocío Flor
 * (Calle San Pío X, 88 · 41840 Pilas, Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas y 2 extractos destacados, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica distrito, web propia, descripción del titular ni datos de accesibilidad,
 * así que no se reproduce ninguno de ellos. Los 2 extractos de reseñas se reproducen
 * literalmente. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://rocio-flor.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería y Complementos Rocío Flor',
	shortName: 'Rocío Flor',
	/** Categorías que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería', 'Tienda de accesorios de moda'],
	/**
	 * Dirección publicada en la ficha: «Floristería y Complementos Rocío Flor, C. San Pío X, 88,
	 * 41840 Pilas, Sevilla». La ficha no publica distrito.
	 */
	streetAddress: 'Calle San Pío X, 88',
	district: '',
	postalCode: '41840',
	city: 'Pilas',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 616 25 65 08',
	latitude: 37.3050678,
	longitude: -6.2997197,
	/** Plus code que publica la ficha (corto; el completo es 8C2X8P42+24). */
	plusCode: '8P42+24 Pilas',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 41 reseñas). */
	rating: 4.5,
	reviewCount: 41,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica descripción del titular, así que se deja vacía y la web lo declara.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+y+Complementos+Roc%C3%ADo+Flor/@37.3050678,-6.2997197,17z/data=!3m1!4b1!4m6!3m5!1s0xd121b35c3fca125:0x3367323fcaade08!8m2!3d37.3050678!4d-6.2997197!16s%2Fg%2F11bw2_dw9_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJJaH8wzUbEg0RCN6q_CNzNgM&hl=es';

export const phoneHref = 'tel:+3461625508';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:30 a 14:00 y tarde de 17:30 a 20:00);
 * el sábado y el domingo cierra (la ficha muestra «Cerrado · Apertura: 10:30 (lun)» el sábado).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
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
export const hoursSummary =
	'Dos turnos de lunes a viernes (10:30–14:00 y 17:30–20:00); sábado y domingo cerrado';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que se deja vacía y la web lo declara.
 */
export const accesibilidad = [] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Una excelente floristeria dueña un encanta y flores siempre preciosas...',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lo hicieron todo de inmediato a pesar del horario, con muchísima confianza.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica distrito, web, descripción ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería y Complementos Rocío Flor?',
		answer:
			'En la Calle San Pío X, 88, con código postal 41840, en Pilas (Sevilla). La ficha no publica distrito. Publica el plus code 8P42+24 Pilas y las coordenadas 37.3050678, -6.2997197.',
	},
	{
		question: '¿Cuál es el horario de Floristería y Complementos Rocío Flor?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:30 a 14:00 y tarde de 17:30 a 20:00. El sábado y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y además como tienda de accesorios de moda. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo sus categorías, su horario, su valoración y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 616 25 65 08. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle San Pío X, 88, en Pilas, y las coordenadas 37.3050678, -6.2997197. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 8P42+24 Pilas.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no reproduce ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 41 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: uno habla de una excelente floristería con flores siempre preciosas y otro de que lo hicieron todo de inmediato con muchísima confianza. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería y tienda de complementos en la Calle San Pío X, 88 de Pilas (Sevilla). Un 4,5 sobre 5 en Google Maps.',
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
	/* Sin `amenityFeature`: la ficha no publica datos de accesibilidad. */
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
