/**
 * Datos de Restaurante Las Coronas (Carrer Sant Pere, 45, 1 · 03590 Altea, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * Segunda web del grupo con una reseña destacada de nota baja (una de 1 sobre 5) y primera cuya
 * descripción del titular está escrita en inglés: se reproduce literal, sin traducirla.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/las-coronas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Las Coronas',
	shortName: 'Las Coronas',
	/** Categoría que publica Google en esta ficha: «Restaurante mediterráneo», la única. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/** Dirección publicada en la ficha: Carrer Sant Pere, 45, 1 (03590 Altea). */
	streetAddress: 'Carrer Sant Pere, 45, 1',
	postalCode: '03590',
	city: 'Altea',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un fijo de Altea. */
	phone: '+34 965 84 38 62',
	latitude: 38.59296,
	longitude: -0.05484,
	/** Plus code que publica la ficha. */
	plusCode: 'HWVW+53 Altea',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 287 reseñas). */
	rating: 4.7,
	reviewCount: 287,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni traducirlo: aquí está en inglés, con su apóstrofo tipográfico («you’re»)
 * y su emoji («🍽️»), y así se conserva. Menciona la reserva por WhatsApp o teléfono.
 */
export const descripcionLocal =
	'Welcome to Restaurante Las Coronas, a cosy Mediterranean bistro in the heart of Altea. Enjoy premium steaks, fresh seafood, Mediterranean classics and seasonal specials in a warm and relaxed atmosphere. Whether you’re joining us for lunch, dinner or a special occasion, our friendly team looks forward to welcoming you. Reservations can be made via WhatsApp or by phone and are confirmed once you receive a confirmation from our team. We look forward to welcoming you to Las Coronas! 🍽️';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Las+Coronas/@38.59296,-0.05484,17z/data=!3m1!4b1!4m6!3m5!1s0xd62011100995757:0x6afe7793f8bcf60f!8m2!3d38.59296!4d-0.05484!16s%2Fg%2F11g7nsj9tx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJV1eZABEBYg0RD_a8-JN3_mo&hl=es';

/** Es un fijo de Altea (965), y así se publica el enlace de llamada. */
export const phoneHref = 'tel:+34965843862';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local abre en dos turnos, de 13:00 a 16:00 y de 18:30 a 22:30, de domingo a
 * martes y de viernes a sábado; cierra los miércoles y los jueves.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:00 y 18:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '18:30', close: '22:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 16:00 y 18:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '18:30', close: '22:30' },
		],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00 y 18:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '18:30', close: '22:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 y 18:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '18:30', close: '22:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00 y 18:30 – 22:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '18:30', close: '22:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 13:00 a 16:00 y de 18:30 a 22:30; cierra miércoles y jueves';

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
 * Se citan tal cual, sin corregir su redacción ni su puntuación, y con la nota que publica cada
 * una. Aquí la ficha mezcla dos de 5 sobre 5 con una de 1 sobre 5: es la primera web del grupo con
 * una reseña destacada de una estrella, y se muestra con su nota real, sin omitirla ni matizarla.
 * Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada
 * reseña entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Excelente y deliciosa carta y menú diario, muy bien atendido.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muchas gracias lo hemos pasado muy bien.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pero no se ponen rojos cuando te cobran 1,60€',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La reserva es la única respuesta que va más allá del horario: la descripción del titular sí dice
 * que se puede reservar por WhatsApp o por teléfono, así que se recoge, sin reproducir un número de
 * WhatsApp que la ficha no publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Las Coronas?',
		answer:
			'En el Carrer Sant Pere, 45, 1, con código postal 03590, en Altea (Alicante). La ficha publica el plus code HWVW+53 Altea y las coordenadas 38.59296, -0.05484.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Las Coronas?',
		answer:
			'La ficha publica dos turnos, de 13:00 a 16:00 y de 18:30 a 22:30, de domingo a martes y de viernes a sábado; cierra los miércoles y los jueves. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo. Tiene 4,7 sobre 5 con 287 reseñas, y el propio local se presenta como un bistró mediterráneo en el corazón de Altea, con carnes, marisco fresco, clásicos mediterráneos y platos de temporada. En las reseñas que destaca se habla de la carta, del menú diario y de la atención; una de ellas, de 1 sobre 5, es una queja por un cobro de 1,60 €.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 965 84 38 62.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La descripción del titular dice que se puede reservar por WhatsApp o por teléfono, y que la reserva queda confirmada cuando el equipo la confirma. Esta web no permite reservar y no publica ningún número de WhatsApp, porque la ficha solo publica el teléfono 965 84 38 62.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Sant Pere, 45, 1 y las coordenadas 38.59296, -0.05484. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HWVW+53 Altea.',
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
		'Bistró mediterráneo en el Carrer Sant Pere, 45 de Altea, con carnes, marisco fresco y clásicos mediterráneos, y horario de 13:00 a 16:00 y de 18:30 a 22:30 salvo miércoles y jueves.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio, y aquí la
	   descripción del titular confirma que se puede reservar por WhatsApp o teléfono. */
	acceptsReservations: true,
	/* `servesCuisine` traduce la única categoría que publica Google, «Restaurante mediterráneo». */
	servesCuisine: ['Cocina mediterránea'],
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
