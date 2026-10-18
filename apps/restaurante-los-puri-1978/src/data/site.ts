/**
 * Datos de Los Puri 1978 (Plaza Mayor, 15 · 10910 Malpartida de Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * Google publica la dirección abreviada («Pl. Mayor, 15»): aquí se desarrolla a «Plaza Mayor, 15»,
 * como en el resto del repositorio; el código postal 10910 y la localidad (Malpartida de Cáceres)
 * se publican tal cual. La ficha solo destaca 2 extractos de reseñas y se reproducen literalmente,
 * citándolos como tales en la web. La ficha no publica descripción del titular, web propia,
 * perfiles sociales, carta ni precios, así que no se reproduce ninguno. Tampoco publica otros
 * servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-los-puri-1978.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Los Puri 1978',
	shortName: 'Los Puri',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa
	 * como categoría principal) y «Restaurante especializado en tapas».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante especializado en tapas'],
	/**
	 * Dirección publicada en la ficha: «Los Puri 1978, Pl. Mayor, 15, 10910 Malpartida de
	 * Cáceres, Cáceres».
	 */
	streetAddress: 'Plaza Mayor, 15',
	postalCode: '10910',
	city: 'Malpartida de Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 927 99 51 27',
	latitude: 39.44565,
	longitude: -6.50805,
	/** Plus code que publica la ficha (corto; el completo es 8CFMCFWR+7Q). */
	plusCode: 'CFWR+7Q Malpartida de Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 700 reseñas). */
	rating: 4.5,
	reviewCount: 700,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Los+Puri+1978/@39.44565,-6.50805,17z/data=!3m1!4b1!4m6!3m5!1s0xd167369697281f3:0xed3e60ecf5a659a7!8m2!3d39.44565!4d-6.50805!16s%2Fg%2F11g8ygdx44?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ84FyaWlzFg0Rp1mm9exgPu0&hl=es';

export const phoneHref = 'tel:+34927995127';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El jueves y el domingo abre de 9:00 a 2:00 de la madrugada; el viernes y el sábado hasta
 * las 3:00. El lunes abre solo de 9:00 a 17:00. El martes y el miércoles está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 17:00',
		shifts: [{ open: '9:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 2:00',
		shifts: [{ open: '9:00', close: '2:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 3:00',
		shifts: [{ open: '9:00', close: '3:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 3:00',
		shifts: [{ open: '9:00', close: '3:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 2:00',
		shifts: [{ open: '9:00', close: '2:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Jue–dom hasta la madrugada · lun 9:00–17:00 · mar–mié cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figuran dos entradas y las dos como disponibles: aseo adaptado y asientos adaptados
 * para sillas de ruedas. La ficha no publica acceso ni aparcamiento adaptados.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * La ficha solo destaca 2 y se citan tal cual, sin corregir su redacción ni su puntuación:
 * una de 4 y una de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buena atención y las raciones muy ricas, he ido muchas veces y volveré',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buenos pinchos, atención perfecta, torreznos buenisimos!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Los Puri 1978?',
		answer:
			'En la Plaza Mayor, 15, con código postal 10910, en Malpartida de Cáceres (Cáceres, Extremadura). La ficha publica el plus code CFWR+7Q Malpartida de Cáceres y las coordenadas 39.44565, -6.50805.',
	},
	{
		question: '¿Cuál es el horario de Los Puri?',
		answer:
			'El jueves y el domingo abre de 9:00 a 2:00 de la madrugada; el viernes y el sábado hasta las 3:00. El lunes abre solo de 9:00 a 17:00, y el martes y el miércoles está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 927 99 51 27.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y restaurante especializado en tapas. Tiene 4,5 sobre 5 con 700 reseñas, y en las reseñas que destaca se habla de raciones muy ricas y de pinchos con torreznos buenísimos. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 927 99 51 27.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaza Mayor, 15 y las coordenadas 39.44565, -6.50805. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code CFWR+7Q Malpartida de Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: aseo adaptado y asientos adaptados para sillas de ruedas. No publica acceso ni aparcamiento adaptados, así que esta web no puede confirmarlos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante especializado en tapas en la Plaza Mayor, 15 de Malpartida de Cáceres. Pinchos, torreznos y raciones; 4,5 sobre 5 con 700 reseñas en Google Maps.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	/* Sin `servesCuisine`: ninguna categoría nombra una cocina («Restaurante especializado en tapas» nombra tapas, no una cocina). */
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
} as const;
