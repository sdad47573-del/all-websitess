/**
 * Datos de Floristeria PlantArte Barcelona (Pg. de St. Gervasi, 26, Local · Sarrià-Sant Gervasi).
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
	siteUrl: 'https://www.sur-digital.com/floristeria-plantarte',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria PlantArte Barcelona',
	shortName: 'PlantArte',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria PlantArte Barcelona, Pg. de St. Gervasi, 26,
	 * Local, Sarrià-Sant Gervasi, 08022 Barcelona». «Sarrià-Sant Gervasi» es el distrito y se
	 * conserva aparte.
	 */
	streetAddress: 'Pg. de St. Gervasi, 26, Local',
	district: 'Sarrià-Sant Gervasi',
	postalCode: '08022',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 651 18 19 97',
	latitude: 41.4092526,
	longitude: 2.1350891,
	/** Plus code que publica la ficha (corto; el completo es 8FH2C45P+P2). */
	plusCode: 'C45P+P2 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 114 reseñas). */
	rating: 5,
	reviewCount: 114,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+PlantArte+Barcelona/@41.4092526,2.1350891,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4991ad7aa7101:0x25e4d0733ea436c!8m2!3d41.4092526!4d2.1350891!16s%2Fg%2F11p0dk1y7v?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJAXGq1xqZpBIRbEPqMwdNXgI&hl=es';

export const phoneHref = 'tel:+34651181997';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription = 'Tu floristería en Barcelona';

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre dos turnos (mañana de 10:00 a 14:00 y tarde de 16:00 a 20:00).
 * El lunes, el sábado y el domingo está cerrado.
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
		service: '10:00 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Cerrado',
		shifts: [],
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
	'Mar–vie dos turnos (10:00–14:00 y 16:00–20:00); lun, sáb y dom cerrado';

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
		text: 'Te tratan de maravilla y le ponen un montón de cariño a cada ramo y cada planta.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Volveré q encargarles un ramo sin ninguna duda!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me atendieron muy bien y captaron enseguida la idea que tenía.',
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
			'En el Pg. de St. Gervasi, 26, Local, con código postal 08022, en Barcelona, en Sarrià-Sant Gervasi. Publica el plus code C45P+P2 Barcelona y las coordenadas 41.4092526, 2.1350891.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de martes a viernes (mañana de 10:00 a 14:00 y tarde de 16:00 a 20:00) y cierre el lunes, el sábado y el domingo. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente: «Tu floristería en Barcelona». Las reseñas que destaca hablan de un trato de maravilla con mucho cariño en cada ramo y cada planta, de ganas de volver a encargar y de captar enseguida la idea del cliente.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 651 18 19 97. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pg. de St. Gervasi, 26, Local, en Sarrià-Sant Gervasi de Barcelona, y las coordenadas 41.4092526, 2.1350891. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C45P+P2 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: el local tiene acceso para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 114 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un trato de maravilla con mucho cariño en cada ramo y cada planta, de ganas de volver a encargar y de captar enseguida la idea del cliente. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Pg. de St. Gervasi de Barcelona, en Sarrià-Sant Gervasi. Tu floristería en Barcelona: trato de maravilla y mucho cariño en cada ramo.',
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
