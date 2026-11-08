export const business = {
	name: 'Restaurante La Antigua Brasa',
	streetAddress: 'Calle Letonia, 5',
	postalCode: '14014',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 32 63 54',
	latitude: 37.8986422,
	longitude: -4.7314714,
	site: 'https://www.sur-digital.com/restaurante-la-antigua-brasa',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Antigua+Brasa/@37.8986422,-4.7314714,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7b4afb0767:0x817d7a7a1a6e5beb!8m2!3d37.8986422!4d-4.7314714!16s%2Fg%2F1z44c5fhx?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957326354';
export const facebookUrl = 'https://www.facebook.com/p/Restaurante-la-Antigua-Brasa-C%C3%B3rdoba-100067700404681/';
export const facebookPhotosUrl = 'https://www.facebook.com/p/Restaurante-la-Antigua-Brasa-C%C3%B3rdoba-100067700404681/';
export const instagramLocationUrl = 'https://www.instagram.com/explore/locations/1202221433124468/restaurante-la-antigua-brasa-cordoba/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d9824433-Reviews-La_Antigua_Brasa-Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'A la brasa',
		name: 'Chuletón y lomo bajo',
		description: 'Cortes de vacuno seleccionados para disfrutar del sabor del fuego.',
	},
	{
		category: 'Cerdo ibérico',
		name: 'Secreto y pluma ibérica',
		description: 'Piezas ibéricas a la parrilla entre las opciones destacadas del asador.',
	},
	{
		category: 'Un clásico',
		name: 'Solomillo a la piedra',
		description: 'Carne servida sobre piedra caliente; pregunta por disponibilidad y punto.',
	},
	{
		category: 'De la huerta',
		name: 'Alcachofas a la brasa',
		description: 'Una propuesta vegetal muy mencionada junto a sus carnes.',
	},
	{
		category: 'Para compartir',
		name: 'Churrasco y costillas BBQ',
		description: 'Sabores de parrilla para compartir alrededor de la mesa.',
	},
	{
		category: 'Cocina casera',
		name: 'Menú del día',
		description: 'También hay desayunos y platos caseros; consulta las opciones actuales.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está La Antigua Brasa?',
		answer:
			'Está en Calle Letonia, 5, Polígono Industrial Tecnocórdoba, 14014 Córdoba. Abre Google Maps para consultar la ubicación y las indicaciones.',
	},
	{
		question: '¿Qué especialidades tiene el restaurante?',
		answer:
			'La Antigua Brasa es un asador de cocina andaluza, con carnes a la brasa como secreto y pluma ibérica, solomillo, chuletón y opciones vegetales como alcachofas. La carta y la disponibilidad pueden cambiar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 957 32 63 54, teléfono publicado en directorios del establecimiento. Confirma la disponibilidad y el horario al llamar.',
	},
	{
		question: '¿Cuál es el horario de apertura?',
		answer:
			'Los horarios publicados por directorios pueden variar según el día o la temporada. Llama al +34 957 32 63 54 para confirmar el horario actual antes de desplazarte.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Asador de cocina andaluza en Córdoba, especializado en carnes a la brasa y platos caseros.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Asador', 'Carnes a la brasa'],
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
	sameAs: [facebookUrl, instagramLocationUrl, tripadvisorUrl],
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
