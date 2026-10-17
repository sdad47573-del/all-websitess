/**
 * Datos de Floristería Baraka
 * (Latina · 28011 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code y horario semanal.
 *
 * La ficha publica como dirección «Floristería Baraka, Latina, 28011 Madrid», sin calle ni número,
 * así que esta web no reproduce ninguna calle: solo el distrito, el código postal y la ciudad. La
 * ficha no publica accesibilidad ni web propia, así que no se reproduce nada de eso. La vista previa
 * no incluía los textos de las reseñas, así que no se reproduce ningún extracto: solo la nota, el
 * recuento y el enlace. La descripción del titular se reproduce literalmente, con sus erratas, y se
 * cita como tal en la web. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://baraka.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Baraka',
	shortName: 'Baraka',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Baraka, Latina, 28011 Madrid».
	 * La ficha publica el distrito («Latina») pero ninguna calle ni número.
	 */
	streetAddress: 'Distrito de Latina',
	district: 'Latina',
	postalCode: '28011',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 657 80 86 14',
	latitude: 40.4097357,
	longitude: -3.7283299,
	/** Plus code que publica la ficha (corto; el completo es 8CG7C75C+VM). */
	plusCode: 'C75C+VM Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 125 reseñas). */
	rating: 4.9,
	reviewCount: 125,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Baraka es una floristería en Puerta del Ángel, Madrid, especializada en ramos de flores frescas y detalles florales para regalar en cualquier ocasión. Ofrecemos flores a domicilio 24 horas en Madrid, con servicio de entrega urgente. Creamos cada ramo cuidando la combinación de flores, colores y presentación para que cada entrega sea una experiencia especial. 🌸',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Baraka/@40.4097357,-3.7283299,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227ddfd12c14b:0x1f2b84bfc8054792!8m2!3d40.4097357!4d-3.7283299!16s%2Fg%2F11z6c2ndqm?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJS8ES_d0nQg0RkkcFyL-EKx8&hl=es';

export const phoneHref = 'tel:+34657808614';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. El sábado abre de 10:30 a 24:00 y el domingo publica dos tramos (0:00–10:00,
 * continuación de la noche del sábado, y 10:30–13:00); se reproducen tal cual los publica la ficha.
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
		service: '10:00 – 19:30',
		shifts: [{ open: '10:00', close: '19:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 13:00 · 17:30 – 22:00',
		shifts: [
			{ open: '11:00', close: '13:00' },
			{ open: '17:30', close: '22:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '15:00 – 21:00',
		shifts: [{ open: '15:00', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:30 – 21:00',
		shifts: [{ open: '10:30', close: '21:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:30 – 24:00',
		shifts: [{ open: '10:30', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '0:00 – 10:00 · 10:30 – 13:00',
		shifts: [
			{ open: '00:00', close: '10:00' },
			{ open: '10:30', close: '13:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes cerrado; mar 10:00–19:30; mié 11:00–13:00 y 17:30–22:00; jue 15:00–21:00; vie 10:30–21:00; sáb 10:30–24:00; dom 0:00–10:00 y 10:30–13:00';

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
 * La ficha no publica calle, textos de reseñas, accesibilidad, web ni precios, así que ninguna
 * respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Baraka?',
		answer:
			'La ficha publica como dirección «Floristería Baraka, Latina, 28011 Madrid»: distrito de Latina, código postal 28011, en Madrid, sin calle ni número. Publica el plus code C75C+VM Madrid y las coordenadas 40.4097357, -3.7283299. Su descripción la sitúa en Puerta del Ángel.',
	},
	{
		question: '¿Cuál es el horario de Floristería Baraka?',
		answer:
			'La ficha publica que el lunes cierra; el martes abre de 10:00 a 19:30; el miércoles de 11:00 a 13:00 y de 17:30 a 22:00; el jueves de 15:00 a 21:00; el viernes de 10:30 a 21:00; el sábado de 10:30 a 24:00; y el domingo de 0:00 a 10:00 y de 10:30 a 13:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que está especializada en ramos de flores frescas y detalles florales para regalar, con flores a domicilio 24 horas en Madrid y servicio de entrega urgente.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 657 80 86 14. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha no publica calle ni número: solo el distrito de Latina, 28011 Madrid, y las coordenadas 40.4097357, -3.7283299. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C75C+VM Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 657 80 86 14 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 125 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en Puerta del Ángel, distrito de Latina, Madrid. Ramos de flores frescas y flores a domicilio 24 horas con entrega urgente.',
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
