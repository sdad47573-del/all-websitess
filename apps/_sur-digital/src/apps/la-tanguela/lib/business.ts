/**
 * Datos de La Tanguela, restaurante andaluz en Corrales (Huelva).
 *
 * Todo lo que hay aquí sale de su ficha pública de Google Maps (consulta de octubre de 2026):
 * nombre, categoría, dirección, teléfono, coordenadas, horario, valoración y el texto de las
 * reseñas recientes. El negocio no tiene web propia ni redes sociales localizables, así que no
 * se enlaza ninguna: cuando las tenga, se añaden en `SOCIAL` y en el pie de página.
 *
 * No se inventan cifras ni servicios. Lo que no aparece en la ficha se deja fuera antes que
 * rellenarlo, y en el README queda anotado qué es cada dato.
 */

export const business = {
	name: 'La Tanguela',
	shortName: 'La Tanguela',
	/** Categoría con la que la ficha clasifica el negocio (`categories` de Maps). */
	category: 'Restaurante andaluz',
	streetAddress: 'C. Lazareto, 9',
	postalCode: '21120',
	locality: 'Corrales',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 666 21 28 95',
	phoneDisplay: '666 21 28 95',
	latitude: 37.2772964,
	longitude: -6.9915035,
	/** Código Plus local de la ficha (`72G5+W9 Corrales`). */
	plusCode: '8C9M72G5+W9',
	/** Valoración media y número de reseñas publicados en la ficha. */
	rating: 4.6,
	reviewCount: 830,
	site: 'https://www.sur-digital.com/la-tanguela',
} as const;

export const phoneHref = 'tel:+34666212895';

export const mapsUrl =
	'https://www.google.com/maps/place/La+Tanguela/@37.2772964,-6.9915035,17z/data=!4m6!3m5!1s0xd11ce13dcff6753:0xca44b0b409f3200f!8m2!3d37.2772964!4d-6.9915035!16s%2Fg%2F11fsn3pwvy';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

/** Horario tal y como lo publica la ficha: varios tramos por día y el lunes cerrado. */
export const HOURS: {
	days: string;
	ranges: string[];
	schemaDays: string[];
}[] = [
	{ days: 'Lunes', ranges: [], schemaDays: ['Monday'] },
	{ days: 'Martes', ranges: ['11:00 – 17:00'], schemaDays: ['Tuesday'] },
	{ days: 'Miércoles', ranges: ['11:00 – 17:30'], schemaDays: ['Wednesday'] },
	{ days: 'Jueves', ranges: ['11:00 – 17:30', '20:30 – 24:00'], schemaDays: ['Thursday'] },
	{ days: 'Viernes', ranges: ['11:00 – 17:30', '20:30 – 0:30'], schemaDays: ['Friday'] },
	{ days: 'Sábado', ranges: ['11:30 – 17:30', '20:30 – 0:30'], schemaDays: ['Saturday'] },
	{ days: 'Domingo', ranges: ['11:30 – 17:00'], schemaDays: ['Sunday'] },
];

/**
 * Textos de reseñas publicadas en la ficha de Google Maps, copiados tal cual (incluidas sus
 * erratas). La ficha no expone el nombre completo de quien las firma, así que se citan sin
 * atribución individual.
 */
export const REVIEWS = [
	'Espectacular paella de ibéricos y queso para 2 y quedamos super satisfechos.',
	'Bien atendido personal muy agrsdsble yatento y los arroces muy rico pata repetir',
	'Como siempre muy buenos, platos y buena atención de los camareros y camareras.',
] as const;

/** Platos y servicios que se deducen de la categoría y de lo que repiten las reseñas. */
export const SPECIALTIES = [
	{
		name: 'Cocina andaluza',
		detail: 'La categoría con la que la ficha clasifica la casa: guisos y platos de siempre.',
	},
	{
		name: 'Arroces',
		detail: 'Los arroces son lo que más repiten las reseñas recientes de la ficha.',
	},
	{
		name: 'Paellas para compartir',
		detail: 'Se citan paellas para dos, como la de ibéricos y queso.',
	},

];

export const faqs = [
	{
		question: '¿Dónde está La Tanguela?',
		answer:
			'En la calle Lazareto, 9, 21120 Corrales (Huelva). La ficha de Google Maps está en el mapa de esta página y puedes abrirla para ver la ruta desde tu ubicación.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Abre de martes a domingo: martes de 11:00 a 17:00; miércoles de 11:00 a 17:30; jueves de 11:00 a 17:30 y de 20:30 a 24:00; viernes de 11:00 a 17:30 y de 20:30 a 0:30; sábado de 11:30 a 17:30 y de 20:30 a 0:30; domingo de 11:30 a 17:00. El lunes permanece cerrado.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Su ficha lo clasifica como restaurante andaluz. Las reseñas recientes destacan los arroces y las paellas para compartir.',
	},
	{
		question: '¿Cómo se reserva una mesa?',
		answer: `Llamando al ${business.phoneDisplay}, el teléfono que publica la ficha del negocio. Si vas a pedir arroz o paella, avisa al reservar.`,
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
		'Restaurante andaluz en Corrales (Huelva), en la calle Lazareto 9. Arroces y paellas para compartir.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Cocina española', 'Arroces'],
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
	 * La valoración se publica porque la ficha la expone de forma verificable (4,6 con 830
	 * reseñas). Si el negocio pide retirarla, se borra este bloque.
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
				closes: closes === '24:00' ? '23:59' : closes,
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
