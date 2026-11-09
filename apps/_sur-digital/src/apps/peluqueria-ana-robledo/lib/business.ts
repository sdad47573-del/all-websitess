export const business = {
	name: 'Peluquería Ana Robledo. Estilismo',
	brand: 'Ana Robledo',
	streetAddress: 'Avenida de Carlos Haya, 192',
	postalCode: '29010',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 675 20 38 84'],
	latitude: 36.7248447,
	longitude: -4.4566318,
	site: 'https://peluqueria-ana-robledo-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Peluqueria+Ana+Robledo.+Estilismo/@36.7248447,-4.4566318,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDU-MXV4gE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9T0t087d2t7pmy_UzPR7NBhwVmxfIjoxi7VAwGkJhlQ-cAxwA7y3qcgN5wSNnf7hK61sQJOuWIMN7qaz24H6UhVJUv9hpEqtRi15kbrzyCk3iNDjXAIBYiCNA20Sg1wqV45mtK0%3Dw224-h298-k-no!7i1200!8i1600!4m9!3m8!1s0xd72f715d1af6877:0xca6494c4ba34dc1!8m2!3d36.7248447!4d-4.4566318!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11bxdp1pnn?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0t087d2t7pmy_UzPR7NBhwVmxfIjoxi7VAwGkJhlQ-cAxwA7y3qcgN5wSNnf7hK61sQJOuWIMN7qaz24H6UhVJUv9hpEqtRi15kbrzyCk3iNDjXAIBYiCNA20Sg1wqV45mtK0=w900-h1200-k-no';

export const phoneHrefs = ['tel:+34675203884'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#peluqueria`,
	name: business.name,
	alternateName: business.brand,
	description: 'Peluquería y estilismo en Bailén-Miraflores, Málaga: corte, color, mechas y extensiones de cabello.',
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
