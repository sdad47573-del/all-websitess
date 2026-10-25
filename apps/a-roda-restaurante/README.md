# A Roda - Restaurante

Web informativa de **A Roda**, restaurante mediterráneo en Oropesa del Mar (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Goya, 29 · 12594 Oropesa del Mar), teléfono (964 31 14 45), coordenadas (40.0915694, 0.1364655), nota (4,5 con 979 reseñas), categorías (restaurante, restaurante mediterráneo), horario (de 9:00 a 17:00 de martes a domingo y cenas de 19:00 a 23:30 de martes a sábado; lunes cerrado), etiqueta de brunch y accesibilidad (acceso, aseo y asientos adaptados).
- La ficha no incluye descripción del negocio: la carta de la web se apoya en las fotos de la ficha (entre ellas la pizarra del menú del día) y en los platos citados en las reseñas.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. Los precios no se publican.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs a-roda-restaurante`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://a-roda-restaurante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=a-roda-restaurante
bun run typecheck   # dentro de apps/a-roda-restaurante
```
