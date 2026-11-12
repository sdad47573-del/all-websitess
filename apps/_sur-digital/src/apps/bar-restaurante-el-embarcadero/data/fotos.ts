import type { ImageMetadata } from 'astro';

// Fotos reales del local, descargadas del perfil público del establecimiento en Google Maps
// con `node scripts/fetch-maps-photos.mjs bar-restaurante-el-embarcadero`. El script numera los
// archivos por su forma (panorámica, apaisada, cuadrada, vertical...), así que el texto
// alternativo y el pie se asignan aquí, uno por foto, según lo que se ve en cada una.
//
// Para cambiar una foto por otra, sustituye el archivo manteniendo el nombre o añade la nueva
// entrada a FICHAS y a ORDEN. El manifiesto `.maps-manifest.json` evita que el script vuelva a
// descargar lo que ya está.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'bar-restaurante-el-embarcadero-panoramica-01': {
    alt: 'Terraza de El Embarcadero con mesas y sillas bajo sombrillas, entre palmeras y jardín',
    pie: 'La terraza, entre palmeras y jardín',
  },
  'bar-restaurante-el-embarcadero-apaisada-03': {
    alt: 'Una dorada y un calamar ensartados asándose sobre las brasas, de noche',
    pie: 'Los espetos, en la brasa',
  },
  'bar-restaurante-el-embarcadero-apaisada-05': {
    alt: 'Dos copas sobre el muelle de madera con el río Barbate y las casas del fondo',
    pie: 'Copas junto al río',
  },
  'bar-restaurante-el-embarcadero-cuadrada-06': {
    alt: 'Vista del río Barbate desde la barandilla de madera del embarcadero, con barcas al fondo',
    pie: 'El río desde el embarcadero',
  },
  'bar-restaurante-el-embarcadero-apaisada-07': {
    alt: 'Calamar a la brasa en un plato azul con patatas, pimientos y un limón',
    pie: 'Calamar a la brasa',
  },
  'bar-restaurante-el-embarcadero-apaisada-09': {
    alt: 'Pescado entero a la brasa con ensalada, pan y una copa de vino blanco',
    pie: 'Dorada a la brasa',
  },
  'bar-restaurante-el-embarcadero-vertical-04': {
    alt: 'Seis sardinas asadas con sal y un gajo de limón en una fuente',
    pie: 'Sardinas a la brasa',
  },
  'bar-restaurante-el-embarcadero-apaisada-02': {
    alt: 'Otra zona de la terraza, con césped, mesas blancas, árboles y la barbacoa al fondo',
    pie: 'La terraza y la zona de césped',
  },
};

// Orden en que aparecen: primero el local y después lo que sale de la brasa. La primera es
// también la foto de portada.
const ORDEN = [
  'bar-restaurante-el-embarcadero-panoramica-01',
  'bar-restaurante-el-embarcadero-apaisada-03',
  'bar-restaurante-el-embarcadero-apaisada-05',
  'bar-restaurante-el-embarcadero-cuadrada-06',
  'bar-restaurante-el-embarcadero-apaisada-07',
  'bar-restaurante-el-embarcadero-apaisada-09',
  'bar-restaurante-el-embarcadero-vertical-04',
  'bar-restaurante-el-embarcadero-apaisada-02',
];

// Fuera de la galería: una foto de clientes sentados (personas identificables) y otra de la
// mesa con la carta y sus precios, que la web no publica.
const EXCLUIDAS = new Set([
  'bar-restaurante-el-embarcadero-apaisada-08',
  'bar-restaurante-el-embarcadero-cuadrada-10',
]);

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
      alt: ficha?.alt ?? 'Fotografía de Bar Restaurante El Embarcadero, en Barbate',
      pie: ficha?.pie ?? 'El Embarcadero',
    },
  ];
});
