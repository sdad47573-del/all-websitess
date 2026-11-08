/**
 * Datos del Restaurante Casa Conde (Calle Millán de Priego · 23004 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, distintivo, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta, precios **ni
 * horario**, así que no se reproduce ninguno y no se inventa ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-casa-conde',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casa Conde',
	shortName: 'Casa Conde',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha, con la abreviatura «C.» desarrollada a «Calle» como en la
	 * mayoría de webs del repositorio. La ficha **no publica número de portal** para esta calle, así
	 * que no se escribe ninguno.
	 */
	streetAddress: 'Calle Millán de Priego',
	postalCode: '23004',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 650 18 41 44',
	latitude: 37.7722211,
	longitude: -3.7922867,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6C5+V3 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 168 reseñas). */
	rating: 4.3,
	reviewCount: 168,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Conde/@37.7722211,-3.7922867,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70daf24b8cd:0x9c292156f03807e2!8m2!3d37.7722211!4d-3.7922867!16s%2Fg%2F11c5zr57rz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJzbgkrw3XbQ0R4gc48FYhKZw&hl=es';

export const phoneHref = 'tel:+34650184144';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * La ficha lleva la etiqueta «Brunch». Se recoge tal cual, se enseña en la portada y tiene su
 * propia pregunta frecuente, sin ampliarla ni interpretarla.
 */
export const distintivo = 'Brunch';

/**
 * Horario.
 *
 * **La ficha no publica horario.** Se ha consultado 14 veces el endpoint de la ficha y en ninguna
 * respuesta viene el bloque de días: el propio panel de Google ofrece «Añadir horario» en lugar de
 * «Editar horario», y en la respuesta no aparece ni un solo nombre de día. Por eso aquí no hay
 * tabla de horario, no se emite `openingHoursSpecification` y el único consejo posible es llamar.
 */
export const horasPublicadas = false;

/** Texto que sustituye al resumen de horario en la cabecera y en la franja de datos. */
export const horarioNota = 'Horario: la ficha no lo publica · llama y pregunta';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. No publica ninguna otra (a diferencia de otras fichas del
 * repositorio, aquí no hay entrada de aparcamiento).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación ni elegir las que mejor suenan: hay una de 5, una de 4 y
 * una de 1. Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el
 * delimitador del propio campo y no forman parte del texto.
 */
export const reviews = [
	{
		text: 'Cerveza fría y bien tirada.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Camareros mal educados, se ponen agresivos delante de los comensales.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Comida muy rica, buenos postres caseros y buen trato a los clientes',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni horario, así que ninguna respuesta los inventa.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Casa Conde?',
		answer:
			'En la Calle Millán de Priego, con código postal 23004, en Jaén (Andalucía). La ficha publica el plus code Q6C5+V3 Jaén y las coordenadas 37.7722211, -3.7922867, pero no indica un número de portal para esa calle.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha de Google Maps no publica horario para este restaurante: no aparece ningún día con horario asignado y Google sigue ofreciendo «Añadir horario» en lugar de mostrarlo. Por eso esta web no enseña ninguna tabla, que sería inventada. Para saber si está abierto hay que llamar al 650 18 41 44.',
	},
	{
		question: '¿Qué tipo de cocina hace?',
		answer:
			'Google lo clasifica solo como restaurante y la ficha no publica un tipo de cocina ni una descripción del local, así que no se declara ninguna. Lleva el distintivo «Brunch». Tiene 4,3 sobre 5 con 168 reseñas y, entre las que destaca, se habla de cerveza bien tirada, de comida casera con postres caseros y también de un mal servicio.',
	},
	{
		question: '¿Qué dice el distintivo «Brunch»?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Aquí se recoge tal cual, sin ampliarla ni interpretarla: la ficha no concreta días, horas ni contenido de ese brunch.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Millán de Priego y las coordenadas 37.7722211, -3.7922867. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6C5+V3 Jaén.',
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
		'Restaurante en la Calle Millán de Priego de Jaén, con 4,3 sobre 5 y 168 reseñas en Google Maps. La ficha no publica horario.',
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
	/* Sin `openingHoursSpecification`: la ficha no publica horario y no se inventa uno. */
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y la ficha no declara cocina. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
