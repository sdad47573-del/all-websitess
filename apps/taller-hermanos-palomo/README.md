# Taller mecánica Hermanos Palomo

Landing estática en Astro para el taller situado en C/ Padre Martín, 23 (29010 Málaga).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/taller-hermanos-palomo
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Información y SEO

- Datos usados: nombre, dirección, teléfono público (+34 951 25 16 47) y coordenadas del enlace de Google Maps proporcionado.
- JSON-LD `AutoRepair` con NAP y geolocalización confirmados; sin horarios, valoraciones, precios ni lista de servicios no verificados.
- La página enlaza a la ficha y al mapa de Google; no descarga ni vuelve a alojar fotos de terceros sin autorización.
- `https://taller-hermanos-palomo.vercel.app` es un dominio provisional. Actualizar `site` en `astro.config.mjs`, `business.site` en `src/lib/business.ts` y `public/robots.txt` antes de publicar con el dominio definitivo.
- Confirmar con el titular el horario, servicios y permiso de fotos para ampliar el contenido.
