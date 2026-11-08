/**
 * Datos del Chiringuito Manolo polígono Jaén (Calle Mancha Real, 44 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica un distintivo junto al nombre, web propia, perfiles sociales, descripción del
 * local, carta ni precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://chiringuito-manolo-poligono-jaen.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Chiringuito Manolo polígono Jaén',
	shortName: 'Chiringuito Manolo',
	/**
	 * Categorías que publica Google, en su orden. La primera es la principal («Bar»); se recogen las
	 * dos, «Bar» y «Restaurante», sin añadir ninguna otra que no aparezca.
	 */
	category: 'Bar',
	categories: ['Bar', 'Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Mancha Real, 44»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Mancha Real, 44',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 28 18 08',
	latitude: 37.80219,
	longitude: -3.78645,
	/** Plus code que publica la ficha. */
	plusCode: 'R627+VC Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 480 reseñas). */
	rating: 4.4,
	reviewCount: 480,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Chiringuito+Manolo+pol%C3%ADgono+Ja%C3%A9n/@37.80219,-3.78645,17z/data=!3m1!4b1!4m6!3m5!1s0xd6e788115091633:0x81731d80b076663a!8m2!3d37.80219!4d-3.78645!16s%2Fg%2F1tdqcy5w?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJMxYJFYF4bg0ROmZ2sIAdc4E&hl=es';

export const phoneHref = 'tel:+34953281808';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * un único turno de 7:00 a 18:00 de lunes a viernes, y cierra sábado y domingo.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día el local abre con su horario habitual, así que el aviso se recoge
 * en el texto de la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 18:00',
		shifts: [{ open: '07:00', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 18:00',
		shifts: [{ open: '07:00', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 18:00',
		shifts: [{ open: '07:00', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 18:00',
		shifts: [{ open: '07:00', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 18:00',
		shifts: [{ open: '07:00', close: '18:00' }],
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
export const hoursSummary = 'De lunes a viernes, de 7:00 a 18:00; sábados y domingos cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos están disponibles: el acceso y el aseo adaptados para sillas de
 * ruedas. La ficha no publica ni los asientos ni el aparcamiento adaptados.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y la segunda
 * de 4 sobre 5; se reproducen igual.
 */
export const reviews = [
	{
		text: 'Buena gente, buen servicio, buena comida, buen precio, recomendable 100x100.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La ternera a la brasa un poco pasada pero el pollo y el falso risotto muy ricos.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen café, tostadas magníficas y Gabi, un camarero 10',
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
		question: '¿Dónde está el Chiringuito Manolo polígono Jaén?',
		answer:
			'En la calle Mancha Real, 44, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code R627+VC Jaén y las coordenadas 37.80219, -3.78645.',
	},
	{
		question: '¿Cuál es el horario del Chiringuito Manolo polígono Jaén?',
		answer:
			'Abre de lunes a viernes en un solo turno, de 7:00 a 18:00, y cierra los sábados y los domingos. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como bar y restaurante, sin un tipo de cocina concreto. Tiene 4,4 sobre 5 con 480 reseñas, y en las tres reseñas que destaca se habla del servicio, la comida y el precio, de la ternera a la brasa, el pollo y el falso risotto, y del café y las tostadas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 28 18 08.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Mancha Real, 44 y las coordenadas 37.80219, -3.78645. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code R627+VC Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso y el aseo adaptados para sillas de ruedas: son las dos únicas entradas de accesibilidad que publica, y ninguna está marcada como no disponible.',
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
		'Bar y restaurante en la calle Mancha Real, 44 de Jaén, abierto de 7:00 a 18:00 de lunes a viernes y cerrado los fines de semana.',
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
	/* Sin `servesCuisine`: Google solo publica las categorías «Bar» y «Restaurante», sin cocina. */
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
