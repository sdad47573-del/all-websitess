/**
 * Datos de Floristería Emilia El Perchel (Calle Salitre, 7, Loc 2 · 29002 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, accesibilidad y las reseñas
 * destacadas.
 *
 * La ficha no publica descripción del titular, ni web propia, ni precios, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-emilia-perchel',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'Floristería Emilia El Perchel',
	shortName: 'Emilia',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Calle Salitre, 7, Loc 2», con el local 2. «Distrito
	 * Centro» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Salitre, 7, Loc 2',
	district: 'Distrito Centro',
	postalCode: '29002',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 665 48 34 72',
	latitude: 36.7139825,
	longitude: -4.4266595,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPH7F+H8). */
	plusCode: 'PH7F+H8 Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 69 reseñas). */
	rating: 4.9,
	reviewCount: 69,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Emilia+El+Perchel/@36.7139825,-4.4266595,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a8c863af6d:0xc62b1bc6b50aab2a!8m2!3d36.7139825!4d-4.4266595!16s%2Fg%2F11kk7p6_fs?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJba9jyKj3cg0RKqsKtcYbK8Y&hl=es';

export const phoneHref = 'tel:+34665483472';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. De martes a
 * viernes abre dos turnos (mañana de 11:00 a 14:00 y tarde de 17:00 a 20:00); el lunes la mañana
 * es más corta (11:00 a 13:30) con la misma tarde; el sábado solo por la mañana (11:00 a 14:00)
 * y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 14:00',
		shifts: [{ open: '11:00', close: '14:00' }],
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
	'Dos turnos de martes a viernes (11:00–14:00 y 17:00–20:00); lunes con mañana corta; sábado solo por la mañana; domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Muy antentos y rápidos llego antes de lo que me dijeron 👌',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Compré un ramo para regalarse a mi esposa y me encantó.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muchas gracias, quedamos encantados!',
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
		question: '¿Dónde está Floristería Emilia El Perchel?',
		answer:
			'En la Calle Salitre, 7, Loc 2, con código postal 29002, en Málaga, en Distrito Centro (El Perchel). La ficha publica el plus code PH7F+H8 Málaga y las coordenadas 36.7139825, -4.4266595.',
	},
	{
		question: '¿Cuál es el horario de Floristería Emilia El Perchel?',
		answer:
			'La ficha publica dos turnos de martes a viernes: mañana de 11:00 a 14:00 y tarde de 17:00 a 20:00. El lunes la mañana es más corta, de 11:00 a 13:30, con la misma tarde. El sábado abre solo por la mañana, de 11:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la floristería?',
		answer:
			'Google la clasifica como floristería. Tiene 4,9 sobre 5 con 69 reseñas, y en las tres reseñas que destaca la ficha se habla de rapidez, de un ramo para regalar que encantó y de clientes que quedaron encantados. La ficha no publica catálogo ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 665 48 34 72. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Salitre, 7, Loc 2, en Distrito Centro de Málaga (El Perchel), y las coordenadas 36.7139825, -4.4266595. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH7F+H8 Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
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
		'Floristería en la Calle Salitre, 7 (Loc 2) de Málaga, en Distrito Centro (El Perchel).',
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
