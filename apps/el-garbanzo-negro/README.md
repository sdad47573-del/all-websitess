# El Garbanzo Negro · Cádiz

Web informativa no oficial de **El Garbanzo Negro**, en **Calle Sacramento, 18 · 11001 Cádiz**, teléfono 956 22 23 17.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono, horario y carta de Turismo Cádiz (Ayuntamiento), coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.
- Carta: https://garbanzonegro.qr.i3net.es/

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
| Nombre | El Garbanzo Negro |
| Dirección | Calle Sacramento, 18 · 11001 Cádiz |
| Teléfono | +34 956 22 23 17 (Turismo Cádiz) |
| Horario | Lun-Sáb 13:00–16:00; Dom cerrado (Turismo Cádiz) |
| Especialidad | Menú del día · cocina gaditana reinterpretada |
| Coordenadas | 36.5317268, -6.2981391 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=el-garbanzo-negro
node scripts/check-site-content.mjs el-garbanzo-negro
```
