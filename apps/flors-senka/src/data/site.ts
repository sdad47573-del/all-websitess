/**
 * Datos de FLORS SENKA (Carrer de Falguera, 94 · 08980 Sant Feliu de Llobregat).
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
	siteUrl: 'https://flors-senka.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'FLORS SENKA',
	shortName: 'SENKA',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «FLORS SENKA, Carrer de Falguera, 94,
	 * 08980 Sant Feliu de Llobregat, Barcelona».
	 */
	streetAddress: 'Carrer de Falguera, 94',
	postalCode: '08980',
	city: 'Sant Feliu de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 936 66 71 40',
	latitude: 41.3829829,
	longitude: 2.0412141,
	/** Plus code que publica la ficha (corto; el completo es 8FH292MR+5F). */
	plusCode: '92MR+5F Sant Feliu de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 43 reseñas). */
	rating: 4.6,
	reviewCount: 43,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/FLORS+SENKA/@41.3829829,2.0412141,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49bb352a4aec5:0x8e76aeaf81ea9462!8m2!3d41.3829829!4d2.0412141!16s%2Fg%2F1ptxjtc7d?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxa6kUrObpBIRYpTqga-udo4&hl=es';

export const phoneHref = 'tel:+34936667140';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:30 a 13:45, salvo el martes que cierra a
 * las 13:30, y tarde de 17:00 a 20:00). El sábado abre solo por la mañana (9:15–14:00)
 * y el domingo de 10:00 a 14:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 13:45 · 17:00 – 20:00',
		shifts: [
			{ open: '09:30', close: '13:45' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 13:45 · 17:00 – 20:00',
		shifts: [
			{ open: '09:30', close: '13:45' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 13:45 · 17:00 – 20:00',
		shifts: [
			{ open: '09:30', close: '13:45' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 13:45 · 17:00 – 20:00',
		shifts: [
			{ open: '09:30', close: '13:45' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:15 – 14:00',
		shifts: [{ open: '09:15', close: '14:00' }],
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
	'Lun–vie dos turnos (9:30–13:45 y 17:00–20:00, mar hasta las 13:30); sáb 9:15–14:00; dom 10:00–14:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha solo publica una entrada: el local tiene acceso para sillas de ruedas.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Trato, muy bueno las flores muy frescas los ramos muy bonitos y económicos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Es Genial, todo lo que pides lo hace, trato exquisito y personalizado.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me hicieron quedar muy bien.',
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
			'En el Carrer de Falguera, 94, con código postal 08980, en Sant Feliu de Llobregat (Barcelona). Publica el plus code 92MR+5F Sant Feliu de Llobregat y las coordenadas 41.3829829, 2.0412141.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de lunes a viernes (mañana de 9:30 a 13:45, salvo el martes que cierra a las 13:30, y tarde de 17:00 a 20:00), sábado solo por la mañana de 9:15 a 14:00 y domingo de 10:00 a 14:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de flores muy frescas con ramos muy bonitos y económicos, de trato exquisito y personalizado que hace todo lo que pides, y de quedar muy bien con sus ramos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 66 71 40. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Falguera, 94, en Sant Feliu de Llobregat, y las coordenadas 41.3829829, 2.0412141. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 92MR+5F Sant Feliu de Llobregat.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: el local tiene acceso para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 43 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de flores muy frescas con ramos muy bonitos y económicos, de trato exquisito y personalizado, y de quedar muy bien. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer de Falguera de Sant Feliu de Llobregat. Flores muy frescas, ramos muy bonitos y económicos, y trato exquisito y personalizado, según sus reseñas.',
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
