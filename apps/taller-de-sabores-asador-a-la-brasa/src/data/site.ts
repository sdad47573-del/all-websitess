/**
 * Datos de Taller de Sabores Asador a la Brasa (Paraje de la Cepa, 79, N-340a, 85,
 * 04230 Huércal de Almería, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taller-de-sabores.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taller de Sabores Asador a la Brasa',
	shortName: 'Taller de Sabores',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante argentino',
	categories: ['Restaurante argentino'],
	/**
	 * Google escribe la dirección como «paraje de la cepa 79, N-340a, 85»: aquí se desarrolla la
	 * minúscula a «Paraje de la Cepa» y se conserva el resto tal cual lo publica la ficha, con el
	 * punto kilométrico de la carretera (N-340a, 85) detrás del número del paraje.
	 */
	streetAddress: 'Paraje de la Cepa, 79, N-340a, 85',
	postalCode: '04230',
	city: 'Huércal de Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como el de La Marmita de Ahlam. */
	phone: '+34 633 58 67 62',
	latitude: 36.8712839,
	longitude: -2.4445065,
	/** Valoración de la ficha en la fecha de consulta (4,3 con 422 reseñas). */
	rating: 4.3,
	reviewCount: 422,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del asador, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taller+de+Sabores+Asador+a+la+Brasa/@36.8712839,-2.4445065,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9fedb1d787a9:0x8ec42813233a653!8m2!3d36.8712839!4d-2.4445065!16s%2Fg%2F11kl9psgx6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJqYfXse2feg0RU6YzMoFC7Ag&hl=es';

export const phoneHref = 'tel:+34633586762';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Es un horario partido: abre de 8:00 a 18:00 de lunes a viernes (el sábado solo desde las 12:00)
 * y vuelve de noche desde las 19:30 los lunes, martes, jueves y viernes. El miércoles no abre de
 * noche y el domingo cierra todo el día. El lunes cierra a las 24:00. El lunes de la semana de la
 * consulta era el festivo del 12 de octubre, Fiesta Nacional de España: la ficha lo daba abierto
 * con su horario habitual y con el aviso de que «el horario podría ser diferente», así que se
 * publica abierto **con la advertencia** de que conviene confirmarlo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 18:00 y 19:30 – 24:00',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:30', close: '24:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 18:00 y 19:30 – 23:30',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:30', close: '23:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 18:00',
		shifts: [{ open: '08:00', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 18:00 y 19:30 – 23:30',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 18:00 y 19:30 – 23:30',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 18:00',
		shifts: [{ open: '12:00', close: '18:00' }],
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
export const hoursSummary =
	'De 8:00 a 18:00 de lunes a viernes y desde las 12:00 el sábado · brasa de noche · domingo cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar nada, ni su puntuación ni el emoticono de cerveza de la primera
 * (la ficha lo incluye así). Google destaca tres y ninguna es una queja, así que se publican las
 * tres, como en la web de La Masía.
 */
export const reviews = [
	{
		text: 'Lo recomiendo, cerveza 🍺 a elegir tiene muchas variedades de grifo.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Magnifica terraza para disfrutar de una buena cerveza con carne a la brasa!!',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Mi primera vez y no será la última precio calidad de 10 buena gente buen trato',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas. La terraza y la
 * cerveza de grifo se mencionan porque lo dicen dos reseñas destacadas de la propia ficha, no
 * porque la web afirme una carta que no ha visto.
 */
export const faqs = [
	{
		question: '¿Dónde está el Taller de Sabores Asador a la Brasa?',
		answer:
			'En el paraje de la Cepa, 79, junto a la carretera N-340a (punto 85), en Huércal de Almería (Almería), código postal 04230. Puedes abrir la ubicación exacta en Google Maps o llamar al 633 58 67 62 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica un horario partido: de 8:00 a 18:00 de lunes a viernes (el sábado solo desde las 12:00) y brasa de noche desde las 19:30 los lunes, martes, jueves y viernes, hasta las 23:30 —el lunes, hasta las 24:00—. El miércoles no abre de noche y el domingo cierra todo el día. El lunes 12 de octubre de 2026 coincidía con la Fiesta Nacional de España y la ficha avisaba de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante argentino, con 4,3 sobre 5 y 422 reseñas. Sus reseñas destacadas hablan de carne a la brasa, de una magnífica terraza para tomar una cerveza y de una buena relación calidad-precio. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el asador no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 633 58 67 62.',
	},
	{
		question: '¿Tiene terraza?',
		answer:
			'Una de las reseñas destacadas de la ficha habla de una «magnífica terraza para disfrutar de una buena cerveza con carne a la brasa». La ficha no publica la lista de servicios del establecimiento, así que la web no puede confirmar más allá de lo que dicen sus propias reseñas: lo mejor es preguntar al llamar.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio asador publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Asador a la brasa y restaurante argentino en el paraje de la Cepa, Huércal de Almería.',
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
	// Se traduce la categoría que publica Google, sin añadir ninguna más.
	servesCuisine: ['Cocina argentina'],
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
