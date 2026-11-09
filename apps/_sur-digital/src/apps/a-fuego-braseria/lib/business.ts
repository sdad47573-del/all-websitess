export const business = {
	name: 'A Fuego Brasería',
	streetAddress: 'Avenida Al-Nasir, esquina Calle Martín Gaite',
	postalCode: '14006',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 84 71 36',
	latitude: 37.8948051,
	longitude: -4.7770884,
	site: 'https://a-fuego-braseria-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/A+fuego+braser%C3%ADa/data=!4m7!3m6!1s0xd6cdfd7c652e277:0xf1af25deeee485a9!8m2!3d37.8948051!4d-4.7770884!16s%2Fg%2F11jcm9p59y?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957847136';
export const instagramUrl = 'https://www.instagram.com/afuegobraseria/';
export const facebookUrl = 'https://www.facebook.com/afuegobraseria/';
export const facebookPhotosUrl = 'https://www.facebook.com/afuegobraseria/photos/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d21037346-Reviews-A_fuego_braseria-Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'De la parrilla',
		name: 'Carnes seleccionadas',
		description: 'Cortes de vacuno y cerdo ibérico cocinados al carbón de encina.',
	},
	{
		category: 'Sabor de encina',
		name: 'Lomo de buey',
		description: 'Una pieza a la brasa de encina que el restaurante ha compartido en sus publicaciones.',
	},
	{
		category: 'Del mar al fuego',
		name: 'Pescados a la brasa',
		description: 'Pescados preparados a la parrilla, según disponibilidad y mercado.',
	},
	{
		category: 'Para compartir',
		name: 'Huevos rotos con lomo',
		description: 'Una de las propuestas caseras que aparece en sus perfiles públicos.',
	},
	{
		category: 'De temporada',
		name: 'Verduras a la parrilla',
		description: 'Verduras asadas al carbón, como alternativa para completar la mesa.',
	},
	{
		category: 'Con calma',
		name: 'Carnes maduradas',
		description: 'Consulta los cortes y tiempos de maduración disponibles al hacer tu reserva.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está A Fuego Brasería?',
		answer:
			'Está en Avenida Al-Nasir, esquina con Calle Martín Gaite, 14006 Córdoba. Abre las indicaciones en Google Maps para llegar al restaurante.',
	},
	{
		question: '¿Qué cocina ofrece A Fuego Brasería?',
		answer:
			'Su propuesta se centra en carnes, pescados y verduras preparados en una parrilla de carbón de encina. Los cortes y platos pueden cambiar; consulta la carta actual por teléfono.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 957 84 71 36, el teléfono publicado por el restaurante en su Instagram oficial y directorios.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Los horarios publicados en directorios pueden variar según la temporada. Confirma la apertura llamando al +34 957 84 71 36 antes de venir.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Brasería en Córdoba especializada en carnes, pescados y verduras a la parrilla de carbón de encina.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina española', 'Carnes a la brasa', 'Pescados a la brasa'],
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
	sameAs: [instagramUrl, facebookUrl, tripadvisorUrl],
	acceptsReservations: true,
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${business.site}/#preguntas`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};
