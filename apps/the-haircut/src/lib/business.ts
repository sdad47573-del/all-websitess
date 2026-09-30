export const business = {
	name: 'The Haircut',
	brandName: 'The Haircut & Sunbody',
	streetAddress: 'Calle Flaubert, 3',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 951 40 59 60',
	latitude: 36.7238757,
	longitude: -4.4618764,
	site: 'https://the-haircut-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/The+Haircut/@36.7238757,-4.4618764,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDxGnMZ-9hRXGahKPni7ODJ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9SVpjL1z-4jZCOrQfZtc4ho2I2XA_lRxvT7zN2XIjDIJHn0nV1l5f18PhmE3_AF2_m_P21uldK1Z0yfdN_j5t_06SMW3_98Izkw_-a7smHmZwhlLolS4TRX27DAD8Btrnf225Ci_jbgx1w7%3Dw300-h298-k-no!7i1290!8i1278!4m9!3m8!1s0xd72f73e5f16aa83:0xdee0796f6180324f!8m2!3d36.7238757!4d-4.4618764!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11clszgbg6?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SVpjL1z-4jZCOrQfZtc4ho2I2XA_lRxvT7zN2XIjDIJHn0nV1l5f18PhmE3_AF2_m_P21uldK1Z0yfdN_j5t_06SMW3_98Izkw_-a7smHmZwhlLolS4TRX27DAD8Btrnf225Ci_jbgx1w7=w1200-h1192-k-no';

export const phoneHref = 'tel:+34951405960';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/thehaircut.sunbody/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	alternateName: business.brandName,
	description: 'Peluquería y barbería en Teatinos, Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
	image: photoUrl,
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
	sameAs: [instagramUrl],
};
