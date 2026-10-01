# Restaurante Miranda · Aldea Quintana

Web Astro adaptable con SEO local, datos estructurados, información del restaurante, mapa y enlaces a sus fotos públicas.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-miranda-aldea-quintana
bun --filter restaurante-miranda-aldea-quintana dev
```

Validación: `bun --filter restaurante-miranda-aldea-quintana check`, `typecheck` y `build`.

## Fuentes

- Google Maps: https://www.google.com/maps/place/Restaurante+Miranda/@37.7179229,-4.8602129,17z/
- Facebook oficial: https://www.facebook.com/mirandadesde1968/
- Álbum público de Facebook: https://www.facebook.com/media/set/?set=a.1933072983687682.1073742853.1380788978916088&type=3
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d9581825-Reviews-Miranda-Cordoba_Province_of_Cordoba_Andalucia.html
- Información gastronómica: https://www.toppingsandsalads.es/restaurante/restaurante-miranda-2/

La URL de Maps identifica la ficha, pero no contiene URLs directas a archivos fotográficos. La web enlaza las fotos de Maps y álbumes públicos de Facebook. Los SVG son ilustraciones originales, no fotos del restaurante.

La dirección se referencia como Ctra. Madrid-Cádiz, km 424, Aldea Quintana, 14140, coincidente con Maps y otros directorios. El perfil de Facebook publica +34 699 15 72 79 como teléfono móvil de reservas; algunas fichas muestran números fijos antiguos. Los horarios publicados difieren y pueden cambiar, por lo que se aconseja confirmarlos al llamar.

## Dominio

`https://restaurante-miranda-aldea-quintana.vercel.app` es provisional. Actualizar en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicar.
