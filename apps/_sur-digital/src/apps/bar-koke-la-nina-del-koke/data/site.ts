/**
 * Datos de Bar Koke La Niña del Koke (C. Mar, 17 · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios ni un sistema de reservas, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-koke-la-nina-del-koke',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Koke La Niña del Koke',
	shortName: 'Bar Koke',
	/** Categorías que publica Google, en su orden. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Bar de tapas'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Mar, 17',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 674 52 03 71',
	latitude: 36.7814203,
	longitude: -6.3521519,
	/** Plus code que publica la ficha. */
	plusCode: 'QJJX+H4 Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 998 reseñas). */
	rating: 4.2,
	reviewCount: 998,
} as const;

/**
 * Descripción que publica el propio titular en la ficha de Google Maps, transcrita literalmente.
 *
 * El original dice «Restaurantes tranquilo y mucha calidad es su género», con esa concordancia.
 * Se copia tal cual, sin corregirla, y así se advierte en la portada.
 */
export const descripcionTitular = 'Restaurantes tranquilo y mucha calidad es su género';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Koke+La+Ni%C3%B1a+del+Koke/@36.7814203,-6.3521519,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde2650ac106d:0x83748cdd65340be9!8m2!3d36.7814203!4d-6.3521519!16s%2Fg%2F11cn3hg46q?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJbRCsUCbeDQ0R6Qs0Zd2MdIM&hl=es';

export const phoneHref = 'tel:+34674520371';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de lunes a sábado de 9:00 a 24:00 y el domingo de 11:00 a 24:00. No hay ningún día cerrado.
 * En los datos estructurados el cierre a las 24:00 se escribe como 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		short: 'L',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Monday',
		closed: false,
	},
	{
		day: 'Martes',
		short: 'M',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
		closed: false,
	},
	{
		day: 'Miércoles',
		short: 'X',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
		closed: false,
	},
	{
		day: 'Jueves',
		short: 'J',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
		closed: false,
	},
	{
		day: 'Viernes',
		short: 'V',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Friday',
		closed: false,
	},
	{
		day: 'Sábado',
		short: 'S',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
		closed: false,
	},
	{
		day: 'Domingo',
		short: 'D',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
		closed: false,
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a sábado, 9:00–24:00 · domingo, 11:00–24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas: acceso, aseo y asientos adaptados disponibles, y aparcamiento adaptado
 * no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (el «pesadito» de una de ellas).
 * Dos son de 5 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Buen pescado frito, buenas tapas de marisco, manzanillas y cerveza de la tierra.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenos precios y buena cocina con guisos y pesadito frito.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Estupendas tapas, cervezas y vinos a precios económicos, servicio excelente',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Lo que nombran las tres reseñas destacadas, en formato de tique de bar.
 *
 * No es la carta: la ficha no publica carta ni precios. Cada línea sale de una reseña y así se
 * indica en la columna de la derecha.
 */
export const tique = [
	{ nombre: 'Pescado frito', nota: 'Reseña de 4 sobre 5' },
	{ nombre: 'Tapas de marisco', nota: 'Reseña de 4 sobre 5' },
	{ nombre: 'Guisos', nota: 'Reseña de 5 sobre 5' },
	{ nombre: 'Pescaíto frito', nota: '«pesadito frito», en la reseña' },
	{ nombre: 'Manzanilla', nota: 'Reseña de 4 sobre 5' },
	{ nombre: 'Cerveza de la tierra', nota: 'Reseña de 4 sobre 5' },
	{ nombre: 'Vinos', nota: 'Reseña de 5 sobre 5' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio, reserva ni web propia: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Koke La Niña del Koke?',
		answer:
			'En la calle Mar, 17, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QJJX+H4 Sanlúcar de Barrameda y las coordenadas 36.7814203, -6.3521519.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'De lunes a sábado abre de 9:00 a 24:00, y el domingo de 11:00 a 24:00. No figura ningún día cerrado en la ficha. Es el horario consultado el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. En las reseñas destacadas se citan pescado frito, tapas de marisco, guisos, pescaíto frito, manzanilla, cerveza de la tierra y vinos. Es lo que nombran los clientes, no una lista oficial del local.',
	},
	{
		question: '¿Es caro?',
		answer:
			'La ficha no publica precios ni un rango de precio. Dos de las reseñas destacadas hablan de «buenos precios» y de «precios económicos», pero son opiniones de clientes y no una tarifa. Para saber cuánto cuesta hoy hay que llamar al 674 52 03 71.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado. Son las cuatro entradas que publica.',
	},
	{
		question: '¿Hay aparcamiento?',
		answer:
			'La ficha solo publica el dato del aparcamiento adaptado, que marca como no disponible. No indica si hay aparcamiento propio. El bar está en la calle Mar, en el centro de Sanlúcar.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 674 52 03 71.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio bar publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada. La ha creado Sur Digital.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'Restaurant'],
	'@id': `${site.siteUrl}/#bar`,
	name: business.name,
	description: descripcionTitular,
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
	servesCuisine: ['Tapas', 'Pescado frito', 'Cocina española'],
	/* Sin `priceRange`: la ficha no publica precios. */
	/* Sin `acceptsReservations`: la ficha no publica si se admiten reservas. */
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
			/* El cierre a las 24:00 se expresa como 00:00 en schema.org. */
			opens: shift.open,
			closes: shift.close === '24:00' ? '00:00' : shift.close,
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
	url: 'https://www.sur-digital.com/',
} as const;
