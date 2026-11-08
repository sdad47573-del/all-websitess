# El Barull restaurante

Web informativa de **El Barull restaurante**, asador y bar de almuerzos en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Av. Diputació, 10 · 12004 Castellón de la Plana), teléfono (964 24 26 78), coordenadas (40.0010648, -0.0461681), nota (4,5 con 1.232 reseñas), categorías (restaurante y restaurante mediterráneo) y horario (de 6:00 a 17:00 de lunes a viernes, sábado de 6:00 a 13:00 y domingo cerrado).
- Platos tomados de las fotos de la ficha y de lo que citan las reseñas (bocadillos de longaniza y de carne, longaniza, chorizo y morcilla, chuleta con patatas, pimientos de padrón, pulpo, arroz con judías y costillas, ensalada de tomate y cebolla, carajillo). No se publican precios porque no hay carta oficial.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs el-barull-restaurante`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale del pulpo a la brasa.
- `siteUrl` (`https://el-barull-restaurante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=el-barull-restaurante
bun run typecheck   # dentro de apps/el-barull-restaurante
```
