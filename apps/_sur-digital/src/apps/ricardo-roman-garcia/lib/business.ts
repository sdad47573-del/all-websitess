export const business = {
	name: 'Ricardo Román García',
	businessType: 'Taller mecánico',
	streetAddress: 'Calle Los Millones, 7',
	postalCode: '29010',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 952 30 65 35',
	latitude: 36.7246234,
	longitude: -4.4445532,
	site: 'https://www.sur-digital.com/ricardo-roman-garcia',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Ricardo+Rom%C3%A1n+Garc%C3%ADa/@36.7246968,-4.4445418,15z/data=!4m17!1m10!3m9!1s0xd72f70c0ec69e45:0x4755637a41ceef52!2sRicardo+Rom%C3%A1n+Garc%C3%ADa!8m2!3d36.7246234!4d-4.4445532!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1w0r17wy!3m5!1s0xd72f70c0ec69e45:0x4755637a41ceef52!8m2!3d36.7246234!4d-4.4445532!16s%2Fg%2F1w0r17wy?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34952306535';
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
