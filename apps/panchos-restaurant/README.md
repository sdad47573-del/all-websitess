# Pancho's Restaurant

Web informativa de **Pancho's Restaurant**, bar de tapas y restaurante en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Santa Maria Rosa Molas, 19 · 12004 Castelló de la Plana), teléfono (964 23 24 48), coordenadas (39.9961313, -0.0352371), nota (4,1 con 2.597 reseñas), categorías (restaurante especializado en tapas, cafetería, restaurante de comida rápida, restaurante), horario (lunes a sábado 9:00–24:00, domingo 12:00–24:00, abierto todos los días, sin cierre a mediodía) y accesibilidad (acceso, aseo, asientos y aparcamiento adaptados).
- **La ficha no publica carta ni precios ni descripción del titular.** La sección «La carta» se ha redactado con lo que aparece en las fotos del perfil (paella de marisco, chocos a la plancha, chuletillas con patatas, bocadillo de jamón y queso, bandeja de sándwiches con patatas) y con lo que citan las reseñas (raciones, hamburguesas, ensaladas, patés, bocadillos de jamón recién cortado y de tortilla, desayuno y brunch). No se inventan importes.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs panchos-restaurant` y guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron tres: una en la que sale un camarero con la cara reconocible, un primer plano de bocadillo con la mano del comensal en el encuadre y una paella casi idéntica a la elegida. Ojo al renumerar: la ficha ha ido cambiando de orden sus fotos y el nombre de fichero que hoy corresponde a la paella es el que antes era del bocadillo, así que conviene comprobar cada imagen antes de reetiquetarla. El `og.jpg` es el arroz con marisco recortado a 1200×630.
- El script de descarga se ajustó para cargar `sharp` desde la app que procesa (antes dependía de `apps/bar-el-anzuelo`, que no siempre tiene `node_modules`).
- `siteUrl` (`https://panchos-restaurant.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=panchos-restaurant
bun run typecheck   # dentro de apps/panchos-restaurant
```
