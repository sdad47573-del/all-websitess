export const business = {
	name: 'Restaurante Nueve Dragones',
	shortName: 'Nueve Dragones',
	streetAddress: 'Paseo Costa del Sol, 5',
	postalCode: '29649',
	neighborhood: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 951 23 67 73',
	latitude: 36.501647,
	longitude: -4.6829177,
	placeId: '0xd731e34793de8c9:0xf9656a1d9a5a7c49',
	site: 'https://www.sur-digital.com/restaurante-nueve-dragones',
} as const;

export const phoneHref = 'tel:+34951236773';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Nueve+Dragones/@36.501647,-4.6829177,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e34793de8c9:0xf9656a1d9a5a7c49!8m2!3d36.501647!4d-4.6829177!16s%2Fg%2F12qhgp5n0';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Restaurante de cocina china y asiática en Paseo Costa del Sol, La Cala de Mijas.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Chinese', 'Asian'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.neighborhood,
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
