/**
 * Datos de Floristería Flor de Vivi
 * (Calle de Granada, 42 · 28007 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code, horario semanal y accesibilidad.
 *
 * La ficha publica cuatro entradas de accesibilidad: aparcamiento adaptado (disponible), aseo
 * adaptado, asientos adaptados y bucle magnético (estas tres, no disponibles). La ficha no publica
 * web propia. La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún
 * extracto: solo la nota, el recuento y el enlace. La descripción del titular se reproduce
 * literalmente, con sus erratas, y se cita como tal en la web. La ficha no publica precios, así que
 * no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flor-vivi.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Flor de Vivi',
	shortName: 'Flor de Vivi',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Flor de Vivi, C. de Granada, 42, Retiro,
	 * 28007 Madrid».
	 */
	streetAddress: 'Calle de Granada, 42',
	district: 'Retiro',
	postalCode: '28007',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 608 89 91 27',
	latitude: 40.4032015,
	longitude: -3.6759126,
	/** Plus code que publica la ficha (corto; el completo es 8CG7C83F+7J). */
	plusCode: 'C83F+7J Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 159 reseñas). */
	rating: 4.9,
	reviewCount: 159,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = ['Dinámica, Personalizada, Arte y Diseño'] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Flor+de+Vivi/@40.4032015,-3.6759126,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227fb4d042af5:0xb712d426fb8c7f9c!8m2!3d40.4032015!4d-3.6759126!16s%2Fg%2F11ng5z3nyd?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ9SoETfsnQg0RnH-M-ybUErc&hl=es';

export const phoneHref = 'tel:+34608899127';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes abre de 10:30 a 20:30; de martes a viernes abre de 9:30 a 20:30; el sábado abre
 * de 10:00 a 14:30 y el domingo de 10:30 a 14:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:30 – 20:30',
		shifts: [{ open: '10:30', close: '20:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 20:30',
		shifts: [{ open: '9:30', close: '20:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 20:30',
		shifts: [{ open: '9:30', close: '20:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 20:30',
		shifts: [{ open: '9:30', close: '20:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 20:30',
		shifts: [{ open: '9:30', close: '20:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 14:30',
		shifts: [{ open: '10:00', close: '14:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:30 – 14:30',
		shifts: [{ open: '10:30', close: '14:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes de 10:30 a 20:30; de martes a viernes de 9:30 a 20:30; sábado de 10:00 a 14:30; domingo de 10:30 a 14:30';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: aparcamiento adaptado (disponible), aseo adaptado, asientos adaptados y
 * bucle magnético (estas tres, no disponibles).
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

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
 * La ficha no publica textos de reseñas, web ni precios, así que ninguna respuesta los menciona
 * como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Flor de Vivi?',
		answer:
			'En la Calle de Granada, 42, con código postal 28007, en el distrito de Retiro, Madrid. Publica el plus code C83F+7J Madrid y las coordenadas 40.4032015, -3.6759126.',
	},
	{
		question: '¿Cuál es el horario de Floristería Flor de Vivi?',
		answer:
			'La ficha publica que el lunes abre de 10:30 a 20:30; de martes a viernes de 9:30 a 20:30; el sábado de 10:00 a 14:30 y el domingo de 10:30 a 14:30. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente: «Dinámica, Personalizada, Arte y Diseño».',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 608 89 91 27. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Granada, 42, en Madrid, y las coordenadas 40.4032015, -3.6759126. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C83F+7J Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: aparcamiento adaptado, que figura como disponible, y aseo adaptado, asientos adaptados y bucle magnético, que figuran como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 159 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle de Granada, Retiro, Madrid. Dinámica, personalizada, arte y diseño.',
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
