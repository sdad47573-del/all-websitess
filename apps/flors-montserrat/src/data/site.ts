/**
 * Datos de FLORS MONTSERRAT (Av. de Sant Ramon Nonat, 24 · Les Corts, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, distintivo
 * y horario semanal.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. Tampoco publica descripción
 * del titular, así que no se reproduce ninguna. Los 3 extractos de reseñas se reproducen
 * literalmente y se citan como tales en la web. La ficha no publica precios, así que no se
 * reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flors-montserrat.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'FLORS MONTSERRAT',
	shortName: 'Montserrat',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «FLORS MONTSERRAT, Av. de Sant Ramon Nonat, 24,
	 * Les Corts, 08028 Barcelona». «Les Corts» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Av. de Sant Ramon Nonat, 24',
	district: 'Les Corts',
	postalCode: '08028',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 611 63 92 07',
	latitude: 41.376913,
	longitude: 2.1169879,
	/** Plus code que publica la ficha (corto; el completo es 8FH494G8+QQ). */
	plusCode: '94G8+QQ Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 117 reseñas). */
	rating: 4.9,
	reviewCount: 117,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/FLORS+MONTSERRAT/@41.376913,2.1169879,17z/data=!3m1!4b1!4m6!3m5!1s0x12a498f735410401:0x996f7335f9169bea!8m2!3d41.376913!4d2.1169879!16s%2Fg%2F1twzyvz8?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJAQRBNfeYpBIR6psW-TVzb5k&hl=es';

export const phoneHref = 'tel:+34611639207';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre dos turnos (10:00–14:00 y 17:00–20:00). El sábado y el domingo
 * abre solo por la mañana (sábado 10:00–14:00, domingo 11:00–14:00) y el lunes está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 y 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 y 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 y 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 y 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
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
		service: '11:00 – 14:00',
		shifts: [{ open: '11:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mar–vie 10:00–14:00 y 17:00–20:00; sáb 10:00–14:00; dom 11:00–14:00; lun cerrado';

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
 * Distintivos que publica la ficha (con valor disponible).
 *
 * La ficha solo publica uno: el local es amigable con la comunidad LGBTQ+.
 */
export const distintivos = ['Amigable con la comunidad LGBTQ+'] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Muy contento por el trato recibido y la profesionalidad.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La pareja que atiende super atenta y simpática.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena atención y dedicación.',
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
		question: '¿Dónde está esta floristería?',
		answer:
			'En la Av. de Sant Ramon Nonat, 24, con código postal 08028, en Barcelona, en Les Corts. Publica el plus code 94G8+QQ Barcelona y las coordenadas 41.376913, 2.1169879.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de martes a viernes (10:00–14:00 y 17:00–20:00), solo mañanas el sábado (10:00–14:00) y el domingo (11:00–14:00), y lunes cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y la ficha la presenta como «Flors Montserrat - Floristeria a Collblanc». Las reseñas que destaca hablan de trato y profesionalidad, de una pareja que atiende atenta y simpática y de buena atención con dedicación.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 611 63 92 07. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Sant Ramon Nonat, 24, en Les Corts de Barcelona, y las coordenadas 41.376913, 2.1169879. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 94G8+QQ Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado. Además se declara amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 117 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de trato y profesionalidad, de atención atenta y simpática y de buena atención con dedicación. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, el distintivo, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en la Av. de Sant Ramon Nonat de Barcelona, en Les Corts. Valoración de 4,9 sobre 5 con 117 reseñas en Google Maps.',
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
