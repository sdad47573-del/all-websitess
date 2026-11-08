# La Leyenda del Candil · Cádiz

Web informativa no oficial de **La Leyenda del Candil**, sabores de Cádiz en la **zona Plaza de la Candelaria · 11001 Cádiz**, reservas 856 61 07 94.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: solo zona, teléfono y horario publicados por el propio local en Instagram, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente (además de infringir derechos de autor). Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha y al Instagram para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | La Leyenda del Candil |
| Zona | Plaza de la Candelaria · 11001 Cádiz |
| Teléfono / reservas | +34 856 61 07 94 (bio Instagram @laleyendadelcandil) |
| Horario | Todos los días 8:30–23:30 (bio Instagram) |
| Coordenadas | 36.5297157, -6.2990681 |
| Ficha | Enlace de Google Maps aportado por el usuario |
| Instagram | https://www.instagram.com/laleyendadelcandil/ |

## Comprobaciones

```bash
bun run build
bun run typecheck
```
