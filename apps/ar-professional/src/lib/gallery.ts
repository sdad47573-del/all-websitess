import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
	{ eager: true },
);
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const galleryPhotos = [
	{ src: foto('ar-professional-01.jpg'), alt: 'Vista del salón AR Professional compartida en Google Maps' },
	{ src: foto('ar-professional-02.jpg'), alt: 'Detalle del espacio de peluquería AR Professional' },
	{ src: foto('ar-professional-03.jpg'), alt: 'Interior del salón de belleza en Teatinos' },
	{ src: foto('ar-professional-04.jpg'), alt: 'Vista de la peluquería AR Professional' },
	{ src: foto('ar-professional-05.jpg'), alt: 'Espacio de estilismo de AR Professional en Málaga' },
] as const;
