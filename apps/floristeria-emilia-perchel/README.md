# Floristería Emilia El Perchel

Web informativa de **Floristería Emilia El Perchel**, floristería en la **Calle Salitre, 7, Loc 2 · 29002 Málaga** (El Perchel, Distrito Centro), con teléfono 665 48 34 72.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Floristería Emilia El Perchel                        |
| Dirección               | Calle Salitre, 7, Loc 2 · 29002 Málaga               |
| Zona                    | El Perchel, Distrito Centro                          |
| Teléfono                | +34 665 48 34 72                                     |
| Categorías de Google    | Floristería (única)                                  |
| Valoración              | 4,9 sobre 5 con 69 reseñas                           |
| Horario                 | Dos turnos mar–vie; lun con mañana corta; sáb mañana |
| Coordenadas             | 36.7139825, -4.4266595                               |
| Plus code               | PH7F+H8 Málaga (completo 8C8QPH7F+H8)                 |
| Identificador del lugar | `ChIJba9jyKj3cg0RKqsKtcYbK8Y`                        |
| Identificador de canal  | `/g/11kk7p6_fs`                                      |
| Feature id              | `0xd72f7a8c863af6d:0xc62b1bc6b50aab2a`               |

**Categoría y `@type`.** La ficha publica **una única categoría**: «Floristería». El `@type` de los datos estructurados es `Florist`. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha **no publica descripción**, así que la web no inventa ninguna.

### El horario

De **martes a viernes dos turnos** (mañana de 11:00 a 14:00 y tarde de 17:00 a 20:00); el **lunes la mañana es más corta** (11:00 a 13:30) con la misma tarde; el **sábado solo por la mañana** (11:00 a 14:00) y el **domingo cierra**, según la semana del 17 al 23 de octubre de 2026 publicada por la ficha.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una única entrada**, disponible: el **acceso para sillas de ruedas**. No publica ninguna otra.

### Las reseñas

La ficha tiene **69 reseñas** (4,9 sobre 5) y Google destaca **tres extractos de 5 sobre 5**, reproducidos literalmente sin corregir redacción ni puntuación:

- «Muy antentos y rápidos llego antes de lo que me dijeron 👌»
- «Compré un ramo para regalarse a mi esposa y me encantó.»
- «Muchas gracias, quedamos encantados!»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs floristeria-emilia-perchel   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **10 fotografías** en la portada de la galería (`floristeria-emilia-perchel-apaisada-*.jpg` y verticales).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- El collage de portada usa una apaisada arriba y dos verticales abajo; `public/og.jpg` (1200 × 630) es un recorte centrado de la primera apaisada.

## Comprobaciones

```bash
bunx turbo run build --filter=floristeria-emilia-perchel
node scripts/check-site-content.mjs floristeria-emilia-perchel
./node_modules/.bin/tsc -p apps/floristeria-emilia-perchel/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (turnos y mañana corta del lunes) y los datos de la ficha antes de publicar.
3. Revisar las 10 fotos publicadas (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `floristeria-emilia-perchel.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
