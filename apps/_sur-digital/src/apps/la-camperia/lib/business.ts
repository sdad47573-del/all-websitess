export const business = {
	name: 'La Campería',
	streetAddress: 'Calle Andrómeda, 15',
	district: 'Teatinos-Universidad',
	postalCode: '29010',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	latitude: 36.7229261,
	longitude: -4.4771974,
	site: 'https://la-camperia-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/La+Camperia/data=!4m7!3m6!1s0xd72f7004da0dd97:0x1bc2f2f2309b694e!8m2!3d36.7229261!4d-4.4771974!16s%2Fg%2F11nh_v532q?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

// Teléfono publicado en la ficha del local y en directorios locales
// (Quiero un Campero, Yandex Maps). Conviene confirmarlo antes de difundir.
export const phoneDisplay = '+34 952 52 77 84';
export const phoneHrefs = ['+34952527784'] as const;

// El campero es el bocadillo clásico de Málaga. Estas son las piezas más
// habituales del campero tradicional; cada bar tiene su receta y su aliño.
export const camperoBase = [
	{ name: 'Pan de campero', note: 'Barra crujiente, del tamaño de una comida entera.' },
	{ name: 'Lomo adobado', note: 'La base clásica, hecha a la plancha.' },
	{ name: 'Huevo', note: 'A la plancha, con la yema jugosa.' },
	{ name: 'Patatas fritas', note: 'Dentro del bocadillo, no al lado.' },
	{ name: 'Pimiento verde', note: 'Frito en tiras, muy malagueño.' },
	{ name: 'Aliño de la casa', note: 'Aceite, vinagre y especias. El secreto de cada bar.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#camperia`,
	name: business.name,
	description:
		'Bar de camperos malagueños en Calle Andrómeda, 15, Teatinos-Universidad (Málaga). Camperos, barra de bar y terraza en el barrio universitario.',
	url: `${business.site}/`,
	telephone: phoneDisplay,
	servesCuisine: ['Camperos malagueños', 'Bocadillos', 'Bar'],
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
