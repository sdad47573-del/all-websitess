/**
 * Datos del RESTAURANTE "EL ZORRO" (Calle Pedregal, 13 · 23170 La Guardia de Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-el-zorro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (en mayúsculas y con comillas). */
	name: 'RESTAURANTE "EL ZORRO"',
	shortName: 'El Zorro',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha, con la abreviatura «C.» desarrollada a «Calle» como en la
	 * mayoría de webs del repositorio.
	 */
	streetAddress: 'Calle Pedregal, 13',
	postalCode: '23170',
	city: 'La Guardia de Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 667 72 28 01',
	latitude: 37.7409338,
	longitude: -3.6940858,
	/** Plus code que publica la ficha. */
	plusCode: 'P8R4+99 La Guardia de Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 108 reseñas). */
	rating: 4.6,
	reviewCount: 108,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/RESTAURANTE+%22EL+ZORRO%22/@37.7409338,-3.6940858,17z/data=!3m1!4b1!4m6!3m5!1s0xd6e777a98ffef3b:0xbea8f2ee4f5bb972!8m2!3d37.7409338!4d-3.6940858!16s%2Fg%2F11g7ktvlmm?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJO-__mHp3bg0RcrlbT-7yqL4&hl=es';

export const phoneHref = 'tel:+34667722801';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre y el local solo
 * aparece abierto el viernes y el sábado, de 21:00 a 2:00 (la madrugada del día siguiente); el
 * resto de días figura como cerrado. Se ha repetido la consulta y las dos respuestas coinciden.
 *
 * Se comprobó con dos descargas independientes: el horario es el mismo en ambas.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '21:00 – 2:00',
		shifts: [{ open: '21:00', close: '02:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '21:00 – 2:00',
		shifts: [{ open: '21:00', close: '02:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Solo viernes y sábado · de 21:00 a 2:00; el resto de días, cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Google solo publica una entrada en este grupo: el aseo adaptado para sillas de ruedas, marcado
 * como disponible. No publica ninguna otra, así que no se añade ninguna.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación. En la primera se conservan las comillas que Google pone
 * alrededor del apodo «Rodri».
 */
export const reviews = [
	{
		text: 'Dar la enhorabuena al chef Manolo y al camarero que nos ha atendido, "Rodri".',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Cerveza fría y buenas tapas',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy familiar y muy buena comida y el servicio excelente lo aconsejo 100% ☺️',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está el RESTAURANTE "EL ZORRO"?',
		answer:
			'En la Calle Pedregal, 13, con código postal 23170, en La Guardia de Jaén (Jaén, Andalucía). La ficha publica el plus code P8R4+99 La Guardia de Jaén y las coordenadas 37.7409338, -3.6940858.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha solo lo da abierto el viernes y el sábado, de 21:00 a 2:00; de domingo a jueves figura como cerrado. Es la información que publica la ficha consultada el 9 de octubre de 2026, y el aviso de Google sobre el lunes 12 (Fiesta Nacional de España) no cambia nada porque ese día ya cierra. Conviene llamar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina hace?',
		answer:
			'Google lo clasifica solo como restaurante y la ficha no publica un tipo de cocina ni una descripción del local, así que no se declara ninguna. En las reseñas que destaca se habla de la labor del chef, de la atención del servicio, de cerveza fría y de buenas tapas. Tiene 4,6 sobre 5 con 108 reseñas.',
	},
	{
		question: '¿Abre todos los días?',
		answer:
			'No. En el horario que publica la ficha solo abre el viernes y el sábado, por la noche, desde las 21:00. El resto de la semana está cerrado.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Pedregal, 13 y las coordenadas 37.7409338, -3.6940858. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code P8R4+99 La Guardia de Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad: el aseo adaptado para sillas de ruedas, marcado como disponible. No publica ninguna otra, así que no se puede afirmar nada más al respecto.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Calle Pedregal, 13 de La Guardia de Jaén (Jaén), abierto según su ficha de Google Maps los viernes y sábados de 21:00 a 2:00.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y la ficha no declara cocina. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
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
