/**
 * Datos de Solitaire (Calle Palma, 16 · 13001 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/solitaire',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Solitaire',
	shortName: 'Solitaire',
	/** Categoría que publica Google en esta ficha: «Restaurante especializado en barbacoa», la única. */
	category: 'Restaurante especializado en barbacoa',
	categories: ['Restaurante especializado en barbacoa'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Palma, 16»: aquí se desarrolla a
	 * «Calle Palma, 16», como en el resto del repositorio (donde «C.» pasa a «Calle»). El código
	 * postal 13001 y el municipio (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Palma, 16',
	postalCode: '13001',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 617 47 60 35',
	latitude: 38.9832211,
	longitude: -3.9256744,
	/** Plus code que publica la ficha. */
	plusCode: 'X3MF+7P Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 88 reseñas). */
	rating: 4.9,
	reviewCount: 88,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregir su redacción ni su puntuación. Incluye la palabra «Halal» escrita también en
 * árabe, tal como la publica la ficha.
 */
export const descripcionLocal =
	'Restaurante árabe con comida al carbón y Cafeteria. Halal حلال';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Solitaire/@38.9832211,-3.9256744,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc30029c495ad:0xc4184123d7f8381d!8m2!3d38.9832211!4d-3.9256744!16s%2Fg%2F11xd8vf628?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJrZXEKQDDaw0RHTj41yNBGMQ&hl=es';

export const phoneHref = 'tel:+34617476035';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días a las 7:30. De martes a viernes cierra a las 23:30, el sábado y el domingo a las
 * 24:00 y el lunes hace una pausa de 16:30 a 18:00 para volver hasta las 23:30.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:30 – 16:30 · 18:00 – 23:30',
		shifts: [
			{ open: '07:30', close: '16:30' },
			{ open: '18:00', close: '23:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:30 – 23:30',
		shifts: [{ open: '07:30', close: '23:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:30 – 23:30',
		shifts: [{ open: '07:30', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:30 – 23:30',
		shifts: [{ open: '07:30', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:30 – 23:30',
		shifts: [{ open: '07:30', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre todos los días a las 7:30; cierra a las 23:30 (sábado y domingo a las 24:00) y el lunes para de 16:30 a 18:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Es una sola entrada y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Hay que esperar un poco: te pides un aperitivo exótico y esperas tan a gusto.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Comida muy rica de calidad, no es el típico kebab.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida estaba absolutamente deliciosa, fresca y llena de sabor.',
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
		question: '¿Dónde está Solitaire?',
		answer:
			'En la Calle Palma, 16, con código postal 13001, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3MF+7P Ciudad Real y las coordenadas 38.9832211, -3.9256744.',
	},
	{
		question: '¿Cuál es el horario de Solitaire?',
		answer:
			'La ficha publica un horario que abre todos los días a las 7:30. De martes a viernes cierra a las 23:30, el sábado y el domingo a las 24:00, y el lunes hace una pausa de 16:30 a 18:00 para volver hasta las 23:30. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante especializado en barbacoa, y la ficha publica una descripción del propio local que habla de «restaurante árabe con comida al carbón y Cafeteria. Halal حلال». Tiene 4,9 sobre 5 con 88 reseñas, y en las reseñas que destaca se habla de un aperitivo exótico, de la calidad de la comida y de que no es el típico kebab.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 617 47 60 35.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Palma, 16 y las coordenadas 38.9832211, -3.9256744. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3MF+7P Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Es halal?',
		answer:
			'La descripción que el propio local publica en su ficha termina con la palabra «Halal» escrita también en árabe. Esta web la recoge tal cual, sin ampliarla ni interpretarla: para cualquier detalle sobre los productos o la preparación, lo mejor es llamar al 617 47 60 35.',
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
		'Restaurante especializado en barbacoa en la Calle Palma, 16 de Ciudad Real, abierto todos los días desde las 7:30 hasta la noche.',
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
	/* «Barbacoa» ya está en español: se publica la categoría de Google tal cual, sin traducirla. */
	servesCuisine: ['Barbacoa'],
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
