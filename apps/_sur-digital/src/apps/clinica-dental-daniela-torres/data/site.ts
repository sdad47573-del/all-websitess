export const BUSINESS = {
	name: 'Clínica Dental Dra. Daniela Torres Sánchez',
	description:
		'Clínica Dental Dra. Daniela Torres Sánchez en Avenida de Andalucía, 64, Cruz de Humilladero, Málaga. Consulta el teléfono, horario y ubicación.',
	street: 'Avenida de Andalucía, 64',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29007',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 33 47 56',
	phoneHref: 'tel:+34952334756',
	googleMaps:
		'https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Dra.+Daniela+Torres+S%C3%A1nchez/data=!4m7!3m6!1s0xd72f774112df1b9:0xd64c8f2703cbeedb!8m2!3d36.71626!4d-4.4430661!16s%2Fg%2F11f3xhzd_w!19sChIJufEtEXT3cg0R2-7LAyePTNY?hl=es',
	googleMapsEmbed:
		'https://www.google.com/maps?output=embed&q=Cl%C3%ADnica%20Dental%20Dra.%20Daniela%20Torres%20S%C3%A1nchez%2C%20Avenida%20de%20Andaluc%C3%ADa%2064%2C%20M%C3%A1laga&ll=36.71626%2C-4.4430661&z=17&hl=es',
	googlePhotos: 'https://www.google.com/maps?hl=es&query_place_id=ChIJufEtEXT3cg0R2-7LAyePTNY',
	geo: { lat: 36.71626, lng: -4.4430661 },
	siteUrl: 'https://clinica-dental-daniela-torres-malaga.vercel.app',
};

export const HOURS = [
	{ day: 'Lunes', time: '09:00–20:00' },
	{ day: 'Martes', time: '09:00–20:00' },
	{ day: 'Miércoles', time: '09:00–20:00' },
	{ day: 'Jueves', time: '09:00–20:00' },
	{ day: 'Viernes', time: '09:00–14:00' },
	{ day: 'Sábado', time: 'Cerrado' },
	{ day: 'Domingo', time: 'Cerrado' },
];

export const SERVICES = [
	{ title: 'Odontología general', icon: 'ri-health-book-line' },
	{ title: 'Odontología infantil', icon: 'ri-parent-line' },
	{ title: 'Implantología', icon: 'ri-surgical-mask-line' },
	{ title: 'Cirugía oral', icon: 'ri-first-aid-kit-line' },
	{ title: 'Estética dental', icon: 'ri-sparkling-2-line' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Dentist',
	'@id': `${BUSINESS.siteUrl}/#clinica`,
	name: BUSINESS.name,
	description: BUSINESS.description,
	url: BUSINESS.siteUrl,
	telephone: '+34 952 33 47 56',
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		addressRegion: BUSINESS.region,
		postalCode: BUSINESS.postalCode,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	openingHoursSpecification: [
		{ dayOfWeek: 'Monday', opens: '09:00', closes: '20:00' },
		{ dayOfWeek: 'Tuesday', opens: '09:00', closes: '20:00' },
		{ dayOfWeek: 'Wednesday', opens: '09:00', closes: '20:00' },
		{ dayOfWeek: 'Thursday', opens: '09:00', closes: '20:00' },
		{ dayOfWeek: 'Friday', opens: '09:00', closes: '14:00' },
	],
};
