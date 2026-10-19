# Restaurante Bocatapas · Cádiz

Web informativa no oficial de **Restaurante Bocatapas**, en **Alameda Hermanas Carvia Bernal, 5 · 11003 Cádiz**, teléfono 624 43 77 44.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono y horario orientativo de directorios, coordenadas y enlaces a Google Maps.
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
| Nombre | Restaurante Bocatapas |
| Dirección | Alameda Hermanas Carvia Bernal, 5 · 11003 Cádiz |
| Teléfono | +34 624 43 77 44 |
| Horario | 12:00–21:00 orientativo · confirmar (variable por temporada) |
| Coordenadas | 36.5371668, -6.2993239 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=restaurante-bocatapas
node scripts/check-site-content.mjs restaurante-bocatapas
```
