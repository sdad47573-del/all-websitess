/**
 * Datos de Restaurante Los Jardines de la Playa (Av. de la Playa · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, ningún distintivo ni web propia, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-los-jardines-de-la-playa.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Los Jardines de la Playa',
	shortName: 'Los Jardines',
	/** Categoría única que publica Google en esta ficha: «Restaurante andaluz». */
	category: 'Restaurante andaluz',
	categories: ['Restaurante andaluz'],
	/** La ficha publica la avenida sin número. */
	streetAddress: 'Av. de la Playa',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 651 60 75 84',
	latitude: 37.1961926,
	longitude: -7.3057513,
	/** Plus code que publica la ficha. */
	plusCode: '5MWV+FM Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 400 reseñas). */
	rating: 4.6,
	reviewCount: 400,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con sus tres líneas y sin corregir la falta de tilde de «dias», y va
 * atribuida a la ficha. El local se sitúa frente a la playa Central de Isla Cristina y anuncia
 * almuerzo y cena todos los días.
 */
export const descripcionLocal =
	'Restaurante Los Jardines de la Playa. Frente a la playa Central de Isla Cristina.\nUn lugar acogedor y agradable.\nServicio todos los dias de almuerzo y cena.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Los+Jardines+de+la+Playa/@37.1961926,-7.3057513,17z/data=!3m1!4b1!4m6!3m5!1s0xd1025d98bb70919:0x5323d62a0ae83e2c!8m2!3d37.1961926!4d-7.3057513!16s%2Fg%2F11t4hg8rl8?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJGQm3i9klEA0RLD7oCirWI1M&hl=es';

export const phoneHref = 'tel:+34651607584';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve de 11:00 a 18:00 todos los días y solo añade cena de 20:30 a 24:00 los viernes, sábados y
 * domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 18:00',
		shifts: [{ open: '11:00', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 18:00',
		shifts: [{ open: '11:00', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 18:00',
		shifts: [{ open: '11:00', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 18:00',
		shifts: [{ open: '11:00', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 18:00 · 20:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '18:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 18:00 · 20:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '18:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 18:00 · 20:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '18:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días de 11:00 a 18:00; cenas de viernes a domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidos los tres puntos
 * suspensivos con los que termina la segunda). La ficha las presenta entrecomilladas; esas
 * comillas son del propio Google y no forman parte del texto, así que no se reproducen. Las
 * puntuaciones son 5, 5 y 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Recomiendo los chocos fritos, milhojas de berenjena y la tarta de queso',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las coquinas al ajillo y la presa con salsa de boletus deliciosos...',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Mucha variedad, la camarera nos recomendó cantidades y fue muy atenta',
		rating: 4,
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
		question: '¿Dónde está Restaurante Los Jardines de la Playa?',
		answer:
			'En la Av. de la Playa, con código postal 21410, en Isla Cristina (Huelva), frente a la playa Central. La ficha publica el plus code 5MWV+FM Isla Cristina y las coordenadas 37.1961926, -7.3057513.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Los Jardines de la Playa?',
		answer:
			'La ficha publica de 11:00 a 18:00 todos los días y cena de 20:30 a 24:00 solo los viernes, sábados y domingos. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante andaluz. En su propia descripción en la ficha se presenta frente a la playa Central de Isla Cristina, como un lugar acogedor y agradable con servicio de almuerzo y cena. Tiene 4,6 sobre 5 con 400 reseñas, y en las tres reseñas que destaca se recomiendan los chocos fritos, la milhojas de berenjena, la tarta de queso, las coquinas al ajillo y la presa con salsa de boletus.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 651 60 75 84.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de la Playa y las coordenadas 37.1961926, -7.3057513. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 5MWV+FM Isla Cristina.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante andaluz en la Av. de la Playa de Isla Cristina, frente a la playa Central, con servicio de almuerzo y cena todos los días.',
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
	/* La cocina está declarada en la propia categoría de Google: «Restaurante andaluz». */
	servesCuisine: ['Cocina andaluza'],
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
