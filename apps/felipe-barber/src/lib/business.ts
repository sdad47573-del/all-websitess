/**
 * Datos de Felipe Barber (Calle Nuzas, 2A · Teatinos-Universidad · 29010 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: 'Felipe Barber',
	streetAddress: 'C. Nuzas, 2A',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 693 32 59 59',
	latitude: 36.7275167,
	longitude: -4.4674271,
	/** Valoración de la ficha de Google Maps (4,9 sobre 5 con 36 reseñas, 16 oct 2026). */
	rating: 4.9,
	reviewCount: 36,
	site: 'https://felipe-barber.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Felipe+Barber/@36.7275167,-4.4674271,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7d9f04b4337:0xffe64db45585bf5!8m2!3d36.7275167!4d-4.4674271!16s%2Fg%2F11gxn5y32_?hl=es';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJN0NL8Nn3cg0R9VtYRdtk_g8&hl=es';

export const phoneHref = 'tel:+34693325959';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): lunes solo de tarde (16:00–20:00);
 * de martes a viernes mañana y tarde (10:00–13:00 y 16:00–20:00); sábado solo de mañana
 * (10:00–13:00); domingo cerrado. Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes', hours: '16:00–20:00' },
	{ days: 'Martes a viernes', hours: '10:00–13:00 y 16:00–20:00' },
	{ days: 'Sábado', hours: '10:00–13:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${business.site}/#barbershop`,
	name: business.name,
	description: 'Barbería en Teatinos, Málaga.',
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
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '13:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '13:00',
		},
	],
};
