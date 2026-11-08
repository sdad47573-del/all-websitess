/**
 * Datos de Floristería Ana María
 * (Plaza de España, 2, local 4c · 28911 Leganés, Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas y 2 extractos destacados, coordenadas,
 * plus code y horario semanal.
 *
 * La ficha no publica distrito, accesibilidad ni web propia, así que no se reproduce nada de eso.
 * La descripción del titular y los 2 extractos de reseñas (ambos con nota 5 sobre 5) se reproducen
 * literalmente, con sus erratas, y se citan como tales en la web. La ficha no publica precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://ana-maria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Ana María',
	shortName: 'Ana María',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Ana María, Pl. de España, 2, Loc 4c,
	 * 28911 Leganés, Madrid». La ficha no publica distrito.
	 */
	streetAddress: 'Plaza de España, 2, local 4c',
	district: '',
	postalCode: '28911',
	city: 'Leganés',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 616 81 65 52',
	latitude: 40.3281891,
	longitude: -3.7657649,
	/** Plus code que publica la ficha (corto; el completo es 8CG786HM+7M). */
	plusCode: '86HM+7M Leganés',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 104 reseñas). */
	rating: 4.9,
	reviewCount: 104,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Floristería con flores naturales y artificiales, macetas. Hacemos: Arreglos de ramos, Regalos, Flores cementerio, ramos de boda, flores para celebraciones, y mucho más envíos gratis también tenemos, gracias',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Ana+Mar%C3%ADa/@40.3281891,-3.7657649,17z/data=!3m1!4b1!4m6!3m5!1s0xd418b81ffb5534d:0x26343330aee6a0b5!8m2!3d40.3281891!4d-3.7657649!16s%2Fg%2F11why6vhkf?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJTVO1_4GLQQ0RtaDmrjAzNCY&hl=es';

export const phoneHref = 'tel:+34616816552';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Los lunes, miércoles y viernes abre de 10:00 a 24:00. Los martes, jueves y sábados publica dos
 * tramos (0:00–8:30, continuación de la noche anterior, y 10:00–20:30). El domingo abre
 * de 10:30 a 15:00. Se reproduce tal cual lo publica la ficha.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '0:00 – 8:30 · 10:00 – 20:30',
		shifts: [
			{ open: '00:00', close: '08:30' },
			{ open: '10:00', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '0:00 – 8:30 · 10:00 – 20:30',
		shifts: [
			{ open: '00:00', close: '08:30' },
			{ open: '10:00', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '0:00 – 8:30 · 10:00 – 20:30',
		shifts: [
			{ open: '00:00', close: '08:30' },
			{ open: '10:00', close: '20:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:30 – 15:00',
		shifts: [{ open: '10:30', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun, mié y vie 10:00–24:00; mar, jue y sáb 0:00–8:30 y 10:00–20:30; dom 10:30–15:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que la lista viene vacía y la web lo dice claramente.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa, ambos con nota 5 sobre 5; se reproducen tal
 * cual y se citan como tales en la web. El endpoint no trae el nombre del autor, así que se
 * publican sin firma.
 */
export const reviews = [
	{
		text: 'Yo compré un regalo para una amiga y quedó encantada.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena experiencia y está abierta los domingos también',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica distrito, accesibilidad, web ni precios, así que ninguna respuesta los
 * menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Ana María?',
		answer:
			'En la Plaza de España, 2, local 4c, con código postal 28911, en Leganés (Madrid). Publica el plus code 86HM+7M Leganés y las coordenadas 40.3281891, -3.7657649.',
	},
	{
		question: '¿Cuál es el horario de Floristería Ana María?',
		answer:
			'La ficha publica que los lunes, miércoles y viernes abre de 10:00 a 24:00; los martes, jueves y sábados de 0:00 a 8:30 y de 10:00 a 20:30; y el domingo de 10:30 a 15:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que tienen flores naturales y artificiales y macetas, y que hacen arreglos de ramos, regalos, flores para cementerio, ramos de boda y flores para celebraciones, con envíos gratis.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 616 81 65 52. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaza de España, 2, local 4c, en Leganés, y las coordenadas 40.3281891, -3.7657649. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 86HM+7M Leganés.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 616 81 65 52 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 104 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un regalo que encantó y de muy buena experiencia con apertura los domingos. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Plaza de España de Leganés. Flores naturales y artificiales, ramos de boda y flores para celebraciones.',
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
