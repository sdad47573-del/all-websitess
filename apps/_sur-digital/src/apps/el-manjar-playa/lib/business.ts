export const business = {
	name: 'Restaurante El Manjar Playa',
	shortName: 'El Manjar Playa',
	streetAddress: 'Calle Salvador Allende, 40, Local 1',
	postalCode: '29620',
	district: 'La Carihuela',
	city: 'Torremolinos',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 951 63 43 78',
	latitude: 36.6044211,
	longitude: -4.5091752,
	placeId: '0xd72fd529811f41d:0x428ad708b7f35e53',
	site: 'https://www.sur-digital.com/el-manjar-playa',
	instagram: 'https://www.instagram.com/el_manjar_playa/',
} as const;

export const phoneHref = 'tel:+34951634378';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+EL+MANJAR+PLAYA/@36.6044211,-4.5091752,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fd529811f41d:0x428ad708b7f35e53!8m2!3d36.6044211!4d-4.5091752!16s%2Fg%2F11fkw7yjt_';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Restaurante de cocina mediterránea en La Carihuela, Torremolinos, con pescados, mariscos, arroces y menú del día.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Mediterranean', 'Seafood', 'Spanish'],
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
