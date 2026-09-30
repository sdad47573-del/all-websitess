export const business = {
	name: 'Taller Finca la Palma',
	streetAddress: 'Calle Francisco Barbin, 11',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 952 28 55 40',
	whatsappPhone: '+34 647 00 45 77',
	email: 'tallerfincalapalma@hotmail.es',
	latitude: 36.7212802,
	longitude: -4.4726736,
	site: 'https://taller-finca-la-palma.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Taller+Finca+la+Palma/@36.7212802,-4.4726736,17z/data=!4m17!1m10!3m9!1s0xd72f7364efc2d7b:0x5f87e6c291ce5e38!2sTaller+Finca+la+Palma!8m2!3d36.7212802!4d-4.4726736!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1218lbth!3m5!1s0xd72f7364efc2d7b:0x5f87e6c291ce5e38!8m2!3d36.7212802!4d-4.4726736!16s%2Fg%2F1218lbth?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34952285540';
export const whatsappUrl = 'https://wa.me/34647004577';
export const emailHref = `mailto:${business.email}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/talleresfincalapalma/';

export const services = [
	{ title: 'Chapa y pintura', detail: 'Reparación de carrocería y trabajos de pintura para vehículos.' },
	{ title: 'Mecánica', detail: 'Servicios mecánicos para el mantenimiento y reparación del automóvil.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'AutoRepair',
	'@id': `${business.site}/#taller`,
	name: business.name,
	description: 'Taller de automóviles en Teatinos, Málaga, con servicios de mecánica, chapa y pintura.',
	url: `${business.site}/`,
	telephone: business.phone,
	email: business.email,
	image: mapsUrl,
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
