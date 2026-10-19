# Taberna El tío de la tiza · Cádiz

Web informativa no oficial de **Taberna El tío de la tiza**, en **Plaza El tío de la tiza, 12 · 11002 Cádiz (Barrio La Viña)**, teléfono 956 21 20 82.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono, horario y descripción de Turismo Cádiz (Ayuntamiento), coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha e Instagram para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Taberna El tío de la tiza |
| Dirección | Plaza El tío de la tiza, 12 · 11002 Cádiz |
| Teléfono | +34 956 21 20 82 (Turismo Cádiz) |
| Horario | Lun-Dom 13:00–16:30 y 19:30–24:00 (Turismo Cádiz) |
| Desde | 1979 · caballas asadas, caracoles, adobo, chocos, tortillitas |
| Coordenadas | 36.5305917, -6.3020351 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=taberna-el-tio-de-la-tiza
node scripts/check-site-content.mjs taberna-el-tio-de-la-tiza
```
