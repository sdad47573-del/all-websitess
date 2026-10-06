/**
 * Datos de Restaurante La Nicoba, en Huelva.
 *
 * Todo lo que hay aquí sale de su ficha pública de Google Maps (consulta de octubre de 2026): el
 * nombre, la categoría (el campo `categories` solo declara «Restaurante»), la dirección, el
 * teléfono, las coordenadas, el código Plus, el horario, la valoración y el texto de las reseñas
 * recientes. La ficha no publica web propia ni redes sociales: cuando las tenga, se añaden aquí y
 * en el pie de página.
 *
 * La dirección de la ficha es una carretera sin número de portal (`A-5000-R`), así que la web la
 * reproduce tal cual y remite al mapa para llegar. No se inventan cifras, platos ni servicios: lo
 * que no está en la ficha, no está aquí.
 */

export const business = {
	name: 'Restaurante La Nicoba',
	shortName: 'La Nicoba',
	/** Categoría con la que la ficha clasifica el negocio (`categories` de Maps). */
	category: 'Restaurante',
	streetAddress: 'A-5000-R',
	postalCode: '21007',
	locality: 'Huelva',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 697 81 72 79',
	phoneDisplay: '697 81 72 79',
	latitude: 37.3030204,
	longitude: -6.8879083,
	/** Códigos Plus de la ficha: el global y el local. */
	plusCode: '8C9M8436+6R',
	plusCodeLocal: '8436+6R Huelva',
	/** Valoración media y número de reseñas publicados en la ficha. */
	rating: 4.7,
	reviewCount: 102,
	site: 'https://la-nicoba.vercel.app',
} as const;

export const phoneHref = 'tel:+34697817279';

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Nicoba/@37.3030204,-6.8879083,17z/data=!4m6!3m5!1s0xd11c5059b1ab38f:0x36dfe78c765a229d!8m2!3d37.3030204!4d-6.8879083!16s%2Fg%2F11g2qnv7sw';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

/** Horario de la ficha: de lunes a viernes en horario continuo, fin de semana cerrado. */
export const HOURS: {
	days: string;
	ranges: string[];
	schemaDays: string[];
}[] = [
	{ days: 'Lunes', ranges: ['6:30 – 17:00'], schemaDays: ['Monday'] },
	{ days: 'Martes', ranges: ['6:30 – 17:00'], schemaDays: ['Tuesday'] },
	{ days: 'Miércoles', ranges: ['6:30 – 17:00'], schemaDays: ['Wednesday'] },
	{ days: 'Jueves', ranges: ['6:30 – 17:00'], schemaDays: ['Thursday'] },
	{ days: 'Viernes', ranges: ['6:30 – 17:00'], schemaDays: ['Friday'] },
	{ days: 'Sábado', ranges: [], schemaDays: ['Saturday'] },
	{ days: 'Domingo', ranges: [], schemaDays: ['Sunday'] },
];

/**
 * Platos citados en las reseñas de la ficha, sin añadir nada que no esté escrito en ellas. El
 * texto está copiado tal cual, incluidas sus faltas.
 */
export const REVIEWS = [
	'Buen sitio para comerse un menu, la comida muy rica y precio economico.',
	'Los platos vienen con huevo y patatas fritas/ ensalada.',
	'Un salmorejo buenísimo (necesito su receta 🤣🤣🤣).',
] as const;

export const SPECIALTIES = [
	{
		name: 'Menú del día',
		detail: 'Es lo que piden y citan varias de las reseñas publicadas en su ficha.',
	},
	{
		name: 'Platos con huevo y patatas',
		detail: 'Una de las reseñas describe así los platos de la casa, con ensalada o patatas fritas.',
	},
	{
		name: 'Salmorejo',
		detail: 'Citado expresamente en una de las reseñas recientes de la ficha.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está Restaurante La Nicoba?',
		answer: `En la carretera A-5000-R, 21007 Huelva. La ficha de Google Maps (que es también la del mapa de esta página) no publica número de portal, así que lo práctico es llegar con las indicaciones desde el mapa. Coordenadas: ${business.latitude}, ${business.longitude} (Plus: ${business.plusCodeLocal}).`,
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Abre de lunes a viernes en horario continuo, de 6:30 a 17:00. Sábado y domingo permanece cerrado. En festivos el horario puede cambiar, así que conviene llamar antes.',
	},
	{
		question: '¿Qué se come?',
		answer:
			'Su ficha lo clasifica como «Restaurante». En las reseñas se cita el menú del día, el salmorejo y platos con huevo acompañados de patatas fritas o ensalada. No hay carta publicada: consulta platos, precios y alérgenos al llamar.',
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
		'Restaurante en la carretera A-5000-R de Huelva, con menú del día, según las reseñas de su ficha de Google Maps.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina española', 'Cocina andaluza'],
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
	 * La nota se publica porque la ficha la expone de forma verificable (4,7 con 102 reseñas).
	 * Otros directorios publican cifras distintas; si el negocio pide retirarla, se borra el bloque.
	 */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: HOURS.filter((day) => day.ranges.length > 0).map((day) => {
		const [opens, closes] = day.ranges[0].split(' – ');
		return {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: day.schemaDays,
			opens,
			closes,
		};
	}),
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
