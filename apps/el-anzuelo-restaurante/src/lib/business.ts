export const business = {
	name: 'El Anzuelo Restaurante',
	streetAddress: 'Calle Policía Local María de los Ángeles García, 6',
	postalCode: '14011',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 661 73 79 22',
	latitude: 37.8953647,
	longitude: -4.8015369,
	site: 'https://el-anzuelo-restaurante-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/El+Anzuelo+Restaurante/@37.8953647,-4.8015369,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf593b94c95b:0xecc403c87f45742e!8m2!3d37.8953647!4d-4.8015369!16s%2Fg%2F11lzn4w0m7?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34661737922';
export const instagramUrl = 'https://www.instagram.com/elanzuelo_cordoba/';
export const facebookUrl = 'https://www.facebook.com/p/El-Anzuelo-Restaurante-61572460582313/';

export const specialties = [
	{
		category: 'La casa',
		name: 'Atún fresco',
		description: 'Producto del mar que protagoniza buena parte de las sugerencias de El Anzuelo.',
	},
	{
		category: 'Un favorito',
		name: 'Tartar de atún',
		description: 'Una elaboración fresca que deja lucir la calidad del pescado.',
	},
	{
		category: 'Para compartir',
		name: 'Las Tunantas',
		description: 'Patatas bravas con tartar de atún: un guiño creativo a un clásico de tapeo.',
	},
	{
		category: 'De la mar',
		name: 'Calamares y boquerones',
		description: 'Pescado frito preparado al momento, según la disponibilidad del día.',
	},
	{
		category: 'Marisco',
		name: 'Gamba blanca',
		description: 'Marisco fresco y sugerencias que pueden variar según mercado y temporada.',
	},
	{
		category: 'De la brasa',
		name: 'Pulpo a la brasa',
		description: 'Una propuesta del mar con el toque de la parrilla. Pregunta por la carta actual.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está El Anzuelo Restaurante?',
		answer:
			'Está en Calle Policía Local María de los Ángeles García, 6, 14011 Córdoba. Puedes abrir Google Maps desde esta página para ver la ubicación y las indicaciones.',
	},
	{
		question: '¿Cuál es la especialidad de El Anzuelo?',
		answer:
			'El restaurante destaca el pescado fresco y el marisco, con especial presencia del atún. Entre los platos que se mencionan están el tartar, las Tunantas, calamares, boquerones y gamba blanca. La oferta depende del mercado y puede cambiar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'El perfil oficial publica el teléfono +34 661 73 79 22 para reservas. Llama para consultar disponibilidad y las sugerencias del día.',
	},
	{
		question: '¿Qué horario tiene el restaurante?',
		answer:
			'Los horarios publicados pueden variar según temporada y servicio. Confirma la apertura llamando al +34 661 73 79 22 antes de venir.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en Córdoba especializado en pescado fresco, atún y marisco, con elaboraciones tradicionales y creativas.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina española', 'Pescados y mariscos', 'Cocina andaluza'],
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
	sameAs: [instagramUrl, facebookUrl],
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
