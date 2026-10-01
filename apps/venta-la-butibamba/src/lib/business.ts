export const business = {
	name: 'Venta Restaurante La Butibamba',
	shortName: 'Venta La Butibamba',
	streetAddress: 'Carretera de Cádiz, km 201 (acceso por gasolinera BP)',
	postalCode: '29649',
	district: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 49 21 33',
	alternatePhone: '+34 653 91 25 81',
	latitude: 36.5016937,
	longitude: -4.6847124,
	placeId: '0xd731e291c0daa61:0xb669920ad764b6d8',
	site: 'https://venta-la-butibamba.vercel.app',
	facebook: 'https://www.facebook.com/venta.labutibamba/',
} as const;

export const phoneHref = 'tel:+34952492133';
export const mapsUrl =
	'https://www.google.com/maps/place/Venta+Restaurante+La+Butibamba/@36.5016937,-4.6847124,17z/data=!3m1!4b1!4m6!3m5!1s0xd731e291c0daa61:0xb669920ad764b6d8!8m2!3d36.5016937!4d-4.6847124!16s%2Fg%2F1tpf8g_h';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurant`,
	name: business.name,
	alternateName: 'Venta La Butibamba',
	description:
		'Venta familiar de cocina tradicional española en La Cala de Mijas, conocida por su bocadillo de lomo en manteca y sus platos caseros.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Spanish', 'Mediterranean', 'Andalusian'],
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
