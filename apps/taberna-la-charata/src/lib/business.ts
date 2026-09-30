export const business = {
	name: 'Taberna La Charata',
	streetAddress: 'Calle Córdoba, Local 2',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	latitude: 36.7155529,
	longitude: -4.2850114,
	site: 'https://taberna-la-charata-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
// Tampoco hay teléfono público verificado (los directorios lo ocultan), así que se omite.
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+La+Charata/@36.7155529,-4.2850114,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b55eea3a345:0xb1da2e444feceb2e!8m2!3d36.7155529!4d-4.2850114!16s%2Fg%2F11h_6x7wsr?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/tabernalacharata_/';

// Platos más mencionados en las reseñas públicas de la ficha.
export const specialties = [
	{ name: 'Atún en manteca', note: 'El plato emblema de la casa.' },
	{ name: 'Pulpo a la charata', note: 'El guiño que da nombre al local.' },
	{ name: 'Ensaladilla rusa', note: 'De las que saben a infancia.' },
	{ name: 'Croquetas caseras', note: 'Hechas en casa, muy cremosas.' },
	{ name: 'Callos', note: 'Cocina de cuchara de siempre.' },
	{ name: 'Flores de alcachofa', note: 'Confitadas, con huevo de codorniz.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#taberna`,
	name: business.name,
	description: 'Taberna de cocina casera y tapas en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	servesCuisine: ['Española', 'Mediterránea', 'Tapas'],
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
