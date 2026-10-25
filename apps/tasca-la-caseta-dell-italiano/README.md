# Tasca La Caseta dell'Italiano

Web informativa de **Tasca La Caseta dell'Italiano**, trattoria italiana en Castelló de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Navarra, 15 · 12002 Castelló de la Plana), teléfono (641 32 07 47), coordenadas (39.9839958, -0.0400226), nota (4,8 con 2.451 reseñas), horario (comidas y cenas de miércoles a domingo; lunes y martes cerrado) y accesibilidad (acceso y aseo adaptados, sin aparcamiento adaptado).
- La ficha avisa en el propio nombre del local de que no trabajan con pizza; la web lo recoge igual.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. La carta y los precios no se publican porque no hay carta oficial.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs tasca-la-caseta-dell-italiano`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://tasca-la-caseta-dell-italiano.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=tasca-la-caseta-dell-italiano
bun run typecheck   # dentro de apps/tasca-la-caseta-dell-italiano
```
