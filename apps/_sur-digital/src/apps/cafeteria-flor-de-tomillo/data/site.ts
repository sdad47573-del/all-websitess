/**
 * Cafetería Flor de Tomillo — C. Paloma, 3, Loc 1 (13001 Ciudad Real).
 *
 * Solo datos públicos y verificables, tomados de su ficha de Google Maps
 * (feature 0xd6bc3cc99fb4379:0x607db30fbdeac580), consultada el 12 de noviembre de 2026:
 * - Dirección: C. Paloma, 3, Loc 1, 13001 Ciudad Real.
 * - Teléfono: +34 657 27 44 86.
 * - Horario: lunes a viernes 9:00–16:00; sábado 9:30–16:00; domingo cerrado.
 * - Categoría: cafetería. Valoración 4,8 con 26 reseñas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno.
 *
 * Fotos: las del perfil público del establecimiento en Google Maps (src/assets/fotos/),
 * con nota de origen y oferta de retirada.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/cafeteria-flor-de-tomillo',
	consultado: '12 de noviembre de 2026',
} as const;

export const business = {
	name: 'Cafetería Flor de Tomillo',
	shortName: 'Flor de Tomillo',
	category: 'Cafetería',
	categories: ['Cafetería', 'Bocadillos', 'Platos del día', 'Raciones'],
	streetAddress: 'C. Paloma, 3, Loc 1',
	district: 'Centro',
	postalCode: '13001',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 657 27 44 86',
	latitude: 38.9853479,
	longitude: -3.927276,
	reviewCount: 26,
	rating: '4,8',
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Cafeter%C3%ADa+Flor+de+Tomillo/@38.9853479,-3.927276,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3cc99fb4379:0x607db30fbdeac580!8m2!3d38.9853479!4d-3.927276!16s%2Fg%2F11y223435x?hl=es';

export const phoneHref = 'tel:+34657274486';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
	{ day: 'Lunes', service: '9:00 – 16:00', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:00 – 16:00', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:00 – 16:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:00 – 16:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:00 – 16:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:30 – 16:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'L–V 9:00–16:00 · Sáb 9:30–16:00 · Dom cerrado';

export const hoursSource = 'Google Maps · 12 de noviembre de 2026';

export const faqs = [
	{
		question: '¿Dónde está Cafetería Flor de Tomillo?',
		answer:
			'En C. Paloma, 3, Loc 1, 13001 Ciudad Real, en las coordenadas 38.9853479, -3.927276. Los botones de esta web abren las indicaciones en Google Maps.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer: 'El teléfono de la ficha pública es el 657 27 44 86.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'Según su ficha de Google Maps, abre de lunes a viernes de 9:00 a 16:00, el sábado de 9:30 a 16:00 y cierra los domingos. Llama al 657 27 44 86 para confirmar festivos.',
	},
	{
		question: '¿Qué se puede tomar?',
		answer:
			'Es una cafetería de barrio: en las fotos de su perfil se ven bocadillos, platos del día y raciones, además de cervezas y refrescos. La ficha no publica carta ni precios, así que se confirman en el local.',
	},
	{
		question: '¿Se puede reservar por esta web?',
		answer:
			'No: esta web es informativa y no gestiona reservas. Llama al 657 27 44 86 para reservar o confirmar mesa.',
	},
	{
		question: '¿Dónde puedo ver más fotos y opiniones?',
		answer:
			'La galería de esta web reúne fotos del perfil público del local en Google Maps. En la ficha enlazada están las 26 reseñas y el resto de fotos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, creada con datos públicos de ubicación, contacto y horario. No vende, no reserva y no tramita pedidos.',
	},
] as const;

export const cafeSchema = {
	'@context': 'https://schema.org',
	'@type': 'CafeOrCoffeeShop',
	'@id': `${site.siteUrl}/#cafeteria`,
	name: business.name,
	description:
		'Cafetería Flor de Tomillo, cafetería en C. Paloma, 3, Loc 1, 13001 Ciudad Real. Web informativa no oficial con ubicación, contacto, horario y mapa.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.region,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	servesCuisine: ['Cafetería', 'Bocadillos', 'Cocina casera'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.8',
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours
		.filter((item) => item.service !== 'Cerrado')
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: item.service.slice(0, 4).trim(),
			closes: '16:00',
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
} as const;
