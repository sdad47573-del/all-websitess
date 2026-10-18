/**
 * Datos de Restaurant la Societat
 * (Av. de Catalunya, 16 · 08732 La Múnia, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-la-societat.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant la Societat',
	shortName: 'La Societat',
	/** Categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Av. de Catalunya, 16',
	district: 'La Múnia',
	postalCode: '08732',
	city: 'La Múnia',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 938 91 83 95',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '938 91 83 95',
	latitude: 41.3264453,
	longitude: 1.6177064,
	/** Plus code que publica la ficha. */
	plusCode: '8JG9+H3 La Múnia',
	/** Valoración de la ficha en la fecha de consulta (3,9 sobre 5 con 628 reseñas). */
	rating: 3.9,
	reviewCount: 628,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+la+Societat/@41.3264453,1.6177064,17z/data=!3m1!4b1!4m6!3m5!1s0x12a476eb33c7814d:0x399fd2476f393249!8m2!3d41.3264453!4d1.6177064!16s%2Fg%2F1w6043cx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJTYHHM-t2pBIRSTI5b0fSnzk&hl=es';

export const phoneHref = 'tel:+34938918395';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a miércoles abre de 8:00 a 24:00; jueves y viernes, de 8:30 a 24:00, y sábado y
 * domingo, de 8:00 a 24:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a miércoles de 8:00 a 24:00; jueves y viernes de 8:30 a 24:00; sábado y domingo de 8:00 a 24:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Abierto a diario · hasta las 24:00';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados
 * para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
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
		text: 'Raciones generosas de comida casera.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Un buen sitio para tomar algo tambienbhacen los bocadillos muy buenos',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Fue de pasada, unos cafés de buena mañana pero un buen trato',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant la Societat?',
		answer:
			'En la Av. de Catalunya, 16, con código postal 08732, en La Múnia, Barcelona. Publica el plus code 8JG9+H3 La Múnia y las coordenadas 41.3264453, 1.6177064.',
	},
	{
		question: '¿Cuál es el horario de Restaurant la Societat?',
		answer:
			'La ficha publica que de lunes a miércoles abre de 8:00 a 24:00; jueves y viernes, de 8:30 a 24:00, y sábado y domingo, de 8:00 a 24:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local con una sola etiqueta: restaurante. Las reseñas destacan las raciones generosas de comida casera y los bocadillos. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 938 91 83 95. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 938 91 83 95 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Catalunya, 16, en La Múnia, y las coordenadas 41.3264453, 1.6177064. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 3,9 sobre 5 con 628 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 5, 4 y 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante en la Av. de Catalunya, 16, La Múnia (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
