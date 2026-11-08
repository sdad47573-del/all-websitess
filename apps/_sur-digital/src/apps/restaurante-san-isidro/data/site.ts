/**
 * Datos de Restaurante San Isidro (Mungialde Etorbidea, 25 · 48160 Derio, Bizkaia).
 *
 * Todo sale de fuentes públicas consultadas el 11 de octubre de 2026:
 * nombre, dirección, teléfono y coordenadas de la ficha de Google Maps
 * (43.2988835, -2.8859173); valoración 4,6 sobre 5 con unas 763 reseñas
 * según el perfil agregado de Kitking; cocina vasca y precio medio ~30 €
 * según Páginas Amarillas.
 *
 * La ficha no publica en abierto el horario semanal completo ni la carta,
 * así que no se inventan: la web indica que hay que confirmar por teléfono.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-san-isidro',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Restaurante San Isidro',
	shortName: 'San Isidro',
	category: 'Restaurante',
	categories: ['Restaurante', 'Cocina vasca'],
	streetAddress: 'Mungialde Etorbidea, 25',
	postalCode: '48160',
	city: 'Derio',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	phone: '+34 944 54 07 98',
	latitude: 43.2988835,
	longitude: -2.8859173,
	plusCode: '',
	rating: 4.6,
	reviewCount: 763,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+San+Isidro/@43.2988835,-2.8859173,17z/data=!4m6!3m5!1s0xd4e4588b803882f:0xbc876fcbdaffafea!8m2!3d43.2988835!4d-2.8859173!16s%2Fg%2F1tk8df90?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Restaurante+San+Isidro/@43.2988835,-2.8859173,17z/data=!4m6!3m5!1s0xd4e4588b803882f:0xbc876fcbdaffafea!8m2!3d43.2988835!4d-2.8859173!16s%2Fg%2F1tk8df90?hl=es';

export const phoneHref = 'tel:+34944540798';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const hoursSummary = 'Horario por confirmar: llama antes de ir';

export const accesibilidad = [
	{ label: 'Conviene confirmar accesibilidad por teléfono', disponible: true },
] as const;

export const reviews = [
	{
		text: 'Fantástica comida y atención. Relación calidad-precio muy buena. Súper recomendable.',
		rating: 5,
		source: 'Opinión pública agregada (Tripadvisor)',
	},
	{
		text: 'Cocina vasca de menú y carta, trato cercano y raciones generosas.',
		rating: 5,
		source: 'Resumen de opiniones públicas',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante San Isidro?',
		answer:
			'En Mungialde Etorbidea, 25, 48160 Derio (Bizkaia, País Vasco), en la zona de San Isidro/Aldekona. Las coordenadas de la ficha son 43.2988835, -2.8859173.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'El teléfono publicado es el 944 54 07 98. Llama en horario de apertura para reservar o confirmar el horario del día.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'El horario puede variar según temporada y la ficha no publica el horario semanal completo en abierto. Lo más fiable es llamar al 944 54 07 98 antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Las guías lo describen como restaurante de cocina vasca, con menú y carta, y un precio medio orientativo de unos 30 €. La carta del día puede cambiar, así que confirma por teléfono.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar. Para grupos, y sobre todo a partir de 6 personas, se recomienda llamar con antelación al 944 54 07 98.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en Mungialde Etorbidea, 25, con aparcamiento público cercano. Los botones de esta web abren las indicaciones de Google Maps desde tu posición y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, elaborada con datos públicos (Google Maps y guías de restaurantes) consultados el 11 de octubre de 2026. Las fotos son ilustrativas propias, no de la ficha. No vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina vasca en Mungialde Etorbidea, 25, Derio (Bizkaia). Teléfono 944 54 07 98.',
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
	servesCuisine: ['Vasca'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
