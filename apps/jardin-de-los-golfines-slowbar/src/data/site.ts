/**
 * Datos de Jardín de los Golfines SlowBar (Calle Adarve del Padre Rosalío, 2 · 10003 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, descripción del titular, horario semanal,
 * servicios de accesibilidad y reseñas destacadas.
 *
 * Google publica la dirección abreviada («C. Adarve del Padre Rosalío, 2»): aquí se desarrolla a
 * «Calle Adarve del Padre Rosalío, 2», como en el resto del repositorio; el código postal 10003 y
 * la localidad (Cáceres) se publican tal cual. La descripción del titular y los 3 extractos de
 * reseñas se reproducen literalmente y se citan como tales en la web. La ficha no publica web
 * propia, perfiles sociales, carta ni precios, así que no se reproduce ninguno. Tampoco publica
 * otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://jardin-de-los-golfines-slowbar.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Jardín de los Golfines SlowBar',
	shortName: 'Jardín de los Golfines',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Jardín de los Golfines SlowBar, C. Adarve del Padre
	 * Rosalío, 2, Centro-Casco Antiguo, 10003 Cáceres». «Centro-Casco Antiguo» es el barrio y
	 * se conserva aparte.
	 */
	streetAddress: 'Calle Adarve del Padre Rosalío, 2',
	district: 'Centro-Casco Antiguo',
	postalCode: '10003',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 676 83 53 34',
	latitude: 39.4732572,
	longitude: -6.3721614,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJFH+84). */
	plusCode: 'FJFH+84 Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 1428 reseñas). */
	rating: 4.1,
	reviewCount: 1428,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Jard%C3%ADn+de+los+Golfines+SlowBar/@39.4732572,-6.3721614,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfe2ec99839f:0xea7aae7cd50dd62e!8m2!3d39.4732572!4d-6.3721614!16s%2Fg%2F11jcjprx5d?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJn4OZ7OLfFQ0RLtYN1Xyueuo&hl=es';

export const phoneHref = 'tel:+34676835334';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se reproduce tal cual en la portada.
 */
export const ownerDescription =
	'El restaurante Jardín de los Golfines, enclavado en el corazón del Casco Antiguo de la ciudad de Cáceres, ofrece un nuevo concepto gastronómico fusionado con la cocina Mediterránea y acompañado de una estética impecable. Además, cuenta con una extensa terraza ajardinada, en la que podrás disfrutar de una amplia selección de vinos, cervezas y cócteles, dando lugar a un ambiente formidable.';

/**
 * Horario semanal que publica la ficha.
 *
 * El viernes y el sábado abren mediodía (13:00–16:30) y noche hasta la madrugada (20:00–1:30).
 * El domingo el mediodía es de 13:00 a 16:30 y la noche llega hasta las 0:30. El lunes abre
 * solo al mediodía, de 13:00 a 17:00. El martes, el miércoles y el jueves está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:00 – 1:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '1:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:00 – 1:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '1:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '0:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Vie–dom mediodía y noche · lun 13:00–17:00 · mar–jue cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso, el aseo adaptado y los asientos adaptados para sillas de ruedas figuran como
 * disponibles; el aparcamiento adaptado figura como no disponible.
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
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay dos de 4
 * y una de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Hemos probado: gyozas, wok, hamburguesa extremeña y tarta de queso.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La calidad de la ración de jamón mejorable, las croquetas muy ricas.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena cocina y amabilidad y buen trato de los camareros, lugar muy agradable',
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
		question: '¿Dónde está Jardín de los Golfines?',
		answer:
			'En la calle Adarve del Padre Rosalío, 2, con código postal 10003, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica el plus code FJFH+84 Cáceres y las coordenadas 39.4732572, -6.3721614.',
	},
	{
		question: '¿Cuál es el horario del SlowBar?',
		answer:
			'El viernes y el sábado abre mediodía de 13:00 a 16:30 y noche de 20:00 a 1:30; el domingo el mediodía es de 13:00 a 16:30 y la noche llega hasta las 0:30. El lunes abre solo al mediodía, de 13:00 a 17:00, y el martes, el miércoles y el jueves está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 676 83 53 34.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y su propia descripción dice literalmente que ofrece un nuevo concepto gastronómico fusionado con la cocina Mediterránea, con terraza ajardinada y selección de vinos, cervezas y cócteles. En las reseñas que destaca se habla de gyozas, wok, hamburguesa extremeña y tarta de queso, de ración de jamón con croquetas muy ricas y de buena cocina con buen trato. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 676 83 53 34.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Adarve del Padre Rosalío, 2 y las coordenadas 39.4732572, -6.3721614. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJFH+84 Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo adaptado y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en el Casco Antiguo de Cáceres con cocina de fusión mediterránea y terraza ajardinada; 4,1 sobre 5 con 1428 reseñas en Google Maps.',
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
