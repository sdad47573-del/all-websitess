export const business = {
	name: 'Venta "El Tío Malo"',
	shortName: 'El Tío Malo',
	legalName: 'Bar Venta el Tío Malo',
	tagline: 'Tradición desde 1961',
	street: 'Av. de la Ctra. Puerto de Santa María, 30',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	postalCode: '11540',
	phone: '619 92 56 27',
	phoneHref: 'tel:+34619925627',
	latitude: 36.7635096,
	longitude: -6.3460637,
	site: 'https://www.sur-digital.com/venta-el-tio-malo',
	rating: 4.3,
	reviews: 427,
	founded: 1961,
	opens: '05:30',
	closes: '01:00',
};

export const mapsUrl =
	'https://www.google.com/maps/place/Venta+%22El+T%C3%ADo+Malo%22/@36.7635096,-6.3460637,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde4078f393eb:0xde1a7edb68ae3219!8m2!3d36.7635096!4d-6.3460637!16s%2Fg%2F11c2pmxl0j?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const phoneHref = business.phoneHref;

export const description =
	'Venta El Tío Malo, Sanlúcar de Barrameda: cocina tradicional desde 1961. Desayunos, tapas, fritura y guisos. Abierto cada día de 5:30 a 1:00. Tel. 619 92 56 27.';

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: business.legalName,
	description,
	url: `${business.site}/`,
	telephone: '+34 619 92 56 27',
	image: [`${business.site}/og.jpg`],
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, Tarjeta',
	servesCuisine: ['Española', 'Andaluza', 'Gaditana'],
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
	foundingDate: String(business.founded),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: business.opens,
			closes: business.closes,
		},
	],
};
