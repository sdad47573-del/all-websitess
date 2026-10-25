# Restaurante del Bierzo y Galicia

Web informativa del **Restaurante del Bierzo y Galicia**, cocina gallega y del Bierzo con terraza cubierta en Benicàssim (Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Bisbe Serra, 5 · 12560 Benicàssim), teléfono (964 30 10 51), coordenadas (40.0557752, 0.0767836), categorías (restaurante de cocina española, restaurante gallego), nota (4,1 con 1.629 reseñas) y horario.
- Horario de la ficha: **10:00–23:00 de martes a sábado**, **domingo 10:00–0:30** y **lunes cerrado**. Es horario corrido, sin cierre a mediodía, y así se explica en las preguntas frecuentes (se puede comer a mediodía o a media tarde).
- La ficha **no** tiene web propia, ni carta, ni precios, ni descripción. La sección «La mesa» recoge solo lo fotografiado en el perfil (pulpo a la gallega, zamburiñas, calamares, paella de marisco, entrecot a la brasa) y lo que citan las reseñas (mejillones, sepia, solomillo, lacón, queso de Cabrales, cecina, chorizo y vino turbio). La web lo advierte y no inventa importes.
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. No marca aparcamiento propio ni plaza adaptada.
- De las diez fotos de la ficha se descartaron cuatro: dos con clientes identificables en la sala, una con un brazo en primer plano que además llevaba marca de agua fechada, y otra repetida de calamares. La foto de la terraza que abre la web está **recortada por la izquierda** para dejar fuera a los clientes más cercanos; quedan comensales de fondo, pequeños y no identificables.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha con `node scripts/fetch-maps-photos.mjs restaurante-bierzo-galicia`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (la foto recortada lleva la nota del recorte). El `og.jpg` sale de la misma terraza.
- `siteUrl` (`https://restaurante-bierzo-galicia.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-bierzo-galicia
bun run typecheck   # dentro de apps/restaurante-bierzo-galicia
node scripts/check-site-content.mjs restaurante-bierzo-galicia
```
