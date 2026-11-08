export const business = {
	name: 'Restaurante La Querencia',
	streetAddress: 'Calle Félix Rodríguez de la Fuente, 10',
	postalCode: '14711',
	locality: 'Encinarejo de Córdoba',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	latitude: 37.8318789,
	longitude: -4.9279196,
	site: 'https://www.sur-digital.com/restaurante-la-querencia',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Querencia/@37.8318789,-4.9279196,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d28f8ed08be4b:0xdd3aa70944a80914!8m2!3d37.8318789!4d-4.9279196!16s%2Fg%2F11c2lr78hx?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneDisplays = ['+34 957 47 65 84', '+34 646 28 96 54'] as const;
export const phoneHrefs = ['tel:+34957476584', 'tel:+34646289654'] as const;
export const instagramUrl = 'https://www.instagram.com/la_querencia_encinarejo/';
export const facebookUrl = 'https://www.facebook.com/laquerencia.encinarejo/';
export const facebookPhotosUrl = 'https://www.facebook.com/laquerencia.encinarejo/photos/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g2137546-d15133341-Reviews-Querencia-Encinarejo_de_Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'A la brasa',
		name: 'Presa ibérica',
		description: 'Corte ibérico cocinado a la brasa, entre los platos destacados de la casa.',
	},
	{
		category: 'Un toque creativo',
		name: 'Tacos de tortillita de camarones',
		description: 'Con guacamole, cebolla morada y gambón: tradición con un giro actual.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas caseras',
		description: 'Pregunta por las variedades del día: gambón, boletus o rabo de toro.',
	},
	{
		category: 'De la mar',
		name: 'Pescaito frito',
		description: 'Una propuesta muy de aquí, perfecta para compartir en la mesa.',
	},
	{
		category: 'Cocina de siempre',
		name: 'Rabo de toro',
		description: 'Guiso tradicional cordobés dentro de una carta de temporada.',
	},
	{
		category: 'Final dulce',
		name: 'Tartas caseras',
		description: 'Dulces elaborados en casa; pregunta por los sabores disponibles.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante La Querencia?',
		answer:
			'Está en Calle Félix Rodríguez de la Fuente, 10, 14711 Encinarejo de Córdoba. Puedes abrir la ficha de Google Maps o iniciar la ruta desde esta página.',
	},
	{
		question: '¿Qué tipo de cocina ofrece La Querencia?',
		answer:
			'La Querencia combina cocina de mercado y recetas tradicionales con toques creativos. Entre las especialidades mencionadas en publicaciones se encuentran carnes a la brasa, presa ibérica, pescaito frito y postres caseros. La carta puede cambiar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'El perfil oficial publica los teléfonos +34 957 47 65 84 y +34 646 28 96 54 para consultas y reservas. Llama para confirmar disponibilidad.',
	},
	{
		question: '¿Qué horario tiene el restaurante?',
		answer:
			'El horario se actualiza con publicaciones y puede variar por temporada o día. Consulta las redes oficiales o llama al restaurante antes de desplazarte.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina de mercado con raíces tradicionales y carnes a la brasa en Encinarejo de Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: phoneDisplays[0],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.locality,
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
	servesCuisine: ['Cocina española', 'Cocina andaluza', 'Cocina de mercado'],
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
