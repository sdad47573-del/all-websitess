export const business = {
	name: 'El Pollito Lio',
	streetAddress: 'Avenida del Mediterráneo, 16',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	latitude: 36.7158711,
	longitude: -4.2902975,
	site: 'https://el-pollito-lio-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar: no incluía ninguna
// foto (!6shttps://lh3.googleusercontent.com/...), así que el sitio no hotlinkea imagen.
export const mapsUrl =
	'https://www.google.com/maps/place/El+Pollito+Lio/@36.7158711,-4.2902975,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b4a24ee54d7:0x31af32f9b8d83835!8m2!3d36.7158711!4d-4.2902975!16s%2Fg%2F11w7lm5z8c?authuser=0&hl=es&entry=ttu';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/elpollitolio_rincon/';

// Teléfono publicado por el propio local en su Instagram (☎️ 605 91 98 12) y
// repetido en directorios locales. Es también su número de WhatsApp para pedidos.
export const phoneDisplay = '+34 605 91 98 12';
export const phoneHrefs = ['+34605919812'] as const;
export const whatsappUrl = `https://wa.me/${phoneHrefs[0].replace('+', '')}`;

// Platos más mencionados en reseñas y publicaciones públicas del local.
export const specialties = [
	{ name: 'Milanesa napolitana', note: 'Jamón, queso y salsa de tomate.' },
	{ name: 'Milanesa americana', note: 'Con huevo frito y patatas.' },
	{ name: 'Fugazzetta rellena', note: 'Muzzarella y cebolla caramelizada.' },
	{ name: 'Empanadas argentinas', note: 'De ternera, pollo, jamón y queso.' },
	{ name: 'Pollo asado al espiedo', note: 'Con patatas fritas caseras.' },
	{ name: 'Sándwich de milanesa', note: 'Para llevar a la playa.' },
	{ name: 'Tequeños de queso', note: 'Crujientes, recién fritos.' },
	{ name: 'Patatas bravas', note: 'Con salsa de la casa.' },
] as const;

// Zonas de reparto anunciadas por el propio local.
export const deliveryAreas = ['Rincón de la Victoria', 'Torre de Benagalbón', 'La Cala del Moral'] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#pollito`,
	name: business.name,
	description:
		'Asador y cocina argentina en Rincón de la Victoria: milanesas, empanadas caseras y pollo asado al espiedo. Take away y servicio a domicilio.',
	url: `${business.site}/`,
	telephone: phoneDisplay,
	servesCuisine: ['Argentina', 'Pollo asado', 'Comida para llevar'],
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
	areaServed: deliveryAreas.map((name) => ({ '@type': 'City', name })),
	sameAs: [instagramUrl],
};
