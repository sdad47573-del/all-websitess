/**
 * Datos de Restaurant Jaume Via Ru
 * (Plaça de la Vila, s/n · 08735 Vilobí del Penedès, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, web propia, categorías, valoración con número de reseñas,
 * coordenadas, plus code, horario semanal y accesibilidad.
 *
 * La ficha no publica descripción del titular, carta, precios, acción de reserva ni datos de
 * envío, así que aquí no se reproducen. La vista previa tampoco incluye extractos literales de
 * reseñas, de modo que esta web cita solo la nota global con su número de reseñas y enlaza el
 * listado completo, sin inventar ninguna cita.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-jaume-via-ru',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Jaume Via Ru',
	shortName: 'Jaume Via Ru',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Bar'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Plaça de la Vila, s/n',
	district: 'Vilobí del Penedès',
	postalCode: '08735',
	city: 'Vilobí del Penedès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 690 03 79 72',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '690 03 79 72',
	latitude: 41.390005,
	longitude: 1.6642269,
	/** Plus code que publica la ficha. */
	plusCode: '9MR7+2M Vilobí del Penedès',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 796 reseñas). */
	rating: 4.2,
	reviewCount: 796,
	site: 'https://sites.google.com/view/restaurant-jaume-via-ru/inici',
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Jaume+Via+Ru/@41.390005,1.6642269,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4718857bc3ccd:0x77726b8e905d7249!8m2!3d41.390005!4d1.6642269!16s%2Fg%2F12qf6frmk?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJzTy8V4hxpBIRSXJdkI5rcnc&hl=es';

/** Web propia publicada en la ficha. */
export const websiteUrl = 'https://sites.google.com/view/restaurant-jaume-via-ru/inici';

export const phoneHref = 'tel:+34690037972';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a jueves abre de 8:30 a 21:00; viernes y sábado, de 8:30 a 22:00, y
 * el domingo, de 8:30 a 21:30.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 22:00',
		shifts: [{ open: '8:30', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 22:00',
		shifts: [{ open: '8:30', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 21:30',
		shifts: [{ open: '8:30', close: '21:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'lunes cerrado; de martes a jueves de 8:30 a 21:00; viernes y sábado de 8:30 a 22:00; domingo de 8:30 a 21:30';

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

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Jaume Via Ru?',
		answer:
			'En la Plaça de la Vila, s/n, con código postal 08735, en Vilobí del Penedès, Barcelona. Publica el plus code 9MR7+2M Vilobí del Penedès y las coordenadas 41.390005, 1.6642269.',
	},
	{
		question: '¿Cuál es el horario de Restaurant Jaume Via Ru?',
		answer:
			'La ficha publica que el lunes cierra; de martes a jueves abre de 8:30 a 21:00; viernes y sábado, de 8:30 a 22:00, y el domingo, de 8:30 a 21:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante y bar. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas; su web oficial sí puede publicar la carta.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 690 03 79 72. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Tiene web oficial?',
		answer:
			'Sí: la ficha publica https://sites.google.com/view/restaurant-jaume-via-ru/inici como web del restaurante. El botón principal de esta web abre esa página en una pestaña nueva.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online de Google. Para reservar o preguntar por la disponibilidad, lo más directo es llamar al 690 03 79 72 o consultar su web oficial.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaça de la Vila, s/n, en Vilobí del Penedès, y las coordenadas 41.390005, 1.6642269. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 796 reseñas. El enlace de la valoración abre el listado completo en Google Maps; esta web no reproduce citas porque la vista consultada no incluye extractos destacados.',
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
		'Restaurante en la Plaça de la Vila, s/n, Vilobí del Penedès (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	sameAs: [websiteUrl],
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
