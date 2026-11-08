/**
 * Datos de ALEXFLOR tu florista personal | floristería en Málaga
 * (Calle del Ciprés, 2 · 29010 Málaga, Cruz de Humilladero).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y accesibilidad.
 *
 * La vista previa no incluía los textos de las reseñas, así que esta web no reproduce ningún
 * extracto: solo la nota media con el recuento y el enlace al listado. La ficha no publica
 * distrito, web propia ni descripción del titular, así que no se reproduce ninguno de ellos.
 * Las descripciones con títulos que trae la respuesta pertenecen a las fotos de la galería, no al
 * titular, así que tampoco se reproducen. La ficha no publica precios, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://alexflor.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'ALEXFLOR tu florista personal | floristería en Málaga',
	shortName: 'ALEXFLOR',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «ALEXFLOR tu florista personal | floristería en Málaga,
	 * C. del Ciprés, 2, Cruz de Humilladero, 29010 Málaga». La ficha no publica distrito.
	 */
	streetAddress: 'Calle del Ciprés, 2',
	district: '',
	postalCode: '29010',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 638 98 91 59',
	latitude: 36.7227483,
	longitude: -4.4480348,
	/** Plus code que publica la ficha (corto; el completo es 8CGRPHF2+3Q). */
	plusCode: 'PHF2+3Q Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 33 reseñas). */
	rating: 4.8,
	reviewCount: 33,
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
	'https://www.google.com/maps/place/ALEXFLOR+tu+florista+personal+%7C+florister%C3%ADa+en+M%C3%A1laga/@36.7227483,-4.4480348,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ff9273671f:0xff5037b731eabeaa!8m2!3d36.7227483!4d-4.4480348!16s%2Fg%2F11yppv4cvn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH2dzkv_3cg0Rqr7qMbc3UP8&hl=es';

export const phoneHref = 'tel:+34638989159';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Lunes, martes, jueves y viernes abre de 10:00 a 20:00; el miércoles abre de 12:00 a 20:00;
 * el sábado abre solo por la mañana (10:00 a 15:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 20:00',
		shifts: [{ open: '12:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 15:00',
		shifts: [{ open: '10:00', close: '15:00' }],
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
	'Lunes, martes, jueves y viernes de 10:00 a 20:00; miércoles de 12:00 a 20:00; sábado de 10:00 a 15:00; domingo cerrado';

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
 * La vista previa no incluía los textos, así que se deja vacía y la web lo declara: solo
 * reproduce la nota media con el recuento y enlaza el listado completo.
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
		question: '¿Dónde está ALEXFLOR?',
		answer:
			'En la Calle del Ciprés, 2, con código postal 29010, en Málaga (zona Cruz de Humilladero, junto a Teatinos). La ficha no publica distrito. Publica el plus code PHF2+3Q Málaga y las coordenadas 36.7227483, -4.4480348.',
	},
	{
		question: '¿Cuál es el horario de ALEXFLOR?',
		answer:
			'La ficha publica de lunes, martes, jueves y viernes de 10:00 a 20:00; el miércoles abre de 12:00 a 20:00 y el sábado solo por la mañana, de 10:00 a 15:00. El domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su nombre la presenta como tu florista personal en Málaga. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su categoría, su horario, su valoración y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 638 98 91 59. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle del Ciprés, 2, en Málaga, y las coordenadas 36.7227483, -4.4480348. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PHF2+3Q Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 33 reseñas. Su vista previa no incluía los textos, así que esta web no reproduce ningún extracto: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle del Ciprés, 2 de Málaga. Tu florista personal, con un 4,8 sobre 5 en Google Maps.',
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
