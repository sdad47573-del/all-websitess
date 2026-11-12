import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs bar-nono`. El script numera los archivos por su
// forma (apaisada, cuadrada, vertical...), así que el texto alternativo y el pie se asignan
// aquí, uno por foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS y a ORDEN. El manifiesto `.maps-manifest.json` evita que el script vuelva a
// descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'bar-nono-cuadrada-05': {
    alt: 'Fachada de Bar Nono de noche: la puerta abierta, el rótulo NONO BAR en rojo sobre la piedra y la ventana iluminada',
    pie: 'La fachada, en la calle Valverde',
  },
  'bar-nono-apaisada-10': {
    alt: 'La barra del bar con las botellas en las estanterías, la vitrina de tapas y el cañero de cerveza',
    pie: 'La barra, con la vitrina de tapas',
  },
  'bar-nono-vertical-07': {
    alt: 'Dos tortillitas de camarones recién fritas en un plato, con la carta del bar al fondo',
    pie: 'Tortillitas de camarones',
  },
  'bar-nono-apaisada-04': {
    alt: 'El rótulo NONO BAR en letras rojas sobre la pared de piedra de la fachada',
    pie: 'El rótulo de la fachada',
  },
  'bar-nono-apaisada-09': {
    alt: 'La vitrina del mostrador con pinchos, bandejas de comida y pan',
    pie: 'La vitrina del mostrador',
  },
  'bar-nono-cuadrada-03': {
    alt: 'Pinchos de salmón con pimiento, calabacín y cebolla preparados en la bandeja',
    pie: 'Pinchos de salmón con verduras',
  },
  'bar-nono-apaisada-02': {
    alt: 'Brocheta de carne a la plancha con pimientos y calabacín y un gajo de limón',
    pie: 'Brocheta de carne con verduras',
  },
  'bar-nono-apaisada-08': {
    alt: 'Carne a la plancha con pimientos rojos y verdes y patatas fritas',
    pie: 'Carne a la plancha con pimientos',
  },
  'bar-nono-cuadrada-06': {
    alt: 'Cuatro croquetas fritas con una ensalada y un cuenco de alioli al lado',
    pie: 'Croquetas con ensalada',
  },
};

// Orden en que aparecen: primero el local y después los platos. Las tres primeras forman el
// collage de la portada.
const ORDEN = [
  'bar-nono-cuadrada-05',
  'bar-nono-apaisada-10',
  'bar-nono-vertical-07',
  'bar-nono-apaisada-04',
  'bar-nono-apaisada-09',
  'bar-nono-cuadrada-03',
  'bar-nono-apaisada-02',
  'bar-nono-apaisada-08',
  'bar-nono-cuadrada-06',
];

// La galería de la ficha incluye un montaje de la fachada con un árbol de Navidad, el texto
// «Felices Fiestas» y una barra de música: es una felicitación, no una foto del local.
const EXCLUIDAS = new Set(['bar-nono-apaisada-01']);

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
      alt: ficha?.alt ?? 'Fotografía de Bar Nono, en Cádiz',
      pie: ficha?.pie ?? 'Bar Nono',
    },
  ];
});
