/**
 * Datos de Floristeria Las 3 Orquídeas
 * (Rda. Gral. Mitre, 129 · 08022 Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/floristeria-las-3-orquideas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Las 3 Orquídeas',
	shortName: 'Las 3 Orquídeas',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Rda. Gral. Mitre, 129, Sarrià-Sant Gervasi, 08022
	 * Barcelona». «Sarrià-Sant Gervasi» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Rda. Gral. Mitre, 129',
	district: 'Sarrià-Sant Gervasi',
	postalCode: '08022',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 654 11 16 44',
	latitude: 41.4021862,
	longitude: 2.1368917,
	/** Plus code que publica la ficha (completo: 8FH4C42P+VQ). */
	plusCode: 'C42P+VQ Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 35 reseñas). */
	rating: 4.6,
	reviewCount: 35,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Disponemos de plantas de interior y exterior para el hogar. Realizamos trabajos de jardinería a domicilio o en tienda de plantas ornamentales. Ramos de novia personalizados // Arreglos florales // Arreglos funerarios. Nos encargamos de la decoración de tu hogar nuestros presupuestos son sin compromiso. Ven y visítanos!! La amabilidad y el carisma es nuestra filosofía. Demuestra tu cariño con flores 💐';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Las+3+Orqu%C3%ADdeas/@41.4021862,2.1368917,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4980d8d50505f:0x5ee80fb8b1e697e0!8m2!3d41.4021862!4d2.1368917!16s%2Fg%2F11fz1vk4y4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJX1BQjQ2YpBIR4JfmsbgP6F4&hl=es';

export const phoneHref = 'tel:+34654111644';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a jueves abre de 9:30 a 18:30 en un solo turno; el viernes abre a las 10:00, el
 * sábado abre de 10:00 a 16:00 y el domingo de 10:00 a 14:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 18:30',
		shifts: [{ open: '9:30', close: '18:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 18:30',
		shifts: [{ open: '9:30', close: '18:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 18:30',
		shifts: [{ open: '9:30', close: '18:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 18:30',
		shifts: [{ open: '9:30', close: '18:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 18:30',
		shifts: [{ open: '10:00', close: '18:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 16:00',
		shifts: [{ open: '10:00', close: '16:00' }],
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
	'De lunes a jueves de 9:30 a 18:30; viernes de 10:00 a 18:30; sábado de 10:00 a 16:00; domingo de 10:00 a 14:00';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada y figura como no disponible: el aparcamiento adaptado («No hay
 * aparcamiento accesible con silla de ruedas»). La ficha no publica ningún otro.
 */
export const accesibilidad = [
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
		text: 'Atención de 10 y pedidos y flores perfectos!!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muchas gracias por el trato recibido y por hacer las cosas con tanto mimo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente atención, Carolina es muy amable y te ayuda en lo que necesites.',
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
		question: '¿Dónde está Floristeria Las 3 Orquídeas?',
		answer:
			'En la Rda. Gral. Mitre, 129, con código postal 08022, en Barcelona, en Sarrià-Sant Gervasi. Publica el plus code C42P+VQ Barcelona y las coordenadas 41.4021862, 2.1368917.',
	},
	{
		question: '¿Cuál es el horario de Floristeria Las 3 Orquídeas?',
		answer:
			'La ficha publica de lunes a jueves de 9:30 a 18:30, el viernes de 10:00 a 18:30, el sábado de 10:00 a 16:00 y el domingo de 10:00 a 14:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «Disponemos de plantas de interior y exterior para el hogar. Realizamos trabajos de jardinería a domicilio o en tienda de plantas ornamentales. Ramos de novia personalizados // Arreglos florales // Arreglos funerarios. Nos encargamos de la decoración de tu hogar nuestros presupuestos son sin compromiso. Ven y visítanos!! La amabilidad y el carisma es nuestra filosofía. Demuestra tu cariño con flores 💐»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 654 11 16 44. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Rda. Gral. Mitre, 129, en Sarrià-Sant Gervasi de Barcelona, y las coordenadas 41.4021862, 2.1368917. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C42P+VQ Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como no disponible: el aparcamiento adaptado («No hay aparcamiento accesible con silla de ruedas»). No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 35 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de atención de 10 con pedidos y flores perfectos, de trato con tanto mimo y de excelente atención de Carolina. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Ronda General Mitre de Barcelona, en Sarrià-Sant Gervasi. Plantas de interior y exterior, ramos de novia y arreglos florales.',
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
