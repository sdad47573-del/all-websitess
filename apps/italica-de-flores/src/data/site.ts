/**
 * Datos de Itálica de Flores S.L.
 * (Calle Metalurgia, 53 · 41007 Sevilla, Distrito Norte).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha y comprobada en el panel visible de la ficha: nombre,
 * dirección, distrito, teléfono, categoría, coordenadas, plus code, horario semanal y accesibilidad.
 *
 * La ficha enlaza 18 reseñas, pero no publica nota media ni deja ver los textos en el endpoint de
 * vista previa, así que esta web no reproduce ninguna media ni ningún extracto: solo el recuento
 * que la propia ficha publica. La ficha no publica web propia ni descripción del titular, así que
 * no se reproduce ninguna. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://italica-de-flores.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Itálica de Flores S.L.',
	shortName: 'Itálica de Flores',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Itálica de Flores S.L., C. Metalurgia, 53, Norte,
	 * 41007 Sevilla». La ficha publica además el distrito: «Distrito Norte».
	 */
	streetAddress: 'Calle Metalurgia, 53',
	district: 'Norte',
	postalCode: '41007',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 954 35 71 07',
	latitude: 37.4112403,
	longitude: -5.9555616,
	/** Plus code que publica la ficha (corto; el completo es 8C9CC26V+FQ). */
	plusCode: 'C26V+FQ Sevilla',
	/**
	 * Recuento de reseñas que publica la ficha («18 reseñas» en el enlace al listado).
	 * La ficha no publica nota media, así que no se reproduce ninguna.
	 */
	reviewCount: 18,
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
	'https://www.google.com/maps/place/It%C3%A1lica+de+Flores+S.L./@37.4112403,-5.9555616,17z/data=!3m1!4b1!4m6!3m5!1s0xd126936abf08635:0x767c11aea7615710!8m2!3d37.4112403!4d-5.9555616!16s%2Fg%2F1tg6ltc1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJNYbwqzZpEg0REFdhp64RfHY&hl=es';

export const phoneHref = 'tel:+34954357107';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre en turno único de mañana (7:00 a 15:00); el sábado abre solo
 * de 8:00 a 11:00 y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 15:00',
		shifts: [{ open: '7:00', close: '15:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 15:00',
		shifts: [{ open: '7:00', close: '15:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 15:00',
		shifts: [{ open: '7:00', close: '15:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 15:00',
		shifts: [{ open: '7:00', close: '15:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 15:00',
		shifts: [{ open: '7:00', close: '15:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 11:00',
		shifts: [{ open: '8:00', close: '11:00' }],
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
	'De lunes a viernes de 7:00 a 15:00; sábado de 8:00 a 11:00; domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos de las reseñas que destaca la ficha.
 *
 * El endpoint de vista previa no incluía los textos y la ficha no publica nota media, así que
 * se deja vacía y la web lo declara: solo enlaza el listado con las 18 reseñas.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica nota media, textos de reseñas, descripción, web ni precios, así que
 * ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Itálica de Flores S.L.?',
		answer:
			'En la Calle Metalurgia, 53, con código postal 41007, en el Distrito Norte de Sevilla. Publica el plus code C26V+FQ Sevilla y las coordenadas 37.4112403, -5.9555616.',
	},
	{
		question: '¿Cuál es el horario de Itálica de Flores S.L.?',
		answer:
			'La ficha publica turno único de mañana de lunes a viernes, de 7:00 a 15:00. El sábado abre solo de 8:00 a 11:00 y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su categoría, su horario, sus reseñas enlazadas y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 954 35 71 07. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Metalurgia, 53, en Sevilla, y las coordenadas 37.4112403, -5.9555616. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C26V+FQ Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha enlaza 18 reseñas, pero no publica nota media ni deja ver los textos en su vista previa, así que esta web no reproduce ninguna media ni ningún extracto: el enlace de las reseñas abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Metalurgia, 53 del Distrito Norte de Sevilla. Floristería con horario de mañana.',
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
	/* Sin `aggregateRating`: la ficha enlaza 18 reseñas pero no publica nota media. */
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
