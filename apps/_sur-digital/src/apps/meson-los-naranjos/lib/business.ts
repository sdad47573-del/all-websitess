export const business = {
	name: 'Mesón Los Naranjos',
	streetAddress: 'Jardines de La Butiplaya, local 12, C/ Sedella',
	postalCode: '29649',
	neighborhood: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phones: ['+34 669 428 994', '+34 669 428 995'],
	latitude: 36.4995922,
	longitude: -4.6864741,
	placeId: '0xd731fcb326b6d67:0x6182a6c45ff35e1b',
	site: 'https://www.sur-digital.com/meson-los-naranjos',
} as const;

export const primaryPhoneHref = 'tel:+34669428995';
export const secondaryPhoneHref = 'tel:+34669428994';
export const mapsUrl =
	'https://www.google.com/maps/place/Meson+Los+Naranjos/@36.4995922,-4.6864741,17z/data=!3m1!4b1!4m6!3m5!1s0xd731fcb326b6d67:0x6182a6c45ff35e1b!8m2!3d36.4995922!4d-4.6864741!16s%2Fg%2F11g7217dtn';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Mesón en La Cala de Mijas especializado en carnes a la brasa, ternera, buey gallego y tapas.',
	url: `${business.site}/`,
	telephone: business.phones,
	servesCuisine: ['Spanish', 'Mediterranean', 'Grill'],
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
