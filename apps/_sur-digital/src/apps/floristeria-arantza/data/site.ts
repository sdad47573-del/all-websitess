/**
 * Datos de Floristeria Arantza Art Floral (Carrer de Biscaia, 329 · Sant Andreu, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfonos, categoría, valoración
 * con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas, plus code
 * y horario semanal.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción del titular y
 * los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-arantza',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Arantza Art Floral',
	shortName: 'Arantza',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Arantza Art Floral, Carrer de Biscaia, 329,
	 * Sant Andreu, 08027 Barcelona». «Sant Andreu» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Biscaia, 329',
	district: 'Sant Andreu',
	postalCode: '08027',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono principal publicado en la ficha (Arantza). */
	phone: '+34 625 13 60 36',
	/** Segundo teléfono que publica la propia descripción del titular (Laura). */
	phone2: '+34 628 47 80 53',
	latitude: 41.4151281,
	longitude: 2.1890756,
	/** Plus code que publica la ficha (corto; el completo es 8FH4C58Q+3J). */
	plusCode: 'C58Q+3J Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 91 reseñas). */
	rating: 4.5,
	reviewCount: 91,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Arantza+Art+Floral/@41.4151281,2.1890756,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a32955acb373:0x393788ec3b134f63!8m2!3d41.4151281!4d2.1890756!16s%2Fg%2F1tdsm37h?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJc7OsVSmjpBIRY08TO-yINzk&hl=es';

export const phoneHref = 'tel:+34625136036';
export const phone2Href = 'tel:+34628478053';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se conserva con sus saltos de línea originales; la portada la reproduce por párrafos.
 */
export const ownerDescription =
	'Floristería donde se realizan arreglos de flor natural y flor seca, venta de plantas de interior y exterior, asesoramiento...\nTambién tenemos una sección de complementos, anillos, pulseras y collares.\nLas encargadas del negocio somos Laura y Arantza.\nSomos centro de entrega y recogida de paquetes de UPS, GLS, iNPOST y PAACK\nNuestros teléfonos de contacto son:\n628478053 (Laura)\n625136036 (Arantza)';

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre jornada continua de 9:00 a 20:00. El sábado abre solo por la
 * mañana (9:00–14:00) y el domingo está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 20:00',
		shifts: [{ open: '09:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 14:00',
		shifts: [{ open: '09:00', close: '14:00' }],
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
	'Lun–vie 9:00–20:00; sáb 9:00–14:00; dom cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El local tiene acceso para sillas de ruedas y también aparcamiento adaptado.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
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
		text: 'He realizado compras puntuales, y voy muchas veces a recoger paquetes.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Fui por ser punto InPost y quien atiende realmente es super maja y atenta!',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Trato excelente y diseños exclusivos en ramos y composiciones florales.',
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
			'En el Carrer de Biscaia, 329, con código postal 08027, en Barcelona, en Sant Andreu. Publica el plus code C58Q+3J Barcelona y las coordenadas 41.4151281, 2.1890756.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica jornada continua de lunes a viernes de 9:00 a 20:00, sábado solo por la mañana de 9:00 a 14:00 y domingo cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente que realizan arreglos de flor natural y flor seca, venden plantas de interior y exterior, tienen una sección de complementos (anillos, pulseras y collares) y son centro de entrega y recogida de paquetes de UPS, GLS, iNPOST y PAACK. Las encargadas del negocio son Laura y Arantza.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'La ficha publica dos teléfonos de contacto: el 625 13 60 36 (Arantza) y el 628 47 80 53 (Laura). Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Biscaia, 329, en Sant Andreu de Barcelona, y las coordenadas 41.4151281, 2.1890756. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C58Q+3J Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el local tiene acceso para sillas de ruedas y también aparcamiento adaptado. Además se identifica como negocio de propietarias mujeres y como amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 91 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de compras puntuales y de recogida de paquetes, de atención maja y atenta como punto InPost, y de trato excelente con diseños exclusivos en ramos y composiciones florales. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Carrer de Biscaia de Barcelona, en Sant Andreu. Arreglos de flor natural y seca, plantas de interior y exterior, y punto de recogida de paquetes.',
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
