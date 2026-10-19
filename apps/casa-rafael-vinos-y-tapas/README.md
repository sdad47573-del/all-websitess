# Casa Rafael Vinos y Tapas · Cádiz

Web informativa no oficial de **Casa Rafael Vinos y Tapas**, en **C. Periodista Emilio López, 7 · 11004 Cádiz**, reservas 676 89 28 88 / 956 80 89 53.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección y teléfonos de su web oficial, horario de Turismo Cádiz (Ayuntamiento), coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.
- Web oficial: https://casarafaelvinosytapas.com/

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
| Nombre | Casa Rafael Vinos y Tapas |
| Dirección | C. Periodista Emilio López, 7 · 11004 Cádiz |
| Teléfonos | +34 676 89 28 88 / +34 956 80 89 53 (web oficial) |
| Email | casarafaelvinosytapas@gmail.com (Turismo Cádiz) |
| Horario | Mar-Mié 12:30-16:00; Jue-Sáb 12:30-16:00 y 21:00-23:00; Dom 12:30-16:00; Lun cerrado (Turismo Cádiz) |
| Coordenadas | 36.5334213, -6.2940197 |
| Ficha | Enlace de Google Maps aportado por el usuario |

Reservas solo por teléfono o presencial (aviso de la web oficial).

## Comprobaciones

```bash
bunx turbo run build --filter=casa-rafael-vinos-y-tapas
node scripts/check-site-content.mjs casa-rafael-vinos-y-tapas
```
