/**
 * Datos de Floristeria Bambú (Carrer de Berlín, 35 · Les Corts, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas, plus code
 * y horario semanal.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción del titular y
 * los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-bambu',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Bambú',
	shortName: 'Bambú',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Bambú, Carrer de Berlín, 35,
	 * Les Corts, 08014 Barcelona». «Les Corts» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Berlín, 35',
	district: 'Les Corts',
	postalCode: '08014',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 634 17 78 28',
	latitude: 41.382856,
	longitude: 2.1379165,
	/** Plus code que publica la ficha (corto; el completo es 8FH394MQ+45). */
	plusCode: '94MQ+45 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 113 reseñas). */
	rating: 4.6,
	reviewCount: 113,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Bamb%C3%BA/@41.382856,2.1379165,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4993f94e03555:0xeb3145c90042acb6!8m2!3d41.382856!4d2.1379165!16s%2Fg%2F11l8g5nfkn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJVTXglD-ZpBIRtqxCAMlFMes&hl=es';

export const phoneHref = 'tel:+34634177828';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se conserva con sus saltos de párrafo originales; la portada la reproduce por párrafos.
 */
export const ownerDescription =
	'Floristería Bambú es un estudio floral distintivo dedicado a llevar la belleza de la naturaleza a cada momento de tu vida. Ubicados en el corazón de Les Corts, nos apasiona crear arreglos florales impresionantes que cautivan los sentidos y elevan tus ocasiones especiales a alturas inolvidables.\n\nFloristería Bambú se especializa en la confección de arreglos florales a medida para una variedad de ocasiones, incluyendo bodas, cumpleaños, aniversarios, eventos corporativos y más. Nuestros hábiles floristas seleccionan minuciosamente las flores más frescas para crear arreglos que reflejen tu estilo único y la esencia.\n\nTransforma momentos en recuerdos con Floristería Bambú, donde cada flor cuenta una historia de belleza, pasión y celebración.';

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre jornada continua de 10:00 a 19:30. El lunes abre de 11:30 a 19:30,
 * el sábado solo por la mañana (10:00–14:00) y el domingo está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:30 – 19:30',
		shifts: [{ open: '11:30', close: '19:30' }],
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
		service: '10:00 – 19:30',
		shifts: [{ open: '10:00', close: '19:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 19:30',
		shifts: [{ open: '10:00', close: '19:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 19:30',
		shifts: [{ open: '10:00', close: '19:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
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
	'Mar–vie 10:00–19:30; lun 11:30–19:30; sáb 10:00–14:00; dom cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
];

/**
 * Distintivos que publica la ficha (con valor disponible).
 *
 * La ficha se identifica como negocio de propietarias mujeres y como amigable con la
 * comunidad LGBTQ+.
 */
export const distintivos = [
	'Se identifica como de propietarias mujeres',
	'Amigable con la comunidad LGBTQ+',
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Gran decoración 👌🏽 y excelente servicio, le encantó a mi novia el ramo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Domingo medidia fui a buscar un ramo de flores para regalar.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me hicieron un ramo genial para el cumpleaños de mi madre.',
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
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de Berlín, 35, con código postal 08014, en Barcelona, en Les Corts. Publica el plus code 94MQ+45 Barcelona y las coordenadas 41.382856, 2.1379165.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica jornada continua de martes a viernes de 10:00 a 19:30, lunes de 11:30 a 19:30, sábado solo por la mañana de 10:00 a 14:00 y domingo cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente que es un estudio floral que crea arreglos a medida para bodas, cumpleaños, aniversarios, eventos corporativos y más, con las flores más frescas. Las reseñas que destaca hablan de gran decoración con excelente servicio, de ramos para regalar y de un ramo genial para un cumpleaños.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 634 17 78 28. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Berlín, 35, en Les Corts de Barcelona, y las coordenadas 41.382856, 2.1379165. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 94MQ+45 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado. Además se identifica como negocio de propietarias mujeres y como amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 113 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de gran decoración con excelente servicio, de un ramo para regalar y de un ramo genial para un cumpleaños. El enlace de la valoración abre el listado completo en Google Maps.',
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
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Estudio floral en el Carrer de Berlín de Barcelona, en Les Corts. Arreglos florales a medida para bodas, cumpleaños y eventos.',
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
