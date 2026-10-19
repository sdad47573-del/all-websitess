# Vin Vin's Cocina Filipina · Cádiz

Web informativa no oficial de **Vin Vin's Cocina Filipina**, en **Callejones de Cardoso, 18 · 11002 Cádiz**, teléfono 956 26 37 26.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección y teléfono de Cosasdecome, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias y enlaza a la ficha y Facebook para ver fotos.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Vin Vin's Cocina Filipina |
| Dirección | Callejones de Cardoso, 18 · 11002 Cádiz |
| Teléfono | +34 956 26 37 26 |
| Horario | Variable · confirmar por teléfono (Lun-Sáb según Cosasdecome) |
| Reservas | No admiten reservas |
| Coordenadas | 36.5300329, -6.299703 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=vin-vins-cocina-filipina
node scripts/check-site-content.mjs vin-vins-cocina-filipina
```
