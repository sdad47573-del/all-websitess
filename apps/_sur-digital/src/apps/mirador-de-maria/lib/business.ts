export const business = {
	name: 'Restaurante Mirador de María',
	shortName: 'Mirador de María',
	streetAddress: 'Avenida de Benalmádena, 39',
	postalCode: '29620',
	district: 'El Pinillo',
	city: 'Torremolinos',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 38 22 10',
	latitude: 36.6054512,
	longitude: -4.5180228,
	placeId: '0xd72fc7de480310d:0xd17e99e2e493d4e',
	site: 'https://www.sur-digital.com/mirador-de-maria',
	facebook: 'https://www.facebook.com/100048963266228/',
} as const;

export const phoneHref = 'tel:+34952382210';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mirador+de+Mar%C3%ADa/@36.6054512,-4.5180228,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fc7de480310d:0xd17e99e2e493d4e!8m2!3d36.6054512!4d-4.5180228!16s%2Fg%2F1tcv7p2r';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Restaurante Mirador de María en El Pinillo, Torremolinos. Cocina casera y tapas; consulta directamente la carta y disponibilidad.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Tapas'],
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
