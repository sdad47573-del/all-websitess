# Supermarket DT88

Web informativa de **Supermarket DT88**, supermercado en el **Pasillo de Sta. Isabel, 16 · 29005 Málaga** (Distrito Centro), con teléfono 663 45 43 61.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Supermarket DT88                         |
| Dirección               | Pasillo de Sta. Isabel, 16 · 29005 Málaga |
| Barrio                  | Distrito Centro                          |
| Teléfono                | +34 663 45 43 61                         |
| Categorías de Google    | Supermercado (+ alimentación, cerveza, refrescos, golosinas, heladería, agua embotellada, tabaco…) |
| Valoración              | 3,8 sobre 5 con 13 reseñas               |
| Horario                 | Todos los días 9:00 – 3:00               |
| Coordenadas             | 36.719384, -4.4250809                    |
| Plus code               | PH9F+QX Málaga (completo 8C8QPH9F+QX)    |
| Identificador del lugar | `ChIJMwtwySf3cg0RJ7xYcVAzd24`            |
| Identificador de canal  | `/g/11yrbs79pt`                          |
| Feature id              | `0xd72f727c9700b33:0x6e7733507158bc27`   |

**Categoría y `@type`.** La categoría principal es «Supermercado» y el `@type` de los datos estructurados es `Supermarket`. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha **no publica descripción**, así que la web no inventa ninguna: lo único que dice de la tienda son sus datos, su horario, sus reseñas citadas y sus fotografías.

### El horario

Todos los días de **9:00 a 3:00** (cierre de madrugada), según la semana del 17 al 23 de octubre de 2026 publicada por la ficha. `openingHoursSpecification` tiene 7 especificaciones (una por día).

### Accesibilidad

La ficha publica **acceso, aparcamiento adaptado y asientos adaptados para sillas de ruedas** (los tres disponibles) y marca el local como **amigable con la comunidad LGBTQ+**.

### Las reseñas

La ficha tiene **13 reseñas** (3,8 sobre 5) y Google cita **tres extractos**, reproducidos literalmente:

- 5/5: «Tienen una gran variedad de marcas y los precios son bastante competitivos.»
- 5/5: «Excelente supermarket, gran variedad de productos y todo muy ordenado.»
- 1/5: «Además la atención pésima.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs supermarket-dt88   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **10 fotografías** en la portada de la galería (`supermarket-dt88-apaisada-01…10.jpg`, apaisadas y verticales).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la primera apaisada.

## Comprobaciones

```bash
bunx turbo run build --filter=supermarket-dt88
node scripts/check-site-content.mjs supermarket-dt88
./node_modules/.bin/tsc -p apps/supermarket-dt88/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (9:00–3:00 todos los días) y los datos de la ficha antes de publicar.
3. Revisar las 10 fotos publicadas (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `supermarket-dt88.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
