# Wayu Garden

Landing page estática en Astro para Restaurante Wayu Garden - The Healthy Alternative, en la calle la
Bohème, 4 (Cruz de Humilladero, 29006 Málaga).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/wayu-garden
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios, `hasMenu`, valoración)
  y `FAQPage`.
- Datos contrastados con la ficha de Google Maps, la web oficial del restaurante (wayugarden.es) y
  guías públicas: calle la Bohème, 4, teléfono 640 63 65 85, de lunes a viernes 8:00–19:00, sábados
  9:30–13:30 y domingos cerrado.
- La carta y los precios (entrantes, ensaladas, poke bowls, hamburguesas, pizzas, menú infantil,
  postres y desayunos) se han copiado de la carta publicada por el propio restaurante. Conviene
  revisarlos antes de publicar porque pueden cambiar.
- El menú del día aparece a 10,90 € en la carta de comidas y a 11,90 € en la portada de la web del
  local; en esta página se indica «unos 11 €» y se remite al establecimiento.
- La valoración `aggregateRating` (4,5 con 100 reseñas) procede de las reseñas públicas de Google.

## Imágenes

Las siete imágenes de `public/fotos/` se descargaron del perfil de Google Maps del propio
establecimiento:

- `wayu-garden-malaga.jpg` (1200×801) para la portada y el `og:image`.
- `wayu-garden-malaga-foto-1.jpg` a `-foto-6.jpg` (960×960) para la galería.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` (ahora
son genéricos) y confirmar que el titular autoriza el uso de las imágenes.

## Antes de publicar

1. Cambiar `https://wayu-garden.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario, carta y precios vigentes con el restaurante.
