/**
 * Datos de RegaloOriginal.com
 * (Calle Valportillo Primera, 12 · 28108 Alcobendas, Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code, horario semanal.
 *
 * Es una tienda de regalos (no una floristería), así que el esquema de datos usa el tipo
 * general `Store`. La ficha no publica web (más allá del propio nombre), accesibilidad ni
 * distrito, así que no se reproduce nada de eso. La vista previa no incluía los textos de las
 * reseñas, así que no se reproduce ningún extracto: solo la nota, el recuento y el enlace. La
 * descripción del titular se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://regalooriginal.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'RegaloOriginal.com',
	shortName: 'RegaloOriginal',
	/** Categoría principal que publica Google en esta ficha. */
	category: 'Tienda de regalos',
	categories: ['Tienda de regalos', 'Tienda de cestas de regalo'],
	/**
	 * Dirección publicada en la ficha: «RegaloOriginal.com, C. Valportillo Primera, 12,
	 * 28108 Alcobendas, Madrid». La ficha no publica distrito.
	 */
	streetAddress: 'Calle Valportillo Primera, 12',
	district: '',
	postalCode: '28108',
	city: 'Alcobendas',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 919 49 60 76',
	latitude: 40.5311539,
	longitude: -3.653366,
	/** Plus code que publica la ficha (corto; el completo es 8CG3G8JW+FM). */
	plusCode: 'G8JW+FM Alcobendas',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 27.956 reseñas). */
	rating: 4.4,
	reviewCount: 27956,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Regalos personalizados y desayunos a domicilio :) Entregamos en 24 horas en toda España y en dos días en toda Europa. Tenemos más de 15.000 productos diferentes, pensados para todas las ocasiones: cumpleaños, aniversarios, sorpresas románticas...',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/RegaloOriginal.com/@40.5311539,-3.653366,17z/data=!3m1!4b1!4m6!3m5!1s0xd422c7af7cef3b9:0x9babe2e20b222eac!8m2!3d40.5311539!4d-3.653366!16s%2Fg%2F1q62mnh4x?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJufPO93osQg0RrC4iC-Liq5s&hl=es';

export const phoneHref = 'tel:+34919496076';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 9:00 a 19:30; el sábado y el domingo abre solo por la mañana
 * (9:00 a 14:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 19:30',
		shifts: [{ open: '9:00', close: '19:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 19:30',
		shifts: [{ open: '9:00', close: '19:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 19:30',
		shifts: [{ open: '9:00', close: '19:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 19:30',
		shifts: [{ open: '9:00', close: '19:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 19:30',
		shifts: [{ open: '9:00', close: '19:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 14:00',
		shifts: [{ open: '9:00', close: '14:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 14:00',
		shifts: [{ open: '9:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 9:00 a 19:30; sábado y domingo de 9:00 a 14:00';

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
 * La ficha no publica textos de reseñas, accesibilidad, distrito, web ni precios, así que ninguna
 * respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está RegaloOriginal.com?',
		answer:
			'En la Calle Valportillo Primera, 12, con código postal 28108, en Alcobendas (Madrid). Publica el plus code G8JW+FM Alcobendas y las coordenadas 40.5311539, -3.653366.',
	},
	{
		question: '¿Cuál es el horario de RegaloOriginal.com?',
		answer:
			'La ficha publica que de lunes a viernes abre de 9:00 a 19:30, y el sábado y el domingo de 9:00 a 14:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la tienda?',
		answer:
			'Google la clasifica como tienda de regalos y tienda de cestas de regalo. Su propia descripción en la ficha dice, literalmente, que tienen regalos personalizados y desayunos a domicilio, con entrega en 24 horas en toda España y en dos días en toda Europa, y más de 15.000 productos para cumpleaños, aniversarios y sorpresas románticas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 919 49 60 76. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Valportillo Primera, 12, en Alcobendas, y las coordenadas 40.5311539, -3.653366. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code G8JW+FM Alcobendas.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 919 49 60 76 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 27.956 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const storeSchema = {
	'@context': 'https://schema.org',
	'@type': 'Store',
	'@id': `${site.siteUrl}/#tienda`,
	name: business.name,
	description:
		'Tienda de regalos en la Calle Valportillo Primera de Alcobendas. Regalos personalizados y desayunos a domicilio con entrega en 24 horas en España.',
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
