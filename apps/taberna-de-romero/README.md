# Taberna de Romero · Cádiz

Web informativa no oficial de **Bar La Taberna de Romero**, en **Calle Uruguay 1 · 11008 Cádiz**, teléfono 663 51 76 46.

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
| Nombre | Bar La Taberna de Romero |
| Dirección | Calle Uruguay 1 · 11008 Cádiz |
| Teléfono | +34 663 51 76 46 |
| Coordenadas | 36.5080762, -6.2784972 |
| Ficha | Enlace de Google Maps aportado por el usuario |

Horario: lunes cerrado según prensa; resto consultar por teléfono.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
