import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs bar-restaurante-avenida-murcia`. El script numera los
// archivos por su forma (apaisada, cuadrada, vertical...), así que el texto alternativo y el pie
// se asignan aquí, uno por foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS y a ORDEN. El manifiesto `.maps-manifest.json` evita que el script vuelva a
// descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'bar-restaurante-avenida-murcia-apaisada-01': {
    alt: 'Fachada de Bar Restaurante Avenida, con la pared de pizarra y la placa de acero con el nombre del local',
    pie: 'La fachada, en la calle Escuelas',
  },
  'bar-restaurante-avenida-murcia-cuadrada-06': {
    alt: 'Gambas a la plancha con sal y un gajo de limón servidas en una fuente de cristal',
    pie: 'Gambas a la plancha',
  },
  'bar-restaurante-avenida-murcia-cuadrada-04': {
    alt: 'Vieiras a la plancha con su coral y un gajo de limón en una fuente de cristal',
    pie: 'Vieiras a la plancha',
  },
  'bar-restaurante-avenida-murcia-apaisada-05': {
    alt: 'Almejas abiertas con un gajo de limón en un plato hondo',
    pie: 'Almejas con limón',
  },
  'bar-restaurante-avenida-murcia-apaisada-07': {
    alt: 'Calamar a la plancha entero, marcado por la parrilla y con limón al lado',
    pie: 'Calamar a la plancha',
  },
  'bar-restaurante-avenida-murcia-apaisada-10': {
    alt: 'Cigalas cocinadas con sal sobre una fuente de cristal con lechuga y limón',
    pie: 'Cigalas',
  },
  'bar-restaurante-avenida-murcia-vertical-08': {
    alt: 'Trozos de pulpo a la plancha con su piel dorada en una fuente de cristal',
    pie: 'Pulpo a la plancha',
  },
  'bar-restaurante-avenida-murcia-apaisada-09': {
    alt: 'Chuletón a la plancha con sal en escamas, patatas fritas y pimientos de Padrón',
    pie: 'Chuletón con patatas y pimientos',
  },
  'bar-restaurante-avenida-murcia-vertical-03': {
    alt: 'Café con leche servido en vaso de cristal sobre su plato, con la cucharilla al lado',
    pie: 'Café con leche',
  },
};

// Orden en que aparecen: primero el local y después los platos. Las tres primeras forman el
// collage de la portada.
const ORDEN = [
  'bar-restaurante-avenida-murcia-apaisada-01',
  'bar-restaurante-avenida-murcia-cuadrada-06',
  'bar-restaurante-avenida-murcia-cuadrada-04',
  'bar-restaurante-avenida-murcia-apaisada-05',
  'bar-restaurante-avenida-murcia-apaisada-07',
  'bar-restaurante-avenida-murcia-apaisada-10',
  'bar-restaurante-avenida-murcia-vertical-08',
  'bar-restaurante-avenida-murcia-apaisada-09',
  'bar-restaurante-avenida-murcia-vertical-03',
];

// La galería de la ficha incluye un vídeo de una fiesta con clientes bailando: hay personas
// identificables y no aporta información del local, así que no se publica.
const EXCLUIDAS = new Set(['bar-restaurante-avenida-murcia-apaisada-02']);

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
      alt: ficha?.alt ?? 'Fotografía de Bar Restaurante Avenida, en Fuente Librilla (Murcia)',
      pie: ficha?.pie ?? 'Bar Restaurante Avenida',
    },
  ];
});
