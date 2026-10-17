/**
 * Datos de Casa de las Flores Zamora
 * (Av. de Oporto, 30 · Carabanchel · 28019 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus code
 * y horario semanal.
 *
 * La ficha no publica web propia, descripción del titular, catálogo, precios, accesibilidad ni
 * textos de reseñas, así que aquí no se reproducen: no se inventa nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://casa-de-las-flores-zamora.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Casa de las Flores Zamora',
	shortName: 'Casa de las Flores',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Diseñador de flores',
	categories: ['Diseñador de flores'],
	streetAddress: 'Av. de Oporto, 30',
	addressLine: 'Av. de Oporto, 30, Carabanchel, 28019 Madrid',
	district: 'Carabanchel',
	postalCode: '28019',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	phone: '+34 616 95 75 51',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '616 95 75 51',
	latitude: 40.3854726,
	longitude: -3.7230632,
	/** Plus code que publica la ficha (completo: 8CGR97PG+5Q). */
	plusCode: '97PG+5Q Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 20 reseñas). */
	rating: 4.4,
	reviewCount: 20,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Casa+de+las+Flores+Zamora/@40.3854726,-3.7230632,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227a94323fb4d:0xcab661163216a1b8!8m2!3d40.3854726!4d-3.7230632!16s%2Fg%2F11rv5h89lh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJTfsjQ6knQg0RuKEWMhZhtso&authuser=0&hl=es&gl=ES';

export const phoneHref = 'tel:+34616957551';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 9:30 a 20:30; sábado y domingo, de 9:30 a 14:30. Se reproduce tal
 * cual, sin interpretarlo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 20:30',
		shifts: [{ open: '09:30', close: '20:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 20:30',
		shifts: [{ open: '09:30', close: '20:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 20:30',
		shifts: [{ open: '09:30', close: '20:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 20:30',
		shifts: [{ open: '09:30', close: '20:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 20:30',
		shifts: [{ open: '09:30', close: '20:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 14:30',
		shifts: [{ open: '09:30', close: '14:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 14:30',
		shifts: [{ open: '09:30', close: '14:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera. */
export const hoursSummary =
	'De lunes a viernes, de 9:30 a 20:30; sábados y domingos, de 9:30 a 14:30';

/**
 * Accesibilidad publicada en la ficha.
 *
 * La ficha no publica ninguna entrada, así que la lista queda vacía y la web lo dice.
 */
export const accesibilidad = [] as const;

/**
 * Reseñas.
 *
 * La ficha publica una nota de 4,4 con 20 reseñas, pero la vista previa no incluye ningún texto,
 * así que no se reproduce ni una cita ni se atribuye una autoría.
 */
export const reviews = [] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Casa de las Flores Zamora?',
		answer:
			'En la Avenida de Oporto, 30, en el distrito de Carabanchel, 28019 Madrid. La ficha publica también el plus code 97PG+5Q Madrid y las coordenadas 40.3854726, -3.7230632.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha publica de lunes a viernes de 9:30 a 20:30, y sábados y domingos de 9:30 a 14:30. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 616 95 75 51. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Qué clase de negocio es?',
		answer:
			'Google lo clasifica únicamente como «Diseñador de flores». La ficha no publica una descripción del titular, así que esta web no añade servicios que no estén publicados.',
	},
	{
		question: '¿Se puede comprar por internet?',
		answer:
			'La ficha no publica web propia ni tienda online, así que esta web no ofrece compra ni pago. Para consultar disponibilidad o encargar algo, hay que llamar por teléfono o acercarse al local.',
	},
	{
		question: '¿Cómo se llega?',
		answer:
			'La dirección publicada es Avenida de Oporto, 30, 28019 Madrid. El botón de indicaciones abre Google Maps con las coordenadas exactas de la ficha.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que esta web no puede confirmar si el local dispone de acceso, aseo o asientos adaptados. Lo mejor es preguntar por teléfono.',
	},
	{
		question: '¿Qué valoración tiene en Google?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 20 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ninguna cita; el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Diseñador de flores en Carabanchel, Madrid. Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange` ni `sameAs`: la ficha no publica precios, web ni perfiles. */
	/* Sin `amenityFeature`: la ficha no publica datos de accesibilidad. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.map((item) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: item.dayOfWeek,
		opens: item.shifts[0].open,
		closes: item.shifts[0].close,
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
