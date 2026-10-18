/**
 * Datos de Restaurant la Garnatxa
 * (Carr. Barcelona, 49 · 08793 Avinyó Nou, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, descripción del titular, valoración con número de
 * reseñas, coordenadas, plus code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios, acción de reserva ni datos de envío, así que
 * aquí no se reproducen. La descripción del titular y los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-la-garnatxa.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant la Garnatxa',
	shortName: 'La Garnatxa',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante de cocina catalana',
	categories: ['Restaurante de cocina catalana', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carr. Barcelona, 49',
	district: 'Avinyó Nou',
	postalCode: '08793',
	city: 'Avinyó Nou',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 938 17 19 96',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '938 17 19 96',
	latitude: 41.361317,
	longitude: 1.7753751,
	/** Plus code que publica la ficha. */
	plusCode: '9Q6G+G5 Avinyó Nou',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 734 reseñas). */
	rating: 4.1,
	reviewCount: 734,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente (en catalán, tal como la
 * publica el negocio).
 */
export const ownerDescription =
	"A la Garnatxa de ca l'Isidret us oferim reinterpretacions de plats tradicionals, fets amb cura i respecte. Dins del nostre ventall gastronòmic trobareu des de tapes, arrosos o carns fins a guisats que recorden a la cuina dels nostres avis.";

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+la+Garnatxa/@41.361317,1.7753751,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4798cbd72d81d:0xa92bc1f41fd99c48!8m2!3d41.361317!4d1.7753751!16s%2Fg%2F1vl0bh3k?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHdhyvYx5pBIRSJzZH_TBK6k&hl=es';

export const phoneHref = 'tel:+34938171996';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a jueves abre de 8:30 a 17:00; viernes y sábado, de 8:30 a 23:30, y
 * el domingo, de 8:30 a 17:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 23:30',
		shifts: [{ open: '8:30', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 23:30',
		shifts: [{ open: '8:30', close: '23:30' }],
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
	'lunes cerrado; de martes a jueves de 8:30 a 17:00; viernes y sábado de 8:30 a 23:30; domingo de 8:30 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el lunes · consulta el horario';

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
		text: 'Arroz muy bueno, tapas, carne, pescado, mucha variedad de comida.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Camarero muy atento y unos embutidos de zona estupendos y jazz.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Son bastante lentos en servir y la comida no mata...y la fruta pasada.',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant la Garnatxa?',
		answer:
			'En la Carr. Barcelona, 49, con código postal 08793, en Avinyó Nou, Barcelona. Publica el plus code 9Q6G+G5 Avinyó Nou y las coordenadas 41.361317, 1.7753751.',
	},
	{
		question: '¿Cuál es el horario de Restaurant la Garnatxa?',
		answer:
			'La ficha publica que el lunes cierra; de martes a jueves abre de 8:30 a 17:00; viernes y sábado, de 8:30 a 23:30, y el domingo, de 8:30 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'El propio titular la describe en su ficha como reinterpretaciones de platos tradicionales: tapes, arroces, carnes y guisados de la cocina de los abuelos. Google clasifica además el local como restaurante de cocina catalana y mediterráneo. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 938 17 19 96. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 938 17 19 96 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carr. Barcelona, 49, en Avinyó Nou, y las coordenadas 41.361317, 1.7753751. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,1 sobre 5 con 734 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 5, 4 y 1 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina catalana en la Carr. Barcelona, 49, Avinyó Nou (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
