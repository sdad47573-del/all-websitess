/**
 * Datos de Txakoli Ballano (Enekuri Artxanda Errepidea, 61 · 48150 Sondika, Bizkaia).
 *
 * Fuentes públicas consultadas el 11 de octubre de 2026:
 * dirección, teléfono 944 45 30 12 y coordenadas 43.2756368, -2.9230131 de la
 * ficha de Google Maps; especialidad y correo de Disfruta Bizkaia;
 * valoración 4,7 sobre 5 (59 opiniones) de Tripadvisor; horario orientativo
 * (cierra martes; lunes 9:00–17:00, miércoles a domingo 9:00–18:00) de guías
 * gastronómicas, a confirmar por teléfono.
 *
 * El horario y la carta pueden cambiar, así que no se presentan como
 * definitivos: la web indica que hay que confirmar por teléfono.
 */

export const site = {
	siteUrl: 'https://txakoli-ballano.vercel.app',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Txakoli Ballano',
	shortName: 'Ballano',
	category: 'Restaurante',
	categories: ['Restaurante', 'Parrilla', 'Cocina vasca'],
	streetAddress: 'Enekuri Artxanda Errepidea, 61',
	postalCode: '48150',
	city: 'Sondika',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	phone: '+34 944 45 30 12',
	email: 'miren_artxanda@hotmail.com',
	latitude: 43.2756368,
	longitude: -2.9230131,
	plusCode: '',
	rating: 4.7,
	reviewCount: 59,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Txakoli+Ballano/@43.2756368,-2.9230131,17z/data=!4m6!3m5!1s0xd4e500ddcfc2341:0xc4a5728dd110a5df!8m2!3d43.2756368!4d-2.9230131!16s%2Fg%2F1tk6rmrw?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Txakoli+Ballano/@43.2756368,-2.9230131,17z/data=!4m6!3m5!1s0xd4e500ddcfc2341:0xc4a5728dd110a5df!8m2!3d43.2756368!4d-2.9230131!16s%2Fg%2F1tk6rmrw?hl=es';

export const phoneHref = 'tel:+34944453012';

export const emailHref = `mailto:${business.email}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario orientativo publicado por guías gastronómicas (no por la ficha en
 * abierto): cierra los martes; lunes de 9:00 a 17:00 y de miércoles a domingo
 * de 9:00 a 18:00. A confirmar siempre por teléfono.
 */
export const hours = [
	{ day: 'Lunes', service: '9:00 – 17:00', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:00 – 18:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:00 – 18:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:00 – 18:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:00 – 18:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:00 – 18:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Cierra martes; resto, de mañana a tarde (confirmar)';

export const reviews = [
	{
		text: 'Casa de comidas con sabor auténtico de cocina tradicional vasca y trato familiar.',
		rating: 5,
		source: 'Resumen de opiniones públicas',
	},
	{
		text: 'Destacan las zamburiñas, los chipirones en su tinta y el chuletón a la piedra.',
		rating: 5,
		source: 'Resumen de opiniones públicas',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Txakoli Ballano?',
		answer:
			'En Enekuri Artxanda Errepidea, 61, 48150 Sondika (Bizkaia), en la carretera del monte Artxanda, cerca del mirador. Las coordenadas de la ficha son 43.2756368, -2.9230131.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'El teléfono publicado es el 944 45 30 12. Conviene llamar para reservar, sobre todo en fin de semana, porque el comedor interior es pequeño y suele llenarse.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Las guías publican un horario orientativo: cierra los martes; los lunes de 9:00 a 17:00 y de miércoles a domingo de 9:00 a 18:00. Puede variar, así que confirma por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Cocina tradicional vasca de parrilla: carnes y pescados, con platos como zamburiñas, chipirones en su tinta, rabas, bacalao a la vizcaína, chuletón a la piedra y postres caseros como la pantxineta. Precio moderado, unos 45 € por persona según publicaciones recientes.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar. Llama al 944 45 30 12 o escribe a miren_artxanda@hotmail.com; varios visitantes avisan de que presentarse sin reserva el fin de semana puede significar no encontrar sitio.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en la zona alta, en la carretera de Artxanda: se llega bien en coche, con aparcamiento en la misma puerta, y también en funicular de Artxanda. Los botones de esta web abren las indicaciones de Google Maps y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, elaborada con datos públicos (Google Maps y guías gastronómicas) consultados el 11 de octubre de 2026. Las fotos son ilustraciones propias, no de la ficha. No vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina vasca y parrilla en Enekuri Artxanda Errepidea, 61, Sondika (Bizkaia). Teléfono 944 45 30 12.',
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
			dayOfWeek: 'Monday',
			opens: '09:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '18:00',
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
