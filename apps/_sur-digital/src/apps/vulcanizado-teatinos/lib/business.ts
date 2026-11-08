export const business = {
	name: 'Vulcanizado Teatinos',
	streetAddress: 'Av. de Carlos Haya, 169',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 646 65 48 37',
	latitude: 36.7256508,
	longitude: -4.4601228,
	site: 'https://www.sur-digital.com/vulcanizado-teatinos',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Vulcanizado+Teatinos/@36.7256508,-4.4601228,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID7hK7_Zw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWkMRE3oeYBH8DtVSMrp4i55cFrr4RLB6ikG-yRkdaSJHKFU6dq4NW6vNuqD_WBNrKn6GzSUbkUIe3Bnqa5bqVZHEw912KDdV9yE3SXWjeMhLfKvXqSkrrrDaPnbCuzubH8zCsO7%3Dw397-h298-k-no!7i4080!8i3060!4m9!3m8!1s0xd72f73dfd379861:0xab0c82e606d19a42!8m2!3d36.7256508!4d-4.4601228!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11g0ftb9mp?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMRE3oeYBH8DtVSMrp4i55cFrr4RLB6ikG-yRkdaSJHKFU6dq4NW6vNuqD_WBNrKn6GzSUbkUIe3Bnqa5bqVZHEw912KDdV9yE3SXWjeMhLfKvXqSkrrrDaPnbCuzubH8zCsO7=w1200-h900-k-no';

export const phoneHref = 'tel:+34646654837';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'AutoRepair',
	'@id': `${business.site}/#vulcanizado`,
	name: business.name,
	description: 'Taller de automoción en Teatinos, Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.region,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	image: photoUrl,
};
