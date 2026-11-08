export const business = {
	name: 'Benavra',
	tagline: 'Modern international food · homemade with care',
	streetAddress: 'Avenida de Rota, 4, Urbanización Torrenueva',
	postalCode: '29649',
	district: 'Torrenueva',
	city: 'La Cala de Mijas',
	municipality: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 634 00 68 25',
	latitude: 36.4959397,
	longitude: -4.6910954,
	placeId: '0xd731f3fcbb808d1:0x72f80b8fabcddc0b',
	site: 'https://benavra.vercel.app',
	instagram: 'https://www.instagram.com/benavra.torrenueva/',
	facebook: 'https://www.facebook.com/BenavraLaCala/',
} as const;

export const phoneHref = 'tel:+34634006825';
export const mapsUrl =
	'https://www.google.com/maps/place/Benavra/@36.4959397,-4.6910954,17z/data=!3m1!4b1!4m6!3m5!1s0xd731f3fcbb808d1:0x72f80b8fabcddc0b!8m2!3d36.4959397!4d-4.6910954!16s%2Fg%2F11stnzxyr0';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=en&output=embed`;
export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Family-run restaurant in Torrenueva, La Cala de Mijas, serving modern international food made in-house with fresh, local ingredients.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['International', 'Mediterranean', 'Healthy'],
	acceptsReservations: true,
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
	sameAs: [business.instagram, business.facebook],
};
