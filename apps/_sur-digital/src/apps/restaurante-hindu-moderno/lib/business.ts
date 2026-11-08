export const business = {
	name: 'Restaurante Hindú Moderno',
	streetAddress: 'Plaza Nuestra Señora de la Victoria',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 608 13 88 74'],
	latitude: 36.71618,
	longitude: -4.2895898,
	site: 'https://www.sur-digital.com/restaurante-hindu-moderno',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/RESTAURANTE+HIND%C3%9A+MODERNO/data=!4m7!3m6!1s0xd725bf111d4e6d1:0x58f1c990f47d9f48!8m2!3d36.71618!4d-4.2895898!16s%2Fg%2F11zglwrkgw!19sChIJ0ebUEfFbcg0RSJ999JDJ8Vg?authuser=0&hl=es';

export const phoneHrefs = ['tel:+34608138874'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

// Platos más mencionados en las reseñas públicas de la ficha.
export const specialties = [
	'Chicken Tikka Masala',
	'Cordero Rogan Josh',
	'Biryani de pollo',
	'Malai Kofta',
	'Naan recién hecho',
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description: 'Restaurante de cocina india e hindú casera en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	servesCuisine: ['India', 'Asiática'],
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
