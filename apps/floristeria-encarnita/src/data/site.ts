/**
 * Datos de Floristería Encarnita
 * (Avenida de Libia · 14010 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica número de portal, así que la dirección queda sin número. El endpoint de vista
 * previa no incluía ningún extracto literal de reseñas (respuestas estables de ~26 KB sin bloque de
 * reseñas), así que `reviews` queda vacío y la portada solo enseña la tarjeta con la valoración,
 * como en otras webs del repositorio. La ficha no publica web propia ni precios, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-encarnita.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Encarnita',
	shortName: 'Encarnita',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Encarnita, Av. de Libia, Levante, 14010
	 * Córdoba». Aquí se desarrolla «Av.» a «Avenida», como en el resto del repositorio. La ficha no
	 * publica número de portal. «Levante» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Avenida de Libia',
	district: 'Levante',
	postalCode: '14010',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 957 25 22 52',
	latitude: 37.8874207,
	longitude: -4.7632866,
	/** Plus code que publica la ficha (corto; el completo es 8C8WV6PP+XM). */
	plusCode: 'V6PP+XM Córdoba',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 47 reseñas). */
	rating: 4.4,
	reviewCount: 47,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = ['Situada frente a Cementerio San Rafael'] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Encarnita/@37.8874207,-4.7632866,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf841d489b0f:0x124d6fee4dfc4561!8m2!3d37.8874207!4d-4.7632866!16s%2Fg%2F1wf2367m?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJD5tIHYTfbA0RYUX8Te5vTRI&hl=es';

export const phoneHref = 'tel:+34957252252';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado
 * abre solo por la mañana (9:00 a 13:30) y el domingo también por la mañana (9:00 a 13:00); de
 * lunes a viernes abre dos turnos (mañana de 9:00 a 13:30 y tarde de 16:30 a 20:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 13:30 · 16:30 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:30', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 13:30 · 16:30 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 13:30 · 16:30 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 13:30 · 16:30 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 13:30 · 16:30 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:30', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 13:30',
		shifts: [{ open: '9:00', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 13:00',
		shifts: [{ open: '9:00', close: '13:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (9:00–13:30 y 16:30–20:00); sábado y domingo solo por la mañana';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de reseñas destacadas.
 *
 * El endpoint de vista previa no devolvía ningún extracto (respuestas estables sin bloque de
 * reseñas), así que queda vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Encarnita?',
		answer:
			'En la Avenida de Libia, con código postal 14010, en Córdoba, en Levante. La ficha no publica número de portal; su propia descripción dice que está situada frente al Cementerio San Rafael. Publica el plus code V6PP+XM Córdoba y las coordenadas 37.8874207, -4.7632866.',
	},
	{
		question: '¿Cuál es el horario de Floristería Encarnita?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 9:00 a 13:30 y tarde de 16:30 a 20:00. El sábado abre solo por la mañana, de 9:00 a 13:30, y el domingo también por la mañana, de 9:00 a 13:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que está situada frente al Cementerio San Rafael.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 957 25 22 52. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Libia, en Levante de Córdoba (sin número de portal), y las coordenadas 37.8874207, -4.7632866. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6PP+XM Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 47 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida de Libia de Córdoba, en Levante, frente al Cementerio San Rafael.',
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
