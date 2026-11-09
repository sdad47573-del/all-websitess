/**
 * Datos de Floristería Granada
 * (Avenida Granada, 18 · 14009 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-granada',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Granada',
	shortName: 'Granada',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Granada, Av. Granada, 18, Sur, 14009
	 * Córdoba». «Sur» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Avenida Granada, 18',
	district: 'Sur',
	postalCode: '14009',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 957 29 33 05',
	latitude: 37.8677474,
	longitude: -4.7752371,
	/** Plus code que publica la ficha (corto; el completo es 8C9QV69F+3W). */
	plusCode: 'V69F+3W Córdoba',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 52 reseñas). */
	rating: 4.5,
	reviewCount: 52,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Granada/@37.8677474,-4.7752371,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d208f01112c73:0x9c0644ebd5bdbe2e!8m2!3d37.8677474!4d-4.7752371!16s%2Fg%2F1tht2t1m?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJcywRAY8gbQ0RLr691etEBpw&hl=es';

export const phoneHref = 'tel:+34957293305';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:00 a 13:30 y tarde de 17:00 a 19:00); el
 * sábado abre solo por la mañana (9:00 a 13:30) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 13:30 · 17:00 – 19:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '17:00', close: '19:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 13:30 · 17:00 – 19:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '17:00', close: '19:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 13:30 · 17:00 – 19:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '17:00', close: '19:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 13:30 · 17:00 – 19:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '17:00', close: '19:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 13:30 · 17:00 – 19:00',
		shifts: [
			{ open: '9:00', close: '13:30' },
			{ open: '17:00', close: '19:00' },
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (9:00–13:30 y 17:00–19:00); sábado de 9:00 a 13:30; domingo cerrado';

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
		text: 'Trabajas preciosos, quedas contento seguro y precios muy buenos.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato y reparto a domicilio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hice un encargo a través del teléfono y me atendieron genial.',
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
		question: '¿Dónde está Floristería Granada?',
		answer:
			'En la Avenida Granada, 18, con código postal 14009, en Córdoba, en Sur. Publica el plus code V69F+3W Córdoba y las coordenadas 37.8677474, -4.7752371.',
	},
	{
		question: '¿Cuál es el horario de Floristería Granada?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 9:00 a 13:30 y tarde de 17:00 a 19:00. El sábado abre solo por la mañana, de 9:00 a 13:30, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de trabajos preciosos y de reparto a domicilio.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 957 29 33 05. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Granada, 18, en Sur de Córdoba, y las coordenadas 37.8677474, -4.7752371. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V69F+3W Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 52 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de trabajos preciosos con buenos precios, de buen trato y reparto a domicilio y de un encargo por teléfono genial. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Avenida Granada de Córdoba, en Sur. Trabajos preciosos y reparto a domicilio, según sus reseñas.',
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
