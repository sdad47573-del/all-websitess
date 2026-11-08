/**
 * Datos de Restaurante Amanecer (Carrer Xaló, 8 · 03509 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios de
 * accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios, ningún distintivo ni web propia,
 * así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-amanecer',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Amanecer',
	shortName: 'Amanecer',
	/** Categoría única que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha, con el nombre oficial de la calle en valenciano. */
	streetAddress: 'Carrer Xaló, 8',
	postalCode: '03509',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 622 52 37 38',
	latitude: 38.5341684,
	longitude: -0.1689714,
	/** Plus code que publica la ficha. */
	plusCode: 'GRMJ+MC Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 728 reseñas). */
	rating: 4.5,
	reviewCount: 728,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Amanecer/@38.5341684,-0.1689714,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b188e145023:0x6fdce0f351822710!8m2!3d38.5341684!4d-0.1689714!16s%2Fg%2F11gd38ts4v?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJI1AUjhgbYg0RECeCUfPg3G8&hl=es';

export const phoneHref = 'tel:+34622523738';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * abre de 6:00 a 17:00 de lunes a viernes, los sábados de 6:30 a 13:00 y cierra los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 17:00',
		shifts: [{ open: '06:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 17:00',
		shifts: [{ open: '06:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 17:00',
		shifts: [{ open: '06:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 17:00',
		shifts: [{ open: '06:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 17:00',
		shifts: [{ open: '06:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:30 – 13:00',
		shifts: [{ open: '06:30', close: '13:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 6:00 a 17:00 de lunes a viernes; los sábados de 6:30 a 13:00 y los domingos cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluida la coma pegada a la
 * palabra «buen» de la tercera). La ficha las presenta entrecomilladas; esas comillas son del
 * propio Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 4, 5 y
 * 3 sobre 5.
 */
export const reviews = [
	{
		text: 'Buen restaurante con buenos precios para Almuerzos y menú diario Buena comida',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buenos menús, comida casera y buen servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Servicio correcto ,buen sitio para almorzar o desayunar',
		rating: 3,
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
		question: '¿Dónde está Restaurante Amanecer?',
		answer:
			'En el Carrer Xaló, 8, con código postal 03509, en Benidorm (Alicante). La ficha publica el plus code GRMJ+MC Benidorm y las coordenadas 38.5341684, -0.1689714.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Amanecer?',
		answer:
			'La ficha publica de 6:00 a 17:00 de lunes a viernes y de 6:30 a 13:00 los sábados; los domingos cierra. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto. Tiene 4,5 sobre 5 con 728 reseñas, y en las tres reseñas que destaca se habla del menú diario y los buenos precios, de la comida casera y el buen servicio, y de que es buen sitio para almorzar o desayunar.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 622 52 37 38.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Xaló, 8 y las coordenadas 38.5341684, -0.1689714. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRMJ+MC Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante en el Carrer Xaló, 8 de Benidorm, con servicio de 6:00 a 17:00 de lunes a viernes y los sábados por la mañana.',
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
	/* Sin `servesCuisine`: Google publica un tipo de establecimiento, no una cocina concreta. */
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
