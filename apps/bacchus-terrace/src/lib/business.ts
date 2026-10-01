export const business = {
	name: "Restaurante Bacchus' Terrace",
	shortName: "Bacchus' Terrace",
	streetAddress: 'Avenida de Antonio Machado, 57, Las Gaviotas, Local 20 (terraza superior)',
	postalCode: '29630',
	district: 'Benalmádena Costa',
	city: 'Benalmádena',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 639 20 15 17',
	latitude: 36.5927912,
	longitude: -4.5220363,
	placeId: '0xd72fc8a12f702b7:0x38588d8ff97b020c',
	site: 'https://bacchus-terrace.vercel.app',
	facebook: 'https://www.facebook.com/masifa10/',
} as const;

export const phoneHref = 'tel:+34639201517';
export const mapsUrl =
	"https://www.google.com/maps/place/Restaurante+Bacchus'+Terrace/@36.5927912,-4.5220363,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fc8a12f702b7:0x38588d8ff97b020c!8m2!3d36.5927912!4d-4.5220363!16s%2Fg%2F11cs4c6wjt";
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=en&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	alternateName: "Bacchus Terrace",
	description:
		"Intimate tapas bar and restaurant in Benalmádena with homemade Mediterranean and Italian-inspired food, cocktails and sea views.",
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Mediterranean', 'Italian', 'Tapas'],
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
	sameAs: [business.facebook],
};
