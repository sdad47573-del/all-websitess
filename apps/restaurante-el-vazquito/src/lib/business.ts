export const business = {
	name: 'Restaurante El Vazquito',
	shortName: 'El Vazquito',
	legalName: 'Restaurante El Vazquito',
	tagline: 'Cocina casera y terraza en Chipiona',
	street: 'Pago Copina, Carr. Pista de Montijo',
	city: 'Chipiona',
	province: 'Cádiz',
	postalCode: '11550',
	phone: '685 71 05 17',
	phoneHref: 'tel:+34685710517',
	latitude: 36.7551097,
	longitude: -6.4030691,
	site: 'https://restaurante-el-vazquito.vercel.app',
	rating: 4.1,
	reviews: 703,
	priceRange: '10–20 €',
	opens: '11:30',
	closes: '17:00',
};

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Vazquito/@36.7551097,-6.4030691,17z/data=!3m1!4b1!4m6!3m5!1s0xd0ddf8bef34c6d5:0xe5c63b31838d88cc!8m2!3d36.7551097!4d-6.4030691!16s%2Fg%2F11btxcj09w?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const phoneHref = business.phoneHref;

/**
 * Horario de la ficha de Google: cocina de 11:30 a 17:00 de lunes a domingo
 * (jueves cerrado) y desayunos solo el fin de semana, de 9:00 a 12:00.
 */
export const schedule = [
	{ day: 'Lunes', hours: '11:30 – 17:00' },
	{ day: 'Martes', hours: '11:30 – 17:00' },
	{ day: 'Miércoles', hours: '11:30 – 17:00' },
	{ day: 'Jueves', hours: 'Cerrado' },
	{ day: 'Viernes', hours: '11:30 – 17:00' },
	{ day: 'Sábado', hours: '9:00 – 17:00' },
	{ day: 'Domingo', hours: '9:00 – 17:00' },
];

export const description =
	'Restaurante El Vazquito, en Pago Copina (Chipiona): tapas, arroces, carnes y pescados a la brasa, terraza y desayunos de fin de semana. Tel. 685 71 05 17.';

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description,
	url: `${business.site}/`,
	telephone: '+34 685 71 05 17',
	image: [`${business.site}/og.jpg`],
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, Tarjeta',
	servesCuisine: ['Mediterránea', 'Andaluza', 'Chipiona'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.street,
		addressLocality: business.city,
		addressRegion: business.province,
		postalCode: business.postalCode,
		addressCountry: 'ES',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	acceptsReservations: 'True',
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviews,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
			opens: '11:30',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday', 'Sunday'],
			opens: '09:00',
			closes: '17:00',
		},
	],
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aparcamiento', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Acceso adaptado', value: true },
	],
};
