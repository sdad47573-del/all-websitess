/**
 * Datos de Restaurante Adonias (Calle Santa Nonia, 16 · 24003 León).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, perfiles sociales, carta ni precios, así
 * que no se reproduce ninguno. Tampoco publica terraza, menú ni otros servicios del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-adonias',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Adonias',
	shortName: 'Adonias',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa como
	 * categoría principal), «Restaurante mediterráneo» y «Restaurante de cocina española».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo', 'Restaurante de cocina española'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Sta. Nonia, 16»: aquí se
	 * desarrolla a «Calle Santa Nonia, 16», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Santa Nonia, 16',
	postalCode: '24003',
	city: 'León',
	province: 'León',
	region: 'Castilla y León',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 987 20 67 68',
	latitude: 42.5953681,
	longitude: -5.5720492,
	/** Plus code que publica la ficha. */
	plusCode: 'HCWH+45 León',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 320 reseñas). */
	rating: 4.6,
	reviewCount: 320,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Adonias/@42.5953681,-5.5720492,17z/data=!3m1!4b1!4m6!3m5!1s0xd379a99debf8ebf:0x76d2af50d72b6c46!8m2!3d42.5953681!4d-5.5720492!16s%2Fg%2F1tp30p2n?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJv46_3pmaNw0RRmwr11Cv0nY&hl=es';

export const phoneHref = 'tel:+34987206768';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El local sirve
 * comidas todos los días: el lunes desde las 12:30 y el resto desde las 13:00, siempre hasta las
 * 16:00. Solo hay cena los viernes y los sábados, de 20:00 a 23:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 16:00',
		shifts: [{ open: '12:30', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Comidas todos los días · cenas solo viernes y sábado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figuran dos entradas: los asientos adaptados para sillas de ruedas como disponibles y el
 * aparcamiento adaptado como no disponible. La ficha no publica acceso ni aseo adaptados.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay una de 4 y dos
 * de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buen restaurante , me encantó la cecina y el lechazo , buen trato .',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me pusieron un pequeño aperitivo (chorizo) lo que se agradece.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hemos ido por casualidad pero nos llevamos una grata sorpresa.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Adonias?',
		answer:
			'En la calle Santa Nonia, 16, con código postal 24003, en León (Castilla y León). La ficha publica el plus code HCWH+45 León y las coordenadas 42.5953681, -5.5720492.',
	},
	{
		question: '¿Cuál es el horario de Adonias?',
		answer:
			'Sirve comidas todos los días hasta las 16:00: el lunes desde las 12:30 y de martes a domingo desde las 13:00. Solo hay cenas los viernes y los sábados, de 20:00 a 23:30. Es el horario publicado en la ficha consultada el 17 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 987 20 67 68.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, restaurante mediterráneo y restaurante de cocina española. Tiene 4,6 sobre 5 con 320 reseñas, y en las reseñas que destaca se habla de la cecina, el lechazo y un aperitivo de chorizo. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 987 20 67 68.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Santa Nonia, 16 y las coordenadas 42.5953681, -5.5720492. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HCWH+45 León.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: los asientos adaptados para sillas de ruedas figuran como disponibles y el aparcamiento adaptado como no disponible. No publica acceso ni aseo adaptados, así que esta web no puede confirmarlos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante mediterráneo y de cocina española en la calle Santa Nonia, 16 de León, con comidas todos los días y cenas viernes y sábado.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	/* Las dos categorías de cocina que publica Google, traducidas a cocina. */
	servesCuisine: ['Mediterránea', 'Española'],
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
} as const;
