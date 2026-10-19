# La Bella Escondida · Cádiz

Web informativa no oficial de **Restaurante La Bella Escondida Cocina Casera**, en **Condesa Villafuente Bermeja, 5 · 11008 Cádiz**, teléfono 856 06 75 36.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono y horario de Cosasdecome, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Restaurante La Bella Escondida Cocina Casera |
| Dirección | Condesa Villafuente Bermeja, 5 · 11008 Cádiz |
| Teléfono | +34 856 06 75 36 |
| Horario | Almuerzos Mar-Dom · cenas fin de semana · Lun cerrado · confirmar |
| Desde | 2014 · sin reservas |
| Coordenadas | 36.5193974, -6.2854419 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=la-bella-escondida
node scripts/check-site-content.mjs la-bella-escondida
```
