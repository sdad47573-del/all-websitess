/**
 * Datos de La Bendita Restaurante (Cam. los Mártires · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno, y tampoco publica ningún distintivo
 * junto al nombre, así que no se menciona ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-bendita-restaurante',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Bendita Restaurante',
	shortName: 'La Bendita',
	/** Primera categoría que publica Google en esta ficha. */
	category: 'Restaurante de cocina española',
	/** La ficha publica dos categorías, y en este orden. */
	categories: ['Restaurante de cocina española', 'Cafetería'],
	/**
	 * Dirección publicada en la ficha.
	 *
	 * Google publica «Cam. los Mártires» sin número de portal, así que se reproduce tal cual, sin
	 * completarla con ningún número. El código postal 13005 y el municipio se publican como
	 * «13005 Ciudad Real», que la ficha guarda en un solo campo.
	 */
	streetAddress: 'Cam. los Mártires',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 683 30 73 81',
	latitude: 38.9939814,
	longitude: -3.9218351,
	/** Plus code que publica la ficha. */
	plusCode: 'X3VH+H7 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 492 reseñas). */
	rating: 4.1,
	reviewCount: 492,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni recortarlo.
 */
export const descripcionLocal =
	'Un restaurante que va más allá de lo convencional ofreciendo una experiencia culinaria con un entretenimiento único en Ciudad Real. Un espacio que fusiona la gastronomía con el arte y la diversión de una manera rompedora';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Bendita+Restaurante/@38.9939814,-3.9218351,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3c23b8ca5e1:0x7084bbd77c2cdda1!8m2!3d38.9939814!4d-3.9218351!16s%2Fg%2F11y1w7lpgc?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4aWMO8LDaw0Rod0sfNe7hHA&hl=es';

export const phoneHref = 'tel:+34683307381';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre. El
 * local sirve mediodía de 12:30 a 17:00 (viernes, sábado y domingo desde las 13:00) y añade un
 * segundo turno de 20:00 a 1:30 miércoles y jueves; viernes y sábado mantiene un tramo continuo de
 * 13:00 a 2:30. El martes cierra todo el día.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre de madrugada se escribe con dos dígitos en los datos estructurados (02:30 y 01:30),
 * mientras que el texto visible conserva la forma en que lo publica Google (2:30 y 1:30).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
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
		service: '12:30 – 17:00 · 20:00 – 1:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '01:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 17:00 · 20:00 – 1:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '01:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 2:30',
		shifts: [{ open: '13:00', close: '02:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 2:30',
		shifts: [{ open: '13:00', close: '02:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de 12:30 a 17:00 (13:00 el fin de semana), noche miércoles y jueves hasta la 1:30 y viernes y sábado hasta las 2:30; el martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. La ficha destaca tres: dos de 5
 * sobre 5 y una de 4 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan,
 * porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la
 * persona.
 */
export const reviews = [
	{
		text: 'Muy buena comida, trato excelente muy contentos, volveremos a venir.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy rico todo y los camareros muy majos y muy atentos',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Fui con mi pareja y pedimos el tartar de atún, el torrezno meloso y la torrija.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está La Bendita Restaurante?',
		answer:
			'En el Cam. los Mártires, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3VH+H7 Ciudad Real y las coordenadas 38.9939814, -3.9218351. No publica número de portal, así que aquí no se añade ninguno.',
	},
	{
		question: '¿Cuál es el horario de La Bendita Restaurante?',
		answer:
			'La ficha publica mediodía de 12:30 a 17:00 (viernes, sábado y domingo desde las 13:00) y un segundo turno de 20:00 a 1:30 miércoles y jueves; viernes y sábado mantiene un tramo continuo de 13:00 a 2:30 y el martes cierra todo el día. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica con dos categorías: «Restaurante de cocina española» y «Cafetería». Tiene 4,1 sobre 5 con 492 reseñas, y en las reseñas que destaca se habla del tartar de atún, del torrezno meloso y de la torrija, además del trato del servicio.',
	},
	{
		question: '¿Qué es eso del arte y el entretenimiento?',
		answer:
			'Es lo que cuenta el propio local en la descripción de su ficha: «Un restaurante que va más allá de lo convencional ofreciendo una experiencia culinaria con un entretenimiento único en Ciudad Real. Un espacio que fusiona la gastronomía con el arte y la diversión de una manera rompedora». Esta web la reproduce literal, sin detallar en qué consiste: para saber qué hay cada día, lo mejor es llamar al 683 30 73 81.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 683 30 73 81.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Cam. los Mártires y las coordenadas 38.9939814, -3.9218351. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3VH+H7 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante de cocina española y cafetería en el Cam. los Mártires de Ciudad Real, con mediodía de 12:30 a 17:00 y turno de noche miércoles y jueves.',
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
	/* «Española» traduce la primera categoría que publica Google: «Restaurante de cocina española». */
	servesCuisine: ['Española'],
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
