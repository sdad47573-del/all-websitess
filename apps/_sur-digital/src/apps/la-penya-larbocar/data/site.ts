/**
 * Datos de La Penya L’Arboçar
 * (Camí del font del Cuscó, s/n · 08734 L’Arboçar, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal y accesibilidad.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. La vista previa tampoco incluye extractos
 * literales de reseñas, de modo que esta web cita solo la nota global con su número de reseñas y
 * enlaza el listado completo, sin inventar ninguna cita.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-penya-larbocar',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Penya L’Arboçar',
	shortName: 'La Penya',
	/** Categoría que publica Google en esta ficha. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Camí del font del Cuscó, s/n',
	district: 'L’Arboçar',
	postalCode: '08734',
	city: 'L’Arboçar',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 619 07 04 99',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '619 07 04 99',
	latitude: 41.3334979,
	longitude: 1.7648744,
	/** Plus code que publica la ficha. */
	plusCode: '8QM7+9W L’Arboçar',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 105 reseñas). */
	rating: 4.6,
	reviewCount: 105,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Penya+L%E2%80%99Arbo%C3%A7ar/@41.3334979,1.7648744,17z/data=!3m1!4b1!4m6!3m5!1s0x12a47f1c9adc43d1:0x8f2fbd3a7b30d43e!8m2!3d41.3334979!4d1.7648744!16s%2Fg%2F11jy9j16kc?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ0UPcmhx_pBIRPtQwezq9L48&hl=es';

export const phoneHref = 'tel:+34619070499';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a miércoles cierra. De jueves a domingo abre de 9:00 a 15:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{
		day: 'Jueves',
		service: '9:00 – 15:00',
		shifts: [{ open: '9:00', close: '15:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 15:00',
		shifts: [{ open: '9:00', close: '15:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 15:00',
		shifts: [{ open: '9:00', close: '15:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 15:00',
		shifts: [{ open: '9:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a miércoles cerrado; de jueves a domingo de 9:00 a 15:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Jueves a domingo · resto cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. No publica ningún dato sobre aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está La Penya L’Arboçar?',
		answer:
			'En el Camí del font del Cuscó, s/n, con código postal 08734, en L’Arboçar, Barcelona. Publica el plus code 8QM7+9W L’Arboçar y las coordenadas 41.3334979, 1.7648744.',
	},
	{
		question: '¿Cuál es el horario de La Penya L’Arboçar?',
		answer:
			'La ficha publica que de lunes a miércoles cierra y que de jueves a domingo abre de 9:00 a 15:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local con una sola etiqueta: bar restaurante. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 619 07 04 99. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 619 07 04 99 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Camí del font del Cuscó, s/n, en L’Arboçar, y las coordenadas 41.3334979, 1.7648744. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, aseo y asientos adaptados para sillas de ruedas. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 105 reseñas. El enlace de la valoración abre el listado completo en Google Maps; esta web no reproduce citas porque la vista consultada no incluye extractos destacados.',
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
		'Bar restaurante en el Camí del font del Cuscó, s/n, L’Arboçar (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
