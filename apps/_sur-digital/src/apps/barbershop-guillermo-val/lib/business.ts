export const business = {
	name: 'Barbershop Guillermo Val',
	streetAddress: 'C. Castilla, 19',
	postalCode: '29007',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 600 24 13 83',
	latitude: 36.7211362,
	longitude: -4.4537981,
	/** Valoración de la ficha de Google Maps (4,9 sobre 5 con 268 reseñas, 16 oct 2026). */
	rating: 4.9,
	reviewCount: 268,
	site: 'https://www.sur-digital.com/barbershop-guillermo-val',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Barbershop+Guillermo+Val/@36.7211362,-4.4537981,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICewa-4Bg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QMoQ8tfXiW1UnZ_rjSA3X5gpK003dFA08U8nEXHu8x0se0mzsmqtqv77cIgZ8_TXKKEBeBE0tky7R16utxE-W-6n5bRbbIL92XNGHlEoWJuRi63zvX_LqMna0Fma_z5_iEDZnS%3Dw397-h298-k-no!7i3968!8i2976!4m9!3m8!1s0xd72f71a2730bbcd:0xf23b304a1084b617!8m2!3d36.7211362!4d-4.4537981!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11t8641y8_?authuser=0&hl=es&entry=ttu';

export const phoneHref = 'tel:+34600241383';

/**
 * Horario semanal publicado en la ficha (16 oct 2026): de lunes a viernes de 10:00 a 20:00;
 * sábado y domingo cerrado. Puede cambiar: ante la duda, llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes a viernes', hours: '10:00–20:00' },
	{ days: 'Sábado y domingo', hours: 'Cerrado' },
] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${business.site}/#barbershop`,
	name: business.name,
	description: 'Barbería en Málaga.',
	url: `${business.site}/`,
	telephone: business.phone,
	image: `${business.site}/og.jpg`,
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '20:00',
		},
	],
};
