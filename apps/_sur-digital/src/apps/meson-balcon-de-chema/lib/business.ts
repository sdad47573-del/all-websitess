export const business = {
	name: 'Mesón Restaurante Balcón de Chema',
	streetAddress: 'Calle Carrera',
	postalCode: '14815',
	locality: 'Castil de Campos',
	city: 'Priego de Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 70 52 98',
	email: 'balcondechema@hotmail.com',
	latitude: 37.490709,
	longitude: -4.1399183,
	site: 'https://meson-balcon-de-chema-castil-campos.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Meson+Restaurante+Balcon+de+Chema/@37.490709,-4.1399183,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d940ff0185ca5:0x33fcbae7e85e5039!8m2!3d37.490709!4d-4.1399183!16s%2Fg%2F11cmtsys1r?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const facebookUrl = 'https://www.facebook.com/mrbalcondechema/';
export const facebookPhotosUrl = 'https://www.facebook.com/media/set/?vanity=mrbalcondechema&set=a.724467058821853';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g2661271-d12949868-Reviews-Meson_Restaurante_Balcon_de_Chema-Castil_de_Campos_Province_of_Cordoba_Andaluci.html';
export const tripadvisorPhotosUrl =
	'https://www.tripadvisor.es/LocationPhotoDirectLink-g2661271-d12949868-i288769002-Meson_Restaurante_Balcon_de_Chema-Castil_de_Campos_Province_of_Cordoba.html';
export const phoneHref = 'tel:+34957705298';
export const emailHref = `mailto:${business.email}`;

export const specialties = [
	{
		category: 'De la casa',
		name: 'Bacalao a la vizcaína',
		description: 'Una de las recomendaciones destacadas de la cocina del mesón.',
	},
	{
		category: 'Cocina lenta',
		name: 'Carrillada en salsa',
		description: 'Guiso tradicional para disfrutar sin mirar el reloj.',
	},
	{
		category: 'De temporada',
		name: 'Revuelto de collejas',
		description: 'Con gambas y jamón, inspirado en los sabores del campo.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas caseras',
		description: 'Un clásico del tapeo, junto al lomo de orza y el flamenquín.',
	},
	{
		category: 'A la plancha',
		name: 'Presa y pluma ibérica',
		description: 'Cortes de carne entre las opciones habituales de la carta.',
	},
	{
		category: 'Un clásico cordobés',
		name: 'Chivo lechal al horno',
		description: 'Una propuesta tradicional de la comarca de la Subbética.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está el Mesón Restaurante Balcón de Chema?',
		answer:
			'Está en Calle Carrera, en Castil de Campos (14815), localidad de Priego de Córdoba, en la Subbética cordobesa. Consulta la ficha de Google Maps para llegar.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'El mesón ofrece cocina tradicional de la Subbética, con carnes, tapas y platos como bacalao a la vizcaína, carrillada, croquetas y revuelto de collejas. La disponibilidad puede variar; pregunta por la carta actual.',
	},
	{
		question: '¿Tiene vistas o terraza?',
		answer:
			'El restaurante cuenta con un mirador con vistas panorámicas a los olivares y las sierras de la zona, junto al parque de Castil de Campos. Consulta por teléfono qué espacios están disponibles.',
	},
	{
		question: '¿Cómo puedo reservar?',
		answer:
			'Puedes llamar al +34 957 70 52 98, teléfono publicado en la página oficial de Facebook del mesón. Confirma horario, disponibilidad y servicios directamente con el establecimiento.',
		},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Mesón de cocina tradicional de la Subbética cordobesa en Castil de Campos, con mirador panorámico sobre los olivares.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	email: business.email,
	servesCuisine: ['Cocina española', 'Cocina andaluza', 'Cocina cordobesa'],
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
