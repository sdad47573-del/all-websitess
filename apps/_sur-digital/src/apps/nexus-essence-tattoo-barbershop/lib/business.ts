/**
 * Datos de Nexus Essence Tattoo & Barbershop (Av. Jorge Luis Borges, 46 · Teatinos-Universidad · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: 'Nexus Essence Tattoo & Barbershop',
	shortName: 'Nexus Essence',
	streetAddress: 'Av. Jorge Luis Borges, 46',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 722 38 84 27',
	latitude: 36.7207307,
	longitude: -4.4715546,
	/** Valoración de la ficha de Google Maps (5,0 sobre 5 con 73 reseñas, 16 oct 2026). */
	rating: 5.0,
	reviewCount: 73,
	site: 'https://www.sur-digital.com/nexus-essence-tattoo-barbershop',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Nexus+Essence+Tattoo+%26+Barbershop/@36.7207307,-4.4715546,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f700387acbf5:0x1ba6e431b8c71747!8m2!3d36.7207307!4d-4.4715546!16s%2Fg%2F11zgcjzt_n?authuser=0&hl=es&entry=ttu';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ9ct6OAD3cg0RRxfHuDHkphs&hl=es';

export const bookingUrl =
	'https://booksy.com/es-es/182638_nexus-essence_barberia_29485_malaga';

export const phoneHref = 'tel:+34722388427';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): de lunes a viernes
 * (8:00–21:00); sábado solo de mañana (10:00–16:00); domingo cerrado.
 * Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes a viernes', hours: '8:00–21:00' },
	{ days: 'Sábado', hours: '10:00–16:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${business.site}/#barbershop`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Tatuaje y barbería en Teatinos, Málaga: Nexus Essence en Av. Jorge Luis Borges, 46. Reserva en Booksy o llama al 722 38 84 27.',
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
	sameAs: [bookingUrl, reviewsUrl],
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
			opens: '08:00',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '16:00',
		},
	],
};
