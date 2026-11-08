/**
 * Datos de FLORES TENORIO
 * (Calle Huerta de la Fontanilla · 41009 Sevilla, Distrito Norte).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * valoración con número de reseñas y 2 extractos destacados, coordenadas, plus code y horario
 * semanal.
 *
 * La ficha no publica web propia, descripción del titular ni datos de accesibilidad, así que no se
 * reproduce ninguno de ellos. Los 2 extractos de reseñas se reproducen literalmente. La ficha no
 * publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flores-tenorio.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'FLORES TENORIO',
	shortName: 'Tenorio',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «FLORES TENORIO, C. Huerta de la Fontanilla, Norte,
	 * 41009 Sevilla». La ficha publica además el distrito: «Distrito Norte».
	 */
	streetAddress: 'Calle Huerta de la Fontanilla',
	district: 'Norte',
	postalCode: '41009',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 605 45 89 85',
	latitude: 37.4155472,
	longitude: -5.9823607,
	/** Plus code que publica la ficha (corto; el completo es 8C9PC289+63). */
	plusCode: 'C289+63 Sevilla',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 5 reseñas). */
	rating: 4.6,
	reviewCount: 5,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica descripción del titular, así que se deja vacía y la web lo declara.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/FLORES+TENORIO/@37.4155472,-5.9823607,17z/data=!3m1!4b1!4m6!3m5!1s0xd12695862488d37:0xd58f9248e7e0802b!8m2!3d37.4155472!4d-5.9823607!16s%2Fg%2F11f3qxgvy7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJN41IYlhpEg0RK4Dg50iSj9U&hl=es';

export const phoneHref = 'tel:+34605458985';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Todos los días abre en turno único de mañana, de 8:00 a 15:00, incluidos el sábado y el
 * domingo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 8:00 a 15:00, incluidos sábado y domingo';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que se deja vacía y la web lo declara.
 */
export const accesibilidad = [] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Muy buen precio y buena atención',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las flores son súper bonitas y tienen un buen precio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web, descripción ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está FLORES TENORIO?',
		answer:
			'En la Calle Huerta de la Fontanilla, con código postal 41009, en el Distrito Norte de Sevilla. Publica el plus code C289+63 Sevilla y las coordenadas 37.4155472, -5.9823607.',
	},
	{
		question: '¿Cuál es el horario de FLORES TENORIO?',
		answer:
			'La ficha publica turno único de mañana todos los días, de 8:00 a 15:00, incluidos el sábado y el domingo. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su categoría, su horario, su valoración y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 605 45 89 85. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Huerta de la Fontanilla, en Sevilla, y las coordenadas 37.4155472, -5.9823607. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C289+63 Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no reproduce ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 5 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de muy buen precio con buena atención y de flores súper bonitas con buen precio. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Huerta de la Fontanilla del Distrito Norte de Sevilla. Un 4,6 sobre 5 en Google Maps.',
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
	/* Sin `amenityFeature`: la ficha no publica datos de accesibilidad. */
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
