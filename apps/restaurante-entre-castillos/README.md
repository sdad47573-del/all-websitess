# Restaurante Entre Castillos · Cádiz

Web informativa no oficial de **Restaurante Entre Castillos**, en **C. San Félix · 11002 Cádiz (La Caleta)**, reservas 604 24 56 57.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono y email de su web oficial, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.
- Web oficial: https://restaurante-entre-castillos.makro.bar/?lang=es

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha, Instagram y web oficial para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Restaurante Entre Castillos |
| Dirección | C. San Félix · 11002 Cádiz |
| Teléfono | +34 604 24 56 57 (web oficial) |
| Email | restaurante.entrecastillos@gmail.com |
| Horario | Sin confirmar · llamar al 604 24 56 57 |
| Coordenadas | 36.5297984, -6.3037225 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=restaurante-entre-castillos
node scripts/check-site-content.mjs restaurante-entre-castillos
```
