/**
 * Datos de Las Sevillanas - El Tapeito (Avenida de la Marina Baixa, 3 · 03509 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://las-sevillanas-el-tapeito.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Las Sevillanas - El Tapeito',
	shortName: 'Las Sevillanas',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de la Marina Baixa, 3»: aquí se
	 * desarrolla a «Avenida de la Marina Baixa, 3», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida de la Marina Baixa, 3',
	postalCode: '03509',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 966 81 39 42',
	latitude: 38.5245434,
	longitude: -0.1652351,
	/** Plus code que publica la ficha. */
	plusCode: 'GRFM+RW Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 408 reseñas). */
	rating: 4.5,
	reviewCount: 408,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregir su redacción ni su puntuación (conserva «muchisimas mas» y «La paellas»).
 */
export const descripcionLocal =
	'Local de raciones típicas andaluzas, arroces exquisitos y muchisimas mas cositas regentado por dos sevillanas con mucho arte. Se recomienda reservar los arroces al mismo tiempo que la mesa para garantizar un mejor servicio. La paellas por la tarde solo se sirven por encargo.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Las+Sevillanas+-+El+Tapeito/@38.5245434,-0.1652351,17z/data=!3m1!4b1!4m6!3m5!1s0xd621adf1ceccccf:0x359eb5ed06763eb8!8m2!3d38.5245434!4d-0.1652351!16s%2Fg%2F11g8xhzgcv?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJz8zsHN8aYg0RuD52Bu21njU&hl=es';

export const phoneHref = 'tel:+34966813942';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre la semana completa: abre de 12:00 a 24:00 los lunes,
 * martes, viernes, sábados y domingos, y cierra los miércoles y los jueves.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados, y los dos días cerrados no
 * generan ninguna entrada (cinco especificaciones en total).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre de 12:00 a 24:00 los lunes, martes, viernes, sábados y domingos; miércoles y jueves cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el aseo y los asientos adaptados para sillas
 * de ruedas. La ficha no publica ni el acceso ni el aparcamiento.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera abre un paréntesis que no
 * cierra y la tercera encadena puntos suspensivos). Dos son de 5 sobre 5 y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos oreja, chopitos y Cazón en adobo (todo muy rico y el pescado sabroso.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Magnífico bar y su dueña aun mejor, cerveza fresquita e inmejorables tapas',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Sitio agradable muy buen tapeo..viendo el mar..buena calidad y buen precio',
		rating: 4,
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
		question: '¿Dónde está Las Sevillanas - El Tapeito?',
		answer:
			'En la Avenida de la Marina Baixa, 3, con código postal 03509, en Benidorm (Alicante). La ficha publica el plus code GRFM+RW Benidorm y las coordenadas 38.5245434, -0.1652351.',
	},
	{
		question: '¿Cuál es el horario de Las Sevillanas - El Tapeito?',
		answer:
			'La ficha publica un horario continuo de 12:00 a 24:00 los lunes, martes, viernes, sábados y domingos, y el cierre los miércoles y los jueves. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto en la categoría. Su descripción del titular habla de raciones típicas andaluzas y arroces, regentado por dos sevillanas. Tiene 4,5 sobre 5 con 408 reseñas, y en las reseñas que destaca se habla de oreja, chopitos y cazón en adobo, de la cerveza y las tapas, y de un tapeo con vistas al mar.',
	},
	{
		question: '¿Se puede reservar y hay que pedir los arroces con antelación?',
		answer:
			'Sí conviene reservar. La descripción del titular recomienda reservar los arroces al mismo tiempo que la mesa para garantizar un mejor servicio, y avisa de que las paellas por la tarde solo se sirven por encargo. Esta web no permite reservar: el teléfono publicado es el 966 81 39 42.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de la Marina Baixa, 3 y las coordenadas 38.5245434, -0.1652351. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRFM+RW Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el aseo y los asientos adaptados para sillas de ruedas. No publica ni el acceso ni el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de tapeo andaluz y arroces en la Avenida de la Marina Baixa, 3 de Benidorm, con horario continuo de 12:00 a 24:00.',
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
	/*
	 * La categoría de Google es «Restaurante» y no declara cocina, pero la descripción del titular sí
	 * habla de «raciones típicas andaluzas», así que `servesCuisine` recoge esa cocina.
	 */
	servesCuisine: ['Cocina andaluza'],
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
