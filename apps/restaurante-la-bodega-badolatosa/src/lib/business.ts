export const business = {
	name: 'Restaurante La Bodega',
	streetAddress: 'Avenida de Cuba, 50',
	postalCode: '41570',
	locality: 'Badolatosa',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 954 01 80 62',
	latitude: 37.3082618,
	longitude: -4.6736902,
	site: 'https://restaurante-la-bodega-badolatosa.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+la+Bodega/@37.3082618,-4.6736902,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d66c3754e50a9:0x93cfe83b11786520!8m2!3d37.3082618!4d-4.6736902!16s%2Fg%2F1v5ft7m3?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const facebookUrl = 'https://www.facebook.com/pages/La-Bodega/287181491411378';
export const facebookPhotosUrl = `${facebookUrl}/photos/`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34954018062';

export const faqs = [
	{
		question: '¿Dónde está Restaurante La Bodega?',
		answer:
			'Encontrarás Restaurante La Bodega en Avenida de Cuba, 50, 41570 Badolatosa (Sevilla). Abre la ficha de Google Maps para ver la ubicación e iniciar la ruta.',
	},
	{
		question: '¿Cómo puedo contactar con el restaurante?',
		answer:
			'Puedes llamar al +34 954 01 80 62, teléfono publicado en directorios locales del establecimiento. Confirma por teléfono cualquier consulta antes de desplazarte.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'La Bodega figura como cafetería-restaurante de cocina tradicional en Badolatosa. Para consultar la carta y los platos disponibles, contacta directamente con el establecimiento.',
	},
	{
		question: '¿Dónde puedo ver fotos del local?',
		answer:
			'Puedes consultar las fotos subidas a la ficha de Restaurante La Bodega en Google Maps y las publicaciones de su página de Facebook.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Cafetería-restaurante de cocina tradicional en Avenida de Cuba, Badolatosa, Sevilla.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina tradicional'],
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
	sameAs: [mapsUrl, facebookUrl],
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
