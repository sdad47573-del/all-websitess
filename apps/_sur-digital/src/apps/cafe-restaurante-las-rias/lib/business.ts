export const business = {
	name: 'Café Restaurante Las Rías',
	shortName: 'Las Rías',
	streetAddress: 'Calle Bulto, 41',
	postalCode: '29620',
	district: 'La Carihuela',
	city: 'Torremolinos',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 38 59 74',
	latitude: 36.6095576,
	longitude: -4.504137,
	placeId: '0xd72fc75be07651d:0xdd16adf7b6b51e2',
	site: 'https://las-rias-torremolinos.vercel.app',
	facebook: 'https://www.facebook.com/192214168088996',
} as const;

export const phoneHref = 'tel:+34952385974';
export const mapsUrl =
	'https://www.google.com/maps/place/Cafe+Restaurante+Las+Rias/@36.6095576,-4.504137,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fc75be07651d:0xdd16adf7b6b51e2!8m2!3d36.6095576!4d-4.504137!16s%2Fg%2F11cn93ks5_';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Café Restaurante Las Rías en La Carihuela, Torremolinos, con cocina española, tapas, pescados y arroces.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Seafood', 'Mediterranean', 'Tapas'],
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
	sameAs: [business.facebook],
};
