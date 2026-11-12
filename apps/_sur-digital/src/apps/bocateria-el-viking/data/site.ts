/**
 * Bocatería El Víking — Carrer la Santamaría, 10 (03710 Calp, Alicante).
 *
 * Solo datos públicos y verificables, tomados de su ficha de Google Maps
 * (feature 0x129dfe2f6d321d6d:0xf3f816bc6300e770), consultada el 12 de noviembre de 2026:
 * - Dirección: Carrer la Santamaría, 10, 03710 Calp (Alicante).
 * - Teléfono: +34 965 83 22 87.
 * - Horario: martes a domingo de 9:30 a 24:00; lunes cerrado.
 * - Categorías: bocatería, bar de tapas, restaurante y comida para llevar.
 * - 461 reseñas en la ficha. La ficha no publica nota media en el bloque consultado,
 *   así que no se publica ninguna cifra de valoración.
 *
 * Fotos: las del perfil público del establecimiento en Google Maps (src/assets/fotos/),
 * con nota de origen y oferta de retirada.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/bocateria-el-viking',
	consultado: '12 de noviembre de 2026',
} as const;

export const business = {
	name: 'Bocatería El Víking',
	shortName: 'El Víking',
	category: 'Bocatería',
	categories: ['Bocatería', 'Bar de tapas', 'Restaurante', 'Comida para llevar'],
	streetAddress: 'Carrer la Santamaría, 10',
	district: 'Santamaría',
	postalCode: '03710',
	city: 'Calp',
	municipality: 'Calp',
	province: 'Alicante',
	region: 'Comunitat Valenciana',
	country: 'ES',
	phone: '+34 965 83 22 87',
	latitude: 38.6437052,
	longitude: 0.0510605,
	reviewCount: 461,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Bocateria+El+V%C3%ADking/@38.6437052,0.0510605,17z/data=!3m1!4b1!4m6!3m5!1s0x129dfe2f6d321d6d:0xf3f816bc6300e770!8m2!3d38.6437052!4d0.0510605!16s%2Fg%2F1tf90mcm';

export const phoneHref = 'tel:+34965832287';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
	{ day: 'Lunes', service: 'Cerrado', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:30 – 24:00', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:30 – 24:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:30 – 24:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:30 – 24:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:30 – 24:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:30 – 24:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Mar a dom 9:30–24:00 · Lunes cerrado';

export const hoursSource = 'Google Maps · 12 de noviembre de 2026';

export const faqs = [
	{
		question: '¿Dónde está Bocatería El Víking?',
		answer:
			'En Carrer la Santamaría, 10, 03710 Calp (Alicante), en las coordenadas 38.6437052, 0.0510605. Los botones de esta web abren las indicaciones en Google Maps.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer: 'El teléfono de la ficha pública es el 965 83 22 87.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'Según su ficha de Google Maps, abre de martes a domingo de 9:30 a 24:00 y cierra los lunes. Llama al 965 83 22 87 para confirmar festivos y puentes.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Es una bocatería con barra de tapas: bocadillos, tapas y raciones (jamón, croquetas, albóndigas), con mesas en el comedor y en la terraza. La ficha no publica carta ni precios, así que se confirman en el local.',
	},
	{
		question: '¿Tiene terraza?',
		answer:
			'Sí. Las fotos de su perfil público muestran mesas en el exterior, además del comedor con manteles y la barra de mármol.',
	},
	{
		question: '¿Se puede reservar por esta web?',
		answer:
			'No: esta web es informativa y no gestiona reservas. Llama al 965 83 22 87 para reservar o confirmar mesa.',
	},
	{
		question: '¿Dónde puedo ver más fotos y opiniones?',
		answer:
			'La galería de esta web reúne fotos del perfil público del bar en Google Maps. En la ficha enlazada están las 461 reseñas y el resto de fotos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, creada con datos públicos de ubicación, contacto y horario. No vende, no reserva y no tramita pedidos.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bocatería El Víking, bocatería y bar de tapas en Carrer la Santamaría, 10, 03710 Calp (Alicante). Web informativa no oficial con ubicación, contacto, horario y mapa.',
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
	servesCuisine: ['Bocadillos', 'Tapas', 'Española'],
	openingHoursSpecification: hours
		.filter((item) => item.service !== 'Cerrado')
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: '09:30',
			closes: '24:00',
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
