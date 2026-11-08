export const business = {
	name: 'Restaurante Faro Playa & Charcón Beach',
	shortName: 'Faro Playa & Charcón Beach',
	streetAddress: 'Carretera de Cádiz, km 204, Urb. El Faro, cambio de sentido 500',
	postalCode: '29649',
	district: 'El Faro · Playa del Charcón',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 620 44 38 86',
	latitude: 36.5068726,
	longitude: -4.6449936,
	placeId: '0xd72e215d4ed4609:0xb7ffdf6af62d05d4',
	site: 'https://faro-playa-charcon.vercel.app',
} as const;

export const phoneHref = 'tel:+34620443886';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Faro+playa+%26+Charc%C3%B2n+Beach/@36.5068726,-4.6449936,17z/data=!3m1!4b1!4m6!3m5!1s0xd72e215d4ed4609:0xb7ffdf6af62d05d4!8m2!3d36.5068726!4d-4.6449936!16s%2Fg%2F1hc15m59k';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Restaurante junto al mar en El Faro, Mijas Costa, con cocina española, pescados y mariscos y terraza frente al Mediterráneo.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Seafood', 'Mediterranean'],
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
