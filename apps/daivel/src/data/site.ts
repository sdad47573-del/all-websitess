/**
 * Datos de DAIVEL (Av. de la Armada Española, 21 · 03502 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas.
 *
 * Es la ficha con más reseñas de este grupo de webs (1.131) y la primera con tres reseñas destacadas
 * de 4 sobre 5 en lugar de 5 sobre 5.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://daivel.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps: todo en mayúsculas. */
	name: 'DAIVEL',
	shortName: 'Daivel',
	/** Categoría que publica Google en esta ficha: «Bar restaurante», la única. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/** Dirección publicada en la ficha: Av. de la Armada Española, 21 (03502 Benidorm). */
	streetAddress: 'Av. de la Armada Española, 21',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un móvil. */
	phone: '+34 661 02 59 49',
	latitude: 38.5367542,
	longitude: -0.1490919,
	/** Plus code que publica la ficha. */
	plusCode: 'GVP2+P9 Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 1.131 reseñas). */
	rating: 4.7,
	reviewCount: 1131,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni completar la frase, que queda abierta con unos puntos suspensivos,
 * como en `bar-restaurante-di-mari`.
 */
export const descripcionLocal = 'Arroces, fideuá, carnes...';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/DAIVEL/@38.5367542,-0.1490919,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204d2bcb2ef21:0x228d7fd3789b73f7!8m2!3d38.5367542!4d-0.1490919!16s%2Fg%2F11dxdm6hwp?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJIe-yvNIEYg0R93ObeNN_jSI&hl=es';

/** Es un móvil (661 02 59 49), y así se publica el enlace de llamada. */
export const phoneHref = 'tel:+34661025949';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local abre en un solo tramo, de 10:00 a 17:00, de jueves a lunes; cierra los
 * martes y los miércoles.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 17:00',
		shifts: [{ open: '10:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 10:00 a 17:00 de jueves a lunes; cierra martes y miércoles';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 4 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Una cerveza con buena atencion a buen precio y con una tapita de jamon muy rico',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Raciones abundantes, ricas y a precios muy competitivos.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Platos combinados buenos, precios asequibles y el camarero es un crack.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta inventa una tarifa ni un menú.
 */
export const faqs = [
	{
		question: '¿Dónde está DAIVEL?',
		answer:
			'En la Av. de la Armada Española, 21, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GVP2+P9 Benidorm y las coordenadas 38.5367542, -0.1490919.',
	},
	{
		question: '¿Cuál es el horario de DAIVEL?',
		answer:
			'La ficha publica un solo tramo, de 10:00 a 17:00, de jueves a lunes; cierra los martes y los miércoles. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Bar restaurante». Tiene 4,7 sobre 5 con 1.131 reseñas, y el propio local describe su propuesta con tres palabras: «Arroces, fideuá, carnes...». En las reseñas que destaca se habla de raciones abundantes y buenas, de platos combinados y de precios asequibles.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 661 02 59 49.',
	},
	{
		question: '¿Qué significa el distintivo «Se admiten perros»?',
		answer:
			'Es el distintivo que Google muestra junto al nombre en la ficha. Esta web lo recoge tal cual y no lo amplía ni lo interpreta: para saber si hay alguna condición, lo mejor es llamar al 661 02 59 49.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 661 02 59 49.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de la Armada Española, 21 y las coordenadas 38.5367542, -0.1490919. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVP2+P9 Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
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
		'Bar restaurante en la Av. de la Armada Española, 21 de Benidorm, con arroces, fideuá y carnes, y horario de 10:00 a 17:00 de jueves a lunes.',
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
	/* Sin `servesCuisine`: Google publica la categoría «Bar restaurante», que no declara cocina. */
	/* Sin `priceRange`: la ficha no publica carta ni precios. */
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
