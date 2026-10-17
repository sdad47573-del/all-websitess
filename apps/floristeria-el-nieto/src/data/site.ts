/**
 * Datos de Floristería el nieto
 * (Camino de San Rafael, 2 · 29006 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * El endpoint de vista previa no incluía ningún extracto literal de reseñas (respuestas estables de
 * ~31 KB sin bloque de reseñas), así que `reviews` queda vacío y la portada solo enseña la tarjeta
 * con la valoración, como en otras webs del repositorio. La ficha no publica web propia ni precios,
 * así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-el-nieto.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería el nieto',
	shortName: 'El nieto',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería el nieto, Cmo de S. Rafael, 2, Carretera de
	 * Cádiz, 29006 Málaga». Aquí se desarrolla «Cmo de S. Rafael» a «Camino de San Rafael», como en
	 * el resto del repositorio. «Carretera de Cádiz» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Camino de San Rafael, 2',
	district: 'Carretera de Cádiz',
	postalCode: '29006',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 744 60 27 04',
	latitude: 36.7118649,
	longitude: -4.4414763,
	/** Plus code que publica la ficha (corto; el completo es 8C9PPH65+PC). */
	plusCode: 'PH65+PC Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 20 reseñas). */
	rating: 4.2,
	reviewCount: 20,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Floristería el nieto,',
	'Todo tipo de arte floral y plantas , se hacen centros, ramos, coronas, ramos de novias , se adornan eventos, iglesias ,etc … plantas de interior e exterior, mucha variedad en plantas y flores ,envío a domicilio, (si alguna vez el negocio usted va y esta cerrado y pone que esta abierto perdone las molestias pero aveces ocurren imprevistos , y no se puede estar hay por ejemplo ir a medicos, que voy a menudo, y corriendo van a ponerme reseñas malas',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+el+nieto/@36.7118649,-4.4414763,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a5e5e5cb07:0xb3fd121cf1f3a2a3!8m2!3d36.7118649!4d-4.4414763!16s%2Fg%2F11rfbn8xzp?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJB8vl5aX3cg0Ro6Lz8RwS_bM&hl=es';

export const phoneHref = 'tel:+34744602704';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El sábado,
 * el domingo y el lunes abre solo por la mañana (8:30 a 14:00); de martes a viernes abre en
 * horario amplio de 8:30 a 20:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 14:00',
		shifts: [{ open: '8:30', close: '14:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 20:00',
		shifts: [{ open: '8:30', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 20:00',
		shifts: [{ open: '8:30', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 20:00',
		shifts: [{ open: '8:30', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 20:00',
		shifts: [{ open: '8:30', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 14:00',
		shifts: [{ open: '8:30', close: '14:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 14:00',
		shifts: [{ open: '8:30', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a viernes de 8:30 a 20:00; sábado, domingo y lunes solo por la mañana (8:30–14:00)';

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
		question: '¿Dónde está Floristería el nieto?',
		answer:
			'En el Camino de San Rafael, 2, con código postal 29006, en Málaga, en Carretera de Cádiz. La ficha publica el plus code PH65+PC Málaga y las coordenadas 36.7118649, -4.4414763.',
	},
	{
		question: '¿Cuál es el horario de Floristería el nieto?',
		answer:
			'La ficha publica horario amplio de martes a viernes, de 8:30 a 20:00. El sábado, el domingo y el lunes abre solo por la mañana, de 8:30 a 14:00. Es el horario de la ficha consultada el 17 de octubre de 2026; el propio titular avisa en su descripción de que a veces surgen imprevistos, así que conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha anuncia todo tipo de arte floral y plantas: centros, ramos, coronas, ramos de novias, adornos para eventos e iglesias, plantas de interior y exterior y envío a domicilio.',
	},
	{
		question: '¿Hacen ramos de novia y adornos para eventos?',
		answer:
			'Sí, según su propia descripción en la ficha: hacen centros, ramos, coronas y ramos de novias, y adornan eventos e iglesias. Para pedirlo, lo más rápido es llamar al 744 60 27 04.',
	},
	{
		question: '¿Hacen envíos a domicilio?',
		answer:
			'Sí, según su propia descripción en la ficha: hacen envío a domicilio. Para pedirlo, lo más rápido es llamar al 744 60 27 04.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 744 60 27 04. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Camino de San Rafael, 2, en Carretera de Cádiz de Málaga, y las coordenadas 36.7118649, -4.4414763. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH65+PC Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible, mientras que el aseo adaptado y los asientos adaptados figuran como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 20 reseñas. El endpoint de la ficha no incluía extractos literales de reseñas, así que aquí no se reproduce ninguno: el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en el Camino de San Rafael, 2 de Málaga, en Carretera de Cádiz. Arte floral, plantas, ramos de novia y envío a domicilio.',
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
