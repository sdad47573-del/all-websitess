import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs bar-la-tahona`. El script numera los archivos por su
// forma (apaisada, vertical...), así que el texto alternativo y el pie se asignan aquí, uno por
// foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS y a ORDEN. El manifiesto `.maps-manifest.json` evita que el script vuelva a
// descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'bar-la-tahona-apaisada-01': {
    alt: 'Interior de La Tahona: la pared con el rótulo «La Tahona Conil», lámparas de mimbre y mesas de madera',
    pie: 'El interior, con la pared de La Tahona',
  },
  'bar-la-tahona-cuadrada-07': {
    alt: 'Tres mini hamburguesas con pan de semillas, tomate y mayonesa en un plato blanco',
    pie: 'Mini hamburguesas de la casa',
  },
  'bar-la-tahona-vertical-02': {
    alt: 'Pinchos morunos de carne adobada recién hechos sobre la plancha',
    pie: 'Pinchos morunos a la plancha',
  },
  'bar-la-tahona-vertical-09': {
    alt: 'Tortillita de camarones crujiente cubierta con salsa rosa',
    pie: 'Tortillita de camarones con salsa',
  },
  'bar-la-tahona-vertical-08': {
    alt: 'Croquetas caseras recién fritas con un poco de alioli, con la cocina al fondo',
    pie: 'Croquetas con alioli',
  },
  'bar-la-tahona-apaisada-05': {
    alt: 'Lomo de pescado dorado en un plato con una salsa verde y una salsa de tomate',
    pie: 'Pescado con sus dos salsas',
  },
  'bar-la-tahona-vista-10-10': {
    alt: 'Carne guisada en salsa con un trozo de patata en un plato cuadrado',
    pie: 'Carne guisada con patata',
  },
  'bar-la-tahona-vertical-06': {
    alt: 'Carne en salsa con patatas panadera y una ensalada de fondo en la mesa',
    pie: 'Carne en salsa con patatas panadera',
  },
  'bar-la-tahona-apaisada-04': {
    alt: 'Ensalada con nachos, pimiento y un aliño de salsas sobre el plato',
    pie: 'Ensalada con nachos y salsas',
  },
};

// Orden en que aparecen en la galería; la primera es también la foto de la portada.
const ORDEN = [
  'bar-la-tahona-apaisada-01',
  'bar-la-tahona-cuadrada-07',
  'bar-la-tahona-vertical-02',
  'bar-la-tahona-vertical-09',
  'bar-la-tahona-vertical-08',
  'bar-la-tahona-apaisada-05',
  'bar-la-tahona-vista-10-10',
  'bar-la-tahona-vertical-06',
  'bar-la-tahona-apaisada-04',
];

// La ficha incluye una composición con la pizarra de la carta y sus precios: la web no
// publica precios, así que esa foto se queda fuera de la galería.
const EXCLUIDAS = new Set(['bar-la-tahona-apaisada-03']);

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
      alt: ficha?.alt ?? 'Fotografía del Bar La Tahona, en la costa de Cádiz',
      pie: ficha?.pie ?? 'Bar La Tahona',
    },
  ];
});
