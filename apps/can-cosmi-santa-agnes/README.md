# Can Cosmi · Santa Agnès de Corona

Landing page en Astro para Can Cosmi, taberna, restaurante y colmado de 1951 en la Plaza de la Església de Santa Agnès de Corona (Sant Antoni de Portmany, Ibiza). Incluye portada con la iglesia y la tortilla, historia de la casa, carta orientativa, galería con las fotos de la ficha de Google Maps, reseñas, mapa, horarios, preguntas frecuentes y aviso legal. El pie acredita la web a Sur Digital enlazando a <https://sur-digital.vercel.app/>.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter can-cosmi-santa-agnes
bun --filter can-cosmi-santa-agnes dev
```

Validación: `bun --filter can-cosmi-santa-agnes check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: <https://www.google.com/maps/place/Can+Cosmi+santa+In%C3%A9s+Restaurante+%2F+punto+de+encuentro+y+m%C3%A1s./@39.0384889,1.3360549,17z>
- Instagram oficial: <https://www.instagram.com/cancosmi/>
- Ibiza 5 Sentidos (historia y datos del local): <https://www.ibiza5sentidos.es/restaurantes/can-cosmi/>

Datos tomados de esas fuentes en octubre de 2026: dirección (Plaza de la Església, s/n, 07828 Santa Agnès de Corona), teléfono (+34 971 80 50 20), horario publicado en Google Maps (12:00–16:00 y 19:00–23:00, martes cerrado) y valoración media de Google (4,2 con 685 reseñas). La historia del local (apertura en 1951 como colmado y bar por María Costa y Pep Boned, las tortillas paisanas, el comedor y el colmado anexo) procede del artículo de Ibiza 5 Sentidos. La carta de la web es una selección orientativa basada en esas fuentes, no la carta oficial; no se publican precios.

No debe confundirse con el bar Can Cosmi de Santa Eulària, que es otro establecimiento.

## Fotografías

Las diez imágenes de `src/assets/fotos` se descargaron con `node scripts/fetch-maps-photos.mjs can-cosmi-santa-agnes` desde la galería pública de la ficha de Google Maps (el manifiesto `.maps-manifest.json` guarda los ids). La iglesia y la tortilla se usan en la portada, y las otras ocho en la galería; Astro las convierte a WebP y genera `srcset`, por lo que la app necesita `sharp`.

El `favicon.svg` y el `og.jpg` son originales: el segundo se compone sobre la foto de la tortilla con un degradado y el nombre del restaurante.

## Pendiente antes de producción

- Completar en `src/pages/aviso-legal.astro` el NIF/CIF, la razón social y el correo de contacto del titular.
- `https://can-cosmi-santa-agnes.vercel.app` es el dominio provisional. Al definir el dominio final hay que actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt`.
- Confirmar con el restaurante el horario de invierno y las fechas de vacaciones antes de publicar.
