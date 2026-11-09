/**
 * Datos de Floristeria Rehoboth. 利沛伯花艺店 (Carrer de Balmes, 292 · Sarrià-Sant Gervasi, Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/floristeria-rehoboth',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con su nombre en chino. */
	name: 'Floristeria Rehoboth. 利沛伯花艺店',
	shortName: 'Rehoboth',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Rehoboth. 利沛伯花艺店, Carrer de Balmes, 292,
	 * Sarrià-Sant Gervasi, 08006 Barcelona». «Sarrià-Sant Gervasi» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Balmes, 292',
	district: 'Sarrià-Sant Gervasi',
	postalCode: '08006',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 665 26 53 58',
	latitude: 41.401953,
	longitude: 2.1464567,
	/** Plus code que publica la ficha (corto; el completo es 8FH3C42W+QH). */
	plusCode: 'C42W+QH Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 33 reseñas). */
	rating: 4.8,
	reviewCount: 33,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Rehoboth.+%E5%88%A9%E6%B2%B3%E4%BC%AF%E8%8A%B1%E8%89%BA%E5%BA%97/@41.401953,2.1464567,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2a03cc44e87:0x998aec6962fb63fc!8m2!3d41.401953!4d2.1464567!16s%2Fg%2F11t28cb7fs?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJh07EPKCipBIR_GP7Ymnsipk&hl=es';

export const phoneHref = 'tel:+34665265358';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De domingo a viernes abre de 10:00 a 21:30. El sábado abre de 9:00 a 21:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 21:30',
		shifts: [{ open: '09:00', close: '21:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 21:30',
		shifts: [{ open: '10:00', close: '21:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dom–vie 10:00–21:30; sáb 9:00–21:30, todos los días';

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
		text: 'El trato y servicio es muy grato, la mujer que me atiende siempre es un amor.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Quedó un ramo muy bonito.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me atendió al momento, me dio todas las facilidades para poder regalar un ramo.',
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
			'En el Carrer de Balmes, 292, con código postal 08006, en Barcelona, en Sarrià-Sant Gervasi. Publica el plus code C42W+QH Barcelona y las coordenadas 41.401953, 2.1464567.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica de domingo a viernes de 10:00 a 21:30 y el sábado de 9:00 a 21:30: abre todos los días. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de un trato muy grato, de un ramo muy bonito y de facilidades para regalar un ramo con atención al momento.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 665 26 53 58. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Balmes, 292, en Sarrià-Sant Gervasi de Barcelona, y las coordenadas 41.401953, 2.1464567. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C42W+QH Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas, pero no hay aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 33 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un trato muy grato, de un ramo muy bonito y de atención al momento con todas las facilidades para regalar un ramo. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer de Balmes de Barcelona, en Sarrià-Sant Gervasi. Trato muy grato y ramos muy bonitos, según sus reseñas.',
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
