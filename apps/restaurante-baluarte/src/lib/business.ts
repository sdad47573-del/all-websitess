export const business = {
	name: 'Restaurante Baluarte',
	streetAddress: 'Calle Poeta Manuel Alcántara, 6',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 679 52 27 33'],
	latitude: 36.7152567,
	longitude: -4.2794235,
	site: 'https://restaurante-baluarte-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Baluarte/@36.7152567,-4.2794235,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b37329f85a7:0x8e6810590eb4ce6e!8m2!3d36.7152567!4d-4.2794235!16s%2Fg%2F11s4t3zrmm?authuser=0&hl=es&entry=ttu';

export const phoneHrefs = ['tel:+34679522733'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/baluarterestaurante/';
export const facebookUrl = 'https://www.facebook.com/p/Baluarte-Restaurante-100091244101389/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description: 'Restaurante de cocina andaluza y mediterránea en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	servesCuisine: ['Andaluza', 'Mediterránea'],
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
	sameAs: [instagramUrl, facebookUrl],
};
