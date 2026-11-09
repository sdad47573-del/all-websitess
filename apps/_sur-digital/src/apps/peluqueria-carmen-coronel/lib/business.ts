export const business = {
	name: 'Peluquería Carmen Coronel',
	streetAddress: 'Av. de Carlos Haya, 186, bloque 1, local 2',
	postalCode: '29010',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 637 51 12 64',
	latitude: 36.7244393,
	longitude: -4.4555305,
	site: 'https://www.sur-digital.com/peluqueria-carmen-coronel',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Peluquer%C3%ADa+Carmen+Coronel/@36.7244393,-4.4555305,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDAC_VhPX7PGFLz3T1lTa6K!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Rz-G20fJEYCBh6-YklNjb3flmqTjgLOGKX7h9H9gRR_8bgztyL0SbEv8PPu7MNX3QwJkQDcXCy82Qbu9FQt7p3LLD7Cd9nYDvKGq2H0K_ptj3wEU3FIWbABIvMcXy3tRtJ1u4dHXPwHWaT%3Dw230-h298-k-no!7i1220!8i1580!4m9!3m8!1s0xd72f71441005eb9:0x4a62b202e0d7bf69!8m2!3d36.7244393!4d-4.4555305!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1th0cszp?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rz-G20fJEYCBh6-YklNjb3flmqTjgLOGKX7h9H9gRR_8bgztyL0SbEv8PPu7MNX3QwJkQDcXCy82Qbu9FQt7p3LLD7Cd9nYDvKGq2H0K_ptj3wEU3FIWbABIvMcXy3tRtJ1u4dHXPwHWaT=w920-h1190-k-no';

export const phoneHref = 'tel:+34637511264';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#peluqueria`,
	name: business.name,
	description: 'Peluquería en avenida de Carlos Haya, Málaga.',
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
