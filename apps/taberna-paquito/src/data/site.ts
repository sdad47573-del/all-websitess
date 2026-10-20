/**
 * Datos de Taberna "Paquito" (C. Torre de Arena · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-paquito.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con sus comillas. */
	name: 'Taberna "Paquito"',
	shortName: 'Paquito',
	/** Categoría que publica Google. */
	category: 'Taberna',
	categories: ['Taberna'],
	/** Dirección publicada en la ficha: la calle, sin número. */
	streetAddress: 'C. Torre de Arena',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 671 75 97 74',
	latitude: 36.7850306,
	longitude: -6.3548123,
	/** Plus code que publica la ficha. */
	plusCode: 'QJPW+23 Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 222 reseñas). */
	rating: 4.1,
	reviewCount: 222,
	site: site.siteUrl,
} as const;

/**
 * Descripción que publica el propio titular en la ficha de Google Maps.
 *
 * Se recoge literal, incluida su puntuación. Es el único texto descriptivo del local que hay en la
 * ficha, así que la web se apoya en ella en lugar de inventar otra.
 */
export const descripcionTitular =
	'En Taberna Paquito disponemos de carnes y pescados frescos de la mejor calidad hechos a la brasa.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+%22Paquito%22/@36.7850306,-6.3548123,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de082ae8de8e7:0x6631abdd0d18ef64!8m2!3d36.7850306!4d-6.3548123!16s%2Fg%2F11c1s46223?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5-iNroLgDQ0RZO8YDd2rMWY&hl=es';

export const phoneHref = 'tel:+34671759774';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El local abre todos los días en dos turnos: 11:00–16:00 y 19:00–24:00. El cierre a las 24:00 se
 * escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días: 11:00–16:00 y 19:00–24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Cuatro entradas: acceso, aseo y asientos adaptados figuran como disponibles, y el aparcamiento
 * adaptado como no disponible.
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
 * Se citan tal cual, sin corregir su redacción ni su ortografía (el «ala brasa» de la tercera).
 * Una es de 4 sobre 5 y dos de 5.
 */
export const reviews = [
	{
		text: 'Tiene muy buena comida, las carnes a la brasa y las sardinas son geniales.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente lugar donde comer pescado a la brasa de carbón.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen pescadito y la carne ala brasa deliciosa buen cervicio buen precio',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Platos y productos que aparecen en la descripción del titular o en las reseñas destacadas.
 *
 * No es la carta del local: no hay carta publicada ni precios. Cada entrada indica de dónde sale
 * el nombre para que no se lea como una oferta de la casa.
 */
export const mencionados = [
	{
		nombre: 'Carnes a la brasa',
		origen: 'Descripción del titular',
		nota: 'La ficha dice que se hacen carnes y pescados frescos a la brasa; una reseña destaca las carnes.',
	},
	{
		nombre: 'Pescados frescos',
		origen: 'Descripción del titular',
		nota: 'El titular habla de pescados frescos de la mejor calidad hechos a la brasa.',
	},
	{
		nombre: 'Sardinas',
		origen: 'Reseña',
		nota: 'Una reseña de 4 sobre 5 dice que las carnes a la brasa y las sardinas son geniales.',
	},
	{
		nombre: 'Pescado a la brasa de carbón',
		origen: 'Reseña',
		nota: 'Una reseña de 5 sobre 5 define el local como un lugar excelente para comerlo.',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio ni reserva: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Taberna Paquito?',
		answer:
			'En la calle Torre de Arena, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha no publica número de portal, pero sí el plus code QJPW+23 Sanlúcar de Barrameda y las coordenadas 36.7850306, -6.3548123, que abren la ubicación exacta en Google Maps.',
	},
	{
		question: '¿Cuál es el horario de la taberna?',
		answer:
			'Abre todos los días de la semana en dos turnos: de 11:00 a 16:00 y de 19:00 a 24:00. Es el horario de la ficha consultada el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Qué se come en Taberna Paquito?',
		answer:
			'La ficha lo describe así: «carnes y pescados frescos de la mejor calidad hechos a la brasa». En las reseñas que Google destaca se citan las carnes a la brasa, las sardinas y el pescado a la brasa de carbón. La ficha no publica carta ni precios, así que no hay una lista más detallada.',
	},
	{
		question: '¿Es un sitio caro?',
		answer:
			'La ficha no publica precios ni un rango de precio, así que esta web no da una cifra. Una de las reseñas destacadas menciona un «buen precio», pero es la opinión de un cliente, no una tarifa. Para saber cuánto cuesta hoy, hay que llamar al 671 75 97 74.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro datos de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 671 75 97 74.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún distintivo ni dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'Restaurant'],
	'@id': `${site.siteUrl}/#taberna`,
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
	servesCuisine: ['Brasa'],
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
