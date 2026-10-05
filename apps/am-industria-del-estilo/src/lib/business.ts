import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
	eager: true,
});
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const business = {
	name: 'AM Industria del Estilo',
	streetAddress: 'Avenida de Gregorio Prieto, 3, Portal 5, Local 11',
	postalCode: '29010',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 744 61 08 81'],
	email: 'industriadelestiloam@gmail.com',
	latitude: 36.7191462,
	longitude: -4.4634219,
	site: 'https://am-industria-del-estilo-malaga.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/AM+Industria+del+estilo.+Peluquer%C3%ADa+Teatinos+M%C3%A1laga/@36.7191462,-4.4634219,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID80NmssAE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9S-QF19-I-YYKHobO8jh3oPBUBgMiJV2XQxw67rME89-QFqWJpUwQFGUKiJJe2n2Q2MDXYVUSSBmOWctgnAKQ7LXogirKLxJV_txoPwZUU-3DKg4TRYhSbbTE4OeSkxgNBvgBQ6Cg%3Dw573-h298-k-no!7i1960!8i1018!4m9!3m8!1s0xd72f7426d4ed66d:0x44ce559748963482!8m2!3d36.7191462!4d-4.4634219!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11h61cdz8l?authuser=0&hl=es&entry=ttu';

export const photoUrl =
	'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-QF19-I-YYKHobO8jh3oPBUBgMiJV2XQxw67rME89-QFqWJpUwQFGUKiJJe2n2Q2MDXYVUSSBmOWctgnAKQ7LXogirKLxJV_txoPwZUU-3DKg4TRYhSbbTE4OeSkxgNBvgBQ6Cg=w1200-h624-k-no';

export const galleryPhotos = [
	{
		src: foto('am-01.jpg'),
		width: 1600,
		height: 1600,
		alt: 'Fotografía de AM Industria del Estilo publicada en Google Maps',
	},
	{
		src: foto('am-02.jpg'),
		width: 1600,
		height: 1200,
		alt: 'Fotografía del salón AM Industria del Estilo en Teatinos, Málaga',
	},
	{
		src: foto('am-03.jpg'),
		width: 1200,
		height: 1600,
		alt: 'Detalle del trabajo de peluquería de AM Industria del Estilo',
	},
] as const;

export const phoneHrefs = ['tel:+34744610881'] as const;
export const emailHref = `mailto:${business.email}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const instagramUrl = 'https://www.instagram.com/amindustriadelestilopeluqueria/';
export const facebookUrl = 'https://www.facebook.com/p/AM-Industria-del-Estilo-100063478445414/';

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${business.site}/#salon`,
	name: business.name,
	description: 'Peluquería en Teatinos, Málaga: corte, color, mechas y tratamientos.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	email: business.email,
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
	sameAs: [instagramUrl, facebookUrl],
};
