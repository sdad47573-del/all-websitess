# Florlover Vialia

Web informativa de **Florlover Vialia**, máquina expendedora de ramos de flores en la **Calle Explanada de la Estación, 1 · 29002 Málaga** (hall del Centro Comercial Vialia, Estación María Zambrano), con teléfono 614 30 74 30 y web propia florlover.es.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Florlover Vialia                                     |
| Dirección               | C. Explanada de la Estación, 1 · 29002 Málaga        |
| Ubicación               | Hall del C. C. Vialia, Estación María Zambrano, pl. 0 |
| Distrito                | Distrito Centro                                      |
| Teléfono                | +34 614 30 74 30                                     |
| Web propia              | https://www.florlover.es/                            |
| Categorías de Google    | Floristería (única)                                  |
| Descripción del titular | Máquina expendedora, primera de Andalucía, 24h…      |
| Valoración              | 4,7 sobre 5 con 19 reseñas                           |
| Horario                 | Abierto 24 horas, todos los días                     |
| Coordenadas             | 36.7121164, -4.4325451                               |
| Plus code               | PH68+RX Málaga (completo 8C8QPH68+RX)                 |
| Identificador del lugar | `ChIJd424orX3cg0RVAI7-chwJGk`                        |
| Identificador de canal  | `/g/11mz0rwnzy`                                      |
| Feature id              | `0xd72f7b5a2b88d77:0x692470c8f93b0254`               |

**Dirección desarrollada.** Google publica la dirección abreviada («C. Explanada de la Estación») junto a «1, Estación Vialia Maria Zambrano». En la web se desarrolla a **Calle Explanada de la Estación, 1**, como en el resto del repositorio, y se conserva el hall de la estación como ubicación.

**Categoría y `@type`.** La ficha publica **una única categoría**: «Floristería». El `@type` de los datos estructurados es `Florist`, con `sameAs` a su web propia. Sin `priceRange` (la ficha no publica precios).

**Descripción del titular.** La ficha publica descripción propia y se reproduce literalmente: máquina expendedora de ramos, la primera de Andalucía, ramos y centros frescos listos para llevar, con base acuática, en el hall del Centro Comercial Vialia.

### El horario

**Abierto 24 horas, todos los días**, según la semana del 17 al 23 de octubre de 2026 publicada por la ficha. Al ser una máquina expendedora en el hall de la estación, no cierra.

### Accesibilidad

La ficha publica **cuatro entradas, todas disponibles**: acceso, aparcamiento adaptado, aseo adaptado y asientos adaptados para sillas de ruedas.

### Las reseñas

La ficha tiene **19 reseñas** (4,7 sobre 5) y Google destaca **tres extractos de 5 sobre 5**, reproducidos literalmente sin corregir redacción ni puntuación:

- «Una floristeria abierta las 24h con ramos preciosos, todo un acierto.»
- «Además vienen con unas cajas que contienen agua, una pasada.»
- «No me esperaba una maquina así en la Estación pero me “salvó” la situación.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs florlover-vialia   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **10 fotografías** en la portada de la galería (`florlover-vialia-vertical-*.jpg` y una apaisada).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- El collage de portada usa la única apaisada arriba y dos verticales abajo; `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada.

## Comprobaciones

```bash
bunx turbo run build --filter=florlover-vialia
node scripts/check-site-content.mjs florlover-vialia
./node_modules/.bin/tsc -p apps/florlover-vialia/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular los datos de la ficha** antes de publicar (el horario 24h no necesita confirmación, pero sí la descripción y las fotos).
3. Revisar las 10 fotos publicadas (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `florlover-vialia.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
