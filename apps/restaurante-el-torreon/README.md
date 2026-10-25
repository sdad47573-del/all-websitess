# Restaurante El Torreó

Web informativa de **Restaurante El Torreó**, cocina española en el polígono comercial La Travessa de La Vall d'Uixó (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Comercial la Travessa, 31 · Polígono Comercial la Travessa · 12600 La Vall d'Uixó), teléfono (617 68 42 20), coordenadas (39.8219278, -0.2121452), nota (4,5 con 916 reseñas), categoría (restaurante de cocina española) y horario (5:00–16:00 de lunes a viernes; sábados 5:00–12:30; domingos cerrado).
- Accesibilidad tal como la marca la ficha: entrada, aseo, asientos y aparcamiento adaptados para sillas de ruedas, más bucle magnético asistencial.
- Platos tomados de las fotos de la ficha (café en vaso, bocadillo de tortilla y carne, paella de arroz con carne y judías verdes, arroz en plato, vitrina de cazuelas, mesa de banquete) y de las reseñas (entremeses, carrillada, lomo de merluza, arroz, flan de queso). No se publican precios porque no hay carta oficial.
- De las diez fotos de la ficha se descartaron dos retratos de clientes, por no ser imágenes del local.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-el-torreon`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la paella grande.
- `siteUrl` (`https://restaurante-el-torreon.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-torreon
bun run typecheck   # dentro de apps/restaurante-el-torreon
node scripts/check-site-content.mjs restaurante-el-torreon
```
