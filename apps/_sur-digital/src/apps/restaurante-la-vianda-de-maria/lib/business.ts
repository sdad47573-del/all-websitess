export const business = {
	name: 'Restaurante La Vianda de María',
	streetAddress: 'Avenida Doctor Fleming, 1',
	district: 'Centro',
	postalCode: '14004',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 00 82 01',
	latitude: 37.8796918,
	longitude: -4.7845567,
	site: 'https://www.sur-digital.com/restaurante-la-vianda-de-maria',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Vianda+de+Mar%C3%ADa+./@37.8796918,-4.7845567,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d2157f86b1603:0x2edc096caad2acfa!8m2!3d37.8796918!4d-4.7845567!16s%2Fg%2F11j138mffj?authuser=0&hl=es';
export const phoneHref = 'tel:+34957008201';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const facebookUrl = 'https://www.facebook.com/laviandademariafleming/';
export const instagramUrl = 'https://www.instagram.com/laviandademaria/';

export const hours = [
	{ day: 'Lunes', dayOfWeek: 'Monday', open: null, close: null },
	{ day: 'Martes', dayOfWeek: 'Tuesday', open: '07:00', close: '16:30' },
	{ day: 'Miércoles', dayOfWeek: 'Wednesday', open: '07:00', close: '16:30' },
	{ day: 'Jueves', dayOfWeek: 'Thursday', open: '07:00', close: '16:30' },
	{ day: 'Viernes', dayOfWeek: 'Friday', open: '07:00', close: '24:00' },
	{ day: 'Sábado', dayOfWeek: 'Saturday', open: '07:00', close: '24:00' },
	{ day: 'Domingo', dayOfWeek: 'Sunday', open: '12:00', close: '17:00' },
] as const;

export const highlights = [
	{
		kicker: 'De la casa',
		name: 'Salmorejo cordobés',
		text: 'Un clásico local presente entre los platos más comentados del restaurante.',
	},
	{
		kicker: 'Para compartir',
		name: 'Croquetas caseras',
		text: 'Croquetas de carrillada y rabo de toro mencionadas en reseñas y guías gastronómicas.',
	},
	{
		kicker: 'Receta cordobesa',
		name: 'Rabo de toro',
		text: 'Guiso tradicional de la zona, destacado por quienes visitan la casa.',
	},
	{
		kicker: 'Al horno y a la piedra',
		name: 'Asados y carnes',
		text: 'Cochinillo asado y presa ibérica a la piedra forman parte de las especialidades publicadas.',
	},
	{
		kicker: 'Cocina de siempre',
		name: 'Guisos y pescados',
		text: 'Platos como callos, bacalao y merluza aparecen entre las propuestas de cocina tradicional.',
	},
	{
		kicker: 'Final dulce',
		name: 'Postres caseros',
		text: 'Flan, tocino de cielo, arroz con leche y tartas citados en publicaciones de la casa.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está La Vianda de María en Córdoba?',
		answer:
			'El restaurante está en Avenida Doctor Fleming, 1, Centro, 14004 Córdoba, cerca de la Puerta de Almodóvar. Puedes abrir la ficha de Google Maps o pedir indicaciones desde esta página.',
	},
	{
		question: '¿Cuál es el horario de La Vianda de María?',
		answer:
			'El horario publicado es martes, miércoles y jueves de 07:00 a 16:30; viernes y sábado de 07:00 a 00:00; domingo de 12:00 a 17:00. Los lunes está cerrado. Puede cambiar por temporada: llama para confirmarlo antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve el restaurante?',
		answer:
			'La Vianda de María ofrece cocina tradicional cordobesa, española y mediterránea. En sus referencias públicas aparecen salmorejo, mazamorra, croquetas, carnes y asados, guisos, pescados y postres caseros. La disponibilidad y la carta pueden variar.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al 957 00 82 01 para consultar disponibilidad y reservar. También puedes visitar los perfiles sociales oficiales del restaurante.',
	},
	{
		question: '¿Tiene terraza y opciones accesibles?',
		answer:
			'Fuentes públicas mencionan terraza y acceso para personas con movilidad reducida. Si necesitas confirmar disponibilidad, acceso, parking u otro servicio concreto, consulta con el restaurante por teléfono.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina tradicional cordobesa, española y mediterránea en Avenida Doctor Fleming, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina española', 'Mediterránea'],
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
	sameAs: [facebookUrl, instagramUrl],
	acceptsReservations: true,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Accesible para movilidad reducida', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Reservas por teléfono', value: true },
	],
	openingHoursSpecification: hours.flatMap((item) => {
		if (!item.open || !item.close) return [];
		return [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: item.dayOfWeek,
				opens: item.open,
				closes: item.close === '24:00' ? '23:59' : item.close,
			},
		];
	}),
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
