/**
 * Datos de Esens Restaurante & Arrocería (Av. de Oscar Esplà, N° 4 · 03581 L'Albir, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * Es la ficha con más categorías de este grupo de webs: tres, y las tres declaran comida, así que
 * las tres alimentan `servesCuisine`.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://esens-arroceria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Esens Restaurante & Arrocería',
	shortName: 'Esens',
	/** Primera de las tres categorías que publica Google: «Restaurante de cocina valenciana». */
	category: 'Restaurante de cocina valenciana',
	categories: ['Restaurante de cocina valenciana', 'Arrocería', 'Restaurante especializado en tapas'],
	/**
	 * Dirección publicada en la ficha: Av. de Oscar Esplà, N° 4 (03581 L'Albir).
	 *
	 * Se reproduce literal, con el «N°» que escribe Google. Lo que la ficha llama «L'Albir» es el
	 * núcleo de L'Alfàs del Pi, con el mismo código postal que `mamma-p`.
	 */
	streetAddress: 'Av. de Oscar Esplà, N° 4',
	postalCode: '03581',
	city: "L'Albir",
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un fijo. */
	phone: '+34 966 58 06 01',
	latitude: 38.57333,
	longitude: -0.0652977,
	/** Plus code que publica la ficha (Google lo escribe «El Albir», sin apóstrofo). */
	plusCode: 'HWFM+8V El Albir',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 1.054 reseñas). */
	rating: 4.7,
	reviewCount: 1054,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni recortarlo.
 */
export const descripcionLocal =
	'Restaurante & Arrocería, en pleno corazón de El Albir. Una propuesta de cocina mediterránea con especial atención a los arroces, con diferentes elaboraciones, cada una con su personalidad y sus propios matices. Producto, sabor y un servicio cuidado en un ambiente agradable y acogedor.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Esens+Restaurante+%26+Arrocer%C3%ADa/@38.57333,-0.0652977,17z/data=!3m1!4b1!4m6!3m5!1s0xd62018f9eb9464b:0xd958556f6c73743a!8m2!3d38.57333!4d-0.0652977!16s%2Fg%2F11h07_nl0m?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJS0a5no8BYg0ROnRzbG9VWNk&hl=es';

/** Es un fijo (966 58 06 01), y así se publica el enlace de llamada. */
export const phoneHref = 'tel:+34966580601';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local abre un solo turno de mediodía, de 12:00 a 17:30, todos los días menos
 * el miércoles, que cierra.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 12:00 a 17:30 todos los días menos el miércoles, que cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Buena calidad-precio, buena cocina, buena materia prima y excelente servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos pulpo, croquetas y arroz.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Recomiendo la pata de pulpo y la tarta de queso muy rica también.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta inventa una tarifa ni un menú.
 */
export const faqs = [
	{
		question: '¿Dónde está Esens Restaurante & Arrocería?',
		answer:
			"En la Av. de Oscar Esplà, N° 4, con código postal 03581, en L'Albir (Alicante). La ficha publica el plus code HWFM+8V El Albir y las coordenadas 38.57333, -0.0652977.",
	},
	{
		question: '¿Cuál es el horario de Esens?',
		answer:
			'La ficha publica un solo turno de mediodía, de 12:00 a 17:30, todos los días menos el miércoles, que cierra. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica con tres categorías: cocina valenciana, arrocería y restaurante especializado en tapas. Tiene 4,7 sobre 5 con 1.054 reseñas, y el propio local describe una propuesta de cocina mediterránea con especial atención a los arroces, cada uno con su personalidad, en un ambiente agradable y acogedor. En las reseñas que destaca se habla de la calidad-precio, de la materia prima y del servicio, y se citan el pulpo, las croquetas, el arroz y la tarta de queso.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 966 58 06 01.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 966 58 06 01.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Av. de Oscar Esplà, N° 4 y las coordenadas 38.57333, -0.0652977. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HWFM+8V, en L'Albir.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		"Restaurante y arrocería de cocina valenciana en la Av. de Oscar Esplà, N° 4 de L'Albir, con arroces, tapas y un turno de mediodía de 12:00 a 17:30 salvo el miércoles.",
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
	/**
	 * `servesCuisine` traduce las tres categorías que publica la ficha y que declaran comida:
	 * «Restaurante de cocina valenciana», «Arrocería» y «Restaurante especializado en tapas».
	 */
	servesCuisine: ['Valenciana', 'Arrocería', 'Tapas'],
	/* Sin `priceRange`: la ficha no publica carta ni precios. */
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
