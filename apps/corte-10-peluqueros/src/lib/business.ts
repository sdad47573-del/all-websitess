export const business = {
	name: 'Peluquería | Corte 10 Peluqueros',
	brand: 'Corte 10',
	streetAddress: 'Calle Ibrahin, 18',
	postalCode: '29010',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 687 65 19 12'],
	latitude: 36.7299865,
	longitude: -4.4414409,
	site: 'https://corte-10-peluqueros-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Peluquer%C3%ADa+%7C+Corte+10+Peluqueros/@36.7299865,-4.4414409,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDqprGRQA!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Q6Aw6o6cZ60K8cP1z1SElve4XNR3hp5BHn0uE2-ynZOY0Dg93nSpkXWteyoLrTyINGA78jVn9xcjsc63SV18WaJlW4ytkqQfl5wuzr-e3HIhV0F0zBe9aIxCoEc4APQLLjhM-0%3Dw411-h298-k-no!7i2608!8i1888!4m9!3m8!1s0xd7259b092eab1bf:0x332ba810990e2089!8m2!3d36.7299865!4d-4.4414409!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11h0_ddl40?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6Aw6o6cZ60K8cP1z1SElve4XNR3hp5BHn0uE2-ynZOY0Dg93nSpkXWteyoLrTyINGA78jVn9xcjsc63SV18WaJlW4ytkqQfl5wuzr-e3HIhV0F0zBe9aIxCoEc4APQLLjhM-0=w1200-h869-k-no';

export const phoneHrefs = ['tel:+34687651912'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#peluqueria`,
	name: business.name,
	alternateName: business.brand,
	description: 'Peluquería en Bailén-Miraflores, Málaga: corte, peinado, color y tratamientos.',
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
};
