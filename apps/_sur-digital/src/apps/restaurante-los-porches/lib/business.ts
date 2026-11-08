export const business = {
	name: 'Restaurante Los Porches',
	shortName: 'Los Porches',
	streetAddress: 'Calle Sedella, Jardines La Butiplaya, Locales 1–3',
	postalCode: '29649',
	district: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 49 44 42',
	latitude: 36.500006,
	longitude: -4.686078,
	placeId: '0xd731e291c0daa61:0x6472b14706d17349',
	site: 'https://www.sur-digital.com/restaurante-los-porches',
	facebook: 'https://www.facebook.com/restaurantelosporcheslacalademijas/',
} as const;

export const phoneHref = 'tel:+34952494442';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Los+Porches/@36.500006,-4.686078,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e291c0daa61:0x6472b14706d17349!8m2!3d36.500006!4d-4.686078!16s%2Fg%2F1vyk3w1f';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Restaurante Los Porches en La Cala de Mijas: cocina española con carnes, pescados y mariscos en un ambiente familiar desde 1988.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Mediterranean', 'Seafood'],
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
