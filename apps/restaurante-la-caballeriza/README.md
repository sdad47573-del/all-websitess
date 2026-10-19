# Restaurante La Caballeriza · Malpartida de Cáceres

Web informativa no oficial de **Restaurante La Caballeriza**, en **Calle Santa María 4 (Plaza de la Nora) · 10910 Malpartida de Cáceres**, teléfono 927 27 60 31.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: dirección, teléfono, horario municipal, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps: pertenecen a sus autores y Google prohíbe extraer contenido automáticamente. Esta web usa marcadores CSS hasta tener imágenes propias.

## Cómo añadir fotos propias

1. Haz tus propias fotos o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/`.
3. Usa `<Image>` de `astro:assets` como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) desde una foto propia.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Restaurante La Caballeriza |
| Dirección | Calle Santa María 4 (Plaza de la Nora) · 10910 Malpartida de Cáceres |
| Teléfono | +34 927 27 60 31 |
| Horario municipal | Lun 08:30–12:00 · Mar–dom 08:30–00:00 |
| Coordenadas | 39.443237, -6.5075182 |
| Ficha | Enlace de Google Maps aportado por el usuario |

Fuente de teléfono y horario: turismo.malpartidadecaceres.es.

## Comprobaciones

```bash
bun run build
bun run typecheck
```
