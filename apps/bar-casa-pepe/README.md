# Bar Casa Pepe · Cádiz

Web informativa no oficial de **Bar Casa Pepe**, en **Calle La Rosa, 28 · 11002 Cádiz (Barrio La Viña)**, teléfono 678 55 90 84.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono, horario y descripción de Turismo Cádiz (Ayuntamiento), coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha y redes para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Bar Casa Pepe |
| Dirección | Calle La Rosa, 28 · 11002 Cádiz |
| Teléfono | +34 678 55 90 84 (Turismo Cádiz) |
| Horario | Mar-Dom 11:00–16:30; Lun cerrado (Turismo Cádiz) |
| Descripción | Bar familiar de cocina casera andaluza, fundado en 1981 |
| Coordenadas | 36.5311207, -6.3020274 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=bar-casa-pepe
node scripts/check-site-content.mjs bar-casa-pepe
```
