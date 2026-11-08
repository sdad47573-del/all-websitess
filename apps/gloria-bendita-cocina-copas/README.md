# Gloria Bendita Cocina & Copas

Web informativa de **Gloria Bendita Cocina & Copas**, restaurante en Trebujena (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.8679531, -6.1798146).
- Dirección y teléfono de directorios locales (Pablo Neruda 2, Toya Park, 11560 Trebujena · 696 89 33 51): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs gloria-bendita-cocina-copas`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://gloria-bendita-cocina-copas.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=gloria-bendita-cocina-copas
bun run typecheck   # dentro de apps/gloria-bendita-cocina-copas
```
