# Restaurante Gerasimo Palacios Blázquez

Web informativa no oficial de **Restaurante Gerasimo Palacios Blázquez**, en **Calle Colombia 5 · 10005 Cáceres**, teléfono 927 22 37 08.

- Astro 7 (`@astro-config`) y hoja propia en `src/styles/global.css`. Sin Tailwind.
- Datos en `src/data/site.ts`: solo dirección, teléfono, coordenadas y enlaces a Google Maps.
- Dos páginas: `/` y `/aviso-legal`.

## Por qué no se descargan las fotos de Google

No se descargan ni se copian fotos de la ficha de Google Maps:

1. Pertenecen a sus autores (el local o los usuarios que las subieron).
2. Las Condiciones de Google Maps / Google Business prohíben extraer contenido automáticamente (scraping).

Enlazar la ficha y el mapa incrustado sí está permitido. Las fotos de esta web son marcadores CSS hasta tener imágenes propias.

## Cómo añadir fotos propias (legal)

1. Haz tus propias fotos del local o pide permiso escrito al autor / titular.
2. Guárdalas como JPG en `src/assets/fotos/` (p. ej. `salon-01.jpg`, 1600px lado largo).
3. Importa con `astro:assets` (`<Image>`) como en otras apps del monorepo.
4. Genera `public/og.jpg` (1200×630) a partir de una foto propia.
5. Anota autor y permiso en este README.

## Datos

| Dato | Valor |
| ---- | ----- |
| Nombre | Restaurante Gerasimo Palacios Blázquez |
| Dirección | Calle Colombia 5 · 10005 Cáceres |
| Teléfono | +34 927 22 37 08 |
| Coordenadas | 39.4591581, -6.3724961 |
| Ficha | Enlace de Google Maps aportado por el usuario |

El horario no se publica sin verificar: la web indica "consultar por teléfono".

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts`.
2. Confirmar horario con el local.
3. Sustituir marcadores por fotos propias y regenerar `og.jpg`.
4. Si el dominio final cambia, actualizar `siteUrl`, `astro.config.mjs`, `public/robots.txt` y canonical/OG.
