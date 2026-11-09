/**
 * Datos de Les Flors de Mary
 * (Carrer Gran de Sant Andreu, 446 · 08030 Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/les-flors-de-mary',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Les Flors de Mary',
	shortName: 'Mary',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer Gran de Sant Andreu, 446, Sant Andreu, 08030
	 * Barcelona». «Sant Andreu» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer Gran de Sant Andreu, 446',
	district: 'Sant Andreu',
	postalCode: '08030',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 631 48 52 87',
	latitude: 41.441191,
	longitude: 2.1884423,
	/** Plus code que publica la ficha (completo: 8FH4C5RQ+F9). */
	plusCode: 'C5RQ+F9 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 53 reseñas). */
	rating: 4.7,
	reviewCount: 53,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'La transparencia, el trato personal y el compromiso son claves en nuestra manera de trabajar. Queremos ser tu servicio de JARDINERIA: EMPRESAS DE SERVICIOS. Ofrecemos las mejores técnicas, las herramientas y el personal más profesional. Los profesionales de nuestra empresa apostamos por superarnos en cada servicio.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Les+Flors+de+Mary/@41.441191,2.1884423,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bce0c6531ced:0x70e87bdab1dc7cd0!8m2!3d41.441191!4d2.1884423!16s%2Fg%2F11cnr_dwvh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7RxTxuC8pBIR0Hzcsdp76HA&hl=es';

export const phoneHref = 'tel:+34631485287';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:00 a 15:00 y tarde de 17:00 a 20:00); el
 * sábado abre solo por la mañana (10:00 a 15:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 15:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '15:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 15:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '15:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 15:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '15:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 15:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '15:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 15:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '15:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 15:00',
		shifts: [{ open: '10:00', close: '15:00' }],
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
	'Dos turnos de lunes a viernes (10:00–15:00 y 17:00–20:00); sábado de 10:00 a 15:00; domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas y todas figuran como no disponibles: acceso para sillas de ruedas
 * («No hay acceso para sillas de ruedas»), aseo adaptado («Sin aseo adaptado para
 * discapacitados»), aparcamiento adaptado («No hay aparcamiento accesible con silla de
 * ruedas») y bucle magnético («No tiene bucle magnético asistencial»).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: false },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Buena atención, bonitos arreglos, bien situado y muy económico ☺️',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muchas Gracias por el excelente servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un trato amigable y siempre pendiente de la necesidad del cliente.',
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
		question: '¿Dónde está Les Flors de Mary?',
		answer:
			'En el Carrer Gran de Sant Andreu, 446, con código postal 08030, en Barcelona, en Sant Andreu. Publica el plus code C5RQ+F9 Barcelona y las coordenadas 41.441191, 2.1884423.',
	},
	{
		question: '¿Cuál es el horario de Les Flors de Mary?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 15:00 y tarde de 17:00 a 20:00. El sábado abre solo por la mañana, de 10:00 a 15:00, y el domingo cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «La transparencia, el trato personal y el compromiso son claves en nuestra manera de trabajar. Queremos ser tu servicio de JARDINERIA: EMPRESAS DE SERVICIOS. Ofrecemos las mejores técnicas, las herramientas y el personal más profesional. Los profesionales de nuestra empresa apostamos por superarnos en cada servicio.»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 631 48 52 87. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Gran de Sant Andreu, 446, en Sant Andreu de Barcelona, y las coordenadas 41.441191, 2.1884423. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C5RQ+F9 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y todas figuran como no disponibles: acceso, aseo y aparcamiento adaptados y bucle magnético asistencial.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 53 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de buena atención con bonitos arreglos y muy económico, de excelente servicio y de trato amigable pendiente del cliente. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer Gran de Sant Andreu de Barcelona, en Sant Andreu. Bonitos arreglos y trato personal, según sus reseñas.',
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
