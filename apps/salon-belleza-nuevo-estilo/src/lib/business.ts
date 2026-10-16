/**
 * Datos del Salón de Belleza Nuevo Estilo (Av de los Almogávares, 30 · Nte. Sierra · 14006 Córdoba).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, valoración
 * con número de reseñas y coordenadas. La ficha no publica horario ("Añadir horario"),
 * así que no se inventa ninguno.
 */
export const business = {
	name: 'Salón de Belleza Nuevo Estilo',
	shortName: 'Nuevo Estilo',
	streetAddress: 'Av de los Almogávares, 30',
	postalCode: '14006',
	district: 'Norte Sierra',
	city: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 28 39 67',
	latitude: 37.8965843,
	longitude: -4.7752082,
	/** Valoración de la ficha de Google Maps (4,0 sobre 5 con 1 reseña, 16 oct 2026). */
	rating: 4.0,
	reviewCount: 1,
	site: 'https://salon-belleza-nuevo-estilo.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Sal%C3%B3n+de+Belleza+Nuevo+Estilo/@37.8965843,-4.7752082,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf71471f1eab:0x60c84ed51f7b57c1!8m2!3d37.8965843!4d-4.7752082!16s%2Fg%2F11tf1c8ddm?authuser=0&hl=es&entry=ttu';

export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJqx4fR3HfbA0RwVd7H9VOyGA&hl=es';

export const instagramUrl = 'https://www.instagram.com/salondebelleza.nuevoestilo/';

export const phoneHref = 'tel:+34957283967';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Salón de belleza en Norte Sierra, Córdoba: Nuevo Estilo en Av de los Almogávares, 30. Llama al 957 28 39 67.',
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
	sameAs: [instagramUrl, reviewsUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
};
