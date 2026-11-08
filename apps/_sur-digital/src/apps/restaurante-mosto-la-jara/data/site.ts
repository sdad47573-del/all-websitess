/**
 * Datos de Restaurante Mosto La Jara (Cam. La Victoria, 46 · 11540 Sanlúcar de Barrameda, Cádiz).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-mosto-la-jara',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Mosto La Jara',
	shortName: 'Mosto La Jara',
	/** Categorías que publica Google, en su orden. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Cam. La Victoria, 46',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 671 09 19 21',
	latitude: 36.7595539,
	longitude: -6.3841238,
	/** Plus code que publica la ficha. */
	plusCode: 'QJ58+R9 Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 650 reseñas). */
	rating: 4.1,
	reviewCount: 650,
} as const;

/**
 * Descripción que publica el propio titular en la ficha de Google Maps, citada literalmente.
 *
 * Menciona los pescados y mariscos de Sanlúcar, los guisos marineros y las carnes de bellota a la
 * brasa, además del aparcamiento, el parque infantil, las terrazas y los salones climatizados.
 */
export const descripcionTitular =
	'Restaurante situado en Sanlúcar de Barrameda, en la zona de La Jara. Ofrecemos una gran variedad de platos, donde destacan los pescados y mariscos de Sanlúcar, los guisos marineros y las carnes de bellota a la brasa. Contamos con amplio aparcamiento, gran parque infantil, terrazas y salones climatizados.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mosto+La+Jara/@36.7595539,-6.3841238,17z/data=!3m1!4b1!4m6!3m5!1s0xd0ddfbfaf550bdd:0xb1d2502a68e6819f!8m2!3d36.7595539!4d-6.3841238!16s%2Fg%2F11c6cq0y8k?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ3QtVr7_fDQ0Rn4HmaCpQ0rE&hl=es';

export const phoneHref = 'tel:+34671091921';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Solo abre de viernes a domingo, de 13:00 a 23:30. De lunes a jueves figura como cerrado, y así
 * se hace constar en la web: es el dato más importante de toda la ficha para quien piense ir.
 * Los días cerrados no se incluyen en `openingHoursSpecification`, que solo describe los días con
 * horario.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
		closed: true,
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
		closed: true,
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
		closed: true,
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
		closed: true,
	},
	{
		day: 'Viernes',
		service: '13:00 – 23:30',
		shifts: [{ open: '13:00', close: '23:30' }],
		dayOfWeek: 'Friday',
		closed: false,
	},
	{
		day: 'Sábado',
		service: '13:00 – 23:30',
		shifts: [{ open: '13:00', close: '23:30' }],
		dayOfWeek: 'Saturday',
		closed: false,
	},
	{
		day: 'Domingo',
		service: '13:00 – 23:30',
		shifts: [{ open: '13:00', close: '23:30' }],
		dayOfWeek: 'Sunday',
		closed: false,
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Viernes, sábado y domingo, 13:00–23:30 · de lunes a jueves, cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica las cuatro entradas con valor afirmativo: acceso, aparcamiento, aseo y asientos
 * adaptados para sillas de ruedas. No hay ninguna entrada negativa que reproducir.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (los espacios antes de las comas,
 * la falta de mayúscula tras el punto y los acentos ausentes). Dos son de 5 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Almejas, langostinos, chuleton de retinto todo muy rico y buen precio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un sitio muy bonito . tapitas muy buenas y la manzanilla buenisima',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los camareros muy agradables y el pescaito y el entrecot en su punto.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Lo que la descripción del titular dice que se sirve.
 *
 * No es una carta: la ficha no publica carta ni precios. Cada bloque resume una frase de la
 * descripción del propio restaurante, y los platos concretos solo aparecen en las reseñas.
 */
export const propuestas = [
	{
		titulo: 'Pescados y mariscos de Sanlúcar',
		texto:
			'El titular destaca los pescados y mariscos de Sanlúcar entre la variedad de platos de la casa.',
	},
	{
		titulo: 'Guisos marineros',
		texto:
			'La descripción de la ficha menciona los guisos marineros como uno de sus platos fuertes.',
	},
	{
		titulo: 'Carnes de bellota a la brasa',
		texto: 'El tercer plato que nombra el titular: carnes de bellota hechas a la brasa.',
	},
] as const;

/**
 * Instalaciones que anuncia la descripción del titular.
 *
 * Son cuatro servicios que la ficha publica en palabras del restaurante, no en el bloque de
 * atributos: aparcamiento amplio, parque infantil, terrazas y salones climatizados.
 */
export const instalaciones = [
	{ titulo: 'Amplio aparcamiento', texto: 'El titular anuncia aparcamiento amplio en la ficha.' },
	{ titulo: 'Gran parque infantil', texto: 'La ficha menciona un parque infantil amplio.' },
	{ titulo: 'Terrazas', texto: 'El restaurante anuncia terrazas en su descripción.' },
	{ titulo: 'Salones climatizados', texto: 'La ficha habla de salones con climatización.' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio, reserva ni web propia: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Mosto La Jara?',
		answer:
			'En el Camino de La Victoria, 46, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz), en la zona de La Jara. La ficha publica el plus code QJ58+R9 Sanlúcar de Barrameda y las coordenadas 36.7595539, -6.3841238.',
	},
	{
		question: '¿Qué días abre?',
		answer:
			'Abre solo de viernes a domingo, de 13:00 a 23:30. De lunes a jueves figura como cerrado en la ficha. Es el horario consultado el 20 de octubre de 2026, así que conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. El titular describe una gran variedad de platos y destaca los pescados y mariscos de Sanlúcar, los guisos marineros y las carnes de bellota a la brasa. En las reseñas destacadas se citan almejas, langostinos, chuletón de retinto, pescaito y entrecot.',
	},
	{
		question: '¿Hay aparcamiento?',
		answer:
			'El titular anuncia un aparcamiento amplio en la descripción de la ficha, y la ficha además marca el aparcamiento adaptado para sillas de ruedas como disponible.',
	},
	{
		question: '¿Tiene parque infantil?',
		answer:
			'La descripción del titular menciona un gran parque infantil. La ficha no da más detalles (ni edades, ni horario de uso), así que no se añaden aquí.',
	},
	{
		question: '¿Se puede comer en terraza o en un salón climatizado?',
		answer:
			'El restaurante anuncia terrazas y salones climatizados en su propia descripción de la ficha. La ficha no publica cuántas mesas tiene cada espacio ni permite reservarlo desde aquí.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas: las cuatro entradas que publica.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 671 09 19 21.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
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
	servesCuisine: ['Cocina española', 'Pescados y mariscos', 'Carnes a la brasa'],
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
 * de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
