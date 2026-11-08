/**
 * Datos de Floripondio decoracion floral
 * (Calle Venecia, 2 · 41003 Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code,
 * horario semanal y accesibilidad.
 *
 * La ficha no publica distrito ni web propia, así que no se reproduce ninguno de ellos. La
 * descripción y los 3 extractos de reseñas se reproducen literalmente, con sus erratas, y se citan
 * como tales en la web. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floripondio.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (sin tilde, como en la ficha). */
	name: 'Floripondio decoracion floral',
	shortName: 'Floripondio',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floripondio decoracion floral, C. Venecia, 2,
	 * 41003 Sevilla». La ficha no publica distrito.
	 */
	streetAddress: 'Calle Venecia, 2',
	district: '',
	postalCode: '41003',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 696 28 45 67',
	latitude: 37.3948539,
	longitude: -5.9796646,
	/** Plus code que publica la ficha (corto; el completo es 8C9P92VC+W4). */
	plusCode: '92VC+W4 Sevilla',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 77 reseñas). */
	rating: 4.8,
	reviewCount: 77,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas y espacios, y se cita como tal en la web. Incluye
 * un fragmento ajeno al negocio («Mantén pulsado un clip para fijarlo…») tal como aparece
 * publicado en la ficha, sin corregirlo ni omitirlo.
 */
export const descripcionLocal = [
	'Flores que convierten momentos en recuerdos.',
	'En nuestra floristería ponemos pasión , creatividad y mucho cariño en casa composición.',
	'Creamos Ramos de novias, decoracacion floral para bodas y eventos , ramos personalizados, centros de flores diseñados para ocasiones especiales. Siempre cuidando cada detalle y adaptándolo a tu estilo.',
	'Mantén pulsado un clip para fijarlo. Los clips no fijados se eliminarán al cabo de una hora.',
	'*Flores seleccionadas con mimo',
	'*Diseño personalizado',
	'*Especialistas en ramos y centros',
	'*Detalle floral para sorprender',
	'*Decoración floral cuidada cuidada hasta el último detalle.',
	'Cuenta que tienes en mente y nosotros lo convertimos en flores.',
	'Ven a conocernos y descubre todo lo que podemos crear para ti',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floripondio+decoracion+floral/@37.3948539,-5.9796646,17z/data=!3m1!4b1!4m6!3m5!1s0xd126ff8a21e6ca1:0xf8788043f07da769!8m2!3d37.3948539!4d-5.9796646!16s%2Fg%2F11qpb_p1b5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJoWweovhvEg0Raad98EOAePg&hl=es';

export const phoneHref = 'tel:+34696284567';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Lunes, miércoles, jueves y viernes abre dos turnos (mañana y tarde de 18:00 a 20:00; el jueves
 * y el viernes la mañana cierra a las 14:30); el martes abre solo por la mañana (10:00 a 14:00);
 * el sábado abre solo por la mañana (10:00 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:30 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:30' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:30 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:30' },
			{ open: '18:00', close: '20:00' },
		],
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
	'Dos turnos lunes, miércoles, jueves y viernes (mañana y 18:00–20:00); martes y sábado solo mañana (10:00–14:00); domingo cerrado';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el acceso para sillas de ruedas figura como disponible; el aseo adaptado y
 * los asientos adaptados figuran como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Fui para preguntar por macetas de bonsai y me fui sabiendo más de lo que sabía.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Unos ramos preciosos con flores maravillosas y a unos precios estupendos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Solo decir que muchas gracias, seguiré yendo como siempre!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica distrito, web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floripondio?',
		answer:
			'En la Calle Venecia, 2, con código postal 41003, en Sevilla. La ficha no publica distrito. Publica el plus code 92VC+W4 Sevilla y las coordenadas 37.3948539, -5.9796646.',
	},
	{
		question: '¿Cuál es el horario de Floripondio?',
		answer:
			'La ficha publica dos turnos los lunes, miércoles, jueves y viernes (mañana y tarde de 18:00 a 20:00; jueves y viernes la mañana cierra a las 14:30). El martes y el sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que crean ramos de novia, decoración floral para bodas y eventos, ramos personalizados y centros de flores para ocasiones especiales, cuidando cada detalle y adaptándolo a tu estilo.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 696 28 45 67. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Venecia, 2, en Sevilla, y las coordenadas 37.3948539, -5.9796646. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 92VC+W4 Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible, pero el aseo adaptado y los asientos adaptados figuran como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 77 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de salir sabiendo más sobre bonsáis, de ramos preciosos a precios estupendos y de volver como siempre. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Venecia, 2 de Sevilla. Ramos de novia, decoración floral para bodas y eventos, ramos personalizados y centros de flores.',
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
