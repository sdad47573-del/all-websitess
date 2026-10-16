/**
 * Datos del Centro de Belleza Mimate (C. José Dámaso "Pepete", 21 · Poniente Sur · 14005 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: 'Centro de Belleza Mimate',
	shortName: 'Mimate',
	streetAddress: 'C. José Dámaso "Pepete", 21',
	postalCode: '14005',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 695 17 35 32',
	latitude: 37.8759824,
	longitude: -4.7971771,
	/** Valoración de la ficha de Google Maps (4,7 sobre 5 con 49 reseñas, 16 oct 2026). */
	rating: 4.7,
	reviewCount: 49,
	site: 'https://centro-belleza-mimate.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Centro+de+Belleza+Mimate/@37.8759824,-4.7971771,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20a65c418827:0xdf4422364c5f5ceb!8m2!3d37.8759824!4d-4.7971771!16s%2Fg%2F11ynqmchl?authuser=0&hl=es&entry=ttu';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJJ4hBXKYgbQ0R61xfTDYiRN8&hl=es';

export const phoneHref = 'tel:+34695173532';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): lunes, martes, jueves y
 * viernes 10:00–18:00; miércoles 10:00–14:00; sábado 10:00–14:00; domingo cerrado.
 * Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes, martes, jueves y viernes', hours: '10:00–18:00' },
	{ days: 'Miércoles y sábado', hours: '10:00–14:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Centro de belleza en Poniente Sur, Córdoba: Mimate en C. José Dámaso "Pepete", 21. Peluquería y estética. Llama al 695 17 35 32.',
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
	sameAs: [reviewsUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '18:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Saturday'],
			opens: '10:00',
			closes: '14:00',
		},
	],
};
