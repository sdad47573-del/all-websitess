# Asador Novaliches

Web informativa de **Asador Novaliches**, parrilla en Novaliches (pedanía de Jérica, Alto Palancia). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Pob. Novaliches, 4 · 12450 Novaliches, Jérica), teléfono (660 62 11 28), coordenadas (39.9133535, -0.5489771), nota (4,4 con 1.779 reseñas), categoría (parrilla) y horario (de 8:00 a 24:00 de martes a sábado, domingo de 8:00 a 18:00 y lunes cerrado).
- Platos tomados de las fotos de la ficha y de lo que citan las reseñas (parrilladas, longaniza, chorizo y morcilla, panceta, secreto, pincho de pollo, pulpo a la brasa, mariscada y almuerzos con huevo frito). No se publican precios porque no hay carta oficial.
- Ubicación: Novaliches es pedanía de Jérica, en la comarca del Alto Palancia (Castellón).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs asador-novaliches`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la parrilla.
- `siteUrl` (`https://asador-novaliches.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=asador-novaliches
bun run typecheck   # dentro de apps/asador-novaliches
```
