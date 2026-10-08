/**
 * Datos de Restaurante Luque (Calle Cádiz, 7 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-luque.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Luque',
	shortName: 'Luque',
	/**
	 * Categorías que publica Google en esta ficha: «Bar restaurante» (la primera y la que se usa
	 * como categoría principal) y «Restaurante».
	 */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Cádiz, 7»: aquí se desarrolla a
	 * «Calle Cádiz, 7», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Cádiz, 7',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 603 95 46 38',
	latitude: 37.8015402,
	longitude: -3.7483598,
	/** Plus code que publica la ficha. */
	plusCode: 'R722+JM Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 215 reseñas). */
	rating: 4.2,
	reviewCount: 215,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Luque/@37.8015402,-3.7483598,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd628b2e8a50b:0xbbe8294b21ef950d!8m2!3d37.8015402!4d-3.7483598!16s%2Fg%2F11c48r_7g9?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJC6XosijWbQ0RDZXvIUsp6Ls&hl=es';

export const phoneHref = 'tel:+34603954638';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * de 12:00 a 23:30 de forma continua, con el domingo hasta las 24:00; el martes cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha publica una entrada con dos turnos mal formados («0:00–11:30» y «12:00–23:30»):
 * el inicio y el fin que acompañan al primer turno son 12:00 y 23:30 —el mismo rango que repite la
 * segunda entrada y que el resto de días abiertos—, así que aquí se recoge 12:00 – 23:30, sin
 * inventar el tramo «0:00–11:30».
 *
 * El domingo la ficha muestra «12:00–24:00»; el cierre a las 24:00 se escribe como 00:00 en los
 * datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
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
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 12:00 a 23:30 (el domingo hasta las 24:00); el martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 4 sobre 5 —una de ellas
 * crítica con un plato— y una de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buen sitio apartado del mundanal ruido para tomar una cerveza, raciones o cena',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen trato y muy buena cocina y buen ambiente me gusta mucho y lo recomiendo',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El solomillo al jerez que nos sirvieron nos supo demasiado a vino y saladillo.',
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
		question: '¿Dónde está Restaurante Luque?',
		answer:
			'En la Calle Cádiz, 7, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code R722+JM Jaén y las coordenadas 37.8015402, -3.7483598.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Luque?',
		answer:
			'La ficha publica un horario continuo de 12:00 a 23:30, con el domingo hasta las 24:00, y el martes cerrado. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante y restaurante, sin un tipo de cocina concreto. Tiene 4,2 sobre 5 con 215 reseñas, y en las reseñas que destaca se habla del ambiente tranquilo para tomar una cerveza o cenar, del trato y la cocina, y de un solomillo al jerez que a una persona le supo demasiado a vino.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 603 95 46 38.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Cádiz, 7 y las coordenadas 37.8015402, -3.7483598. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code R722+JM Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 603 95 46 38.',
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
		'Bar restaurante en la Calle Cádiz, 7 de Jaén, con servicio continuo de 12:00 a 23:30 y cierre los martes.',
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
