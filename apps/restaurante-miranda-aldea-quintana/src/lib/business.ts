export const business = {
	name: 'Restaurante Miranda',
	streetAddress: 'Carretera Madrid-Cádiz, km 424',
	postalCode: '14140',
	locality: 'Aldea Quintana',
	city: 'La Carlota',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 699 15 72 79',
	latitude: 37.7179229,
	longitude: -4.8602129,
	site: 'https://restaurante-miranda-aldea-quintana.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Miranda/@37.7179229,-4.8602129,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d252fa3c89103:0xa71f465095058eda!8m2!3d37.7179229!4d-4.8602129!16s%2Fg%2F11f_2ph4t6?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34699157279';
export const facebookUrl = 'https://www.facebook.com/mirandadesde1968/';
export const facebookPhotosUrl = 'https://www.facebook.com/mirandadesde1968/photos/';
export const facebookAlbumUrl =
	'https://www.facebook.com/media/set/?set=a.1933072983687682.1073742853.1380788978916088&type=3';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d9581825-Reviews-Miranda-Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'De la casa',
		name: 'Carnes a la brasa',
		description: 'La especialidad que el restaurante destaca en sus perfiles públicos.',
	},
	{
		category: 'Cocina casera',
		name: 'Salmorejo cordobés',
		description: 'Un clásico andaluz para abrir la mesa, según la temporada y el servicio.',
	},
	{
		category: 'Para compartir',
		name: 'Flamenquín cordobés',
		description: 'Una receta tradicional mencionada entre los platos que gustan a sus comensales.',
	},
	{
		category: 'Menú del día',
		name: 'Platos de cuchara',
		description: 'Guisos caseros como cocido y potaje, sujetos a disponibilidad.',
	},
	{
		category: 'Desayunos',
		name: 'Un alto en el camino',
		description: 'Desayunos desde primera hora para viajeros y trabajadores de la zona.',
	},
	{
		category: 'Postre tradicional',
		name: 'Gachas dulces',
		description: 'Un final de sabor casero que se cita entre los postres favoritos.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante Miranda?',
		answer:
			'Está en la carretera Madrid-Cádiz, km 424, junto a Aldea Quintana, Córdoba (14140). Consulta Google Maps para obtener indicaciones desde tu ubicación.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'El restaurante ofrece comida casera y cocina andaluza, con especialidad en carnes a la brasa. También se mencionan desayunos, salmorejo, flamenquín y guisos; la carta puede cambiar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'El perfil del restaurante publica el teléfono móvil +34 699 15 72 79 para reservas. Llama para consultar disponibilidad y servicio.',
	},
	{
		question: '¿Qué horario tiene Restaurante Miranda?',
		answer:
			'La información pública de horarios no es consistente y puede variar. Confirma días, horario y servicio llamando al +34 699 15 72 79 antes de desplazarte.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina casera andaluza con especialidad en carnes a la brasa, en Aldea Quintana, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Cocina española', 'Carnes a la brasa'],
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
	sameAs: [facebookUrl, tripadvisorUrl],
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
