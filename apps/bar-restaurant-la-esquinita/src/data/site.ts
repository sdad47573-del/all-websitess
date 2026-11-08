/**
 * Datos de Bar-Restaurant La Esquinita
 * (Carrer de Mossèn Jacint Verdaguer, 90 · 08940 Cornellà de Llobregat, Barcelona).
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
	siteUrl: 'https://bar-restaurant-la-esquinita.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar-Restaurant La Esquinita',
	shortName: 'La Esquinita',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante especializado en tapas',
	categories: ['Restaurante especializado en tapas', 'Bar'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer de Mossèn Jacint Verdaguer, 90',
	district: 'Cornellà de Llobregat',
	postalCode: '08940',
	city: 'Cornellà de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 934 74 30 13',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '934 74 30 13',
	latitude: 41.3536287,
	longitude: 2.0747566,
	/** Plus code que publica la ficha (completo: 8FH4933F+FW). */
	plusCode: '933F+FW Cornellà de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 377 reseñas). */
	rating: 4.4,
	reviewCount: 377,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar-Restaurant+La+Esquinita/@41.3536287,2.0747566,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4995a944b591f:0x28690b0ce22f1826!8m2!3d41.3536287!4d2.0747566!16s%2Fg%2F12qh9klpw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH1lLlFqZpBIRJhgv4gwLaSg&hl=es';

export const phoneHref = 'tel:+34934743013';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El domingo cierra. De lunes a jueves abre de 7:30 a 21:00; el viernes, de 7:30 a 23:30, y el
 * sábado, de 9:00 a 17:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:30 – 21:00',
		shifts: [{ open: '7:30', close: '21:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:30 – 21:00',
		shifts: [{ open: '7:30', close: '21:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:30 – 21:00',
		shifts: [{ open: '7:30', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:30 – 21:00',
		shifts: [{ open: '7:30', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:30 – 23:30',
		shifts: [{ open: '7:30', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 17:00',
		shifts: [{ open: '9:00', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'domingo cerrado; de lunes a jueves de 7:30 a 21:00; viernes de 7:30 a 23:30; sábado de 9:00 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el domingo · consulta el horario';

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
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'También he ido a desayunar y hacen unos bocadillos muy ricos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Desayuno de bocadillo de jamón cortado de Paletilla, aguan con gas y café.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Os recomiendo el solomillo al roquefort y la crema catalana.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Bar-Restaurant La Esquinita?',
		answer:
			'En el Carrer de Mossèn Jacint Verdaguer, 90, con código postal 08940, en Cornellà de Llobregat, Barcelona. Publica el plus code 933F+FW Cornellà de Llobregat y las coordenadas 41.3536287, 2.0747566.',
	},
	{
		question: '¿Cuál es el horario de Bar-Restaurant La Esquinita?',
		answer:
			'La ficha publica que el domingo cierra; de lunes a jueves abre de 7:30 a 21:00; el viernes, de 7:30 a 23:30, y el sábado, de 9:00 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante especializado en tapas y bar. Las reseñas destacan los bocadillos del desayuno, el solomillo al roquefort y la crema catalana. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 934 74 30 13. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 934 74 30 13 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Mossèn Jacint Verdaguer, 90, en Cornellà de Llobregat, y las coordenadas 41.3536287, 2.0747566. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad, disponible: aparcamiento adaptado para sillas de ruedas. No publica ningún dato sobre acceso, aseo ni asientos adaptados.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 377 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 5, 4 y 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Bar de tapas en el Carrer de Mossèn Jacint Verdaguer, 90, Cornellà de Llobregat (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
