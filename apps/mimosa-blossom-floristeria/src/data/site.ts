/**
 * Datos de Mimosa Blossom Floristería
 * (Calle Huéscar, 14 · 29007 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * El endpoint de vista previa no incluía ningún extracto literal de reseñas (se reintentó diez
 * veces con respuestas estables de ~46 KB sin bloque de reseñas), así que `reviews` queda vacío y
 * la portada solo enseña la tarjeta con la valoración, como en otras webs del repositorio. La ficha
 * no publica web propia ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://mimosa-blossom-floristeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mimosa Blossom Floristería',
	shortName: 'Mimosa Blossom',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Mimosa Blossom Floristería, C. Huéscar, 14, Distrito
	 * Centro, 29007 Málaga». Aquí se desarrolla «C.» a «Calle», como en el resto del repositorio.
	 * «Distrito Centro» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Calle Huéscar, 14',
	district: 'Distrito Centro',
	postalCode: '29007',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 640 05 44 89',
	latitude: 36.718552,
	longitude: -4.4331227,
	/** Plus code que publica la ficha (corto; el completo es 8C9PPH98+CQ). */
	plusCode: 'PH98+CQ Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 32 reseñas). */
	rating: 4.9,
	reviewCount: 32,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Producción floral para eventos. Servicio personalizado para bodas. Decoración floral para hoteles y empresas.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mimosa+Blossom+Florister%C3%ADa/@36.718552,-4.4331227,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7d186a43dcd:0x241fbf6fd20801dc!8m2!3d36.718552!4d-4.4331227!16s%2Fg%2F11y3_f68rx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJzT2khtH3cg0R3AEI0m-_HyQ&hl=es';

export const phoneHref = 'tel:+34640054489';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. De lunes a
 * viernes abre en turno único de 10:00 a 18:00; el sábado y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
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
	'Turno único de lunes a viernes (10:00–18:00); sábado y domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible. El aseo adaptado y los asientos
 * adaptados figuran como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de reseñas destacadas.
 *
 * El endpoint de vista previa no devolvía ningún extracto (diez reintentos sin bloque de
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
		question: '¿Dónde está Mimosa Blossom Floristería?',
		answer:
			'En la Calle Huéscar, 14, con código postal 29007, en Málaga, en Distrito Centro. La ficha publica el plus code PH98+CQ Málaga y las coordenadas 36.718552, -4.4331227.',
	},
	{
		question: '¿Cuál es el horario de Mimosa Blossom Floristería?',
		answer:
			'La ficha publica turno único de lunes a viernes, de 10:00 a 18:00. El sábado y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha anuncia producción floral para eventos, servicio personalizado para bodas y decoración floral para hoteles y empresas.',
	},
	{
		question: '¿Hacen flores para bodas y eventos?',
		answer:
			'Sí, según su propia descripción en la ficha: producción floral para eventos y servicio personalizado para bodas, además de decoración floral para hoteles y empresas. Para pedirlo, lo más rápido es llamar al 640 05 44 89.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 640 05 44 89. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Huéscar, 14, en Distrito Centro de Málaga, y las coordenadas 36.718552, -4.4331227. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH98+CQ Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible, mientras que el aseo adaptado y los asientos adaptados figuran como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 32 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Calle Huéscar, 14 de Málaga, en Distrito Centro. Producción floral para eventos, servicio personalizado para bodas y decoración floral para hoteles y empresas.',
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
