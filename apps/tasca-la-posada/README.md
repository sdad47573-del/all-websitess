# Tasca La Posada

Web informativa de **Tasca La Posada**, tasca de marisco e ibéricos en Castelló de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Temprado, 19 · 12002 Castelló de la Plana), teléfono (964 73 74 74), coordenadas (39.9833345, -0.0369753), nota (4,9 con 242 reseñas), horario (cenas de 19:00 a 23:30 de domingo a jueves salvo el martes, y comidas los viernes y sábados) y accesibilidad (acceso para sillas de ruedas, sin aparcamiento adaptado).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. La carta y los precios no se publican porque no hay carta oficial.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs tasca-la-posada`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://tasca-la-posada.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=tasca-la-posada
bun run typecheck   # dentro de apps/tasca-la-posada
```
