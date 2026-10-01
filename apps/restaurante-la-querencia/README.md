# Restaurante La Querencia · Encinarejo

Landing page en Astro con diseño adaptable, SEO local, datos estructurados, mapa, contacto y acceso a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-la-querencia
bun --filter restaurante-la-querencia dev
```

Validación: `bun --filter restaurante-la-querencia check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+La+Querencia/@37.8318789,-4.9279196,17z/
- Instagram oficial: https://www.instagram.com/la_querencia_encinarejo/
- Facebook oficial: https://www.facebook.com/laquerencia.encinarejo/
- Turismo de Córdoba: https://www.turismodecordoba.org/restaurante-el-nido
- Información gastronómica: https://www.toppingsandsalads.es/restaurante/restaurante-la-querencia/

La URL de Google Maps identifica la ficha, pero no incluye URLs directas a fotos. El sitio enlaza las galerías del propio negocio en Instagram y Facebook y la ficha en Maps; sus recursos SVG son ilustraciones originales, no fotografías del restaurante.

La dirección C/ Félix Rodríguez de la Fuente, 10 y los teléfonos 957 47 65 84 y 646 28 96 54 aparecen en perfiles y directorios locales. Los horarios cambian según publicaciones; se recomienda confirmarlos por teléfono. La oferta gastronómica es orientativa, no sustituye la carta vigente.

## Dominio

`https://restaurante-la-querencia-encinarejo.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` al conocer el dominio definitivo.
