# El Terrazeo del Guinda

Landing page estática en Astro para El Terrazeo del Guinda, bar cafetería, tapería y terraza de la
avenida del Obispo Ángel Herrera Oria, 1 (Cruz de Humilladero, 29007 Málaga).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/el-terrazeo-del-guinda
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios, `petsAllowed`) y
  `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local y con guías públicas: Av. del Obispo Ángel
  Herrera Oria, 1, teléfono 952 27 56 66, lunes a viernes 8:00–17:30, sábados 12:30–17:30 y domingos
  cerrado (Google Maps confirma el horario del miércoles, 8:00–17:30).
- La valoración `aggregateRating` (4,6 con 259 reseñas) procede de las reseñas públicas de Google.
  Conviene revisarla antes de publicar, porque el recuento exacto varía entre fuentes (252–261).
- No se publican precios de la carta: solo el rango orientativo de 10-20 € por persona que indican las
  guías.

## Imágenes

Las siete imágenes de `public/fotos/` se descargaron del perfil de Google Maps del propio
establecimiento (el autor de las fotos de la ficha es la cuenta del local):

- `el-terrazeo-del-guinda-malaga.jpg` (1080×761) para la portada y el `og:image`.
- `el-terrazeo-del-guinda-malaga-foto-1.jpg` a `-foto-6.jpg` para la galería.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` (ahora
son genéricos) y confirmar que el titular autoriza el uso de las imágenes. Los nombres de archivo son
descriptivos a propósito, porque Google Imágenes los indexa.

## Antes de publicar

1. Cambiar `https://el-terrazeo-del-guinda.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario y carta vigentes con el establecimiento.
