export const business = {
	name: 'Restaurante Baldomero',
	streetAddress: 'Avenida de Cádiz, 20',
	district: 'Aldea Quintana',
	postalCode: '14191',
	city: 'La Carlota',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 30 62 59',
	latitude: 37.7119598,
	longitude: -4.8676801,
	site: 'https://restaurante-baldomero.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Baldomero/@37.7119598,-4.8676801,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d253477b4d81f:0x35ada67a182d2fc3!8m2!3d37.7119598!4d-4.8676801!16s%2Fg%2F1ptx34138?authuser=0&hl=es';
export const phoneHref = 'tel:+34957306259';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const facebookUrl = 'https://www.facebook.com/p/Restaurante-Baldomero-100067238586613/';
export const facebookLegacyUrl = 'https://www.facebook.com/pages/Restaurante-Baldomero/452089051519730';

export const hours = [
	{ day: 'Lunes', dayOfWeek: 'Monday', open: '09:00', close: '17:00' },
	{ day: 'Martes', dayOfWeek: 'Tuesday', open: '09:00', close: '17:00' },
	{ day: 'Miércoles', dayOfWeek: 'Wednesday', open: '09:00', close: '17:00' },
	{ day: 'Jueves', dayOfWeek: 'Thursday', open: '09:00', close: '17:00' },
	{ day: 'Viernes', dayOfWeek: 'Friday', open: '09:00', close: '17:00' },
	{ day: 'Sábado', dayOfWeek: 'Saturday', open: '09:00', close: '17:00' },
	{ day: 'Domingo', dayOfWeek: 'Sunday', open: '09:00', close: '17:00' },
] as const;

export const dishes = [
	{
		category: 'Para empezar',
		name: 'Queso de Zuheros',
		text: 'Un producto de la Subbética que aparece entre las recomendaciones habituales del restaurante.',
	},
	{
		category: 'De la huerta',
		name: 'Revuelto de espárragos trigueros',
		text: 'Un plato casero muy mencionado por los clientes y elaborado con producto de temporada.',
	},
	{
		category: 'Cocina cordobesa',
		name: 'Salmorejo y flamenquín',
		text: 'Dos clásicos locales, ideales para conocer los sabores de la cocina tradicional cordobesa.',
	},
	{
		category: 'Platos de cuchara',
		name: 'Rabo de toro y carrillada',
		text: 'Guisos tradicionales preparados con tiempo y servidos según la carta del día.',
	},
	{
		category: 'De temporada',
		name: 'Alcachofas a la montillana',
		text: 'Una receta andaluza elaborada con ingredientes de temporada y sabor de la tierra.',
	},
	{
		category: 'Postres caseros',
		name: 'Torrijas con helado',
		text: 'Un final dulce de la casa que aparece entre las recomendaciones de los comensales.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está Restaurante Baldomero?',
		answer:
			'Está en Avenida de Cádiz, 20, en Aldea Quintana, código postal 14191, dentro del municipio de La Carlota (Córdoba). Puedes abrir la ficha de Google Maps o pedir indicaciones desde esta página.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Baldomero?',
		answer:
			'Fuentes públicas recientes indican apertura todos los días, de 09:00 a 17:00. Los horarios pueden cambiar en festivos o por temporada: confirma por teléfono antes de desplazarte.',
	},
	{
		question: '¿Qué tipo de comida se puede comer?',
		answer:
			'El restaurante se especializa en cocina tradicional cordobesa y andaluza. En fuentes públicas se mencionan queso de Zuheros, revuelto de espárragos, salmorejo, rabo de toro, presa ibérica y postres caseros. La carta y disponibilidad pueden variar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'Sí, es recomendable reservar, especialmente los fines de semana y días festivos. Puedes llamar al 957 30 62 59 para consultar disponibilidad.',
	},
	{
		question: '¿Hay aparcamiento y acceso para personas con movilidad reducida?',
		answer:
			'Fuentes públicas indican aparcamiento cercano o propio y acceso para personas con movilidad reducida. Confirma con el restaurante los detalles del acceso y la disponibilidad antes de tu visita.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina tradicional cordobesa y andaluza en Aldea Quintana, La Carlota, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina andaluza', 'Cocina española', 'Comida casera'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.district,
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
	sameAs: [facebookUrl, facebookLegacyUrl],
	acceptsReservations: true,
	openingHoursSpecification: hours.map((item) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: item.dayOfWeek,
		opens: item.open,
		closes: item.close,
	})),
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
