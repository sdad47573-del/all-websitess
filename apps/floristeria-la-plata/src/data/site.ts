/**
 * Datos de Floristería La Plata (Carrer de Ramon Turró, 160 · Sant Martí, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-la-plata.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería La Plata',
	shortName: 'La Plata',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería La Plata, Carrer de Ramon Turró, 160,
	 * Sant Martí, 08005 Barcelona». «Sant Martí» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Ramon Turró, 160',
	district: 'Sant Martí',
	postalCode: '08005',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 600 59 28 72',
	latitude: 41.3972513,
	longitude: 2.1997662,
	/** Plus code que publica la ficha (corto; el completo es 8FH395WX+WW). */
	plusCode: '95WX+WW Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 90 reseñas). */
	rating: 4.6,
	reviewCount: 90,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+La+Plata/@41.3972513,2.1997662,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a31431c299ed:0xbb5e03890c7ac472!8m2!3d41.3972513!4d2.1997662!16s%2Fg%2F11b73sg4ts?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7ZnCMRSjpBIRcsR6DIkDXrs&hl=es';

export const phoneHref = 'tel:+34600592872';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre jornada continua de 11:00 a 20:00. El sábado abre solo por la
 * mañana (11:00–14:00) y el domingo de 10:00 a 14:00. El lunes está cerrado.
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
		service: '11:00 – 20:00',
		shifts: [{ open: '11:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 20:00',
		shifts: [{ open: '11:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 20:00',
		shifts: [{ open: '11:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 20:00',
		shifts: [{ open: '11:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 14:00',
		shifts: [{ open: '11:00', close: '14:00' }],
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
	'Mar–vie 11:00–20:00; sáb 11:00–14:00; dom 10:00–14:00; lun cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha solo publica una entrada: no hay aparcamiento adaptado para sillas de ruedas.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Te asesoran sobre cómo cuidar tus plantas y abre los fines de semana.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena atención y buen servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Y la atención y dedicación del encargado es espectacular.',
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
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de Ramon Turró, 160, con código postal 08005, en Barcelona, en Sant Martí. Publica el plus code 95WX+WW Barcelona y las coordenadas 41.3972513, 2.1997662.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica jornada continua de martes a viernes de 11:00 a 20:00, sábado solo por la mañana de 11:00 a 14:00 y domingo de 10:00 a 14:00; el lunes está cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de asesoramiento para cuidar las plantas, buena atención y buen servicio, y de la dedicación espectacular del encargado.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 600 59 28 72. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Ramon Turró, 160, en Sant Martí de Barcelona, y las coordenadas 41.3972513, 2.1997662. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95WX+WW Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 90 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de asesoramiento para cuidar las plantas con apertura los fines de semana, de buena atención y buen servicio, y de la atención y dedicación espectacular del encargado. El enlace de la valoración abre el listado completo en Google Maps.',
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
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en el Carrer de Ramon Turró de Barcelona, en Sant Martí. Asesoramiento para cuidar las plantas y trato espectacular, según sus reseñas.',
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
