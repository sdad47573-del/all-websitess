import type { ImageMetadata } from 'astro';

// Fotos reales del local descargadas del perfil público de Google Maps. De la
// tanda descargada solo se publican las que muestran el negocio: el rótulo y la
// fachada de la calle Santiago. Las demás (una captura de videojuego, una
// actuación escolar con menores y dos imágenes de interior/platos que no se
// pueden atribuir al local) se han descartado.
type Ficha = { alt: string; pie: string };

const FICHAS: Record<string, Ficha> = {
  'comidas-para-llevar-abuelas-apaisada-08': {
    alt: 'Fachada blanca de Comidas para llevar Abuelas en la calle Santiago de Lorca, con balcones y la puerta abierta',
    pie: 'La fachada, en la calle Santiago',
  },
  'comidas-para-llevar-abuelas-apaisada-01': {
    alt: 'Puerta de madera abierta del local con dos veladores altos en la acera y el rótulo de Abuelas en la pared',
    pie: 'La puerta y los veladores',
  },
  'comidas-para-llevar-abuelas-vertical-07': {
    alt: 'Rótulo de forja de Abuelas, Comidas para llevar, sobre la pared blanca junto al balcón',
    pie: 'El rótulo de la casa',
  },
  'comidas-para-llevar-abuelas-vertical-06': {
    alt: 'Entrada de Abuelas con la puerta abierta, el balcón encima y el letrero sobre el dintel',
    pie: 'La entrada, de frente',
  },
};

// La primera abre el collage del hero; el resto forma la galería.
const ORDEN = [
  'comidas-para-llevar-abuelas-apaisada-08',
  'comidas-para-llevar-abuelas-apaisada-01',
  'comidas-para-llevar-abuelas-vertical-07',
  'comidas-para-llevar-abuelas-vertical-06',
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
      alt: ficha?.alt ?? 'Fotografía de Comidas para llevar Abuelas, en Lorca',
      pie: ficha?.pie ?? 'Comidas para llevar Abuelas',
    },
  ];
});
