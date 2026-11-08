/**
 * Datos de El Rincón de Castre (Calle Burgo Nuevo, 8 · 24001 León).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni precios, así que no se reproduce
 * ninguno. Tampoco publica terraza, aparcamiento ni otros servicios del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-rincon-de-castre.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Rincón de Castre',
	shortName: 'El Rincón de Castre',
	/** Única categoría que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Descripción que publica el propio titular en la ficha. */
	description: 'Especialidad en carnes a la parrilla.',
	/** Dirección publicada en la ficha, sin abreviaturas. */
	streetAddress: 'Calle Burgo Nuevo, 8',
	postalCode: '24001',
	city: 'León',
	province: 'León',
	region: 'Castilla y León',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 987 44 00 61',
	latitude: 42.5972295,
	longitude: -5.572438,
	/** Plus code que publica la ficha. */
	plusCode: 'HCWH+V2 León',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 322 reseñas). */
	rating: 4.8,
	reviewCount: 322,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Rinc%C3%B3n+de+Castre/@42.5972295,-5.572438,17z/data=!3m1!4b1!4m6!3m5!1s0xd379b4218865a19:0xcf7acd092bedaa0f!8m2!3d42.5972295!4d-5.572438!16s%2Fg%2F11sbc6g_r7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJGVqGGEKbNw0RD6rtKwnNes8&hl=es';

export const phoneHref = 'tel:+34987440061';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El local
 * sirve un único turno de mediodía, de lunes a sábado de 13:00 a 17:00, y cierra el domingo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
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
export const hoursSummary = 'Comidas de lunes a sábado, de 13:00 a 17:00 · domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figuran dos entradas, ambas como disponibles: acceso y asientos adaptados para sillas de
 * ruedas. La ficha no publica aseo adaptado ni aparcamiento adaptado, así que no se añaden.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos jamón, ensalada mixta, entrecot, solomillo, pulpo… y muy muy bueno!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'No os perdáis la cecina premium, la lengua y la carne a la brasa.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente servicio unas carnes deliciosas muy buena atención',
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
		question: '¿Dónde está El Rincón de Castre?',
		answer:
			'En la calle Burgo Nuevo, 8, con código postal 24001, en León (Castilla y León). La ficha publica el plus code HCWH+V2 León y las coordenadas 42.5972295, -5.572438.',
	},
	{
		question: '¿Cuál es el horario de El Rincón de Castre?',
		answer:
			'Sirve comidas de lunes a sábado de 13:00 a 17:00 y cierra el domingo. Es el horario publicado en la ficha consultada el 17 de octubre de 2026: puede cambiar, así que conviene confirmar por teléfono llamando al 987 44 00 61.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y el titular describe la casa como «Especialidad en carnes a la parrilla». Sus reseñas destacadas hablan de jamón, ensalada mixta, entrecot, solomillo, pulpo, cecina, lengua y carne a la brasa. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 987 44 00 61.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Burgo Nuevo, 8 y las coordenadas 42.5972295, -5.572438. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HCWH+V2 León.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos servicios de accesibilidad, ambos disponibles: acceso para sillas de ruedas y asientos adaptados. No publica aseo adaptado ni aparcamiento adaptado, así que esta web no puede confirmarlos.',
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
		'Restaurante de carnes a la parrilla en la calle Burgo Nuevo, 8 de León, con comidas de lunes a sábado.',
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
	/*
	 * Sin `servesCuisine`: Google solo publica la categoría «Restaurante». La especialidad en
	 * carnes a la parrilla es la descripción del titular, no una categoría de cocina.
	 */
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
