/**
 * Datos de Floristeria La Miranda (Carrer de la Miranda, 56 · Cornellà de Llobregat).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas (el resumen editorial automático de Google no es del titular y no se reproduce).
 * Los 3 extractos de reseñas se reproducen literalmente, emojis incluidos, y se citan como tales.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-la-miranda.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria La Miranda (Cornellà de Llobregat)',
	shortName: 'La Miranda',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria La Miranda (Cornellà de Llobregat),
	 * Carrer de la Miranda, 56, 08940 Cornellà de Llobregat, Barcelona».
	 */
	streetAddress: 'Carrer de la Miranda, 56',
	postalCode: '08940',
	city: 'Cornellà de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 933 76 43 57',
	latitude: 41.3601385,
	longitude: 2.0767967,
	/** Plus code que publica la ficha (corto; el completo es 8FH2936G+3P). */
	plusCode: '936G+3P Cornellà de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 310 reseñas). */
	rating: 4.9,
	reviewCount: 310,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+La+Miranda+(Cornell%C3%A0+de+Llobregat)/@41.3601385,2.0767967,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49942d70c306d:0x7c9d18e405ddf633!8m2!3d41.3601385!4d2.0767967!16s%2Fg%2F11c1qrd6bw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJbTAM10KZpBIRM_bdBeQYnXw&hl=es';

export const phoneHref = 'tel:+34933764357';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:00 a 13:30 y tarde de 17:00 a 20:30).
 * El sábado abre solo por la mañana (9:00–14:00) y el domingo está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun–vie dos turnos (9:00–13:30 y 17:00–20:30); sáb 9:00–14:00; dom cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El local tiene acceso para sillas de ruedas y también aparcamiento adaptado.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
];

/**
 * Distintivos que publica la ficha (con valor disponible).
 *
 * La ficha se muestra como amigable con la comunidad LGBTQ+.
 */
export const distintivos = ['Amigable con la comunidad LGBTQ+'] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual, emojis
 * incluidos, y se citan como tales en la web. El endpoint no trae el nombre del autor,
 * así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Muy buen servicio y muy buena atención, muy satisfecha volveré a repetir sin duda.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hay sido muy rápidos y amables muchas gracias por vuestro gran servicio 🥰🥰💐.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Quede muy contento con la compra, excelente servicio y agilidad🙏.',
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
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de la Miranda, 56, con código postal 08940, en Cornellà de Llobregat (Barcelona). Publica el plus code 936G+3P Cornellà de Llobregat y las coordenadas 41.3601385, 2.0767967.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de lunes a viernes (mañana de 9:00 a 13:30 y tarde de 17:00 a 20:30), sábado solo por la mañana de 9:00 a 14:00 y domingo cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de muy buen servicio y atención con ganas de repetir, de rapidez y amabilidad, y de compras con excelente servicio y agilidad.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 76 43 57. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de la Miranda, 56, en Cornellà de Llobregat, y las coordenadas 41.3601385, 2.0767967. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 936G+3P Cornellà de Llobregat.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas y también aparcamiento adaptado. Además se muestra como amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 310 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de muy buen servicio y atención con ganas de repetir, de rapidez y amabilidad, y de compras con excelente servicio y agilidad. El enlace de la valoración abre el listado completo en Google Maps.',
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
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en el Carrer de la Miranda de Cornellà de Llobregat. Muy buen servicio y atención, rapidez y amabilidad, según sus reseñas.',
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
