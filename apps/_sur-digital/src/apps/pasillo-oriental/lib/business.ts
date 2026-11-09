export const business = {
	name: 'Pasillo Oriental',
	streetAddress: 'Calle Velázquez Bosco, 6',
	postalCode: '14003',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 94 10 17',
	latitude: 37.8804943,
	longitude: -4.7799801,
	site: 'https://pasillo-oriental-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Pasillo+Oriental/@37.8804943,-4.7799801,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d21265938c065:0x3a0750b09c844d2b!8m2!3d37.8804943!4d-4.7799801!16s%2Fg%2F11pkbn_c4j?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957941017';
export const instagramUrl = 'https://www.instagram.com/pasillooriental/';
export const facebookUrl = 'https://www.facebook.com/p/Pasillo-Oriental-100077232768420/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d23744065-Reviews-Pasillo_Oriental-Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'De Egipto',
		name: 'Kushari',
		description: 'Arroz, lentejas, pasta y garbanzos con tomate especiado y cebolla crujiente.',
	},
	{
		category: 'A la plancha',
		name: 'Shawarma de pollo',
		description: 'Pollo adobado con salsa de ajo, tomate y acompañamiento, servido en pan.',
	},
	{
		category: 'Vegetariano',
		name: 'Falafel (Tamiya)',
		description: 'Bocados vegetales de inspiración egipcia, ideales para compartir.',
	},
	{
		category: 'Para empezar',
		name: 'Hummus y mutabal',
		description: 'Cremas de garbanzo o berenjena con sésamo y aceite de oliva.',
	},
	{
		category: 'Hecho para compartir',
		name: 'Sambusa y hojas de parra',
		description: 'Entrantes tradicionales con rellenos vegetales o de carne.',
	},
	{
		category: 'Dulce final',
		name: 'Baklava',
		description: 'Dulce tradicional de Oriente Medio para acompañar el té.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Pasillo Oriental?',
		answer:
			'Está en Calle Velázquez Bosco, 6, en el centro de Córdoba (14003), a pocos pasos de la Mezquita-Catedral. Abre Google Maps para consultar la ruta.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Pasillo Oriental ofrece cocina halal de Oriente Medio y Egipto, con opciones vegetarianas y veganas. Entre sus platos se encuentran shawarma, falafel, hummus, kushari y sambusa. La carta y disponibilidad pueden cambiar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 957 94 10 17, teléfono publicado en canales y directorios del restaurante. Confirma disponibilidad y horario al llamar.',
	},
	{
		question: '¿Hay opciones vegetarianas, veganas o halal?',
		answer:
			'Sí. El perfil oficial menciona comida halal y opciones vegetarianas y veganas. Si tienes alergias o requisitos dietéticos, consulta ingredientes y posibles trazas directamente con el restaurante.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante halal de cocina egipcia, árabe y mediterránea en el centro de Córdoba, con opciones vegetarianas y veganas.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina egipcia', 'Cocina de Oriente Medio', 'Cocina mediterránea', 'Halal'],
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
