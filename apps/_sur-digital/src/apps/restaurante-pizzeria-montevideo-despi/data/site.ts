/**
 * Datos de Restaurante Pizzería Montevideo Despí
 * (Carrer Major, 75 · 08970 Sant Joan Despí, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, el distintivo «Se admiten perros» y tres reseñas
 * destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-pizzeria-montevideo-despi',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Pizzería Montevideo Despí',
	shortName: 'Montevideo',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante uruguayo',
	categories: ['Restaurante uruguayo', 'Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Major, 75',
	district: 'Sant Joan Despí',
	postalCode: '08970',
	city: 'Sant Joan Despí',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 932 53 81 57',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '932 53 81 57',
	latitude: 41.3681044,
	longitude: 2.0519395,
	/** Plus code que publica la ficha (completo: 8FH49392+6Q). */
	plusCode: '9392+6Q Sant Joan Despí',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 1152 reseñas). */
	rating: 4.3,
	reviewCount: 1152,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Pizzer%C3%ADa+Montevideo+Desp%C3%AD/@41.3681044,2.0519395,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49bf33564bb97:0xf5e53ce51310abd6!8m2!3d41.3681044!4d2.0519395!16s%2Fg%2F11t3c_8763?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJl7tkNfObpBIR1qsQE-U85fU&hl=es';

export const phoneHref = 'tel:+34932538157';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 8:00 a 24:00; el sábado, de 8:30 a 24:00, y el domingo, de 8:30 a
 * 17:00.
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
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a viernes de 8:00 a 24:00; sábado de 8:30 a 24:00; domingo de 8:30 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días · consulta el horario';

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
		text: 'Muy buen trato y muy buena comida, siempre nos atiende Matias muy buen camarero.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Comida muy buena, nachos, milanesas, pizza Montevideo, pollo rebozado ...',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Hemos ido varias veces y sempre acabamos muy contentos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Pizzería Montevideo Despí?',
		answer:
			'En el Carrer Major, 75, con código postal 08970, en Sant Joan Despí, Barcelona. Publica el plus code 9392+6Q Sant Joan Despí y las coordenadas 41.3681044, 2.0519395.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Pizzería Montevideo Despí?',
		answer:
			'La ficha publica que de lunes a viernes abre de 8:00 a 24:00; el sábado, de 8:30 a 24:00, y el domingo, de 8:30 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante uruguayo y restaurante. Las reseñas destacan las milanesas, la pizza Montevideo y el pollo rebozado. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 932 53 81 57. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 932 53 81 57 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Major, 75, en Sant Joan Despí, y las coordenadas 41.3681044, 2.0519395. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 1152 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante uruguayo en el Carrer Major, 75, Sant Joan Despí (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
