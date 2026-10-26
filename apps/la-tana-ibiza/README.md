# La Tana · Eivissa

Landing page en Astro para La Tana, trattoria siciliana en Carrer del Passadís, 3 (casco antiguo de Eivissa). Incluye portada con foto de fachada, presentación, selección de carta, galería con las fotos de la ficha de Google Maps, reseñas, mapa, horarios, preguntas frecuentes y aviso legal. El pie acredita la web a Sur Digital enlazando a <https://sur-digital.vercel.app/>.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter la-tana-ibiza
bun --filter la-tana-ibiza dev
```

Validación: `bun --filter la-tana-ibiza check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: <https://www.google.com/maps/place/La+Tana,+Restaurante/@38.908812,1.437405,17z/data=!3m1!4b1!4m6!3m5!1s0x129946b16d61e313:0xecea3209368e1b63!8m2!3d38.908812!4d1.437405!16s%2Fg%2F11b7rxm2fw>
- Instagram oficial: <https://www.instagram.com/latanaibiza/>
- Facebook: <https://www.facebook.com/latanaibiza.es/>
- Tripadvisor: <https://www.tripadvisor.es/Restaurant_Review-g664638-d3492972-Reviews-Tratoria_La_Tana-Eivissa_Ibiza_Ibiza_Balearic_Islands.html>

Datos tomados de esas fuentes en octubre de 2026: dirección (Carrer del Passadís, 3, 07800 Eivissa), teléfono (+34 630 25 89 84), horario (19:30–02:00 todos los días), cocina (restaurante italiano y mediterráneo, origen siciliano) y valoración media de Google (4,4 con 325 reseñas). La carta de la web es una selección orientativa, no la carta oficial; los precios no se publican.

## Fotografías

Las diez imágenes de `src/assets/fotos` se descargaron con `node scripts/fetch-maps-photos.mjs la-tana-ibiza` desde la galería pública de la ficha de Google Maps (el manifiesto `.maps-manifest.json` guarda los ids). La fachada se usa en el hero, y las otras nueve en la galería; Astro las convierte a WebP y genera `srcset`, por lo que la app necesita `sharp`.

El `favicon.svg` y el `og.jpg` son originales: el segundo se compone sobre la foto de fachada con un degradado y el nombre del restaurante.

## Pendiente antes de producción

- Completar en `src/pages/aviso-legal.astro` el NIF/CIF, la razón social y el correo de contacto del titular.
- `https://la-tana-ibiza.vercel.app` es el dominio provisional. Al definir el dominio final hay que actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt`.
