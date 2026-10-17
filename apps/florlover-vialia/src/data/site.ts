/**
 * Datos de Florlover Vialia (Calle Explanada de la Estación, 1 · 29002 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, web propia, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal,
 * accesibilidad y las reseñas destacadas.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://florlover-vialia.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	name: 'Florlover Vialia',
	shortName: 'Florlover',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Explanada de la Estación» y la
	 * acompaña de «1, Estación Vialia Maria Zambrano»: aquí se desarrolla a «Calle Explanada de
	 * la Estación, 1», como en el resto del repositorio. «Distrito Centro» es el distrito y se
	 * conserva aparte. La máquina está en el hall de entrada del centro comercial, en la planta 0.
	 */
	streetAddress: 'Calle Explanada de la Estación, 1',
	lugar: 'Estación Vialia María Zambrano, planta 0',
	district: 'Distrito Centro',
	postalCode: '29002',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 614 30 74 30',
	/** Web propia publicada en la ficha. */
	website: 'https://www.florlover.es/',
	latitude: 36.7121164,
	longitude: -4.4325451,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPH68+RX). */
	plusCode: 'PH68+RX Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 19 reseñas). */
	rating: 4.7,
	reviewCount: 19,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Máquina expendedora de ramos de flores. La primera de Andalucía.',
	'Ramos y centros frescos con las mejores flores del mercado.',
	'Listo para llevar, sin esperas, sin colas.',
	'Todos vienen con una base acuática para mantenerse perfectos.',
	'Nos encontramos en el hall de entrada del Centro Comercial Vialia en la Estación María Zambrano.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florlover+Vialia/@36.7121164,-4.4325451,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b5a2b88d77:0x692470c8f93b0254!8m2!3d36.7121164!4d-4.4325451!16s%2Fg%2F11mz0rwnzy?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJd424orX3cg0RVAI7-chwJGk&hl=es';

export const phoneHref = 'tel:+34614307430';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. La ficha
 * publica «Abierto 24 horas» los siete días: es una máquina expendedora en el hall de la estación.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto 24 horas, todos los días';

/**
 * Accesibilidad que publica la ficha.
 *
 * Las cuatro entradas figuran como disponibles: acceso, aparcamiento adaptado, aseo adaptado y
 * asientos adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Una floristeria abierta las 24h con ramos preciosos, todo un acierto.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Además vienen con unas cajas que contienen agua, una pasada.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'No me esperaba una maquina así en la Estación pero me “salvó” la situación.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 */
export const faqs = [
	{
		question: '¿Dónde está Florlover Vialia?',
		answer:
			'En la Calle Explanada de la Estación, 1, en Distrito Centro, con código postal 29002, en Málaga: es la máquina expendedora del hall de entrada del Centro Comercial Vialia, en la Estación María Zambrano (planta 0). La ficha publica el plus code PH68+RX Málaga y las coordenadas 36.7121164, -4.4325451.',
	},
	{
		question: '¿Cuál es el horario de Florlover Vialia?',
		answer:
			'La ficha publica «Abierto 24 horas» los siete días de la semana: al ser una máquina expendedora en el hall de la estación, no cierra. Es el horario de la ficha consultada el 17 de octubre de 2026.',
	},
	{
		question: '¿Qué es Florlover Vialia?',
		answer:
			'Según su propia descripción en la ficha, es una máquina expendedora de ramos de flores, la primera de Andalucía: ramos y centros frescos listos para llevar, sin esperas ni colas, todos con una base acuática para mantenerse perfectos. Google la clasifica como floristería.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 614 30 74 30. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tiene web propia?',
		answer:
			'Sí: la ficha publica florlover.es. Los botones de esta web enlazan también a su web para ver el catálogo.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Explanada de la Estación, 1, en Distrito Centro de Málaga (hall del Centro Comercial Vialia, Estación María Zambrano), y las coordenadas 36.7121164, -4.4325451. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH68+RX Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: acceso, aparcamiento adaptado, aseo adaptado y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 19 reseñas. Google destaca tres extractos de 5 sobre 5, que aquí se reproducen tal cual: hablan de ramos preciosos abiertos las 24h, de las cajas con agua y de que la máquina “salvó” la situación en la estación.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada: su web es florlover.es.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Máquina expendedora de ramos de flores en el Centro Comercial Vialia de Málaga (Estación María Zambrano). Abierta 24 horas.',
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
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '00:00',
		closes: '23:59',
	},
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
