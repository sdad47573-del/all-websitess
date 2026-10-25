# Restaurante Olimpic

Web informativa de **Restaurante Olimpic** (`RESTAURANTE OLIMPIC SL`), restaurante de carretera en la N-340 a su paso por Torreblanca (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carretera N-340, km 1013,600 · 12596 Torreblanca), teléfono (964 42 01 28), coordenadas (40.2331877, 0.2198536), nota (4,1 con 1.242 reseñas), categoría (restaurante) y horario («Abierto 24 horas» los siete días).
- Accesibilidad tal como la marca la ficha: entrada, aseo, asientos y aparcamiento adaptados para sillas de ruedas.
- Platos tomados de las fotos de la ficha (carne a la plancha con patatas, arroz con carne, habas con jamón, ensalada mixta, tabla de embutido, café en vaso) y de lo que citan las reseñas («menús variados», «servicio rápido», «mucha variedad de tortillas»). No se publican precios porque no hay carta oficial.
- El edificio es el del Hotel Restaurante Olimpic, que tiene ficha propia en Google; aquí solo se enlaza y se explica.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-olimpic`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la foto de la fachada.
- `siteUrl` (`https://restaurante-olimpic.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-olimpic
bun run typecheck   # dentro de apps/restaurante-olimpic
node scripts/check-site-content.mjs restaurante-olimpic
```
