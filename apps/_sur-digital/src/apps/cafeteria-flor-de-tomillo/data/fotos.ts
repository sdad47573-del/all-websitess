import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs cafeteria-flor-de-tomillo`. El script numera los
// archivos por su forma (apaisada, cuadrada, vertical...), así que el texto alternativo y el
// pie se asignan aquí, uno por foto, según lo que se ve en cada una.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
	'cafeteria-flor-de-tomillo-apaisada-01': {
		alt: 'Fachada de la Cafetería Flor de Tomillo en la calle Paloma, con el rótulo rosa sobre la puerta',
		pie: 'La fachada, en la calle Paloma',
	},
	'cafeteria-flor-de-tomillo-apaisada-03': {
		alt: 'Bocadillos de tortilla y de fiambre en la vitrina del mostrador',
		pie: 'Bocadillos en el mostrador',
	},
	'cafeteria-flor-de-tomillo-vertical-05': {
		alt: 'Plato con rollitos de jamón, huevo, mango y brotes sobre salsa amarilla',
		pie: 'Plato del día',
	},
	'cafeteria-flor-de-tomillo-apaisada-08': {
		alt: 'Botellas de cerveza tostada, sin alcohol y rubia alineadas en la barra',
		pie: 'Cervezas en la barra',
	},
	'cafeteria-flor-de-tomillo-apaisada-10': {
		alt: 'Bocadillos tostándose en la plancha del mostrador',
		pie: 'Bocadillos en la plancha',
	},
	'cafeteria-flor-de-tomillo-vertical-02': {
		alt: 'Pescado dorado sobre fideos negros con salsa amarilla y aceite verde',
		pie: 'Pescado con fideos negros',
	},
	'cafeteria-flor-de-tomillo-vertical-09': {
		alt: 'Hamburguesa con queso, bacon y lechuga, con cesta de patatas fritas',
		pie: 'Hamburguesa con patatas',
	},
	'cafeteria-flor-de-tomillo-vertical-04': {
		alt: 'Ensalada de nueces y queso fresco en cuenco de cristal',
		pie: 'Ensalada de nueces y queso',
	},
	'cafeteria-flor-de-tomillo-vertical-06': {
		alt: 'Pescado con rodajas de higo y hojas verdes sobre bandeja de acero',
		pie: 'Pescado con higos',
	},
	'cafeteria-flor-de-tomillo-vertical-03': {
		alt: 'Raviolis en salsa amarilla con queso fresco, pipas y cebolla frita',
		pie: 'Raviolis de la casa',
	},
	'cafeteria-flor-de-tomillo-vista-7-07': {
		alt: 'Tapa de carne guisada sobre pan en un plato azul',
		pie: 'Tapa de carne guisada',
	},
};

// Orden en que aparecen: primero el local y después la comida. Las tres primeras forman el
// collage de la portada.
const ORDEN = [
	'cafeteria-flor-de-tomillo-apaisada-01',
	'cafeteria-flor-de-tomillo-apaisada-03',
	'cafeteria-flor-de-tomillo-vertical-05',
	'cafeteria-flor-de-tomillo-apaisada-08',
	'cafeteria-flor-de-tomillo-apaisada-10',
	'cafeteria-flor-de-tomillo-vertical-02',
	'cafeteria-flor-de-tomillo-vertical-09',
	'cafeteria-flor-de-tomillo-vertical-04',
	'cafeteria-flor-de-tomillo-vertical-06',
	'cafeteria-flor-de-tomillo-vertical-03',
	'cafeteria-flor-de-tomillo-vista-7-07',
];

const modulos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/fotos/*.{jpg,jpeg,png,webp,avif}',
	{ eager: true },
);

const porNombre = new Map(
	Object.entries(modulos).map(([ruta, modulo]) => [
		(ruta.split('/').pop() ?? '').replace(/\.[^.]+$/, ''),
		modulo.default,
	]),
);

const sinOrden = [...porNombre.keys()].filter((nombre) => !ORDEN.includes(nombre));

export const fotos = [...ORDEN, ...sinOrden].flatMap((nombre) => {
	const src = porNombre.get(nombre);
	if (!src) return [];
	const ficha = FICHAS[nombre];
	return [
		{
			src,
			alt: ficha?.alt ?? 'Fotografía de Cafetería Flor de Tomillo, en Ciudad Real',
			pie: ficha?.pie ?? 'Cafetería Flor de Tomillo',
		},
	];
});
