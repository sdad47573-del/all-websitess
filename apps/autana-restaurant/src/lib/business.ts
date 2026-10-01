export const business = {
	name: 'Autana Restaurant',
	shortName: 'Autana',
	streetAddress: 'Calle Jaramar del Chaparral, 11',
	postalCode: '29649',
	district: 'Las Lagunas de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 621 21 65 93',
	latitude: 36.5062557,
	longitude: -4.6680244,
	placeId: '0xd731f388ede47bf:0x6b9916a3fcdf5622',
	site: 'https://autana-restaurant.vercel.app',
} as const;

export const phoneHref = 'tel:+34621216593';
export const mapsUrl =
	'https://www.google.com/maps/place/Autana+Restaurant/@36.5062557,-4.6680244,17z/data=!3m1!4b1!4m6!3m5!1s0xd731f388ede47bf:0x6b9916a3fcdf5622!8m2!3d36.5062557!4d-4.6680244!16s%2Fg%2F11nr5n18yr';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	description:
		'Autana Restaurant sirve cocina venezolana en Mijas Costa, Málaga. Consulta la carta y confirma disponibilidad directamente con el restaurante.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Venezuelan'],
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
