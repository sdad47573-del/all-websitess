/**
 * Datos de Floristería
 * (Norte-Sierra · 14006 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, distrito, código postal, categoría,
 * valoración con número de reseñas, coordenadas y plus code.
 *
 * Es una ficha escueta: no publica calle, teléfono, horario, descripción del titular,
 * accesibilidad ni web propia, así que esta web no reproduce ninguno de ellos y lo declara en
 * cada caso. El endpoint de vista previa no incluía ningún extracto literal de reseñas
 * (respuestas estables de ~15 KB sin bloque de reseñas), así que `reviews` queda vacío y la
 * portada solo enseña la tarjeta con la valoración, como en otras webs del repositorio.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-norte-sierra.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (genérico, sin más). */
	name: 'Floristería',
	shortName: 'Floristería',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * La ficha solo publica distrito y código postal («Nte. Sierra, 14006 Córdoba»): no hay
	 * calle. `streetAddress` conserva el distrito para las líneas de dirección de la web.
	 */
	streetAddress: 'Norte-Sierra',
	district: 'Norte-Sierra',
	postalCode: '14006',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	/* Sin `phone`: la ficha no publica ningún teléfono y no se inventa uno. */
	latitude: 37.8977607,
	longitude: -4.779845,
	/** Plus code que publica la ficha (corto; el completo es 8C9QV6XC+43). */
	plusCode: 'V6XC+43 Córdoba',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 1 reseña). */
	rating: 5,
	reviewCount: 1,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa/@37.8977607,-4.779845,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf004fdf6d43:0xabe0ecb6335b7f4d!8m2!3d37.8977607!4d-4.779845!16s%2Fg%2F11vs3c95yw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJQ23fTwDfbA0RTX9bM7bs4Ks&hl=es';

/* Sin `phoneHref`: la ficha no publica ningún teléfono y la web no tiene botón de llamada. */

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La ficha no publica ninguno, así que queda vacío: la portada muestra un aviso en vez de
 * la tabla y lo declara en las respuestas rápidas.
 */
export const hours: { day: string; service: string; shifts: { open: string; close: string }[]; dayOfWeek: string }[] = [];

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'La ficha no publica horario';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno (el bloque de atributos del endpoint viene vacío), así que queda
 * sin entradas y la portada lo declara en vez de inventarlo.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de reseñas destacadas.
 *
 * El endpoint de vista previa no devolvía ningún extracto (respuestas estables sin bloque de
 * reseñas), así que queda vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica calle, teléfono, horario, descripción, accesibilidad, web ni precios,
 * así que las respuestas lo declaran sin inventar nada.
 */
export const faqs = [
	{
		question: '¿Dónde está esta Floristería?',
		answer:
			'La ficha solo publica el distrito Norte-Sierra, con código postal 14006, en Córdoba: no trae calle. Publica el plus code V6XC+43 Córdoba y las coordenadas 37.8977607, -4.779845.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha no publica horario: ni horas de apertura ni días de cierre. Conviene consultar la propia ficha antes de ir; tampoco publica teléfono.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería, sin más nombre que ese. La ficha no publica descripción del titular, así que esta web no reproduce ninguna.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'La ficha no publica ningún teléfono, así que esta web no tiene botón de llamada: los botones abren las indicaciones de Google Maps y la ficha del negocio.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica el distrito Norte-Sierra de Córdoba (sin calle), el código postal 14006 y las coordenadas 37.8977607, -4.779845. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V6XC+43 Córdoba.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad, así que esta web no dice nada sobre accesos, aparcamiento adaptado o entrada con sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 1 reseña. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada solo con los datos que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el distrito Norte-Sierra de Córdoba (14006). La ficha solo publica distrito, valoración y ubicación.',
	url: `${site.siteUrl}/`,
	/* `image` es una ilustración vectorial propia (public/og.svg), no una foto: la ficha no publica ninguna. */
	image: `${site.siteUrl}/og.png`,
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
	/* Sin `telephone`: la ficha no publica ningún teléfono y no se inventa uno. */
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
