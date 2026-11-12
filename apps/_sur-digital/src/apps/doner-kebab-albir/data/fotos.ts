import type { ImageMetadata } from 'astro';

// Fotos del perfil público del local en Google Maps, descargadas con
// `node scripts/fetch-maps-photos.mjs doner-kebab-albir`. De la tanda se han
// descartado dos: una panorámica 360 deformada de la avenida (con un coche en
// primer plano) y una toma de sillas vacías junto a la calzada. El resto se
// describe una a una.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'doner-kebab-albir-apaisada-03': {
    alt: 'Terraza de Doner Kebab Albir en la avenida de l\'Albir, con mesas y sillas sobre césped artificial bajo el toldo del local',
    pie: 'La terraza, en la avenida',
  },
  'doner-kebab-albir-vertical-06': {
    alt: 'Mano sosteniendo un kebab de ternera envuelto en papel de aluminio y papel con el nombre del local',
    pie: 'El kebab de ternera',
  },
  'doner-kebab-albir-vertical-10': {
    alt: 'Rollo de kebab abierto con carne, salsa y patatas fritas sobre la mesa',
    pie: 'Rollo abierto, con salsa',
  },
  'doner-kebab-albir-apaisada-01': {
    alt: 'Sala de Doner Kebab Albir con mesas de madera, sillas, barra y el ventanal que da a la terraza',
    pie: 'La sala, desde la barra',
  },
  'doner-kebab-albir-vertical-04': {
    alt: 'Cartel de menús del local con las fotos de pita, rollo, plato, alitas, nuggets, hamburguesa y menú familiar',
    pie: 'El cartel de menús',
  },
  'doner-kebab-albir-apaisada-05': {
    alt: 'Pared verde del local con un mural de fotos de platos, mesas con mantel y una máquina expendedora',
    pie: 'La pared verde y el mural',
  },
  'doner-kebab-albir-apaisada-08': {
    alt: 'Comedor de Doner Kebab Albir con mesas de madera, sillas y la barra con el mural de la carta al fondo',
    pie: 'La barra y el comedor',
  },
  'doner-kebab-albir-vertical-02': {
    alt: 'Dos trabajadores junto al arcón de helados del local, con las neveras de bebidas al fondo',
    pie: 'El arcón de helados',
  },
};

// Las tres primeras forman el collage del hero; el resto, la galería.
const ORDEN = [
  'doner-kebab-albir-apaisada-03',
  'doner-kebab-albir-vertical-06',
  'doner-kebab-albir-vertical-10',
  'doner-kebab-albir-apaisada-01',
  'doner-kebab-albir-vertical-04',
  'doner-kebab-albir-apaisada-05',
  'doner-kebab-albir-apaisada-08',
  'doner-kebab-albir-vertical-02',
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
      alt: ficha?.alt ?? 'Fotografía de Doner Kebab Albir, en l\'Albir (Alicante)',
      pie: ficha?.pie ?? 'Doner Kebab Albir',
    },
  ];
});
