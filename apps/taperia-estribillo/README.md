# Tapería Estribillo · Cádiz

Web informativa no oficial de **Restaurante Tapería Estribillo**, en **Calle Sacramento 75 · 11003 Cádiz**, teléfono 856 52 35 53.

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
| Nombre | Restaurante Tapería Estribillo |
| Dirección | Calle Sacramento 75 · 11003 Cádiz |
| Teléfono | +34 856 52 35 53 |
| Coordenadas | 36.5332967, -6.3021354 |
| Ficha | Enlace de Google Maps aportado por el usuario |

El horario no se publica sin verificar.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
