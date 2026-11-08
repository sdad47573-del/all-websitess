/**
 * Datos del Salón de belleza CrissFany's (Av. de la Viñuela, 22 · Levante · 14010 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas, horario semanal y coordenadas.
 */
export const business = {
	name: "Salón de belleza CrissFany's",
	shortName: "CrissFany's",
	streetAddress: 'Av. de la Viñuela, 22',
	postalCode: '14010',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 622 68 18 21',
	latitude: 37.888565,
	longitude: -4.762951,
	/** Valoración de la ficha de Google Maps (4,8 sobre 5 con 6 reseñas, 16 oct 2026). */
	rating: 4.8,
	reviewCount: 6,
	site: 'https://www.sur-digital.com/salon-belleza-crissfany',
} as const;

export const mapsUrl =
	"https://www.google.com/maps/place/Sal%C3%B3n+de+belleza+CrissFany's/@37.888565,-4.762951,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf8106113317:0x6e02c94cb931230a!8m2!3d37.888565!4d-4.762951!16s%2Fg%2F11f5h05lnv?authuser=0&hl=es&entry=ttu";

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJFzMRBoHfbA0RCiMxuUzJAm4&hl=es';

export const phoneHref = 'tel:+34622681821';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha (16 oct 2026): lunes y domingo cerrado;
 * martes y viernes 9:00–18:00; miércoles y jueves 9:00–13:30 y 16:30–19:30;
 * sábado 9:00–14:00. Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes', hours: 'Cerrado' },
	{ days: 'Martes y viernes', hours: '9:00–18:00' },
	{ days: 'Miércoles y jueves', hours: '9:00–13:30 y 16:30–19:30' },
	{ days: 'Sábado', hours: '9:00–14:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Salón de belleza en Levante, Córdoba: CrissFany\u2019s en Av. de la Viñuela, 22. Peluquería, uñas y depilación. Llama al 622 68 18 21.',
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
			dayOfWeek: ['Tuesday', 'Friday'],
			opens: '09:00',
			closes: '18:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday'],
			opens: '09:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday'],
			opens: '16:30',
			closes: '19:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '09:00',
			closes: '14:00',
		},
	],
};
