/**
 * Datos de Don Viento (C. Director Julián Cerdán, 4 · 11540 Sanlúcar de Barrameda, Cádiz).
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
	siteUrl: 'https://www.sur-digital.com/don-viento',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Don Viento',
	shortName: 'Don Viento',
	/** Categorías que publica Google, en su orden: bar y cafetería. */
	category: 'Bar',
	categories: ['Bar', 'Cafetería'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Director Julián Cerdán, 4',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 956 38 04 40',
	latitude: 36.7855268,
	longitude: -6.3582938,
	/** Plus code que publica la ficha. */
	plusCode: 'QJPR+6M Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 512 reseñas). */
	rating: 4.2,
	reviewCount: 512,
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
	'https://www.google.com/maps/place/Don+Viento/@36.7855268,-6.3582938,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de082135f6c5f:0x28a7d0b1edd5c49a!8m2!3d36.7855268!4d-6.3582938!16s%2Fg%2F1hc26q3k5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJX2xfE4LgDQ0RmsTV7bHQpyg&hl=es';

export const phoneHref = 'tel:+34956380440';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El local abre todos los días a las 12:00 y cierra de madrugada: de domingo a jueves a la 01:30 y
 * los viernes y sábados a las 02:30. El cierre después de medianoche se escribe como 01:30 y 02:30
 * en los datos estructurados, que es como lo publica Google.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 01:30',
		shifts: [{ open: '12:00', close: '01:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 01:30',
		shifts: [{ open: '12:00', close: '01:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 01:30',
		shifts: [{ open: '12:00', close: '01:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 01:30',
		shifts: [{ open: '12:00', close: '01:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 02:30',
		shifts: [{ open: '12:00', close: '02:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 02:30',
		shifts: [{ open: '12:00', close: '02:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 01:30',
		shifts: [{ open: '12:00', close: '01:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto todos los días desde las 12:00 · hasta la 01:30 (viernes y sábados, 02:30)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: acceso, aparcamiento y aseo adaptados figuran como disponibles, y los
 * asientos adaptados como no disponibles. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5 y dos de 4.
 */
export const reviews = [
	{
		text: 'Un sitio perfecto para tomar café, merendar, cenar y ver la mejor puesta de sol',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Vistas inmejorables y buena cocina para tapear.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio para tomar una cervecita bien fría viendo el coto de Doñana',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que ninguna respuesta los
 * menciona. Lo de la puesta de sol y las vistas a Doñana se atribuye a las reseñas, no a la casa.
 */
export const faqs = [
	{
		question: '¿Dónde está Don Viento?',
		answer:
			'En la calle Director Julián Cerdán, 4, con código postal 11540, en Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QJPR+6M Sanlúcar de Barrameda y las coordenadas 36.7855268, -6.3582938.',
	},
	{
		question: '¿Cuál es el horario de Don Viento?',
		answer:
			'La ficha publica un horario continuo todos los días: abre a las 12:00 y cierra a la 01:30, salvo los viernes y los sábados, que cierra a las 02:30. Es el horario de la ficha consultada el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Es un bar o una cafetería?',
		answer:
			'Google lo clasifica con dos categorías: bar y cafetería. En las reseñas que la ficha destaca se habla de café, merienda, cena, tapeo y cerveza bien fría, así que el local cubre el día entero, desde el café hasta la copa.',
	},
	{
		question: '¿Se ve la puesta de sol desde Don Viento?',
		answer:
			'Es lo que más repiten las reseñas que destaca la ficha: una habla de «la mejor puesta de sol», otra de «vistas inmejorables» y otra de tomar una cerveza «viendo el coto de Doñana». Esta web recoge esos comentarios como opiniones de clientes, no como una promesa del local.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha muestra el distintivo «Se admiten perros» junto al nombre del negocio. Esta web lo recoge tal cual; si tu perro es grande o vas a ir con varios, confirma antes por teléfono.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aparcamiento y el aseo adaptados para sillas de ruedas figuran como disponibles, y los asientos adaptados como no disponibles. No publica ninguna otra.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 956 38 04 40.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'CafeOrCoffeeShop'],
	'@id': `${site.siteUrl}/#bar`,
	name: business.name,
	description:
		'Bar y cafetería en la calle Director Julián Cerdán, 4 de Sanlúcar de Barrameda, abierto todos los días desde las 12:00 hasta la 01:30 (viernes y sábados hasta las 02:30).',
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
	/* Sin `priceRange` ni `servesCuisine`: la ficha no publica carta, precios ni tipo de cocina. */
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
