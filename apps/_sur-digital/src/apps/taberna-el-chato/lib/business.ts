export const business = {
	name: 'Taberna El Chato',
	streetAddress: 'Avenida de la Pedanía, 206',
	district: 'Villarrubia',
	postalCode: '14710',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 41 98 79',
	latitude: 37.8496177,
	longitude: -4.914547,
	site: 'https://taberna-el-chato-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+el+Chato/@37.8496177,-4.914547,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d29f058a8f7c1:0xa16dc53205483e82!8m2!3d37.8496177!4d-4.914547!16s%2Fg%2F11fpgntnhg?authuser=0&hl=es';
export const phoneHref = 'tel:+34957419879';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/taberna_elchato/';
export const facebookUrl = 'https://www.facebook.com/p/Taberna-El-Chato-100057382122315/';
export const officialSiteUrl = 'https://taberna-el-chato.eatbu.com/?lang=es';

export const hours = [
	{ day: 'Lunes', dayOfWeek: 'Monday', service: 'Cerrado', open: null, close: null },
	{ day: 'Martes', dayOfWeek: 'Tuesday', service: '08:00–17:00 · 20:00–23:00', open: '08:00', close: '23:00' },
	{ day: 'Miércoles', dayOfWeek: 'Wednesday', service: '08:00–17:00 · 20:00–23:00', open: '08:00', close: '23:00' },
	{ day: 'Jueves', dayOfWeek: 'Thursday', service: '08:00–17:00 · 20:00–23:00', open: '08:00', close: '23:00' },
	{ day: 'Viernes', dayOfWeek: 'Friday', service: '08:00–17:00 · 20:00–23:00', open: '08:00', close: '23:00' },
	{ day: 'Sábado', dayOfWeek: 'Saturday', service: '08:00–17:00 · 20:00–23:00', open: '08:00', close: '23:00' },
	{ day: 'Domingo', dayOfWeek: 'Sunday', service: '08:00–17:00', open: '08:00', close: '17:00' },
] as const;

export const dishes = [
	{
		category: 'A la brasa',
		name: 'Carnes maduradas',
		text: 'Piezas seleccionadas que puedes elegir en la cámara de maduración, cortadas al peso y preparadas al punto que prefieras.',
	},
	{
		category: 'Especialidad de la casa',
		name: 'Croquetas de rabo de toro',
		text: 'Croquetas caseras con un proceso de elaboración pausado, una de las tapas más comentadas de la taberna.',
	},
	{
		category: 'Receta de siempre',
		name: 'Croquetas de puchero',
		text: 'Una receta tradicional elaborada en casa para compartir como entrante.',
	},
	{
		category: 'Sabor cordobés',
		name: 'Rabo de toro',
		text: 'Guiso tradicional con una presentación actual, citado entre los platos destacados del restaurante.',
	},
	{
		category: 'Para compartir',
		name: 'Presa ibérica a la brasa',
		text: 'Carne a la brasa y cortes seleccionados para disfrutar en compañía.',
	},
	{
		category: 'Postre casero',
		name: 'Tarta de queso',
		text: 'Uno de los postres de la casa mencionados por los comensales. Pregunta por la selección del día.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está Taberna El Chato?',
		answer:
			'Taberna El Chato está en Villarrubia, Córdoba. La ficha de Google Maps y varios directorios indican Avenida de la Pedanía, 206, 14710. El sitio oficial muestra Av. Concordia, 1; confirma la dirección por teléfono antes de desplazarte.',
	},
	{
		question: '¿Cuál es el horario de Taberna El Chato?',
		answer:
			'Una guía local publicó en mayo de 2022 horario de martes a sábado de 08:00 a 17:00 y de 20:00 a 23:00; los domingos de 08:00 a 17:00 y los lunes cerrado. Es una referencia antigua y otras fuentes difieren: consulta la ficha oficial o llama al 957 41 98 79 antes de venir.',
	},
	{
		question: '¿Qué platos son especialidad de la casa?',
		answer:
			'Taberna El Chato se presenta como especialista en carnes maduradas y a la brasa. También se mencionan las croquetas caseras de rabo de toro y puchero, rabo de toro y presa ibérica. La carta puede cambiar; pregunta por los cortes y platos disponibles.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes reservar llamando al 957 41 98 79 o usar el sistema de reservas online enlazado desde la web oficial. Es recomendable reservar los fines de semana.',
	},
	{
		question: '¿Hay terraza, aparcamiento y opciones para llevar?',
		answer:
			'La web oficial menciona terraza climatizada, aparcamiento, comida para llevar y que se admiten mascotas. Confirma con el establecimiento qué servicios están disponibles el día de tu visita.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Taberna en Villarrubia, Córdoba, especializada en carnes maduradas y a la brasa, croquetas caseras y cocina tradicional.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina española', 'Cocina cordobesa', 'Carnes a la brasa', 'Tapas'],
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
	sameAs: [instagramUrl, facebookUrl, officialSiteUrl],
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
