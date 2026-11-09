/**
 * Datos de Restaurant Cantallops
 * (Carrer Sta. Margarida, 34 · 08793 Cantallops, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, descripción del titular, valoración con número de
 * reseñas, coordenadas, plus code, horario semanal, accesibilidad, el distintivo «Brunch» y tres
 * reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios, acción de reserva ni datos de envío, así que
 * aquí no se reproducen. La descripción del titular y los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen a la
 * ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-cantallops',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Cantallops',
	shortName: 'Cantallops',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante de cocina catalana',
	categories: ['Restaurante de cocina catalana'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Sta. Margarida, 34',
	district: 'Cantallops',
	postalCode: '08793',
	city: 'Cantallops',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 938 97 01 85',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '938 97 01 85',
	latitude: 41.3680512,
	longitude: 1.7987402,
	/** Plus code que publica la ficha (completo: 8FH39Q9X+6F). */
	plusCode: '9Q9X+6F Cantallops',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 488 reseñas). */
	rating: 4.3,
	reviewCount: 488,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Restaurante situado en l ´Alt Penedès a pie de la nacional 340 rodeado de viñedos. Con amplitud para grupos y familias.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Cantallops/@41.3680512,1.7987402,17z/data=!3m1!4b1!4m6!3m5!1s0x12a47d2b48f7a669:0xff0894098a886854!8m2!3d41.3680512!4d1.7987402!16s%2Fg%2F11h5t64r04?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJaab3SCt9pBIRVGiIigmUCP8&hl=es';

export const phoneHref = 'tel:+34938970185';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a domingo abre de 9:00 a 20:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 20:00',
		shifts: [{ open: '9:00', close: '20:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Lunes cerrado; de martes a domingo de 9:00 a 20:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el lunes · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. No publica ninguna entrada sobre aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
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
		text: 'Buena atención precio razonable cocina muy variada almuerzos muy buenos',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buena opción de menú al mediodía, buena comida y esmerada atención',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'De segundo carne a la brasa, en su punto, exquisita como para repetir.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Cantallops?',
		answer:
			'En el Carrer Sta. Margarida, 34, con código postal 08793, en Cantallops, Barcelona. Publica el plus code 9Q9X+6F Cantallops y las coordenadas 41.3680512, 1.7987402.',
	},
	{
		question: '¿Cuál es el horario de Restaurant Cantallops?',
		answer:
			'La ficha publica que el lunes cierra y que de martes a domingo abre de 9:00 a 20:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local únicamente como restaurante de cocina catalana, y muestra además el distintivo «Brunch». Su propia descripción lo sitúa a pie de la nacional 340, rodeado de viñedos, con amplitud para grupos y familias. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 938 97 01 85. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 938 97 01 85 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Sta. Margarida, 34, en Cantallops, y las coordenadas 41.3680512, 1.7987402. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 488 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 4, 5 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina catalana en el Carrer Sta. Margarida, 34, Cantallops (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
