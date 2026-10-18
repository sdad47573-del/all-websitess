/**
 * Datos de La Esencia Extremeña (Calle Alzapiernas · 10004 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, descripción del titular, distintivo, horario
 * semanal, servicios de accesibilidad y reseñas destacadas.
 *
 * Google publica la dirección abreviada («C. Alzapiernas»): aquí se desarrolla a «Calle
 * Alzapiernas», como en el resto del repositorio; el código postal 10004 y la localidad
 * (Cáceres) se publican tal cual. La descripción del titular y los 3 extractos de reseñas se
 * reproducen literalmente y se citan como tales en la web. La ficha no publica web propia,
 * perfiles sociales, carta ni precios, así que no se reproduce ninguno. Tampoco publica menú
 * (aunque la descripción lo mencione) ni otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-la-esencia-extremena.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Esencia Extremeña',
	shortName: 'La Esencia',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa
	 * como categoría principal) y «Taberna».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Taberna'],
	/**
	 * Dirección publicada en la ficha: «La Esencia Extremeña, C. Alzapiernas,
	 * Centro-Casco Antiguo, 10004 Cáceres». «Centro-Casco Antiguo» es el barrio y se conserva
	 * aparte.
	 */
	streetAddress: 'Calle Alzapiernas',
	district: 'Centro-Casco Antiguo',
	postalCode: '10004',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 622 52 08 67',
	latitude: 39.4749813,
	longitude: -6.3734038,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJFG+XJ). */
	plusCode: 'FJFG+XJ Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 1006 reseñas). */
	rating: 4.3,
	reviewCount: 1006,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Esencia+Extreme%C3%B1a/@39.4749813,-6.3734038,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfd7abde5fe1:0xfdc493f769b911e9!8m2!3d39.4749813!4d-6.3734038!16s%2Fg%2F11bc95wtdg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4V_eq9ffFQ0R6RG5afeTxP0&hl=es';

export const phoneHref = 'tel:+34622520867';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se reproduce tal cual en la portada, con sus minúsculas y su puntuación originales.
 */
export const ownerDescription =
	'local familiar típico extremeño desde 1974. cocina extremeña y productos ibéricos de bellota. menú del día. se recomienda reservar pues suele estar muy concurrido. terraza . buen trato y calidad de sus productos.';

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de miércoles a domingo con turno doble: mediodía de 12:00 a 16:00 (16:30 el sábado)
 * y noche hasta las 23:30 (desde las 19:30 el miércoles y desde las 20:00 el resto). El lunes
 * y el martes está cerrado.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 · 19:30 – 23:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '19:30', close: '23:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 20:00 – 23:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 20:00 – 23:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00 · 20:00 – 23:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Mié–dom mediodía y noche · lun y mar cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Las cinco entradas figuran como no disponibles: acceso, aparcamiento adaptado, aseo adaptado
 * y asientos adaptados para sillas de ruedas, además del bucle magnético asistencial.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: false },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Distintivos que publica la ficha (con valor disponible).
 *
 * La ficha solo publica uno: el local es amigable con la comunidad LGBTQ+.
 */
export const distintivos = ['Amigable con la comunidad LGBTQ+'] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay una de 3
 * y dos de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Las migas llevan pimientos y jamón, nunca las habia probado así.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos surtido de embutidos, tabla de quesos y cachopo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las patatas muy bien hechas y el flan es muy parecido al quesillo venezolano.',
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
		question: '¿Dónde está La Esencia Extremeña?',
		answer:
			'En la calle Alzapiernas, con código postal 10004, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica el plus code FJFG+XJ Cáceres y las coordenadas 39.4749813, -6.3734038.',
	},
	{
		question: '¿Cuál es el horario de La Esencia?',
		answer:
			'Abre de miércoles a domingo con turno doble: mediodía de 12:00 a 16:00 (hasta las 16:30 el sábado) y noche hasta las 23:30 (desde las 19:30 el miércoles y desde las 20:00 el resto). El lunes y el martes está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 622 52 08 67.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y taberna, y su propia descripción dice literalmente que es un local familiar típico extremeño desde 1974, con cocina extremeña y productos ibéricos de bellota y menú del día. En las reseñas que destaca se habla de migas con pimientos y jamón, de surtido de embutidos con tabla de quesos y cachopo y de patatas bien hechas con flan. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La propia descripción del local dice que se recomienda reservar porque suele estar muy concurrido, pero la ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 622 52 08 67.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Alzapiernas y las coordenadas 39.4749813, -6.3734038. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJFG+XJ Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad y las cinco figuran como no disponibles: acceso, aparcamiento adaptado, aseo adaptado y asientos adaptados para sillas de ruedas, además del bucle magnético asistencial.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, el distintivo, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante y taberna de cocina extremeña en la calle Alzapiernas de Cáceres. Local familiar desde 1974 con menú del día; 4,3 sobre 5 con 1006 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: ninguna categoría («Restaurante», «Taberna») nombra una cocina. */
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
