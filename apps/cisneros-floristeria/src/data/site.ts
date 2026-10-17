/**
 * Datos de Cisneros Floristería
 * (Calle Charles Dickens, 16 · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, web, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal
 * y accesibilidad.
 *
 * El endpoint de vista previa no incluía ningún extracto literal de reseñas (respuestas estables de
 * ~28 KB sin bloque de reseñas), así que `reviews` queda vacío y la portada solo enseña la tarjeta
 * con la valoración, como en otras webs del repositorio. La ficha no publica precios, así que no se
 * reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://cisneros-floristeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Cisneros Floristería',
	shortName: 'Cisneros',
	/** Categorías que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería', 'Tienda de flores secas', 'Servicio de plantas para interior'],
	/**
	 * Dirección publicada en la ficha: «Cisneros Floristería, C. Charles Dickens, 16,
	 * Teatinos-Universidad, 29010 Málaga». Aquí se desarrolla «C.» a «Calle», como en el resto del
	 * repositorio. «Teatinos-Universidad» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Charles Dickens, 16',
	district: 'Teatinos-Universidad',
	postalCode: '29010',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 638 43 71 91',
	/** Web propia publicada en la ficha. */
	website: 'https://cisnerosfloresyeventos.wordpress.com/',
	latitude: 36.7234891,
	longitude: -4.4652276,
	/** Plus code que publica la ficha (corto; el completo es 8C9PPGFM+9W). */
	plusCode: 'PGFM+9W Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 127 reseñas). */
	rating: 4.9,
	reviewCount: 127,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'¡Hemos venido a ponerle color a tu día a día!',
	'Flores frescas y preservadas para decorar tu casa, regalar o para momentos especiales y eventos.',
	'Danos una idea y te ayudamos a hacerla realidad.',
	'Además plantas de temporada en nuestra tienda y por encargo.',
	'Hacemos entregas a domicilio en Málaga provincia.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Cisneros+Florister%C3%ADa/@36.7234891,-4.4652276,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7058dbb1fab:0x562995f49b82c604!8m2!3d36.7234891!4d-4.4652276!16s%2Fg%2F11n86cqxqs?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJqx-7jQX3cg0RBMaCm_SVKVY&hl=es';

export const phoneHref = 'tel:+34638437191';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. De martes a
 * viernes abre dos turnos (mañana de 9:30 a 13:00 y tarde de 17:00 a 20:00); el lunes, el sábado y
 * el domingo cierra.
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
		service: '9:30 – 13:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '13:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 13:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '13:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 13:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '13:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 13:00 · 17:00 – 20:00',
		shifts: [
			{ open: '9:30', close: '13:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Cerrado',
		shifts: [],
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
	'Dos turnos de martes a viernes (9:30–13:00 y 17:00–20:00); lunes, sábado y domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de reseñas destacadas.
 *
 * El endpoint de vista previa no devolvía ningún extracto (respuestas estables sin bloque de
 * reseñas), así que queda vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Cisneros Floristería?',
		answer:
			'En la Calle Charles Dickens, 16, con código postal 29010, en Málaga, en Teatinos-Universidad. La ficha publica el plus code PGFM+9W Málaga y las coordenadas 36.7234891, -4.4652276.',
	},
	{
		question: '¿Cuál es el horario de Cisneros Floristería?',
		answer:
			'La ficha publica dos turnos de martes a viernes: mañana de 9:30 a 13:00 y tarde de 17:00 a 20:00. El lunes, el sábado y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la floristería?',
		answer:
			'Google la clasifica como floristería, tienda de flores secas y servicio de plantas para interior. Su propia descripción en la ficha anuncia flores frescas y preservadas para decorar, regalar o eventos, además de plantas de temporada en tienda y por encargo.',
	},
	{
		question: '¿Hacen entregas a domicilio?',
		answer:
			'Sí, según su propia descripción en la ficha: hacen entregas a domicilio en Málaga provincia. Para pedirlo, lo más rápido es llamar al 638 43 71 91.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 638 43 71 91. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tienen web propia?',
		answer:
			'Sí: la ficha publica https://cisnerosfloresyeventos.wordpress.com/ como web del local, con el mismo nombre en el dominio.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Charles Dickens, 16, en Teatinos-Universidad de Málaga, y las coordenadas 36.7234891, -4.4652276. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PGFM+9W Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 127 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada: para comprar, su web es cisnerosfloresyeventos.wordpress.com.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Charles Dickens, 16 de Málaga, en Teatinos-Universidad. Flores frescas y preservadas, plantas de temporada y entregas a domicilio en Málaga provincia.',
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
	sameAs: [business.website],
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
