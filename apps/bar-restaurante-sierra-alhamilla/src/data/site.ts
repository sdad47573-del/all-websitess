/**
 * Datos de Bar Restaurante Sierra Alhamilla (Plaza Doctor Campello, 2, 04259 Pechina, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://sierra-alhamilla-pechina.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Restaurante Sierra Alhamilla',
	shortName: 'Sierra Alhamilla',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante andaluz',
	categories: ['Restaurante andaluz', 'Bar'],
	streetAddress: 'Plaza Doctor Campello, 2',
	postalCode: '04259',
	/**
	 * Google escribe la dirección como «Plaza Doctor Campello, 2, 04259 Almería», con el nombre de la
	 * provincia en el hueco de la localidad. El código postal 04259 corresponde al municipio de
	 * Pechina (pedanía de Sierra Alhamilla), que es lo que confirman el callejero de Correos, el
	 * catastro y el propio Ayuntamiento de Pechina, así que la web publica Pechina y no Almería.
	 */
	city: 'Pechina',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 16 02 75',
	latitude: 36.9607614,
	longitude: -2.396331,
	/** Valoración de la ficha en la fecha de consulta (4,5 con 942 reseñas). */
	rating: 4.5,
	reviewCount: 942,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Restaurante+Sierra+Alhamilla/@36.9607614,-2.396331,17z/data=!3m1!4b1!4m6!3m5!1s0xd7aa197344cc36f:0x49eca7d8b5497242!8m2!3d36.9607614!4d-2.396331!16s%2Fg%2F11byclm6f_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJb8NMNJeheg0RQnJJtdin7Ek&hl=es';

export const phoneHref = 'tel:+34950160275';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 8:30 a 18:00 y cierra los martes. El lunes de esa semana la ficha lo marca
 * como Fiesta Nacional de España con el aviso de que el horario podía ser diferente: se publica el
 * valor tal como lo da la ficha, con la advertencia.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
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
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 18:00',
		shifts: [{ open: '08:30', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 8:30 a 18:00; los martes, cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar. Google destaca solo dos reseñas en la ficha y las dos son
 * favorables. La primera acaba en coma en el original, y así se reproduce.
 */
export const reviews = [
	{
		text: 'Tapa de huevo frito con pisto y patatas fritas buenísima,',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Comida riquisima, cerveza sin gluten y tapas deliciosas',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta garantiza platos,
 * precios, terraza ni reparto.
 */
export const faqs = [
	{
		question: '¿Dónde está el Bar Restaurante Sierra Alhamilla?',
		answer:
			'En la plaza Doctor Campello, 2, en Pechina (Almería), código postal 04259. Está en la zona de Sierra Alhamilla, a unos 14 kilómetros de la capital. La ficha de Google escribe la dirección como «04259 Almería» porque pone el nombre de la provincia donde iría el del municipio, pero ese código postal es de Pechina. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 16 02 75 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica abierto de 8:30 a 18:00 y cerrado los martes. El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono tanto los martes como los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante andaluz y bar, con 4,5 sobre 5 y 942 reseñas. Las dos reseñas que destaca la ficha hablan de una tapa de huevo frito con pisto y patatas fritas, y de comida casera y tapas. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Hay opciones sin gluten?',
		answer:
			'Una de las reseñas destacadas menciona la cerveza sin gluten, así que parece que al menos esa opción existe. La ficha no publica carta ni lista de alérgenos, de modo que no se puede confirmar nada más: pregunta por teléfono antes de ir si lo necesitas.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el bar no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 16 02 75.',
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
	description: 'Bar restaurante de cocina andaluza y tapas en Pechina, Almería.',
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
	servesCuisine: ['Cocina andaluza'],
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
