/**
 * Datos de Flors Lin
 * (Carrer de Juan de Sada, 50 · 08028 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flors-lin.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flors Lin',
	shortName: 'Lin',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer de Juan de Sada, 50, Sants-Montjuïc, 08028
	 * Barcelona». «Sants-Montjuïc» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Juan de Sada, 50',
	district: 'Sants-Montjuïc',
	postalCode: '08028',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 933 30 66 17',
	latitude: 41.3782828,
	longitude: 2.1277029,
	/** Plus code que publica la ficha (completo: 8FH494HH+83). */
	plusCode: '94HH+83 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 81 reseñas). */
	rating: 5,
	reviewCount: 81,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flors+Lin/@41.3782828,2.1277029,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4988b09905f0f:0x57c361ef03e30b6a!8m2!3d41.3782828!4d2.1277029!16s%2Fg%2F11b7stk1ng?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJD1-QCYuYpBIRagvjA-9hw1c&hl=es';

export const phoneHref = 'tel:+34933306617';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Cada día abre a una hora distinta por la mañana (domingo 10:00, lunes 12:00, martes y jueves
 * 10:00, miércoles y viernes 11:00, sábado 10:00) y cierra entre las 14:30 y las 20:30 según el
 * día: domingo hasta las 14:30, sábado hasta las 15:30 y el resto hasta las 20:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 20:30',
		shifts: [{ open: '12:00', close: '20:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 20:30',
		shifts: [{ open: '10:00', close: '20:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 20:30',
		shifts: [{ open: '11:00', close: '20:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 20:30',
		shifts: [{ open: '10:00', close: '20:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 20:30',
		shifts: [{ open: '11:00', close: '20:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 15:30',
		shifts: [{ open: '10:00', close: '15:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 14:30',
		shifts: [{ open: '10:00', close: '14:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 10:00 a 20:30 (lunes desde las 12:00; miércoles y viernes desde las 11:00); sábado de 10:00 a 15:30; domingo de 10:00 a 14:30';

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
		text: 'Muy amable, mucho surtido de flores y precios asequibles',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lin siempre es muy simpática y las flores son muy bonitas y a muy buen precio!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Siempre compro ramos de flores frescas allí.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Flors Lin?',
		answer:
			'En el Carrer de Juan de Sada, 50, con código postal 08028, en Barcelona, en Sants-Montjuïc. Publica el plus code 94HH+83 Barcelona y las coordenadas 41.3782828, 2.1277029.',
	},
	{
		question: '¿Cuál es el horario de Flors Lin?',
		answer:
			'La ficha publica de lunes a viernes de 10:00 a 20:30 (el lunes abre a las 12:00 y el miércoles y el viernes a las 11:00), el sábado de 10:00 a 15:30 y el domingo de 10:00 a 14:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de mucho surtido de flores con precios asequibles, de Lin siempre muy simpática con flores muy bonitas a muy buen precio y de ramos de flores frescas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 30 66 17. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Juan de Sada, 50, en Sants-Montjuïc de Barcelona, y las coordenadas 41.3782828, 2.1277029. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 94HH+83 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible y el aparcamiento adaptado figura como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 81 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de trato muy amable con mucho surtido y precios asequibles, de Lin siempre muy simpática con flores muy bonitas a muy buen precio y de comprar siempre ramos de flores frescas allí. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer de Juan de Sada de Barcelona, en Sants-Montjuïc. Mucho surtido de flores con precios asequibles, según sus reseñas.',
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
