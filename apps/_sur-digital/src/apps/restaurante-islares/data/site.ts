/**
 * Datos de Restaurante Islares (Calle del Actor Luis Prendes, 15 · 03502 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-islares',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Islares',
	shortName: 'Islares',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa como
	 * categoría principal), «Salón para eventos», «Restaurante de comida para llevar» y «Arrocería».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Salón para eventos', 'Restaurante de comida para llevar', 'Arrocería'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. del Actor Luis Prendes, 15»: aquí
	 * se desarrolla a «Calle del Actor Luis Prendes, 15», como en el resto del repositorio.
	 */
	streetAddress: 'Calle del Actor Luis Prendes, 15',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 965 85 89 88',
	latitude: 38.531732,
	longitude: -0.1647354,
	/** Plus code que publica la ficha. */
	plusCode: 'GRJP+M4 Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 1.778 reseñas). */
	rating: 4.4,
	reviewCount: 1778,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni recortarlo.
 */
export const descripcionLocal =
	'Restaurante Islares Benidorm, ubicado en la zona de La Cala, es un restaurante de cocina mediterránea donde disfrutar de arroces, paellas, carnes, pescados frescos y tapas elaboradas con productos de calidad. Ofrecemos menú del día, una carta variada con entrantes, hamburguesas, pasta, pizzas, carnes y postres caseros, además de nuestros arroces por encargo como arroz negro, arroz de marisco o arroz de bogavante. También disponemos de comida para llevar para disfrutar de nuestra cocina en casa. Nuestro restaurante es ideal para comidas de grupo, celebraciones y eventos, con un ambiente cercano y una excelente relación calidad-precio.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Islares/@38.531732,-0.1647354,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b26cc025b79:0x6a3d4a9084465c81!8m2!3d38.531732!4d-0.1647354!16s%2Fg%2F11cp7rxc63?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJeVsCzCYbYg0RgVxGhJBKPWo&hl=es';

export const phoneHref = 'tel:+34965858988';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre la semana completa: abre todos los días, con un tramo
 * continuo. De 10:00 a 23:00 los lunes, viernes, sábados y domingos; los martes y jueves cierra a
 * las 19:00, y el miércoles, a las 17:00, el día que abre antes (a las 9:00).
 *
 * No hay turnos partidos ni días cerrados, así que cada día genera una única entrada en los datos
 * estructurados (siete especificaciones en total).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 19:00',
		shifts: [{ open: '10:00', close: '19:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre todos los días: de 10:00 a 23:00 lunes, viernes, sábado y domingo; martes y jueves hasta las 19:00 y el miércoles hasta las 17:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como
 * disponibles, y el aparcamiento adaptado, como no disponible. La ficha no publica ninguna otra.
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera escribe «guarnicion» y
 * «pientos» sin tilde). Dos son de 5 sobre 5 y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Estupendas raciones, buena cocina excelente servicio',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El arroz buenísimo y la merluza a baja temperatura con salsa está espectacular.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El entrecot con guarnicion de patatas y pientos, pedimos la salsa de boletus.',
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
		question: '¿Dónde está Restaurante Islares?',
		answer:
			'En la Calle del Actor Luis Prendes, 15, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GRJP+M4 Benidorm y las coordenadas 38.531732, -0.1647354.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Islares?',
		answer:
			'La ficha publica un horario continuo y sin días de cierre: de 10:00 a 23:00 los lunes, viernes, sábados y domingos; los martes y jueves de 10:00 a 19:00, y el miércoles de 9:00 a 17:00. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, salón para eventos, restaurante de comida para llevar y arrocería. Su descripción del titular habla de cocina mediterránea, con arroces, paellas, carnes, pescados frescos y tapas, además de menú del día, entrantes, hamburguesas, pasta, pizzas y postres caseros. Tiene 4,4 sobre 5 con 1.778 reseñas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 965 85 89 88.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle del Actor Luis Prendes, 15 y las coordenadas 38.531732, -0.1647354. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRJP+M4 Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado para sillas de ruedas, como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 965 85 89 88.',
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
		'Arrocería y restaurante de cocina mediterránea en la Calle del Actor Luis Prendes, 15 de Benidorm, con horario continuo todos los días.',
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
	 * `servesCuisine` recoge la cocina que declara la propia descripción del titular («cocina
	 * mediterránea»). Las categorías de Google (restaurante, salón para eventos, comida para llevar y
	 * arrocería) son tipos de establecimiento y no se trasladan aquí.
	 */
	servesCuisine: ['Cocina mediterránea'],
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
