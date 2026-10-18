/**
 * Datos de Restaurante Casa Cristobal (Av. de Portugal, 3 · 10001 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, descripción del titular, distintivo, horario
 * semanal, servicios de accesibilidad y reseñas destacadas.
 *
 * La dirección se publica tal cual, con el código postal 10001 y la localidad (Cáceres). La
 * descripción del titular y los 3 extractos de reseñas se reproducen literalmente y se citan como
 * tales en la web. La ficha no publica web propia, perfiles sociales, carta ni precios, así que no
 * se reproduce ninguno. Tampoco publica otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-casa-cristobal.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casa Cristobal',
	shortName: 'Casa Cristobal',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Restaurante Casa Cristobal, Av. de Portugal, 3,
	 * Centro-Casco Antiguo, 10001 Cáceres». «Centro-Casco Antiguo» es el barrio y se conserva
	 * aparte.
	 */
	streetAddress: 'Av. de Portugal, 3',
	district: 'Centro-Casco Antiguo',
	postalCode: '10001',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 927 09 46 82',
	latitude: 39.467574,
	longitude: -6.3789548,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJ9C+2C). */
	plusCode: 'FJ9C+2C Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 163 reseñas). */
	rating: 4.1,
	reviewCount: 163,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Cristobal/@39.467574,-6.3789548,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dffb96f2771d:0x54fb9ddfd40a0231!8m2!3d39.467574!4d-6.3789548!16s%2Fg%2F11s12647vs?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHXfylvvfFQ0RMQIK1N-d-1Q&hl=es';

export const phoneHref = 'tel:+34927094682';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Se conserva con sus saltos de párrafo originales; la portada la reproduce por párrafos.
 */
export const ownerDescription =
	'El restaurante-bar Casa Cristobal se encuentra ubicado en pleno centro de Cáceres. Más que un restaurante, un lugar de encuentro de amigos y familias amantes de la buena comida, cuidamos cada elemento y apostamos por productos frescos y de la tierra.\n\nContamos con una gran variedad de pescados, carnes y raciones. No te quedes sin probar nuestro espectacular arroz con bogavante.\nTambién ofrecemos desayunos tradicionales desde primera hora de la mañana. Las tostadas más típicas, gran variedad de café y zumo recién exprimido…\n\n¡No esperes mas y ven a conocernos!';

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de martes a domingo en jornada continua de 8:30 a 24:00. El lunes está cerrado.
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
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 24:00',
		shifts: [{ open: '8:30', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Mar–dom 8:30–24:00 · lun cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figuran dos entradas y las dos como disponibles: acceso y asientos adaptados para
 * sillas de ruedas. La ficha no publica aseo ni aparcamiento adaptados.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Distintivos que publica la ficha (con valor disponible).
 *
 * La ficha solo publica uno: el local es amigable con la comunidad LGBTQ+.
 */
export const distintivos = ['Amigable con la comunidad LGBTQ+'] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay una de 4
 * y dos de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Las raciones de chocos fritos y croquetas de setas muy buenos.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Desde luego volveremos a ir ,vimos un cachopo que tenia una pinta deliciosa !!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena comida en tapeo las patatas alioli buenísimas',
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
		question: '¿Dónde está Casa Cristobal?',
		answer:
			'En la Av. de Portugal, 3, con código postal 10001, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica el plus code FJ9C+2C Cáceres y las coordenadas 39.467574, -6.3789548.',
	},
	{
		question: '¿Cuál es el horario de Casa Cristobal?',
		answer:
			'Abre de martes a domingo en jornada continua de 8:30 a 24:00; el lunes está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 927 09 46 82.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y su propia descripción dice literalmente que es un restaurante-bar con pescados, carnes y raciones, arroz con bogavante y desayunos tradicionales con tostadas, café y zumo recién exprimido. En las reseñas que destaca se habla de chocos fritos con croquetas de setas, de cachopo con muy buena pinta y de tapeo con patatas alioli buenísimas. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 927 09 46 82.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Portugal, 3 y las coordenadas 39.467574, -6.3789548. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJ9C+2C Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: acceso y asientos adaptados para sillas de ruedas. No publica aseo ni aparcamiento adaptados, así que esta web no puede confirmarlos. Además se declara amigable con la comunidad LGBTQ+.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, el distintivo, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante-bar en la Av. de Portugal, 3 de Cáceres. Pescados, carnes, raciones, arroz con bogavante y desayunos; 4,1 sobre 5 con 163 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: la única categoría que publica Google es «Restaurante». */
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
