/**
 * Datos de Restaurante Casa Muriel (Calle Ana Mariscal, 5 · 10004 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, descripción del titular, horario semanal y
 * reseñas destacadas.
 *
 * Google publica la dirección abreviada («C. Ana Mariscal, 5»): aquí se desarrolla a «Calle Ana
 * Mariscal, 5», como en el resto del repositorio; el código postal 10004 y la localidad (Cáceres)
 * se publican tal cual. La descripción del titular y los 3 extractos de reseñas se reproducen
 * literalmente y se citan como tales en la web. La ficha no publica entradas de accesibilidad,
 * web propia, perfiles sociales, carta ni precios, así que no se reproduce ninguno. Tampoco
 * publica otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-casa-muriel',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casa Muriel',
	shortName: 'Casa Muriel',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Restaurante Casa Muriel, C. Ana Mariscal, 5, Norte,
	 * 10004 Cáceres». «Norte» es el barrio y se conserva aparte.
	 */
	streetAddress: 'Calle Ana Mariscal, 5',
	district: 'Norte',
	postalCode: '10004',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 927 05 37 75',
	latitude: 39.4905319,
	longitude: -6.3642308,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJRP+68). */
	plusCode: 'FJRP+68 Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 167 reseñas). */
	rating: 4.6,
	reviewCount: 167,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Muriel/@39.4905319,-6.3642308,17z/data=!3m1!4b1!4m6!3m5!1s0xd15e13d86d22a03:0x550290779d55af78!8m2!3d39.4905319!4d-6.3642308!16s%2Fg%2F11sw6nskc1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJAyrShj3hFQ0ReK9VnXeQAlU&hl=es';

export const phoneHref = 'tel:+34927053775';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se reproduce tal cual en la portada.
 */
export const ownerDescription = 'Restaurante Casa Muriel les da la bienvenida.';

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre jornada continua de 9:00 a 24:00 y el sábado desde las 10:00
 * hasta las 24:00. El domingo abre solo al mediodía, de 11:00 a 17:00, y el lunes está
 * cerrado.
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
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:00',
		shifts: [{ open: '11:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Mar–sáb jornada continua · dom 11:00–17:00 · lun cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguna entrada de accesibilidad, así que la portada enseña un aviso
 * en su lugar y `amenityFeature` queda vacío.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Las tres son
 * de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buen sitio para tomarse unas cervezas y raciones',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los bocatas enormes, ricos y económicos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato de los camareros, abundante y buena comida.',
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
		question: '¿Dónde está Casa Muriel?',
		answer:
			'En la calle Ana Mariscal, 5, con código postal 10004, en Cáceres (Extremadura), en el barrio Norte. La ficha publica el plus code FJRP+68 Cáceres y las coordenadas 39.4905319, -6.3642308.',
	},
	{
		question: '¿Cuál es el horario de Casa Muriel?',
		answer:
			'De martes a viernes abre jornada continua de 9:00 a 24:00 y el sábado desde las 10:00 hasta las 24:00. El domingo abre solo al mediodía, de 11:00 a 17:00, y el lunes está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 927 05 37 75.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y su propia descripción les da la bienvenida. Tiene 4,6 sobre 5 con 167 reseñas, y en las reseñas que destaca se habla de cervezas con raciones, de bocatas enormes, ricos y económicos y de buen trato con comida abundante. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 927 05 37 75.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Ana Mariscal, 5 y las coordenadas 39.4905319, -6.3642308. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJRP+68 Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica entradas de accesibilidad, así que esta web no puede confirmar ni el acceso ni los servicios adaptados. Conviene preguntar por teléfono llamando al 927 05 37 75.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la calle Ana Mariscal, 5 de Cáceres. Cervezas, raciones y bocatas; 4,6 sobre 5 con 167 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: la única categoría que publica Google es «Restaurante». */
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
