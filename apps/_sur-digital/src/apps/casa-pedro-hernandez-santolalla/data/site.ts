/**
 * Datos de Bar Casa Pedro Hernández Santolalla (Calle Bolsa, 65 · C. Mar, 28 ·
 * 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios de
 * accesibilidad, el distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta ni precios, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/casa-pedro-hernandez-santolalla',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Casa Pedro Hernández Santolalla',
	shortName: 'Casa Pedro',
	/** Categorías que publica Google, en su orden: taberna y bar de tapas. */
	category: 'Taberna',
	categories: ['Taberna', 'Bar de tapas'],
	/**
	 * Dirección publicada en la ficha. Google da dos calles para el mismo local, así que se
	 * recogen las dos tal cual, sin interpretar cuál es la esquina.
	 */
	streetAddress: 'Calle Bolsa, 65',
	secondaryAddress: 'C. Mar, 28',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 956 36 05 71',
	latitude: 36.7813228,
	longitude: -6.3518884,
	/** Plus code que publica la ficha. */
	plusCode: 'QJJX+G6 Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 843 reseñas). */
	rating: 4.4,
	reviewCount: 843,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Se recoge como dato de la ficha, sin ampliarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Casa+Pedro+Hern%C3%A1ndez+Santolalla/@36.7813228,-6.3518884,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde26f7e39d6d:0x867628a7b0b51adf!8m2!3d36.7813228!4d-6.3518884!16s%2Fg%2F11c0w03t8_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJbZ3j9ybeDQ0R3xq1sKcodoY&hl=es';

export const phoneHref = 'tel:+34956360571';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre a las 8:30 y parte el día en dos turnos (8:30–16:00 y 19:00–24:00). El
 * sábado empieza a las 10:00 y cena desde las 20:00. El domingo solo sirve el mediodía, de 11:00 a
 * 16:00, y por la noche cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 16:00',
		shifts: [{ open: '11:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Desayuno y mediodía todos los días · cena de lunes a sábado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo publica dos entradas: los asientos adaptados figuran como disponibles y el aparcamiento
 * adaptado como no disponible. El acceso y el aseo no aparecen en la ficha, así que no se añaden.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (los puntos suspensivos de la
 * primera). Dos son de 4 y 5 sobre 5 y una de 1 sobre 5.
 */
export const reviews = [
	{
		text: 'Se tapea muy bien, quesos, chorizo picante .... un sitio agradable.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente lugar para tapear, buena atención y bueno todo, para repetir.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos 4 desayunos con salmorejo y jamón.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Productos que aparecen nombrados en las reseñas destacadas.
 *
 * No es la carta del local: son los nombres que citan los clientes (quesos, chorizo picante,
 * salmorejo y jamón) más el servicio de desayuno. La ficha no publica carta ni precios.
 */
export const mencionados = [
	{
		nombre: 'Quesos',
		nota: 'citado en la reseña de 4 sobre 5, junto al chorizo picante',
	},
	{ nombre: 'Chorizo picante', nota: 'citado en la misma reseña que los quesos' },
	{ nombre: 'Salmorejo', nota: 'mencionado en el desayuno de la reseña de 1 sobre 5' },
	{ nombre: 'Jamón', nota: 'mencionado en el desayuno de la reseña de 1 sobre 5' },
	{ nombre: 'Desayunos', nota: 'servicio citado en una reseña destacada' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * Lo de los platos se atribuye a las reseñas y no a una carta, porque la ficha no publica carta
 * ni precios.
 */
export const faqs = [
	{
		question: '¿Dónde está Casa Pedro Hernández Santolalla?',
		answer:
			'En la calle Bolsa, 65, con el número 28 de la calle Mar, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QJJX+G6 Sanlúcar de Barrameda y las coordenadas 36.7813228, -6.3518884.',
	},
	{
		question: '¿Cuál es el horario de la taberna?',
		answer:
			'De lunes a viernes abre en dos turnos: de 8:30 a 16:00 y de 19:00 a 24:00. El sábado abre de 10:00 a 16:00 y de 20:00 a 24:00. El domingo solo tiene turno de mediodía, de 11:00 a 16:00. Es el horario de la ficha consultada el 20 de octubre de 2026 y conviene confirmarlo por teléfono, sobre todo en festivos.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios, así que esta web no los reproduce. En las reseñas que Google destaca se citan quesos, chorizo picante, salmorejo y jamón, y se habla de tapear y de desayunos. Para saber qué hay hoy, lo mejor es llamar al 956 36 05 71.',
	},
	{
		question: '¿Sirven desayunos?',
		answer:
			'La ficha abre a las 8:30 de lunes a viernes, a las 10:00 los sábados y a las 11:00 los domingos, y una de las reseñas destacadas menciona un desayuno con salmorejo y jamón. La ficha no publica una carta de desayunos, así que confirma el servicio por teléfono.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha muestra el distintivo «Se admiten perros» junto al nombre del negocio. Esta web lo recoge tal cual; si tu perro es grande o vas a ir con varios, confirma antes por teléfono.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica dos datos de accesibilidad: los asientos adaptados para sillas de ruedas figuran como disponibles y el aparcamiento adaptado como no disponible. No publica ninguna otra entrada, así que no se añaden más.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 956 36 05 71.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'Restaurant'],
	'@id': `${site.siteUrl}/#taberna`,
	name: business.name,
	description:
		'Taberna y bar de tapas en la calle Bolsa, 65 de Sanlúcar de Barrameda, con desayuno y mediodía todos los días y cena de lunes a sábado.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: `${business.streetAddress}, ${business.secondaryAddress}`,
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
	servesCuisine: ['Tapas'],
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
			opens: shift.open,
			closes: shift.close,
		})),
	),
	amenityFeature: [
		...accesibilidad.map((item) => ({
			'@type': 'LocationFeatureSpecification',
			name: item.label,
			value: item.disponible,
		})),
		{ '@type': 'LocationFeatureSpecification', name: 'Se admiten perros', value: true },
	],
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
