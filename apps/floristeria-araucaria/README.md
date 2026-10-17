# Floristería Araucaria

Web informativa de **Floristería Araucaria**, floristería en la **Avenida del Pintor Joaquín Sorolla, 10 · 29016 Málaga** (Málaga-Este), con teléfono 952 22 55 54 y web propia floristeriaaraucaria.com.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Floristería Araucaria                                |
| Dirección               | Av. del Pintor Joaquín Sorolla, 10 · 29016 Málaga    |
| Distrito                | Málaga-Este                                          |
| Teléfono                | +34 952 22 55 54                                     |
| Web propia              | https://floristeriaaraucaria.com/                    |
| Categorías de Google    | Floristería, Entrega de flores                       |
| Descripción del titular | Envío en el día, ramos, planta, centros, bodas…      |
| Valoración              | 4,8 sobre 5 con 138 reseñas                          |
| Horario                 | Mar–vie 9:30–17:00; lun y sáb 9:30–14:00; dom cerrado |
| Coordenadas             | 36.7232994, -4.396258                                |
| Plus code               | PJF3+8F Málaga (completo 8C8QPJF3+8F)                 |
| Identificador del lugar | `ChIJq_4D4d_3cg0R-lqLyIpUbOM`                        |
| Identificador de canal  | `/g/11xblvdmt`                                       |
| Feature id              | `0xd72f7dfe103feab:0xe36c548ac88b5afa`                |

**Dirección desarrollada.** Google publica la dirección abreviada («Av. del Pintor Joaquín Sorolla, 10»). En la web se desarrolla a **Avenida del Pintor Joaquín Sorolla, 10**, como en el resto del repositorio.

**Categorías y `@type`.** La ficha publica **dos categorías**: «Floristería» y «Entrega de flores». El `@type` de los datos estructurados es `Florist`, con `sameAs` a su web propia. Sin `priceRange` (la ficha no publica precios).

**Descripción del titular.** La ficha publica descripción propia y se reproduce literalmente: envío de flores en Málaga en el día, ramos, planta natural, centros, flor y planta artificial, envío a domicilio, flor preservada y bodas y eventos.

### El horario

De **martes a viernes de 9:30 a 17:00**, **lunes y sábado de 9:30 a 14:00** y **domingo cerrado**, según la semana del 17 al 23 de octubre de 2026 publicada por la ficha. `openingHoursSpecification` tiene 6 especificaciones (el domingo, cerrado, no genera ninguna).

### Accesibilidad

La ficha publica **acceso para sillas de ruedas como disponible** y **aseo adaptado como no disponible** («Sin aseo adaptado para discapacitados»).

### Las reseñas

La ficha tiene **138 reseñas** (4,8 sobre 5) y Google destaca **tres extractos de 5 sobre 5**, reproducidos literalmente sin corregir redacción ni puntuación:

- «Profesionalidad, buen trato, buen género y buenos precios.»
- «Sin duda, volveremos a contar con ella y la recomendamos totalmente.»
- «Artesania pura, tienen un buen gusto sinigual y el servicio fue muy rapido.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs floristeria-araucaria   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **10 fotografías** en la portada de la galería (`floristeria-araucaria-vertical-*.jpg` y una apaisada).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- El collage de portada usa la única apaisada arriba y dos verticales abajo; `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada.

## Comprobaciones

```bash
bunx turbo run build --filter=floristeria-araucaria
node scripts/check-site-content.mjs floristeria-araucaria
./node_modules/.bin/tsc -p apps/floristeria-araucaria/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (mar–vie 9:30–17:00, lun y sáb 9:30–14:00, dom cerrado) y los datos de la ficha antes de publicar.
3. Revisar las 10 fotos publicadas (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `floristeria-araucaria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
