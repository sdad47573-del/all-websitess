/**
 * Datos de Bar restaurante El rincón de Ana, en Huelva.
 *
 * Todo sale de su ficha pública de Google Maps (consulta de octubre de 2026): el nombre, la
 * categoría (el campo `categories` solo declara «Bar restaurante»), la dirección, el teléfono, las
 * coordenadas, los códigos Plus, el horario, la valoración y el texto de tres reseñas recientes.
 * La ficha no publica web ni redes sociales: cuando las tenga, se añaden aquí y en el pie.
 *
 * La ficha responde de forma intermitente: a veces llega sin el bloque de horarios ni de reseñas.
 * Los datos de este archivo están tomados de una respuesta completa y se han comprobado contra
 * varias. No se inventa carta, precios ni servicios: lo que no está en la ficha, no está aquí.
 */

export const business = {
	name: 'Bar restaurante El rincón de Ana',
	shortName: 'El rincón de Ana',
	/** Categoría con la que la ficha clasifica el negocio (`categories` de Maps). */
	category: 'Bar restaurante',
	streetAddress: 'C. los Emires, 1',
	postalCode: '21002',
	locality: 'Huelva',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 617 44 88 78',
	phoneDisplay: '617 44 88 78',
	latitude: 37.2589158,
	longitude: -6.9566516,
	/** Códigos Plus de la ficha: el global y el local. */
	plusCode: '8C9M725V+H8',
	plusCodeLocal: '725V+H8 Huelva',
	/** Valoración media y número de reseñas publicados en la ficha. */
	rating: 4.6,
	reviewCount: 387,
	site: 'https://www.sur-digital.com/el-rincon-de-ana',
} as const;

export const phoneHref = 'tel:+34617448878';

export const mapsUrl =
	'https://www.google.com/maps/place/Bar+restaurante+El+rinc%C3%B3n+de+Ana/@37.2589158,-6.9566516,17z/data=!4m6!3m5!1s0xd11d02933d79ba9:0x3dd707764477184a!8m2!3d37.2589158!4d-6.9566516!16s%2Fg%2F11b6r7wwhr';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

/**
 * Horario de la ficha: dos turnos de martes a viernes y cierre de lunes a domingo, con el fin de
 * semana cerrado.
 */
export const HOURS: {
	days: string;
	ranges: string[];
	schemaDays: string[];
}[] = [
	{ days: 'Lunes', ranges: [], schemaDays: ['Monday'] },
	{ days: 'Martes', ranges: ['7:30 – 16:00', '21:00 – 23:30'], schemaDays: ['Tuesday'] },
	{ days: 'Miércoles', ranges: ['7:30 – 16:00', '21:00 – 23:30'], schemaDays: ['Wednesday'] },
	{ days: 'Jueves', ranges: ['7:30 – 16:00', '21:00 – 23:30'], schemaDays: ['Thursday'] },
	{ days: 'Viernes', ranges: ['7:30 – 16:00', '21:00 – 23:30'], schemaDays: ['Friday'] },
	{ days: 'Sábado', ranges: [], schemaDays: ['Saturday'] },
	{ days: 'Domingo', ranges: [], schemaDays: ['Sunday'] },
];

/**
 * Reseñas de la ficha, copiadas tal cual. La ficha no expone el nombre completo de quien firma,
 * así que se citan sin atribución individual.
 */
export const REVIEWS = [
	'Comida fresca donde sirven pescados y mariscos.',
	'Pescado muy fresco y las raciones geniales',
	'Los calamares están buenísimos y los chocos fritos tenían muy buena pinta.',
] as const;

/**
 * Lo que se puede afirmar de la cocina: solo lo que dicen la categoría y las reseñas citadas. El
 * negocio no tiene carta publicada.
 */
export const SPECIALTIES = [
	{
		name: 'Pescados y mariscos',
		detail: 'Es lo único que se repite en las reseñas: producto fresco, servido en el local.',
	},
	{
		name: 'Fritos de la casa',
		detail: 'Las reseñas citan los calamares y los chocos fritos entre lo que más gusta.',
	},
	{
		name: 'Raciones',
		detail: 'Una de las reseñas destaca el tamaño de las raciones que sirven.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está El rincón de Ana?',
		answer: `En la calle los Emires, 1, 21002 Huelva. Puedes abrir la ficha de Google Maps desde el mapa de esta página para ver la ubicación exacta y la ruta (coordenadas ${business.latitude}, ${business.longitude}; Plus ${business.plusCodeLocal}).`,
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'De martes a viernes abre en dos turnos: de 7:30 a 16:00 y de 21:00 a 23:30. Lunes, sábado y domingo permanece cerrado. En festivos el horario puede cambiar, así que conviene llamar antes.',
	},
	{
		question: '¿Qué se come?',
		answer:
			'Su ficha lo clasifica como «Bar restaurante». En las reseñas se repiten los pescados y mariscos, el pescado fresco, las raciones y los fritos (calamares y chocos). No hay carta publicada: consulta platos, precios y alérgenos al llamar.',
	},
	{
		question: '¿Cómo se reserva o se pregunta por el menú?',
		answer: `Llamando al ${business.phoneDisplay}, el teléfono que publica la ficha del negocio.`,
	},
	{
		question: '¿Tiene web o redes sociales?',
		answer:
			'No consta ninguna web ni perfil oficial en su ficha de Google Maps. Esta página es informativa y no gestiona reservas.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante en la calle los Emires 1 de Huelva, con pescados, mariscos y raciones según las reseñas de su ficha de Google Maps.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Pescados y mariscos'],
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
	/**
	 * La nota se publica porque la ficha la expone de forma verificable (4,6 con 387 reseñas). Si el
	 * negocio pide retirarla, se borra este bloque.
	 */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: HOURS.filter((day) => day.ranges.length > 0).flatMap((day) =>
		day.ranges.map((range) => {
			const [opens, closes] = range.split(' – ');
			return {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: day.schemaDays,
				opens,
				closes,
			};
		}),
	),
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
