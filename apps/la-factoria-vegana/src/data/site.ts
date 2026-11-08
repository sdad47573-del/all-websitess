/**
 * Datos de La Factoría Vegana Restaurante (Calle Fernando III el Santo, 5 · 24007 León).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios
 * de accesibilidad y reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni precios, así que no se reproduce
 * ninguno. Tampoco publica terraza, menú ni otros servicios del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-factoria-vegana.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Factoría Vegana Restaurante',
	shortName: 'La Factoría Vegana',
	/** Única categoría que publica Google en esta ficha: «Restaurante vegano». */
	category: 'Restaurante vegano',
	categories: ['Restaurante vegano'],
	/** Descripción que publica el propio titular en la ficha, citada literal. */
	description: 'Restaurante Vegano',
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Fernando III el Santo, 5»: aquí
	 * se desarrolla a «Calle Fernando III el Santo, 5», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Fernando III el Santo, 5',
	postalCode: '24007',
	city: 'León',
	province: 'León',
	region: 'Castilla y León',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 611 91 09 48',
	latitude: 42.6062926,
	longitude: -5.5705512,
	/** Plus code que publica la ficha. */
	plusCode: 'JC4H+GQ León',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 1002 reseñas). */
	rating: 4.8,
	reviewCount: 1002,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Factor%C3%ADa+Vegana+Restaurante/@42.6062926,-5.5705512,17z/data=!3m1!4b1!4m6!3m5!1s0xd379b5efdb02f59:0x75282d9f0b9852c!8m2!3d42.6062926!4d-5.5705512!16s%2Fg%2F11h6n_3088?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJWS-w_V6bNw0RLIW58NmCUgc&hl=es';

export const phoneHref = 'tel:+34611910948';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. El local
 * cierra lunes y martes; de miércoles a domingo sirve comidas de 13:30 a 16:30 y, los viernes y los
 * sábados, también cenas de 20:30 a 23:30.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Comidas de miércoles a domingo · cenas viernes y sábado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Cuatro entradas: acceso, aseo y asientos adaptados para sillas de ruedas figuran como disponibles;
 * el aparcamiento adaptado, como no disponible.
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las dos son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Delicioso el arroz, la burger mediterránea y el tiramisú.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato, buen ambiente, comida deliciosa y un precio inmejorable.',
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
		question: '¿Dónde está La Factoría Vegana?',
		answer:
			'En la calle Fernando III el Santo, 5, con código postal 24007, en León (Castilla y León). La ficha publica el plus code JC4H+GQ León y las coordenadas 42.6062926, -5.5705512.',
	},
	{
		question: '¿Cuál es el horario de La Factoría Vegana?',
		answer:
			'Abre de miércoles a domingo: comidas de 13:30 a 16:30 y, los viernes y los sábados, también cenas de 20:30 a 23:30. Cierra lunes y martes. Es el horario publicado en la ficha consultada el 17 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 611 91 09 48.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante vegano. Tiene 4,8 sobre 5 con 1002 reseñas, y en las reseñas que destaca se habla del arroz, la burger mediterránea, el tiramisú, el trato y el ambiente. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 611 91 09 48.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Fernando III el Santo, 5 y las coordenadas 42.6062926, -5.5705512. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code JC4H+GQ León.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles; el aparcamiento adaptado figura como no disponible.',
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
		'Restaurante vegano en la calle Fernando III el Santo, 5 de León, con comidas de miércoles a domingo y cenas viernes y sábado.',
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
	/* La única categoría que publica Google, «Restaurante vegano», declara esa cocina. */
	servesCuisine: ['Vegana'],
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
