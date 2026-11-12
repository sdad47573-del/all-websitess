import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs bocateria-el-viking`. El script numera los archivos
// por su forma (apaisada, cuadrada, vertical...), así que el texto alternativo y el pie se
// asignan aquí, uno por foto, según lo que se ve en cada una.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
	'bocateria-el-viking-vertical-02': {
		alt: 'Puerta de Bocatería El Víking, con el cartel del local y la terraza al fondo',
		pie: 'La puerta del bar, en Carrer la Santamaría',
	},
	'bocateria-el-viking-vertical-05': {
		alt: 'Bocadillos de lomo con pimiento y de atún con lechuga, con patatas fritas y una caña',
		pie: 'Bocadillos con patatas',
	},
	'bocateria-el-viking-cuadrada-07': {
		alt: 'Albóndigas en salsa con guisantes servidas en un plato hondo',
		pie: 'Albóndigas con guisantes',
	},
	'bocateria-el-viking-apaisada-01': {
		alt: 'Comedor del bar con mesas de mantel rojo y paredes naranjas',
		pie: 'El comedor',
	},
	'bocateria-el-viking-cuadrada-06': {
		alt: 'Barra de mármol con taburetes y la bandera de España al fondo',
		pie: 'La barra',
	},
	'bocateria-el-viking-vertical-04': {
		alt: 'Jamón en el jamonero y dos cañas sobre la barra de madera',
		pie: 'Jamón y cañas en la barra',
	},
	'bocateria-el-viking-apaisada-03': {
		alt: 'Plato de jamón cortado con aceitunas y una copa de vino en la terraza',
		pie: 'Jamón en la terraza',
	},
	'bocateria-el-viking-apaisada-09': {
		alt: 'Croquetas con patatas fritas y dos copas de vino blanco sobre mesa roja de terraza',
		pie: 'Croquetas y patatas',
	},
	'bocateria-el-viking-vertical-10': {
		alt: 'Vista del comedor con mesas de mantel estampado y el televisor encendido',
		pie: 'Mesas del comedor',
	},
};

// Orden en que aparecen: primero el local y después la comida. Las tres primeras forman el
// collage de la portada.
const ORDEN = [
	'bocateria-el-viking-vertical-02',
	'bocateria-el-viking-vertical-05',
	'bocateria-el-viking-cuadrada-07',
	'bocateria-el-viking-apaisada-01',
	'bocateria-el-viking-cuadrada-06',
	'bocateria-el-viking-vertical-04',
	'bocateria-el-viking-apaisada-03',
	'bocateria-el-viking-apaisada-09',
	'bocateria-el-viking-vertical-10',
];

// En la galería de la ficha hay una foto de la barra con clientes sentados y caras
// identificables: no aporta información del local, así que no se publica.
const EXCLUIDAS = new Set(['bocateria-el-viking-vertical-08']);

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

const sinOrden = [...porNombre.keys()].filter(
	(nombre) => !ORDEN.includes(nombre) && !EXCLUIDAS.has(nombre),
);

export const fotos = [...ORDEN, ...sinOrden].flatMap((nombre) => {
	const src = porNombre.get(nombre);
	if (!src) return [];
	const ficha = FICHAS[nombre];
	return [
		{
			src,
			alt: ficha?.alt ?? 'Fotografía de Bocatería El Víking, en Calp (Alicante)',
			pie: ficha?.pie ?? 'Bocatería El Víking',
		},
	];
});
