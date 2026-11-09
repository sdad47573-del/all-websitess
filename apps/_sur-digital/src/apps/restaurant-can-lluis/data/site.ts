/**
 * Datos de Restaurant Can Lluís
 * (Ronda de Sant Ramon, 179 · 08830 Sant Boi de Llobregat, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-can-lluis',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Can Lluís',
	shortName: 'Can Lluís',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante de cocina catalana',
	categories: [
		'Restaurante de cocina catalana',
		'Restaurante mediterráneo',
		'Restaurante',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Ronda de Sant Ramon, 179',
	district: 'Sant Boi de Llobregat',
	postalCode: '08830',
	city: 'Sant Boi de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 632 80 34 56',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '632 80 34 56',
	latitude: 41.3344281,
	longitude: 2.0414378,
	/** Plus code que publica la ficha. */
	plusCode: '82MR+QH Sant Boi de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 533 reseñas). */
	rating: 4.2,
	reviewCount: 533,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Can+Llu%C3%ADs/@41.3344281,2.0414378,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49c718d6d058d:0xe64f05b04197f3d1!8m2!3d41.3344281!4d2.0414378!16s%2Fg%2F1tdhwwmp?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJjQVtjXGcpBIR0fOXQbAFT-Y&hl=es';

export const phoneHref = 'tel:+34632803456';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a sábado abre de 8:00 a 22:00; el domingo, de 8:00 a 20:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 22:00',
		shifts: [{ open: '8:00', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 20:00',
		shifts: [{ open: '8:00', close: '20:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a sábado de 8:00 a 22:00; domingo de 8:00 a 20:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lun–sáb 8:00–22:00 · dom 8:00–20:00';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aparcamiento y asientos adaptados para
 * sillas de ruedas. No publica ningún dato sobre aseo adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
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
		text: 'Almuerzos de cuchara, comida casera, buen trato y mucha limpieza.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Entrante era patata hervida con migas de bacalao y mayonesa de bote!',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Todo muy rico y con mucho sabor, raciones generosas y a un precio muy correcto.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Can Lluís?',
		answer:
			'En la Ronda de Sant Ramon, 179, con código postal 08830, en Sant Boi de Llobregat, Barcelona. Publica el plus code 82MR+QH Sant Boi de Llobregat y las coordenadas 41.3344281, 2.0414378.',
	},
	{
		question: '¿Cuál es el horario de Restaurant Can Lluís?',
		answer:
			'La ficha publica que de lunes a sábado abre de 8:00 a 22:00 y que el domingo abre de 8:00 a 20:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina catalana, mediterráneo y restaurante. Las reseñas destacan los almuerzos de cuchara, la comida casera y las raciones generosas. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 632 80 34 56. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 632 80 34 56 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Ronda de Sant Ramon, 179, en Sant Boi de Llobregat, y las coordenadas 41.3344281, 2.0414378. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, aparcamiento y asientos adaptados para sillas de ruedas. No publica ningún dato sobre aseo adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 533 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 5, 1 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina catalana en la Ronda de Sant Ramon, 179, Sant Boi de Llobregat (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
