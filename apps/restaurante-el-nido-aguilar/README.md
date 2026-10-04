# Restaurante El Nido · Aguilar de la Frontera

Landing Astro con información del restaurante, SEO local, enlaces a las galerías públicas, reservas por teléfono y mapa.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-el-nido-aguilar
bun --filter restaurante-el-nido-aguilar dev
```

Validación: `bun --filter restaurante-el-nido-aguilar check`, `typecheck` y `build`.

## Fuentes

- Google Maps: https://www.google.com/maps/place/Restaurante+El+Nido/@37.5087929,-4.6462369,17z/
- Facebook oficial: https://www.facebook.com/restauranteelnidoaguilardelafrontera/
- Instagram oficial: https://www.instagram.com/restauranteelnidoaguilar/
- Turismo de Córdoba: https://www.turismodecordoba.org/restaurante-el-nido
- Página de referencias gastronómicas: https://www.toppingsandsalads.es/restaurante/restaurante-el-nido/

La galería muestra nueve fotos JPEG descargadas del perfil público de Instagram `@restauranteelnidoaguilar`. Cada imagen enlaza a su publicación original y los archivos se incluyen en `public/fotos/`. El arte de portada y Open Graph son ilustraciones originales, no fotografías.

El teléfono (+34 692 60 51 83) y la especialidad en carnes a la brasa se corroboraron en perfiles públicos del negocio. Turismo de Córdoba publica la dirección como Acera del Arrecife, 3, pero esas coordenadas de Maps corresponden a Aguilar de la Frontera y otros directorios sitúan allí la dirección como Av. Bernat Soria, 17. Se usa esta última y se recomienda confirmar ubicación y horarios por teléfono. No se incluye una tabla de horas porque las fuentes no son consistentes.

## Dominio

`https://restaurante-el-nido-aguilar.vercel.app` es provisional. Actualízalo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio final.
