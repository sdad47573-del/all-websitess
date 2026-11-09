/**
 * Datos de Floristeria Carrasco
 * (Carrer del Llobregós, 149 · 08032 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
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
	siteUrl: 'https://www.sur-digital.com/floristeria-carrasco',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Carrasco',
	shortName: 'Carrasco',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer del Llobregós, 149, Horta-Guinardó, 08032
	 * Barcelona». «Horta-Guinardó» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer del Llobregós, 149',
	district: 'Horta-Guinardó',
	postalCode: '08032',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 934 20 64 76',
	latitude: 41.4238129,
	longitude: 2.1554838,
	/** Plus code que publica la ficha (completo: 8FH4C5F4+G5). */
	plusCode: 'C5F4+G5 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 82 reseñas). */
	rating: 4.4,
	reviewCount: 82,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Carrasco/@41.4238129,2.1554838,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bd4d8334fdad:0xb89148da36346a3b!8m2!3d41.4238129!4d2.1554838!16s%2Fg%2F1td3_b14?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJrf00g029pBIRO2o0NtpIkbg&hl=es';

export const phoneHref = 'tel:+34934206476';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a jueves abre dos turnos (mañana de 9:30 a 14:00 y tarde de 17:00 a 20:00); el
 * viernes abre en un solo turno (9:30 a 20:00), el sábado solo por la mañana (9:00 a 13:45) y
 * el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 20:00',
		shifts: [{ open: '9:30', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 13:45',
		shifts: [{ open: '9:00', close: '13:45' }],
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
	'Dos turnos de lunes a jueves (9:30–14:00 y 17:00–20:00); viernes de 9:30 a 20:00; sábado de 9:00 a 13:45; domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible; el aparcamiento adaptado figura como
 * no disponible («No hay aparcamiento accesible con silla de ruedas»). La ficha no publica
 * ningún otro.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Su dedicación y profesionalidad son dignos de elogio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Fui a comprarle un ramo de flores a mi novia y encargué un ramo de rosas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Profesionales en su género muy buen trato',
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
		question: '¿Dónde está Floristeria Carrasco?',
		answer:
			'En el Carrer del Llobregós, 149, con código postal 08032, en Barcelona, en Horta-Guinardó. Publica el plus code C5F4+G5 Barcelona y las coordenadas 41.4238129, 2.1554838.',
	},
	{
		question: '¿Cuál es el horario de Floristeria Carrasco?',
		answer:
			'La ficha publica dos turnos de lunes a jueves: mañana de 9:30 a 14:00 y tarde de 17:00 a 20:00. El viernes abre en un solo turno, de 9:30 a 20:00; el sábado solo por la mañana, de 9:00 a 13:45, y el domingo cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de dedicación y profesionalidad dignas de elogio, de un ramo de rosas para la novia y de profesionales con muy buen trato.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 934 20 64 76. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Llobregós, 149, en Horta-Guinardó de Barcelona, y las coordenadas 41.4238129, 2.1554838. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C5F4+G5 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible y el aparcamiento adaptado figura como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 82 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de dedicación y profesionalidad dignas de elogio, de un ramo de rosas para la novia y de profesionales con muy buen trato. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer del Llobregós de Barcelona, en Horta-Guinardó. Dedicación y profesionalidad, según sus reseñas.',
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
