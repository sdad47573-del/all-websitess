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
	site: 'https://barbershop-guillermo-val.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Barbershop+Guillermo+Val/@36.7211362,-4.4537981,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICewa-4Bg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QMoQ8tfXiW1UnZ_rjSA3X5gpK003dFA08U8nEXHu8x0se0mzsmqtqv77cIgZ8_TXKKEBeBE0tky7R16utxE-W-6n5bRbbIL92XNGHlEoWJuRi63zvX_LqMna0Fma_z5_iEDZnS%3Dw397-h298-k-no!7i3968!8i2976!4m9!3m8!1s0xd72f71a2730bbcd:0xf23b304a1084b617!8m2!3d36.7211362!4d-4.4537981!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11t8641y8_?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMoQ8tfXiW1UnZ_rjSA3X5gpK003dFA08U8nEXHu8x0se0mzsmqtqv77cIgZ8_TXKKEBeBE0tky7R16utxE-W-6n5bRbbIL92XNGHlEoWJuRi63zvX_LqMna0Fma_z5_iEDZnS=w1200-h900-k-no';

export const phoneHref = 'tel:+34600241383';
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
};
