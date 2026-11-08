/**
 * Datos de Floristeria Myriam
 * (Calle Magistrado Salvador Barbera · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Floristeria». La ficha no
 * publica número de portal, así que la dirección queda sin número. El endpoint de vista previa no
 * incluía ningún extracto literal de reseñas (respuestas estables de ~29 KB sin bloque de reseñas),
 * así que `reviews` queda vacío y la portada solo enseña la tarjeta con la valoración, como en otras
 * webs del repositorio. La ficha no publica web propia ni precios, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-myriam.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, sin tilde. */
	name: 'Floristeria Myriam',
	shortName: 'Myriam',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Myriam, C. Magistrado Salvador Barbera,
	 * Bailén-Miraflores, 29010 Málaga». Aquí se desarrolla «C.» a «Calle», como en el resto del
	 * repositorio. La ficha no publica número de portal. «Bailén-Miraflores» es el distrito y se
	 * conserva aparte.
	 */
	streetAddress: 'Calle Magistrado Salvador Barbera',
	district: 'Bailén-Miraflores',
	postalCode: '29010',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 659 87 91 02',
	latitude: 36.7243477,
	longitude: -4.443716,
	/** Plus code que publica la ficha (corto; el completo es 8C9PPHF4+PG). */
	plusCode: 'PHF4+PG Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 47 reseñas). */
	rating: 4.5,
	reviewCount: 47,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web. Es un aviso fechado (sábado 4 y domingo
 * 5 de mayo, por el Día de la Madre) que confirma los encargos en el 659879102.
 */
export const descripcionLocal = [
	'Abrimos sábado 4 de mayo y domingo 5 de mayo todo el dia por el día de la MADRE ENCARGOS AL 659879102',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Myriam/@36.7243477,-4.443716,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70b8a083cb3:0xe8d23d9abc7faa09!8m2!3d36.7243477!4d-4.443716!16s%2Fg%2F11bxddrl75?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJszwIigv3cg0RCap_vJo90ug&hl=es';

export const phoneHref = 'tel:+34659879102';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado
 * abre solo por la mañana (10:00 a 14:00); de martes a viernes abre dos turnos (mañana de 10:00 a
 * 14:00 y tarde de 17:30 a 20:00); el domingo y el lunes cierra.
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
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:30', close: '20:00' },
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
	'Dos turnos de martes a viernes (10:00–14:00 y 17:30–20:00); sábado solo por la mañana; domingo y lunes cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de reseñas destacadas.
 *
 * El endpoint de vista previa no devolvía ningún extracto (respuestas estables sin bloque de
 * reseñas), así que queda vacío y la portada solo enseña la tarjeta con la valoración.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristeria Myriam?',
		answer:
			'En la Calle Magistrado Salvador Barbera, con código postal 29010, en Málaga, en Bailén-Miraflores. La ficha no publica número de portal. Publica el plus code PHF4+PG Málaga y las coordenadas 36.7243477, -4.443716.',
	},
	{
		question: '¿Cuál es el horario de Floristeria Myriam?',
		answer:
			'La ficha publica dos turnos de martes a viernes: mañana de 10:00 a 14:00 y tarde de 17:30 a 20:00. El sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo y el lunes cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha es un aviso sobre encargos para el Día de la Madre en el 659 87 91 02, que es el mismo teléfono que publica la ficha.',
	},
	{
		question: '¿Hacen encargos?',
		answer:
			'Sí, según su propia descripción en la ficha: los encargos se piden en el 659 87 91 02. Para pedirlo, lo más rápido es llamar a ese mismo número.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 659 87 91 02. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Magistrado Salvador Barbera, en Bailén-Miraflores de Málaga (sin número de portal), y las coordenadas 36.7243477, -4.443716. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PHF4+PG Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 47 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Magistrado Salvador Barbera de Málaga, en Bailén-Miraflores. Encargos en el 659 87 91 02.',
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
