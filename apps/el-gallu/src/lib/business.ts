export const business = {
	name: 'El Gallu',
	streetAddress: 'Calle Jaén, 11',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 618 79 29 62'],
	latitude: 36.7164174,
	longitude: -4.2844113,
	site: 'https://el-gallu-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/El+Gallu/@36.7164174,-4.2844113,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b002ca15679:0xb85fef418669b6df!8m2!3d36.7164174!4d-4.2844113!16s%2Fg%2F11njz933f6?authuser=0&hl=es&entry=ttu';

export const phoneHrefs = ['tel:+34618792962'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

// Platos más mencionados en las reseñas públicas de la ficha.
export const specialties = [
	{ name: 'Gildas', note: 'De tamaño XL, para abrir boca.' },
	{ name: 'Cachopo', note: 'Generoso, ideal para compartir.' },
	{ name: 'Croquetas caseras', note: 'Cremosas, hechas en casa.' },
	{ name: 'Solomillo al Cabrales', note: 'Con salsa de queso asturiano.' },
	{ name: 'Arroz con leche', note: 'El postre más celebrado.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description: 'Restaurante de cocina asturiana y sidrería en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	servesCuisine: ['Asturiana', 'Española'],
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
