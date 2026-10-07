/**
 * Datos del Restaurante Luisa de Castro. (C. Rey Alhamar, 7 · 23007 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el propio local y las reseñas destacadas.
 *
 * La ficha no publica web propia ni perfiles sociales, así que no se enlaza ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-luisa-de-castro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Luisa de Castro',
	shortName: 'Luisa de Castro',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. Rey Alhamar, 7',
	postalCode: '23007',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 684 07 57 96',
	latitude: 37.7720612,
	longitude: -3.7910824,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6C5+RH Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,7 con 41 reseñas). */
	rating: 4.7,
	reviewCount: 41,
	site: site.siteUrl,
} as const;

/**
 * Descripción literal que el propio local publica en su ficha de Google Maps.
 *
 * Se reproduce tal cual (solo se normaliza el salto de línea y el espacio que falta tras «Jaén.»)
 * y se usa como resumen del negocio en la web.
 */
export const descripcionLocal =
	'No se hacen reservas Online. Espacio tranquilo dónde disfrutar de la gastronomía de Jaén. Siempre intentando ofrecer un ambiente relajado y respetuoso para nuestros comensales.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Luisa+de+Castro/@37.7720612,-3.7910824,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd7d77c787fcf:0xfc0dc7d54c0ba430!8m2!3d37.7720612!4d-3.7910824!16s%2Fg%2F11v0xbvc3j?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJz394fNfXbQ0RMKQLTNXHDfw&hl=es';

export const phoneHref = 'tel:+34684075796';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * abre todos los días de 13:00 a 18:00 menos el martes, que cierra; el viernes y el sábado suman
 * un turno de noche de 20:30 a 1:00.
 *
 * El lunes 12, Fiesta Nacional de España, aparece con «Horario de Fiesta Nacional de España» pero
 * mantiene el mismo tramo (13:00–18:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 18:00',
		shifts: [{ open: '13:00', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 18:00',
		shifts: [{ open: '13:00', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 18:00',
		shifts: [{ open: '13:00', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 18:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 18:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 18:00',
		shifts: [{ open: '13:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De miércoles a lunes · de 13:00 a 18:00 (viernes y sábado también cena, 20:30 – 1:00)';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso y los asientos adaptados están
 * disponibles y el aparcamiento adaptado, marcado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta (todas de 5 sobre 5) y se
 * citan tal cual, sin corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Alcachofas confitadas con jamón y huevo las mejores que hemos probado!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen servicio y buen ambiente buena comida',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Es carete pero ponen calidad y tienen buena cocina.',
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
		question: '¿Dónde está el Restaurante Luisa de Castro?',
		answer:
			'En la C. Rey Alhamar, 7, con código postal 23007, en Jaén (Andalucía). La ficha publica el plus code Q6C5+RH Jaén y las coordenadas 37.7720612, -3.7910824.',
	},
	{
		question: '¿Cuál es el horario del restaurante?',
		answer:
			'Abre de 13:00 a 18:00 de miércoles a lunes, y cierra el martes. El viernes y el sábado añade un turno de noche de 20:30 a 1:00. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Cierra algún día?',
		answer:
			'En el horario que publica la ficha, sí: el martes. El resto de días abre de 13:00 a 18:00, y el viernes y el sábado también por la noche desde las 20:30.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'El propio local escribe en su ficha que no se hacen reservas online. Para cualquier duda sobre mesas o disponibilidad, lo más directo es llamar al 684 07 57 96.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Rey Alhamar, 7 y las coordenadas 37.7720612, -3.7910824. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6C5+RH Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la C. Rey Alhamar, 7 de Jaén, con cocina de mediodía de miércoles a lunes y cena el viernes y el sábado.',
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
	/*
	 * Sin `acceptsReservations`: el propio local publica en su ficha que «no se hacen reservas
	 * online», así que declararlo sería contradecir el dato de origen.
	 */
	/* Sin `servesCuisine`: la ficha solo publica la categoría «Restaurante», sin tipo de cocina. */
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
