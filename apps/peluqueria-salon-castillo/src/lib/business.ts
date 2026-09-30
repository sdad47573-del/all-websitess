export const business = {
	name: 'Peluquería Salón Castillo',
	city: 'Málaga',
	country: 'ES',
	latitude: 36.7229506,
	longitude: -4.4528071,
	site: 'https://peluqueria-salon-castillo.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Peluquer%C3%ADa+Sal%C3%B3n+Castillo/@36.7229506,-4.4528071,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDchaCmkgE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TjqvpePqsHxl60m0TzvuVwTssEx3Q_WHWImkCbtdxPb-Nd7nl5hd8bCOjER_szalyjuSEYmrKEAW5UnNw--smHbir4olb69_O5rLk4Pjt9JL5UyW0hEFNY-L5YHVk104Heg3--9g%3Dw529-h298-k-no!7i4032!8i2268!4m9!3m8!1s0xd72f7130ae6de53:0x8281450bc293e97d!8m2!3d36.7229506!4d-4.4528071!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tdx0xdd?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TjqvpePqsHxl60m0TzvuVwTssEx3Q_WHWImkCbtdxPb-Nd7nl5hd8bCOjER_szalyjuSEYmrKEAW5UnNw--smHbir4olb69_O5rLk4Pjt9JL5UyW0hEFNY-L5YHVk104Heg3--9g=w1200-h675-k-no';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	description: 'Peluquería en Málaga.',
	url: `${business.site}/`,
	image: photoUrl,
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
};
