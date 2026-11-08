/**
 * Datos de Floristería Rosgaly Sant Antoni
 * (Carrer del Comte Borrell, 32 · 08015 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, web propia,
 * valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code y horario
 * semanal.
 *
 * La ficha no publica descripción del titular ni datos de accesibilidad, así que no se reproduce
 * ninguno. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-rosgaly-sant-antoni.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Rosgaly Sant Antoni',
	shortName: 'Rosgaly Sant Antoni',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer del Comte Borrell, 32, Eixample, 08015
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer del Comte Borrell, 32',
	district: 'Eixample',
	postalCode: '08015',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 604 87 29 87',
	latitude: 41.3768473,
	longitude: 2.1636647,
	/** Plus code que publica la ficha (completo: 8FH495G7+PF). */
	plusCode: '95G7+PF Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 94 reseñas). */
	rating: 4.8,
	reviewCount: 94,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Rosgaly+Sant+Antoni/@41.3768473,2.1636647,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3077e622f01:0xf2f5610d028116ea!8m2!3d41.3768473!4d2.1636647!16s%2Fg%2F11yf7qb_xn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJAS9ifgejpBIR6haBAg1h9fI&hl=es';

/** Web propia publicada en la ficha. */
export const websiteUrl = 'https://rosgaly.es/';

export const phoneHref = 'tel:+34604872987';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días en dos turnos, mañana y tarde de 17:00 a 21:00: de martes a domingo la
 * mañana es de 12:00 a 16:00 y el lunes abre antes, de 10:00 a 16:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00 · 17:00 – 21:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '17:00', close: '21:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días en dos turnos: mañana (12:00–16:00, lunes desde las 10:00) y tarde de 17:00 a 21:00';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * La ficha no publica ningún dato de accesibilidad.
 */
export const accesibilidad = [] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Hoy fui al medio día, excelente atención.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy bonita y con muy buenos productos, muy acogedora!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tienen un montón de plantas bonitas y fáciles de cuidar',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Rosgaly Sant Antoni?',
		answer:
			'En el Carrer del Comte Borrell, 32, con código postal 08015, en Barcelona, en Eixample. Publica el plus code 95G7+PF Barcelona y las coordenadas 41.3768473, 2.1636647.',
	},
	{
		question: '¿Cuál es el horario de Floristería Rosgaly Sant Antoni?',
		answer:
			'La ficha publica apertura todos los días en dos turnos: mañana de 12:00 a 16:00 (el lunes abre antes, de 10:00 a 16:00) y tarde de 17:00 a 21:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y publica su web propia, rosgaly.es, con ramos, suscripción floral, bodas y eventos y plantas. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de excelente atención, de tienda bonita y acogedora con muy buenos productos y de plantas bonitas y fáciles de cuidar.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 604 87 29 87. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tiene web propia?',
		answer:
			'Sí: la ficha publica https://rosgaly.es/. El enlace «Web oficial» de esta web abre esa dirección en una pestaña nueva.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Comte Borrell, 32, en Eixample de Barcelona, y las coordenadas 41.3768473, 2.1636647. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95G7+PF Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que esta web no reproduce ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 94 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de excelente atención al mediodía, de tienda bonita y acogedora con muy buenos productos y de un montón de plantas bonitas y fáciles de cuidar. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer del Comte Borrell de Barcelona, en Eixample. Excelente atención y plantas bonitas y fáciles de cuidar, según sus reseñas.',
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
	sameAs: [websiteUrl],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
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
		name: (item as { label: string }).label,
		value: (item as { disponible: boolean }).disponible,
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
