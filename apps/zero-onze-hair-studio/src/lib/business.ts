/**
 * Datos de Zero Onze hair studio (Av. Parménides, 17 · Teatinos-Universidad · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: 'Zero Onze hair studio',
	streetAddress: 'Av. Parménides, 17',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 624 22 19 15',
	latitude: 36.7207816,
	longitude: -4.4798433,
	/** Valoración de la ficha de Google Maps (5,0 sobre 5 con 135 reseñas, 16 oct 2026). */
	rating: 5.0,
	reviewCount: 135,
	site: 'https://zero-onze-hair-studio.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Zero+Onze+hair+studio/@36.7207816,-4.4798433,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b4ba8841ad:0x64c2947cb043ff89!8m2!3d36.7207816!4d-4.4798433!16s%2Fg%2F11kk4sjbxw?hl=es';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJrUGIurT3cg0Rif9DsHyUwmQ&hl=es';

export const phoneHref = 'tel:+34624221915';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): lunes solo de tarde (16:00–21:00);
 * de martes a viernes jornada continua (10:00–21:00); sábado solo de mañana-mediodía
 * (10:00–18:00); domingo cerrado. Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes', hours: '16:00–21:00' },
	{ days: 'Martes a viernes', hours: '10:00–21:00' },
	{ days: 'Sábado', hours: '10:00–18:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#hairsalon`,
	name: business.name,
	description: 'Barbería y peluquería en Teatinos, Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
	image: `${business.site}/og.jpg`,
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Monday',
			opens: '16:00',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '18:00',
		},
	],
};
