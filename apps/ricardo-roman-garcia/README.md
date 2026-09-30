# Ricardo Román García

Landing estática Astro para el taller mecánico de Calle Los Millones, Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/ricardo-roman-garcia
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## SEO y datos locales

- Nombre, dirección, código postal y teléfono publicados en varios directorios locales.
- Las coordenadas provienen del enlace de Google Maps proporcionado.
- JSON-LD `AutoRepair` con NAP y geo; no incluye horario, reseñas, valoraciones ni servicios concretos.
- La portada no incrusta fotos porque el enlace aportado lleva a la ficha general y no identifica una imagen concreta. Enlaza a Google Maps para abrir la galería.
- Dominio provisional: `https://ricardo-roman-garcia.vercel.app`. Actualizar en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicar.

Confirmar con el titular teléfono, dirección y dominio definitivo antes de lanzar.
