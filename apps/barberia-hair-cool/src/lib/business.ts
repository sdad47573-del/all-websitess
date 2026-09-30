export const business = {
	name: 'Barbería Hair Cool',
	alternateName: 'Hair Cool Teatinos',
	streetAddress: 'Avenida Jorge Luis Borges, 19',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 685 57 22 56'],
	latitude: 36.719796,
	longitude: -4.4629249,
	site: 'https://barberia-hair-cool-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Barber%C3%ADa+Hair+Cool/@36.719796,-4.4629249,3a,75y/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDa1Kzp5QE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9S3rnlvnrnHMuRqQ6THT3CR7g8pzeUTKKqF1bL5Lt0lvURqMbPjZR086R9XDAgfBsYiRMM1St_YX015BXclCIZhfFsrWJ8Dc6sdh4uH6GLgFC1D30M6Ef51YDrqotplb1ajO2nH%3Dw224-h298-k-no!7i2448!8i3264!4m9!3m8!1s0xd72f74090edf191:0x2bc6bd6425ea3593!8m2!3d36.719796!4d-4.4629249!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11gfmj1sck?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S3rnlvnrnHMuRqQ6THT3CR7g8pzeUTKKqF1bL5Lt0lvURqMbPjZR086R9XDAgfBsYiRMM1St_YX015BXclCIZhfFsrWJ8Dc6sdh4uH6GLgFC1D30M6Ef51YDrqotplb1ajO2nH=w900-h1200-k-no';

export const phoneHrefs = ['tel:+34685572256'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/haircoolteatinos/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${business.site}/#barberia`,
	name: business.name,
	alternateName: business.alternateName,
	description: 'Barbería en Teatinos, Málaga: cortes modernos y clásicos, degradados, arreglo de barba y perfilado de cejas.',
	url: `${business.site}/`,
	telephone: business.phones[0],
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
