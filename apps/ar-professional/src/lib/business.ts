export const business = {
	name: 'AR Professional',
	streetAddress: 'Carril del Capitán, 3',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 952 62 95 78', '+34 626 02 84 12'],
	latitude: 36.725138,
	longitude: -4.461815,
	site: 'https://ar-professional-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/AR+Professional/@36.725138,-4.461815,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID8osfvugE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnlqXaitKx0LyYPYa7xIO3oxnc80gYYWqPxlpCJF3u8VUsfPDR8P0L-SExzzOBDyQCzR4KdfynMn7ZFg5IYsRNPC5Kd5aapc0bsx-fk4IDcIChX6c6Ns9QCijdNIwIy0YwgyNXH%3Dw224-h298-k-no!7i2448!8i3264!4m9!3m8!1s0xd72f73e7e812b7f:0xc4b62403015ac68b!8m2!3d36.725138!4d-4.461815!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11xs0bxzq?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlqXaitKx0LyYPYa7xIO3oxnc80gYYWqPxlpCJF3u8VUsfPDR8P0L-SExzzOBDyQCzR4KdfynMn7ZFg5IYsRNPC5Kd5aapc0bsx-fk4IDcIChX6c6Ns9QCijdNIwIy0YwgyNXH=w900-h1200-k-no';

export const phoneHrefs = ['tel:+34952629578', 'tel:+34626028412'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/peluqueriaarprofessional/';
export const facebookUrl = 'https://www.facebook.com/peluqueriaarprofessional/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	description: 'Peluquería y belleza unisex en Teatinos, Málaga.',
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
	sameAs: [instagramUrl, facebookUrl],
};
