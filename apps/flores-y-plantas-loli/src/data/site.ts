/**
 * Datos de Flores Y Plantas Loli
 * (Calle Escritor Jiménez Lora, 15 · 14014 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code y horario semanal.
 *
 * El nombre se reproduce tal como lo publica la ficha. La ficha no publica descripción del titular,
 * datos de accesibilidad ni web propia, así que no se reproduce ninguno de ellos. El endpoint de
 * vista previa no incluía ningún extracto literal de reseñas (respuestas estables de ~26 KB sin
 * bloque de reseñas), así que `reviews` queda vacío y la portada solo enseña la tarjeta con la
 * valoración, como en otras webs del repositorio. Tampoco publica precios.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flores-y-plantas-loli.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flores Y Plantas Loli',
	shortName: 'Loli',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Flores Y Plantas Loli, C. Escritor Jiménez Lora, 15,
	 * Sureste, 14014 Córdoba». Aquí se desarrolla «C.» a «Calle», como en el resto del repositorio.
	 * «Sureste» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Escritor Jiménez Lora, 15',
	district: 'Sureste',
	postalCode: '14014',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 957 25 14 20',
	latitude: 37.8899581,
	longitude: -4.7587911,
	/** Plus code que publica la ficha (corto; el completo es 8C8WV6QR+XF). */
	plusCode: 'V6QR+XF Córdoba',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 170 reseñas). */
	rating: 4.8,
	reviewCount: 170,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flores+Y+Plantas+Loli/@37.8899581,-4.7587911,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf8f7c596417:0x67e46bd624d03dd9!8m2!3d37.8899581!4d-4.7587911!16s%2Fg%2F1vm7ctpd?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJF2RZfI_fbA0R2T3QJNZr5Gc&hl=es';

export const phoneHref = 'tel:+34957251420';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado
 * abre solo por la mañana (9:30 a 14:00); de lunes a viernes abre dos turnos (mañana de 9:30 a
 * 14:00 y tarde de 17:30 a 20:00); el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '9:30', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 14:00',
		shifts: [{ open: '9:30', close: '14:00' }],
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
export const hoursSummary =
	'Dos turnos de lunes a viernes (9:30–14:00 y 17:30–20:00); sábado solo por la mañana; domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que queda vacío y la portada lo dice tal cual.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de reseñas destacadas.
 *
 * La ficha tiene 170 reseñas (4,8 sobre 5), pero el endpoint no incluía ningún extracto, así que
 * queda vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Flores Y Plantas Loli?',
		answer:
			'En la Calle Escritor Jiménez Lora, 15, con código postal 14014, en Córdoba, en Sureste. La ficha publica el plus code V6QR+XF Córdoba y las coordenadas 37.8899581, -4.7587911.',
	},
	{
		question: '¿Cuál es el horario de Flores Y Plantas Loli?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 9:30 a 14:00 y tarde de 17:30 a 20:00. El sábado abre solo por la mañana, de 9:30 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería, y su propio nombre anuncia flores y plantas. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo sus datos, su horario, su valoración y sus fotografías.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 957 25 14 20. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Escritor Jiménez Lora, 15, en Sureste de Córdoba, y las coordenadas 37.8899581, -4.7587911. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6QR+XF Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que aquí no se afirma ninguno.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 170 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle Escritor Jiménez Lora, 15 de Córdoba, en Sureste. Flores y plantas.',
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
