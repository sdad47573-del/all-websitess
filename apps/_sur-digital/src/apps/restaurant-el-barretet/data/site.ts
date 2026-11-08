/**
 * Datos de Restaurant El Barretet
 * (Carrer Nou, 17 · 08729 Castellet, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, el distintivo «Brunch» y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-el-barretet',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant El Barretet',
	shortName: 'El Barretet',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Nou, 17',
	district: 'Castellet',
	postalCode: '08729',
	city: 'Castellet',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 931 02 22 69',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '931 02 22 69',
	latitude: 41.2624941,
	longitude: 1.6339087,
	/** Plus code que publica la ficha (completo: 8FH37J6M+XH). */
	plusCode: '7J6M+XH Castellet',
	/** Valoración de la ficha en la fecha de consulta (4,0 sobre 5 con 3130 reseñas). */
	rating: 4.0,
	reviewCount: 3130,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+El+Barretet/@41.2624941,1.6339087,17z/data=!3m1!4b1!4m6!3m5!1s0x12a389d3ba163c41:0x49c1297948b2ae83!8m2!3d41.2624941!4d1.6339087!16s%2Fg%2F11c3w062sz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJQTwWutOJoxIRg66ySHkpwUk&hl=es';

export const phoneHref = 'tel:+34931022269';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a jueves y el domingo abre de 10:00 a 17:00; el viernes y el
 * sábado, de 10:00 a 22:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'lunes cerrado; de martes a jueves y domingo de 10:00 a 17:00; viernes y sábado de 10:00 a 22:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el lunes · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados
 * para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Buena atención y el bocadillo buenísimo de lomo hecho la brasa',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'No te ponen ni unas olivas y pides una cerveza fría y te traen una en llamas.',
		rating: 2,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Pedimos unas anchoas, paella de marisco, solomillo de ternera y butifarra.',
		rating: 2,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant El Barretet?',
		answer:
			'En el Carrer Nou, 17, con código postal 08729, en Castellet, Barcelona. Publica el plus code 7J6M+XH Castellet y las coordenadas 41.2624941, 1.6339087.',
	},
	{
		question: '¿Cuál es el horario de Restaurant El Barretet?',
		answer:
			'La ficha publica que el lunes cierra; de martes a jueves y el domingo abre de 10:00 a 17:00, y el viernes y el sábado, de 10:00 a 22:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante y restaurante mediterráneo, y muestra además el distintivo «Brunch». Las reseñas hablan de bocadillos a la brasa, paella de marisco y carnes. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 931 02 22 69. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 931 02 22 69 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Nou, 17, en Castellet, y las coordenadas 41.2624941, 1.6339087. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,0 sobre 5 con 3130 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 4, 2 y 2 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante mediterráneo en el Carrer Nou, 17, Castellet (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina ni carta. */
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
