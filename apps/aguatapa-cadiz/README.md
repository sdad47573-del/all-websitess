# Aguatapá Cádiz · Restaurante y Freidor

Web informativa no oficial de **Aguatapá Cádiz**, en **Av. Amílcar Barca, 17 · Playa Victoria, Cádiz**, teléfono 856 07 33 31.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono, horario y especialidad de Turismo Cádiz (Ayuntamiento), coordenadas y enlaces a Google Maps.
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
| Nombre | Aguatapá Cádiz \| Restaurante y Freidor |
| Dirección | Av. Amílcar Barca, 17 · Playa Victoria, Cádiz |
| Teléfono | +34 856 07 33 31 (Turismo Cádiz) |
| Horario | Mié-Jue 13–00; Vie-Sáb 13–02; Dom 13–20; Lun 13–17; Mar cerrado |
| Especialidad | Pavía de merluza |
| Coordenadas | 36.5147245, -6.283842 |
| Ficha | Enlace de Google Maps aportado por el usuario |

## Comprobaciones

```bash
bunx turbo run build --filter=aguatapa-cadiz
node scripts/check-site-content.mjs aguatapa-cadiz
```
