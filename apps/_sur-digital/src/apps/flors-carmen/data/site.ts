/**
 * Datos de Flors Carmen (Trav. de Dalt, 98 · Gràcia, Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/flors-carmen',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flors Carmen',
	shortName: 'Carmen',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Flors Carmen, Trav. de Dalt, 98, Gràcia,
	 * 08024 Barcelona». «Gràcia» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Trav. de Dalt, 98',
	district: 'Gràcia',
	postalCode: '08024',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 696 60 22 84',
	latitude: 41.4109702,
	longitude: 2.1575575,
	/** Plus code que publica la ficha (corto; el completo es 8FH3C565+92). */
	plusCode: 'C565+92 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 23 reseñas). */
	rating: 4.3,
	reviewCount: 23,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flors+Carmen/@41.4109702,2.1575575,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2ba7f337e73:0x77b7be73b13774f3!8m2!3d41.4109702!4d2.1575575!16s%2Fg%2F11d_d51jw_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJc34zf7qipBIR83Q3sXO-t3c&hl=es';

export const phoneHref = 'tel:+34696602284';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription = 'Flores y plantas';

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a miércoles y el viernes abre dos turnos (mañana de 11:00 a 13:30 y tarde de
 * 17:30 a 20:30); el jueves abre a las 11:30 en vez de a las 11:00. El sábado y el domingo
 * abre solo por la mañana (11:00–13:30).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 13:30 · 17:30 – 20:30',
		shifts: [
			{ open: '11:00', close: '13:30' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 13:30 · 17:30 – 20:30',
		shifts: [
			{ open: '11:00', close: '13:30' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 13:30 · 17:30 – 20:30',
		shifts: [
			{ open: '11:00', close: '13:30' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:30 – 13:30 · 17:30 – 20:30',
		shifts: [
			{ open: '11:30', close: '13:30' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 13:30 · 17:30 – 20:30',
		shifts: [
			{ open: '11:00', close: '13:30' },
			{ open: '17:30', close: '20:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 13:30',
		shifts: [{ open: '11:00', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 13:30',
		shifts: [{ open: '11:00', close: '13:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun–mié y vie dos turnos (11:00–13:30 y 17:30–20:30, jue desde las 11:30); sáb y dom 11:00–13:30';

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
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Plantas de excelente calidad y atención exquisita: volveré sin lugar a dudas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy bonita floristeria con una linda decoracion y buen gusto!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El señor que atiende es muy amable y carismático, además tiene buenos precios.',
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
			'En la Trav. de Dalt, 98, con código postal 08024, en Barcelona, en Gràcia. Publica el plus code C565+92 Barcelona y las coordenadas 41.4109702, 2.1575575.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos los lunes, martes, miércoles y viernes (mañana de 11:00 a 13:30 y tarde de 17:30 a 20:30), el jueves con apertura a las 11:30 en vez de a las 11:00, y sábado y domingo solo por la mañana de 11:00 a 13:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente: «Flores y plantas». Las reseñas que destaca hablan de plantas de excelente calidad con atención exquisita, de una floristería muy bonita con linda decoración y buen gusto, y de un trato muy amable y carismático con buenos precios.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 696 60 22 84. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Trav. de Dalt, 98, en Gràcia de Barcelona, y las coordenadas 41.4109702, 2.1575575. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C565+92 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 23 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de plantas de excelente calidad con atención exquisita, de una floristería muy bonita con linda decoración y buen gusto, y de un trato muy amable y carismático con buenos precios. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Trav. de Dalt de Barcelona, en Gràcia. Flores y plantas: excelente calidad y atención exquisita, según sus reseñas.',
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
