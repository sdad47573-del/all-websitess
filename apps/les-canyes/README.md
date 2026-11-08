# Les Canyes

Web informativa de **Les Canyes** (Bar Restaurant Les Canyes), bar restaurante de arroces en Castelló de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Lleida, 16 · 12004 Castelló de la Plana), teléfono (964 35 00 36), coordenadas (39.9942814, -0.0345181), nota (4,4 con 661 reseñas), categorías (restaurante, restaurante mediterráneo, restaurante de cocina española) y horario (8:30–17:00 de martes a domingo; lunes cerrado).
- Accesibilidad tal como la marca la ficha: entrada, aseo, asientos y aparcamiento adaptados para sillas de ruedas.
- Platos tomados de las fotos de la ficha (arroces con mejillones, langostinos y panceta, salmorejo con jamón y huevo, patatas con pimientos, pan con alioli y tomate, carne a la brasa, postre con nata) y de las reseñas («variedad de arroces», arroz con bogavante con una botella de cava, «generosas raciones»). No se publican precios porque no hay carta oficial.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs les-canyes`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la foto de las tres paellas.
- `siteUrl` (`https://les-canyes.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=les-canyes
bun run typecheck   # dentro de apps/les-canyes
node scripts/check-site-content.mjs les-canyes
```
