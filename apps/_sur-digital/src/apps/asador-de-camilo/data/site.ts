/**
 * Datos de Asador de Camilo (Calle Puerta del Sol, 4 · 23007 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, ni
 * servicios de accesibilidad o atributos del local, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/asador-de-camilo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Asador de Camilo',
	shortName: 'Asador de Camilo',
	/**
	 * Única categoría que publica Google en esta ficha: «Parrilla».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Parrilla',
	categories: ['Parrilla'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Prta del Sol, 4»: aquí se
	 * desarrollan las abreviaturas a «Calle Puerta del Sol», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Puerta del Sol, 4',
	postalCode: '23007',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como en otras fichas del repositorio. */
	phone: '+34 722 66 26 11',
	latitude: 37.7726566,
	longitude: -3.7922662,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6F5+33 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 284 reseñas). */
	rating: 4.4,
	reviewCount: 284,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Asador+de+Camilo/@37.7726566,-3.7922662,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70db055ea89:0x40232b09fa690e7e!8m2!3d37.7726566!4d-3.7922662!16s%2Fg%2F11c5_5pp_y?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJiepVsA3XbQ0Rfg5p-gkrI0A&hl=es';

export const phoneHref = 'tel:+34722662611';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * sirve un único turno de mediodía: de martes a sábado de 11:30 a 17:00 y el domingo hasta las
 * 17:30. Cierra los lunes.
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
		service: '11:30 – 17:00',
		shifts: [{ open: '11:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:30 – 17:00',
		shifts: [{ open: '11:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:30 – 17:00',
		shifts: [{ open: '11:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:30 – 17:00',
		shifts: [{ open: '11:30', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:30 – 17:00',
		shifts: [{ open: '11:30', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:30 – 17:30',
		shifts: [{ open: '11:30', close: '17:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Comidas de martes a domingo desde las 11:30 · el domingo hasta las 17:30 · lunes cerrado';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. En esta ficha las tres son de 5.
 */
export const reviews = [
	{
		text: 'Pedimos presa, solomillo y surtido de croquetas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena cocina, buen servicio y atención por parte de los camareros.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El trato inmejorable, la comida exquisita y muy buen ambiente, seguro volveré.',
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
		question: '¿Dónde está Asador de Camilo?',
		answer:
			'En la calle Puerta del Sol, 4, con código postal 23007, en Jaén (Andalucía). La ficha publica el plus code Q6F5+33 Jaén y las coordenadas 37.7726566, -3.7922662.',
	},
	{
		question: '¿Cuál es el horario de Asador de Camilo?',
		answer:
			'Sirve comidas de martes a domingo desde las 11:30: de martes a sábado hasta las 17:00 y el domingo hasta las 17:30. Cierra los lunes. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; como ese día ya cierra por descanso semanal, conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como parrilla. Tiene 4,4 sobre 5 con 284 reseñas, y en las tres reseñas que destaca se habla de la presa, el solomillo y un surtido de croquetas, de la cocina y el servicio, y del trato y el ambiente. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 722 66 26 11.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Puerta del Sol, 4 y las coordenadas 37.7726566, -3.7922662. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6F5+33 Jaén.',
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
		'Parrilla en la calle Puerta del Sol, 4 de Jaén, con comidas de martes a domingo; cierra los lunes.',
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
	// «Parrilla» ya está en español: se publica la categoría de Google tal cual, sin traducirla.
	servesCuisine: ['Parrilla'],
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
	/* Sin `amenityFeature`: la ficha no publica accesibilidad ni servicios del local. */
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
