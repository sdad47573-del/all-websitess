# Casa Ana

Web informativa del **bar restaurante Casa Ana**, brasa y barra en la urbanización El Monte Blanco (Onda, Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (C. Quevedo, 10 · 12200 El Monte Blanco, Onda), teléfono (607 64 02 23), coordenadas (39.9620054, -0.2448319), categoría (restaurante), nota (4,4 con 114 reseñas) y horario.
- El Monte Blanco es una urbanización del municipio de **Onda** con código postal 12200; la ficha de Google la da como localidad propia, así que la web la escribe como «El Monte Blanco (Onda)» para que se entienda el término municipal.
- Horario de la ficha: **8:50–22:50 de martes a domingo**, **viernes y sábado hasta las 23:50**, **lunes cerrado**. Es horario corrido: no hay cierre entre comidas y cenas, y así se dice en las preguntas frecuentes.
- La ficha **no** tiene web propia, ni carta, ni precios, ni descripción. La sección «La brasa» recoge solo lo fotografiado en el perfil (parrillada con verduras asadas, costillas con patatas y huevo, embutido a la brasa, copa de helado, café) y lo que citan las reseñas (bocadillo de chorizo a la brasa).
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada, y así se dice.
- De las diez fotos de la ficha se descartaron cuatro por privacidad: una mesa con tres clientes identificables, dos personas de espaldas en el comedor, tres niños sentados en la entrada y dos hombres en la barra. De las seis restantes, se recortó el pie de la foto del embutido para quitar la marca de agua con fecha. El `og.jpg` es la parrillada, no la fachada: la foto de la fachada incluye un coche con la matrícula legible.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha con `node scripts/fetch-maps-photos.mjs casa-ana`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://casa-ana.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=casa-ana
bun run typecheck   # dentro de apps/casa-ana
node scripts/check-site-content.mjs casa-ana
```
