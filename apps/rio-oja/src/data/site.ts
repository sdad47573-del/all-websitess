/**
 * Datos de Rio-Oja Restaurante (Calle del Perro, 4 · 48005 Bilbao, Bizkaia).
 *
 * Fuentes públicas consultadas el 11 de octubre de 2026:
 * nombre, dirección, teléfono 944 15 08 71 y coordenadas 43.2577497, -2.9246324
 * de la ficha de Google Maps; horario (lunes cerrado, martes a domingo de 9:00
 * a 23:00), correo gaizkita9@hotmail.com y servicios (para llevar, wifi, pago
 * en efectivo) de su web oficial rio-oja.eatbu.com; negocio familiar de 3
 * generaciones con 67 años, premio Surbisa y 10 años en la guía Michelin según
 * Disfruta Bizkaia; valoración 3,7 sobre 5 (863 opiniones) en Tripadvisor.
 */

export const site = {
	siteUrl: 'https://rio-oja.vercel.app',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Rio-Oja Restaurante',
	shortName: 'Rio-Oja',
	category: 'Restaurante',
	categories: ['Bar restaurante', 'Cocina vasca'],
	streetAddress: 'Calle del Perro, 4',
	postalCode: '48005',
	city: 'Bilbao',
	zone: 'Casco Viejo',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	phone: '+34 944 15 08 71',
	email: 'gaizkita9@hotmail.com',
	web: 'https://rio-oja.eatbu.com/?lang=es',
	latitude: 43.2577497,
	longitude: -2.9246324,
	plusCode: '',
	rating: 3.7,
	reviewCount: 863,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Rio-Oja+Restaurante/@43.2577497,-2.9246324,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4fcc2a06552d:0x40911c6234b1f029!8m2!3d43.2577497!4d-2.9246324!16s%2Fg%2F1v26nf6m?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Rio-Oja+Restaurante/@43.2577497,-2.9246324,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4fcc2a06552d:0x40911c6234b1f029!8m2!3d43.2577497!4d-2.9246324!16s%2Fg%2F1v26nf6m?hl=es';

export const phoneHref = 'tel:+34944150871';

export const emailHref = `mailto:${business.email}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario publicado en su web oficial: lunes cerrado y de martes a domingo
 * de 9:00 a 23:00. A confirmar por teléfono en festivos.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:00 – 23:00', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:00 – 23:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:00 – 23:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:00 – 23:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:00 – 23:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:00 – 23:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lunes cerrado; de martes a domingo, 9:00 – 23:00';

export const servicios = [
	{ label: 'Comida para llevar', disponible: true },
	{ label: 'Wifi gratis', disponible: true },
	{ label: 'Pago en efectivo', disponible: true },
] as const;

export const reviews = [
	{
		text: 'Bar restaurante de txikiteros con cazuelitas de barro y guisos que ganan con los días.',
		rating: 4,
		source: 'Resumen de opiniones públicas',
	},
	{
		text: 'Imprescindibles los chipirones en su tinta y el bacalao, al pilpil o a la vizcaína.',
		rating: 4,
		source: 'Resumen de opiniones públicas',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Rio-Oja Restaurante?',
		answer:
			'En la Calle del Perro, 4, 48005 Bilbao (Bizkaia), en pleno Casco Viejo. Las coordenadas de la ficha son 43.2577497, -2.9246324.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'El teléfono publicado es el 944 15 08 71. Su Instagram (@rio_oja_bilbao) indica reservas a ese número. También tienen correo: gaizkita9@hotmail.com.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Su web oficial publica: lunes cerrado y de martes a domingo de 9:00 a 23:00, con comida para llevar. En festivos conviene confirmar por teléfono.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Bar restaurante de cocina vasca casera con 67 años y 3 generaciones de familia: cazuelitas de barro, chipirones en su tinta, bacalao al pilpil (unos 10 €), casquería y carrilleras. Precio orientativo de 20 a 30 €.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar. Llama al 944 15 08 71 o escribe a gaizkita9@hotmail.com; aceptan reservas y preparan comida para llevar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en las Siete Calles del Casco Viejo, con metro y tranvía cercanos. Los botones de esta web abren las indicaciones de Google Maps y el mapa de abajo señala el local.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, elaborada con datos públicos (Google Maps, web oficial del local y guías) consultados el 11 de octubre de 2026. Las fotos son ilustraciones propias, no de la ficha. No vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante de cocina vasca en la Calle del Perro, 4, Casco Viejo de Bilbao. Cazuelitas, chipirones y bacalao. Teléfono 944 15 08 71.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	email: business.email,
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
	servesCuisine: ['Vasca'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '23:00',
		},
	],
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	inLanguage: 'es',
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
