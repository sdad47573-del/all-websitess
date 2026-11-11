import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const business = {
	name: 'Gym Krono',
	brand: 'Krono',
	streetAddress: 'Calle Juan Margarit, 4',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 952 27 20 19'],
	email: 'gymk03@gmail.com',
	latitude: 36.7241799,
	longitude: -4.4688237,
	site: 'https://gym-krono-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/GYM+KRONO/@36.7241799,-4.4688237,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73994abf8f5:0x7b3e668d6ed9bd73!8m2!3d36.7241799!4d-4.4688237!16s%2Fg%2F11bxfk1d1l?authuser=0&hl=es&entry=ttu';

export const ogImage = `${business.site}/og.png`;

export const phoneHrefs = ['tel:+34952272019'] as const;
export const emailHref = `mailto:${business.email}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/gymkronok03/';
export const facebookUrl = 'https://www.facebook.com/p/Gym-Krono-100063526751564/';

/** Foto principal del hero: rack de mancuernas y bancos de la sala. */
export const heroPhoto = foto('gym-krono-apaisada-10.jpg');

export const galleryPhotos = [
	{ src: foto('gym-krono-vertical-01.jpg'), alt: 'Sala de entrenamiento de Gym Krono con máquinas y bancos' },
	{ src: foto('gym-krono-apaisada-10.jpg'), alt: 'Rack de mancuernas y bancos de Gym Krono en Teatinos' },
	{ src: foto('gym-krono-vertical-06.jpg'), alt: 'Máquina de poleas de Gym Krono en Calle Juan Margarit, Málaga' },
	{ src: foto('gym-krono-vertical-07.jpg'), alt: 'Prensa de piernas y máquinas junto a la ventana de Gym Krono' },
	{ src: foto('gym-krono-vertical-08.jpg'), alt: 'Máquinas de polea y musculación en la sala de Gym Krono' },
	{ src: foto('gym-krono-vertical-09.jpg'), alt: 'Zona de cardio con cintas y máquinas al fondo en Gym Krono' },
	{ src: foto('gym-krono-vertical-04.jpg'), alt: 'Cinta de correr en la zona de cardio de Gym Krono' },
	{ src: foto('gym-krono-apaisada-02.jpg'), alt: 'Entrada de Gym Krono en Calle Juan Margarit, 4, Teatinos' },
] as const;

export const services = [
	{ name: 'Sala de musculación', detail: 'Peso libre, poleas y máquinas para cada grupo muscular.' },
	{ name: 'Cardio', detail: 'Cintas, bicicletas y elípticas para calentar y quemar.' },
	{ name: 'Asesoramiento de monitores', detail: 'Rutinas y correcciones de técnica durante el entrenamiento.' },
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ExerciseGym',
	'@id': `${business.site}/#gimnasio`,
	name: business.name,
	alternateName: business.brand,
	description: 'Gimnasio en Teatinos, Málaga: sala de musculación, cardio y asesoramiento de monitores.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	email: business.email,
	image: ogImage,
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
	sameAs: [instagramUrl, facebookUrl],
};
