# On Egin · Cádiz

Web informativa no oficial de **Restaurante On Egin (Cocina Vasca)**, en **Calle Plocia 7 · 11005 Cádiz**, teléfono 856 03 24 75.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: solo dirección, teléfono, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Restaurante On Egin (Cocina Vasca) |
| Dirección | Calle Plocia 7 · 11005 Cádiz |
| Teléfono | +34 856 03 24 75 |
| Coordenadas | 36.5298144, -6.2916122 |
| Ficha | Enlace de Google Maps aportado por el usuario |

El horario no se publica sin verificar.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
