/**
 * Datos de La Tabernilla de Jose (Calle Cuatro Torres, 4 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica un distintivo junto al nombre, web propia, perfiles sociales, descripción del
 * local, carta ni precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-tabernilla-de-jose',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Tabernilla de Jose',
	shortName: 'La Tabernilla de Jose',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Cuatro Torres, 4»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Cuatro Torres, 4',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (es un móvil, no un fijo). */
	phone: '+34 678 67 51 35',
	latitude: 37.7673096,
	longitude: -3.7868387,
	/** Plus code que publica la ficha. */
	plusCode: 'Q687+W7 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 245 reseñas). */
	rating: 4.3,
	reviewCount: 245,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Tabernilla+de+Jose/@37.7673096,-3.7868387,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd774fd243af3:0x654eecf60729452d!8m2!3d37.7673096!4d-3.7868387!16s%2Fg%2F11c5zvkw6s?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ8zok_XTXbQ0RLUUpB_bsTmU&hl=es';

export const phoneHref = 'tel:+34678675135';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. Se reproduce
 * tal cual lo publica la ficha, incluidas dos peculiaridades que conviene leer con el texto de la
 * sección de horario:
 *
 * - El lunes tiene dos turnos: 13:00–16:30 y 20:30–24:00 (se cierra a medianoche).
 * - El martes la ficha lo publica como un único tramo de 0:00 a 23:45, es decir, empezando a
 *   medianoche, que es cuando termina el turno de noche del lunes. No se corrige ni se interpreta.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día el local abre con su horario habitual, así que el aviso se recoge
 * en el texto de la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '0:00 – 23:45',
		shifts: [{ open: '00:00', close: '23:45' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 23:45',
		shifts: [{ open: '13:00', close: '23:45' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 23:45',
		shifts: [{ open: '13:00', close: '23:45' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 23:45',
		shifts: [{ open: '13:00', close: '23:45' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 23:45',
		shifts: [{ open: '13:00', close: '23:45' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a sábado; los domingos cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el acceso y el aseo adaptados están disponibles, y el aparcamiento adaptado
 * aparece marcado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5 y se
 * reproducen igual.
 */
export const reviews = [
	{
		text: 'Marisco fresco, las gambas exquisitas, puntillitas ricas ricas… Recomendable!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena calidad sobretodo en pescado y marisco',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un lugar acogedor, con buen servicio y buen trato y buena calidad en la cocina.',
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
		question: '¿Dónde está La Tabernilla de Jose?',
		answer:
			'En la calle Cuatro Torres, 4, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q687+W7 Jaén y las coordenadas 37.7673096, -3.7868387.',
	},
	{
		question: '¿Cuál es el horario de La Tabernilla de Jose?',
		answer:
			'La ficha publica de miércoles a sábado un tramo de 13:00 a 23:45; el lunes dos turnos, de 13:00 a 16:30 y de 20:30 a 24:00; y el martes un solo tramo de 0:00 a 23:45, que empieza a medianoche, cuando termina el turno de noche del lunes. Los domingos cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto. Tiene 4,3 sobre 5 con 245 reseñas, y en las tres reseñas que destaca se habla del marisco fresco, las gambas y las puntillitas, de la calidad del pescado y el marisco, y del servicio y el trato.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 678 67 51 35.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Cuatro Torres, 4 y las coordenadas 37.7673096, -3.7868387. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q687+W7 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso y el aseo adaptados para sillas de ruedas, y señala que no hay aparcamiento adaptado. Son las tres entradas de accesibilidad que publica.',
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
		'Restaurante en la calle Cuatro Torres, 4 de Jaén, con servicio de mediodía y noche de lunes a sábado y cerrado los domingos.',
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
