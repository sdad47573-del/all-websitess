/**
 * Datos de Restaurante La Espadaña Centro (Calle Francisco Martí Mora, 1 · 23002 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 8 de octubre de 2026.
 * La ficha no publica carta, precios, descripción del titular ni web propia, así que no se
 * reproduce ninguno de ellos.
 */

export const site = {
	siteUrl: 'https://restaurante-la-espada-centro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Espadaña Centro',
	shortName: 'La Espadaña Centro',
	/** Categoría principal publicada en la ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Calle Francisco Martí Mora, 1',
	postalCode: '23002',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 953 46 31 89',
	latitude: 37.7656439,
	longitude: -3.7908194,
	/** Plus code que publica la ficha. */
	plusCode: 'Q685+7M Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 1.410 reseñas). */
	rating: 4.2,
	reviewCount: 1410,
	site: site.siteUrl,
} as const;

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
 * Consultado el 8 de octubre de 2026. El local abre de martes a sábado por las mañanas y las noches
 * (12:00–16:00 y 20:00–24:00), los domingos solo por la mañana (12:00–16:00) y cierra los lunes.
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
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
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
export const hoursSummary = 'Martes a sábado: 12:00–16:00 y 20:00–24:00; domingo: 12:00–16:00; lunes: cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
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
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Espadaña Centro?',
		answer:
			'En Calle Francisco Martí Mora, 1, con código postal 23002, en Jaén (Andalucía). La ficha publica el plus code Q685+7M Jaén y las coordenadas 37.7656439, -3.7908194.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha indica: martes a sábado de 12:00 a 16:00 y de 20:00 a 24:00; domingos de 12:00 a 16:00; lunes cerrado. Es el horario publicado en la ficha consultada el 8 de octubre de 2026. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante. Tiene 4,2 sobre 5 con 1.410 reseñas, y en las reseñas que destaca se habla de raciones, tapeo, buena cocina, flamenquín y buen ambiente.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica ningún sistema de reservas ni una descripción del titular que lo mencione. Esta web no permite reservar: para preguntar por una mesa hay que llamar al 953 46 31 89.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: acceso, aseo y asientos adaptados para sillas de ruedas (disponibles); aparcamiento adaptado para sillas de ruedas (no disponible).',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Calle Francisco Martí Mora, 1 de Jaén, con horario de martes a sábado de 12:00–16:00 y 20:00–24:00, domingos 12:00–16:00 y lunes cerrado.',
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
	acceptsReservations: true,
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

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
