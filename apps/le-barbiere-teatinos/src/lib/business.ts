/**
 * Datos de PELUQUERÍA LE BARBIERE TEATINOS (C. Hermes, 5, Loc 2 · Teatinos-Universidad · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: 'PELUQUERÍA LE BARBIERE TEATINOS',
	shortName: 'LE BARBIERE TEATINOS',
	streetAddress: 'C. Hermes, 5, Loc 2',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 640 17 50 44',
	latitude: 36.7218951,
	longitude: -4.475792,
	/** Valoración de la ficha de Google Maps (4,8 sobre 5 con 221 reseñas, 16 oct 2026). */
	rating: 4.8,
	reviewCount: 221,
	site: 'https://le-barbiere-teatinos.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/PELUQUER%C3%8DA+LE+BARBIERE+TEATINOS/@36.7218951,-4.475792,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ade71fc967:0xd395a9d0bd9c98f2!8m2!3d36.7218951!4d-4.475792!16s%2Fg%2F11sy9q12nc?authuser=0&hl=es&entry=ttu';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJZ8kf5633cg0R8picvdCpldM&hl=es';

export const bookingUrl =
	'https://booksy.com/es-es/7319_le-barbiere-teatinos_barberia_29485_malaga';

export const instagramUrl = 'https://www.instagram.com/lebarbiere_teatinos/';

export const phoneHref = 'tel:+34640175044';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): de lunes a viernes mañana y tarde
 * (10:00–13:00 y 16:00–19:00); sábado y domingo cerrado. Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes a viernes', hours: '10:00–13:00 y 16:00–19:00' },
	{ days: 'Sábado', hours: 'Cerrado' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${business.site}/#barbershop`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Peluquería y barbería en Teatinos, Málaga: corte, barba y cuidado masculino en C. Hermes, 5. Reserva online en Booksy o llama al 640 17 50 44.',
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
	sameAs: [bookingUrl, instagramUrl, reviewsUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '13:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '19:00',
		},
	],
};
