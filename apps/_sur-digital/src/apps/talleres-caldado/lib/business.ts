export const business = {
	name: 'Talleres Caldado',
	streetAddress: 'Avda. Carlos Haya, 163',
	postalCode: '29010',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 952 30 68 10',
	email: 'tallerescaldado@eurotaller.com',
	latitude: 36.7250617,
	longitude: -4.4583111,
	site: 'https://www.sur-digital.com/talleres-caldado',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Talleres+Caldado/@36.7250617,-4.4583111,3a,75y/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDuhqiexwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Rzv6PIZsCxXo52srCEUjHh4PummXh-ibQWwZFy12GQggm-7TOqhlEgPanE4tUlMq29ylPWFnez9qfkHUDArZDr-ArqUEHXmqdjkRHU62k2-O00HdxZaqG99om1JBLiMGNK1PYwuA%3Dw529-h298-k-no!7i1920!8i1080!4m9!3m8!1s0xd72f715e314789b:0x6d1710c0079c24!8m2!3d36.7250617!4d-4.4583111!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tqtz6x_?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34952306810';
export const emailHref = `mailto:${business.email}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'AutoRepair',
	'@id': `${business.site}/#taller`,
	name: business.name,
	description: 'Taller de reparación de automóviles en Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
	email: business.email,
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
