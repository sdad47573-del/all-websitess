export const business = {
	name: 'The Boss Restaurante',
	streetAddress: 'Plaza Gloria Fuertes, 6',
	postalCode: '29720',
	city: 'La Cala del Moral',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 656 40 40 30'],
	latitude: 36.7153676,
	longitude: -4.3116902,
	site: 'https://www.sur-digital.com/the-boss-restaurante',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/The+Boss+Restaurante/data=!4m7!3m6!1s0xd725b003ea5dcb5:0xec436afb6a35d7e2!8m2!3d36.7153676!4d-4.3116902!16s%2Fg%2F11xd8vf09s!19sChIJtdylPgBbcg0R4tc1avtqQ-w?authuser=0&hl=es';

export const phoneHrefs = ['tel:+34656404030'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en La Cala del Moral (Málaga) con pizza al horno de leña, pasta, carnes y desayunos, y terraza.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	servesCuisine: ['Italiana', 'Pizza'],
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
};
