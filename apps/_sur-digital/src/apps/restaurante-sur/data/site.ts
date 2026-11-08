/**
 * Datos de Restaurante Sur (Avenida de Andalucía, 35 · 23005 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios, ningún distintivo ni web propia, así
 * que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-sur',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Sur',
	shortName: 'Sur',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa como
	 * categoría principal) y «Lounge».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Lounge'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de Andalucía, 35»: aquí se
	 * desarrolla a «Avenida de Andalucía, 35», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida de Andalucía, 35',
	postalCode: '23005',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 25 36 31',
	latitude: 37.7772871,
	longitude: -3.7949709,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6G4+W2 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 236 reseñas). */
	rating: 4.3,
	reviewCount: 236,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Sur/@37.7772871,-3.7949709,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd71031647c9d:0xe3765e619f442ae1!8m2!3d37.7772871!4d-3.7949709!16s%2Fg%2F1tfv_hmr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJnXxkMRDXbQ0R4SpEn2FeduM&hl=es';

export const phoneHref = 'tel:+34953253631';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local sirve
 * mediodía casi todos los días —cerrado solo el miércoles— y por la noche abre los lunes, jueves,
 * viernes y sábados; los viernes y sábados alarga hasta las 24:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 *
 * El turno de noche de viernes y sábado se cierra a las 24:00, que en los datos estructurados se
 * escribe como cierre a las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:30 – 16:30',
		shifts: [{ open: '12:30', close: '16:30' }],
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
		service: '12:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:30',
		shifts: [{ open: '12:30', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de lunes a domingo salvo el miércoles; noches de lunes, jueves, viernes y sábado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidas las comillas de la
 * primera y el espacio antes de la coma del precio de la segunda). Dos son de 5 sobre 5 y una, muy
 * crítica, de 1 sobre 5.
 */
export const reviews = [
	{
		text: 'Buena cocina y buenísima atención, ambiente bueno con "Nono" a la cabeza.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos una ración de solomillo y trajo 4 trozos, 14€ , calidad baja en sabor',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Raciones abundantes, muy buena calidad y precio económico.',
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
		question: '¿Dónde está Restaurante Sur?',
		answer:
			'En la Avenida de Andalucía, 35, con código postal 23005, en Jaén (Andalucía). La ficha publica el plus code Q6G4+W2 Jaén y las coordenadas 37.7772871, -3.7949709.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Sur?',
		answer:
			'La ficha publica mediodía de 12:30 a 16:30 de lunes a domingo, salvo el miércoles, que cierra. Por la noche abre los lunes, jueves, viernes y sábados, de 20:30 a 23:30 (viernes y sábado hasta las 24:00). Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante y lounge, sin un tipo de cocina concreto. Tiene 4,3 sobre 5 con 236 reseñas, y en las reseñas que destaca se habla de la buena cocina y la atención, de las raciones abundantes y la buena relación calidad-precio, y de una queja por una ración de solomillo de 14 €.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 25 36 31.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Andalucía, 35 y las coordenadas 37.7772871, -3.7949709. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6G4+W2 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Avenida de Andalucía, 35 de Jaén, con servicio de mediodía casi todos los días y cenas los lunes, jueves, viernes y sábados.',
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
	/* Sin `servesCuisine`: Google publica tipos de establecimiento, no una cocina concreta. */
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
