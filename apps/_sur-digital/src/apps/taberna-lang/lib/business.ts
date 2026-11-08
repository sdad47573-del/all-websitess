export const business = {
	name: 'Taberna Lang',
	streetAddress: 'Calle Jaén, 3',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 605 97 99 06'],
	email: 'victorlangpena@gmail.com',
	latitude: 36.7160511,
	longitude: -4.2844404,
	site: 'https://www.sur-digital.com/taberna-lang',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Lang/data=!4m7!3m6!1s0xd725ba0e7dcfd4f:0xb40a883c74aa5c86!8m2!3d36.7160511!4d-4.2844404!16s%2Fg%2F11q7yfrgz2!19sChIJT_3c56Bbcg0RhlyqdDyICrQ?authuser=0&hl=es';

export const phoneHrefs = ['tel:+34605979906'] as const;
export const emailHref = `mailto:${business.email}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/tabernalang/';
export const facebookUrl = 'https://www.facebook.com/TabernaLang/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${business.site}/#taberna`,
	name: business.name,
	description: 'Taberna de tapas y picoteo en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	email: business.email,
	servesCuisine: ['Mediterránea', 'Española', 'Tapas'],
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
