# Bar Nono · Cádiz

Web informativa no oficial de **Bar Nono**, en **Calle Valverde, 13 · 11004 Cádiz**, teléfono 679 33 42 80.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección y teléfono de Turismo Cádiz, historia y horario de Cosasdecome, coordenadas y enlaces a Google Maps.
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
| Nombre | Bar Nono |
| Dirección | Calle Valverde, 13 · 11004 Cádiz |
| Teléfono | +34 679 33 42 80 |
| Horario | A diario salvo sábados noche y domingos · confirmar |
| Desde | ~1987 · salmorejo, ensaladilla, cola de toro, albóndigas, berza |
| Coordenadas | 36.5330483, -6.2965492 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=bar-nono
node scripts/check-site-content.mjs bar-nono
```
