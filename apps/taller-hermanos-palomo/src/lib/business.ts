export const business = {
	name: 'Taller mecánica Hermanos Palomo',
	streetAddress: 'C/ Padre Martín, 23',
	postalCode: '29010',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 951 25 16 47',
	latitude: 36.7290797,
	longitude: -4.4507428,
	site: 'https://taller-hermanos-palomo.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Taller+mec%C3%A1nica+hermanos+palomo/@36.7290797,-4.4507428,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7104ed46041:0x3a3c450f89997741!8m2!3d36.7290797!4d-4.4507428!16s%2Fg%2F11c6twts1x?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34951251647';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'AutoRepair',
	'@id': `${business.site}/#taller`,
	name: business.name,
	description: 'Taller mecánico en Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
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
