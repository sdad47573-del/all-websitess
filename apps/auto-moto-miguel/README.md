# Auto Moto Miguel

Landing estática Astro para Auto Moto Miguel, taller de reparación de motos en Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/auto-moto-miguel
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Datos y SEO local

- Nombre, dirección (Calle Antonio Raíz, 6, 29010 Málaga) y teléfono (+34 952 30 99 54) aparecen en varios directorios.
- Horario laboral publicado de lunes a viernes: 09:00–14:00 y 16:00–20:00. Se presenta como orientativo porque los directorios discrepan en algunos detalles de fin de semana; confirmar por teléfono antes de acudir.
- Se omiten puntuaciones y reseñas porque las fuentes publican cifras distintas.
- Schema.org `MotorcycleRepair` con NAP, coordenadas y el horario laborable orientativo; sin ratings/reviews.
- El enlace de Maps compartido abre la ficha general, no una imagen concreta: la página enlaza a la galería de Google Maps, pero no incrusta fotos.
- Dominio provisional: `https://auto-moto-miguel.vercel.app`. Actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicar.

Confirmar teléfono, dirección y horario con el negocio antes del lanzamiento.
