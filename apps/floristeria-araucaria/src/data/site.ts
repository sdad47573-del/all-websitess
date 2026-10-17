/**
 * Datos de Floristería Araucaria (Av. del Pintor Joaquín Sorolla, 10 · 29016 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, web propia, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal,
 * accesibilidad y las reseñas destacadas.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-araucaria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'Floristería Araucaria',
	shortName: 'Araucaria',
	/** Categorías que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería', 'Entrega de flores'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. del Pintor Joaquín Sorolla, 10»:
	 * aquí se desarrolla a «Avenida del Pintor Joaquín Sorolla, 10», como en el resto del
	 * repositorio. «Málaga-Este» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Avenida del Pintor Joaquín Sorolla, 10',
	district: 'Málaga-Este',
	postalCode: '29016',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 952 22 55 54',
	/** Web propia publicada en la ficha. */
	website: 'https://floristeriaaraucaria.com/',
	latitude: 36.7232994,
	longitude: -4.396258,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPJF3+8F). */
	plusCode: 'PJF3+8F Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 138 reseñas). */
	rating: 4.8,
	reviewCount: 138,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente (una línea por servicio) y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Envío de flores en Málaga en el día.',
	'Ramos de flores.',
	'Planta natural.',
	'Centros de flores.',
	'Flor y planta artificial.',
	'Envío a domicilio en Málaga.',
	'Flor preservada.',
	'Bodas y eventos.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Araucaria/@36.7232994,-4.396258,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7dfe103feab:0xe36c548ac88b5afa!8m2!3d36.7232994!4d-4.396258!16s%2Fg%2F11xblvdmt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJq_4D4d_3cg0R-lqLyIpUbOM&hl=es';

export const phoneHref = 'tel:+34952225554';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. De martes a
 * viernes abre de 9:30 a 17:00, lunes y sábado solo por la mañana (9:30 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 14:00',
		shifts: [{ open: '09:30', close: '14:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 17:00',
		shifts: [{ open: '09:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 17:00',
		shifts: [{ open: '09:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 17:00',
		shifts: [{ open: '09:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 17:00',
		shifts: [{ open: '09:30', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 14:00',
		shifts: [{ open: '09:30', close: '14:00' }],
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
	'De martes a viernes de 9:30 a 17:00; lunes y sábado de 9:30 a 14:00; domingo cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible; el aseo adaptado figura como no
 * disponible («Sin aseo adaptado para discapacitados»).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Profesionalidad, buen trato, buen género y buenos precios.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Sin duda, volveremos a contar con ella y la recomendamos totalmente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Artesania pura, tienen un buen gusto sinigual y el servicio fue muy rapido.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Araucaria?',
		answer:
			'En la Avenida del Pintor Joaquín Sorolla, 10, con código postal 29016, en Málaga, en Málaga-Este. La ficha publica el plus code PJF3+8F Málaga y las coordenadas 36.7232994, -4.396258.',
	},
	{
		question: '¿Cuál es el horario de Floristería Araucaria?',
		answer:
			'La ficha publica de martes a viernes de 9:30 a 17:00, lunes y sábado solo por la mañana, de 9:30 a 14:00, y domingo cerrado. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la floristería?',
		answer:
			'Google la clasifica como floristería y como entrega de flores. Su propia descripción en la ficha anuncia envío de flores en Málaga en el día, ramos, planta natural, centros de flores, flor y planta artificial, envío a domicilio, flor preservada y bodas y eventos.',
	},
	{
		question: '¿Hacen envíos a domicilio?',
		answer:
			'Sí, según su propia descripción en la ficha: anuncia envío de flores en Málaga en el día y envío a domicilio en Málaga. Para pedirlo, lo más rápido es llamar al 952 22 55 54 o entrar en su web, floristeriaaraucaria.com.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El fijo que publica la ficha es el 952 22 55 54. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tiene web propia?',
		answer:
			'Sí: la ficha publica floristeriaaraucaria.com. Los botones de esta web enlazan también a su web para ver el catálogo y pedir online.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida del Pintor Joaquín Sorolla, 10, en Málaga-Este de Málaga, y las coordenadas 36.7232994, -4.396258. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PJF3+8F Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica acceso para sillas de ruedas como disponible y aseo adaptado como no disponible. No publica ningún otro dato de accesibilidad.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 138 reseñas. Google destaca tres extractos de 5 sobre 5, que aquí se reproducen tal cual: hablan de profesionalidad y buen trato, de que volverán a contar con ella y de artesanía y rapidez en el servicio.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada: para comprar, su web es floristeriaaraucaria.com.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida del Pintor Joaquín Sorolla, 10 de Málaga, en Málaga-Este. Envío de flores en Málaga en el día y envío a domicilio.',
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
	sameAs: [business.website],
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
