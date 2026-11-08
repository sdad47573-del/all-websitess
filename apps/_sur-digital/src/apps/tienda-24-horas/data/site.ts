/**
 * Datos de Tienda 24 horas
 * (Calle Jaboneros, 9 · 29009 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular, datos de accesibilidad ni web propia, así que no se
 * reproduce ninguno de ellos. El endpoint de vista previa no incluía ningún extracto literal de
 * reseñas (respuestas estables de ~25 KB sin bloque de reseñas), así que `reviews` queda vacío y la
 * portada solo enseña la tarjeta con la valoración, como en otras webs del repositorio. Tampoco
 * publica precios.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/tienda-24-horas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Tienda 24 horas',
	shortName: 'Tienda 24 horas',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Tienda general',
	categories: ['Tienda general'],
	/**
	 * Dirección publicada en la ficha: «Tienda 24 horas, C. Jaboneros, 9, Distrito Centro, 29009
	 * Málaga». Aquí se desarrolla «C.» a «Calle», como en el resto del repositorio. «Distrito
	 * Centro» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Jaboneros, 9',
	district: 'Distrito Centro',
	postalCode: '29009',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 674 44 93 87',
	latitude: 36.7225509,
	longitude: -4.4290741,
	/** Plus code que publica la ficha (corto; el completo es 8C9PPHFC+29). */
	plusCode: 'PHFC+29 Málaga',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 3 reseñas). */
	rating: 5,
	reviewCount: 3,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Tienda+24+horas/@36.7225509,-4.4290741,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ab7ec6c051:0xcda7a31c6f00915d!8m2!3d36.7225509!4d-4.4290741!16s%2Fg%2F11w92j6hyt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJUcDGfqv3cg0RXZEAbxyjp80&hl=es';

export const phoneHref = 'tel:+34674449387';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. Todos los
 * días figura como «Abierto 24 horas». Para el esquema de datos se expresa como 00:00–23:59 de
 * lunes a domingo, como en las demás webs abiertas 24 horas del repositorio.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto 24 horas, todos los días';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que queda vacío y la portada lo dice tal cual.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de reseñas destacadas.
 *
 * La ficha tiene 3 reseñas (5 sobre 5), pero el endpoint no incluía ningún extracto, así que queda
 * vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Tienda 24 horas?',
		answer:
			'En la Calle Jaboneros, 9, con código postal 29009, en Málaga, en Distrito Centro. La ficha publica el plus code PHFC+29 Málaga y las coordenadas 36.7225509, -4.4290741.',
	},
	{
		question: '¿Cuál es el horario de Tienda 24 horas?',
		answer:
			'La ficha publica «Abierto 24 horas» todos los días, de lunes a domingo. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de tienda es?',
		answer:
			'Google la clasifica como tienda general. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su horario de 24 horas, su valoración y sus fotografías.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 674 44 93 87. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Jaboneros, 9, en Distrito Centro de Málaga, y las coordenadas 36.7225509, -4.4290741. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PHFC+29 Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que aquí no se afirma ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 3 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'ConvenienceStore',
	'@id': `${site.siteUrl}/#tienda`,
	name: business.name,
	description:
		'Tienda general en la Calle Jaboneros, 9 de Málaga, en Distrito Centro. Abierta 24 horas, todos los días.',
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
