export const BUSINESS = {
	name: 'Clínica Dental Manuel Carmona González',
	shortName: 'Clínica Dental Manuel Carmona González',
	description:
		'Clínica Dental Manuel Carmona González, consulta dental en C/ José Iturbi, 1, Málaga. Consulta el teléfono, el horario y cómo llegar desde Google Maps.',
	street: 'C/ José Iturbi, 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 61 35 44',
	phoneHref: 'tel:+34952613544',
	googleMaps:
		'https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Manuel+Carmona+Gonz%C3%A1lez/data=!4m7!3m6!1s0xd72f70be6a40263:0x83642a7f5c957c51!8m2!3d36.7256955!4d-4.4428856!16s%2Fg%2F1hc2jylnl!19sChIJYwKk5gv3cg0RUXyVXH8qZIM?hl=es',
	googleMapsEmbed:
		'https://www.google.com/maps?output=embed&q=Cl%C3%ADnica%20Dental%20Manuel%20Carmona%20Gonz%C3%A1lez%2C%20C%2F%20Jos%C3%A9%20Iturbi%2C%201%2C%20M%C3%A1laga&ll=36.7256955%2C-4.4428856&z=17&hl=es',
	googlePhotos: 'https://www.google.com/maps?hl=es&query_place_id=ChIJYwKk5gv3cg0RUXyVXH8qZIM',
	geo: { lat: 36.7256955, lng: -4.4428856 },
	siteUrl: 'https://clinica-dental-manuel-carmona-malaga.vercel.app',
};

export const HOURS = [
	{ day: 'Lunes', time: '09:00–14:00 · 15:30–19:00' },
	{ day: 'Martes', time: '09:00–14:00 · 15:30–19:00' },
	{ day: 'Miércoles', time: '08:00–15:30' },
	{ day: 'Jueves', time: '09:00–14:00 · 15:30–19:00' },
	{ day: 'Viernes', time: '08:00–13:00' },
	{ day: 'Sábado', time: 'Cerrado' },
	{ day: 'Domingo', time: 'Cerrado' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Dentist',
	'@id': `${BUSINESS.siteUrl}/#clinica`,
	name: BUSINESS.name,
	description: BUSINESS.description,
	url: BUSINESS.siteUrl,
	telephone: '+34 952 61 35 44',
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
		{ dayOfWeek: 'Monday', opens: '09:00', closes: '14:00' },
		{ dayOfWeek: 'Monday', opens: '15:30', closes: '19:00' },
		{ dayOfWeek: 'Tuesday', opens: '09:00', closes: '14:00' },
		{ dayOfWeek: 'Tuesday', opens: '15:30', closes: '19:00' },
		{ dayOfWeek: 'Wednesday', opens: '08:00', closes: '15:30' },
		{ dayOfWeek: 'Thursday', opens: '09:00', closes: '14:00' },
		{ dayOfWeek: 'Thursday', opens: '15:30', closes: '19:00' },
		{ dayOfWeek: 'Friday', opens: '08:00', closes: '13:00' },
	],
};
