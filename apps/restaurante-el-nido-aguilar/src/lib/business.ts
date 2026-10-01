export const business = {
	name: 'Restaurante El Nido',
	streetAddress: 'Avenida Bernat Soria, 17',
	postalCode: '14920',
	locality: 'Aguilar de la Frontera',
	city: 'Aguilar de la Frontera',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 692 60 51 83',
	latitude: 37.5087929,
	longitude: -4.6462369,
	site: 'https://restaurante-el-nido-aguilar.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Nido/@37.5087929,-4.6462369,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d6dcfc03b6891:0x21de7da2cf1e44fb!8m2!3d37.5087929!4d-4.6462369!16s%2Fg%2F11fp3381fk?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const facebookUrl = 'https://www.facebook.com/restauranteelnidoaguilardelafrontera/';
export const facebookPhotosUrl = 'https://www.facebook.com/restauranteelnidoaguilardelafrontera/photos/';
export const instagramUrl = 'https://www.instagram.com/restauranteelnidoaguilar/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g1726213-d15701138-Reviews-Restaurante_El_Nido-Aguilar_de_la_Frontera_Province_of_Cordoba_Andalucia.html';
export const phoneHref = 'tel:+34692605183';

export const specialties = [
	{
		category: 'Especialidad de la casa',
		name: 'Carnes a la brasa',
		description: 'La especialidad que el restaurante destaca en sus perfiles oficiales.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas caseras',
		description: 'Croquetas tradicionales; entre las más mencionadas, las de rabo de toro.',
	},
	{
		category: 'Cocina cordobesa',
		name: 'Salmorejo',
		description: 'Un clásico andaluz citado entre los platos favoritos de sus comensales.',
	},
	{
		category: 'Guisos de siempre',
		name: 'Carrillada ibérica',
		description: 'Carne guisada a fuego lento dentro de la propuesta tradicional de la casa.',
	},
	{
		category: 'A la parrilla',
		name: 'Presa ibérica',
		description: 'Corte ibérico entre las opciones destacadas de su cocina.',
	},
	{
		category: 'Menú del día',
		name: 'Cocina casera',
		description: 'Consulta por teléfono las opciones, disponibilidad y servicio para llevar.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante El Nido?',
		answer:
			'Está en Avenida Bernat Soria, 17, 14920 Aguilar de la Frontera (Córdoba). Usa el mapa de esta página o abre la ficha de Google Maps para ver la ubicación.',
	},
	{
		question: '¿Cuál es la especialidad de Restaurante El Nido?',
		answer:
			'El restaurante destaca las carnes a la brasa y cocina tradicional española. También se mencionan platos caseros como salmorejo, croquetas y carrillada. La carta cambia; consulta las opciones del día.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 692 60 51 83, teléfono que el restaurante publica para contacto y reservas en sus perfiles oficiales.',
	},
	{
		question: '¿Qué horario tiene?',
		answer:
			'Los horarios encontrados en publicaciones y directorios no coinciden entre sí y pueden cambiar por temporada. Llama al +34 692 60 51 83 para confirmar apertura y disponibilidad antes de desplazarte.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina tradicional española y carnes a la brasa en Aguilar de la Frontera, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina española', 'Cocina andaluza', 'Carnes a la brasa'],
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
	sameAs: [facebookUrl, instagramUrl, tripadvisorUrl],
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
