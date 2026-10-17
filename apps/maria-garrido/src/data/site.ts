/**
 * Datos de Florista María Garrido Pérez
 * (Glorieta Valle de Oro, s/n · 28019 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular, así que esta web no reproduce ninguna. La ficha no
 * publica accesibilidad ni web propia, así que no se reproduce nada de eso. La vista previa no
 * incluía los textos de las reseñas, así que no se reproduce ningún extracto: solo la nota, el
 * recuento y el enlace. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://maria-garrido.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Florista María Garrido Pérez',
	shortName: 'María Garrido',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Florista María Garrido Pérez, Gta. Valle de Oro, s/n,
	 * Carabanchel, 28019 Madrid».
	 */
	streetAddress: 'Glorieta Valle de Oro, s/n',
	district: 'Carabanchel',
	postalCode: '28019',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 914 72 15 15',
	latitude: 40.3883113,
	longitude: -3.7308025,
	/** Plus code que publica la ficha (corto; el completo es 8CG797Q9+8M). */
	plusCode: '97Q9+8M Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 76 reseñas). */
	rating: 4.6,
	reviewCount: 76,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica ninguna, así que la lista viene vacía y la web lo dice claramente en lugar
 * de inventar una.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florista+Mar%C3%ADa+Garrido+P%C3%A9rez/@40.3883113,-3.7308025,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227924d24934b:0x5bab5e2e931c3873!8m2!3d40.3883113!4d-3.7308025!16s%2Fg%2F11fy4hk38j?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJS5MkTZInQg0Rczgcky5eq1s&hl=es';

export const phoneHref = 'tel:+34914721515';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 9:30 a 21:00; el sábado abre de 9:00 a 21:00 y el domingo
 * de 9:30 a 20:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 21:00',
		shifts: [{ open: '9:30', close: '21:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 21:00',
		shifts: [{ open: '9:30', close: '21:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 21:00',
		shifts: [{ open: '9:30', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 21:00',
		shifts: [{ open: '9:30', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 21:00',
		shifts: [{ open: '9:30', close: '21:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 21:00',
		shifts: [{ open: '9:00', close: '21:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 20:00',
		shifts: [{ open: '9:30', close: '20:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 9:30 a 21:00; sábado de 9:00 a 21:00; domingo de 9:30 a 20:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que la lista viene vacía y la web lo dice claramente.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto:
 * la web publica solo la nota, el recuento y el enlace al listado completo.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, textos de reseñas, accesibilidad, web ni precios, así que
 * ninguna respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Florista María Garrido Pérez?',
		answer:
			'En la Glorieta Valle de Oro, s/n, con código postal 28019, en el distrito de Carabanchel, Madrid. Publica el plus code 97Q9+8M Madrid y las coordenadas 40.3883113, -3.7308025.',
	},
	{
		question: '¿Cuál es el horario de Florista María Garrido Pérez?',
		answer:
			'La ficha publica que de lunes a viernes abre de 9:30 a 21:00, el sábado de 9:00 a 21:00 y el domingo de 9:30 a 20:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: para saber qué tiene, lo más rápido es llamar al 914 72 15 15 o mirar sus fotos en Google Maps.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 914 72 15 15. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Glorieta Valle de Oro, s/n, en Madrid, y las coordenadas 40.3883113, -3.7308025. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 97Q9+8M Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 914 72 15 15 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 76 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Glorieta Valle de Oro, Carabanchel, Madrid. Abre de lunes a viernes de 9:30 a 21:00.',
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
