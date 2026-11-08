/**
 * Datos de Ares Flors (Carrer de Sepúlveda, 55 · Eixample, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas, plus code
 * y horario semanal.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción del titular y
 * los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://ares-flors.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Ares Flors',
	shortName: 'Ares',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Ares Flors, Carrer de Sepúlveda, 55, Eixample,
	 * 08015 Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Sepúlveda, 55',
	district: 'Eixample',
	postalCode: '08015',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 933 25 99 75',
	latitude: 41.3777997,
	longitude: 2.1550022,
	/** Plus code que publica la ficha (corto; el completo es 8FH395H4+42). */
	plusCode: '95H4+42 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 65 reseñas). */
	rating: 4.7,
	reviewCount: 65,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Ares+Flors/@41.3777997,2.1550022,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2633256ecbf:0x190ce3d934bfe5dc!8m2!3d41.3777997!4d2.1550022!16s%2Fg%2F1thh4l77?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJv-xWMmOipBIR3OW_NNnjDBk&hl=es';

export const phoneHref = 'tel:+34933259975';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Está escrita en catalán y se reproduce tal cual, con su doble punto final.
 */
export const ownerDescription =
	'Flors i plantes. Fem rams i centres florals. enviament a domicili..';

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre jornada continua de 9:00 a 20:00. El sábado abre solo por la
 * mañana (9:00–14:00) y el domingo de 9:00 a 14:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 14:00',
		shifts: [{ open: '09:00', close: '14:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 14:00',
		shifts: [{ open: '09:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun–vie 9:00–20:00; sáb 9:00–14:00; dom 9:00–14:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Local pequeño pero bien surtido y magníficamente atendido.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy atentos, excelente servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen gusto y precios razonables.',
		rating: 4,
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
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de Sepúlveda, 55, con código postal 08015, en Barcelona, en el Eixample. Publica el plus code 95H4+42 Barcelona y las coordenadas 41.3777997, 2.1550022.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica jornada continua de lunes a viernes de 9:00 a 20:00, sábado solo por la mañana de 9:00 a 14:00 y domingo de 9:00 a 14:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente: «Flors i plantes. Fem rams i centres florals. enviament a domicili..». Las reseñas que destaca hablan de un local pequeño pero bien surtido y magníficamente atendido, de un servicio excelente y de buen gusto con precios razonables.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 25 99 75. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Sepúlveda, 55, en el Eixample de Barcelona, y las coordenadas 41.3777997, 2.1550022. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95H4+42 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado. Además la marca como amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 65 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un local pequeño pero bien surtido y magníficamente atendido, de atención y servicio excelentes, y de buen gusto con precios razonables. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en el Carrer de Sepúlveda de Barcelona, en el Eixample. Flors i plantes: rams i centres florals amb enviament a domicili.',
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
