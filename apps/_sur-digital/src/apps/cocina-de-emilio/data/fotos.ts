import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs cocina-de-emilio`. El script numera los archivos por
// su forma (apaisada, cuadrada, vertical...), así que el texto alternativo y el pie se asignan
// aquí, uno por foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS y a ORDEN. El manifiesto `.maps-manifest.json` evita que el script vuelva a
// descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'cocina-de-emilio-apaisada-02': {
    alt: 'Vitrina de La Cocina de Emilio con las bandejas del menú del día: lentejas, albóndigas, arroz y guisos',
    pie: 'La vitrina, con los platos del día',
  },
  'cocina-de-emilio-cuadrada-06': {
    alt: 'Rótulo de La Cocina de Emilio con el gorro de cocinero, el bigote y el teléfono 968 26 25 77',
    pie: 'El rótulo de la casa',
  },
  'cocina-de-emilio-vertical-07': {
    alt: 'Albóndigas en salsa de tomate con pimientos verdes en una bandeja de acero',
    pie: 'Albóndigas con pimientos',
  },
  'cocina-de-emilio-vertical-04': {
    alt: 'Paella de pollo y verdura recién hecha en la paellera, sobre el fuego',
    pie: 'Paella de pollo',
  },
  'cocina-de-emilio-apaisada-01': {
    alt: 'Ensaladilla rusa con aceitunas, huevo duro, pimiento y pan rallado en una fuente de cristal',
    pie: 'Ensaladilla rusa',
  },
  'cocina-de-emilio-vertical-03': {
    alt: 'Filetes de pescado rebozados y fritos, apilados en una bandeja de acero inoxidable',
    pie: 'Pescado rebozado',
  },
  'cocina-de-emilio-vertical-09': {
    alt: 'Tortilla de patatas y tortilla de verduras cuajadas en dos bandejas de aluminio',
    pie: 'Tortillas de la casa',
  },
  'cocina-de-emilio-vertical-05': {
    alt: 'Cartel del menú semanal de La Cocina de Emilio con los platos de lunes a viernes y el horario',
    pie: 'El menú de la semana, en la puerta',
  },
  'cocina-de-emilio-vista-8-08': {
    alt: 'Arroz con gambas, jamón y guisantes en la sartén, salmorejo en cuencos y un postre de la casa',
    pie: 'Arroz con gambas y salmorejo',
  },
};

// Orden en que aparecen: primero el local y después los platos. Las tres primeras forman el
// collage de la portada.
const ORDEN = [
  'cocina-de-emilio-apaisada-02',
  'cocina-de-emilio-vertical-04',
  'cocina-de-emilio-vertical-07',
  'cocina-de-emilio-cuadrada-06',
  'cocina-de-emilio-apaisada-01',
  'cocina-de-emilio-vertical-03',
  'cocina-de-emilio-vertical-09',
  'cocina-de-emilio-vertical-05',
  'cocina-de-emilio-vista-8-08',
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
      alt: ficha?.alt ?? 'Fotografía de La Cocina de Emilio, en El Carmen (Murcia)',
      pie: ficha?.pie ?? 'La Cocina de Emilio',
    },
  ];
});
