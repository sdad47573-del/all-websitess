/**
 * Datos de Floristerías La Abadia (Calle Amadeo Vives, 9 · 29002 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicio de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, ni web propia, ni precios, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-la-abadia',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '16 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps. Google lo escribe con «Abadia» sin tilde y
	 * con «Floristerías» en plural; se reproduce literal (como en el resto del repositorio).
	 */
	name: 'Floristerías La Abadia',
	shortName: 'La Abadia',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Amadeo Vives, 9»: aquí se
	 * desarrolla a «Calle Amadeo Vives, 9», como en el resto del repositorio. El segundo término de
	 * la ficha, «Carretera de Cádiz», es el barrio y se conserva aparte.
	 */
	streetAddress: 'Calle Amadeo Vives, 9',
	district: 'Carretera de Cádiz',
	postalCode: '29002',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 619 95 12 52',
	latitude: 36.7064268,
	longitude: -4.4368917,
	/** Plus code que publica la ficha. */
	plusCode: 'PH47+H6 Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 81 reseñas). */
	rating: 4.8,
	reviewCount: 81,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADas+La+Abadia/@36.7064268,-4.4368917,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f78234dbb53b:0x32cffc99c455df58!8m2!3d36.7064268!4d-4.4368917!16s%2Fg%2F11bbx0kqn4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJO7XbNIL3cg0RWN9VxJn8zzI&hl=es';

export const phoneHref = 'tel:+34619951252';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 16 de octubre de 2026 cubre del viernes 16 al jueves 22 de octubre. La tienda abre
 * dos turnos de lunes a viernes —mañana de 10:30 a 14:00 y tarde de 17:30 a 20:30—, el sábado solo
 * por la mañana (10:30 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:30 – 14:00 · 17:30 – 20:30',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:30 – 14:00',
		shifts: [{ open: '10:30', close: '14:00' }],
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
	'Mañanas de 10:30 a 14:00 y tardes de 17:30 a 20:30 de lunes a viernes; el sábado solo por la mañana y el domingo cerrado';

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
		text: 'Muy buen servicio, flores muy bonitas y propietaria muy agradable 10/10',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente trato y flores preciosas, volveremos 💘',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La dueña es muy apañada, da gusto ser atendido por ella.',
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
		question: '¿Dónde está Floristerías La Abadia?',
		answer:
			'En la Calle Amadeo Vives, 9, con código postal 29002, en Málaga, dentro del barrio de Carretera de Cádiz. La ficha publica el plus code PH47+H6 Málaga y las coordenadas 36.7064268, -4.4368917.',
	},
	{
		question: '¿Cuál es el horario de Floristerías La Abadia?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:30 a 14:00 y tarde de 17:30 a 20:30. El sábado abre solo por la mañana, de 10:30 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 16 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la floristería?',
		answer:
			'Google la clasifica como floristería. Tiene 4,8 sobre 5 con 81 reseñas, y en las tres reseñas que destaca la ficha se habla de flores muy bonitas y preciosas, del buen servicio y del trato de la propietaria. La ficha no publica catálogo ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 619 95 12 52. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Amadeo Vives, 9, en el barrio de Carretera de Cádiz de Málaga, y las coordenadas 36.7064268, -4.4368917. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH47+H6 Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 16 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Amadeo Vives, 9 de Málaga, en el barrio de Carretera de Cádiz.',
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
