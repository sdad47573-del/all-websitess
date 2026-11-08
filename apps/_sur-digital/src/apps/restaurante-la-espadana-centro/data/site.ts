/**
 * Datos del Restaurante La Espadaña Centro. (C. Francisco Martí Mora, 1 · 23002 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-espadana-centro',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Espadaña Centro',
	shortName: 'La Espadaña',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. Francisco Martí Mora, 1',
	postalCode: '23002',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (fijo). */
	phone: '+34 953 46 31 89',
	latitude: 37.7656439,
	longitude: -3.7908194,
	/** Plus code que publica la ficha. */
	plusCode: 'Q685+7M Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,2 con 1.410 reseñas). */
	rating: 4.2,
	reviewCount: 1410,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Espada%C3%B1a+Centro/@37.7656439,-3.7908194,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd773b9644f91:0xb550f348015b8cd8!8m2!3d37.7656439!4d-3.7908194!16s%2Fg%2F1tjz4qs1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJkU9kuXPXbQ0R2IxbAUjzULU&hl=es';

export const phoneHref = 'tel:+34953463189';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra el lunes y abre de martes a sábado en dos turnos: mediodía (12:00 a 16:00) y cena (desde
 * las 20:00 hasta medianoche). El domingo solo sirve el mediodía.
 *
 * El lunes 12 aparece cerrado con el aviso de que el horario podría ser diferente por la Fiesta
 * Nacional de España, pero fuentes públicas de la ficha confirman que el lunes cierra también el
 * resto del año.
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
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a sábado · mediodía de 12:00 a 16:00 y cena desde las 20:00; el domingo solo mediodía';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso, el aseo y los asientos adaptados para
 * sillas de ruedas están disponibles, y el aparcamiento adaptado está marcado como no disponible.
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
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Un buen sitio para comer raciones y tapear porque tienen muy buena cocina.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Totalmente recomendable, buen trato y el flamenquin que pedimos estaba muy rico.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Cerveza de calidad, Camareros atentos, Buen ambiente!',
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
		question: '¿Dónde está el Restaurante La Espadaña Centro?',
		answer:
			'En la C. Francisco Martí Mora, 1, con código postal 23002, en el centro de Jaén (Andalucía). La ficha publica el plus code Q685+7M Jaén y las coordenadas 37.7656439, -3.7908194.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Cierra el lunes. De martes a sábado abre en dos turnos: mediodía de 12:00 a 16:00 y cena desde las 20:00 hasta medianoche. El domingo solo sirve el mediodía, de 12:00 a 16:00. Es el horario publicado en la ficha consultada el 7 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina hace?',
		answer:
			'Google lo clasifica solo como restaurante y la ficha no publica un tipo de cocina ni una descripción del local, así que no se declara ninguna. En las reseñas que destaca se habla de raciones y tapeo, de «muy buena cocina» y de un flamenquín. Tiene 4,2 sobre 5 con 1.410 reseñas.',
	},
	{
		question: '¿Abre todos los días?',
		answer:
			'No: en el horario que publica la ficha cierra los lunes. Del martes al domingo abre todos los días al mediodía, desde las 12:00, y de martes a sábado también por la noche.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Francisco Martí Mora, 1 y las coordenadas 37.7656439, -3.7908194. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q685+7M Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la C. Francisco Martí Mora, 1 de Jaén, con mediodía y cena de martes a sábado y solo mediodía el domingo; cierra los lunes.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y la ficha no declara cocina. */
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
