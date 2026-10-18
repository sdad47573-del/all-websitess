/**
 * Datos de Mr.Florist Barcelona
 * (Carrer de Viladomat, 144 · 08015 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code,
 * horario semanal y accesibilidad.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. Los 3 extractos de reseñas se
 * reproducen literalmente y se citan como tales en la web. La ficha no publica precios, así que no
 * se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://mr-florist-barcelona.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mr.Florist Barcelona',
	shortName: 'Mr.Florist',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer de Viladomat, 144, Eixample, 08015
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Viladomat, 144',
	district: 'Eixample',
	postalCode: '08015',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 931 46 06 09',
	latitude: 41.3824964,
	longitude: 2.1539839,
	/** Plus code que publica la ficha (completo: 8FH495J3+XH). */
	plusCode: '95J3+XH Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 158 reseñas). */
	rating: 4.7,
	reviewCount: 158,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Local especializado en plantas de interior, exterior, macetas de cerámica y flor cortada. Nuestra misión NATURALIZAR Barcelona.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mr.Florist+Barcelona/@41.3824964,2.1539839,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a287c18f0369:0x195068c08d37532!8m2!3d41.3824964!4d2.1539839!16s%2Fg%2F11gg99nl29?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJaQOPwYeipBIRMnXTCIwGlQE&hl=es';

export const phoneHref = 'tel:+34931460609';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a sábado abre de 10:00 a 20:00 en un solo turno y el domingo abre solo por la
 * mañana, de 10:00 a 14:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a sábado de 10:00 a 20:00; domingo de 10:00 a 14:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas y el aparcamiento adaptado figuran como disponibles; el aseo
 * adaptado figura como no disponible («Sin aseo adaptado para discapacitados»).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Gracias chicos, estoy muy contenta con vosotros y repetiré.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hernán supo captar a la perfección mi idea y superó mis propias expectativas!!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muchas gracias, porque me habéis hecho quedar muy bien!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Mr.Florist Barcelona?',
		answer:
			'En el Carrer de Viladomat, 144, con código postal 08015, en Barcelona, en Eixample. Publica el plus code 95J3+XH Barcelona y las coordenadas 41.3824964, 2.1539839.',
	},
	{
		question: '¿Cuál es el horario de Mr.Florist Barcelona?',
		answer:
			'La ficha publica de lunes a sábado de 10:00 a 20:00 en un solo turno y el domingo solo por la mañana, de 10:00 a 14:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «Local especializado en plantas de interior, exterior, macetas de cerámica y flor cortada. Nuestra misión NATURALIZAR Barcelona.»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 931 46 06 09. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Viladomat, 144, en Eixample de Barcelona, y las coordenadas 41.3824964, 2.1539839. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95J3+XH Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso para sillas de ruedas y el aparcamiento adaptado figuran como disponibles, y el aseo adaptado figura como no disponible.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 158 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de quedar muy contenta y repetir, de Hernán captando una idea a la perfección y superando expectativas y de quedar muy bien gracias a ellos. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer de Viladomat de Barcelona, en Eixample. Plantas de interior y exterior, macetas de cerámica y flor cortada.',
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
