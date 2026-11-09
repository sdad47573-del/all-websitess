/**
 * Datos de La Florería de Carmen
 * (Calle Arroyo de San Lorenzo, 1, Local · 14002 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * El nombre se reproduce tal como lo publica la ficha. El endpoint de vista previa no incluía
 * ningún extracto literal de reseñas (respuestas estables de ~27 KB sin bloque de reseñas), así
 * que `reviews` queda vacío y la portada solo enseña la tarjeta con la valoración, como en otras
 * webs del repositorio. La ficha no publica web propia, precios ni datos de accesibilidad, así que
 * no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-floreria-de-carmen',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Florería de Carmen',
	shortName: 'La Florería',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «La Florería de Carmen, C. Arroyo de San Lorenzo, 1,
	 * Local, Centro, 14002 Córdoba». «Centro» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Arroyo de San Lorenzo, 1, Local',
	district: 'Centro',
	postalCode: '14002',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 664 35 45 40',
	latitude: 37.8880404,
	longitude: -4.7692192,
	/** Plus code que publica la ficha (corto; el completo es 8C9QV6QJ+68). */
	plusCode: 'V6QJ+68 Córdoba',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 1 reseña). */
	rating: 5,
	reviewCount: 1,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'En La Florería de Carmen realizamos todo tipo de decoración floral tanto en flor cortada como preservada. Servicio a domicilio',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Florer%C3%ADa+de+Carmen/@37.8880404,-4.7692192,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf46e95fd3b7:0xd36a7e47230e0831!8m2!3d37.8880404!4d-4.7692192!16s%2Fg%2F11xp230wt4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJt9Nf6UbfbA0RMQgOI0d-atM&hl=es';

export const phoneHref = 'tel:+34664354540';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:30 a 14:00 y tarde de 17:30 a 20:30); el
 * sábado abre solo por la mañana (10:30 a 14:00) y el domingo cierra.
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
	'Dos turnos de lunes a viernes (10:30–14:00 y 17:30–20:30); sábado solo por la mañana; domingo cerrado';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno (el bloque de atributos del endpoint viene vacío), así que queda
 * sin entradas y la portada lo declara en vez de inventarlo.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

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
 * La ficha no publica web, precios ni accesibilidad, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está La Florería de Carmen?',
		answer:
			'En la Calle Arroyo de San Lorenzo, 1, Local, con código postal 14002, en Córdoba, en Centro. Publica el plus code V6QJ+68 Córdoba y las coordenadas 37.8880404, -4.7692192.',
	},
	{
		question: '¿Cuál es el horario de La Florería de Carmen?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:30 a 14:00 y tarde de 17:30 a 20:30. El sábado abre solo por la mañana, de 10:30 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que realizan todo tipo de decoración floral tanto en flor cortada como preservada, con servicio a domicilio.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 664 35 45 40. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Arroyo de San Lorenzo, 1, Local, en Centro de Córdoba, y las coordenadas 37.8880404, -4.7692192. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6QJ+68 Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no dice nada sobre accesos, aparcamiento adaptado o entrada con sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 1 reseña. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle Arroyo de San Lorenzo de Córdoba, en Centro. Decoración floral en flor cortada y preservada, con servicio a domicilio.',
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
