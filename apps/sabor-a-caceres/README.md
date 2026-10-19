# Sabor a Cáceres

Web informativa no oficial de **Sabor a Cáceres**, en **Calle General Ezponda 7 · 10003 Cáceres**, teléfono 664 78 11 95.

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
| Nombre | Sabor a Cáceres |
| Dirección | Calle General Ezponda 7 · 10003 Cáceres |
| Teléfono | +34 664 78 11 95 |
| Coordenadas | 39.4756832, -6.3721718 |
| Ficha | Enlace de Google Maps aportado por el usuario |

El horario no se publica sin verificar.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
