import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
	{ eager: true },
);
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const galleryPhotos = [
	{ src: foto('auto-moto-miguel-01.jpg'), alt: 'Vista del taller Auto Moto Miguel' },
	{ src: foto('auto-moto-miguel-02.jpg'), alt: 'Interior del taller de motos' },
	{ src: foto('auto-moto-miguel-03.jpg'), alt: 'Detalle del espacio de trabajo' },
	{ src: foto('auto-moto-miguel-04.jpg'), alt: 'Herramientas y zona de reparación' },
	{ src: foto('auto-moto-miguel-05.jpg'), alt: 'Vista del taller desde el interior' },
	{ src: foto('auto-moto-miguel-06.jpg'), alt: 'Equipamiento del taller' },
] as const;
