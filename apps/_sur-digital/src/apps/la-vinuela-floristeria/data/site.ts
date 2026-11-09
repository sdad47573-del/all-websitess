/**
 * Datos de La Viñuela Floristeria
 * (Avenida de Libia · 14010 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Floristeria». La ficha no
 * publica número de portal, así que la dirección queda sin número. El endpoint de vista previa no
 * incluía ningún extracto literal de reseñas (respuestas estables de ~27 KB sin bloque de reseñas),
 * así que `reviews` queda vacío y la portada solo enseña la tarjeta con la valoración, como en otras
 * webs del repositorio. La ficha no publica web propia ni precios, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-vinuela-floristeria',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, sin tilde en «Floristeria». */
	name: 'La Viñuela Floristeria',
	shortName: 'La Viñuela',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «La Viñuela Floristeria, Avenida de Libia, Av. de
	 * Barcelona, 14010 Córdoba». La ficha no publica número de portal. «Levante» es el distrito y
	 * se conserva aparte.
	 */
	streetAddress: 'Avenida de Libia',
	district: 'Levante',
	postalCode: '14010',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 957 25 96 91',
	latitude: 37.8873155,
	longitude: -4.7633838,
	/** Plus code que publica la ficha (corto; el completo es 8C8WV6PP+WJ). */
	plusCode: 'V6PP+WJ Córdoba',
	/** Valoración de la ficha en la fecha de consulta (2,7 sobre 5 con 61 reseñas). */
	rating: 2.7,
	reviewCount: 61,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Una de las primeras Floristerías de Córdoba, siempre tratando de ayudar a los clientes.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Vi%C3%B1uela+Floristeria/@37.8873155,-4.7633838,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf86af4abbed:0x7e41b46325349fa7!8m2!3d37.8873155!4d-4.7633838!16s%2Fg%2F11cmg19zy7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7btKr4bfbA0Rp580JWO0QX4&hl=es';

export const phoneHref = 'tel:+34957259691';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado
 * abre solo por la mañana (9:00 a 14:00) y el domingo también por la mañana (9:00 a 13:30); el
 * lunes abre dos turnos (mañana de 9:00 a 13:30 y tarde de 16:00 a 20:00); el martes abre solo por
 * la mañana (9:00 a 13:30); de miércoles a viernes abre dos turnos (mañana de 9:00 a 13:30 y tarde
 * de 16:00 a 20:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 13:30 · 16:00 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 13:30',
		shifts: [{ open: '9:00', close: '13:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 13:30 · 16:00 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 13:30 · 16:00 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 13:30 · 16:00 – 20:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 14:00',
		shifts: [{ open: '9:00', close: '14:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 13:30',
		shifts: [{ open: '9:00', close: '13:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos lunes y de miércoles a viernes (9:00–13:30 y 16:00–20:00); martes y sábado solo por la mañana; domingo de 9:00 a 13:30';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como no disponible: el aparcamiento adaptado para sillas de
 * ruedas. La ficha no publica ningún otro.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

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
		question: '¿Dónde está La Viñuela Floristeria?',
		answer:
			'En la Avenida de Libia, con código postal 14010, en Córdoba, en Levante. La ficha no publica número de portal. Publica el plus code V6PP+WJ Córdoba y las coordenadas 37.8873155, -4.7633838.',
	},
	{
		question: '¿Cuál es el horario de La Viñuela Floristeria?',
		answer:
			'La ficha publica dos turnos el lunes y de miércoles a viernes: mañana de 9:00 a 13:30 y tarde de 16:00 a 20:00. El martes abre solo por la mañana, de 9:00 a 13:30, igual que el sábado (9:00 a 14:00), y el domingo abre de 9:00 a 13:30. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que es una de las primeras floristerías de Córdoba y que siempre trata de ayudar a los clientes.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 957 25 96 91. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Libia, en Levante de Córdoba (sin número de portal), y las coordenadas 37.8873155, -4.7633838. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6PP+WJ Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como no disponible: no hay aparcamiento accesible con silla de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 2,7 sobre 5 con 61 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Avenida de Libia de Córdoba, en Levante. Una de las primeras floristerías de Córdoba.',
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
