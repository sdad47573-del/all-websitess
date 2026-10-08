/**
 * Datos de Restaurante Horno de Salvador (Carretera del Castillo de Santa Catalina, s/n · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-horno-de-salvador.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Horno de Salvador',
	shortName: 'Horno de Salvador',
	/**
	 * Categorías que publica Google, en su orden. La primera es la principal («Parrilla»); se
	 * recogen las dos sin añadir ninguna otra que no aparezca.
	 */
	category: 'Parrilla',
	categories: ['Parrilla', 'Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la escribe como «Carretera del Castillo de Santa
	 * Catalina Jaén, s/n», con un «Jaén» suelto en medio del nombre de la vía; aquí se deja la vía
	 * limpia, «Carretera del Castillo de Santa Catalina, s/n», y el municipio va en su campo.
	 */
	streetAddress: 'Carretera del Castillo de Santa Catalina, s/n',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 23 05 28',
	latitude: 37.7691434,
	longitude: -3.8084488,
	/** Plus code que publica la ficha. */
	plusCode: 'Q59R+MJ Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,1 con 308 reseñas). */
	rating: 4.1,
	reviewCount: 308,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Horno+de+Salvador/@37.7691434,-3.8084488,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70aca35f63f:0xb4a242c77b17ffd1!8m2!3d37.7691434!4d-3.8084488!16s%2Fg%2F12qgd7hcb?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJP_Y1ygrXbQ0R0f8Xe8dCorQ&hl=es';

export const phoneHref = 'tel:+34953230528';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * cierra el lunes y abre de martes a domingo desde las 13:30: de martes a sábado hasta las 23:00 y
 * el domingo solo hasta las 16:00.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día ya cierra por descanso semanal, así que el aviso se recoge en el
 * texto de la sección de horario y no en la tabla.
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
		service: '13:30 – 23:00',
		shifts: [{ open: '13:30', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 23:00',
		shifts: [{ open: '13:30', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 23:00',
		shifts: [{ open: '13:30', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 23:00',
		shifts: [{ open: '13:30', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 23:00',
		shifts: [{ open: '13:30', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 16:00',
		shifts: [{ open: '13:30', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a domingo desde las 13:30 · de martes a sábado hasta las 23:00 y el domingo hasta las 16:00 · lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro están disponibles: acceso, aparcamiento, aseo y asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. **No todas son de 5**: la segunda
 * es de 1 y la tercera de 4, y se reproducen igual, sin esconderlas.
 */
export const reviews = [
	{
		text: 'Excelente lugar con mucho encanto, calidad en sus raciones y buena atención',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Mis a compañantes tuvieron que comer ese solomillo muy dulce y yo seco ....',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Quizá por la epoca en la que fui...',
		rating: 4,
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
		question: '¿Dónde está Restaurante Horno de Salvador?',
		answer:
			'En la Carretera del Castillo de Santa Catalina, s/n, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q59R+MJ Jaén y las coordenadas 37.7691434, -3.8084488.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Horno de Salvador?',
		answer:
			'Cierra el lunes. De martes a domingo abre desde las 13:30: de martes a sábado hasta las 23:00 y el domingo solo hasta las 16:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; como ese día ya cierra por descanso semanal, conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como parrilla y restaurante mediterráneo. Tiene 4,1 sobre 5 con 308 reseñas, y en las tres reseñas que destaca se habla de la calidad de las raciones y la atención, de un solomillo que no convenció y de una visita condicionada por la época del año.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 23 05 28.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carretera del Castillo de Santa Catalina, s/n y las coordenadas 37.7691434, -3.8084488. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q59R+MJ Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro están disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 23 05 28.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Parrilla y restaurante mediterráneo en la Carretera del Castillo de Santa Catalina, s/n, de Jaén, con mediodía y cena de martes a domingo; cierra los lunes.',
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
	/* `servesCuisine` traduce las dos categorías que publica Google. */
	servesCuisine: ['Parrilla', 'Cocina mediterránea'],
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
