/**
 * Datos de Alimentación Asia (Calle Mefistofeles, 14, Local V · 29006 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, descripción
 * del titular, valoración con número de reseñas y 2 extractos destacados, coordenadas, plus code,
 * horario semanal y el servicio de accesibilidad.
 *
 * La ficha no publica catálogo, precios ni web propia, así que no se reproduce ninguno de ellos.
 * Los 2 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/alimentacion-asia',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Alimentación Asia',
	shortName: 'Asia',
	/** Primera categoría que publica Google en esta ficha. */
	category: 'Tienda de alimentación',
	categories: ['Tienda de alimentación', 'Bazar'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Mefistofeles, 14, Local V»:
	 * aquí se desarrolla a «Calle Mefistofeles, 14, Local V», como en el resto del repositorio.
	 * «Teatinos-Universidad» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Mefistofeles, 14, Local V',
	district: 'Teatinos-Universidad',
	postalCode: '29006',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha, tal como lo publica (sin espacios). */
	phone: '+34 365 68 32 12',
	latitude: 36.7100316,
	longitude: -4.4626952,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPG6P+2W). */
	plusCode: 'PG6P+2W Málaga',
	/** Valoración de la ficha en la fecha de consulta (2,8 sobre 5 con 11 reseñas). */
	rating: 2.8,
	reviewCount: 11,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = ['Bazar del barrio'] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Alimentaci%C3%B3n+Asia/@36.7100316,-4.4626952,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7433a9757df:0xd000f774649330ba!8m2!3d36.7100316!4d-4.4626952!16s%2Fg%2F11f34t0lsz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ31eXOkP3cg0RujCTZHT3ANA&hl=es';

export const phoneHref = 'tel:+34365683212';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días a las 9:00: de lunes a jueves y el domingo cierra a las 23:30, y viernes
 * y sábado a las 23:45.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 23:45',
		shifts: [{ open: '9:00', close: '23:45' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 23:45',
		shifts: [{ open: '9:00', close: '23:45' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días desde las 9:00; cierra a las 23:30 de lunes a jueves y el domingo, y a las 23:45 viernes y sábado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Bazar de barrio que te saca de mas de un apuro.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Solte de allí la bolsa y me fui corriendo al Carrefour express.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Número de reseñas destacadas que publica la ficha.
 *
 * Se cuenta en vez de escribirlo a mano para que el texto no se desincronice si la ficha cambia.
 */
export const numeroResenas = reviews.length;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica catálogo, precios ni web, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Alimentación Asia?',
		answer:
			'En la Calle Mefistofeles, 14, Local V, en Teatinos-Universidad, con código postal 29006, en Málaga. La ficha publica el plus code PG6P+2W Málaga y las coordenadas 36.7100316, -4.4626952.',
	},
	{
		question: '¿Cuál es el horario de Alimentación Asia?',
		answer:
			'La ficha publica apertura todos los días a las 9:00: de lunes a jueves y el domingo cierra a las 23:30, y viernes y sábado a las 23:45. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la tienda?',
		answer:
			'Google la clasifica como tienda de alimentación y también como bazar. Su propia descripción en la ficha dice, literalmente: «Bazar del barrio». La ficha no publica catálogo ni precios, así que esta web no los reproduce: para saber qué hay disponible, lo más rápido es llamar al 365 68 32 12 o pasar por la tienda.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 365 68 32 12. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Mefistofeles, 14, Local V, en Teatinos-Universidad de Málaga, y las coordenadas 36.7100316, -4.4626952. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PG6P+2W Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 2,8 sobre 5 con 11 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: uno habla de un bazar de barrio que saca de apuros y el otro cuenta que se fue a comprar a otro sitio. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'ConvenienceStore',
	'@id': `${site.siteUrl}/#tienda`,
	name: business.name,
	description:
		'Tienda de alimentación y bazar en la Calle Mefistofeles de Málaga, en Teatinos-Universidad. Bazar del barrio.',
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
