import type { ImageMetadata } from 'astro';

// Fotos propias del local. Para sustituir una ilustración por una foto real basta
// con dejar el archivo en `assets/fotos/` con el nombre de su ranura y una extensión
// de foto: fachada.jpg, salon.jpg, barra.jpg, tapas.jpg, vinos.jpg, plato.jpg
// (también vale el prefijo completo, p. ej. `taberna-de-romero-salon.webp`).
// Mientras no haya foto, se usa la ilustración `.svg` de esa ranura.
const RANURAS = ['fachada', 'salon', 'barra', 'tapas', 'vinos', 'plato'] as const;
export type Ranura = (typeof RANURAS)[number];

const ALT: Record<Ranura, string> = {
  fachada: 'de la fachada de la Taberna de Romero en la Calle Uruguay 1',
  salon: 'del salón de la taberna, con manteles de cuadros y las paredes cubiertas de fotos familiares',
  barra: 'de la barra de la taberna, con las tapas, la caña y el fino',
  tapas: 'de las tapas de la casa servidas en la mesa',
  vinos: 'de los vinos de Jerez en la barra',
  plato: 'del arroz verde con almejas, uno de los guisos de la casa',
};

const PREFIJO = 'taberna-de-romero-';

const modulos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/fotos/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
);

const archivos = new Map<string, { src: ImageMetadata; esFoto: boolean }>();

for (const [ruta, modulo] of Object.entries(modulos)) {
  const nombre = (ruta.split('/').pop() ?? '')
    .replace(/\.[^.]+$/, '')
    .replace(PREFIJO, '');
  const esFoto = !ruta.toLowerCase().endsWith('.svg');
  const actual = archivos.get(nombre);
  // Con foto y dibujo para la misma ranura, la foto gana.
  if (!actual || (!actual.esFoto && esFoto)) {
    archivos.set(nombre, { src: modulo.default, esFoto });
  }
}

export const hayFotos = [...archivos.values()].some((archivo) => archivo.esFoto);

export const imagen = (ranura: Ranura) => {
  const archivo = archivos.get(ranura);
  if (!archivo) {
    throw new Error(`Falta la imagen de "${ranura}" en src/apps/taberna-de-romero/assets/fotos/`);
  }
  return {
    src: archivo.src,
    esFoto: archivo.esFoto,
    alt: `${archivo.esFoto ? 'Fotografía' : 'Ilustración'} ${ALT[ranura]}`,
  };
};
