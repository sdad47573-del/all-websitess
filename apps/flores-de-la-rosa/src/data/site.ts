/**
 * Datos de Flores de la Rosa
 * (Puente de Vallecas · 28018 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, distrito, teléfono, categoría, valoración con número de reseñas, coordenadas, plus code,
 * horario semanal y descripción del titular.
 *
 * La ficha no publica calle ni número, web propia, catálogo, precios, accesibilidad ni textos de
 * reseñas, así que aquí no se reproducen: no se inventa una dirección ni una opinión. La
 * descripción del titular se reproduce literalmente, con sus erratas, y se cita como tal.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flores-de-la-rosa.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flores de la Rosa',
	shortName: 'Flores de la Rosa',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * La ficha no publica ni calle ni número: solo el distrito y el código postal. No se rellena
	 * con una dirección inventada.
	 */
	streetAddress: null,
	addressLine: 'Puente de Vallecas, 28018 Madrid',
	district: 'Puente de Vallecas',
	postalCode: '28018',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	phone: '+34 600 69 59 46',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '600 69 59 46',
	latitude: 40.3921949,
	longitude: -3.6540397,
	/** Plus code que publica la ficha (completo: 8CGR98RW+V9). */
	plusCode: '98RW+V9 Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 15 reseñas). */
	rating: 4.1,
	reviewCount: 15,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flores+de+la+Rosa/@40.3921949,-3.6540397,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227b30428abbd:0xde1fa4723df1bcb!8m2!3d40.3921949!4d-3.6540397!16s%2Fg%2F11t9jx31qy?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJvasoBLMnQg0RyxvfI0f64Q0&hl=es';

export const phoneHref = 'tel:+34600695946';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas y sin corregirla; la web la cita como tal.
 */
export const descripcionLocal =
	'Flores de todo tipo se hacen encargos se hacen envíos ah domicilio oh lugar de encuentro floristería de la Rosa ah su disposición';

/**
 * Horario semanal que publica la ficha.
 *
 * Google lo publica en tramos: el lunes de 10:00 a 24:00; de martes a sábado, de 0:00 a 6:00 y
 * de 10:00 a 24:00, y el domingo, de 0:00 a 6:00 y de 10:00 a 15:00. Se reproducen los tramos tal
 * cual, sin unificarlos ni interpretarlos.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '0:00 – 6:00 · 10:00 – 24:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '24:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '0:00 – 6:00 · 10:00 – 24:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '24:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '0:00 – 6:00 · 10:00 – 24:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '24:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '0:00 – 6:00 · 10:00 – 24:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '0:00 – 6:00 · 10:00 – 24:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '0:00 – 6:00 · 10:00 – 15:00',
		shifts: [
			{ open: '0:00', close: '6:00' },
			{ open: '10:00', close: '15:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes de 10:00 a 24:00; de martes a sábado de 0:00 a 6:00 y de 10:00 a 24:00; domingo de 0:00 a 6:00 y de 10:00 a 15:00';

/**
 * Accesibilidad publicada en la ficha.
 *
 * La ficha no publica ninguna entrada, así que la lista queda vacía y la web lo dice.
 */
export const accesibilidad = [] as const;

/**
 * Reseñas.
 *
 * La ficha publica una nota de 4,1 con 15 reseñas, pero la vista previa no incluye ningún texto,
 * así que no se reproduce ni una cita ni se atribuye una autoría.
 */
export const reviews = [] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Flores de la Rosa?',
		answer:
			'La ficha la sitúa en Puente de Vallecas, con código postal 28018, Madrid. No publica ni calle ni número: solo el distrito, el código postal, el plus code 98RW+V9 Madrid y las coordenadas 40.3921949, -3.6540397.',
	},
	{
		question: '¿Cuál es el horario de Flores de la Rosa?',
		answer:
			'La ficha publica el horario en tramos: el lunes de 10:00 a 24:00; de martes a sábado de 0:00 a 6:00 y de 10:00 a 24:00, y el domingo de 0:00 a 6:00 y de 10:00 a 15:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica únicamente como floristería. Su descripción en la ficha dice, literalmente: «Flores de todo tipo se hacen encargos se hacen envíos ah domicilio oh lugar de encuentro floristería de la Rosa ah su disposición».',
	},
	{
		question: '¿Hacen envíos a domicilio?',
		answer:
			'La descripción del titular menciona, con sus propias palabras, que «se hacen envíos ah domicilio oh lugar de encuentro». La ficha no publica zonas, plazos ni precios de envío, así que aquí no se detallan.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 600 69 59 46. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha no publica una calle, solo el distrito de Puente de Vallecas, el código postal 28018 y las coordenadas 40.3921949, -3.6540397. Los botones de esta web abren Google Maps en esas coordenadas, que es la referencia exacta que publica la ficha.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que esta web no puede confirmar si el local dispone de acceso, aseo o asientos adaptados. Lo mejor es preguntar por teléfono.',
	},
	{
		question: '¿Qué valoración tiene en Google?',
		answer:
			'La ficha publica un 4,1 sobre 5 con 15 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ninguna cita; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en Puente de Vallecas, Madrid. Datos y fotografías de su ficha de Google Maps.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	/* Sin `streetAddress`: la ficha no publica calle ni número. */
	address: {
		'@type': 'PostalAddress',
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
	openingHoursSpecification: hours.flatMap((item) =>
		item.shifts.map((shift) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: shift.open,
			closes: shift.close,
		})),
	),
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
