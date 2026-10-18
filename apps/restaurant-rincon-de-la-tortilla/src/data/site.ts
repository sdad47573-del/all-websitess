/**
 * Datos de Restaurant Rincón de la Tortilla
 * (Carrer d'Artur Costa, 51 · 08850 Gavà, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y dos reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-rincon-de-la-tortilla.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Rincón de la Tortilla',
	shortName: 'Rincón de la Tortilla',
	/** Categoría que publica Google en esta ficha. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: "Carrer d'Artur Costa, 51",
	district: 'Gavà',
	postalCode: '08850',
	city: 'Gavà',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 635 73 52 77',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '635 73 52 77',
	latitude: 41.3032445,
	longitude: 2.0060296,
	/** Plus code que publica la ficha. */
	plusCode: '8234+7C Gavà',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 160 reseñas). */
	rating: 4.3,
	reviewCount: 160,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Rinc%C3%B3n+de+la+Tortilla/@41.3032445,2.0060296,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49d20712a2d4f:0x6af3749a71bf1f92!8m2!3d41.3032445!4d2.0060296!16s%2Fg%2F1tnfv__t?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJTy0qcSCdpBIRkh-_cZp082o&hl=es';

export const phoneHref = 'tel:+34635735277';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 7:00 a 23:00; sábado y domingo, de 8:00 a 23:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 23:00',
		shifts: [{ open: '7:00', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 23:00',
		shifts: [{ open: '7:00', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 23:00',
		shifts: [{ open: '7:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 23:00',
		shifts: [{ open: '7:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 23:00',
		shifts: [{ open: '7:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 23:00',
		shifts: [{ open: '8:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 23:00',
		shifts: [{ open: '8:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a viernes de 7:00 a 23:00; sábado y domingo de 8:00 a 23:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lun–vie 7:00–23:00 · sáb–dom 8:00–23:00';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica una sola entrada, disponible: aparcamiento adaptado para sillas de ruedas. No publica
 * ningún dato sobre acceso, aseo ni asientos adaptados.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * La vista consultada incluye dos extractos destacados (ambos de 4 sobre 5). Google no muestra el
 * nombre de quien firma en esta vista previa (solo el enlace a su perfil), así que no se inventa
 * uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Cerveza, tapa, fútbol y buen ambiente',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Tortillas variadas y exquisitas.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Rincón de la Tortilla?',
		answer:
			"En el Carrer d'Artur Costa, 51, con código postal 08850, en Gavà, Barcelona. Publica el plus code 8234+7C Gavà y las coordenadas 41.3032445, 2.0060296.",
	},
	{
		question: '¿Cuál es el horario de Restaurant Rincón de la Tortilla?',
		answer:
			'La ficha publica que de lunes a viernes abre de 7:00 a 23:00 y que sábado y domingo abre de 8:00 a 23:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina española. Las reseñas destacan las tortillas variadas, la tapa y el buen ambiente. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 635 73 52 77. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 635 73 52 77 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer d'Artur Costa, 51, en Gavà, y las coordenadas 41.3032445, 2.0060296. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad, disponible: aparcamiento adaptado para sillas de ruedas. No publica ningún dato sobre acceso, aseo ni asientos adaptados.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 160 reseñas. Aquí se reproducen literalmente dos de las que destaca la ficha, ambas con puntuación original de 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		"Restaurante de cocina española en el Carrer d'Artur Costa, 51, Gavà (Barcelona). Datos y fotografías de su ficha de Google Maps.",
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
	acceptsReservations: false,
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina detallada ni carta. */
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
