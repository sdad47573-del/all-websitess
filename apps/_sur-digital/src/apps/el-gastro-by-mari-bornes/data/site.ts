/**
 * Datos de El Gastro by Mari Bornes
 * (Rbla. de la Marinada, 33 · 43712 Llorenç del Penedès, Tarragona).
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
	siteUrl: 'https://www.sur-digital.com/el-gastro-by-mari-bornes',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Gastro by Mari Bornes',
	shortName: 'El Gastro',
	/** Categoría que publica Google en esta ficha. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Rbla. de la Marinada, 33',
	district: 'Llorenç del Penedès',
	postalCode: '43712',
	city: 'Llorenç del Penedès',
	province: 'Tarragona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 665 15 18 85',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '665 15 18 85',
	latitude: 41.2815004,
	longitude: 1.5516059,
	/** Plus code que publica la ficha. */
	plusCode: '7HJ2+JJ Llorenç del Penedès',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 277 reseñas). */
	rating: 4.4,
	reviewCount: 277,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Gastro+by+Mari+Bornes/@41.2815004,1.5516059,17z/data=!3m1!4b1!4m6!3m5!1s0x12a47521733f4097:0xb56e22c0674cd11d!8m2!3d41.2815004!4d1.5516059!16s%2Fg%2F11jp0ty5cv?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJl0A_cyF1pBIRHdFMZ8AibrU&hl=es';

export const phoneHref = 'tel:+34665151885';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Lunes y martes cierra. Miércoles y jueves abre de 11:00 a 16:00; viernes y sábado, de 11:00 a
 * 22:30, y el domingo, de 10:59 a 16:59.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '11:00 – 16:00',
		shifts: [{ open: '11:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 16:00',
		shifts: [{ open: '11:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 22:30',
		shifts: [{ open: '11:00', close: '22:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 22:30',
		shifts: [{ open: '11:00', close: '22:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:59 – 16:59',
		shifts: [{ open: '10:59', close: '16:59' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'lunes y martes cerrado; miércoles y jueves de 11:00 a 16:00; viernes y sábado de 11:00 a 22:30; domingo de 10:59 a 16:59';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos lunes y martes · consulta el horario';

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
		text: 'La hamburguesa estaba buenísima y la berenjena con salmorejo y jamón excelente.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Sitio para aparcar, buen servicio, buena comida, precios asequibles',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Gran sitio para cenar, comer o tapear...las bravas y cerveza de 10...',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está El Gastro by Mari Bornes?',
		answer:
			'En la Rbla. de la Marinada, 33, con código postal 43712, en Llorenç del Penedès, Tarragona. Publica el plus code 7HJ2+JJ Llorenç del Penedès y las coordenadas 41.2815004, 1.5516059.',
	},
	{
		question: '¿Cuál es el horario de El Gastro by Mari Bornes?',
		answer:
			'La ficha publica que lunes y martes cierra; miércoles y jueves abre de 11:00 a 16:00; viernes y sábado, de 11:00 a 22:30, y el domingo, de 10:59 a 16:59. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina española. Las reseñas destacan la hamburguesa, la berenjena con salmorejo y jamón, y las bravas. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 665 15 18 85. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 665 15 18 85 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Rbla. de la Marinada, 33, en Llorenç del Penedès, y las coordenadas 41.2815004, 1.5516059. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 277 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, las tres con puntuación original de 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina española en la Rbla. de la Marinada, 33, Llorenç del Penedès (Tarragona). Datos y fotografías de su ficha de Google Maps.',
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
