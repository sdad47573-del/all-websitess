export const business = {
	name: 'Restaurante a fuego lento',
	streetAddress: 'Pje. del Balcón de Lagartijo, nave 27, B2',
	postalCode: '14014',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 857 83 01 70',
	latitude: 37.9004127,
	longitude: -4.7307956,
	site: 'https://www.sur-digital.com/restaurante-a-fuego-lento',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+a+fuego+lento/@37.9004127,-4.7307956,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdff5f45b12cd:0x192a6881ec817ac7!8m2!3d37.9004127!4d-4.7307956!16s%2Fg%2F11hzxmdt2z?authuser=0&hl=es';
export const phoneHref = 'tel:+34857830170';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const hours = [
	{ day: 'Lunes', open: '06:00', close: '17:00' },
	{ day: 'Martes', open: '06:00', close: '17:00' },
	{ day: 'Miércoles', open: '06:00', close: '17:00' },
	{ day: 'Jueves', open: '06:00', close: '17:00' },
	{ day: 'Viernes', open: '06:00', close: '17:00' },
	{ day: 'Sábado', open: null, close: null },
	{ day: 'Domingo', open: null, close: null },
] as const;

export const specialties = [
	{
		name: 'Salmorejo cordobés',
		description: 'Un clásico fresco de Córdoba para abrir el apetito.',
	},
	{
		name: 'Berenjenas con salmorejo',
		description: 'Berenjena tierna con uno de los sabores más reconocibles de la cocina cordobesa.',
	},
	{
		name: 'Flamenquín cordobés',
		description: 'Receta tradicional andaluza, perfecta para compartir o disfrutar como plato principal.',
	},
	{
		name: 'Bacalao y guisos caseros',
		description: 'Platos de cocina tradicional, elaborados para el menú del día y según disponibilidad.',
	},
	{
		name: 'Postres de la casa',
		description: 'Tartas y dulces caseros para terminar la comida.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está Restaurante a fuego lento en Córdoba?',
		answer:
			'Estamos en el Pasaje del Balcón de Lagartijo, nave 27, B2, código postal 14014, en Córdoba. Puedes abrir la ficha de Google Maps o pedir indicaciones desde esta página.',
	},
	{
		question: '¿Cuál es el horario del restaurante?',
		answer:
			'El horario publicado es de lunes a viernes, de 06:00 a 17:00. El restaurante permanece cerrado sábados y domingos. Si vas en festivo, confirma antes por teléfono.',
	},
	{
		question: '¿Qué tipo de comida se puede pedir?',
		answer:
			'Cocina tradicional cordobesa y comida casera. Entre los platos que se mencionan en fuentes públicas están el salmorejo, el flamenquín, las berenjenas con salmorejo, guisos, carnes, pescados y postres caseros. La carta y la disponibilidad pueden variar.',
	},
	{
		question: '¿Hay menú del día?',
		answer:
			'Sí, distintas fuentes públicas mencionan un menú del día. El menú cambia, así que te recomendamos consultar las opciones y el precio actual llamando al 857 83 01 70.',
	},
	{
		question: '¿Cómo puedo reservar o llamar?',
		answer:
			'Puedes llamar directamente al +34 857 83 01 70. Para consultar disponibilidad de mesa o hacer una reserva, confirma los detalles por teléfono.',
	},
];

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina tradicional cordobesa y comida casera en Córdoba. Menú del día y especialidades locales.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina andaluza', 'Cocina tradicional', 'Comida casera'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.region,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	openingHoursSpecification: hours.flatMap((item, index) => {
		if (!item.open || !item.close) return [];
		return [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][index],
				opens: item.open,
				closes: item.close,
			},
		];
	}),
	acceptsReservations: true,
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${business.site}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};
