/**
 * Datos de La taverna d'en Silè
 * (Carrer de l'Hospital, 10 · 08776 Sant Pere de Riudebitlles, Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/la-taverna-den-sile',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "La taverna d'en Silè",
	shortName: 'Silè',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: "Carrer de l'Hospital, 10",
	district: 'Sant Pere de Riudebitlles',
	postalCode: '08776',
	city: 'Sant Pere de Riudebitlles',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 653 30 90 00',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '653 30 90 00',
	latitude: 41.4538192,
	longitude: 1.7020927,
	/** Plus code que publica la ficha (completo: 8FH3FP32+GR). */
	plusCode: 'FP32+GR Sant Pere de Riudebitlles',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 529 reseñas). */
	rating: 4.7,
	reviewCount: 529,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/La+taverna+d'en+Sil%C3%A8/@41.4538192,1.7020927,17z/data=!3m1!4b1!4m6!3m5!1s0x12a46511331796bd:0xe8c246f702e50178!8m2!3d41.4538192!4d1.7020927!16s%2Fg%2F11bv3xwlb7?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJvZYXMxFlpBIReAHlAvdGwug&hl=es';

export const phoneHref = 'tel:+34653309000';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Domingo y lunes cierra. De martes a jueves abre de 13:00 a 15:15; el viernes, de 13:00 a 15:15
 * y de 20:30 a 22:30, y el sábado, de 13:30 a 15:30 y de 20:30 a 22:30.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '13:00 – 15:15',
		shifts: [{ open: '13:00', close: '15:15' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 15:15',
		shifts: [{ open: '13:00', close: '15:15' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 15:15',
		shifts: [{ open: '13:00', close: '15:15' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 15:15 · 20:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:15' },
			{ open: '20:30', close: '22:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 15:30 · 20:30 – 22:30',
		shifts: [
			{ open: '13:30', close: '15:30' },
			{ open: '20:30', close: '22:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Domingo y lunes cerrado; de martes a jueves de 13:00 a 15:15; viernes de 13:00 a 15:15 y de 20:30 a 22:30; sábado de 13:30 a 15:30 y de 20:30 a 22:30';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Martes a sábado · domingo y lunes cerrado';

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
		text: 'Menú diario muy completo y precio ajustado.....lógicamente volveremos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'La hamburguesa muy rica tb y los macarrones caseros 😋😋😋😋',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Nos sirvieron enseguida y son muy atentos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: "¿Dónde está La taverna d'en Silè?",
		answer:
			"En el Carrer de l'Hospital, 10, con código postal 08776, en Sant Pere de Riudebitlles, Barcelona. Publica el plus code FP32+GR Sant Pere de Riudebitlles y las coordenadas 41.4538192, 1.7020927.",
	},
	{
		question: "¿Cuál es el horario de La taverna d'en Silè?",
		answer:
			'La ficha publica que domingo y lunes cierra; de martes a jueves abre de 13:00 a 15:15; el viernes, de 13:00 a 15:15 y de 20:30 a 22:30, y el sábado, de 13:30 a 15:30 y de 20:30 a 22:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante y restaurante mediterráneo. La ficha no publica descripción del titular, carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 653 30 90 00. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 653 30 90 00 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer de l'Hospital, 10, en Sant Pere de Riudebitlles, y las coordenadas 41.4538192, 1.7020927. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 529 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		"Restaurante en el Carrer de l'Hospital, 10, Sant Pere de Riudebitlles (Barcelona). Datos y fotografías de su ficha de Google Maps.",
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
