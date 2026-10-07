export const business = {
	name: 'Carbikemoto',
	businessType: 'Taller de reparación de motos',
	streetAddress: 'Calle Antonio Raíz, 6',
	postalCode: '29010',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 952 30 99 54',
	latitude: 36.7243892,
	longitude: -4.4680198,
	site: 'https://carbikemotor.vercel.app',
} as const;

export const openingHours = {
	weekdays: '09:00–14:00 y 16:00–20:00',
	note: 'Horario orientativo; confirma por teléfono antes de acudir.',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Carbikemoto/@36.7243892,-4.4705947,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f739a3fab4b5:0xf0c8c1123e99cc96!8m2!3d36.7243892!4d-4.4680198!16s%2Fg%2F11c3tvrpvy?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34952309954';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'MotorcycleRepair',
	'@id': `${business.site}/#taller`,
	name: business.name,
	description: 'Taller de reparación de motos en Málaga.',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '20:00',
		},
	],
};
