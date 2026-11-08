# MALAGA SUPERMARKET 24/7

Web informativa de **MALAGA SUPERMARKET 24/7**, tienda de alimentación en la **Calle Comedias, 15 · 29008 Málaga** (Distrito Centro), con teléfono 613 06 64 97.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | MALAGA SUPERMARKET 24/7                  |
| Dirección               | C. Comedias, 15 · 29008 Málaga           |
| Distrito                | Distrito Centro                          |
| Teléfono                | +34 613 06 64 97                         |
| Categorías de Google    | Tienda de alimentación (única)           |
| Valoración              | 2,3 sobre 5 con 9 reseñas                |
| Horario                 | 10:00–3:00 dom–jue, 10:00–5:00 vie–sáb   |
| Coordenadas             | 36.7231956, -4.4212835                   |
| Plus code               | PHFH+7F Málaga (completo 8C8QPHFH+7F)    |
| Identificador del lugar | `ChIJObICUu73cg0R1fzjgF9OSr0`            |
| Identificador de canal  | `/g/11xl93yc1m`                          |
| Feature id              | `0xd72f7ee5202b239:0xbd4a4e5f80e3fcd5`   |

**Dirección desarrollada.** Google publica la dirección abreviada («C. Comedias, 15»). En la web se desarrolla a **Calle Comedias, 15**, como en el resto del repositorio.

**Categoría y `@type`.** La ficha publica **una única categoría**: «Tienda de alimentación». El `@type` de los datos estructurados es `ConvenienceStore`. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha **no publica descripción**, así que la web no inventa ninguna.

### El horario

Abre **todos los días a las 10:00**: de **domingo a jueves cierra a las 3:00** y **viernes y sábado a las 5:00** (cierres de madrugada), según la semana del 17 al 23 de octubre de 2026 publicada por la ficha. `openingHoursSpecification` tiene 7 especificaciones (una por día).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una única entrada**, disponible: el **acceso para sillas de ruedas**. No publica ninguna otra.

### Las reseñas

La ficha tiene **9 reseñas** (2,3 sobre 5), pero **Google no cita ningún extracto** en la portada, así que `reviews` queda **vacío** y la web **no reproduce ningún texto de reseñas**. La tarjeta de valoración enlaza al listado público.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs malaga-supermarket-24-7   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **10 fotografías** en la portada de la galería (`malaga-supermarket-24-7-apaisada/vertical-*.jpg`).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la primera apaisada.

## Comprobaciones

```bash
bunx turbo run build --filter=malaga-supermarket-24-7
node scripts/check-site-content.mjs malaga-supermarket-24-7
./node_modules/.bin/tsc -p apps/malaga-supermarket-24-7/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (10:00–3:00 dom–jue, 10:00–5:00 vie–sáb) y los datos de la ficha antes de publicar.
3. Revisar las 10 fotos publicadas (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `malaga-supermarket-24-7.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
