/**
 * Datos de Restaurante Mesón Séneca (Avenida de Andalucía, 27 · 23005 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-meson-seneca.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Mesón Séneca',
	shortName: 'Mesón Séneca',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de Andalucía, 27»: aquí se
	 * desarrolla la abreviatura a «Avenida de Andalucía, 27», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida de Andalucía, 27',
	postalCode: '23005',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 25 07 44',
	latitude: 37.777223,
	longitude: -3.79427,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6G4+V7 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4 sobre 5 con 675 reseñas). */
	rating: 4,
	reviewCount: 675,
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
	'https://www.google.com/maps/place/Restaurante+Mes%C3%B3n+S%C3%A9neca/@37.777223,-3.79427,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70fd59f3587:0xec41dd967e70534b!8m2!3d37.777223!4d-3.79427!16s%2Fg%2F1q5gqgh_0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJhzWf1Q_XbQ0RS1NwfpbdQew&hl=es';

export const phoneHref = 'tel:+34953250744';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * abre de martes a sábado con dos turnos, mediodía y noche, y el domingo solo con el mediodía
 * alargado; el lunes cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
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
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a sábado con mediodía y noche; el domingo, de 12:00 a 17:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el aseo y los asientos adaptados están disponibles, y el aparcamiento adaptado
 * aparece marcado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidas la falta de tilde de la
 * segunda). Una es de 1 sobre 5, otra de 4 y otra de 5, y se reproducen igual.
 */
export const reviews = [
	{
		text: 'Raciones abundantes, cerveza fría y tapas adecuadas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato, ambiente familiar con buena comida, economico.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las patatas fritas saben a calamares, boquerones, rosada, aceite requemado...',
		rating: 1,
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
		question: '¿Dónde está Restaurante Mesón Séneca?',
		answer:
			'En la Avenida de Andalucía, 27, con código postal 23005, en Jaén (Andalucía). La ficha publica el plus code Q6G4+V7 Jaén y las coordenadas 37.777223, -3.79427.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Mesón Séneca?',
		answer:
			'La ficha publica de martes a sábado dos turnos, de 12:00 a 16:30 y de 20:00 a 24:00, y el domingo un solo turno de 12:00 a 17:00. El lunes cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto: es la única categoría que publica la ficha. Tiene 4 sobre 5 con 675 reseñas, y en las tres reseñas que destaca se habla de las raciones, la cerveza y las tapas, del trato y el ambiente familiar, y de una queja por el sabor del aceite de las frituras.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 25 07 44.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Andalucía, 27 y las coordenadas 37.777223, -3.79427. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6G4+V7 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: marca como disponibles el aseo y los asientos adaptados para sillas de ruedas, y señala que no hay aparcamiento adaptado. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 25 07 44.',
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
		'Restaurante en la Avenida de Andalucía, 27 de Jaén, con servicio de mediodía y noche de martes a sábado y mediodía los domingos.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y no declara cocina. */
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
