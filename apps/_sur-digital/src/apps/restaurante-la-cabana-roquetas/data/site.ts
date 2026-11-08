/**
 * Datos de La Cabaña (Calle Américo Vespucio, 29, 04740 Roquetas de Mar, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso. Google escribe la dirección como «C. Américo Vespucio, 29»: aquí
 * se desarrolla la abreviatura a «Calle», como en el resto de webs del repositorio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-cabana-roquetas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Google publica esta ficha con el nombre «La Cabaña Bar o la cabana o restaurante la cabaña»,
	 * que repite palabras clave y alterna la grafía con y sin tilde. En la web se usa solo
	 * «La Cabaña», el nombre del local.
	 */
	name: 'La Cabaña',
	shortName: 'La Cabaña',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Bar de tapas',
	categories: ['Bar de tapas'],
	streetAddress: 'Calle Américo Vespucio, 29',
	postalCode: '04740',
	city: 'Roquetas de Mar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 649 66 75 58',
	latitude: 36.7412529,
	longitude: -2.6146505,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 525 reseñas). */
	rating: 4.6,
	reviewCount: 525,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del bar, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Caba%C3%B1a+Bar+o+la+cabana+o+restaurante+la+caba%C3%B1a/@36.7412529,-2.6146505,17z/data=!3m1!4b1!4m6!3m5!1s0xd707ab23d4fcc71:0xd8d476d6a6638acb!8m2!3d36.7412529!4d-2.6146505!16s%2Fg%2F11c6ppq660?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJccxPPbJ6cA0Ry4pjptZ21Ng&hl=es';

export const phoneHref = 'tel:+34649667558';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha: un solo turno de 11:00 a 19:00 y el jueves cerrado.
 *
 * El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional (Fiesta Nacional de España)
 * con el aviso de que el horario podía ser diferente, así que se publica la advertencia en lugar de
 * dar ese día por seguro.
 */
export const hours = [
	{ day: 'Lunes', service: '11:00 – 19:00', open: '11:00', close: '19:00', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '11:00 – 19:00', open: '11:00', close: '19:00', dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '11:00 – 19:00',
		open: '11:00',
		close: '19:00',
		dayOfWeek: 'Wednesday',
	},
	{ day: 'Jueves', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '11:00 – 19:00', open: '11:00', close: '19:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '11:00 – 19:00', open: '11:00', close: '19:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '11:00 – 19:00', open: '11:00', close: '19:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'De 11:00 a 19:00; jueves cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual: no hay ninguna reseña inventada ni parafraseada, y no se reproduce ninguna
 * carta porque la ficha no publica ninguna. De las tres que Google destaca en la ficha se usan las
 * dos que se pueden atribuir con seguridad a clientela; la tercera es una respuesta del
 * establecimiento a un comentario, así que se deja fuera para no atribuirla mal.
 */
export const reviews = [
	{
		text: 'Un tapeo buenísimo, también raciones…y la atención de la dueña, espectacular👌',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Las tapas para repetir y la fritura de pescado exquisita.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas.
 */
export const faqs = [
	{
		question: '¿Dónde está La Cabaña?',
		answer:
			'En la calle Américo Vespucio, 29, en Roquetas de Mar (Almería), código postal 04740. Puedes abrir la ubicación exacta en Google Maps o llamar al 649 66 75 58 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 11:00 a 19:00 de lunes a miércoles y de viernes a domingo, con el jueves cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar de tapas, con 4,6 sobre 5 y 525 reseñas. Las reseñas que destacan en la ficha hablan de un buen tapeo, de raciones, de la fritura de pescado y del trato de la dueña. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el bar no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 649 66 75 58.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio bar publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Bar de tapas en Roquetas de Mar (Almería).',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	priceRange: '€',
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
	acceptsReservations: false,
	servesCuisine: ['Tapas'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours
		.filter((item) => item.open && item.close)
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: item.open,
			closes: item.close,
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
