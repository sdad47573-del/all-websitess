export const business = {
	name: 'Restaurante Damasco',
	streetAddress: 'Calle Romero, 4',
	district: 'Centro',
	postalCode: '14003',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 631 50 34 36',
	latitude: 37.8799309,
	longitude: -4.7813861,
	site: 'https://restaurante-damasco-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Damasco/@37.8799309,-4.7813861,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d214482548325:0xd5765320bb8c81f1!8m2!3d37.8799309!4d-4.7813861!16s%2Fg%2F11qf_yz3qq?authuser=0&hl=es';
export const phoneHref = 'tel:+34631503436';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/RESTAURANTEDAMASCOHALAL/';
export const facebookUrl = 'https://www.facebook.com/p/Restaurante-Damasco-100054557914215/';
export const facebookPhotosUrl = 'https://www.facebook.com/100054557914215/photos/';

export const hours = [
	{ day: 'Lunes', dayOfWeek: 'Monday', open: '11:30', close: '22:00' },
	{ day: 'Martes', dayOfWeek: 'Tuesday', open: '11:30', close: '22:30' },
	{ day: 'Miércoles', dayOfWeek: 'Wednesday', open: null, close: null },
	{ day: 'Jueves', dayOfWeek: 'Thursday', open: '11:30', close: '22:00' },
	{ day: 'Viernes', dayOfWeek: 'Friday', open: '11:30', close: '23:00' },
	{ day: 'Sábado', dayOfWeek: 'Saturday', open: '11:30', close: '23:00' },
	{ day: 'Domingo', dayOfWeek: 'Sunday', open: '11:30', close: '22:00' },
] as const;

export const dishes = [
	{
		category: 'Para empezar',
		name: 'Hummus',
		text: 'Crema de garbanzos con tahini, aceite de oliva y especias. Un clásico para compartir.',
	},
	{
		category: 'Mezze',
		name: 'Mutabal de berenjena',
		text: 'Berenjena asada y tahini en una receta siria suave y ahumada.',
	},
	{
		category: 'Vegetariano',
		name: 'Falafel',
		text: 'Bocados de garbanzo y hierbas aromáticas, servidos con ensalada y salsas.',
	},
	{
		category: 'Plato principal',
		name: 'Kabsa de pollo',
		text: 'Arroz especiado con pollo, una de las especialidades mencionadas por los comensales.',
	},
	{
		category: 'Al horno',
		name: 'Arayes',
		text: 'Pan árabe relleno de carne o queso, tostado para compartir.',
	},
	{
		category: 'Bebida de la casa',
		name: 'Limonada con hierbabuena',
		text: 'Una bebida fresca con limón y menta, ideal para acompañar las especias de la mesa.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está Restaurante Damasco en Córdoba?',
		answer:
			'El restaurante se encuentra en Calle Romero, 4, Centro, 14003 Córdoba, en el casco histórico. Puedes abrir la ficha de Google Maps o solicitar indicaciones desde esta página.',
	},
	{
		question: '¿Qué tipo de cocina ofrece Restaurante Damasco?',
		answer:
			'Ofrece cocina siria y de Oriente Medio, con platos halal. En reseñas y fuentes públicas se mencionan hummus, mutabal, falafel, kabsa, arayes y platos especiados de arroz. La carta y disponibilidad pueden cambiar.',
	},
	{
		question: '¿Cuál es el horario de apertura?',
		answer:
			'El horario publicado es lunes de 11:30 a 22:00, martes de 11:30 a 22:30, jueves de 11:30 a 22:00, viernes y sábado de 11:30 a 23:00, y domingo de 11:30 a 22:00. Los miércoles permanece cerrado. Confirma antes de acudir, especialmente en festivos.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 631 50 34 36 para consultar disponibilidad y realizar una reserva. Se recomienda preguntar por teléfono si vienes en grupo o en una fecha concurrida.',
	},
	{
		question: '¿Hay opciones vegetarianas?',
		answer:
			'En referencias públicas aparecen opciones como hummus, mutabal de berenjena y falafel. Consulta al restaurante por teléfono los ingredientes, alérgenos y disponibilidad del día.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina siria y de Oriente Medio con platos halal en Calle Romero, 4, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina siria', 'Cocina de Oriente Medio', 'Árabe'],
	keywords: 'Halal, Córdoba, comida siria',
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
	sameAs: [instagramUrl, facebookUrl],
	acceptsReservations: true,
	openingHoursSpecification: hours.flatMap((item) => {
		if (!item.open || !item.close) return [];
		return [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: item.dayOfWeek,
				opens: item.open,
				closes: item.close,
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
