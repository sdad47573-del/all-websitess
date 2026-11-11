/**
 * Datos de Bar Manolo (Ctra. Puerto de Santa María, s/n · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios de
 * accesibilidad y las reseñas destacadas.
 *
 * Esta ficha no publica descripción del titular, ni carta, ni precios, ni web propia, ni si se
 * admiten reservas. Nada de eso se rellena aquí.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-manolo-sanlucar.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Manolo',
	shortName: 'Manolo',
	/** Categorías que publica Google, en su orden. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Cafetería'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Ctra. Puerto de Santa María, s/n',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 673 64 07 92',
	latitude: 36.7668963,
	longitude: -6.346533,
	/** Plus code que publica la ficha. */
	plusCode: 'QM83+Q9 Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 644 reseñas). */
	rating: 4.3,
	reviewCount: 644,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Manolo/@36.7668963,-6.346533,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde41e7103ce7:0xc264476df8610a81!8m2!3d36.7668963!4d-6.346533!16s%2Fg%2F1tfm2q2c?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5zwQ50HeDQ0RgQph-G1HZMI&hl=es';

export const phoneHref = 'tel:+34673640792';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Los siete días figuran de 5:00 a 24:00. No hay ningún día cerrado; en los datos estructurados el
 * cierre a las 24:00 se escribe como 00:00.
 */
export const hours = [
	{ day: 'Lunes', short: 'L', service: '5:00 – 24:00', dayOfWeek: 'Monday', closed: false },
	{ day: 'Martes', short: 'M', service: '5:00 – 24:00', dayOfWeek: 'Tuesday', closed: false },
	{ day: 'Miércoles', short: 'X', service: '5:00 – 24:00', dayOfWeek: 'Wednesday', closed: false },
	{ day: 'Jueves', short: 'J', service: '5:00 – 24:00', dayOfWeek: 'Thursday', closed: false },
	{ day: 'Viernes', short: 'V', service: '5:00 – 24:00', dayOfWeek: 'Friday', closed: false },
	{ day: 'Sábado', short: 'S', service: '5:00 – 24:00', dayOfWeek: 'Saturday', closed: false },
	{ day: 'Domingo', short: 'D', service: '5:00 – 24:00', dayOfWeek: 'Sunday', closed: false },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días, de 5:00 a 24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica las cuatro entradas con valor afirmativo: acceso, aparcamiento, aseo y asientos
 * adaptados para sillas de ruedas.
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la mayúscula de «Buenos precios»).
 * Dos son de 5 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Buen sitio, buena cocina, empleados estupendos y lo mejor Buenos precios',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un desayuno muy rico con cafecito y tostada con muy buen jamón',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen lugar para tomar una cerveza con buena comida',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Los tres momentos que nombran las reseñas destacadas.
 *
 * No es la carta: la ficha no publica carta ni precios. Cada bloque resume lo que dice una reseña
 * y de cuál sale.
 */
export const momentos = [
	{
		etiqueta: 'A primera hora',
		titulo: 'Desayuno',
		texto:
			'«Un desayuno muy rico con cafecito y tostada con muy buen jamón», en una reseña de 4 sobre 5.',
	},
	{
		etiqueta: 'A mediodía',
		titulo: 'Cocina',
		texto:
			'«Buen sitio, buena cocina, empleados estupendos», en una reseña de 5 sobre 5 que además habla de buenos precios.',
	},
	{
		etiqueta: 'A cualquier hora',
		titulo: 'Barra',
		texto: '«Buen lugar para tomar una cerveza con buena comida», en una reseña de 5 sobre 5.',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio, reserva ni web propia: la ficha no los publica.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Manolo?',
		answer:
			'En la carretera de Puerto de Santa María, sin número, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QM83+Q9 Sanlúcar de Barrameda y las coordenadas 36.7668963, -6.346533.',
	},
	{
		question: '¿A qué hora abre?',
		answer:
			'La ficha marca de 5:00 a 24:00 los siete días de la semana. Es un horario muy temprano, pensado para el desayuno; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Se puede desayunar?',
		answer:
			'La ficha no publica carta, pero una de las reseñas destacadas habla de «un desayuno muy rico con cafecito y tostada con muy buen jamón». Es la mención de un cliente, no una carta oficial.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. Las reseñas destacadas hablan de buena cocina, de una tostada con jamón y de cerveza con buena comida. Son menciones de clientes, no una lista oficial del local.',
	},
	{
		question: '¿Es caro?',
		answer:
			'La ficha no publica precios ni un rango de precio. Una de las reseñas destacadas dice textualmente «lo mejor Buenos precios», pero es la opinión de un cliente y no una tarifa. Para saber cuánto cuesta hoy hay que llamar al 673 64 07 92.',
	},
	{
		question: '¿Tiene aparcamiento adaptado?',
		answer:
			'La ficha marca el aparcamiento adaptado para sillas de ruedas como disponible, junto con el acceso, el aseo y los asientos adaptados. Son las cuatro entradas que publica.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 673 64 07 92.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio bar publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada. La ha creado Sur Digital.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'CafeOrCoffeeShop'],
	'@id': `${site.siteUrl}/#bar`,
	name: business.name,
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
	/* Sin `description`: la ficha no publica descripción del titular. */
	/* Sin `priceRange`: la ficha no publica precios. */
	/* Sin `acceptsReservations`: la ficha no publica si se admiten reservas. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.map((item) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: item.dayOfWeek,
		opens: '05:00',
		/* El cierre a las 24:00 se expresa como 00:00 en schema.org. */
		closes: '00:00',
	})),
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
