/**
 * Datos de Taberna El Pili (Cjón. de Guía, 16 · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios de
 * accesibilidad y las reseñas destacadas.
 *
 * Esta ficha es más corta que otras: no publica descripción del titular, ni carta, ni precios, ni
 * web propia, ni si se admiten reservas. Nada de eso se rellena aquí.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/taberna-el-pili',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taberna El Pili',
	shortName: 'El Pili',
	/** Categoría que publica Google. La ficha no añade ninguna otra. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Cjón. de Guía, 16',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 695 41 18 63',
	latitude: 36.7854745,
	longitude: -6.3454933,
	/** Plus code que publica la ficha. */
	plusCode: 'QMP3+5R Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 57 reseñas). */
	rating: 4.2,
	reviewCount: 57,
} as const;

/**
 * Aviso sobre la descripción del titular.
 *
 * La ficha de Taberna El Pili no publica descripción del titular. En lugar de inventar una, la
 * web cuenta lo que sí publica: categoría, valoración, fotos, horario, teléfono y accesibilidad.
 */
export const sinDescripcionTitular = true;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+El+Pili/@36.7854745,-6.3454933,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de09fdc05a891:0xcba651c6c22ef390!8m2!3d36.7854745!4d-6.3454933!16s%2Fg%2F11g9m_vjrx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJkagF3J_gDQ0RkPMuwsZRpss&hl=es';

export const phoneHref = 'tel:+34695411863';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Los siete días figuran como «Abierto 24 horas». No hay turnos ni días cerrados que reproducir,
 * así que los datos estructurados declaran cada día de 00:00 a 23:59.
 */
export const hours = [
	{ day: 'Lunes', short: 'L', service: '24 h', dayOfWeek: 'Monday', closed: false },
	{ day: 'Martes', short: 'M', service: '24 h', dayOfWeek: 'Tuesday', closed: false },
	{ day: 'Miércoles', short: 'X', service: '24 h', dayOfWeek: 'Wednesday', closed: false },
	{ day: 'Jueves', short: 'J', service: '24 h', dayOfWeek: 'Thursday', closed: false },
	{ day: 'Viernes', short: 'V', service: '24 h', dayOfWeek: 'Friday', closed: false },
	{ day: 'Sábado', short: 'S', service: '24 h', dayOfWeek: 'Saturday', closed: false },
	{ day: 'Domingo', short: 'D', service: '24 h', dayOfWeek: 'Sunday', closed: false },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto 24 horas, los siete días de la semana';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica dos entradas: el acceso para sillas de ruedas está disponible y el aparcamiento
 * adaptado no. El aseo y los asientos no aparecen, así que no se añaden.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (el punto de más en «Local.tipico»,
 * los espacios antes de las comas y los acentos ausentes). Dos son de 3 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Nos puso por cortesía de la casa 3 trozos de cazón frito exquisitos.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenísima manzanilla La E , fresquita .',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Local.tipico 100/100.excelente trato y comida riquísima.muy recomendable',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Lo que nombran las tres reseñas destacadas.
 *
 * No es la carta: la ficha no publica carta ni precios. Cada entrada dice de qué reseña sale.
 */
export const menciones = [
	{
		nombre: 'Cazón frito',
		detalle: '«3 trozos de cazón frito exquisitos», en una reseña de 3 sobre 5.',
	},
	{
		nombre: 'Manzanilla La E',
		detalle: '«Buenísima manzanilla La E», en una reseña de 3 sobre 5.',
	},
	{ nombre: 'Local típico', detalle: '«Local.tipico 100/100», en la reseña de 4 sobre 5.' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio, reserva ni web propia: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Taberna El Pili?',
		answer:
			'En el Callejón de Guía, 16, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QMP3+5R Sanlúcar de Barrameda y las coordenadas 36.7854745, -6.3454933.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'La ficha marca «Abierto 24 horas» los siete días de la semana, de lunes a domingo. Es el horario consultado el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Se puede comer a cualquier hora?',
		answer:
			'La ficha solo publica el horario de apertura (24 horas) y no detalla a qué horas se sirve cocina. Para saber si hay comida a una hora concreta, lo mejor es llamar al 695 41 18 63.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. En las reseñas destacadas se citan un cazón frito de cortesía y una manzanilla La E; son menciones de clientes, no una lista oficial del local.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos datos: el acceso para sillas de ruedas está disponible y el aparcamiento adaptado no. No publica el aseo ni los asientos, así que esta web no afirma nada sobre ellos.',
	},
	{
		question: '¿Tiene aparcamiento?',
		answer:
			'La ficha no publica aparcamiento propio ni un aparcamiento adaptado: de hecho, marca el aparcamiento accesible como no disponible. Está en un callejón del centro, así que lo habitual es aparcar en la zona.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 695 41 18 63.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada. La ha creado Sur Digital.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#taberna`,
	name: business.name,
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
	hasGoogleReviews: reviewsUrl,
	/* Sin `description`: la ficha no publica descripción del titular. */
	/* Sin `servesCuisine`: la ficha solo publica la categoría «Restaurante». */
	/* Sin `priceRange`: la ficha no publica precios. */
	/* Sin `acceptsReservations`: la ficha no publica si se admiten reservas. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.map((item) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: item.dayOfWeek,
		opens: '00:00',
		closes: '23:59',
	})),
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
 * de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};

/** Crédito del estudio que ha construido la web, tal como se muestra en el pie. */
export const credito = {
	nombre: 'Sur Digital',
	url: 'https://sur-digital.vercel.app/',
} as const;
