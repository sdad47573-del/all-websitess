/**
 * Datos de Flores Navarro
 * (Carrer de València, 320 · 08009 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, web propia,
 * descripción del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas,
 * plus code, horario semanal y accesibilidad.
 *
 * Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/flores-navarro',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flores Navarro',
	shortName: 'Navarro',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer de València, 320, Eixample, 08009
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de València, 320',
	district: 'Eixample',
	postalCode: '08009',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 934 57 40 99',
	latitude: 41.3953809,
	longitude: 2.1671102,
	/** Plus code que publica la ficha (completo: 8FH495W8+5R). */
	plusCode: '95W8+5R Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 6.280 reseñas). */
	rating: 4.3,
	reviewCount: 6280,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Flores Navarro es más que una floristería en Barcelona; es una tradición desde 1956. Con una incomparable selección de plantas y flores, y un servicio cercano que nos ha hecho queridos en la comunidad, ofrecemos belleza y calidad en cada ramo. Nuestra parada en el Mercat de la Concepció, abierta todos los días del año sin excepción, es testimonio de nuestro compromiso con la accesibilidad y la excelencia. Aquí, cada cliente es tratado como familia, y cada arreglo floral cuenta una historia. Descubre por qué somos la floristería de referencia en Barcelona. Visítanos y lleva contigo una pieza de nuestra historia y pasión por la naturaleza';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flores+Navarro/@41.3953809,2.1671102,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2ec7244ea1b:0x9164048e195b2d4b!8m2!3d41.3953809!4d2.1671102!16s%2Fg%2F1tj5ss41?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJG-pEcuyipBIRSy1bGY4EZJE&hl=es';

/** Web propia publicada en la ficha. */
export const websiteUrl = 'https://www.floresnavarro.com/';

export const phoneHref = 'tel:+34934574099';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a sábado abre de 7:00 a 21:00 en un solo turno y el domingo abre solo por la
 * mañana, de 8:00 a 15:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:00 – 21:00',
		shifts: [{ open: '7:00', close: '21:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 15:00',
		shifts: [{ open: '8:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a sábado de 7:00 a 21:00; domingo de 8:00 a 15:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible; el aparcamiento adaptado figura como
 * no disponible («No hay aparcamiento accesible con silla de ruedas»). La ficha no publica
 * ningún otro.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Un poquito cara, pero tiene mucha variedad y arreglos increíbles.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lugar idóneo donde preparan bonitos ramos de flores y más.....muy buena atención',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'He comprado varias veces alli y siempre he quedado muy satisfecho.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Flores Navarro?',
		answer:
			'En el Carrer de València, 320, con código postal 08009, en Barcelona, en Eixample. Publica el plus code 95W8+5R Barcelona y las coordenadas 41.3953809, 2.1671102.',
	},
	{
		question: '¿Cuál es el horario de Flores Navarro?',
		answer:
			'La ficha publica de lunes a sábado de 7:00 a 21:00 en un solo turno y el domingo solo por la mañana, de 8:00 a 15:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y publica su web propia, floresnavarro.com. Su propia descripción en la ficha dice que es una tradición desde 1956, con selección de plantas y flores y parada en el Mercat de la Concepció abierta todos los días del año.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 934 57 40 99. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tiene web propia?',
		answer:
			'Sí: la ficha publica https://www.floresnavarro.com/. El enlace «Web oficial» de esta web abre esa dirección en una pestaña nueva.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de València, 320, en Eixample de Barcelona, y las coordenadas 41.3953809, 2.1671102. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95W8+5R Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible y el aparcamiento adaptado figura como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 6.280 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de mucha variedad y arreglos increíbles, de bonitos ramos con muy buena atención y de quedar siempre muy satisfecho. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer de València de Barcelona, en Eixample. Tradición desde 1956 con parada en el Mercat de la Concepció.',
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
	sameAs: [websiteUrl],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
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
