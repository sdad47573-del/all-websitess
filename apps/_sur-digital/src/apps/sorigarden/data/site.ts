/**
 * Datos de Floristería Sorigarden
 * (Calle Virgen de Fátima, 1d · 41330 Los Rosales, Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * La vista previa incluía una única reseña sin su texto, así que esta web no reproduce ningún
 * extracto: solo la nota media con el recuento y el enlace al listado. La ficha no publica
 * distrito, web propia, descripción del titular ni datos de accesibilidad, así que no se reproduce
 * ninguno de ellos. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/sorigarden',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Sorigarden',
	shortName: 'Sorigarden',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Sorigarden, C. Virgen de Fátima, 1d,
	 * 41330 Los Rosales, Sevilla». La ficha no publica distrito.
	 */
	streetAddress: 'Calle Virgen de Fátima, 1d',
	district: '',
	postalCode: '41330',
	city: 'Los Rosales',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 652 56 51 20',
	latitude: 37.5898899,
	longitude: -5.73036,
	/** Plus code que publica la ficha (corto; el completo es 8C9PH7Q9+XV). */
	plusCode: 'H7Q9+XV Los Rosales',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 1 reseña). */
	rating: 5,
	reviewCount: 1,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica descripción del titular, así que se deja vacía y la web lo declara.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Sorigarden/@37.5898899,-5.73036,17z/data=!3m1!4b1!4m6!3m5!1s0xd125918559fb377:0xba7542963953299!8m2!3d37.5898899!4d-5.73036!16s%2Fg%2F11m6kc07cg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJd7OfVRhZEg0RmTKVYylUpws&hl=es';

export const phoneHref = 'tel:+34652565120';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:00 a 14:00 y tarde de 17:30 a 20:00);
 * el sábado abre solo por la mañana (10:00 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (10:00–14:00 y 17:30–20:00); sábado de 10:00 a 14:00; domingo cerrado';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que se deja vacía y la web lo declara.
 */
export const accesibilidad = [] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * La vista previa incluía una única reseña sin su texto, así que se deja vacía y la web lo
 * declara: solo reproduce la nota media con el recuento y enlaza el listado.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica textos de reseñas, distrito, web, descripción ni precios, así que ninguna
 * respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Sorigarden?',
		answer:
			'En la Calle Virgen de Fátima, 1d, con código postal 41330, en Los Rosales (Sevilla). La ficha no publica distrito. Publica el plus code H7Q9+XV Los Rosales y las coordenadas 37.5898899, -5.73036.',
	},
	{
		question: '¿Cuál es el horario de Floristería Sorigarden?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 14:00 y tarde de 17:30 a 20:00. El sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su categoría, su horario, su valoración y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 652 56 51 20. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Virgen de Fátima, 1d, en Los Rosales, y las coordenadas 37.5898899, -5.73036. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code H7Q9+XV Los Rosales.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no reproduce ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 1 reseña. Su vista previa no incluía el texto, así que esta web no reproduce ningún extracto: el enlace de la valoración abre el listado en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la valoración y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Virgen de Fátima, 1d de Los Rosales (Sevilla). Un 5 sobre 5 en Google Maps.',
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
	/* Sin `amenityFeature`: la ficha no publica datos de accesibilidad. */
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
