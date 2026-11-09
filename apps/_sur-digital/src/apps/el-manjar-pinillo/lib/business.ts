export const business = {
	name: 'Bar Restaurante El Manjar',
	shortName: 'El Manjar Pinillo',
	streetAddress: 'Calle Vicente Blanch Picot, 10, Local 5–6',
	postalCode: '29620',
	district: 'Polígono El Pinillo',
	city: 'Torremolinos',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 951 21 69 48',
	latitude: 36.6142062,
	longitude: -4.5190483,
	placeId: '0xd72fb81a24ce679:0x7b040cb975a4bf87',
	site: 'https://www.sur-digital.com/el-manjar-pinillo',
	facebook: 'https://www.facebook.com/100063299554104/',
} as const;

export const phoneHref = 'tel:+34951216948';
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+restaurante+El+Manjar/@36.6142062,-4.5190483,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fb81a24ce679:0x7b040cb975a4bf87!8m2!3d36.6142062!4d-4.5190483!16s%2Fg%2F1hm4cyycf';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	alternateName: business.shortName,
	description:
		'Bar Restaurante El Manjar en el Polígono El Pinillo, Torremolinos. Desayunos y cocina española; consulta por teléfono el menú diario y la disponibilidad.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Andalusian', 'Mediterranean'],
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
