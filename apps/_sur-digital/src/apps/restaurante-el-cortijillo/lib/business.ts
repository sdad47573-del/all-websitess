export const business = {
	name: 'Restaurante El Cortijillo',
	shortName: 'El Cortijillo',
	streetAddress: 'Bulevar de La Cala, 29, Edificio Cala del Mar',
	postalCode: '29649',
	district: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 49 40 65',
	latitude: 36.5048806,
	longitude: -4.6787123,
	placeId: '0xd731e31acfd4359:0x9c2b575e4c7cd4a5',
	site: 'https://www.sur-digital.com/restaurante-el-cortijillo',
	instagram: 'https://www.instagram.com/elcortijillolacala/',
} as const;

export const phoneHref = 'tel:+34952494065';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Cortijillo/@36.5049903,-4.68136,17z/data=!4m6!3m5!1s0xd731e31acfd4359:0x9c2b575e4c7cd4a5!8m2!3d36.5048806!4d-4.6787123!16s%2Fg%2F11c5zxp5m8';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Restaurante familiar en La Cala de Mijas, desde 1987, con cocina mediterránea y especialidades de pescado y carne.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Mediterranean', 'Spanish', 'Seafood', 'Meat'],
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
	sameAs: [business.instagram],
};
