import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs taberna-de-romero`. El script numera los archivos
// por su forma (apaisada, vertical...), así que el texto alternativo y el pie se asignan aquí,
// uno por foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS; si el nombre no está en ORDEN, se muestra al final. El manifiesto
// `.maps-manifest.json` evita que el script vuelva a descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'taberna-de-romero-apaisada-01': {
    alt: 'Fachada de la Taberna de Romero en la calle Uruguay: pared amarilla y naranja y el rótulo «La Taberna de Romero desde 1987» junto a la puerta',
    pie: 'La fachada, en la calle Uruguay',
  },
  'taberna-de-romero-apaisada-07': {
    alt: 'Interior del bar con mesas de mantel de cuadros, clientes sentados y la pared amarilla cubierta de fotografías y carteles',
    pie: 'El salón, con las fotos de la casa en la pared',
  },
  'taberna-de-romero-apaisada-10': {
    alt: 'Calamar a la plancha entero, marcado por la parrilla, con un poco de pimiento asado al lado',
    pie: 'Calamar a la plancha',
  },
  'taberna-de-romero-apaisada-02': {
    alt: 'Revuelto de huevos con jamón servido en un plato hondo',
    pie: 'Revuelto de huevos con jamón',
  },
  'taberna-de-romero-apaisada-09': {
    alt: 'Fritura de pescado recién hecha, con boquerones enharinados y fritos, sobre un mantel de cuadros azules',
    pie: 'Fritura de pescado',
  },
  'taberna-de-romero-vertical-04': {
    alt: 'Almejas abiertas en una salsa de aceite y ajo, con una cuchara de servir al lado',
    pie: 'Almejas en salsa de aceite y ajo',
  },
  'taberna-de-romero-apaisada-05': {
    alt: 'Carne en salsa con cebolla y patatas fritas de guarnición en un plato blanco',
    pie: 'Carne en salsa con patatas',
  },
  'taberna-de-romero-vertical-08': {
    alt: 'Revuelto de huevos con jamón y setas visto de cerca, con lonchas de jamón sobre el huevo',
    pie: 'Revuelto de huevos con jamón y setas',
  },
  'taberna-de-romero-vista-3-03': {
    alt: 'Empanado rebozado, cortado en tiras, sobre una cama de patatas fritas',
    pie: 'Empanado con patatas fritas',
  },
  'taberna-de-romero-vista-6-06': {
    alt: 'Calamares a la romana recién fritos con un gajo de limón',
    pie: 'Calamares a la romana',
  },
};

// Orden en que aparecen: primero el local y después los platos. Las tres primeras son las del
// collage de la portada.
const ORDEN = [
  'taberna-de-romero-apaisada-01',
  'taberna-de-romero-apaisada-07',
  'taberna-de-romero-apaisada-10',
  'taberna-de-romero-apaisada-02',
  'taberna-de-romero-apaisada-09',
  'taberna-de-romero-vertical-04',
  'taberna-de-romero-apaisada-05',
  'taberna-de-romero-vertical-08',
  'taberna-de-romero-vista-3-03',
  'taberna-de-romero-vista-6-06',
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
      alt: ficha?.alt ?? 'Fotografía del Bar La Taberna de Romero en Cádiz',
      pie: ficha?.pie ?? 'Bar La Taberna de Romero',
    },
  ];
});
