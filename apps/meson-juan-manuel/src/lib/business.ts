export const business = {
	name: 'Restaurante Mesón Juan Manuel',
	streetAddress: 'Calle San Agustín, 1, Local 2',
	postalCode: '29200',
	city: 'Antequera',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	latitude: 37.0171681,
	longitude: -4.5605175,
	site: 'https://meson-juan-manuel-antequera.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mes%C3%B3n+Juan+Manuel/@37.0171681,-4.5605175,17z/data=!3m1!4b1!4m6!3m5!1s0xd728fe077a65041:0x1285990c2bb07d4!8m2!3d37.0171681!4d-4.5605175!16s%2Fg%2F11cs2hfdwc?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

// Teléfonos publicados por el propio mesón en la guía de comercios de El Sol de Antequera.
export const phoneDisplay = '+34 952 84 34 84';
export const phoneMobileDisplay = '+34 653 08 30 09';
export const phoneHrefs = ['+34952843484', '+34653083009'] as const;
export const email = 'mesonjuanmanuel@hotmail.es';

// Platos documentados en la guía de turismo de Antequera y en la entrevista
// a Juan Manuel Pérez (El Sol de Antequera). No se incluyen precios.
export const specialties = [
	{ name: 'Porra antequerana', note: 'El clásico de Antequera, con su pan y su aceite.' },
	{ name: 'Pío antequerano', note: 'Ensalada de naranja y bacalao con cebolleta.' },
	{ name: 'Ensaladilla de pescada', note: 'Especialidad de la casa, con gambas y pescada.' },
	{ name: 'Gazpacho', note: 'Fresco, de temporada, para el calor antequerano.' },
	{ name: 'Ajoblanco', note: 'El otro imprescindible del verano andaluz.' },
	{ name: 'Menú del día', note: 'Cocina de la comarca, de cuchara y de siempre.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#meson`,
	name: business.name,
	description:
		'Mesón de cocina andaluza tradicional en Calle San Agustín, 1, Antequera (Málaga). Porra antequerana, pío antequerano y ensaladilla de pescada, con terraza de patio andaluz.',
	url: `${business.site}/`,
	telephone: phoneDisplay,
	email,
	servesCuisine: ['Andaluza', 'Española', 'Tradicional'],
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
