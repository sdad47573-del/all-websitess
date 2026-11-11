/**
 * Datos de La Gabriela (Pl. Plateros, 3 · 11403 Jerez de la Frontera, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios ni un sistema de reservas, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-gabriela-jerez.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Gabriela',
	shortName: 'La Gabriela',
	/** Categoría principal y el resto de categorías que publica Google, en su orden. */
	category: 'Restaurante andaluz',
	categories: [
		'Restaurante andaluz',
		'Restaurante mediterráneo',
		'Restaurante especializado en tapas',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Pl. Plateros, 3',
	postalCode: '11403',
	city: 'Jerez de la Frontera',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 956 34 47 26',
	latitude: 36.683757,
	longitude: -6.138573,
	/** Plus code que publica la ficha. */
	plusCode: 'MVM6+GH Jerez de la Frontera',
	/** Valoración de la ficha en la fecha de consulta (4 sobre 5 con 1.733 reseñas). */
	rating: 4,
	reviewCount: 1733,
} as const;

/**
 * Descripción que publica el propio titular en la ficha de Google Maps, transcrita literalmente.
 *
 * El original empieza con una raya y usa comillas tipográficas; se copia tal cual, sin corregir
 * la puntuación ni la falta de verbo de la segunda frase.
 */
export const descripcionTitular =
	'—Cocina tradicional con productos de Km0.\n\n“La Gabriela” un lugar de encuentro y disfrute en una de las plazas con más encanto del centro de Jerez de la Frontera, la increíble Plaza Plateros.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Gabriela/@36.683757,-6.138573,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc696cf494adb:0x641d0a0106b5dcbe!8m2!3d36.683757!4d-6.138573!16s%2Fg%2F1v3_3ypf?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ20pJz5bGDQ0Rvty1BgEKHWQ&hl=es';

export const phoneHref = 'tel:+34956344726';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días desde las 12:00: hasta las 23:00 de domingo a jueves y hasta las 24:00 los
 * viernes y sábados. En los datos estructurados el cierre a las 24:00 se escribe como 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		short: 'L',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Monday',
		closed: false,
	},
	{
		day: 'Martes',
		short: 'M',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Tuesday',
		closed: false,
	},
	{
		day: 'Miércoles',
		short: 'X',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
		closed: false,
	},
	{
		day: 'Jueves',
		short: 'J',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
		closed: false,
	},
	{
		day: 'Viernes',
		short: 'V',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '24:00' }],
		dayOfWeek: 'Friday',
		closed: false,
	},
	{
		day: 'Sábado',
		short: 'S',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
		closed: false,
	},
	{
		day: 'Domingo',
		short: 'D',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
		closed: false,
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días desde las 12:00 · hasta las 23:00, y hasta las 24:00 viernes y sábado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas: acceso, aseo y asientos adaptados disponibles, y aparcamiento adaptado
 * no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (las mayúsculas de «TODO de 10»).
 * Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos arroz a la flamenca, albóndigas de secreto y solomillo y TODO de 10!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lugar agradable, buenos precios, buenas tapas o raciones y buen servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio para comer, cenar, plaza muy animada y camareros divertidos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Platos que nombra la primera reseña destacada.
 *
 * No es la carta: la ficha no publica carta ni precios. Cada nombre sale de esa reseña y así se
 * indica.
 */
export const platos = [
	{ nombre: 'Arroz a la flamenca', nota: 'Nombrado en una reseña de 5 sobre 5' },
	{ nombre: 'Albóndigas de secreto', nota: 'Nombrado en una reseña de 5 sobre 5' },
	{ nombre: 'Solomillo', nota: 'Nombrado en una reseña de 5 sobre 5' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio, reserva ni web propia: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está La Gabriela?',
		answer:
			'En la plaza Plateros, 3, en el código postal 11403 de Jerez de la Frontera (Cádiz). La ficha publica el plus code MVM6+GH Jerez de la Frontera y las coordenadas 36.683757, -6.138573.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'Abre todos los días desde las 12:00. De domingo a jueves cierra a las 23:00 y los viernes y sábados, a las 24:00. Es el horario consultado el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. El titular describe una cocina tradicional con productos de km 0, y en las reseñas destacadas se nombran arroz a la flamenca, albóndigas de secreto y solomillo. Son menciones de clientes, no una lista oficial del local.',
	},
	{
		question: '¿Es caro?',
		answer:
			'La ficha no publica precios ni un rango de precio. Una de las reseñas destacadas habla de «buenos precios», pero es la opinión de un cliente y no una tarifa. Para saber cuánto cuesta hoy hay que llamar al 956 34 47 26.',
	},
	{
		question: '¿Se puede comer en la plaza?',
		answer:
			'La ficha no publica cuántas mesas hay fuera ni si se puede reservar en la plaza. Lo que sí publica el titular es que el restaurante está en la plaza Plateros, y una de las reseñas destaca que la plaza es muy animada.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado. Son las cuatro entradas que publica.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 956 34 47 26.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada. La ha creado Sur Digital.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: descripcionTitular,
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
	hasGoogleReviews: reviewsUrl,
	servesCuisine: ['Andaluza', 'Mediterránea', 'Tapas'],
	/* Sin `priceRange`: la ficha no publica precios. */
	/* Sin `acceptsReservations`: la ficha no publica si se admiten reservas. */
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
			/* El cierre a las 24:00 se expresa como 00:00 en schema.org. */
			opens: shift.open,
			closes: shift.close === '24:00' ? '00:00' : shift.close,
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
 * de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};

/** Crédito del estudio que ha construido la web, tal como se muestra en el pie. */
export const credito = {
	nombre: 'Sur Digital',
	url: 'https://www.sur-digital.com/',
} as const;
