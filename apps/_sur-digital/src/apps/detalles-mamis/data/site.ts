/**
 * Datos de DETALLES MAMIS
 * (Avenida de Cádiz, 56 · 14009 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y accesibilidad.
 *
 * El nombre se reproduce tal como lo publica la ficha, en mayúsculas. La ficha no publica
 * descripción del titular ni web propia, así que no se reproduce ninguno de ellos. El endpoint de
 * vista previa no incluía ningún extracto literal de reseñas (respuestas estables de ~27 KB sin
 * bloque de reseñas), así que `reviews` queda vacío y la portada solo enseña la tarjeta con la
 * valoración, como en otras webs del repositorio. Tampoco publica precios.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/detalles-mamis',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, en mayúsculas. */
	name: 'DETALLES MAMIS',
	shortName: 'Mamis',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «DETALLES MAMIS, Av. de Cádiz, 56, Sur, 14009 Córdoba».
	 * Aquí se desarrolla «Av.» a «Avenida», como en el resto del repositorio. «Sur» es el distrito
	 * (la ficha alterna «Sur» y «Distrito Sur») y se conserva aparte.
	 */
	streetAddress: 'Avenida de Cádiz, 56',
	district: 'Sur',
	postalCode: '14009',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 662 14 43 04',
	latitude: 37.8707922,
	longitude: -4.778748,
	/** Plus code que publica la ficha (corto; el completo es 8C8WV6CC+8G). */
	plusCode: 'V6CC+8G Córdoba',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 21 reseñas). */
	rating: 4.9,
	reviewCount: 21,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/DETALLES+MAMIS/@37.8707922,-4.778748,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d208ff0ba9eb1:0x33366974beee41fb!8m2!3d37.8707922!4d-4.778748!16s%2Fg%2F1hhwh83n1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJsZ668I8gbQ0R-0HuvnRpNjM&hl=es';

export const phoneHref = 'tel:+34662144304';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado
 * abre solo por la mañana (9:30 a 13:00) y el domingo también por la mañana (10:00 a 13:00); de
 * lunes a jueves abre dos turnos (mañana de 9:30 a 13:30 y tarde de 17:30 a 19:30); el viernes
 * abre solo por la mañana (9:30 a 13:30).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 13:30 · 17:30 – 19:30',
		shifts: [
			{ open: '9:30', close: '13:30' },
			{ open: '17:30', close: '19:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 13:30 · 17:30 – 19:30',
		shifts: [
			{ open: '9:30', close: '13:30' },
			{ open: '17:30', close: '19:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 13:30 · 17:30 – 19:30',
		shifts: [
			{ open: '9:30', close: '13:30' },
			{ open: '17:30', close: '19:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 13:30 · 17:30 – 19:30',
		shifts: [
			{ open: '9:30', close: '13:30' },
			{ open: '17:30', close: '19:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 13:30',
		shifts: [{ open: '9:30', close: '13:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 13:00',
		shifts: [{ open: '9:30', close: '13:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 13:00',
		shifts: [{ open: '10:00', close: '13:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a jueves (9:30–13:30 y 17:30–19:30); viernes y sábado solo por la mañana; domingo de 10:00 a 13:00';

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
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Detalles Mamis?',
		answer:
			'En la Avenida de Cádiz, 56, con código postal 14009, en Córdoba, en el distrito Sur. La ficha publica el plus code V6CC+8G Córdoba y las coordenadas 37.8707922, -4.778748.',
	},
	{
		question: '¿Cuál es el horario de Detalles Mamis?',
		answer:
			'La ficha publica dos turnos de lunes a jueves: mañana de 9:30 a 13:30 y tarde de 17:30 a 19:30. El viernes abre solo por la mañana, de 9:30 a 13:30, igual que el sábado (9:30 a 13:00), y el domingo abre de 10:00 a 13:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo sus datos, su horario, su valoración y sus fotografías.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 662 14 43 04. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Cádiz, 56, en el distrito Sur de Córdoba, y las coordenadas 37.8707922, -4.778748. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6CC+8G Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 21 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida de Cádiz, 56 de Córdoba, en el distrito Sur.',
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
