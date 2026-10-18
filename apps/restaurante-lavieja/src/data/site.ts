/**
 * Datos de Restaurante Lavieja (Calle Roso de Luna · 10003 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha publica la dirección sin número («Calle Roso de Luna»): aquí se reproduce tal cual,
 * con el código postal 10003 y la localidad (Cáceres). La ficha solo destaca 3 extractos de
 * reseñas y se reproducen literalmente, citándolos como tales en la web. La ficha no publica
 * descripción del titular, web propia, perfiles sociales, carta ni precios, así que no se
 * reproduce ninguno. Tampoco publica otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-lavieja.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Lavieja',
	shortName: 'Lavieja',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Restaurante Lavieja, Calle Roso de Luna,
	 * Centro-Casco Antiguo, 10003 Cáceres». «Centro-Casco Antiguo» es el barrio y se conserva
	 * aparte.
	 */
	streetAddress: 'Calle Roso de Luna',
	district: 'Centro-Casco Antiguo',
	postalCode: '10003',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 685 83 64 91',
	latitude: 39.4732019,
	longitude: -6.3739059,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJFG+7C). */
	plusCode: 'FJFG+7C Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 192 reseñas). */
	rating: 4.6,
	reviewCount: 192,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Lavieja/@39.4732019,-6.3739059,17z/data=!3m1!4b1!4m6!3m5!1s0xd15df0005b3161d:0x558e445301e2d33d!8m2!3d39.4732019!4d-6.3739059!16s%2Fg%2F11lchbvq_4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHRazBQDfFQ0RPdPiAVNEjlU&hl=es';

export const phoneHref = 'tel:+34685836491';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Todos los días que abre lo hace con el mismo horario: mediodía de 13:00 a 16:00 y noche
 * de 20:30 a 24:00. Abre de domingo a lunes y de miércoles a sábado; el martes está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
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
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = '13:00–16:00 y 20:30–24:00 · mar cerrado';

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
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos ensaladilla de langostinos, caldereta de oreja y solomillo de ternera.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hemos comido también el lomo a la sal con salsa de anchoas y estaba buenísimo!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena atención de la camarera, súper simpática y atenta en todo momento.',
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
		question: '¿Dónde está Restaurante Lavieja?',
		answer:
			'En la calle Roso de Luna, con código postal 10003, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica la dirección sin número y aquí se reproduce tal cual. Publica además el plus code FJFG+7C Cáceres y las coordenadas 39.4732019, -6.3739059.',
	},
	{
		question: '¿Cuál es el horario de Lavieja?',
		answer:
			'Todos los días que abre lo hace con el mismo horario: mediodía de 13:00 a 16:00 y noche de 20:30 a 24:00. Abre de domingo a lunes y de miércoles a sábado; el martes está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 685 83 64 91.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante. Tiene 4,6 sobre 5 con 192 reseñas, y en las reseñas que destaca se habla de ensaladilla de langostinos con caldereta de oreja y solomillo de ternera, de lomo a la sal con salsa de anchoas y de muy buena atención. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 685 83 64 91.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Roso de Luna y las coordenadas 39.4732019, -6.3739059. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJFG+7C Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo adaptado y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la calle Roso de Luna de Cáceres. Ensaladilla de langostinos, caldereta, solomillo y lomo a la sal; 4,6 sobre 5 con 192 reseñas en Google Maps.',
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
