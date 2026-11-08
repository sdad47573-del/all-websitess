export const business = {
	name: 'Bar Los Granaínos de Miguel',
	shortName: 'Los Granaínos de Miguel',
	streetAddress: 'Avenida Andalucía, 5a',
	postalCode: '29649',
	district: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 49 34 69',
	latitude: 36.4980999,
	longitude: -4.6865999,
	placeId: '0xd731fcad28519e9:0x31b4c68f4c706985',
	site: 'https://bar-los-granainos-miguel.vercel.app',
} as const;

export const phoneHref = 'tel:+34952493469';
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Los+Grana%C3%ADnos+de+Miguel+(Cala+de+Mijas)/@36.4980999,-4.6865999,17z/data=!3m1!4b1!4m6!3m5!1s0xd731fcad28519e9:0x31b4c68f4c706985!8m2!3d36.4980999!4d-4.6865999!16s%2Fg%2F11c0r5z1zv';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Bar de cocina española en La Cala de Mijas, conocido por sus pescados y mariscos frescos, raciones generosas y ambiente familiar.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Andalusian', 'Seafood', 'Mediterranean'],
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
