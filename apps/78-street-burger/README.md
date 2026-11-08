# 78 Street Burger · Cáceres

Web informativa no oficial de **78 Street Burger**, en **Avda. Virgen de Guadalupe 5, local 1 · 10001 Cáceres**, teléfono 927 04 23 58.

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
| Nombre | 78 Street Burger |
| Dirección | Avda. Virgen de Guadalupe 5, local 1 · 10001 Cáceres |
| Teléfono | +34 927 04 23 58 |
| Coordenadas | 39.4718948, -6.379794 |
| Ficha | Enlace de Google Maps aportado por el usuario |

El horario no se publica sin verificar.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
